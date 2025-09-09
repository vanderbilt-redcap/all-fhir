<?php

namespace Vanderbilt\AllFhir\ValueObjects;

use InvalidArgumentException;
use JsonSerializable;

/**
 * MappingResource
 * 
 * Immutable value object representing a FHIR resource mapping configuration.
 * Separates user-friendly display names from technical FHIR query specifications.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Defines which FHIR resource types should be fetched for the project
 * - Separates display presentation from technical FHIR specifications
 * - Categorizes mappings as predefined (REDCap categories) or custom (user-defined)
 * - Provides unique identification for resource mapping configurations
 * - Enables mapping lifecycle management (add, update, remove)
 * - Supports configuration serialization and persistence
 * 
 * FIELD STRUCTURE:
 * - id: Unique identifier for the mapping
 * - name: User-friendly display name shown in UI
 * - resourceSpec: Technical FHIR query specification for API calls
 * - type: Classification as predefined or custom
 * 
 * MAPPING TYPES:
 * 
 * PREDEFINED (TYPE_PREDEFINED):
 * - REDCap-defined FHIR categories with preset queries
 * - name: "Vital Signs", resourceSpec: "Observation?category=vital-signs"
 * - name: "Lab Results", resourceSpec: "DiagnosticReport?category=LAB"
 * - Consistent across projects, maintained by REDCap
 * 
 * CUSTOM (TYPE_CUSTOM):
 * - User-defined resource mappings with custom queries
 * - name: "Social History Data", resourceSpec: "Observation?category=social-history&status=final"
 * - name: "Emergency Medications", resourceSpec: "Medication?context=emergency"
 * - Project-specific, tailored to research needs
 * 
 * KEY FEATURES:
 * - Immutable design ensuring configuration stability
 * - Clear separation of display vs. functional concerns
 * - Backward compatibility with legacy single-field format
 * - Unique ID generation for mapping identification
 * - Type validation and safety
 * - JSON serialization for configuration storage
 * - Factory methods for convenient instantiation
 * 
 * LIFECYCLE INTEGRATION:
 * When mapping resources are added, updated, or removed:
 * - ResourceSynchronizationService uses these objects to coordinate changes
 * - All existing MRNs get corresponding repeated form instances created/updated
 * - Queue tasks are generated using the resourceSpec for FHIR API calls
 * - Status tracking occurs through FhirResourceMetadata instances
 * 
 * USAGE PATTERNS:
 * - Create: MappingResource::create($name, $resourceSpec, $type)
 * - Parse: MappingResource::fromArray($configData)
 * - Check type: $resource->isPredefined() / $resource->isCustom()
 * - Get display: $resource->getName()
 * - Get query: $resource->getResourceSpec()
 * - Serialize: $resource->toArray() / json_encode($resource)
 * 
 * VALIDATION:
 * - Resource name cannot be empty (user-friendly display)
 * - ResourceSpec cannot be empty (FHIR query specification)
 * - Type must be either TYPE_PREDEFINED or TYPE_CUSTOM
 * - Unique ID automatically generated and validated
 * 
 * MIGRATION SUPPORT:
 * - Handles legacy format where name contained query parameters
 * - Automatic splitting of "Observation?category=vital-signs" into name + resourceSpec
 * - Backward compatibility during transition period
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
    private string $resourceSpec;
    private string $type;
    private bool $deleted = false;
    private ?string $deletedAt = null;

    /**
     * Constructor for MappingResource
     * 
     * @param string $id Unique identifier for the mapping resource
     * @param string $name User-friendly display name shown in UI
     * @param string $resourceSpec Technical FHIR query specification (e.g., "Observation?category=vital-signs")
     * @param string $type Resource type - either TYPE_PREDEFINED or TYPE_CUSTOM
     * @throws InvalidArgumentException If any parameter is invalid
     */
    public function __construct(
        string $id,
        string $name,
        string $resourceSpec,
        string $type,
        bool $deleted = false,
        ?string $deletedAt = null
    ) {
        $this->validateId($id);
        $this->validateName($name);
        $this->validateResourceSpec($resourceSpec);
        $this->validateType($type);

        $this->id = $id;
        $this->name = $name;
        $this->resourceSpec = $resourceSpec;
        $this->type = $type;
        $this->deleted = $deleted;
        $this->deletedAt = $deletedAt;
    }

    /**
     * Factory method to create a new MappingResource with generated ID
     * 
     * @param string $name User-friendly display name
     * @param string $resourceSpec FHIR query specification
     * @param string $type Resource type (predefined or custom)
     * @return self New MappingResource instance
     */
    public static function create(string $name, string $resourceSpec, string $type): self
    {
        return new self(
            self::generateId(),
            $name,
            $resourceSpec,
            $type,
            false,
            null
        );
    }

    /**
     * Create MappingResource from array data with migration support
     * 
     * Supports both new format and legacy format for backward compatibility:
     * - New: ['name' => 'Vital Signs', 'resourceSpec' => 'Observation?category=vital-signs', 'type' => 'predefined']
     * - Legacy: ['name' => 'Observation?category=vital-signs', 'type' => 'custom']
     * 
     * @param array $data Array containing resource data
     * @return self New MappingResource instance
     * @throws InvalidArgumentException If required fields are missing
     */
    public static function fromArray(array $data): self
    {
        if (!isset($data['name'])) {
            throw new InvalidArgumentException('Missing required field: name');
        }
        
        if (!isset($data['type'])) {
            throw new InvalidArgumentException('Missing required field: type');
        }
        
        // Handle new format with explicit resourceSpec
        if (isset($data['resourceSpec'])) {
            return new self(
                $data['id'] ?? self::generateId(),
                $data['name'],
                $data['resourceSpec'],
                $data['type'],
                (bool)($data['deleted'] ?? false),
                $data['deletedAt'] ?? null
            );
        }
        
        // Handle legacy format where name contains query parameters
        $name = $data['name'];
        $resourceSpec = $name; // Default to same value
        
        // For legacy data, if name contains query parameters, use as-is for resourceSpec
        // but create a cleaner display name
        if (strpos($name, '?') !== false) {
            [$baseResource] = explode('?', $name, 2);
            // Keep original name as resourceSpec, but could generate friendlier display name
            $resourceSpec = $name;
            // For now, keep name as-is to maintain exact compatibility
        }
        
        return new self(
            $data['id'] ?? self::generateId(),
            $name,
            $resourceSpec,
            $data['type'],
            (bool)($data['deleted'] ?? false),
            $data['deletedAt'] ?? null
        );
    }

    /**
     * Get the unique identifier for this mapping resource
     * 
     * @return string Unique ID
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * Get the user-friendly display name
     * 
     * @return string Display name shown in UI
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Get the FHIR query specification
     * 
     * @return string Technical FHIR query (e.g., "Observation?category=vital-signs")
     */
    public function getResourceSpec(): string
    {
        return $this->resourceSpec;
    }

    /**
     * Get the resource type classification
     * 
     * @return string Either TYPE_PREDEFINED or TYPE_CUSTOM
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * Check if this is a predefined resource mapping
     * 
     * @return bool True if predefined, false otherwise
     */
    public function isPredefined(): bool
    {
        return $this->type === self::TYPE_PREDEFINED;
    }

    /**
     * Check if this is a custom resource mapping
     * 
     * @return bool True if custom, false otherwise
     */
    public function isCustom(): bool
    {
        return $this->type === self::TYPE_CUSTOM;
    }

    /**
     * Convert to array for serialization and storage
     * 
     * @return array Associative array with id, name, resourceSpec, and type
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'resourceSpec' => $this->resourceSpec,
            'type' => $this->type,
            'deleted' => $this->deleted,
            'deletedAt' => $this->deletedAt
        ];
    }

    /**
     * JSON serialization support
     * 
     * @return array Array representation for JSON encoding
     */
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

    public function isDeleted(): bool
    {
        return $this->deleted === true;
    }

    public function withDeleted(bool $deleted): self
    {
        return new self(
            $this->id,
            $this->name,
            $this->resourceSpec,
            $this->type,
            $deleted,
            $this->deletedAt
        );
    }

    public function getDeletedAt(): ?string
    {
        return $this->deletedAt;
    }

    public function withDeletedAt(?string $deletedAt): self
    {
        return new self(
            $this->id,
            $this->name,
            $this->resourceSpec,
            $this->type,
            $this->deleted,
            $deletedAt
        );
    }

    /**
     * Validate the resource ID
     * 
     * @param string $id ID to validate
     * @throws InvalidArgumentException If ID is empty
     */
    private function validateId(string $id): void
    {
        if (empty(trim($id))) {
            throw new InvalidArgumentException('MappingResource ID cannot be empty');
        }
    }

    /**
     * Validate the display name
     * 
     * @param string $name Display name to validate
     * @throws InvalidArgumentException If name is empty
     */
    private function validateName(string $name): void
    {
        if (empty(trim($name))) {
            throw new InvalidArgumentException('MappingResource name cannot be empty');
        }
    }

    /**
     * Validate the FHIR resource specification
     * 
     * @param string $resourceSpec Resource specification to validate
     * @throws InvalidArgumentException If resourceSpec is empty
     */
    private function validateResourceSpec(string $resourceSpec): void
    {
        if (empty(trim($resourceSpec))) {
            throw new InvalidArgumentException('MappingResource resourceSpec cannot be empty');
        }
    }

    /**
     * Validate the resource type
     * 
     * @param string $type Type to validate
     * @throws InvalidArgumentException If type is not valid
     */
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
