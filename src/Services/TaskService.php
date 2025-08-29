<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskListResponse;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskOperationResponse;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskDetailsResponse;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskPaginationInfo;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskFilter;

/**
 * TaskService
 * 
 * Service layer for managing task operations, providing business logic
 * for task retrieval, filtering, pagination, and operations.
 * 
 * RESPONSIBILITIES:
 * - Task list management with filtering and pagination
 * - Task operation coordination (full sync, retry failed)
 * - Task detail retrieval and metadata enrichment
 * - Integration with QueueManager and task processors
 * - Business rule enforcement and validation
 * 
 * DESIGN PATTERNS:
 * - Service layer pattern for business logic
 * - Uses Value Objects for type safety and immutability
 * - Leverages existing QueueManager for persistence
 * - Integrates with existing processor architecture
 */
class TaskService
{

    public function __construct(
        private FhirSnapshot $module,
        private QueueManager $queueManager,
        private RepeatedFormDataAccessor $dataAccessor,
    ) {}

    /**
     * Retrieve a paginated and filtered list of tasks
     */
    public function listTasks(TaskFilter $filter, TaskPaginationInfo $pagination): TaskListResponse
    {
        try {
            // Get all tasks from queue manager
            $allTasks = $this->queueManager->getTasks();
            
            // Apply filters
            $filteredTasks = $filter->apply($allTasks);
            
            // Update pagination with filtered total
            $pagination = $pagination->withTotal(count($filteredTasks));
            
            // Apply pagination
            $paginatedTasks = array_slice(
                $filteredTasks, 
                $pagination->getOffset(), 
                $pagination->getLimit()
            );
            
            return TaskListResponse::success($paginatedTasks, $pagination, $filter);
            
        } catch (\Exception $e) {
            $this->module->log("Failed to list tasks: " . $e->getMessage(), []);
            return TaskListResponse::failure(
                'Failed to retrieve tasks: ' . $e->getMessage(),
                $pagination,
                $filter
            );
        }
    }

    /**
     * Get detailed information about a specific task
     */
    public function getTaskDetails(string $taskId): TaskDetailsResponse
    {
        try {
            $task = $this->queueManager->getTaskById($taskId);
            
            if (!$task) {
                return TaskDetailsResponse::notFound($taskId);
            }
            
            // Enrich with additional metadata
            $metadata = $this->enrichTaskMetadata($task);
            
            // Get related resources if applicable
            $relatedResources = $this->getRelatedResources($task);
            
            return TaskDetailsResponse::success($task, $metadata, 'Task details retrieved successfully', $relatedResources);
            
        } catch (\Exception $e) {
            $this->module->log("Failed to get task details for ID {$taskId}: " . $e->getMessage(), []);
            return TaskDetailsResponse::failure('Failed to retrieve task details: ' . $e->getMessage());
        }
    }

    /**
     * Queue a full synchronization task for background processing
     */
    public function queueFullSync(): TaskOperationResponse
    {
        try {
            // Get project ID and configured resources (following MrnController::performFullSync pattern)
            $projectId = $this->module->getProjectId();
            $configuredResources = $this->module->getAllConfiguredMappingResources();
            
            // Convert resources to serializable format
            $configuredResourcesData = [];
            foreach ($configuredResources as $resource) {
                $configuredResourcesData[] = $resource->toArray();
            }
            
            // Create full sync task and add to queue with required parameters
            $task = $this->queueManager->addTask(Constants::TASK_FULL_SYNC, [
                'project_id' => $projectId,
                'configured_resources' => $configuredResourcesData
            ], [
                'initiated_by' => 'task_service',
                'initiated_at' => date('Y-m-d H:i:s')
            ]);
            
            return TaskOperationResponse::taskCreationSuccess(
                $task->getId(),
                Constants::TASK_FULL_SYNC,
                ['queued_at' => date('Y-m-d H:i:s')]
            );
            
        } catch (\Exception $e) {
            $this->module->log("Failed to queue full sync task: " . $e->getMessage(), []);
            return TaskOperationResponse::failure('Failed to queue full sync task: ' . $e->getMessage());
        }
    }

    /**
     * Queue a retry failed resources operation for background processing
     * 
     * Finds all failed FhirResourceMetadata records across the project and creates 
     * a task to retry their fetch operations using the RetryFailedProcessor.
     */
    public function queueRetryFailedResources(): TaskOperationResponse
    {
        try {
            // Get count of failed FHIR resources (not failed tasks)
            $failedCount = $this->dataAccessor->countAllFailedResources();
            
            if ($failedCount === 0) {
                return TaskOperationResponse::success(
                    null,
                    ['failed_resources_count' => 0],
                    'No failed resources to retry'
                );
            }
            
            // Get project ID for the task parameters
            $projectId = $this->module->getProjectId();
            
            // Create retry failed task with proper parameters for RetryFailedProcessor
            $task = $this->queueManager->addTask(Constants::TASK_RETRY_FAILED, [
                'project_id' => $projectId,
                'operation_type' => 'bulk'
            ], [
                'initiated_by' => 'task_service',
                'initiated_at' => date('Y-m-d H:i:s'),
                'failed_resources_count' => $failedCount
            ]);
            
            return TaskOperationResponse::taskCreationSuccess(
                $task->getId(),
                Constants::TASK_RETRY_FAILED,
                [
                    'failed_resources_count' => $failedCount,
                    'queued_at' => date('Y-m-d H:i:s')
                ]
            );
            
        } catch (\Exception $e) {
            $this->module->log("Failed to queue retry failed resources: " . $e->getMessage(), []);
            return TaskOperationResponse::failure('Failed to queue retry failed resources: ' . $e->getMessage());
        }
    }

    /**
     * Delete a specific task
     */
    public function deleteTask(string $taskId): TaskOperationResponse
    {
        try {
            $task = $this->queueManager->getTaskById($taskId);
            
            if (!$task) {
                return TaskOperationResponse::failure("Task with ID '{$taskId}' not found");
            }
            
            // Only allow deletion of completed or failed tasks
            /* if (!$task->isCompleted() && !$task->isFailed()) {
                return TaskOperationResponse::failure(
                    'Only completed or failed tasks can be deleted. Current status: ' . $task->getStatus()
                );
            } */

            // Block deletion of processing tasks
            if ($task->isProcessing()) {
                return TaskOperationResponse::failure(
                    'Tasks being processed cannot be deleted. Current status: ' . $task->getStatus()
                );
            }
            
            $success = $this->queueManager->removeTask($taskId);
            
            if ($success) {
                return TaskOperationResponse::success(
                    null,
                    ['deleted_task_id' => $taskId],
                    'Task deleted successfully'
                );
            } else {
                return TaskOperationResponse::failure('Failed to delete task');
            }
            
        } catch (\Exception $e) {
            $this->module->log("Failed to delete task {$taskId}: " . $e->getMessage(), []);
            return TaskOperationResponse::failure('Failed to delete task: ' . $e->getMessage());
        }
    }

    /**
     * Get queue statistics
     */
    public function getQueueStatistics(): array
    {
        return $this->queueManager->getQueueStatistics();
    }

    /**
     * Clean up completed tasks
     */
    public function cleanupCompletedTasks(): TaskOperationResponse
    {
        try {
            $removedCount = $this->queueManager->removeCompletedTasks();
            
            return TaskOperationResponse::success(
                null,
                ['removed_count' => $removedCount],
                "Cleanup completed. Removed {$removedCount} completed tasks."
            );
            
        } catch (\Exception $e) {
            $this->module->log("Failed to cleanup completed tasks: " . $e->getMessage(), []);
            return TaskOperationResponse::failure('Failed to cleanup completed tasks: ' . $e->getMessage());
        }
    }

    /**
     * Enrich task metadata with additional information
     */
    private function enrichTaskMetadata(Task $task): array
    {
        $metadata = [
            'task_age_minutes' => $this->calculateTaskAgeMinutes($task),
            'execution_status' => $this->getTaskExecutionStatus($task),
            'resource_context' => $this->getTaskResourceContext($task)
        ];
        
        // Add task-specific metadata
        switch ($task->getKey()) {
            case 'fhir_fetch':
                $metadata['fhir_fetch_metadata'] = $this->getFhirFetchMetadata($task);
                break;
            case 'full_sync':
                $metadata['full_sync_metadata'] = $this->getFullSyncMetadata($task);
                break;
            case 'retry_failed':
                $metadata['retry_failed_metadata'] = $this->getRetryFailedMetadata($task);
                break;
        }
        
        return $metadata;
    }

    /**
     * Get related resources for a task
     */
    private function getRelatedResources(Task $task): array
    {
        $resources = [];
        
        // For FHIR fetch tasks, include related MRN and resource information
        if ($task->getKey() === 'fhir_fetch') {
            $params = $task->getParams();
            if (isset($params['mrn'])) {
                $resources['mrn'] = $params['mrn'];
                $resources['resource_type'] = $params['resource_type'] ?? null;
            }
        }
        
        return $resources;
    }

    /**
     * Calculate task age in minutes
     */
    private function calculateTaskAgeMinutes(Task $task): int
    {
        try {
            $createdAt = new \DateTime($task->getCreatedAt());
            $now = new \DateTime();
            $interval = $createdAt->diff($now);
            
            return ($interval->days * 24 * 60) + 
                   ($interval->h * 60) + 
                   $interval->i;
        } catch (\Exception $e) {
            return 0;
        }
    }

    /**
     * Get task execution status information
     */
    private function getTaskExecutionStatus(Task $task): array
    {
        return [
            'status' => $task->getStatus(),
            'is_active' => $task->isPending() || $task->isProcessing(),
            'is_terminal' => $task->isCompleted() || $task->isFailed(),
            'can_be_deleted' => $task->isCompleted() || $task->isFailed(),
            'can_be_retried' => $task->isFailed()
        ];
    }

    /**
     * Get task resource context
     */
    private function getTaskResourceContext(Task $task): array
    {
        $params = $task->getParams();
        
        return [
            'has_mrn' => isset($params['mrn']),
            'has_resource_type' => isset($params['resource_type']),
            'has_record_id' => isset($params['record_id']),
            'parameter_count' => count($params)
        ];
    }

    /**
     * Get FHIR fetch specific metadata
     */
    private function getFhirFetchMetadata(Task $task): array
    {
        $params = $task->getParams();
        $metadata = $task->getMetadata();
        
        return [
            'mrn' => $params['mrn'] ?? null,
            'resource_type' => $params['resource_type'] ?? null,
            'record_id' => $params['record_id'] ?? null,
            'repeat_instance' => $params['repeat_instance'] ?? null,
            'fetch_url' => $metadata['fetch_url'] ?? null,
            'api_response_time' => $metadata['api_response_time'] ?? null
        ];
    }

    /**
     * Get full sync specific metadata
     */
    private function getFullSyncMetadata(Task $task): array
    {
        $metadata = $task->getMetadata();
        
        return [
            'total_mrns_processed' => $metadata['total_mrns_processed'] ?? 0,
            'missing_instances_created' => $metadata['missing_instances_created'] ?? 0,
            'orphaned_instances_cleaned' => $metadata['orphaned_instances_cleaned'] ?? 0,
            'execution_time_seconds' => $metadata['execution_time_seconds'] ?? 0
        ];
    }

    /**
     * Get retry failed specific metadata
     */
    private function getRetryFailedMetadata(Task $task): array
    {
        $metadata = $task->getMetadata();
        
        return [
            'failed_tasks_count' => $metadata['failed_tasks_count'] ?? 0,
            'retried_count' => $metadata['retried_count'] ?? 0,
            'execution_time_seconds' => $metadata['execution_time_seconds'] ?? 0
        ];
    }
}