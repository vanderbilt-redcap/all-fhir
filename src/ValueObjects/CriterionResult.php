<?php

namespace Vanderbilt\AllFhir\ValueObjects;

class CriterionResult
{
    /** Machine-friendly code, e.g., `mrn.non_repeating` */
    private string $code;
    /** Human-readable label, e.g., `MRN field is on a non-repeating instrument` */
    private string $label;
    /** Whether the criterion passed */
    private bool $passed;
    /** Details such as instrument names, fields, etc. */
    private array $details;
    /** Steps to address when failing */
    private array $remediationSteps;
    /** severity: error|warning|info */
    private string $severity;

    public function __construct(
        string $code,
        string $label,
        bool $passed,
        array $details = [],
        array $remediationSteps = [],
        string $severity = 'error'
    ) {
        $this->code = $code;
        $this->label = $label;
        $this->passed = $passed;
        $this->details = $details;
        $this->remediationSteps = $remediationSteps;
        $this->severity = $severity;
    }

    public function getCode(): string { return $this->code; }
    public function getLabel(): string { return $this->label; }
    public function passed(): bool { return $this->passed; }
    public function getDetails(): array { return $this->details; }
    public function getRemediationSteps(): array { return $this->remediationSteps; }
    public function getSeverity(): string { return $this->severity; }
}

