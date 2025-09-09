<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Services\Contracts\ProjectFhirAccessChecker;
use Vanderbilt\FhirSnapshot\Constants\FhirAccessState;

class FhirAccessController extends AbstractController
{
    public function __construct(
        protected FhirSnapshot $module,
        protected ProjectFhirAccessChecker $checker,
    ) {
        parent::__construct($module);
    }

    public function getStatus(Request $request, Response $response): Response
    {
        $projectId = (int)$this->module->getProjectId();
        $status = $this->checker->getStatus($projectId);

        // Determine overall state and banner message
        $state = FhirAccessState::HasValidToken;
        if (!$status->getFhirSystemId()) {
            $state = FhirAccessState::NoFhirSystem;
        } elseif (!$status->hasAnyValidToken()) {
            $state = FhirAccessState::NoValidTokens;
        }

        // High-level banner signals for UI
        if ($state === FhirAccessState::NoFhirSystem) {
            $banner = [
                'should_warn' => true,
                'level' => 'warning',
                'message' => 'No FHIR system is configured for this project. Select a FHIR system in Setup to enable token authorization and data fetching.',
            ];
        } elseif ($state === FhirAccessState::NoValidTokens) {
            $banner = [
                'should_warn' => true,
                'level' => 'warning',
                'message' => 'No users in this project currently have a valid FHIR access token.',
            ];
        } else { // has_valid_token
            $banner = [
                'should_warn' => false,
                'level' => 'info',
                'message' => 'At least one user has a valid FHIR access token.',
            ];
        }

        // Provide Standalone Launch link similar to token-warning partial
        $standaloneLaunchUrl = null;
        if ($status->getFhirSystemId()) {
            $standaloneLaunchUrl = APP_PATH_WEBROOT_FULL . '/ehr.php?standalone_launch=1&ehr_id=' . $status->getFhirSystemId();
        }

        // Frontend Setup page (hash route within SPA)
        $setupRoute = '#/setup';

        $payload = [
            'status' => $status->toArray(),
            'banner' => $banner,
            'state' => $state->value,
            'standalone_launch_url' => $standaloneLaunchUrl,
            'setup_route' => $setupRoute,
        ];

        $response->getBody()->write(json_encode($payload));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
