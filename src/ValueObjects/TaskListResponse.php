<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use Vanderbilt\FhirSnapshot\ValueObjects\Task;

/**
 * TaskListResponse
 * 
 * Immutable value object representing a paginated list of tasks response.
 * Provides structured access to task lists, pagination, and filtering information.
 * 
 * DESIGN PRINCIPLES:
 * - Immutable: All updates return new instances
 * - Type-safe: Strong typing for all properties
 * - Self-validating: Ensures data consistency
 * - Readable: Clear method names and structure
 * - Consistent: Follows same pattern as other response VOs
 * 
 * USAGE PATTERNS:
 * - Success: TaskListResponse::success($tasks, $pagination, $filters)
 * - Failure: TaskListResponse::failure($message)
 * - Empty: TaskListResponse::empty($pagination, $filters)
 */
class TaskListResponse
{
    private bool $success;
    private array $tasks;
    private TaskPaginationInfo $pagination;
    private ?TaskFilter $filters;
    private string $message;

    public function __construct(
        bool $success,
        array $tasks,
        TaskPaginationInfo $pagination,
        ?TaskFilter $filters = null,
        string $message = ''
    ) {
        $this->success = $success;
        $this->tasks = $tasks;
        $this->pagination = $pagination;
        $this->filters = $filters;
        $this->message = $message;
    }

    public static function success(
        array $tasks, 
        TaskPaginationInfo $pagination, 
        ?TaskFilter $filters = null,
        string $message = 'Tasks retrieved successfully'
    ): self {
        return new self(true, $tasks, $pagination, $filters, $message);
    }

    public static function failure(
        string $message = 'Failed to retrieve tasks',
        ?TaskPaginationInfo $pagination = null,
        ?TaskFilter $filters = null
    ): self {
        return new self(
            false, 
            [], 
            $pagination ?? TaskPaginationInfo::create(), 
            $filters, 
            $message
        );
    }

    public static function empty(
        TaskPaginationInfo $pagination,
        ?TaskFilter $filters = null,
        string $message = 'No tasks found'
    ): self {
        return new self(true, [], $pagination, $filters, $message);
    }

    public static function fromArray(array $data): self
    {
        $tasks = [];
        if (isset($data['tasks']) && is_array($data['tasks'])) {
            foreach ($data['tasks'] as $taskData) {
                if (is_array($taskData)) {
                    $tasks[] = Task::fromArray($taskData);
                } elseif ($taskData instanceof Task) {
                    $tasks[] = $taskData;
                }
            }
        }

        $pagination = isset($data['pagination']) 
            ? TaskPaginationInfo::fromArray($data['pagination'])
            : TaskPaginationInfo::create();

        $filters = isset($data['filters']) 
            ? TaskFilter::fromArray($data['filters'])
            : null;

        return new self(
            $data['success'] ?? false,
            $tasks,
            $pagination,
            $filters,
            $data['message'] ?? ''
        );
    }

    public function withTasks(array $tasks): self
    {
        return new self($this->success, $tasks, $this->pagination, $this->filters, $this->message);
    }

    public function withPagination(TaskPaginationInfo $pagination): self
    {
        return new self($this->success, $this->tasks, $pagination, $this->filters, $this->message);
    }

    public function withFilters(?TaskFilter $filters): self
    {
        return new self($this->success, $this->tasks, $this->pagination, $filters, $this->message);
    }

    public function withMessage(string $message): self
    {
        return new self($this->success, $this->tasks, $this->pagination, $this->filters, $message);
    }

    public function isSuccess(): bool
    {
        return $this->success;
    }

    public function getTasks(): array
    {
        return $this->tasks;
    }

    public function getTaskCount(): int
    {
        return count($this->tasks);
    }

    public function getPagination(): TaskPaginationInfo
    {
        return $this->pagination;
    }

    public function getFilters(): ?TaskFilter
    {
        return $this->filters;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function isEmpty(): bool
    {
        return empty($this->tasks);
    }

    public function hasFilters(): bool
    {
        return $this->filters !== null && $this->filters->hasAnyFilter();
    }

    public function getTasksByStatus(string $status): array
    {
        return array_filter($this->tasks, function ($task) use ($status) {
            return $task->getStatus() === $status;
        });
    }

    public function getTasksByKey(string $key): array
    {
        return array_filter($this->tasks, function ($task) use ($key) {
            return $task->getKey() === $key;
        });
    }

    public function getStatusCounts(): array
    {
        $counts = [
            'total' => count($this->tasks),
            'pending' => 0,
            'processing' => 0,
            'completed' => 0,
            'failed' => 0
        ];

        foreach ($this->tasks as $task) {
            $status = $task->getStatus();
            if (isset($counts[$status])) {
                $counts[$status]++;
            }
        }

        return $counts;
    }

    public function toArray(): array
    {
        $tasksArray = [];
        foreach ($this->tasks as $task) {
            $tasksArray[] = $task->toArray();
        }

        return [
            'success' => $this->success,
            'tasks' => $tasksArray,
            'pagination' => $this->pagination->toArray(),
            'filters' => $this->filters ? $this->filters->toArray() : null,
            'message' => $this->message,
            'status_counts' => $this->getStatusCounts(),
            'task_count' => $this->getTaskCount(),
            'has_filters' => $this->hasFilters(),
            'is_empty' => $this->isEmpty()
        ];
    }

    public function toJson(): string
    {
        return json_encode($this->toArray(), JSON_PRETTY_PRINT);
    }
}