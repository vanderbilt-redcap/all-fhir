<?php

namespace Vanderbilt\FhirSnapshot\Services\Validation\Criteria;

use Vanderbilt\FhirSnapshot\Services\Contracts\ProjectMetadataProvider;
use Vanderbilt\FhirSnapshot\ValueObjects\CriterionResult;

interface ProjectStructureCriterion
{
    public function getCode(): string;

    public function getLabel(): string;

    /** Execute the check against the project; return a structured result */
    public function evaluate(ProjectMetadataProvider $provider): CriterionResult;
}

