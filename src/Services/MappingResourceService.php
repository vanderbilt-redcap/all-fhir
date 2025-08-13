<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;

/**
 * MappingResourceService
 * 
 * Service for handling mapping resource conversion and validation operations.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Convert stored mapping resource data to/from MappingResource value objects
 * - Handle legacy format migration (string -> array with ID)
 * - Provide validation and error handling for mapping resource data
 * - Generate deterministic IDs for consistency across conversions
 * - Support both predefined and custom mapping resource types
 * 
 * KEY FEATURES:
 * - Backward compatibility with legacy string format
 * - Deterministic ID generation for data consistency
 * - Comprehensive error handling with logging
 * - Type-safe mapping resource creation
 * - Support for bulk conversion operations
 */
class MappingResourceService
{
    /**
     * Convert stored data to MappingResource value objects
     * 
     * @param array $data
     * @param string $type
     * @return MappingResource[]
     */
    public function convertToMappingResources(array $data, string $type): array
    {
        $resources = [];
        foreach ($data as $item) {
            try {
                // Handle both old format (string) and new format (array with id)
                if (is_string($item)) {
                    // For legacy string data, create with deterministic ID to ensure consistency
                    $deterministicId = $this->generateDeterministicId($item, $type);
                    $resources[] = new MappingResource($deterministicId, $item, $type);
                } elseif (is_array($item)) {
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
     * @param array $data
     * @param string $defaultType
     * @return MappingResource[]
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
                    // Handle legacy format where only name was provided - use deterministic ID
                    $deterministicId = $this->generateDeterministicId($item, $defaultType);
                    $resources[] = new MappingResource($deterministicId, $item, $defaultType);
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
     * @param string $name
     * @param string $type
     * @return string
     */
    private function generateDeterministicId(string $name, string $type): string
    {
        return 'resource_' . md5($name . '_' . $type);
    }
}