<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\AllFhir\Services\Contracts\ProjectMetadataProvider;
use Vanderbilt\AllFhir\Services\Validation\Criteria\ProjectStructureCriterion;
use Vanderbilt\AllFhir\ValueObjects\ProjectStructureReport;

class ProjectStructureValidator
{
    private ProjectMetadataProvider $provider;
    /** @var ProjectStructureCriterion[] */
    private array $criteria;

    /** @param ProjectStructureCriterion[] $criteria */
    public function __construct(ProjectMetadataProvider $provider, array $criteria)
    {
        $this->provider = $provider;
        $this->criteria = $criteria;
    }

    public function validate(): ProjectStructureReport
    {
        $results = [];
        foreach ($this->criteria as $criterion) {
            $results[] = $criterion->evaluate($this->provider);
        }
        return new ProjectStructureReport($results);
    }
}

