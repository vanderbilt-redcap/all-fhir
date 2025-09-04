<?php

namespace Vanderbilt\FhirSnapshot\Services\Validation\Criteria;

use Vanderbilt\FhirSnapshot\Constants\FhirFormFields;
use Vanderbilt\FhirSnapshot\Services\Contracts\ProjectMetadataProvider;
use Vanderbilt\FhirSnapshot\ValueObjects\CriterionResult;

class NonRepeatingMrnCriterion implements ProjectStructureCriterion
{
    public function getCode(): string
    {
        return 'mrn.non_repeating';
    }

    public function getLabel(): string
    {
        return 'MRN field exists on a non-repeating instrument';
    }

    public function evaluate(ProjectMetadataProvider $provider): CriterionResult
    {
        $metadata = $provider->getMetadata();
        $mrnField = FhirFormFields::MRN;

        if (!isset($metadata[$mrnField])) {
            return new CriterionResult(
                $this->getCode(),
                "MRN field '{$mrnField}' not found",
                false,
                [],
                [
                    "Create or open a non-repeating instrument for patient identifiers.",
                    "Add a new field with variable name '{$mrnField}'.",
                    "Ensure this instrument is not set as a repeating instrument on any event.",
                ]
            );
        }

        $form = $metadata[$mrnField]['form_name'] ?? null;

        if (!$form) {
            return new CriterionResult(
                $this->getCode(),
                "MRN field '{$mrnField}' exists but has no instrument",
                false,
                [],
                ["Assign the MRN field to a non-repeating instrument."]
            );
        }

        $isFormRepeating = $provider->isRepeatingFormAnyEvent($form);
        if ($isFormRepeating) {
            return new CriterionResult(
                $this->getCode(),
                "Instrument '{$form}' is configured as repeating and contains MRN",
                false,
                ['mrnForm' => $form],
                [
                    "Open the project's repeating instruments settings.",
                    "Remove instrument '{$form}' from repeating configuration for all events where it repeats.",
                ]
            );
        }

        return new CriterionResult(
            $this->getCode(),
            $this->getLabel(),
            true,
            ['mrnForm' => $form],
            []
        );
    }
}

