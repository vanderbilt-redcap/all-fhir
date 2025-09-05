<?php

namespace Vanderbilt\FhirSnapshot\Services\Contracts;

use Vanderbilt\FhirSnapshot\ValueObjects\ProjectFhirAccessStatus;

interface ProjectFhirAccessChecker
{
    /**
     * Aggregate FHIR access token status for users in a project.
     */
    public function getStatus(int $projectId): ProjectFhirAccessStatus;
}

