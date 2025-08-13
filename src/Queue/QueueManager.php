<?php

namespace Vanderbilt\FhirSnapshot\Queue;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use InvalidArgumentException;

/**
 * QueueManager
 * 
 * Manages a persistent task queue stored in REDCap project settings for background job processing.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Provides persistent task storage using REDCap project settings
 * - Manages task lifecycle (add, update, remove, retrieve)
 * - Supports task filtering and querying by status, key, or ID
 * - Provides queue statistics and monitoring capabilities
 * - Handles task serialization and deserialization
 * 
 * STORAGE MECHANISM:
 * - Uses REDCap project settings for persistence across requests
 * - Tasks stored as JSON-encoded arrays in 'tasks' setting key
 * - Automatically handles serialization of Task value objects
 * - Maintains data integrity through validation and error handling
 * 
 * CORE OPERATIONS:
 * 
 * TASK MANAGEMENT:
 * - addTask($key, $params, $metadata): Create and store new task
 * - updateTaskStatus($taskId, $status): Update task lifecycle status
 * - removeTask($taskId): Remove specific task from queue
 * - removeCompletedTasks(): Bulk cleanup of completed tasks
 * 
 * TASK RETRIEVAL:
 * - getNextPendingTask(): Get oldest pending task for processing
 * - getTasksByStatus($status): Filter tasks by lifecycle status
 * - getTasksByKey($key): Filter tasks by task type/processor
 * - getTaskById($taskId): Retrieve specific task by unique ID
 * 
 * QUEUE MONITORING:
 * - getQueueStatistics(): Get counts by status (pending, processing, etc.)
 * - clearQueue(): Remove all tasks (administrative function)
 * - getTasks(): Get all tasks in queue
 * 
 * INTEGRATION WITH PROCESSING SYSTEM:
 * - QueueProcessor calls getNextPendingTask() to retrieve work
 * - Task processors update status via updateTaskStatus()
 * - Failed tasks remain in queue for retry or manual intervention
 * - Completed tasks can be cleaned up periodically
 * 
 * ERROR HANDLING:
 * - Invalid task data is logged and skipped during retrieval
 * - Task validation ensures data integrity
 * - Graceful handling of corrupted or missing task data
 * - Atomic operations to prevent queue corruption
 * 
 * USAGE PATTERNS:
 * - Add work: $queueManager->addTask('fhir_fetch', $params)
 * - Process work: $task = $queueManager->getNextPendingTask()
 * - Update progress: $queueManager->updateTaskStatus($taskId, 'processing')
 * - Monitor queue: $stats = $queueManager->getQueueStatistics()
 * 
 * PERFORMANCE CONSIDERATIONS:
 * - Queue size should be monitored to prevent project settings bloat
 * - Completed tasks should be regularly cleaned up
 * - Large queues may impact REDCap project settings performance
 * - Consider external queue systems for high-volume scenarios
 */
class QueueManager
{
    private const TASKS_SETTING_KEY = 'tasks';

    private FhirSnapshot $module;

    public function __construct(FhirSnapshot $module)
    {
        $this->module = $module;
    }

    public function addTask(string $key, array $params = [], array $metadata = []): Task
    {
        $task = Task::create($key, $params, $metadata);
        $tasks = $this->getTasks();
        $tasks[] = $task;
        $this->saveTasks($tasks);
        
        return $task;
    }

    /**
     * @return Task[]
     */
    public function getTasks(): array
    {
        $tasksData = $this->module->getProjectSetting(self::TASKS_SETTING_KEY);
        
        if (!is_array($tasksData)) {
            return [];
        }

        $tasks = [];
        foreach ($tasksData as $taskData) {
            try {
                $tasks[] = Task::fromArray($taskData);
            } catch (InvalidArgumentException $e) {
                // Skip invalid tasks but log the error
                $this->module->logToFile("Invalid task data: " . $e->getMessage());
            }
        }

        return $tasks;
    }

    /**
     * @param Task[] $tasks
     */
    public function saveTasks(array $tasks): void
    {
        $tasksData = [];
        foreach ($tasks as $task) {
            if (!$task instanceof Task) {
                throw new InvalidArgumentException('All items must be Task instances');
            }
            $tasksData[] = $task->toArray();
        }

        $this->module->setProjectSetting(self::TASKS_SETTING_KEY, $tasksData);
    }

    public function updateTaskStatus(string $taskId, string $status): bool
    {
        $tasks = $this->getTasks();
        $taskFound = false;

        foreach ($tasks as $index => $task) {
            if ($task->getId() === $taskId) {
                $tasks[$index] = $task->withStatus($status);
                $taskFound = true;
                break;
            }
        }

        if ($taskFound) {
            $this->saveTasks($tasks);
        }

        return $taskFound;
    }

    public function updateTaskMetadata(string $taskId, array $metadata): bool
    {
        $tasks = $this->getTasks();
        $taskFound = false;

        foreach ($tasks as $index => $task) {
            if ($task->getId() === $taskId) {
                $tasks[$index] = $task->withMetadata($metadata);
                $taskFound = true;
                break;
            }
        }

        if ($taskFound) {
            $this->saveTasks($tasks);
        }

        return $taskFound;
    }

    public function getNextPendingTask(): ?Task
    {
        $tasks = $this->getTasks();

        foreach ($tasks as $task) {
            if ($task->isPending()) {
                return $task;
            }
        }

        return null;
    }

    /**
     * @return Task[]
     */
    public function getPendingTasks(): array
    {
        return array_filter($this->getTasks(), fn(Task $task) => $task->isPending());
    }

    /**
     * @return Task[]
     */
    public function getTasksByStatus(string $status): array
    {
        return array_filter($this->getTasks(), fn(Task $task) => $task->getStatus() === $status);
    }

    /**
     * @return Task[]
     */
    public function getTasksByKey(string $key): array
    {
        return array_filter($this->getTasks(), fn(Task $task) => $task->getKey() === $key);
    }

    public function getTaskById(string $taskId): ?Task
    {
        $tasks = $this->getTasks();

        foreach ($tasks as $task) {
            if ($task->getId() === $taskId) {
                return $task;
            }
        }

        return null;
    }

    public function removeTask(string $taskId): bool
    {
        $tasks = $this->getTasks();
        $originalCount = count($tasks);

        $tasks = array_filter($tasks, fn(Task $task) => $task->getId() !== $taskId);

        if (count($tasks) !== $originalCount) {
            $this->saveTasks(array_values($tasks)); // Re-index array
            return true;
        }

        return false;
    }

    public function removeCompletedTasks(): int
    {
        $tasks = $this->getTasks();
        $originalCount = count($tasks);

        $tasks = array_filter($tasks, fn(Task $task) => !$task->isCompleted());

        $removedCount = $originalCount - count($tasks);
        
        if ($removedCount > 0) {
            $this->saveTasks(array_values($tasks)); // Re-index array
        }

        return $removedCount;
    }

    public function getQueueStatistics(): array
    {
        $tasks = $this->getTasks();
        
        $stats = [
            'total' => count($tasks),
            'pending' => 0,
            'processing' => 0,
            'completed' => 0,
            'failed' => 0
        ];

        foreach ($tasks as $task) {
            switch ($task->getStatus()) {
                case Task::STATUS_PENDING:
                    $stats['pending']++;
                    break;
                case Task::STATUS_PROCESSING:
                    $stats['processing']++;
                    break;
                case Task::STATUS_COMPLETED:
                    $stats['completed']++;
                    break;
                case Task::STATUS_FAILED:
                    $stats['failed']++;
                    break;
            }
        }

        return $stats;
    }

    public function clearQueue(): void
    {
        $this->module->removeProjectSetting(self::TASKS_SETTING_KEY);
    }
}