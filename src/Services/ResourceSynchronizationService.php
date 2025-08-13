<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;

class ResourceSynchronizationService
{
    private RepeatedFormDataAccessor $dataAccessor;
    private QueueManager $queueManager;
    private string $projectId;

    public function __construct(
        RepeatedFormDataAccessor $dataAccessor,
        QueueManager $queueManager,
        string $projectId
    ) {
        $this->dataAccessor = $dataAccessor;
        $this->queueManager = $queueManager;
        $this->projectId = $projectId;
    }

    public function syncMappingResourceCreated(MappingResource $resource, array $existingMrns): array
    {
        $tasks = [];
        
        foreach ($existingMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($recordId);
            
            $metadata = FhirResourceMetadata::create($resource->getName(), $nextInstance);
            
            $this->dataAccessor->saveResourceMetadata($recordId, $metadata);
            
            $task = Task::create('enhanced_fhir_fetch', [
                'record_id' => $recordId,
                'mrn' => $mrn,
                'resource_type' => $resource->getName(),
                'repeat_instance' => $nextInstance,
                'mapping_resource_id' => $resource->getId()
            ]);
            
            $tasks[] = $task;
            $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
        }
        
        return $tasks;
    }

    public function syncMappingResourceUpdated(MappingResource $resource, array $existingMrns): array
    {
        $tasks = [];
        
        foreach ($existingMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            $existingMetadata = $this->dataAccessor->getResourceMetadataByType($recordId, $resource->getName());
            
            foreach ($existingMetadata as $metadata) {
                if (!$metadata->isDeleted()) {
                    $updatedMetadata = $metadata->withStatus(FhirResourceMetadata::STATUS_OUTDATED);
                    $this->dataAccessor->saveResourceMetadata($recordId, $updatedMetadata);
                }
            }
            
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($recordId);
            $newMetadata = FhirResourceMetadata::create($resource->getName(), $nextInstance);
            
            $this->dataAccessor->saveResourceMetadata($recordId, $newMetadata);
            
            $task = Task::create('enhanced_fhir_fetch', [
                'record_id' => $recordId,
                'mrn' => $mrn,
                'resource_type' => $resource->getName(),
                'repeat_instance' => $nextInstance,
                'mapping_resource_id' => $resource->getId(),
                'is_refetch' => true
            ]);
            
            $tasks[] = $task;
            $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
        }
        
        return $tasks;
    }

    public function syncMappingResourceDeleted(MappingResource $resource, array $existingMrns): array
    {
        $archivedInstances = [];
        
        foreach ($existingMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            $existingMetadata = $this->dataAccessor->getResourceMetadataByType($recordId, $resource->getName());
            
            foreach ($existingMetadata as $metadata) {
                if (!$metadata->isDeleted()) {
                    $archivedMetadata = $metadata->withStatus(FhirResourceMetadata::STATUS_DELETED);
                    $this->dataAccessor->saveResourceMetadata($recordId, $archivedMetadata);
                    
                    $archivedInstances[] = [
                        'record_id' => $recordId,
                        'mrn' => $mrn,
                        'resource_type' => $resource->getName(),
                        'repeat_instance' => $metadata->getRepeatInstance(),
                        'edoc_id' => $metadata->getEdocId()
                    ];
                }
            }
        }
        
        // Remove pending tasks for this mapping resource
        $pendingTasks = $this->queueManager->getPendingTasks();
        foreach ($pendingTasks as $task) {
            $params = $task->getParams();
            if (isset($params['resource_type']) && $params['resource_type'] === $resource->getName() &&
                isset($params['mapping_resource_id']) && $params['mapping_resource_id'] === $resource->getId()) {
                $this->queueManager->removeTask($task->getId());
            }
        }
        
        return $archivedInstances;
    }

    public function syncNewMrn(string $mrn, array $activeResources): array
    {
        $tasks = [];
        
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return $tasks;
        }
        
        foreach ($activeResources as $resource) {
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($recordId);
            
            $metadata = FhirResourceMetadata::create($resource->getName(), $nextInstance);
            
            $this->dataAccessor->saveResourceMetadata($recordId, $metadata);
            
            $task = Task::create('enhanced_fhir_fetch', [
                'record_id' => $recordId,
                'mrn' => $mrn,
                'resource_type' => $resource->getName(),
                'repeat_instance' => $nextInstance,
                'mapping_resource_id' => $resource->getId()
            ]);
            
            $tasks[] = $task;
            $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
        }
        
        return $tasks;
    }

    public function compareConfiguredVsExisting(array $configuredResources, array $existingMrns): array
    {
        $comparison = [
            'missing_instances' => [],
            'outdated_instances' => [],
            'orphaned_instances' => []
        ];
        
        $configuredResourceTypes = array_map(fn($resource) => $resource->getName(), $configuredResources);
        
        foreach ($existingMrns as $mrn) {
            $existingMetadata = $this->dataAccessor->getAllResourceMetadata($mrn);
            $existingResourceTypes = array_map(fn($metadata) => $metadata->getResourceType(), $existingMetadata);
            
            foreach ($configuredResourceTypes as $resourceType) {
                if (!in_array($resourceType, $existingResourceTypes)) {
                    $comparison['missing_instances'][] = [
                        'mrn' => $mrn,
                        'resource_type' => $resourceType
                    ];
                }
            }
            
            foreach ($existingMetadata as $metadata) {
                if (!in_array($metadata->getResourceType(), $configuredResourceTypes) && !$metadata->isDeleted()) {
                    $comparison['orphaned_instances'][] = [
                        'mrn' => $mrn,
                        'resource_type' => $metadata->getResourceType(),
                        'repeat_instance' => $metadata->getRepeatInstance()
                    ];
                }
                
                if ($metadata->isOutdated()) {
                    $comparison['outdated_instances'][] = [
                        'mrn' => $mrn,
                        'resource_type' => $metadata->getResourceType(),
                        'repeat_instance' => $metadata->getRepeatInstance()
                    ];
                }
            }
        }
        
        return $comparison;
    }

    public function cleanupOrphanedInstances(array $orphanedInstances): int
    {
        $cleanedCount = 0;
        
        foreach ($orphanedInstances as $instance) {
            $existingMetadata = $this->dataAccessor->getResourceMetadata(
                $instance['mrn'],
                $instance['resource_type'],
                $instance['repeat_instance']
            );
            
            if ($existingMetadata && !$existingMetadata->isDeleted()) {
                $deletedMetadata = $existingMetadata->withStatus(FhirResourceMetadata::STATUS_DELETED);
                $this->dataAccessor->saveResourceMetadata($instance['mrn'], $deletedMetadata);
                $cleanedCount++;
            }
        }
        
        return $cleanedCount;
    }

    public function getProjectSyncStatus(): array
    {
        $allMrns = $this->dataAccessor->getAllMrns();
        $stats = $this->queueManager->getQueueStatistics();
        $pendingTasks = $stats['pending'];
        $failedTasks = $stats['failed'];
        
        $statusCounts = [
            FhirResourceMetadata::STATUS_PENDING => 0,
            FhirResourceMetadata::STATUS_FETCHING => 0,
            FhirResourceMetadata::STATUS_COMPLETED => 0,
            FhirResourceMetadata::STATUS_FAILED => 0,
            FhirResourceMetadata::STATUS_OUTDATED => 0,
            FhirResourceMetadata::STATUS_DELETED => 0
        ];
        
        foreach ($allMrns as $mrn) {
            $metadata = $this->dataAccessor->getAllResourceMetadata($mrn);
            foreach ($metadata as $item) {
                $statusCounts[$item->getStatus()]++;
            }
        }
        
        return [
            'total_mrns' => count($allMrns),
            'pending_tasks' => $pendingTasks,
            'failed_tasks' => $failedTasks,
            'resource_status_counts' => $statusCounts,
            'sync_timestamp' => date('Y-m-d H:i:s')
        ];
    }
}