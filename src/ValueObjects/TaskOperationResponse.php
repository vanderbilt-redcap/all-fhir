<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

/**
 * TaskOperationResponse
 * 
 * Immutable value object representing the response from task operations like
 * full sync, retry failed tasks, or other bulk operations.
 * 
 * DESIGN PRINCIPLES:
 * - Immutable: All updates return new instances
 * - Type-safe: Strong typing for all properties
 * - Self-validating: Ensures data consistency
 * - Readable: Clear method names and structure
 * - Consistent: Follows same pattern as other response VOs
 * 
 * USAGE PATTERNS:
 * - Success: TaskOperationResponse::success($taskId, $stats, $message)
 * - Failure: TaskOperationResponse::failure($message)
 * - With task ID: ->withTaskId($taskId)
 * - With stats: ->withStatistics($statistics)
 */
class TaskOperationResponse
{
    private bool $success;
    private ?string $taskId;
    private array $statistics;
    private string $message;
    private array $metadata;

    public function __construct(
        bool $success,
        ?string $taskId = null,
        array $statistics = [],
        string $message = '',
        array $metadata = []
    ) {
        $this->success = $success;
        $this->taskId = $taskId;
        $this->statistics = $statistics;
        $this->message = $message;
        $this->metadata = $metadata;
    }

    public static function success(
        ?string $taskId = null,
        array $statistics = [],
        string $message = 'Operation completed successfully'
    ): self {
        return new self(true, $taskId, $statistics, $message);
    }

    public static function failure(
        string $message = 'Operation failed',
        array $metadata = []
    ): self {
        return new self(false, null, [], $message, $metadata);
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['success'] ?? false,
            $data['task_id'] ?? null,
            $data['statistics'] ?? [],
            $data['message'] ?? '',
            $data['metadata'] ?? []
        );
    }

    public function withTaskId(?string $taskId): self
    {
        return new self(
            $this->success,
            $taskId,
            $this->statistics,
            $this->message,
            $this->metadata
        );
    }

    public function withStatistics(array $statistics): self
    {
        return new self(
            $this->success,
            $this->taskId,
            array_merge($this->statistics, $statistics),
            $this->message,
            $this->metadata
        );
    }

    public function withMessage(string $message): self
    {
        return new self(
            $this->success,
            $this->taskId,
            $this->statistics,
            $message,
            $this->metadata
        );
    }

    public function withMetadata(array $metadata): self
    {
        return new self(
            $this->success,
            $this->taskId,
            $this->statistics,
            $this->message,
            array_merge($this->metadata, $metadata)
        );
    }

    public function isSuccess(): bool
    {
        return $this->success;
    }

    public function getTaskId(): ?string
    {
        return $this->taskId;
    }

    public function hasTaskId(): bool
    {
        return $this->taskId !== null;
    }

    public function getStatistics(): array
    {
        return $this->statistics;
    }

    public function getStatistic(string $key, $default = null)
    {
        return $this->statistics[$key] ?? $default;
    }

    public function hasStatistics(): bool
    {
        return !empty($this->statistics);
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function getMetadata(): array
    {
        return $this->metadata;
    }

    public function getMetadataValue(string $key, $default = null)
    {
        return $this->metadata[$key] ?? $default;
    }

    public function hasMetadata(): bool
    {
        return !empty($this->metadata);
    }

    // Convenience methods for common statistics
    public function getTasksCreated(): int
    {
        return (int) $this->getStatistic('tasks_created', 0);
    }

    public function getTasksCompleted(): int
    {
        return (int) $this->getStatistic('tasks_completed', 0);
    }

    public function getTasksFailed(): int
    {
        return (int) $this->getStatistic('tasks_failed', 0);
    }

    public function getResourcesProcessed(): int
    {
        return (int) $this->getStatistic('resources_processed', 0);
    }

    public function getDurationSeconds(): float
    {
        return (float) $this->getStatistic('duration_seconds', 0.0);
    }

    public function getRetriedCount(): int
    {
        return (int) $this->getStatistic('retried_count', 0);
    }

    public function getMissingInstancesCreated(): int
    {
        return (int) $this->getStatistic('missing_instances_created', 0);
    }

    public function getOrphanedInstancesCleaned(): int
    {
        return (int) $this->getStatistic('orphaned_instances_cleaned', 0);
    }

    // Factory methods for specific operation types
    public static function fullSyncSuccess(
        string $taskId, 
        int $missingInstancesCreated = 0, 
        int $orphanedInstancesCleaned = 0,
        float $durationSeconds = 0.0
    ): self {
        return self::success(
            $taskId,
            [
                'missing_instances_created' => $missingInstancesCreated,
                'orphaned_instances_cleaned' => $orphanedInstancesCleaned,
                'duration_seconds' => $durationSeconds,
                'operation_type' => 'full_sync'
            ],
            "Full sync initiated successfully. Task ID: {$taskId}"
        );
    }

    public static function retryFailedSuccess(
        string $taskId,
        int $retriedCount = 0,
        float $durationSeconds = 0.0
    ): self {
        return self::success(
            $taskId,
            [
                'retried_count' => $retriedCount,
                'duration_seconds' => $durationSeconds,
                'operation_type' => 'retry_failed'
            ],
            "Retry failed operation completed successfully. {$retriedCount} tasks marked for retry."
        );
    }

    public static function taskCreationSuccess(
        string $taskId,
        string $taskType,
        array $additionalStats = []
    ): self {
        $stats = array_merge([
            'task_type' => $taskType,
            'operation_type' => 'task_creation'
        ], $additionalStats);

        return self::success(
            $taskId,
            $stats,
            "Task created successfully. Task ID: {$taskId}"
        );
    }

    public function toArray(): array
    {
        return [
            'success' => $this->success,
            'task_id' => $this->taskId,
            'statistics' => $this->statistics,
            'message' => $this->message,
            'metadata' => $this->metadata,
            'has_task_id' => $this->hasTaskId(),
            'has_statistics' => $this->hasStatistics(),
            'has_metadata' => $this->hasMetadata()
        ];
    }

    public function toJson(): string
    {
        return json_encode($this->toArray(), JSON_PRETTY_PRINT);
    }
}