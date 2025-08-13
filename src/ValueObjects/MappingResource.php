<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use InvalidArgumentException;
use JsonSerializable;

/**
 * MappingResource
 * 
 * Immutable value object representing a FHIR resource mapping configuration.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Defines which FHIR resource types should be fetched for the project
 * - Categorizes mappings as predefined (standard FHIR) or custom (project-specific)
 * - Provides unique identification for resource mapping configurations
 * - Enables mapping lifecycle management (add, update, remove)
 * - Supports configuration serialization and persistence
 * 
 * MAPPING TYPES:
 * 
 * PREDEFINED (TYPE_PREDEFINED):
 * - Standard FHIR resource types (Patient, Observation, Condition, etc.)
 * - Uses established FHIR specifications and schemas
 * - Portable across different FHIR servers and implementations
 * - Examples: "Patient", "Observation", "DiagnosticReport"
 * 
 * CUSTOM (TYPE_CUSTOM):
 * - Project-specific resource mappings or extensions
 * - May include custom FHIR profiles or local implementations
 * - Tailored to specific organizational or research needs
 * - Examples: Custom observation profiles, organization-specific resources
 * 
 * KEY FEATURES:
 * - Immutable design ensuring configuration stability
 * - Unique ID generation for mapping identification
 * - Type validation and safety
 * - JSON serialization for configuration storage
 * - Factory methods for convenient instantiation
 * 
 * LIFECYCLE INTEGRATION:
 * When mapping resources are added, updated, or removed:
 * - ResourceSynchronizationService uses these objects to coordinate changes
 * - All existing MRNs get corresponding repeated form instances created/updated
 * - Queue tasks are generated to fetch the specified FHIR resource type
 * - Status tracking occurs through FhirResourceMetadata instances
 * 
 * USAGE PATTERNS:
 * - Create: MappingResource::create($resourceName, $type)
 * - Parse: MappingResource::fromArray($configData)
 * - Check type: $resource->isPredefined() / $resource->isCustom()
 * - Serialize: $resource->toArray() / json_encode($resource)
 * 
 * VALIDATION:
 * - Resource name cannot be empty
 * - Type must be either TYPE_PREDEFINED or TYPE_CUSTOM
 * - Unique ID automatically generated and validated
 */
class MappingResource implements JsonSerializable
{
    public const TYPE_PREDEFINED = 'predefined';
    public const TYPE_CUSTOM = 'custom';

    private const VALID_TYPES = [
        self::TYPE_PREDEFINED,
        self::TYPE_CUSTOM
    ];

    private string $id;
    private string $name;
    private string $type;

    public function __construct(
        string $id,
        string $name,
        string $type
    ) {
        $this->validateId($id);
        $this->validateName($name);
        $this->validateType($type);

        $this->id = $id;
        $this->name = $name;
        $this->type = $type;
    }

    public static function create(string $name, string $type): self
    {
        return new self(
            self::generateId(),
            $name,
            $type
        );
    }

    public static function fromArray(array $data): self
    {
        if (!isset($data['name'])) {
            throw new InvalidArgumentException('Missing required field: name');
        }
        
        if (!isset($data['type'])) {
            throw new InvalidArgumentException('Missing required field: type');
        }
        
        return new self(
            $data['id'] ?? self::generateId(),
            $data['name'],
            $data['type']
        );
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function isPredefined(): bool
    {
        return $this->type === self::TYPE_PREDEFINED;
    }

    public function isCustom(): bool
    {
        return $this->type === self::TYPE_CUSTOM;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }

    private static function generateId(): string
    {
        return uniqid('resource_', true);
    }

    /**
     * Generate a deterministic ID based on name and type
     */
    private static function generateDeterministicId(string $name, string $type): string
    {
        return 'resource_' . md5($name . '_' . $type);
    }

    private function validateId(string $id): void
    {
        if (empty(trim($id))) {
            throw new InvalidArgumentException('MappingResource ID cannot be empty');
        }
    }

    private function validateName(string $name): void
    {
        if (empty(trim($name))) {
            throw new InvalidArgumentException('MappingResource name cannot be empty');
        }
    }

    private function validateType(string $type): void
    {
        if (!in_array($type, self::VALID_TYPES, true)) {
            throw new InvalidArgumentException(
                sprintf('Invalid type "%s". Valid types: %s', 
                    $type, 
                    implode(', ', self::VALID_TYPES)
                )
            );
        }
    }
}