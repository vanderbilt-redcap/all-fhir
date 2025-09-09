<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Services\RepeatedFormResourceManager;
use Vanderbilt\AllFhir\Services\RepeatedFormDataAccessor;
use Vanderbilt\AllFhir\Constants\FhirFormFields;
use REDCap;

class MrnService
{
    public function __construct(
        private AllFhir $module,
        private RepeatedFormResourceManager $resourceManager,
        private RepeatedFormDataAccessor $dataAccessor
    ) {
    }

    /**
     * Add a single MRN to the project.
     * Returns a standardized array: [ 'success' => bool, 'mrn' => string, 'error' => string? ]
     */
    public function addOne(string $mrn): array
    {
        $mrn = trim($mrn);
        if ($mrn === '') {
            return ['success' => false, 'mrn' => $mrn, 'error' => 'invalid or empty'];
        }

        // Check for duplicates
        $existing = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!empty($existing)) {
            return ['success' => false, 'mrn' => $mrn, 'error' => 'already exists'];
        }

        $projectId = $this->module->getProjectId();
        $eventId = $this->module->getEventId();

        try {
            $recordId = REDCap::reserveNewRecordId($projectId);

            $data = [
                $recordId => [
                    $eventId => [
                        FhirFormFields::MRN => $mrn,
                    ],
                ],
            ];

            $result = REDCap::saveData([
                'project_id' => $projectId,
                'dataFormat' => 'array',
                'data' => $data,
                'skipFileUploadFields' => false,
                'overwriteBehavior' => 'overwrite',
            ]);

            if (!empty($result['errors'])) {
                return ['success' => false, 'mrn' => $mrn, 'error' => 'failed to save'];
            }

            // Initialize resources for the new MRN
            $configuredResources = $this->module->getAllConfiguredMappingResources();
            $this->resourceManager->addMrn($mrn, $configuredResources);

            return ['success' => true, 'mrn' => $mrn];
        } catch (\Exception $e) {
            return ['success' => false, 'mrn' => $mrn, 'error' => 'exception: ' . $e->getMessage()];
        }
    }

    /**
     * Add many MRNs and return bulk summary.
     * @param string[] $mrns
     * @return array{added_count:int,failed_count:int,success:string[],failures:array<int,array{mrn:string,error:string}>}
     */
    public function addMany(array $mrns): array
    {
        $success = [];
        $failures = [];

        foreach ($mrns as $mrn) {
            $result = $this->addOne($mrn);
            if ($result['success'] ?? false) {
                $success[] = $result['mrn'];
            } else {
                $failures[] = ['mrn' => $result['mrn'], 'error' => $result['error'] ?? 'unknown'];
            }
        }

        return [
            'added_count' => count($success),
            'failed_count' => count($failures),
            'success' => $success,
            'failures' => $failures,
        ];
    }
}

