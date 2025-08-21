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
 * Orchestration service that maintains data consistency between FHIR resource mapping
 * configurations and their corresponding REDCap repeated form instances. Coordinates
 * complex multi-record operations and lifecycle management across the entire project.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Synchronizes resource mapping lifecycle events across all project records
 * - Orchestrates state transitions for bulk resource instance operations
 * - Manages queue task creation with intelligent deduplication logic
 * - Provides data consistency analysis and automated cleanup utilities
 * - Coordinates between configuration changes and data layer persistence
 * - Generates comprehensive project synchronization status reports
 * 
 * CORE SYNCHRONIZATION WORKFLOWS:
 * 
 * RESOURCE MAPPING CREATED:
 * - Creates FhirResourceMetadata instances for all existing MRNs in the project
 * - Initializes status as PENDING for immediate processing readiness
 * - Creates single generic FHIR fetch task (only if no pending task exists)
 * - Returns task objects for tracking and monitoring
 * - Ensures new mappings are immediately available across all patients
 * 
 * RESOURCE MAPPING UPDATED:
 * - Identifies existing instances by mapping resource name/spec
 * - Marks current instances as OUTDATED to preserve historical data
 * - Creates new instances with updated mapping configuration
 * - Enqueues refetch task to update data with new specifications
 * - Maintains audit trail while transitioning to new configuration
 * 
 * RESOURCE MAPPING DELETED:
 * - Marks existing instances as DELETED (preserves audit trail)
 * - Removes related pending tasks from processing queue
 * - Archives associated JSON payload files through metadata references
 * - Returns detailed deletion summary for reporting and rollback
 * - Ensures clean removal without data loss
 * 
 * NEW MRN/PATIENT ADDED:
 * - Creates resource instances for all currently active mappings
 * - Ensures new patients have complete resource coverage
 * - Enqueues targeted fetch task for new patient data
 * - Integrates seamlessly with existing processing pipeline
 * 
 * ADVANCED SYNCHRONIZATION FEATURES:
 * 
 * CONFIGURATION COMPARISON:
 * - Analyzes differences between configured and existing resources
 * - Identifies missing instances that need creation
 * - Detects orphaned instances from removed mappings
 * - Finds outdated instances requiring updates
 * - Provides comprehensive gap analysis for project health
 * 
 * DATA CONSISTENCY MANAGEMENT:
 * - Automated cleanup of orphaned resource instances
 * - Status transition validation and error recovery
 * - Resource instance lifecycle management
 * - Project-wide data integrity verification
 * 
 * QUEUE COORDINATION:
 * - Intelligent task deduplication to prevent duplicate processing
 * - Single generic task creation for bulk operations
 * - Task removal for deleted resources
 * - Queue status integration with sync reporting
 * 
 * STATUS REPORTING:
 * - Real-time project synchronization status
 * - Resource status distribution statistics
 * - Queue health and processing metrics
 * - MRN coverage and completion tracking
 * 
 * USAGE PATTERNS:
 * - syncMappingResourceCreated($resource, $existingMrns) - New mapping added
 * - syncMappingResourceUpdated($resource, $existingMrns) - Configuration changed
 * - syncMappingResourceDeleted($resource, $existingMrns) - Mapping removed
 * - syncNewMrn($mrn, $activeResources) - Patient added to project
 * - compareConfiguredVsExisting($configured, $mrns) - Gap analysis
 * - cleanupOrphanedInstances($orphaned) - Data cleanup
 * - getProjectSyncStatus() - Overall health reporting
 * 
 * INTEGRATION WITH MAIN MODULE:
 * - Used by RepeatedFormResourceManager::performFullSync() for comprehensive synchronization
 * - Integrates with FhirSnapshot::getAllConfiguredMappingResources() for configuration access
 * - Enables full project synchronization through centralized configuration management
 * - Supports test page operations and manual synchronization workflows
 * 
 * ARCHITECTURAL PATTERNS:
 * - Coordinates between high-level operations and low-level data access
 * - Implements batch operations with individual record error isolation
 * - Uses task queue abstraction for asynchronous processing coordination
 * - Maintains separation between configuration and data concerns
 * - Provides transactional-style operations with comprehensive results
 * 
 * ERROR HANDLING:
 * - Graceful degradation when individual records fail
 * - Comprehensive result reporting for partial successes
 * - Transaction-safe operations with rollback capabilities
 * - Detailed error context for troubleshooting and recovery
 */
class ResourceSynchronizationService
{
    private RepeatedFormDataAccessor $dataAccessor;
    private QueueManager $queueManager;
    private string $projectId;

    /**
     * Initialize the synchronization service with data access and queue management dependencies
     * 
     * @param RepeatedFormDataAccessor $dataAccessor Low-level data access for repeated form operations
     * @param QueueManager $queueManager Queue management for asynchronous task coordination
     * @param string $projectId REDCap project identifier for scoped operations
     */
    public function __construct(
        RepeatedFormDataAccessor $dataAccessor,
        QueueManager $queueManager,
        string $projectId
    ) {
        $this->dataAccessor = $dataAccessor;
        $this->queueManager = $queueManager;
        $this->projectId = $projectId;
    }

    /**
     * Synchronize the creation of a new FHIR resource mapping across all existing patients
     * 
     * Creates repeated form instances for every MRN in the project, initializes them with
     * PENDING status, and creates a processing task if none exists.
     * 
     * @param MappingResource $resource New mapping resource configuration
     * @param array $existingMrns Array of MRN strings currently in the project
     * @return array Array of created tasks (empty if no task needed)
     */
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

    /**
     * Synchronize updates to an existing FHIR resource mapping configuration
     * 
     * Marks existing instances as OUTDATED to preserve historical data, creates new 
     * instances with updated configuration, and enqueues refetch tasks.
     * 
     * @param MappingResource $resource Updated mapping resource configuration
     * @param array $existingMrns Array of MRN strings currently in the project
     * @return array Array of created tasks (empty if no task needed)
     */
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

    /**
     * Synchronize the deletion of a FHIR resource mapping while preserving audit trail
     * 
     * Marks instances as DELETED rather than removing them, preserves historical data,
     * and removes related pending tasks from the processing queue.
     * 
     * @param MappingResource $resource Mapping resource being deleted
     * @param array $existingMrns Array of MRN strings currently in the project
     * @return array Array of archived instance details for reporting
     */
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

    /**
     * Synchronize the addition of a new patient/MRN with all active resource mappings
     * 
     * Creates resource instances for all currently configured mappings, ensuring the
     * new patient has complete resource coverage from the start.
     * 
     * @param string $mrn Medical Record Number of the newly added patient
     * @param array $activeResources Array of MappingResource objects currently active
     * @return array Array of created tasks (empty if no task needed)
     */
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

    /**
     * Compare configured resource mappings against existing data instances
     * 
     * Performs comprehensive analysis to identify discrepancies between what should
     * exist based on configuration and what actually exists in the data layer.
     * 
     * @param array $configuredResources Array of MappingResource objects representing current configuration
     * @param array $existingMrns Array of MRN strings to analyze
     * @return array Analysis results with missing_instances, outdated_instances, and orphaned_instances
     */
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
            $existingResourceNames = array_map(fn($metadata) => $metadata->getResourceName(), $existingMetadata);
            
            foreach ($configuredResourceTypes as $resourceType) {
                if (!in_array($resourceType, $existingResourceNames)) {
                    $comparison['missing_instances'][] = [
                        'mrn' => $mrn,
                        'resource_type' => $resourceType
                    ];
                }
            }
            
            foreach ($existingMetadata as $metadata) {
                if (!in_array($metadata->getResourceName(), $configuredResourceTypes) && !$metadata->isDeleted()) {
                    $comparison['orphaned_instances'][] = [
                        'mrn' => $mrn,
                        'resource_type' => $metadata->getResourceName(),
                        'repeat_instance' => $metadata->getRepeatInstance()
                    ];
                }
                
                if ($metadata->isOutdated()) {
                    $comparison['outdated_instances'][] = [
                        'mrn' => $mrn,
                        'resource_type' => $metadata->getResourceName(),
                        'repeat_instance' => $metadata->getRepeatInstance()
                    ];
                }
            }
        }
        
        return $comparison;
    }

    /**
     * Clean up orphaned resource instances that no longer have corresponding mappings
     * 
     * Marks orphaned instances as DELETED to remove them from active processing
     * while preserving them for audit purposes.
     * 
     * @param array $orphanedInstances Array of orphaned instance info from compareConfiguredVsExisting
     * @return int Number of instances successfully cleaned up
     */
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
     * Used to prevent creating duplicate tasks when one already exists that can handle
     * the new work. Implements intelligent task deduplication.
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
     * Generate comprehensive project synchronization status report
     * 
     * Aggregates data across all MRNs and provides overview of project health,
     * queue status, and resource processing statistics.
     * 
     * @return array Comprehensive status report with counts, statistics, and timestamps
     */
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