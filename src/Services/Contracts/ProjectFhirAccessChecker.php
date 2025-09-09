<?php

namespace Vanderbilt\AllFhir\Services\Contracts;

use Vanderbilt\AllFhir\ValueObjects\ProjectFhirAccessStatus;

interface ProjectFhirAccessChecker
{
    /**
     * Aggregate FHIR access token status for users in a project.
     */
    public function getStatus(int $projectId): ProjectFhirAccessStatus;
}

