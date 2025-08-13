<?php

namespace Vanderbilt\FhirSnapshot\Factories;

use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;

/**
 * RepeatedFormDataAccessorFactory
 * 
 * Factory for creating project-specific RepeatedFormDataAccessor instances.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Creates RepeatedFormDataAccessor instances with proper project context
 * - Abstracts away project-specific constructor requirements
 * - Enables dependency injection for services that need project-specific data access
 * - Provides consistent instance creation across the application
 * 
 * KEY FEATURES:
 * - Project-specific instance creation
 * - Default instrument name handling
 * - Simple factory interface
 * - Proper dependency separation
 * 
 * USAGE:
 * $factory->create($projectId) // Uses default instrument name
 * $factory->create($projectId, 'custom_instrument') // Custom instrument
 */
class RepeatedFormDataAccessorFactory
{
    /**
     * Create a RepeatedFormDataAccessor for the specified project
     * 
     * @param string $projectId REDCap project ID
     * @param string $instrumentName Instrument name (default: 'fhir_resources')
     * @return RepeatedFormDataAccessor Configured data accessor instance
     */
    public function create(string $projectId, string $instrumentName = 'fhir_resources'): RepeatedFormDataAccessor
    {
        return new RepeatedFormDataAccessor($projectId, $instrumentName);
    }
}