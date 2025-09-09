<?php

namespace Vanderbilt\AllFhir\Services\Validation\Criteria;

use Vanderbilt\AllFhir\Constants\FhirFormFields;
use Vanderbilt\AllFhir\Services\Contracts\ProjectMetadataProvider;
use Vanderbilt\AllFhir\ValueObjects\CriterionResult;

class ResourceFormRepeatingCriterion implements ProjectStructureCriterion
{
    public function getCode(): string
    {
        return 'resource.form_repeating';
    }

    public function getLabel(): string
    {
        return 'Resource instrument is configured as repeating';
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

        $forms = [];
        foreach ($required as $field) {
            $form = $provider->getFormOfField($field);
            if ($form) {
                $forms[$form][] = $field;
            }
        }

        if (count($forms) !== 1) {
            return new CriterionResult(
                $this->getCode(),
                'Resource instrument could not be uniquely determined',
                false,
                ['allocation' => $forms],
                [
                    'Ensure all required resource fields exist and reside on a single instrument.',
                    'After consolidation, set that instrument as repeating in the project settings.',
                ]
            );
        }

        $resourceForm = array_key_first($forms);
        $isRepeating = $provider->isRepeatingFormAnyEvent($resourceForm);

        if (!$isRepeating) {
            return new CriterionResult(
                $this->getCode(),
                "Instrument '{$resourceForm}' is not configured as repeating",
                false,
                ['resourceForm' => $resourceForm],
                [
                    'Open the project Repeating Instruments and Events settings.',
                    "Set instrument '{$resourceForm}' as a repeating instrument (any applicable event).",
                ]
            );
        }

        return new CriterionResult(
            $this->getCode(),
            $this->getLabel(),
            true,
            ['resourceForm' => $resourceForm],
            []
        );
    }
}

