<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;

class RepeatedFormResourceManager
{
    private RepeatedFormDataAccessor $dataAccessor;
    private ResourceSynchronizationService $syncService;
    private QueueManager $queueManager;
    private string $projectId;

    public function __construct(
        RepeatedFormDataAccessor $dataAccessor,
        ResourceSynchronizationService $syncService,
        QueueManager $queueManager,
        string $projectId
    ) {
        $this->dataAccessor = $dataAccessor;
        $this->syncService = $syncService;
        $this->queueManager = $queueManager;
        $this->projectId = $projectId;
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
        
        $retryMetadata = $metadata
            ->withStatus(FhirResourceMetadata::STATUS_PENDING)
            ->withErrorMessage(null);
        
        $this->dataAccessor->saveResourceMetadata($recordId, $retryMetadata);
        
        $task = \Vanderbilt\FhirSnapshot\ValueObjects\Task::create('enhanced_fhir_fetch', [
            'record_id' => $recordId,
            'mrn' => $mrn,
            'resource_type' => $resourceType,
            'repeat_instance' => $repeatInstance,
            'is_retry' => true
        ]);
        
        $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
        
        return true;
    }

    public function bulkRetryFailed(array $filters = []): int
    {
        $allMrns = $this->dataAccessor->getAllMrns();
        $retriedCount = 0;
        
        foreach ($allMrns as $mrn) {
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($mrn);
            
            foreach ($allMetadata as $metadata) {
                if (!$metadata->isFailed()) {
                    continue;
                }
                
                if (!empty($filters['resource_type']) && $metadata->getResourceType() !== $filters['resource_type']) {
                    continue;
                }
                
                $success = $this->retryFailedResource($mrn, $metadata->getResourceType(), $metadata->getRepeatInstance());
                if ($success) {
                    $retriedCount++;
                }
            }
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
        
        foreach ($comparison['missing_instances'] as $missing) {
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($missing['mrn']);
            $metadata = FhirResourceMetadata::create($missing['resource_type'], $nextInstance);
            
            $this->dataAccessor->saveResourceMetadata($missing['mrn'], $metadata);
            
            $task = \Vanderbilt\FhirSnapshot\ValueObjects\Task::create('enhanced_fhir_fetch', [
                'mrn' => $missing['mrn'],
                'resource_type' => $missing['resource_type'],
                'repeat_instance' => $nextInstance,
                'is_sync_created' => true
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
            $statusCounts = $this->dataAccessor->getResourceStatusCounts($mrn);
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($mrn);
            
            $summary['mrn_summaries'][$mrn] = [
                'status_counts' => $statusCounts,
                'total_resources' => count($allMetadata),
                'resource_types' => array_unique(array_map(fn($m) => $m->getResourceType(), $allMetadata))
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
        $allMetadata = $this->dataAccessor->getAllResourceMetadata($mrn);
        $exportData = [];
        
        foreach ($allMetadata as $metadata) {
            if (!empty($resourceTypes) && !in_array($metadata->getResourceType(), $resourceTypes)) {
                continue;
            }
            
            if (!$metadata->isCompleted() || !$metadata->getEdocId()) {
                continue;
            }
            
            $fileContent = \REDCap::getFile($metadata->getEdocId());
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
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($mrn);
            
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
                $this->dataAccessor->saveResourceMetadata($mrn, $archivedMetadata);
                $archivedCount++;
            }
        }
        
        return $archivedCount;
    }
}