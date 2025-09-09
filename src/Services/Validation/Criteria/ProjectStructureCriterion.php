<?php

namespace Vanderbilt\AllFhir\Services\Validation\Criteria;

use Vanderbilt\AllFhir\Services\Contracts\ProjectMetadataProvider;
use Vanderbilt\AllFhir\ValueObjects\CriterionResult;

interface ProjectStructureCriterion
{
    public function getCode(): string;

    public function getLabel(): string;

    /** Execute the check against the project; return a structured result */
    public function evaluate(ProjectMetadataProvider $provider): CriterionResult;
}

