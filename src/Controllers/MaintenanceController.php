<?php

namespace Vanderbilt\AllFhir\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Services\RepeatedFormResourceManager;

class MaintenanceController extends AbstractController
{
    public function __construct(
        protected AllFhir $module,
        protected RepeatedFormResourceManager $resourceManager
    ) {
        parent::__construct($module);
    }

    /**
     * Backfill missing mapping_resource_id on existing metadata instances using configured resources.
     */
    public function backfillMappingResourceIds(Request $request, Response $response): Response
    {
        $result = $this->resourceManager->backfillMissingMappingIds();
        return $this->jsonResponse($response, [
            'status' => 'success',
            'summary' => $result
        ]);
    }
}

