<?php

namespace Vanderbilt\AllFhir\Queue;

use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\ValueObjects\Task;
use Vanderbilt\AllFhir\Queue\Processors\TaskProcessorInterface;
use Vanderbilt\AllFhir\ValueObjects\TaskProcessorResult;
use Vanderbilt\REDCap\Classes\SystemMonitors\ResourceMonitor;
use Exception;
use Throwable;

/**
 * QueueProcessor
 * 
 * Central coordinator that processes queued tasks by routing them to appropriate task processors.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Orchestrates the execution of queued background tasks
 * - Routes tasks to appropriate processors based on task key
 * - Manages task processor registration and discovery
 * - Handles task status updates throughout processing lifecycle
 * - Provides centralized error handling and logging
 * - Coordinates between QueueManager and individual TaskProcessors
 * 
 * PROCESSING WORKFLOW:
 * 
 * 1. TASK RETRIEVAL:
 *    - Retrieves next pending task from QueueManager
 *    - Validates task structure and required parameters
 *    - Updates task status to PROCESSING
 * 
 * 2. PROCESSOR ROUTING:
 *    - Matches task key to registered processor
 *    - Instantiates appropriate TaskProcessor implementation
 *    - Delegates execution to specialized processor
 * 
 * 3. EXECUTION MONITORING:
 *    - Monitors processor execution and captures results
 *    - Handles processor exceptions and errors
 *    - Updates task status based on processor results
 * 
 * 4. RESULT HANDLING:
 *    - Processes TaskProcessorResult from individual processors
 *    - Updates QueueManager with final task status
 *    - Logs execution results for monitoring and debugging
 * 
 * PROCESSOR MANAGEMENT:
 * - Maintains registry of available task processors
 * - Supports dynamic processor registration
 * - Handles processor instantiation and dependency injection
 * - Provides fallback handling for unknown task types
 * 
 * TASK ROUTING BY KEY:
 * - 'archive' → ArchiveProcessor  
 * - 'email_notification' → EmailNotificationProcessor
 * - Custom task keys → Custom processor implementations
 * 
 * ERROR HANDLING:
 * - Catches and handles processor exceptions gracefully
 * - Updates task status to FAILED with error details
 * - Prevents system crashes from individual task failures
 * - Provides detailed error logging for troubleshooting
 * 
 * BATCH PROCESSING:
 * - Can process multiple tasks in sequence
 * - Supports configurable batch sizes and timeouts
 * - Handles queue exhaustion and empty queue scenarios
 * - Provides processing statistics and monitoring
 * 
 * USAGE PATTERNS:
 * - Single task: $processor->processNextTask()
 * - Batch processing: $processor->processTasks($batchSize)
 * - Continuous processing: while loop with processNextTask()
 * - Scheduled execution: Cron job or REDCap hook integration
 * 
 * INTEGRATION POINTS:
 * - QueueManager: Task retrieval and status updates
 * - TaskProcessors: Specialized task execution
 * - Logging system: Monitoring and debugging
 * - REDCap module system: Module lifecycle and settings
 */
class QueueProcessor
{
    /** @var TaskProcessorInterface[] Lazy-loaded processor instances */
    private array $processorInstances = [];
    
    /** @var array Mapping of task keys to processor factory functions */
    private array $processorFactories = [];

    public function __construct(
        private AllFhir $module,
        private QueueManager $queueManager,
        private ResourceMonitor $resourceMonitor,
        array $processorFactories = []
    ) {
        $this->module = $module;
        $this->queueManager = $queueManager;
        $this->resourceMonitor = $resourceMonitor;
        $this->processorFactories = $processorFactories;
    }

    /**
     * Register a processor factory function for a specific task key
     */
    public function registerProcessorFactory(string $taskKey, callable $factory): void
    {
        $this->processorFactories[$taskKey] = $factory;
    }
    
    /**
     * Register an already instantiated processor (for compatibility)
     */
    public function registerProcessorInstance(TaskProcessorInterface $processor): void
    {
        $this->processorInstances[$processor->getTaskKey()] = $processor;
    }

    public function process(): QueueProcessorResult
    {
        $result = new QueueProcessorResult();
        $this->logInfo("Starting queue processing");
        
        try {
            while ($this->resourceMonitor->checkResources()) {
                $task = $this->queueManager->getNextPendingTask();
                
                if ($task === null) {
                    $this->logInfo("No pending tasks found");
                    break;
                }

                $this->logInfo("Processing task {$task->getId()} with key '{$task->getKey()}'");
                $taskResult = $this->processTask($task);
                $result->addTaskResult($task, $taskResult);

                // Short pause between tasks to prevent overwhelming the system
                usleep(100000); // 0.1 seconds
            }

            $resourceStatus = $this->resourceMonitor->getStatus();
            if (!$this->resourceMonitor->checkResources()) {
                $this->logInfo("Stopping queue processing due to resource constraints: " . json_encode($resourceStatus));
                $result->setStoppedDueToResources(true);
            }

        } catch (Throwable $e) {
            $this->logError("Exception during queue processing: " . $e->getMessage());
            $result->setException($e);
        }

        $this->logProcessingSummary($result);
        return $result;
    }

    private function processTask(Task $task): TaskProcessorResult
    {
        // Update task status to processing
        $this->queueManager->updateTaskStatus($task->getId(), Task::STATUS_PROCESSING);
        
        try {
            $processor = $this->getProcessorForTask($task);
            
            if ($processor === null) {
                $result = TaskProcessorResult::failure(
                    "No processor found for task key: {$task->getKey()}"
                );
            } else {
                $result = $processor->process($task, $this->resourceMonitor);
            }

            // Update task status based on result
            $newStatus = $result->isSuccess() ? Task::STATUS_COMPLETED : Task::STATUS_FAILED;
            $this->queueManager->updateTaskStatus($task->getId(), $newStatus);
            
            // Update task metadata with processing result
            $metadata = array_merge($task->getMetadata(), [
                'processed_at' => date('Y-m-d H:i:s'),
                'result' => $result->toArray()
            ]);
            $this->queueManager->updateTaskMetadata($task->getId(), $metadata);

            return $result;

        } catch (Throwable $e) {
            $this->logError("Exception while processing task {$task->getId()}: " . $e->getMessage());
            
            // Mark task as failed
            $this->queueManager->updateTaskStatus($task->getId(), Task::STATUS_FAILED);
            
            return TaskProcessorResult::failure(
                "Exception during task processing: " . $e->getMessage(),
                ['exception' => get_class($e)]
            );
        }
    }

    private function getProcessorForTask(Task $task): ?TaskProcessorInterface
    {
        $taskKey = $task->getKey();
        
        // Check if already instantiated
        if (isset($this->processorInstances[$taskKey])) {
            return $this->processorInstances[$taskKey];
        }
        
        // Check if processor factory is registered
        if (!isset($this->processorFactories[$taskKey])) {
            return null;
        }
        
        // Lazy load the processor using the factory function
        $factory = $this->processorFactories[$taskKey];
        try {
            $processor = $factory();
            
            // Cache the instance for future use
            $this->processorInstances[$taskKey] = $processor;
            
            return $processor;
        } catch (\Exception $e) {
            $this->logError("Failed to instantiate processor for task key '{$taskKey}': " . $e->getMessage());
            return null;
        }
    }


    private function logProcessingSummary(QueueProcessorResult $result): void
    {
        $summary = [
            'tasks_processed' => $result->getTasksProcessed(),
            'successful_tasks' => $result->getSuccessfulTasks(),
            'failed_tasks' => $result->getFailedTasks(),
            'stopped_due_to_resources' => $result->wasStoppedDueToResources(),
            'processing_time' => $result->getProcessingTime(),
            'memory_status' => $this->resourceMonitor->getMemoryMonitor()->isMemoryStatusHealthy() ? 'healthy' : 'exceeded',
            'time_status' => $this->resourceMonitor->getTimeMonitor()->withinThreshold() ? 'within_threshold' : 'exceeded'
        ];

        $this->logInfo("Queue processing completed: " . json_encode($summary));
    }

    private function logInfo(string $message): void
    {
        $this->module->log("[QUEUE_PROCESSOR][INFO] $message", []);
    }

    private function logError(string $message): void
    {
        $this->module->log("[QUEUE_PROCESSOR][ERROR] $message", []);
    }

    public function getQueueManager(): QueueManager
    {
        return $this->queueManager;
    }

    public function getResourceMonitor(): ResourceMonitor
    {
        return $this->resourceMonitor;
    }

    public function getRegisteredProcessorFactories(): array
    {
        return array_keys($this->processorFactories);
    }
    
    public function getInstantiatedProcessors(): array
    {
        return $this->processorInstances;
    }
}