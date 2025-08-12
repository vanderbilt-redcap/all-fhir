<?php

namespace Vanderbilt\FhirSnapshot\Queue;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\Queue\Processors\TaskProcessorInterface;
use Vanderbilt\FhirSnapshot\Queue\Processors\TaskProcessorResult;
use Vanderbilt\FhirSnapshot\Queue\Processors\FhirFetchProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\ArchiveProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\EmailNotificationProcessor;
use Vanderbilt\REDCap\Classes\SystemMonitors\ResourceMonitor;
use Exception;

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