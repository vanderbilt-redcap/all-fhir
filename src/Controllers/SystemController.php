<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class SystemController
{
    public function getAvailableFhirSystems(Request $request, Response $response): Response
    {
        // throw new \RuntimeException("FHIR system config missing.");

        $response->getBody()->write('/get-available');
        return $response;
    }

    public function getAvailableResourceTypes(Request $request, Response $response): Response
    {
        $response->getBody()->write('/get-available');
        return $response;
    }
}
