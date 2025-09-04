<?php

namespace Vanderbilt\FhirSnapshot\Services\Validation\Criteria;

use Vanderbilt\FhirSnapshot\Constants\FhirFormFields;
use Vanderbilt\FhirSnapshot\Services\Contracts\ProjectMetadataProvider;
use Vanderbilt\FhirSnapshot\ValueObjects\CriterionResult;

class ResourceFieldsSameInstrumentCriterion implements ProjectStructureCriterion
{
    public function getCode(): string
    {
        return 'resource.fields_same_instrument';
    }

    public function getLabel(): string
    {
        return 'All resource fields are on the same instrument';
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

        if (empty($forms)) {
            return new CriterionResult(
                $this->getCode(),
                'Resource fields not found on any instrument',
                false,
                [],
                ['Add the required resource fields to a single repeating instrument.']
            );
        }

        if (count($forms) > 1) {
            $details = [];
            foreach ($forms as $form => $fields) {
                $details[] = $form . ' [' . implode(', ', $fields) . ']';
            }

            return new CriterionResult(
                $this->getCode(),
                'Resource fields are split across multiple instruments',
                false,
                ['allocation' => $forms],
                [
                    'Choose a single instrument to hold all resource fields.',
                    'Move fields from other instruments into the chosen instrument to consolidate.',
                ]
            );
        }

        $resourceForm = array_key_first($forms);
        return new CriterionResult(
            $this->getCode(),
            $this->getLabel(),
            true,
            ['resourceForm' => $resourceForm],
            []
        );
    }
}

