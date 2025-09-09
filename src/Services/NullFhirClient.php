<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\AllFhir\Contracts\FhirClientInterface;
use Vanderbilt\AllFhir\ValueObjects\MappingResource;

/**
 * NullFhirClient
 * 
 * Null object implementation of FhirClientInterface used when no FHIR system is configured.
 * This allows the application to function gracefully in an unconfigured state while providing
 * clear feedback when FHIR operations are attempted without proper setup.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Implements FhirClientInterface with safe, no-op behavior
 * - Provides clear error messaging for unconfigured FHIR system scenarios
 * - Allows dependency injection to work without throwing exceptions
 * - Enables controllers to be instantiated even when FHIR system is not yet configured
 * 
 * KEY FEATURES:
 * 
 * GRACEFUL HANDLING:
 * - Always returns null for fetchFhirResource calls (no data available)
 * - Logs informational messages when FHIR operations are attempted
 * - Never throws exceptions, maintaining application stability
 * 
 * CONFIGURATION FEEDBACK:
 * - Provides clear indication that FHIR system needs to be configured
 * - Helpful for debugging configuration issues
 * - Maintains consistent interface contract
 * 
 * USAGE PATTERNS:
 * - Used automatically by LazyFhirClientWrapper when ehrIdentifier is unavailable
 * - Allows ProjectSettingsController.getSettings() to work before FHIR system is configured
 * - Enables smooth application startup regardless of configuration state
 * 
 * This implementation follows the Null Object Pattern to eliminate null checks
 * and provide predictable behavior when FHIR functionality is not available.
 */
class NullFhirClient implements FhirClientInterface
{
    /**
     * Handle FHIR resource fetch requests when no FHIR system is configured
     * 
     * Always returns null since no FHIR system is available to fetch data from.
     * Logs an informational message to help with debugging configuration issues.
     * 
     * @param string $mrn Medical Record Number (ignored)
     * @param MappingResource $mappingResource Mapping resource configuration (ignored)
     * @param bool $isRefetch Whether this is a refetch operation (ignored)
     * @return array|null Always returns null (no FHIR system configured)
     */
    public function fetchFhirResource(string $mrn, MappingResource $mappingResource, bool $isRefetch = false): ?array
    {
        // Log informational message for debugging
        error_log("FHIR fetch attempted but no FHIR system is configured. MRN: $mrn, Resource: " . $mappingResource->getName());
        
        // Return null - no data can be fetched without a configured FHIR system
        return null;
    }
}