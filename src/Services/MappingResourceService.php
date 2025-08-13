<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;

/**
 * MappingResourceService
 * 
 * Service for handling mapping resource conversion, validation, and migration operations.
 * Provides compatibility between legacy single-field format and new dual-field structure.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Convert stored mapping resource data to/from MappingResource value objects
 * - Handle legacy format migration (single name field -> name + resourceSpec)
 * - Provide validation and error handling for mapping resource data
 * - Generate deterministic IDs for consistency across conversions
 * - Support both predefined and custom mapping resource types
 * - Manage data migration between old and new formats
 * 
 * KEY FEATURES:
 * - Backward compatibility with legacy single-field format
 * - Smart migration of legacy data (splits query parameters)
 * - Deterministic ID generation for data consistency
 * - Comprehensive error handling with logging
 * - Type-safe mapping resource creation
 * - Support for bulk conversion operations
 * 
 * MIGRATION LOGIC:
 * - Legacy format: name="Observation?category=vital-signs", resourceSpec=null
 * - New format: name="Vital Signs", resourceSpec="Observation?category=vital-signs"
 * - Auto-detection and conversion during data processing
 */
class MappingResourceService
{
    /**
     * Convert stored data to MappingResource value objects with migration support
     * 
     * Handles multiple data formats:
     * - Legacy string format: "Observation?category=vital-signs"
     * - Legacy array format: ['name' => 'Observation?category=vital-signs', 'type' => 'custom']
     * - New array format: ['name' => 'Vital Signs', 'resourceSpec' => 'Observation?category=vital-signs', 'type' => 'predefined']
     * 
     * @param array $data Array of resource data in various formats
     * @param string $type Default type for legacy string data
     * @return MappingResource[] Array of MappingResource objects
     */
    public function convertToMappingResources(array $data, string $type): array
    {
        $resources = [];
        foreach ($data as $item) {
            try {
                // Handle legacy string format
                if (is_string($item)) {
                    $deterministicId = $this->generateDeterministicId($item, $type);
                    
                    // For legacy strings, name and resourceSpec are the same
                    // This maintains exact backward compatibility
                    $resources[] = new MappingResource($deterministicId, $item, $item, $type);
                } elseif (is_array($item)) {
                    // Use fromArray which handles both legacy and new formats
                    $resources[] = MappingResource::fromArray($item);
                }
            } catch (\InvalidArgumentException $e) {
                // Skip invalid entries but log the error
                error_log("Invalid mapping resource data: " . $e->getMessage());
            }
        }
        return $resources;
    }

    /**
     * Convert incoming array data to MappingResource value objects
     * 
     * Processes form submissions and API data to create MappingResource objects.
     * Handles both new format with separate name/resourceSpec and legacy format.
     * 
     * @param array $data Array of resource data from forms/API
     * @param string $defaultType Default type if not provided in data
     * @return MappingResource[] Array of MappingResource objects
     */
    public function convertFromArrayToMappingResources(array $data, string $defaultType): array
    {
        $resources = [];
        foreach ($data as $item) {
            try {
                if (is_array($item)) {
                    // Ensure type is set if not provided
                    if (!isset($item['type'])) {
                        $item['type'] = $defaultType;
                    }
                    $resources[] = MappingResource::fromArray($item);
                } elseif (is_string($item)) {
                    // Handle legacy string format - name and resourceSpec are the same
                    $deterministicId = $this->generateDeterministicId($item, $defaultType);
                    $resources[] = new MappingResource($deterministicId, $item, $item, $defaultType);
                }
            } catch (\InvalidArgumentException $e) {
                // Skip invalid entries but log the error
                error_log("Invalid mapping resource data: " . $e->getMessage());
            }
        }
        return $resources;
    }

    /**
     * Generate a deterministic ID for consistent mapping resource identification
     * 
     * Creates reproducible IDs based on resource name and type for data consistency
     * across different processing runs and system restarts.
     * 
     * @param string $name Resource name or specification
     * @param string $type Resource type (predefined/custom)
     * @return string Deterministic resource ID
     */
    private function generateDeterministicId(string $name, string $type): string
    {
        return 'resource_' . md5($name . '_' . $type);
    }
}