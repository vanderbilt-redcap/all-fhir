<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\REDCap\Classes\Fhir\FhirCategory;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataAdverseEventDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataCapabilitiesDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataDecoratorInterface;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataEmailDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataVandyDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\FhirMetadataSource;
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
        $selectedMappingResources = $this->module->getProjectSetting('mapping-resources') ?? [];
        $selectedCustomMappingResources = $this->module->getProjectSetting('custom-mapping-resources') ?? [];
        
        $fhirSystems = $this->fhirSystemManager->getFhirSystems();
        /* $fhirMetadataSource = $this->getFhirMetadataSource($fhirSystem);
        $mappingResources = $fhirMetadataSource->getList(); */
        $mappingResources = $this->getMappingCategories();
        $settings = [
            'fhir_system' => $fhirSystem,
            'fhir_systems' => $fhirSystems,
            'mapping_resources' => $mappingResources,
            'selected_mapping_resources' => $selectedMappingResources,
            'selected_custom_mapping_resources' => $selectedCustomMappingResources,
        ];
        $response->getBody()->write(json_encode($settings));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function updateSettings(Request $request, Response $response): Response
    {
        $params = (array)$request->getParsedBody();
        $fhirSystem = $params['fhir_system'] ?? null;
        $selectedMappingResources = $params['selected_mapping_resources'] ?? [];
        $selectedCustomMappingResources = $params['selected_custom_mapping_resources'] ?? [];

        $this->module->setProjectSetting('fhir-system', $fhirSystem);
        $this->module->setProjectSetting('mapping-resources', $selectedMappingResources);
        $this->module->setProjectSetting('custom-mapping-resources', $selectedCustomMappingResources);

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

}
