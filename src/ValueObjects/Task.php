<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use InvalidArgumentException;
use JsonSerializable;

/**
 * Task
 * 
 * Immutable value object representing a queued background task for processing.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Encapsulates all information needed to execute a background task
 * - Manages task lifecycle status (pending → processing → completed/failed)  
 * - Provides task identification, parameters, and metadata storage
 * - Supports task serialization for queue persistence
 * - Enables task tracking and status monitoring
 * 
 * TASK LIFECYCLE:
 * PENDING    → Task created and queued, awaiting processor
 * PROCESSING → Task picked up by processor, currently executing
 * COMPLETED  → Task successfully executed
 * FAILED     → Task execution failed with error
 * 
 * TASK COMPONENTS:
 * 
 * KEY (string):
 * - Identifies the task type and which processor should handle it
 * - Examples: 'enhanced_fhir_fetch', 'email_notification', 'archive'
 * - Used by QueueProcessor to route tasks to appropriate processors
 * 
 * PARAMS (array):
 * - Task-specific parameters required for execution
 * - For FHIR fetch: record_id, mrn, resource_type, repeat_instance
 * - Serialized and stored with the task for processor access
 * 
 * METADATA (array):
 * - Additional contextual information and tracking data
 * - Created timestamp, retry count, error details, etc.
 * - Used for monitoring, debugging, and task management
 * 
 * KEY FEATURES:
 * - Immutable design with fluent "with" methods for state changes
 * - Automatic timestamp management (created/updated)
 * - Unique ID generation for task tracking
 * - JSON serialization for queue storage
 * - Status validation and type safety
 * 
 * INTEGRATION WITH QUEUE SYSTEM:
 * - QueueManager stores tasks in REDCap project settings
 * - QueueProcessor retrieves and executes tasks by key
 * - TaskProcessors handle specific task types
 * - Results and status updates flow back through the system
 * 
 * USAGE PATTERNS:
 * - Create: Task::create($key, $params, $metadata)
 * - Parse: Task::fromArray($storedData)
 * - Update: $task->withStatus(STATUS_PROCESSING)
 * - Store: $task->toArray() for QueueManager persistence
 * 
 * COMMON TASK KEYS:
 * - 'enhanced_fhir_fetch': Fetch FHIR data for specific resource
 * - 'archive': Archive completed resources
 * - 'cleanup': Clean up orphaned or outdated data
 * - 'notification': Send status notifications
 */
class Task implements JsonSerializable
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_PROCESSING = 'processing';
    public const STATUS_COMPLETED = 'completed';
    public const STATUS_FAILED = 'failed';

    private const VALID_STATUSES = [
        self::STATUS_PENDING,
        self::STATUS_PROCESSING,
        self::STATUS_COMPLETED,
        self::STATUS_FAILED
    ];

    private string $id;
    private string $key;
    private array $params;
    private string $status;
    private string $createdAt;
    private string $updatedAt;
    private array $metadata;

    public function __construct(
        string $id,
        string $key,
        array $params = [],
        string $status = self::STATUS_PENDING,
        ?string $createdAt = null,
        ?string $updatedAt = null,
        array $metadata = []
    ) {
        $this->validateId($id);
        $this->validateKey($key);
        $this->validateStatus($status);

        $this->id = $id;
        $this->key = $key;
        $this->params = $params;
        $this->status = $status;
        $this->createdAt = $createdAt ?? date('Y-m-d H:i:s');
        $this->updatedAt = $updatedAt ?? date('Y-m-d H:i:s');
        $this->metadata = $metadata;
    }

    public static function create(string $key, array $params = [], array $metadata = []): self
    {
        return new self(
            self::generateId(),
            $key,
            $params,
            self::STATUS_PENDING,
            null,
            null,
            $metadata
        );
    }

    public static function fromArray(array $data): self
    {
        if (!isset($data['key'])) {
            throw new InvalidArgumentException('Missing required field: key');
        }
        
        return new self(
            $data['id'] ?? self::generateId(),
            $data['key'],
            $data['params'] ?? [],
            $data['status'] ?? self::STATUS_PENDING,
            $data['created_at'] ?? null,
            $data['updated_at'] ?? null,
            $data['metadata'] ?? []
        );
    }

    public function withStatus(string $status): self
    {
        $this->validateStatus($status);
        
        return new self(
            $this->id,
            $this->key,
            $this->params,
            $status,
            $this->createdAt,
            date('Y-m-d H:i:s'), // Update timestamp
            $this->metadata
        );
    }

    public function withMetadata(array $metadata): self
    {
        return new self(
            $this->id,
            $this->key,
            $this->params,
            $this->status,
            $this->createdAt,
            date('Y-m-d H:i:s'),
            array_merge($this->metadata, $metadata)
        );
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getKey(): string
    {
        return $this->key;
    }

    public function getParams(): array
    {
        return $this->params;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getCreatedAt(): string
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): string
    {
        return $this->updatedAt;
    }

    public function getMetadata(): array
    {
        return $this->metadata;
    }

    public function isPending(): bool
    {
        return $this->status === self::STATUS_PENDING;
    }

    public function isProcessing(): bool
    {
        return $this->status === self::STATUS_PROCESSING;
    }

    public function isCompleted(): bool
    {
        return $this->status === self::STATUS_COMPLETED;
    }

    public function isFailed(): bool
    {
        return $this->status === self::STATUS_FAILED;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'key' => $this->key,
            'params' => $this->params,
            'status' => $this->status,
            'created_at' => $this->createdAt,
            'updated_at' => $this->updatedAt,
            'metadata' => $this->metadata
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }

    private static function generateId(): string
    {
        return uniqid('task_', true);
    }

    private function validateId(string $id): void
    {
        if (empty(trim($id))) {
            throw new InvalidArgumentException('Task ID cannot be empty');
        }
    }

    private function validateKey(string $key): void
    {
        if (empty(trim($key))) {
            throw new InvalidArgumentException('Task key cannot be empty');
        }
    }

    private function validateStatus(string $status): void
    {
        if (!in_array($status, self::VALID_STATUSES, true)) {
            throw new InvalidArgumentException(
                sprintf('Invalid status "%s". Valid statuses: %s', 
                    $status, 
                    implode(', ', self::VALID_STATUSES)
                )
            );
        }
    }
}