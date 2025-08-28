<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use InvalidArgumentException;

/**
 * TaskFilter
 * 
 * Immutable value object representing task filtering criteria.
 * Encapsulates all task filtering logic in a reusable, type-safe manner.
 * 
 * DESIGN PRINCIPLES:
 * - Immutable: All updates return new instances
 * - Type-safe: Strong typing for all properties
 * - Self-validating: Ensures filter values are valid
 * - Readable: Clear method names and structure
 * - Extensible: Easy to add new filter criteria
 */
class TaskFilter
{
    private string $status;
    private string $taskType;
    private string $searchQuery;
    private ?string $dateFrom;
    private ?string $dateTo;

    private const VALID_STATUSES = ['pending', 'processing', 'completed', 'failed'];
    private const VALID_TASK_TYPES = ['fhir_fetch', 'full_sync', 'retry_failed', 'archive', 'cleanup'];

    public function __construct(
        string $status = '',
        string $taskType = '',
        string $searchQuery = '',
        ?string $dateFrom = null,
        ?string $dateTo = null
    ) {
        $this->validateStatus($status);
        $this->validateTaskType($taskType);
        $this->validateDateRange($dateFrom, $dateTo);

        $this->status = $status;
        $this->taskType = $taskType;
        $this->searchQuery = trim($searchQuery);
        $this->dateFrom = $dateFrom;
        $this->dateTo = $dateTo;
    }

    public static function create(): self
    {
        return new self();
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['status'] ?? '',
            $data['task_type'] ?? '',
            $data['search_query'] ?? '',
            $data['date_from'] ?? null,
            $data['date_to'] ?? null
        );
    }

    public function withStatus(string $status): self
    {
        return new self(
            $status,
            $this->taskType,
            $this->searchQuery,
            $this->dateFrom,
            $this->dateTo
        );
    }

    public function withTaskType(string $taskType): self
    {
        return new self(
            $this->status,
            $taskType,
            $this->searchQuery,
            $this->dateFrom,
            $this->dateTo
        );
    }

    public function withSearchQuery(string $searchQuery): self
    {
        return new self(
            $this->status,
            $this->taskType,
            $searchQuery,
            $this->dateFrom,
            $this->dateTo
        );
    }

    public function withDateRange(?string $dateFrom, ?string $dateTo): self
    {
        return new self(
            $this->status,
            $this->taskType,
            $this->searchQuery,
            $dateFrom,
            $dateTo
        );
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getTaskType(): string
    {
        return $this->taskType;
    }

    public function getSearchQuery(): string
    {
        return $this->searchQuery;
    }

    public function getDateFrom(): ?string
    {
        return $this->dateFrom;
    }

    public function getDateTo(): ?string
    {
        return $this->dateTo;
    }

    public function hasStatus(): bool
    {
        return !empty($this->status);
    }

    public function hasTaskType(): bool
    {
        return !empty($this->taskType);
    }

    public function hasSearchQuery(): bool
    {
        return !empty($this->searchQuery);
    }

    public function hasDateRange(): bool
    {
        return $this->dateFrom !== null || $this->dateTo !== null;
    }

    public function hasAnyFilter(): bool
    {
        return $this->hasStatus() || 
               $this->hasTaskType() || 
               $this->hasSearchQuery() || 
               $this->hasDateRange();
    }

    /**
     * Apply filters to an array of tasks
     * 
     * @param array $tasks Array of Task objects or arrays
     * @return array Filtered tasks
     */
    public function apply(array $tasks): array
    {
        if (!$this->hasAnyFilter()) {
            return $tasks;
        }

        return array_filter($tasks, function ($task) {
            $taskData = is_array($task) ? $task : $task->toArray();

            // Filter by status
            if ($this->hasStatus() && $taskData['status'] !== $this->status) {
                return false;
            }

            // Filter by task type
            if ($this->hasTaskType() && $taskData['key'] !== $this->taskType) {
                return false;
            }

            // Filter by search query (ID or key)
            if ($this->hasSearchQuery()) {
                $query = strtolower($this->searchQuery);
                $id = strtolower($taskData['id'] ?? '');
                $key = strtolower($taskData['key'] ?? '');
                
                if (strpos($id, $query) === false && strpos($key, $query) === false) {
                    return false;
                }
            }

            // Filter by date range
            if ($this->hasDateRange()) {
                $createdAt = $taskData['created_at'] ?? '';
                $taskDate = strtotime($createdAt);
                
                if ($this->dateFrom && $taskDate < strtotime($this->dateFrom)) {
                    return false;
                }
                
                if ($this->dateTo && $taskDate > strtotime($this->dateTo . ' 23:59:59')) {
                    return false;
                }
            }

            return true;
        });
    }

    public function toArray(): array
    {
        return [
            'status' => $this->status,
            'task_type' => $this->taskType,
            'search_query' => $this->searchQuery,
            'date_from' => $this->dateFrom,
            'date_to' => $this->dateTo,
            'has_filters' => $this->hasAnyFilter()
        ];
    }

    public static function getValidStatuses(): array
    {
        return self::VALID_STATUSES;
    }

    public static function getValidTaskTypes(): array
    {
        return self::VALID_TASK_TYPES;
    }

    private function validateStatus(string $status): void
    {
        if (!empty($status) && !in_array($status, self::VALID_STATUSES)) {
            throw new InvalidArgumentException(
                sprintf('Invalid status "%s". Valid statuses: %s', 
                    $status, 
                    implode(', ', self::VALID_STATUSES)
                )
            );
        }
    }

    private function validateTaskType(string $taskType): void
    {
        if (!empty($taskType) && !in_array($taskType, self::VALID_TASK_TYPES)) {
            throw new InvalidArgumentException(
                sprintf('Invalid task type "%s". Valid types: %s', 
                    $taskType, 
                    implode(', ', self::VALID_TASK_TYPES)
                )
            );
        }
    }

    private function validateDateRange(?string $dateFrom, ?string $dateTo): void
    {
        if ($dateFrom && !strtotime($dateFrom)) {
            throw new InvalidArgumentException('Invalid date format for dateFrom');
        }

        if ($dateTo && !strtotime($dateTo)) {
            throw new InvalidArgumentException('Invalid date format for dateTo');
        }

        if ($dateFrom && $dateTo && strtotime($dateFrom) > strtotime($dateTo)) {
            throw new InvalidArgumentException('dateFrom must be before or equal to dateTo');
        }
    }
}