<?php

namespace Vanderbilt\FhirSnapshot\Factories;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\Services\ResourceSynchronizationService;

/**
 * RepeatedFormResourceManagerFactory
 * 
 * Factory for creating project-specific RepeatedFormResourceManager instances.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Creates RepeatedFormResourceManager instances with proper project context
 * - Assembles all required dependencies for resource management
 * - Handles complex dependency graph creation
 * - Provides consistent instance creation across the application
 * - Isolates project-specific logic from dependency injection container
 * 
 * KEY FEATURES:
 * - Project-specific instance creation
 * - Automatic dependency assembly
 * - Proper service graph construction
 * - Dependency injection integration
 * - Project isolation
 * 
 * USAGE:
 * $factory->create($projectId) // Creates complete resource manager for project
 */
class RepeatedFormResourceManagerFactory
{
    public function __construct(
        private RepeatedFormDataAccessorFactory $dataAccessorFactory,
        private FhirSnapshot $module,
        private QueueManager $queueManager,
    ) {}

    /**
     * Create a RepeatedFormResourceManager for the specified project
     * 
     * @param string $projectId REDCap project ID
     * @param string $instrumentName Instrument name (default: 'fhir_resources')
     * @return RepeatedFormResourceManager Fully configured resource manager
     */
    public function create(string $projectId, string $instrumentName = 'fhir_resources'): RepeatedFormResourceManager
    {
        // Create project-specific data accessor
        $dataAccessor = $this->dataAccessorFactory->create($projectId, $instrumentName);
        
        // Create project-specific synchronization service
        $syncService = new ResourceSynchronizationService($dataAccessor, $this->queueManager, $projectId);
        
        // Create and return the resource manager
        return new RepeatedFormResourceManager(
            $this->module,
            $dataAccessor,
            $syncService,
            $this->queueManager
        );
    }
}