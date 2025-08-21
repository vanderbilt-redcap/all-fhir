<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Constants;

/**
 * ResourceSynchronizationService
 * 
 * Manages the lifecycle synchronization of FHIR resource mappings with REDCap data instances.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Orchestrates resource mapping lifecycle events (create, update, delete)
 * - Synchronizes mapping changes across all existing MRNs in the project
 * - Manages queue task creation for FHIR data fetching operations
 * - Handles resource instance state transitions and cleanup
 * - Provides project-wide synchronization status reporting
 * 
 * KEY WORKFLOWS:
 * 
 * MAPPING RESOURCE CREATED:
 * - Creates repeated form instances for all existing MRNs
 * - Enqueues simple generic FHIR fetch task (only if no pending task exists)
 * - Sets initial status to PENDING for all instances
 * 
 * MAPPING RESOURCE UPDATED:
 * - Marks existing instances as OUTDATED
 * - Creates new instances with updated mapping configuration
 * - Enqueues simple generic refetch task (only if no pending task exists)
 * 
 * MAPPING RESOURCE DELETED:
 * - Marks instances as DELETED (preserves audit trail)
 * - Removes pending tasks from processing queue
 * - Archives associated JSON payload files
 * 
 * NEW MRN ADDED:
 * - Creates instances for all active resource mappings
 * - Enqueues simple generic fetch task for new patient (only if no pending task exists)
 * 
 * SYNCHRONIZATION FEATURES:
 * - Compares configured vs existing resource instances
 * - Identifies missing, outdated, and orphaned instances  
 * - Provides cleanup utilities for data consistency
 * - Generates comprehensive sync status reports
 * 
 * USAGE:
 * - syncMappingResourceCreated($resource, $existingMrns)
 * - syncMappingResourceUpdated($resource, $existingMrns) 
 * - syncMappingResourceDeleted($resource, $existingMrns)
 * - compareConfiguredVsExisting($configuredResources, $existingMrns)
 */
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
        // Create metadata instances for all MRNs
        $createdInstances = 0;
        foreach ($existingMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($recordId);
            $metadata = FhirResourceMetadata::create(
                $resource->getName(),
                $resource->getResourceSpec(),
                $resource->getType(),
                $nextInstance
            );
            $this->dataAccessor->saveResourceMetadata($recordId, $metadata);
            $createdInstances++;
        }
        
        // Create simple generic FHIR fetch task only if none pending
        if (!$this->hasPendingFhirFetchTask()) {
            $task = Task::create(Constants::TASK_FHIR_FETCH, [
                'trigger' => 'new_mapping_resource' // Optional context for logging
            ]);
            
            $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
            
            return [$task];
        }
        
        return []; // No new task needed - existing pending task will handle it
    }

    public function syncMappingResourceUpdated(MappingResource $resource, array $existingMrns): array
    {
        // Mark existing instances as outdated and create new instances
        $updatedInstances = 0;
        $newInstances = 0;
        
        foreach ($existingMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            // Mark existing instances as outdated
            $existingMetadata = $this->dataAccessor->getResourceMetadataByType($recordId, $resource->getName());
            foreach ($existingMetadata as $metadata) {
                if (!$metadata->isDeleted()) {
                    $updatedMetadata = $metadata->withStatus(FhirResourceMetadata::STATUS_OUTDATED);
                    $this->dataAccessor->saveResourceMetadata($recordId, $updatedMetadata);
                    $updatedInstances++;
                }
            }
            
            // Create new instance for updated resource
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($recordId);
            $newMetadata = FhirResourceMetadata::create(
                $resource->getName(),
                $resource->getResourceSpec(),
                $resource->getType(),
                $nextInstance
            );
            $this->dataAccessor->saveResourceMetadata($recordId, $newMetadata);
            $newInstances++;
        }
        
        // Create simple generic FHIR fetch task for refetch only if none pending
        if (!$this->hasPendingFhirFetchTask()) {
            $task = Task::create(Constants::TASK_FHIR_FETCH, [
                'trigger' => 'updated_mapping_resource' // Optional context for logging
            ]);
            
            $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
            
            return [$task];
        }
        
        return []; // No new task needed - existing pending task will handle it
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
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return [];
        }
        
        // Create metadata instances for all active resources for this MRN
        $createdInstances = 0;
        foreach ($activeResources as $resource) {
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($recordId);
            $metadata = FhirResourceMetadata::create(
                $resource->getName(),
                $resource->getResourceSpec(),
                $resource->getType(),
                $nextInstance
            );
            $this->dataAccessor->saveResourceMetadata($recordId, $metadata);
            $createdInstances++;
        }
        
        // Create simple generic FHIR fetch task for new MRN only if none pending
        if (!$this->hasPendingFhirFetchTask()) {
            $task = Task::create(Constants::TASK_FHIR_FETCH, [
                'trigger' => 'new_mrn' // Optional context for logging
            ]);
            
            $this->queueManager->addTask($task->getKey(), $task->getParams(), $task->getMetadata());
            
            return [$task];
        }
        
        return []; // No new task needed - existing pending task will handle it
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
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            $existingMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
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
            $recordId = $this->dataAccessor->getRecordIdByMrn($instance['mrn']);
            if (!$recordId) {
                continue;
            }
            
            $existingMetadata = $this->dataAccessor->getResourceMetadata(
                $recordId,
                $instance['resource_type'],
                $instance['repeat_instance']
            );
            
            if ($existingMetadata && !$existingMetadata->isDeleted()) {
                $deletedMetadata = $existingMetadata->withStatus(FhirResourceMetadata::STATUS_DELETED);
                $this->dataAccessor->saveResourceMetadata($recordId, $deletedMetadata);
                $cleanedCount++;
            }
        }
        
        return $cleanedCount;
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
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            $metadata = $this->dataAccessor->getAllResourceMetadata($recordId);
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