<?php

namespace Vanderbilt\AllFhir\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Services\FhirEndpointRegistry;

class EndpointParamsController extends AbstractController
{
    public function __construct(
        protected AllFhir $module,
        protected FhirEndpointRegistry $registry
    ) {
        parent::__construct($module);
    }

    public function list(Request $request, Response $response): Response
    {
        $schemas = $this->registry->listParamSchemas();
        $payload = [ 'schemas' => $schemas ];
        $response->getBody()->write(json_encode($payload));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function get(Request $request, Response $response, string $resourceSpec): Response
    {
        $schema = $this->registry->getParamSchemaForCategory($resourceSpec);
        $payload = [ 'resourceSpec' => $resourceSpec, 'schema' => $schema ];
        $response->getBody()->write(json_encode($payload));
        return $response->withHeader('Content-Type', 'application/json');
    }
}

