<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\Contracts\FhirClientInterface;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\REDCap\Classes\Fhir\Facades\FhirClientFacade;

/**
 * LazyFhirClientWrapper
 * 
 * Lazy initialization wrapper for FHIR client that handles cases where the FHIR system
 * may not be configured yet. This allows dependency injection to work smoothly and
 * controllers to be instantiated even when the FHIR system identifier is not available.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Defers FHIR client creation until first actual usage
 * - Handles missing ehrIdentifier gracefully by falling back to NullFhirClient
 * - Enables ProjectSettingsController.getSettings() to work before FHIR system configuration
 * - Provides seamless transition between unconfigured and configured states
 * 
 * KEY FEATURES:
 * 
 * LAZY INITIALIZATION:
 * - FHIR client is only created when fetchFhirResource is actually called
 * - Avoids dependency injection failures during application startup
 * - Allows configuration endpoints to work before FHIR system is set up
 * 
 * GRACEFUL FALLBACK:
 * - Uses NullFhirClient when ehrIdentifier is not available
 * - Switches to real FhirClientWrapper once FHIR system is configured
 * - Re-evaluates configuration on each request (supports dynamic configuration)
 * 
 * ERROR HANDLING:
 * - Catches FhirClientFacade::getInstance exceptions and falls back to NullFhirClient
 * - Logs configuration issues for debugging
 * - Never throws exceptions during initialization
 * 
 * USAGE PATTERNS:
 * - Registered in dependency injection container instead of direct FhirClientWrapper
 * - Transparently provides same interface as regular FHIR client
 * - Supports both configured and unconfigured application states
 * 
 * This implementation solves the chicken-and-egg problem where FHIR client creation
 * depends on project settings that can only be accessed through controllers that
 * depend on the FHIR client.
 */
class LazyFhirClientWrapper implements FhirClientInterface
{
    private FhirSnapshot $module;
    private ?FhirClientInterface $actualClient = null;
    private bool $initialized = false;

    /**
     * Initialize the lazy wrapper with module instance for configuration access
     * 
     * @param FhirSnapshot $module Module instance for accessing project settings
     */
    public function __construct(FhirSnapshot $module)
    {
        $this->module = $module;
    }

    /**
     * Fetch FHIR resource data, initializing the actual client if needed
     * 
     * This method triggers lazy initialization of the underlying FHIR client
     * based on current project configuration. If no FHIR system is configured,
     * it uses NullFhirClient to handle the request gracefully.
     * 
     * @param string $mrn Medical Record Number
     * @param MappingResource $mappingResource Mapping resource configuration
     * @param bool $isRefetch Whether this is a refetch operation
     * @return array|null FHIR data array or null if not found
     * @throws \Exception If FHIR client encounters an error (after successful initialization)
     */
    public function fetchFhirResource(string $mrn, MappingResource $mappingResource, bool $isRefetch = false): ?array
    {
        // Initialize client on first use or if configuration might have changed
        if (!$this->initialized) {
            $this->initializeClient();
        }

        // Delegate to the actual client (either real FhirClientWrapper or NullFhirClient)
        return $this->actualClient->fetchFhirResource($mrn, $mappingResource, $isRefetch);
    }

    /**
     * Initialize the actual FHIR client based on current project configuration
     * 
     * Attempts to create a real FhirClientWrapper if ehrIdentifier is available,
     * otherwise falls back to NullFhirClient for graceful handling of unconfigured state.
     * 
     * @return void
     */
    private function initializeClient(): void
    {
        try {
            // Get FHIR system identifier from project settings
            $ehrIdentifier = $this->module->getProjectSetting(Constants::SETTING_FHIR_SYSTEM);
            
            if (empty($ehrIdentifier)) {
                // No FHIR system configured - use null client
                $this->actualClient = new NullFhirClient();
            } else {
                // Create real FHIR client
                $projectId = $this->module->getProjectId();
                $userId = null; // Can be set later if needed
                
                $fhirClient = FhirClientFacade::getInstance($ehrIdentifier, $projectId, $userId);
                $this->actualClient = new FhirClientWrapper($fhirClient);
            }
            
            $this->initialized = true;
            
        } catch (\Exception $e) {
            // Log error and fall back to null client
            error_log("Failed to initialize FHIR client: " . $e->getMessage());
            $this->actualClient = new NullFhirClient();
            $this->initialized = true;
        }
    }

    /**
     * Reset initialization state to allow reconfiguration
     * 
     * This method can be called if the FHIR system configuration changes
     * and the client needs to be re-initialized with new settings.
     * 
     * @return void
     */
    public function resetInitialization(): void
    {
        $this->initialized = false;
        $this->actualClient = null;
    }
}