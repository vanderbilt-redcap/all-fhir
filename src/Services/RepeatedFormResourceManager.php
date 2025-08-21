<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Constants;

/**
 * RepeatedFormResourceManager
 * 
 * High-level coordinator service that provides a unified API for managing FHIR resources 
 * stored in REDCap repeated forms, combining data access, synchronization, and queue management.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Serves as the main entry point for FHIR resource management operations
 * - Coordinates between data access layer, synchronization service, and queue manager
 * - Provides user-friendly API methods that handle complex multi-step operations
 * - Manages resource lifecycle from creation to archival
 * - Generates comprehensive project summaries and reports
 * 
 * CORE OPERATIONS:
 * 
 * RESOURCE MAPPING MANAGEMENT:
 * - Add/update/remove mapping resources with automatic synchronization
 * - Handles MRN addition with automatic resource instance creation
 * - Manages the complete lifecycle of resource mappings
 * 
 * RESOURCE STATUS & MONITORING:
 * - Provides resource status by MRN and resource type
 * - Generates project-wide summaries with status counts
 * - Tracks resource metadata across all patients
 * 
 * DATA OPERATIONS:
 * - Retrieves FHIR resource files from REDCap edocs
 * - Exports resource data in structured formats
 * - Handles bulk retry operations for failed resources
 * - Manages resource archival and cleanup
 * 
 * SYNCHRONIZATION & MAINTENANCE:
 * - Performs full project synchronization between config and data
 * - Identifies and resolves data inconsistencies
 * - Provides automated cleanup for orphaned instances
 * 
 * USER INTERFACE SUPPORT:
 * - Maintains MRN-based external API (user-friendly)
 * - Handles record ID conversion internally (REDCap-compatible)
 * - Provides detailed error handling and status reporting
 * 
 * USAGE EXAMPLES:
 * - $manager->addMappingResource($resource) - Add new FHIR resource mapping
 * - $manager->getResourceStatus($mrn) - Get all resources for an MRN
 * - $manager->retryFailedResource($mrn, $type, $instance) - Retry failed fetch
 * - $manager->getProjectSummary() - Get complete project status overview
 * - $manager->exportResourceData($mrn) - Export all FHIR data for MRN
 */
class RepeatedFormResourceManager
{
    private string $projectId;

    public function __construct(
        private FhirSnapshot $module,
        private RepeatedFormDataAccessor $dataAccessor,
        private ResourceSynchronizationService $syncService,
        private QueueManager $queueManager,
    ) {
        $this->projectId = $module->getProjectId();
    }

    /**
     * Get all MRNs in the project
     * 
     * @return array Array of MRN strings
     */
    public function getAllMrns(): array
    {
        return $this->dataAccessor->getAllMrns();
    }

    public function addMappingResource(MappingResource $resource): array
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        return $this->syncService->syncMappingResourceCreated($resource, $existingMrns);
    }

    public function updateMappingResource(MappingResource $resource): array
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        return $this->syncService->syncMappingResourceUpdated($resource, $existingMrns);
    }

    public function removeMappingResource(MappingResource $resource): array
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        return $this->syncService->syncMappingResourceDeleted($resource, $existingMrns);
    }

    public function addMrn(string $mrn, array $activeResources): array
    {
        return $this->syncService->syncNewMrn($mrn, $activeResources);
    }

    public function getResourceStatus(string $mrn, ?string $resourceType = null): array
    {
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return [];
        }
        
        if ($resourceType) {
            $metadata = $this->dataAccessor->getResourceMetadataByType($recordId, $resourceType);
            return array_map(fn($item) => $item->toArray(), $metadata);
        }
        
        $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
        return array_map(fn($item) => $item->toArray(), $allMetadata);
    }

    public function getResourceFile(string $mrn, string $resourceType, int $repeatInstance): ?array
    {
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return null;
        }
        
        $metadata = $this->dataAccessor->getResourceMetadata($recordId, $resourceType, $repeatInstance);
        
        if (!$metadata || !$metadata->getEdocId()) {
            return null;
        }
        
        $fileContent = \REDCap::getFile($metadata->getEdocId());
        
        if (!$fileContent) {
            return null;
        }
        
        return [
            'content' => $fileContent,
            'metadata' => $metadata->toArray(),
            'edoc_id' => $metadata->getEdocId()
        ];
    }

    public function retryFailedResource(string $mrn, string $resourceType, int $repeatInstance): bool
    {
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return false;
        }
        
        $metadata = $this->dataAccessor->getResourceMetadata($recordId, $resourceType, $repeatInstance);
        
        if (!$metadata || !$metadata->isFailed()) {
            return false;
        }
        
        // Mark as pending for retry
        $retryMetadata = $metadata
            ->withStatus(FhirResourceMetadata::STATUS_PENDING); // Clear previous error
        
        $this->dataAccessor->saveResourceMetadata($recordId, $retryMetadata);
        
        // Create simple generic task only if none pending
        if (!$this->hasPendingFhirFetchTask()) {
            $task = \Vanderbilt\FhirSnapshot\ValueObjects\Task::create(Constants::TASK_FHIR_FETCH, [
                'trigger' => 'retry_single_resource'
            ]);
            
            $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
        }
        
        return true; // Retry marked as pending, will be processed by existing or new task
    }

    public function bulkRetryFailed(array $filters = []): int
    {
        $allMrns = $this->dataAccessor->getAllMrns();
        $retriedCount = 0;
        
        // Mark all failed resources as pending
        foreach ($allMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            
            foreach ($allMetadata as $metadata) {
                if (!$metadata->isFailed()) {
                    continue;
                }
                
                if (!empty($filters['resource_type']) && $metadata->getResourceType() !== $filters['resource_type']) {
                    continue;
                }
                
                // Mark as pending for retry
                $retryMetadata = $metadata
                    ->withStatus(FhirResourceMetadata::STATUS_PENDING)
                    ->withErrorMessage(null); // Clear previous error
                
                $this->dataAccessor->saveResourceMetadata($recordId, $retryMetadata);
                $retriedCount++;
            }
        }
        
        // Create simple generic retry task for all failed resources only if none pending
        if ($retriedCount > 0 && !$this->hasPendingFhirFetchTask()) {
            $task = \Vanderbilt\FhirSnapshot\ValueObjects\Task::create(Constants::TASK_FHIR_FETCH, [
                'trigger' => 'bulk_retry_failed'
            ]);
            
            $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
        }
        
        return $retriedCount;
    }

    public function performFullSync(array $configuredResources): array
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        $comparison = $this->syncService->compareConfiguredVsExisting($configuredResources, $existingMrns);
        
        $syncResults = [
            'created_tasks' => [],
            'cleaned_instances' => 0,
            'comparison' => $comparison
        ];
        
        $createdInstances = 0;
        
        // Create missing instances
        foreach ($comparison['missing_instances'] as $missing) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($missing['mrn']);
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($recordId);
            $metadata = FhirResourceMetadata::create($missing['resource_type'], $nextInstance);
            
            $this->dataAccessor->saveResourceMetadata($recordId, $metadata);
            $createdInstances++;
        }
        
        // Create simple generic sync task if there are missing instances and no pending task
        if ($createdInstances > 0 && !$this->hasPendingFhirFetchTask()) {
            $task = \Vanderbilt\FhirSnapshot\ValueObjects\Task::create(Constants::TASK_FHIR_FETCH, [
                'trigger' => 'full_sync'
            ]);
            
            $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
            $syncResults['created_tasks'][] = $task->toArray();
        }
        
        $syncResults['cleaned_instances'] = $this->syncService->cleanupOrphanedInstances($comparison['orphaned_instances']);
        
        return $syncResults;
    }

    public function getProjectSummary(): array
    {
        $allMrns = $this->dataAccessor->getAllMrns();
        $summary = [
            'total_mrns' => count($allMrns),
            'mrn_summaries' => [],
            'overall_status_counts' => [
                FhirResourceMetadata::STATUS_PENDING => 0,
                FhirResourceMetadata::STATUS_FETCHING => 0,
                FhirResourceMetadata::STATUS_COMPLETED => 0,
                FhirResourceMetadata::STATUS_FAILED => 0,
                FhirResourceMetadata::STATUS_OUTDATED => 0,
                FhirResourceMetadata::STATUS_DELETED => 0
            ]
        ];
        
        foreach ($allMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue; // Skip if no record ID found for this MRN
            }
            
            $statusCounts = $this->dataAccessor->getResourceStatusCounts($recordId);
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            
            $summary['mrn_summaries'][$mrn] = [
                'status_counts' => $statusCounts,
                'total_resources' => count($allMetadata),
                'resource_types' => array_unique(array_map(fn(FhirResourceMetadata $m) => $m->getMappingType(), $allMetadata))
            ];
            
            foreach ($statusCounts as $status => $count) {
                $summary['overall_status_counts'][$status] += $count;
            }
        }
        
        $syncStatus = $this->syncService->getProjectSyncStatus();
        $summary['sync_status'] = $syncStatus;
        
        return $summary;
    }

    public function exportResourceData(string $mrn, array $resourceTypes = []): array
    {
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return [
                'mrn' => $mrn,
                'export_timestamp' => date('c'),
                'total_resources' => 0,
                'resources' => [],
                'error' => 'No record found for MRN: ' . $mrn
            ];
        }
        
        $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
        $exportData = [];
        
        foreach ($allMetadata as $metadata) {
            if (!empty($resourceTypes) && !in_array($metadata->getResourceType(), $resourceTypes)) {
                continue;
            }
            
            if (!$metadata->isCompleted() || !$metadata->getEdocId()) {
                continue;
            }
            
            $eDocFile = \REDCap::getFile($metadata->getEdocId());
            $fileContent = $eDocFile[2] ?? null; // get the content of the eDoc file
            if ($fileContent) {
                $exportData[] = [
                    'metadata' => $metadata->toArray(),
                    'data' => json_decode($fileContent, true)
                ];
            }
        }
        
        return [
            'mrn' => $mrn,
            'export_timestamp' => date('c'),
            'total_resources' => count($exportData),
            'resources' => $exportData
        ];
    }

    public function archiveCompletedResources(array $filters = []): int
    {
        $allMrns = $this->dataAccessor->getAllMrns();
        $archivedCount = 0;
        
        foreach ($allMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            
            foreach ($allMetadata as $metadata) {
                if (!$metadata->isCompleted()) {
                    continue;
                }
                
                if (!empty($filters['resource_type']) && $metadata->getResourceType() !== $filters['resource_type']) {
                    continue;
                }
                
                if (!empty($filters['older_than_days'])) {
                    $fetchDate = $metadata->getFetchDate();
                    if (!$fetchDate || strtotime($fetchDate) > strtotime("-{$filters['older_than_days']} days")) {
                        continue;
                    }
                }
                
                $archivedMetadata = $metadata->withStatus(FhirResourceMetadata::STATUS_DELETED);
                $this->dataAccessor->saveResourceMetadata($recordId, $archivedMetadata);
                $archivedCount++;
            }
        }
        
        return $archivedCount;
    }

    /**
     * Check if there are any pending FHIR fetch tasks in the queue
     * 
     * @return bool True if there is at least one pending FHIR fetch task
     */
    private function hasPendingFhirFetchTask(): bool
    {
        $pendingTasks = $this->queueManager->getTasksByStatus('pending');
        
        foreach ($pendingTasks as $task) {
            if ($task->getKey() === Constants::TASK_FHIR_FETCH) {
                return true;
            }
        }
        
        return false;
    }
}