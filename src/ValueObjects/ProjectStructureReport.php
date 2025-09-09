<?php

namespace Vanderbilt\AllFhir\ValueObjects;

class ProjectStructureReport
{
    /** @var CriterionResult[] */
    private array $results = [];

    public function __construct(array $results)
    {
        $this->results = $results;
    }

    /** @return CriterionResult[] */
    public function getResults(): array
    {
        return $this->results;
    }

    public function isCompliant(): bool
    {
        foreach ($this->results as $r) {
            if (!$r->passed() && $r->getSeverity() !== 'info') {
                return false;
            }
        }
        return true;
    }

    /** Human-readable missing messages derived from failing criteria */
    public function getMissingMessages(): array
    {
        $messages = [];
        foreach ($this->results as $r) {
            if (!$r->passed()) {
                $messages[] = $r->getLabel();
            }
        }
        return $messages;
    }

    /** Aggregated remediation steps from failing criteria */
    public function getRemediationSteps(): array
    {
        $steps = [];
        foreach ($this->results as $r) {
            if (!$r->passed() && $r->getRemediationSteps()) {
                $steps[$r->getCode()] = $r->getRemediationSteps();
            }
        }
        return $steps;
    }
}

