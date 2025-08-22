<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Services\FhirResourceService;
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
 * - Forces resource fetching with real-time processing regardless of current status
 * - Provides reusable single resource fetching logic for both real-time and background operations
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
 * - $manager->forceFetchResourcesByMrns($mrns, $metadataFilter) - Real-time force fetch (MRN-based)
 * - $manager->forceFetchResourcesByRecordIds($recordIds, $metadataFilter) - Real-time force fetch (record ID-based)
 * - $manager->fetchSingleResourceRealTime($resource) - Fetch single resource with real-time processing
 * - $manager->getProjectSummary() - Get complete project status overview
 * - $manager->exportResourceData($mrn) - Export all FHIR data for MRN
 * - $manager->performFullSync($configuredResources) - Synchronize configuration with data
 * 
 * CONFIGURATION INTEGRATION:
 * - Use $module->getAllConfiguredMappingResources() to get configured resources
 * - Integrates with MappingResourceService for robust data conversion
 * - Supports legacy format migration and validation through main module helper
 */
class RepeatedFormResourceManager
{
    private string $projectId;

    /**
     * Initialize the resource manager with all required service dependencies
     * 
     * @param FhirSnapshot $module Main module instance providing project context and configuration
     * @param RepeatedFormDataAccessor $dataAccessor Low-level data access for REDCap repeated forms
     * @param ResourceSynchronizationService $syncService Orchestration service for resource lifecycle management
     * @param QueueManager $queueManager Asynchronous task management for FHIR operations
     * @param FhirResourceService $fhirResourceService Service for real-time FHIR resource fetching and storage
     */
    public function __construct(
        private FhirSnapshot $module,
        private RepeatedFormDataAccessor $dataAccessor,
        private ResourceSynchronizationService $syncService,
        private QueueManager $queueManager,
        private FhirResourceService $fhirResourceService,
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

    /**
     * Retry a specific failed resource by marking it as pending for re-fetch
     * 
     * @param string $mrn The Medical Record Number
     * @param string $resourceType The resource type name to retry
     * @param int $repeatInstance The repeat instance number
     * @return bool True if resource was marked for retry, false if not found or not failed
     */
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
        
        // Use extracted logic to mark as pending and create task
        $resources = [['record_id' => $recordId, 'metadata' => $metadata]];
        $this->markResourcesAsPending($resources);
        $this->ensureFetchTaskCreated('retry_single_resource');
        
        return true; // Retry marked as pending, will be processed by existing or new task
    }

    /**
     * Retry all failed resources with optional filtering by resource type
     * 
     * @param array $filters Optional filters including 'resource_type' to limit retry scope
     * @return int Number of resources marked for retry
     */
    public function bulkRetryFailed(array $filters = []): int
    {
        $allMrns = $this->dataAccessor->getAllMrns();
        $resourcesToRetry = [];
        
        // Find all failed resources that match filters
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
                
                if (!empty($filters['resource_type']) && $metadata->getResourceName() !== $filters['resource_type']) {
                    continue;
                }
                
                $resourcesToRetry[] = ['record_id' => $recordId, 'metadata' => $metadata];
            }
        }
        
        // Use extracted logic to mark resources as pending and create task
        $retriedCount = $this->markResourcesAsPending($resourcesToRetry);
        
        if ($retriedCount > 0) {
            $this->ensureFetchTaskCreated('bulk_retry_failed');
        }
        
        return $retriedCount;
    }

    /**
     * Perform full synchronization between configured resources and existing data
     * 
     * Coordinates comprehensive project synchronization by analyzing configured mapping 
     * resources against existing data instances, creating missing instances, cleaning up 
     * orphaned data, and creating background tasks for FHIR data fetching.
     * 
     * RECOMMENDED USAGE:
     * ```php
     * // Get configured resources using the centralized helper method
     * $configuredResources = $module->getAllConfiguredMappingResources();
     * $syncResults = $manager->performFullSync($configuredResources);
     * ```
     * 
     * SYNC OPERATIONS PERFORMED:
     * - Compares configured vs existing resource instances across all MRNs
     * - Creates missing resource instances for incomplete patient coverage
     * - Cleans up orphaned instances from removed mapping configurations
     * - Creates background tasks for FHIR data fetching when needed
     * - Provides detailed results for monitoring and reporting
     * 
     * @param MappingResource[] $configuredResources Array of configured mapping resources
     * @return array Sync results with task info, comparison data, and cleanup counts
     */
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
        
        // Create a lookup map for configured resources by name
        /** @var array<string, MappingResource> $resourceLookup */
        $resourceLookup = [];
        foreach ($configuredResources as $resource) {
            $resourceLookup[$resource->getName()] = $resource;
        }
        
        // Create missing instances
        foreach ($comparison['missing_instances'] as $missing) {
            /** @var array{mrn: string, resource_type: string} $missing */
            $recordId = $this->dataAccessor->getRecordIdByMrn($missing['mrn']);
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($recordId);
            
            // Find the corresponding MappingResource to get full details
            $mappingResource = $resourceLookup[$missing['resource_type']] ?? null;
            if (!$mappingResource) {
                // Skip if we can't find the mapping resource (shouldn't happen in normal flow)
                continue;
            }
            
            $metadata = FhirResourceMetadata::create(
                $mappingResource->getName(),
                $mappingResource->getResourceSpec(), 
                $mappingResource->getType(),
                $nextInstance
            );
            
            $this->dataAccessor->saveResourceMetadata($recordId, $metadata);
            $createdInstances++;
        }
        
        // Create simple generic sync task if there are missing instances and no pending task
        if ($createdInstances > 0) {
            $taskCreated = $this->ensureFetchTaskCreated('full_sync');
            if ($taskCreated) {
                $task = \Vanderbilt\FhirSnapshot\ValueObjects\Task::create(Constants::TASK_FHIR_FETCH, [
                    'trigger' => 'full_sync'
                ]);
                $syncResults['created_tasks'][] = $task->toArray();
            }
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
            if (!empty($resourceTypes) && !in_array($metadata->getResourceName(), $resourceTypes)) {
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
                
                if (!empty($filters['resource_type']) && $metadata->getResourceName() !== $filters['resource_type']) {
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
     * Force fetch all resources for specified record IDs with immediate real-time processing
     * 
     * Performs immediate FHIR resource fetching for all matching resources, regardless of their 
     * current status (completed, failed, etc.). This method processes resources in real-time
     * rather than creating background tasks, providing immediate results and status updates.
     * 
     * @param array $recordIds Array of REDCap record ID strings to force fetch resources for
     * @param array $metadataFilter Optional array of FhirResourceMetadata objects to limit scope (empty = all resources)
     * @return array Results containing detailed fetch results, timing info, and success/failure details per resource
     */
    public function forceFetchResourcesByRecordIds(array $recordIds, array $metadataFilter = []): array
    {
        if (empty($recordIds)) {
            return [
                'total_resources' => 0,
                'successful_fetches' => 0,
                'failed_fetches' => 0,
                'message' => 'No record IDs provided',
                'resource_results' => [],
                'timing_summary' => []
            ];
        }
        
        $resourcesToFetch = [];
        
        // Build filter lookup for efficient filtering if provided
        $filterLookup = [];
        if (!empty($metadataFilter)) {
            foreach ($metadataFilter as $filterMetadata) {
                $key = $filterMetadata->getResourceName() . '|' . $filterMetadata->getRepeatInstance();
                $filterLookup[$key] = true;
            }
        }
        
        // Collect all resources to fetch
        foreach ($recordIds as $recordId) {
            $mrn = $this->dataAccessor->getMrnByRecordId($recordId);
            if (!$mrn) {
                continue; // Skip if no MRN found for this record
            }
            
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            
            foreach ($allMetadata as $metadata) {
                // Apply metadata filter if specified
                if (!empty($filterLookup)) {
                    $key = $metadata->getResourceName() . '|' . $metadata->getRepeatInstance();
                    if (!isset($filterLookup[$key])) {
                        continue;
                    }
                }
                
                $resourcesToFetch[] = [
                    'record_id' => $recordId,
                    'mrn' => $mrn,
                    'metadata' => $metadata
                ];
            }
        }
        
        if (empty($resourcesToFetch)) {
            return [
                'total_resources' => 0,
                'successful_fetches' => 0,
                'failed_fetches' => 0,
                'message' => 'No resources found for specified record IDs and filters',
                'resource_results' => [],
                'timing_summary' => []
            ];
        }
        
        // Perform real-time fetching for each resource
        $startTime = microtime(true);
        $resourceResults = [];
        $successCount = 0;
        $failCount = 0;
        $apiTimes = [];
        
        foreach ($resourcesToFetch as $resource) {
            $fetchResult = $this->fetchSingleResourceRealTime($resource);
            
            $resourceResults[] = $fetchResult;
            $apiTimes[] = $fetchResult['api_time'];
            
            if ($fetchResult['success']) {
                $successCount++;
            } else {
                $failCount++;
            }
        }
        
        $totalTime = (microtime(true) - $startTime) * 1000; // Convert to milliseconds
        
        return [
            'total_resources' => count($resourcesToFetch),
            'successful_fetches' => $successCount,
            'failed_fetches' => $failCount,
            'message' => "Real-time fetch completed: {$successCount} successful, {$failCount} failed out of " . count($resourcesToFetch) . " resource(s) across " . count($recordIds) . " record(s)",
            'resource_results' => $resourceResults,
            'timing_summary' => [
                'total_time_ms' => $totalTime,
                'average_api_time_ms' => !empty($apiTimes) ? array_sum($apiTimes) / count($apiTimes) : 0,
                'min_api_time_ms' => !empty($apiTimes) ? min($apiTimes) : 0,
                'max_api_time_ms' => !empty($apiTimes) ? max($apiTimes) : 0
            ]
        ];
    }

    /**
     * Force fetch all resources for specified MRNs with immediate real-time processing (convenience wrapper)
     * 
     * Convenience method that provides MRN-based interface while internally using the record ID-based
     * implementation. Converts MRNs to record IDs and delegates to forceFetchResourcesByRecordIds()
     * for immediate real-time FHIR resource fetching.
     * 
     * @param array $mrns Array of MRN strings to force fetch resources for
     * @param array $metadataFilter Optional array of FhirResourceMetadata objects to limit scope (empty = all resources)
     * @return array Results containing detailed fetch results, timing info, and success/failure details per resource
     */
    public function forceFetchResourcesByMrns(array $mrns, array $metadataFilter = []): array
    {
        if (empty($mrns)) {
            return [
                'total_resources' => 0,
                'successful_fetches' => 0,
                'failed_fetches' => 0,
                'message' => 'No MRNs provided',
                'resource_results' => [],
                'timing_summary' => []
            ];
        }
        
        // Convert MRNs to record IDs
        $recordIds = [];
        $mrnToRecordMap = [];
        
        foreach ($mrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if ($recordId) {
                $recordIds[] = $recordId;
                $mrnToRecordMap[$recordId] = $mrn;
            }
        }
        
        if (empty($recordIds)) {
            return [
                'total_resources' => 0,
                'successful_fetches' => 0,
                'failed_fetches' => 0,
                'message' => 'No valid record IDs found for provided MRNs',
                'resource_results' => [],
                'timing_summary' => []
            ];
        }
        
        // Delegate to record ID-based implementation
        $result = $this->forceFetchResourcesByRecordIds($recordIds, $metadataFilter);
        
        // Update message to be MRN-oriented
        if ($result['total_resources'] > 0) {
            $result['message'] = "Real-time fetch completed: {$result['successful_fetches']} successful, {$result['failed_fetches']} failed out of {$result['total_resources']} resource(s) across " . count($mrns) . " MRN(s)";
        }
        
        return $result;
    }

    /**
     * Fetch a single resource in real-time with proper status management
     * 
     * Handles the complete lifecycle of fetching a single FHIR resource, including
     * status updates, error handling, and result reporting. This method is designed
     * to be reusable for both force-fetch operations and background processing.
     * 
     * Uses the existing FhirResourceMetadata object and passes it to FhirResourceService
     * to ensure consistent metadata handling without recreation.
     * 
     * @param array $resource Array with keys: record_id, mrn, metadata (FhirResourceMetadata)
     * @return array Result array with success status, timing info, and detailed results
     */
    public function fetchSingleResourceRealTime(array $resource): array
    {
        $startTime = microtime(true);
        $recordId = $resource['record_id'];
        $mrn = $resource['mrn'];
        $metadata = $resource['metadata'];
        
        try {
            // Get the mapping resource for this resource type
            $resourceType = $metadata->getResourceName();
            $mappingResource = $this->findMappingResourceForType($resourceType);
            
            // Use FhirResourceService to fetch and store the resource
            // Pass the existing metadata object instead of letting the service recreate it
            $result = $this->fhirResourceService->fetchAndStoreResource(
                $recordId,
                $mrn,
                $resourceType,
                $metadata->getRepeatInstance(),
                [
                    'metadata' => $metadata, // Pass the existing metadata object
                    'mapping_resource_id' => null, // Will be determined by the service
                    'mapping_resource' => $mappingResource, // Pass the mapping resource object
                    'is_refetch' => true // Force fetch is always a refetch
                ]
            );
            
            $apiTime = (microtime(true) - $startTime) * 1000; // Convert to milliseconds
            
            if ($result['success']) {
                return [
                    'success' => true,
                    'api_time' => $apiTime,
                    'payload_size' => $result['data']['data_size'] ?? 0,
                    'message' => $result['message'],
                    'record_id' => $recordId,
                    'mrn' => $mrn,
                    'resource_type' => $resourceType,
                    'repeat_instance' => $metadata->getRepeatInstance(),
                    'edoc_id' => $result['data']['edoc_id'] ?? null
                ];
            } else {
                return [
                    'success' => false,
                    'api_time' => $apiTime,
                    'error' => $result['message'],
                    'record_id' => $recordId,
                    'mrn' => $mrn,
                    'resource_type' => $resourceType,
                    'repeat_instance' => $metadata->getRepeatInstance()
                ];
            }
            
        } catch (\Exception $e) {
            // Let FhirResourceService handle the status update, but if it didn't reach the service,
            // we need to mark as failed manually
            $failedMetadata = $metadata
                ->withStatus(FhirResourceMetadata::STATUS_FAILED)
                ->withErrorMessage($e->getMessage());
            $this->dataAccessor->saveResourceMetadata($recordId, $failedMetadata);
            
            $apiTime = (microtime(true) - $startTime) * 1000;
            
            return [
                'success' => false,
                'api_time' => $apiTime,
                'error' => $e->getMessage(),
                'record_id' => $recordId,
                'mrn' => $mrn,
                'resource_type' => $metadata->getResourceName(),
                'repeat_instance' => $metadata->getRepeatInstance()
            ];
        }
    }

    /**
     * Find mapping resource configuration for a given resource type
     * 
     * Looks up the current project's mapping resources and attempts to match by resource type.
     * This is used to provide the correct mapping configuration for FHIR fetching operations.
     * 
     * @param string $resourceType FHIR resource type
     * @return MappingResource|null Matching mapping resource or null if not found
     */
    private function findMappingResourceForType(string $resourceType): ?MappingResource
    {
        try {
            // Get all configured mapping resources using the centralized helper method
            $configuredResources = $this->module->getAllConfiguredMappingResources();
            
            // Find the first mapping resource that matches the resource type/name
            foreach ($configuredResources as $mappingResource) {
                if ($mappingResource->getName() === $resourceType) {
                    return $mappingResource;
                }
            }
            
            return null;
            
        } catch (\Exception $e) {
            // Log error but don't fail the entire operation
            error_log("Error finding mapping resource for type {$resourceType}: " . $e->getMessage());
            return null;
        }
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

    /**
     * Mark multiple resources as pending and clear any error messages
     * 
     * @param array $resources Array of arrays with keys: record_id, metadata (FhirResourceMetadata)
     * @return int Number of resources marked as pending
     */
    private function markResourcesAsPending(array $resources): int
    {
        $markedCount = 0;
        
        foreach ($resources as $resource) {
            $recordId = $resource['record_id'];
            $metadata = $resource['metadata'];
            
            $pendingMetadata = $metadata
                ->withStatus(FhirResourceMetadata::STATUS_PENDING)
                ->withErrorMessage(null);
            
            $this->dataAccessor->saveResourceMetadata($recordId, $pendingMetadata);
            $markedCount++;
        }
        
        return $markedCount;
    }

    /**
     * Create FHIR fetch task if none are currently pending
     * 
     * @param string $trigger Description of what triggered this fetch operation
     * @return bool True if a new task was created, false if one already exists
     */
    private function ensureFetchTaskCreated(string $trigger): bool
    {
        if ($this->hasPendingFhirFetchTask()) {
            return false;
        }
        
        $task = \Vanderbilt\FhirSnapshot\ValueObjects\Task::create(Constants::TASK_FHIR_FETCH, [
            'trigger' => $trigger
        ]);
        
        $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
        return true;
    }

}