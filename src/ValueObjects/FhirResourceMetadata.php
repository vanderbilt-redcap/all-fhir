<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use InvalidArgumentException;
use JsonSerializable;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\Constants\FhirFormFields;

/**
 * FhirResourceMetadata
 * 
 * Immutable value object representing metadata about a FHIR resource stored in REDCap repeated forms.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Encapsulates all metadata associated with a FHIR resource fetch operation
 * - Manages resource lifecycle status (pending → fetching → completed/failed)
 * - Provides REDCap-compatible data structure conversion
 * - Handles file storage references and error tracking
 * - Supports pagination metadata for large FHIR resource sets
 * 
 * STATUS LIFECYCLE:
 * PENDING    → Resource instance created, awaiting FHIR fetch
 * FETCHING   → FHIR fetch operation in progress
 * COMPLETED  → Successfully fetched and stored FHIR data
 * FAILED     → FHIR fetch failed (with error details)
 * OUTDATED   → Resource mapping updated, data needs refetch
 * DELETED    → Resource mapping removed (archived for audit)
 * 
 * KEY FEATURES:
 * - Immutable design with fluent "with" methods for state changes
 * - Direct REDCap repeated form data structure generation
 * - File reference management through REDCap edoc IDs
 * - Comprehensive error message and pagination support
 * - Status validation and type safety
 * 
 * REDCap INTEGRATION:
 * - Maps to repeated form fields with 'all_fhir_' prefix
 * - Generates proper repeat_instances data structure
 * - Handles repeat instance numbering and management
 * - Compatible with REDCap::saveData operations
 * 
 * USAGE PATTERNS:
 * - Create: FhirResourceMetadata::create($resourceType, $repeatInstance)
 * - Update status: $metadata->withStatus(STATUS_COMPLETED)
 * - Add file: $metadata->withEdocId($edocId)
 * - REDCap save: $metadata->toRedCapData($recordId, $eventId, $instrumentName)
 * 
 * FIELD MAPPINGS:
 * - all_fhir_resource_name: Display name for the mapping resource
 * - all_fhir_resource_spec: Technical specification (predefined key OR custom URL)
 * - all_fhir_resource_type: Mapping type ("predefined" or "custom")
 * - all_fhir_resource_status: Current status in lifecycle
 * - all_fhir_file_upload: REDCap edoc ID containing JSON payload
 * - all_fhir_fetch_date: Timestamp of successful fetch
 * - all_fhir_error_message: Details when fetch fails
 * - all_fhir_pagination_info: JSON metadata for paginated results
 */
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

    private string $resourceName;
    private string $resourceSpec;
    private string $mappingType;
    private string $status;
    private ?int $edocId;
    private ?string $fetchDate;
    private ?string $errorMessage;
    private ?array $paginationInfo;
    private int $repeatInstance;
    
    public const MAPPING_TYPE_PREDEFINED = 'predefined';
    public const MAPPING_TYPE_CUSTOM = 'custom';
    
    private const VALID_MAPPING_TYPES = [
        self::MAPPING_TYPE_PREDEFINED,
        self::MAPPING_TYPE_CUSTOM
    ];

    public function __construct(
        string $resourceName,
        string $resourceSpec,
        string $mappingType,
        string $status = self::STATUS_PENDING,
        ?int $edocId = null,
        ?string $fetchDate = null,
        ?string $errorMessage = null,
        ?array $paginationInfo = null,
        int $repeatInstance = 1
    ) {
        $this->validateResourceName($resourceName);
        $this->validateResourceSpec($resourceSpec);
        $this->validateMappingType($mappingType);
        $this->validateStatus($status);
        $this->validateRepeatInstance($repeatInstance);

        $this->resourceName = $resourceName;
        $this->resourceSpec = $resourceSpec;
        $this->mappingType = $mappingType;
        $this->status = $status;
        $this->edocId = $edocId;
        $this->fetchDate = $fetchDate;
        $this->errorMessage = $errorMessage;
        $this->paginationInfo = $paginationInfo;
        $this->repeatInstance = $repeatInstance;
    }

    public static function create(string $resourceName, string $resourceSpec, string $mappingType, int $repeatInstance = 1): self
    {
        return new self($resourceName, $resourceSpec, $mappingType, self::STATUS_PENDING, null, null, null, null, $repeatInstance);
    }

    public static function fromArray(array $data): self
    {
        $requiredFields = ['resource_name', 'resource_spec', 'mapping_type'];
        foreach ($requiredFields as $field) {
            if (!isset($data[$field])) {
                throw new InvalidArgumentException("Missing required field: {$field}");
            }
        }

        return new self(
            $data['resource_name'],
            $data['resource_spec'],
            $data['mapping_type'],
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
            $this->resourceName,
            $this->resourceSpec,
            $this->mappingType,
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
            $this->resourceName,
            $this->resourceSpec,
            $this->mappingType,
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
            $this->resourceName,
            $this->resourceSpec,
            $this->mappingType,
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
            $this->resourceName,
            $this->resourceSpec,
            $this->mappingType,
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
            $this->resourceName,
            $this->resourceSpec,
            $this->mappingType,
            $this->status,
            $this->edocId,
            $this->fetchDate,
            $this->errorMessage,
            $paginationInfo,
            $this->repeatInstance
        );
    }

    public function getResourceName(): string
    {
        return $this->resourceName;
    }
    
    public function getResourceSpec(): string
    {
        return $this->resourceSpec;
    }
    
    public function getMappingType(): string
    {
        return $this->mappingType;
    }
    
    public function isPredefined(): bool
    {
        return $this->mappingType === self::MAPPING_TYPE_PREDEFINED;
    }
    
    public function isCustom(): bool
    {
        return $this->mappingType === self::MAPPING_TYPE_CUSTOM;
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

    public function toRedCapData(string $recordId, string $eventId, string $instrumentName = Constants::DEFAULT_INSTRUMENT_NAME): array
    {
        return [
            $recordId => [
                'repeat_instances' => [
                    $eventId => [
                        $instrumentName => [
                            $this->repeatInstance => [
                                FhirFormFields::RESOURCE_NAME => $this->resourceName,
                                FhirFormFields::RESOURCE_SPEC => $this->resourceSpec,
                                FhirFormFields::RESOURCE_TYPE => $this->mappingType,
                                FhirFormFields::RESOURCE_STATUS => $this->status,
                                FhirFormFields::FILE_UPLOAD => $this->edocId,
                                FhirFormFields::FETCH_DATE => $this->fetchDate,
                                FhirFormFields::ERROR_MESSAGE => $this->errorMessage,
                                FhirFormFields::PAGINATION_INFO => $this->paginationInfo ? json_encode($this->paginationInfo) : null
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
            'resource_name' => $this->resourceName,
            'resource_spec' => $this->resourceSpec,
            'mapping_type' => $this->mappingType,
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

    private function validateResourceName(string $resourceName): void
    {
        if (empty(trim($resourceName))) {
            throw new InvalidArgumentException('Resource name cannot be empty');
        }
    }
    
    private function validateResourceSpec(string $resourceSpec): void
    {
        if (empty(trim($resourceSpec))) {
            throw new InvalidArgumentException('Resource spec cannot be empty');
        }
    }
    
    private function validateMappingType(string $mappingType): void
    {
        if (!in_array($mappingType, self::VALID_MAPPING_TYPES, true)) {
            throw new InvalidArgumentException(
                sprintf('Invalid mapping type "%s". Valid types: %s', 
                    $mappingType, 
                    implode(', ', self::VALID_MAPPING_TYPES)
                )
            );
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