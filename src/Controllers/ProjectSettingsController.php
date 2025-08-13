<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
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
    ) {
        parent::__construct($module);
    }

    public function getSettings(Request $request, Response $response) {
        $fhirSystem = $this->module->getProjectSetting('fhir-system');
        $selectedMappingResourcesData = $this->module->getProjectSetting('mapping-resources') ?? [];
        $selectedCustomMappingResourcesData = $this->module->getProjectSetting('custom-mapping-resources') ?? [];
        
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

    public function updateSettings(Request $request, Response $response): Response
    {
        $params = (array)$request->getParsedBody();
        $fhirSystem = $params['fhir_system'] ?? null;
        $selectedMappingResourcesData = $params['selected_mapping_resources'] ?? [];
        $selectedCustomMappingResourcesData = $params['selected_custom_mapping_resources'] ?? [];

        // Convert incoming data to MappingResource value objects and then back to storage format
        $selectedMappingResources = $this->mappingResourceService->convertFromArrayToMappingResources($selectedMappingResourcesData, MappingResource::TYPE_PREDEFINED);
        $selectedCustomMappingResources = $this->mappingResourceService->convertFromArrayToMappingResources($selectedCustomMappingResourcesData, MappingResource::TYPE_CUSTOM);

        // Store as arrays for REDCap settings
        $mappingResourcesData = array_map(fn($resource) => $resource->toArray(), $selectedMappingResources);
        $customMappingResourcesData = array_map(fn($resource) => $resource->toArray(), $selectedCustomMappingResources);

        $this->module->setProjectSetting('fhir-system', $fhirSystem);
        $this->module->setProjectSetting('mapping-resources', $mappingResourcesData);
        $this->module->setProjectSetting('custom-mapping-resources', $customMappingResourcesData);

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'message' => 'Settings updated successfully.'
        ]));
        return $response->withHeader('Content-Type', 'application/json');
    }


}
