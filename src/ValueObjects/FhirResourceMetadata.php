<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use InvalidArgumentException;
use JsonSerializable;

class FhirResourceMetadata implements JsonSerializable
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_FETCHING = 'fetching';
    public const STATUS_COMPLETED = 'completed';
    public const STATUS_FAILED = 'failed';
    public const STATUS_OUTDATED = 'outdated';
    public const STATUS_DELETED = 'deleted';

    private const VALID_STATUSES = [
        self::STATUS_PENDING,
        self::STATUS_FETCHING,
        self::STATUS_COMPLETED,
        self::STATUS_FAILED,
        self::STATUS_OUTDATED,
        self::STATUS_DELETED
    ];

    private string $resourceType;
    private string $status;
    private ?int $edocId;
    private ?string $fetchDate;
    private ?string $errorMessage;
    private ?array $paginationInfo;
    private int $repeatInstance;

    public function __construct(
        string $resourceType,
        string $status = self::STATUS_PENDING,
        ?int $edocId = null,
        ?string $fetchDate = null,
        ?string $errorMessage = null,
        ?array $paginationInfo = null,
        int $repeatInstance = 1
    ) {
        $this->validateResourceType($resourceType);
        $this->validateStatus($status);
        $this->validateRepeatInstance($repeatInstance);

        $this->resourceType = $resourceType;
        $this->status = $status;
        $this->edocId = $edocId;
        $this->fetchDate = $fetchDate;
        $this->errorMessage = $errorMessage;
        $this->paginationInfo = $paginationInfo;
        $this->repeatInstance = $repeatInstance;
    }

    public static function create(string $resourceType, int $repeatInstance = 1): self
    {
        return new self($resourceType, self::STATUS_PENDING, null, null, null, null, $repeatInstance);
    }

    public static function fromArray(array $data): self
    {
        if (!isset($data['resource_type'])) {
            throw new InvalidArgumentException('Missing required field: resource_type');
        }

        return new self(
            $data['resource_type'],
            $data['status'] ?? self::STATUS_PENDING,
            $data['edoc_id'] ?? null,
            $data['fetch_date'] ?? null,
            $data['error_message'] ?? null,
            $data['pagination_info'] ?? null,
            $data['repeat_instance'] ?? 1
        );
    }

    public function withStatus(string $status): self
    {
        return new self(
            $this->resourceType,
            $status,
            $this->edocId,
            $this->fetchDate,
            $this->errorMessage,
            $this->paginationInfo,
            $this->repeatInstance
        );
    }

    public function withEdocId(int $edocId): self
    {
        return new self(
            $this->resourceType,
            $this->status,
            $edocId,
            $this->fetchDate,
            $this->errorMessage,
            $this->paginationInfo,
            $this->repeatInstance
        );
    }

    public function withFetchDate(string $fetchDate): self
    {
        return new self(
            $this->resourceType,
            $this->status,
            $this->edocId,
            $fetchDate,
            $this->errorMessage,
            $this->paginationInfo,
            $this->repeatInstance
        );
    }

    public function withErrorMessage(string $errorMessage): self
    {
        return new self(
            $this->resourceType,
            $this->status,
            $this->edocId,
            $this->fetchDate,
            $errorMessage,
            $this->paginationInfo,
            $this->repeatInstance
        );
    }

    public function withPaginationInfo(array $paginationInfo): self
    {
        return new self(
            $this->resourceType,
            $this->status,
            $this->edocId,
            $this->fetchDate,
            $this->errorMessage,
            $paginationInfo,
            $this->repeatInstance
        );
    }

    public function getResourceType(): string
    {
        return $this->resourceType;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getEdocId(): ?int
    {
        return $this->edocId;
    }

    public function getFetchDate(): ?string
    {
        return $this->fetchDate;
    }

    public function getErrorMessage(): ?string
    {
        return $this->errorMessage;
    }

    public function getPaginationInfo(): ?array
    {
        return $this->paginationInfo;
    }

    public function getRepeatInstance(): int
    {
        return $this->repeatInstance;
    }

    public function isPending(): bool
    {
        return $this->status === self::STATUS_PENDING;
    }

    public function isFetching(): bool
    {
        return $this->status === self::STATUS_FETCHING;
    }

    public function isCompleted(): bool
    {
        return $this->status === self::STATUS_COMPLETED;
    }

    public function isFailed(): bool
    {
        return $this->status === self::STATUS_FAILED;
    }

    public function isOutdated(): bool
    {
        return $this->status === self::STATUS_OUTDATED;
    }

    public function isDeleted(): bool
    {
        return $this->status === self::STATUS_DELETED;
    }

    public function toRedCapData(string $recordId, string $eventId, string $instrumentName = 'fhir_resources'): array
    {
        return [
            $recordId => [
                'repeat_instances' => [
                    $eventId => [
                        $instrumentName => [
                            $this->repeatInstance => [
                                'all_fhir_resource_type' => $this->resourceType,
                                'all_fhir_resource_status' => $this->status,
                                'all_fhir_file_upload' => $this->edocId,
                                'all_fhir_fetch_date' => $this->fetchDate,
                                'all_fhir_error_message' => $this->errorMessage,
                                'all_fhir_pagination_info' => $this->paginationInfo ? json_encode($this->paginationInfo) : null
                            ]
                        ]
                    ]
                ]
            ]
        ];
    }

    public function toArray(): array
    {
        return [
            'resource_type' => $this->resourceType,
            'status' => $this->status,
            'edoc_id' => $this->edocId,
            'fetch_date' => $this->fetchDate,
            'error_message' => $this->errorMessage,
            'pagination_info' => $this->paginationInfo,
            'repeat_instance' => $this->repeatInstance
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }

    private function validateResourceType(string $resourceType): void
    {
        if (empty(trim($resourceType))) {
            throw new InvalidArgumentException('Resource type cannot be empty');
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

    private function validateRepeatInstance(int $repeatInstance): void
    {
        if ($repeatInstance < 1) {
            throw new InvalidArgumentException('Repeat instance must be greater than 0');
        }
    }
}