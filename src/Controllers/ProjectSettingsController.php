<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\REDCap\Classes\Fhir\FhirCategory;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataAdverseEventDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataCapabilitiesDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataDecoratorInterface;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataEmailDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataVandyDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystem;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystemManager;
use Vanderbilt\REDCap\Classes\Fhir\FhirVersionManager;

class ProjectSettingsController extends AbstractController
{

    public function __construct(
        protected FhirSnapshot $module,
        protected FhirSystemManager $fhirSystemManager,
    ) {
        parent::__construct($module);
    }

    public function getSettings(Request $request, Response $response) {
        $fhirSystem = $this->module->getProjectSetting('fhir-system');
        $selectedMappingResourcesData = $this->module->getProjectSetting('mapping-resources') ?? [];
        $selectedCustomMappingResourcesData = $this->module->getProjectSetting('custom-mapping-resources') ?? [];
        
        // Convert stored data to MappingResource value objects
        $selectedMappingResources = $this->convertToMappingResources($selectedMappingResourcesData, MappingResource::TYPE_PREDEFINED);
        $selectedCustomMappingResources = $this->convertToMappingResources($selectedCustomMappingResourcesData, MappingResource::TYPE_CUSTOM);
        
        $fhirSystems = $this->fhirSystemManager->getFhirSystems();
        /* $fhirMetadataSource = $this->getFhirMetadataSource($fhirSystem);
        $mappingResources = $fhirMetadataSource->getList(); */
        $mappingResources = $this->getMappingCategories();
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
        $selectedMappingResources = $this->convertFromArrayToMappingResources($selectedMappingResourcesData, MappingResource::TYPE_PREDEFINED);
        $selectedCustomMappingResources = $this->convertFromArrayToMappingResources($selectedCustomMappingResourcesData, MappingResource::TYPE_CUSTOM);

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

    private function getMappingCategories() {
        return [
            FhirCategory::APPOINTMENT_APPOINTMENTS,
            FhirCategory::APPOINTMENT_SCHEDULED_SURGERIES,
            FhirCategory::ALLERGY_INTOLERANCE,
            FhirCategory::ADVERSE_EVENT,
            FhirCategory::CONDITION,
            FhirCategory::CONDITION_DENTAL_FINDING,
            FhirCategory::CONDITION_GENOMICS,
            FhirCategory::CONDITION_INFECTION,
            FhirCategory::CONDITION_MEDICAL_HISTORY,
            FhirCategory::CONDITION_PROBLEMS,
            FhirCategory::CONDITION_REASON_FOR_VISIT,
            FhirCategory::CORE_CHARACTERISTICS,
            FhirCategory::COVERAGE,
            FhirCategory::DEMOGRAPHICS,
            FhirCategory::DEVICE_IMPLANTS,
            FhirCategory::DIAGNOSIS,
            // FhirCategory::DOCUMENT_REFERENCE_CLINICAL_NOTES,
            FhirCategory::ENCOUNTER,
            FhirCategory::IMMUNIZATION,
            FhirCategory::LABORATORY,
            FhirCategory::MEDICATIONS,
            // FhirCategory::PRACTITIONER,
            FhirCategory::SOCIAL_HISTORY,
            FhirCategory::PROCEDURE,
            // FhirCategory::RESEARCH_STUDY,
            // FhirCategory::SMART_DATA,
            FhirCategory::VITAL_SIGNS,
        ];
    }

    private function getFhirMetadataSource($fhirSystemID): FhirMetadataDecoratorInterface|null
    {
        if(!$fhirSystemID) return null;

        $fhirSystem = new FhirSystem($fhirSystemID);
        $fhirVersionManager = FhirVersionManager::getInstance($fhirSystem);
        $metadataSource = $fhirVersionManager->getFhirMetadataSource();
        $metadataSource = new FhirMetadataVandyDecorator($metadataSource);
        $metadataSource = new FhirMetadataCapabilitiesDecorator($metadataSource, $fhirVersionManager);
        $metadataSource = new FhirMetadataEmailDecorator($metadataSource);
        $metadataSource = new FhirMetadataAdverseEventDecorator($metadataSource);
        return $metadataSource;
    }

    /**
     * Convert stored data to MappingResource value objects
     * 
     * @param array $data
     * @param string $type
     * @return MappingResource[]
     */
    private function convertToMappingResources(array $data, string $type): array
    {
        $resources = [];
        foreach ($data as $item) {
            try {
                // Handle both old format (string) and new format (array with id)
                if (is_string($item)) {
                    // For legacy string data, create with deterministic ID to ensure consistency
                    $deterministicId = 'resource_' . md5($item . '_' . $type);
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
    private function convertFromArrayToMappingResources(array $data, string $defaultType): array
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
                    $deterministicId = 'resource_' . md5($item . '_' . $defaultType);
                    $resources[] = new MappingResource($deterministicId, $item, $defaultType);
                }
            } catch (\InvalidArgumentException $e) {
                // Skip invalid entries but log the error
                error_log("Invalid mapping resource data: " . $e->getMessage());
            }
        }
        return $resources;
    }

}
