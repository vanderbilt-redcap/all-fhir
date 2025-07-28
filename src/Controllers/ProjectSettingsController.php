<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystemManager;

class ProjectSettingsController extends AbstractController
{

    public function __construct(
        protected FhirSnapshot $module,
        protected FhirSystemManager $fhirSystemManager,
    ) {
        parent::__construct($module);
    }

    public function getProjectSettings(Request $request, Response $response) {
        $fhirSystem = $this->module->getProjectSetting('fhir-system');
        $selectedMappingResources = $this->module->getProjectSetting('mapping-resources') ?? [];
        
        $fhirSystems = $this->fhirSystemManager->getFhirSystems();
        $mappingResources = [];
        $settings = [
            'fhir_system' => $fhirSystem,
            'fhir_systems' => $fhirSystems,
            'mapping_resources' => $mappingResources,
            'selected_mapping_resources' => $selectedMappingResources,
        ];
        $response->getBody()->write(json_encode($settings));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function updateSettings(Request $request, Response $response): Response
    {
        $params = (array)$request->getParsedBody();
        $fhirSystem = $params['fhirSystem'] ?? null;
        $selectedMappingResources = $params['selectedMappingResources'] ?? [];

        $this->module->setProjectSetting('fhir-system', $fhirSystem);
        $this->module->setProjectSetting('mapping-resources', $selectedMappingResources);

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'message' => 'Settings updated successfully.'
        ]));
        return $response->withHeader('Content-Type', 'application/json');
    }

}
