<?php

namespace Vanderbilt\FhirSnapshot\Queue;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\Queue\Processors\TaskProcessorInterface;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;
use Vanderbilt\FhirSnapshot\Queue\Processors\FhirFetchProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\ArchiveProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\EmailNotificationProcessor;
use Vanderbilt\REDCap\Classes\SystemMonitors\ResourceMonitor;
use Exception;

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
 * - 'fhir_fetch' → FhirFetchProcessor (handles both batch and enhanced functionality)
 * - 'enhanced_fhir_fetch' → FhirFetchProcessor (legacy compatibility)
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
    private FhirSnapshot $module;
    private QueueManager $queueManager;
    private ResourceMonitor $resourceMonitor;
    
    /** @var TaskProcessorInterface[] */
    private array $processors = [];

    public function __construct(
        FhirSnapshot $module, 
        QueueManager $queueManager, 
        ResourceMonitor $resourceMonitor
    ) {
        $this->module = $module;
        $this->queueManager = $queueManager;
        $this->resourceMonitor = $resourceMonitor;
        
        $this->registerDefaultProcessors();
    }

    public function registerProcessor(TaskProcessorInterface $processor): void
    {
        $this->processors[$processor->getTaskKey()] = $processor;
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

        } catch (Exception $e) {
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
                $result = $processor->process($task);
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

        } catch (Exception $e) {
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
        return $this->processors[$taskKey] ?? null;
    }

    private function registerDefaultProcessors(): void
    {
        $this->registerProcessor(new FhirFetchProcessor($this->module));
        $this->registerProcessor(new ArchiveProcessor($this->module));
        $this->registerProcessor(new EmailNotificationProcessor($this->module));
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

    public function getRegisteredProcessors(): array
    {
        return $this->processors;
    }
}