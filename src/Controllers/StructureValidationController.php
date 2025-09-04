<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Services\Contracts\ProjectMetadataProvider as ProjectMetadataProviderContract;
use Vanderbilt\FhirSnapshot\Services\ProjectStructureValidator;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\NonRepeatingMrnCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFieldsPresentCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFieldsSameInstrumentCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFormRepeatingCriterion;

class StructureValidationController extends AbstractController
{
    public function __construct(
        protected FhirSnapshot $module,
        protected ProjectMetadataProviderContract $provider,
    ) {
        parent::__construct($module);
    }

    public function validate(Request $request, Response $response): Response
    {
        $criteria = [
            new NonRepeatingMrnCriterion(),
            new ResourceFieldsPresentCriterion(),
            new ResourceFieldsSameInstrumentCriterion(),
            new ResourceFormRepeatingCriterion(),
        ];

        $validator = new ProjectStructureValidator($this->provider, $criteria);
        $report = $validator->validate();

        $payload = [
            'compliant' => $report->isCompliant(),
            'results' => array_map(function($r) {
                return [
                    'code' => $r->getCode(),
                    'label' => $r->getLabel(),
                    'passed' => $r->passed(),
                    'severity' => $r->getSeverity(),
                    'details' => $r->getDetails(),
                    'remediation_steps' => $r->getRemediationSteps(),
                ];
            }, $report->getResults()),
            'missing_messages' => $report->getMissingMessages(),
            'remediation' => $report->getRemediationSteps(),
        ];

        $response->getBody()->write(json_encode($payload));
        return $response->withHeader('Content-Type', 'application/json');
    }
}

