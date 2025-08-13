<?php

namespace Vanderbilt\FhirSnapshot\Queue;

use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;
use Exception;

class QueueProcessorResult
{
    private float $startTime;
    private bool $stoppedDueToResources = false;
    private ?Exception $exception = null;
    private array $taskResults = [];

    public function __construct()
    {
        $this->startTime = microtime(true);
    }

    public function addTaskResult(Task $task, TaskProcessorResult $result): void
    {
        $this->taskResults[] = [
            'task' => $task,
            'result' => $result,
            'processed_at' => microtime(true)
        ];
    }

    public function setStoppedDueToResources(bool $stopped): void
    {
        $this->stoppedDueToResources = $stopped;
    }

    public function wasStoppedDueToResources(): bool
    {
        return $this->stoppedDueToResources;
    }

    public function setException(Exception $exception): void
    {
        $this->exception = $exception;
    }

    public function getException(): ?Exception
    {
        return $this->exception;
    }

    public function hasException(): bool
    {
        return $this->exception !== null;
    }

    public function getTasksProcessed(): int
    {
        return count($this->taskResults);
    }

    public function getSuccessfulTasks(): int
    {
        return count(array_filter($this->taskResults, function($taskResult) {
            return $taskResult['result']->isSuccess();
        }));
    }

    public function getFailedTasks(): int
    {
        return count(array_filter($this->taskResults, function($taskResult) {
            return $taskResult['result']->isFailure();
        }));
    }

    public function getProcessingTime(): float
    {
        return microtime(true) - $this->startTime;
    }

    public function getTaskResults(): array
    {
        return $this->taskResults;
    }

    public function isSuccessful(): bool
    {
        return !$this->hasException() && $this->getFailedTasks() === 0;
    }

    public function toArray(): array
    {
        return [
            'tasks_processed' => $this->getTasksProcessed(),
            'successful_tasks' => $this->getSuccessfulTasks(),
            'failed_tasks' => $this->getFailedTasks(),
            'processing_time' => $this->getProcessingTime(),
            'stopped_due_to_resources' => $this->stoppedDueToResources,
            'has_exception' => $this->hasException(),
            'exception_message' => $this->exception?->getMessage(),
            'task_results' => array_map(function($taskResult) {
                return [
                    'task_id' => $taskResult['task']->getId(),
                    'task_key' => $taskResult['task']->getKey(),
                    'success' => $taskResult['result']->isSuccess(),
                    'message' => $taskResult['result']->getMessage(),
                    'processed_at' => $taskResult['processed_at']
                ];
            }, $this->taskResults)
        ];
    }
}