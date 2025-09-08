<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Services\Contracts\ProjectFhirAccessChecker;

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

        // High-level banner signals for UI
        $banner = [
            'should_warn' => !$status->hasAnyValidToken(),
            'level' => $status->hasAnyValidToken() ? 'info' : 'warning',
            'message' => $status->hasAnyValidToken()
                ? 'At least one user has a valid FHIR access token.'
                : 'No users in this project currently have a valid FHIR access token.',
        ];

        // Provide Standalone Launch link similar to token-warning partial
        $standaloneLaunchUrl = null;
        if ($status->getFhirSystemId()) {
            $standaloneLaunchUrl = APP_PATH_WEBROOT_FULL . '/ehr.php?standalone_launch=1&ehr_id=' . $status->getFhirSystemId();
        }

        $payload = [
            'status' => $status->toArray(),
            'banner' => $banner,
            'standalone_launch_url' => $standaloneLaunchUrl,
        ];

        $response->getBody()->write(json_encode($payload));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
