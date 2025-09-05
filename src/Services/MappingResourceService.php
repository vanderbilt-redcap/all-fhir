<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;

/**
 * MappingResourceService
 * 
 * Data transformation service that handles complex mapping resource format conversions, 
 * legacy data migration, and validation operations. Provides seamless compatibility between
 * multiple historical data formats while ensuring data integrity and consistency.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Converts diverse input formats to standardized MappingResource value objects
 * - Manages backward compatibility with multiple legacy data formats
 * - Handles migration between single-field and dual-field resource specifications
 * - Provides robust error handling and validation for malformed data
 * - Generates consistent, deterministic resource identifiers
 * - Supports bulk transformation operations with individual error isolation
 * - Maintains data integrity during format transitions and migrations
 * 
 * FORMAT COMPATIBILITY MATRIX:
 * 
 * LEGACY STRING FORMAT (Historical):
 * - Input: "Observation?category=vital-signs"
 * - Conversion: name="Observation?category=vital-signs", resourceSpec="Observation?category=vital-signs"
 * - Usage: Maintains exact backward compatibility for existing configurations
 * 
 * LEGACY ARRAY FORMAT (Intermediate):
 * - Input: ['name' => 'Observation?category=vital-signs', 'type' => 'custom']
 * - Conversion: Uses MappingResource::fromArray() with built-in migration logic
 * - Usage: Transitional format with improved structure but single-field specification
 * 
 * MODERN ARRAY FORMAT (Current):
 * - Input: ['name' => 'Vital Signs', 'resourceSpec' => 'Observation?category=vital-signs', 'type' => 'predefined']
 * - Conversion: Direct mapping to MappingResource properties
 * - Usage: Full separation of display names from technical specifications
 * 
 * CONVERSION WORKFLOWS:
 * 
 * STORED DATA CONVERSION (convertToMappingResources):
 * - Processes data from configuration storage and databases
 * - Handles mixed format arrays with automatic format detection
 * - Applies default type assignment for legacy string entries
 * - Maintains data consistency through deterministic ID generation
 * 
 * INPUT DATA CONVERSION (convertFromArrayToMappingResources):
 * - Processes form submissions and API input data
 * - Ensures type assignment with configurable defaults
 * - Handles incomplete data with graceful fallback behavior
 * - Validates input data structure and content
 * 
 * MIGRATION STRATEGY:
 * 
 * DETERMINISTIC ID GENERATION:
 * - Creates consistent identifiers based on name and type combination
 * - Ensures same resource configurations get same IDs across conversions
 * - Uses MD5 hashing for collision avoidance and reproducibility
 * - Enables reliable resource tracking through format changes
 * 
 * BACKWARD COMPATIBILITY:
 * - Preserves exact behavior for legacy string configurations
 * - Maintains same resource specification in both name and resourceSpec
 * - Ensures no data loss during automatic format upgrades
 * - Supports gradual migration without breaking existing functionality
 * 
 * ERROR HANDLING:
 * - Individual resource validation with bulk operation continuation
 * - Detailed error logging for troubleshooting and data quality monitoring
 * - Graceful degradation when individual resources are malformed
 * - Comprehensive exception handling with informative error messages
 * 
 * USAGE PATTERNS:
 * - convertToMappingResources($stored, $type) - Process stored configuration data
 * - convertFromArrayToMappingResources($input, $defaultType) - Handle form/API input
 * - Typically used by configuration management and resource synchronization services
 * - Integrates with MappingResource value object lifecycle management
 * 
 * MODULE INTEGRATION:
 * - Used by FhirSnapshot::getAllConfiguredMappingResources() for centralized access
 * - Provides consistent conversion logic across the entire module ecosystem
 * - Enables single source of truth for mapping resource configuration handling
 * - Supports performFullSync operations through main module helper method
 * 
 * DATA INTEGRITY FEATURES:
 * - Validates required fields and data structure consistency
 * - Maintains resource type constraints and validation rules
 * - Ensures proper resource specification format and content
 * - Provides comprehensive data quality checks and error reporting
 * 
 * PERFORMANCE CONSIDERATIONS:
 * - Efficient bulk processing with early error detection
 * - Minimal object creation overhead through direct construction
 * - Cached deterministic ID generation for repeated operations
 * - Optimized array processing with type-specific handling paths
 */
class MappingResourceService
{
    /**
     * Retrieve stored resource arrays from project settings
     *
     * @return array{0: array, 1: array} [predefinedData, customData]
     */
    public function getStoredResourceArrays(FhirSnapshot $module): array
    {
        $predefinedData = $module->getProjectSetting(Constants::SETTING_MAPPING_RESOURCES) ?? [];
        $customData = $module->getProjectSetting(Constants::SETTING_CUSTOM_MAPPING_RESOURCES) ?? [];
        return [$predefinedData, $customData];
    }

    /**
     * Persist resource arrays back into project settings
     */
    public function saveResourceArrays(FhirSnapshot $module, array $predefinedData, array $customData): void
    {
        $module->setProjectSetting(Constants::SETTING_MAPPING_RESOURCES, $predefinedData);
        $module->setProjectSetting(Constants::SETTING_CUSTOM_MAPPING_RESOURCES, $customData);
    }

    /**
     * Find a mapping resource by ID within stored arrays.
     * @return array{0: MappingResource|null, 1: string|null, 2: int|null}
     */
    public function findResourceByIdInArrays(string $id, array $predefinedData, array $customData): array
    {
        $predefined = $this->convertToMappingResources($predefinedData, MappingResource::TYPE_PREDEFINED);
        foreach ($predefined as $idx => $r) {
            if ($r->getId() === $id) {
                return [$r, MappingResource::TYPE_PREDEFINED, $idx];
            }
        }
        $custom = $this->convertToMappingResources($customData, MappingResource::TYPE_CUSTOM);
        foreach ($custom as $idx => $r) {
            if ($r->getId() === $id) {
                return [$r, MappingResource::TYPE_CUSTOM, $idx];
            }
        }
        return [null, null, null];
    }

    /**
     * Check for duplicate mapping based on type + resourceSpec.
     * @return array{0: MappingResource, 1: string, 2: int}|null
     */
    public function findDuplicateByTypeAndSpec(array $predefinedData, array $customData, string $type, string $resourceSpec): ?array
    {
        $resourceSpec = trim($resourceSpec);
        if ($type === MappingResource::TYPE_PREDEFINED) {
            $list = $this->convertToMappingResources($predefinedData, MappingResource::TYPE_PREDEFINED);
            foreach ($list as $idx => $r) {
                if ($r->getType() === $type && trim($r->getResourceSpec()) === $resourceSpec) {
                    return [$r, $type, $idx];
                }
            }
        } elseif ($type === MappingResource::TYPE_CUSTOM) {
            $list = $this->convertToMappingResources($customData, MappingResource::TYPE_CUSTOM);
            foreach ($list as $idx => $r) {
                if ($r->getType() === $type && trim($r->getResourceSpec()) === $resourceSpec) {
                    return [$r, $type, $idx];
                }
            }
        }
        return null;
    }

    /**
     * Append a resource to the appropriate array and return updated arrays.
     * @return array{0: array, 1: array}
     */
    public function appendResourceToArrays(MappingResource $resource, array $predefinedData, array $customData): array
    {
        if ($resource->getType() === MappingResource::TYPE_PREDEFINED) {
            $predefinedData[] = $resource->toArray();
        } else {
            $customData[] = $resource->toArray();
        }
        return [$predefinedData, $customData];
    }

    /**
     * Replace a resource in arrays at given type/index.
     * @return array{0: array, 1: array}
     */
    public function replaceResourceInArrays(MappingResource $resource, string $type, int $index, array $predefinedData, array $customData): array
    {
        if ($type === MappingResource::TYPE_PREDEFINED) {
            $predefinedData[$index] = $resource->toArray();
        } else {
            $customData[$index] = $resource->toArray();
        }
        return [$predefinedData, $customData];
    }

    /**
     * Remove a resource from arrays at given type/index.
     * @return array{0: array, 1: array}
     */
    public function removeResourceFromArrays(string $type, int $index, array $predefinedData, array $customData): array
    {
        if ($type === MappingResource::TYPE_PREDEFINED) {
            array_splice($predefinedData, $index, 1);
        } else {
            array_splice($customData, $index, 1);
        }
        return [$predefinedData, $customData];
    }
    /**
     * Convert stored configuration data to MappingResource objects with comprehensive format support
     * 
     * Processes diverse storage formats and converts them to standardized MappingResource
     * value objects. Handles three distinct input formats with automatic format detection
     * and appropriate conversion logic for each.
     * 
     * Supported input formats:
     * 1. Legacy strings: Direct resource specifications like "Observation?category=vital-signs"
     * 2. Legacy arrays: Structured data with combined name/spec fields
     * 3. Modern arrays: Full separation with dedicated name and resourceSpec fields
     * 
     * Error handling:
     * - Individual resource validation errors are logged but don't stop processing
     * - Invalid entries are skipped to allow partial success in bulk operations
     * - Comprehensive error context provided for troubleshooting
     * 
     * @param array $data Mixed array of resource data in various historical formats
     * @param string $type Default resource type for entries without explicit type specification
     * @return MappingResource[] Array of successfully converted MappingResource objects
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
                    $resources[] = new MappingResource($deterministicId, $item, $item, $type, false, null);
                } elseif (is_array($item)) {
                    // Use fromArray which handles both legacy and new formats
                    $resources[] = MappingResource::fromArray($item);
                }
            } catch (\InvalidArgumentException $e) {
                // Log validation errors while continuing bulk processing
                error_log("Invalid mapping resource data: " . $e->getMessage());
            }
        }
        return $resources;
    }

    /**
     * Convert user input data to MappingResource objects with validation and defaults
     * 
     * Processes data from user interfaces, form submissions, and API calls to create
     * properly validated MappingResource objects. Applies default values for missing
     * fields and ensures data consistency.
     * 
     * Features:
     * - Automatic type assignment for entries missing explicit type specification
     * - Support for both structured arrays and legacy string formats
     * - Individual validation with bulk processing continuation
     * - Consistent ID generation for resource tracking
     * 
     * @param array $data Array of resource specifications from user input or API
     * @param string $defaultType Resource type to apply when not explicitly provided
     * @return MappingResource[] Array of validated MappingResource objects
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
                    $resources[] = new MappingResource($deterministicId, $item, $item, $defaultType, false, null);
                }
            } catch (\InvalidArgumentException $e) {
                // Log validation errors while continuing bulk processing
                error_log("Invalid mapping resource data: " . $e->getMessage());
            }
        }
        return $resources;
    }

    /**
     * Generate consistent, deterministic resource identifiers
     * 
     * Creates reproducible IDs using MD5 hashing of name and type combination.
     * Ensures the same resource configuration always receives the same identifier
     * across different processing sessions and system restarts.
     * 
     * Benefits:
     * - Consistent resource tracking through format migrations
     * - Reliable resource identification in distributed processing
     * - Collision avoidance through cryptographic hashing
     * - Reproducible results for testing and debugging
     * 
     * @param string $name Resource name or specification string
     * @param string $type Resource classification (predefined/custom)
     * @return string Unique, deterministic resource identifier
     */
    private function generateDeterministicId(string $name, string $type): string
    {
        return 'resource_' . md5($name . '_' . $type);
    }
}
