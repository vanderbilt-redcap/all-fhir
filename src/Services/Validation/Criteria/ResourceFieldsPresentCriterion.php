<?php

namespace Vanderbilt\FhirSnapshot\Services\Validation\Criteria;

use Vanderbilt\FhirSnapshot\Constants\FhirFormFields;
use Vanderbilt\FhirSnapshot\Services\Contracts\ProjectMetadataProvider;
use Vanderbilt\FhirSnapshot\ValueObjects\CriterionResult;

class ResourceFieldsPresentCriterion implements ProjectStructureCriterion
{
    public function getCode(): string
    {
        return 'resource.fields_present';
    }

    public function getLabel(): string
    {
        return 'All required resource fields exist';
    }

    public function evaluate(ProjectMetadataProvider $provider): CriterionResult
    {
        $required = [
            FhirFormFields::RESOURCE_NAME,
            FhirFormFields::RESOURCE_SPEC,
            FhirFormFields::RESOURCE_TYPE,
            FhirFormFields::RESOURCE_STATUS,
            FhirFormFields::MAPPING_RESOURCE_ID,
            FhirFormFields::FILE_UPLOAD,
            FhirFormFields::FETCH_DATE,
            FhirFormFields::ERROR_MESSAGE,
            FhirFormFields::PAGINATION_INFO,
        ];

        $metadata = $provider->getMetadata();
        $missing = [];
        foreach ($required as $field) {
            if (!isset($metadata[$field])) {
                $missing[] = $field;
            }
        }

        if (!empty($missing)) {
            return new CriterionResult(
                $this->getCode(),
                'Resource fields missing: ' . implode(', ', $missing),
                false,
                ['missing' => $missing],
                [
                    'Create a repeating instrument to store resource instances (if not present).',
                    'Add the missing fields with the exact variable names listed in the message.',
                ]
            );
        }

        return new CriterionResult(
            $this->getCode(),
            $this->getLabel(),
            true,
            [],
            []
        );
    }
}

