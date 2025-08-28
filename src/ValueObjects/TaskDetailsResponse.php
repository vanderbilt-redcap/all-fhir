<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use Vanderbilt\FhirSnapshot\ValueObjects\Task;

/**
 * TaskDetailsResponse
 * 
 * Immutable value object representing the response when retrieving
 * detailed information about a specific task.
 * 
 * DESIGN PRINCIPLES:
 * - Immutable: All updates return new instances
 * - Type-safe: Strong typing for all properties
 * - Self-validating: Ensures data consistency
 * - Readable: Clear method names and structure
 * - Consistent: Follows same pattern as other response VOs
 * 
 * USAGE PATTERNS:
 * - Success: TaskDetailsResponse::success($task, $metadata)
 * - Failure: TaskDetailsResponse::failure($message)
 * - Not found: TaskDetailsResponse::notFound($taskId)
 */
class TaskDetailsResponse
{
    private bool $success;
    private ?Task $task;
    private array $metadata;
    private string $message;
    private array $relatedResources;

    public function __construct(
        bool $success,
        ?Task $task = null,
        array $metadata = [],
        string $message = '',
        array $relatedResources = []
    ) {
        $this->success = $success;
        $this->task = $task;
        $this->metadata = $metadata;
        $this->message = $message;
        $this->relatedResources = $relatedResources;
    }

    public static function success(
        Task $task,
        array $metadata = [],
        string $message = 'Task details retrieved successfully',
        array $relatedResources = []
    ): self {
        return new self(true, $task, $metadata, $message, $relatedResources);
    }

    public static function failure(
        string $message = 'Failed to retrieve task details',
        array $metadata = []
    ): self {
        return new self(false, null, $metadata, $message);
    }

    public static function notFound(string $taskId): self
    {
        return new self(
            false,
            null,
            ['task_id' => $taskId],
            "Task with ID '{$taskId}' not found"
        );
    }

    public static function fromArray(array $data): self
    {
        $task = null;
        if (isset($data['task']) && is_array($data['task'])) {
            $task = Task::fromArray($data['task']);
        }

        return new self(
            $data['success'] ?? false,
            $task,
            $data['metadata'] ?? [],
            $data['message'] ?? '',
            $data['related_resources'] ?? []
        );
    }

    public function withTask(?Task $task): self
    {
        return new self(
            $this->success,
            $task,
            $this->metadata,
            $this->message,
            $this->relatedResources
        );
    }

    public function withMetadata(array $metadata): self
    {
        return new self(
            $this->success,
            $this->task,
            array_merge($this->metadata, $metadata),
            $this->message,
            $this->relatedResources
        );
    }

    public function withMessage(string $message): self
    {
        return new self(
            $this->success,
            $this->task,
            $this->metadata,
            $message,
            $this->relatedResources
        );
    }

    public function withRelatedResources(array $relatedResources): self
    {
        return new self(
            $this->success,
            $this->task,
            $this->metadata,
            $this->message,
            $relatedResources
        );
    }

    public function isSuccess(): bool
    {
        return $this->success;
    }

    public function getTask(): ?Task
    {
        return $this->task;
    }

    public function hasTask(): bool
    {
        return $this->task !== null;
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

    public function getMessage(): string
    {
        return $this->message;
    }

    public function getRelatedResources(): array
    {
        return $this->relatedResources;
    }

    public function hasRelatedResources(): bool
    {
        return !empty($this->relatedResources);
    }

    // Convenience methods for common task information
    public function getTaskId(): ?string
    {
        return $this->task?->getId();
    }

    public function getTaskStatus(): ?string
    {
        return $this->task?->getStatus();
    }

    public function getTaskKey(): ?string
    {
        return $this->task?->getKey();
    }

    public function getTaskParams(): array
    {
        return $this->task?->getParams() ?? [];
    }

    public function getTaskMetadata(): array
    {
        return $this->task?->getMetadata() ?? [];
    }

    public function getCreatedAt(): ?string
    {
        return $this->task?->getCreatedAt();
    }

    public function getUpdatedAt(): ?string
    {
        return $this->task?->getUpdatedAt();
    }

    public function isTaskPending(): bool
    {
        return $this->task?->isPending() ?? false;
    }

    public function isTaskProcessing(): bool
    {
        return $this->task?->isProcessing() ?? false;
    }

    public function isTaskCompleted(): bool
    {
        return $this->task?->isCompleted() ?? false;
    }

    public function isTaskFailed(): bool
    {
        return $this->task?->isFailed() ?? false;
    }

    // Methods for specific task types
    public function getFhirFetchInfo(): array
    {
        if (!$this->hasTask() || $this->getTaskKey() !== 'fhir_fetch') {
            return [];
        }

        $params = $this->getTaskParams();
        return [
            'mrn' => $params['mrn'] ?? null,
            'resource_type' => $params['resource_type'] ?? null,
            'record_id' => $params['record_id'] ?? null,
            'repeat_instance' => $params['repeat_instance'] ?? null
        ];
    }

    public function getFullSyncInfo(): array
    {
        if (!$this->hasTask() || $this->getTaskKey() !== 'full_sync') {
            return [];
        }

        $metadata = $this->getTaskMetadata();
        return [
            'missing_instances_created' => $metadata['missing_instances_created'] ?? 0,
            'orphaned_instances_cleaned' => $metadata['orphaned_instances_cleaned'] ?? 0,
            'total_mrns_processed' => $metadata['total_mrns_processed'] ?? 0
        ];
    }

    public function getExecutionDuration(): ?float
    {
        if (!$this->hasTask()) {
            return null;
        }

        $createdAt = $this->getCreatedAt();
        $updatedAt = $this->getUpdatedAt();

        if (!$createdAt || !$updatedAt) {
            return null;
        }

        try {
            $startTime = new \DateTime($createdAt);
            $endTime = new \DateTime($updatedAt);
            $interval = $startTime->diff($endTime);
            
            return $interval->days * 86400 + 
                   $interval->h * 3600 + 
                   $interval->i * 60 + 
                   $interval->s + 
                   $interval->f;
        } catch (\Exception $e) {
            return null;
        }
    }

    public function toArray(): array
    {
        $result = [
            'success' => $this->success,
            'task' => $this->task ? $this->task->toArray() : null,
            'metadata' => $this->metadata,
            'message' => $this->message,
            'related_resources' => $this->relatedResources,
            'has_task' => $this->hasTask(),
            'has_metadata' => $this->hasMetadata(),
            'has_related_resources' => $this->hasRelatedResources()
        ];

        // Add convenience information if task exists
        if ($this->hasTask()) {
            $result['task_info'] = [
                'id' => $this->getTaskId(),
                'status' => $this->getTaskStatus(),
                'key' => $this->getTaskKey(),
                'created_at' => $this->getCreatedAt(),
                'updated_at' => $this->getUpdatedAt(),
                'is_pending' => $this->isTaskPending(),
                'is_processing' => $this->isTaskProcessing(),
                'is_completed' => $this->isTaskCompleted(),
                'is_failed' => $this->isTaskFailed(),
                'execution_duration' => $this->getExecutionDuration()
            ];

            // Add task-type specific information
            $taskKey = $this->getTaskKey();
            switch ($taskKey) {
                case 'fhir_fetch':
                    $result['fhir_fetch_info'] = $this->getFhirFetchInfo();
                    break;
                case 'full_sync':
                    $result['full_sync_info'] = $this->getFullSyncInfo();
                    break;
            }
        }

        return $result;
    }

    public function toJson(): string
    {
        return json_encode($this->toArray(), JSON_PRETTY_PRINT);
    }
}