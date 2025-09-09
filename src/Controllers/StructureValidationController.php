<?php

namespace Vanderbilt\AllFhir\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Services\Contracts\ProjectMetadataProvider as ProjectMetadataProviderContract;
use Vanderbilt\AllFhir\Services\ProjectStructureValidator;
use Vanderbilt\AllFhir\Services\Validation\Criteria\NonRepeatingMrnCriterion;
use Vanderbilt\AllFhir\Services\Validation\Criteria\ResourceFieldsPresentCriterion;
use Vanderbilt\AllFhir\Services\Validation\Criteria\ResourceFieldsSameInstrumentCriterion;
use Vanderbilt\AllFhir\Services\Validation\Criteria\ResourceFormRepeatingCriterion;

class StructureValidationController extends AbstractController
{
    public function __construct(
        protected AllFhir $module,
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

