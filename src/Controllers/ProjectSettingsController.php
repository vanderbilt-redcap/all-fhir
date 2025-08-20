<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\Services\FhirCategoryService;
use Vanderbilt\FhirSnapshot\Services\FhirMetadataService;
use Vanderbilt\FhirSnapshot\Services\MappingResourceService;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystemManager;

class ProjectSettingsController extends AbstractController
{

    public function __construct(
        protected FhirSnapshot $module,
        protected FhirSystemManager $fhirSystemManager,
        protected MappingResourceService $mappingResourceService,
        protected FhirMetadataService $fhirMetadataService,
        protected FhirCategoryService $fhirCategoryService,
        protected RepeatedFormResourceManager $resourceManager
    ) {
        parent::__construct($module);
    }

    public function getSettings(Request $request, Response $response) {
        $fhirSystem = $this->module->getProjectSetting(Constants::SETTING_FHIR_SYSTEM);
        $selectedMappingResourcesData = $this->module->getProjectSetting(Constants::SETTING_MAPPING_RESOURCES) ?? [];
        $selectedCustomMappingResourcesData = $this->module->getProjectSetting(Constants::SETTING_CUSTOM_MAPPING_RESOURCES) ?? [];
        
        // Convert stored data to MappingResource value objects
        $selectedMappingResources = $this->mappingResourceService->convertToMappingResources($selectedMappingResourcesData, MappingResource::TYPE_PREDEFINED);
        $selectedCustomMappingResources = $this->mappingResourceService->convertToMappingResources($selectedCustomMappingResourcesData, MappingResource::TYPE_CUSTOM);
        
        $fhirSystems = $this->fhirSystemManager->getFhirSystems();
        $mappingResources = $this->fhirCategoryService->getAvailableCategories();
        $settings = [
            'fhir_system' => $fhirSystem,
            'fhir_systems' => $fhirSystems,
            'mapping_resources' => $mappingResources,
            'selected_mapping_resources' => array_map(fn($resource) => $resource->toArray(), $selectedMappingResources),
            'selected_custom_mapping_resources' => array_map(fn($resource) => $resource->toArray(), $selectedCustomMappingResources),
        ];
        $response->getBody()->write(json_encode($settings));
        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * Update project settings and synchronize mapping resource changes
     * 
     * Handles the complete flow of updating FHIR project settings including:
     * - Detecting mapping resource changes (added, modified, removed)
     * - Synchronizing changes with existing data and queue tasks
     * - Providing detailed feedback about sync operations
     * 
     * @param Request $request HTTP request with new settings
     * @param Response $response HTTP response
     * @return Response JSON response with sync results
     */
    public function updateSettings(Request $request, Response $response): Response
    {
        $params = (array)$request->getParsedBody();
        $fhirSystem = $params['fhir_system'] ?? null;
        $selectedMappingResourcesData = $params['selected_mapping_resources'] ?? [];
        $selectedCustomMappingResourcesData = $params['selected_custom_mapping_resources'] ?? [];

        // Get current mapping resources before changes
        $currentMappingResourcesData = $this->module->getProjectSetting(Constants::SETTING_MAPPING_RESOURCES) ?? [];
        $currentCustomMappingResourcesData = $this->module->getProjectSetting(Constants::SETTING_CUSTOM_MAPPING_RESOURCES) ?? [];
        
        $currentMappingResources = $this->mappingResourceService->convertToMappingResources($currentMappingResourcesData, MappingResource::TYPE_PREDEFINED);
        $currentCustomMappingResources = $this->mappingResourceService->convertToMappingResources($currentCustomMappingResourcesData, MappingResource::TYPE_CUSTOM);
        $currentAllResources = array_merge($currentMappingResources, $currentCustomMappingResources);

        // Convert incoming data to MappingResource value objects
        $selectedMappingResources = $this->mappingResourceService->convertFromArrayToMappingResources($selectedMappingResourcesData, MappingResource::TYPE_PREDEFINED);
        $selectedCustomMappingResources = $this->mappingResourceService->convertFromArrayToMappingResources($selectedCustomMappingResourcesData, MappingResource::TYPE_CUSTOM);
        $newAllResources = array_merge($selectedMappingResources, $selectedCustomMappingResources);

        // Detect changes in mapping resources
        $changeResults = $this->detectMappingResourceChanges($currentAllResources, $newAllResources);
        
        // Store new settings
        $mappingResourcesData = array_map(fn($resource) => $resource->toArray(), $selectedMappingResources);
        $customMappingResourcesData = array_map(fn($resource) => $resource->toArray(), $selectedCustomMappingResources);

        $this->module->setProjectSetting(Constants::SETTING_FHIR_SYSTEM, $fhirSystem);
        $this->module->setProjectSetting(Constants::SETTING_MAPPING_RESOURCES, $mappingResourcesData);
        $this->module->setProjectSetting(Constants::SETTING_CUSTOM_MAPPING_RESOURCES, $customMappingResourcesData);

        // Synchronize mapping resource changes
        $syncResults = $this->synchronizeMappingResourceChanges($changeResults);

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'message' => 'Settings updated successfully.',
            'sync_results' => $syncResults
        ]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * Detect changes between current and new mapping resources
     * 
     * @param MappingResource[] $currentResources Current mapping resources
     * @param MappingResource[] $newResources New mapping resources  
     * @return array Array with 'added', 'modified', and 'removed' resource arrays
     */
    private function detectMappingResourceChanges(array $currentResources, array $newResources): array
    {
        $currentByKey = [];
        $newByKey = [];
        
        // Index resources by a unique key (resourceSpec + type)
        foreach ($currentResources as $resource) {
            $key = $resource->getResourceSpec() . '|' . $resource->getType();
            $currentByKey[$key] = $resource;
        }
        
        foreach ($newResources as $resource) {
            $key = $resource->getResourceSpec() . '|' . $resource->getType();
            $newByKey[$key] = $resource;
        }
        
        $added = [];
        $modified = [];
        $removed = [];
        
        // Find added resources (in new but not in current)
        foreach ($newByKey as $key => $resource) {
            if (!isset($currentByKey[$key])) {
                $added[] = $resource;
            } elseif ($currentByKey[$key]->getName() !== $resource->getName()) {
                // Same resourceSpec but different display name = modification
                $modified[] = $resource;
            }
        }
        
        // Find removed resources (in current but not in new)
        foreach ($currentByKey as $key => $resource) {
            if (!isset($newByKey[$key])) {
                $removed[] = $resource;
            }
        }
        
        return [
            'added' => $added,
            'modified' => $modified,
            'removed' => $removed
        ];
    }

    /**
     * Synchronize mapping resource changes with data and queue tasks
     * 
     * @param array $changeResults Results from detectMappingResourceChanges
     * @return array Sync results with counts and statistics
     */
    private function synchronizeMappingResourceChanges(array $changeResults): array
    {
        $syncResults = [
            'resources_added' => 0,
            'resources_modified' => 0, 
            'resources_removed' => 0,
            'tasks_created' => 0,
            'instances_updated' => 0,
            'total_mrns' => 0
        ];
        
        // Skip sync if no changes detected
        if (empty($changeResults['added']) && empty($changeResults['modified']) && empty($changeResults['removed'])) {
            return $syncResults;
        }
        
        try {
            // Get all MRNs for sync operations
            $allMrns = $this->resourceManager->getAllMrns();
            $syncResults['total_mrns'] = count($allMrns);
            
            // Process added resources
            foreach ($changeResults['added'] as $resource) {
                $tasks = $this->resourceManager->addMappingResource($resource);
                $syncResults['resources_added']++;
                $syncResults['tasks_created'] += count($tasks);
                $syncResults['instances_updated'] += count($allMrns);
            }
            
            // Process modified resources
            foreach ($changeResults['modified'] as $resource) {
                // For modified resources, we need to update existing instances
                // This is a simplified approach - in practice you might want more granular control
                $tasks = $this->resourceManager->updateMappingResource($resource);
                $syncResults['resources_modified']++;
                $syncResults['tasks_created'] += count($tasks);
                $syncResults['instances_updated'] += count($allMrns);
            }
            
            // Process removed resources  
            foreach ($changeResults['removed'] as $resource) {
                $result = $this->resourceManager->removeMappingResource($resource);
                $syncResults['resources_removed']++;
                $syncResults['instances_updated'] += $result['instances_affected'] ?? 0;
            }
            
        } catch (\Exception $e) {
            // Log error but don't fail the settings update
            error_log("Error during mapping resource synchronization: " . $e->getMessage());
            $syncResults['error'] = $e->getMessage();
        }
        
        return $syncResults;
    }

}
