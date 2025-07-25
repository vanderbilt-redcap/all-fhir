<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class FetchController
{
    public function triggerFetch(Request $request, Response $response): Response
    {
        $params = (array) $request->getParsedBody();
        $response->getBody()->write('/trigger-fetch');
        return $response;
    }

    public function getFetchStatus(Request $request, Response $response): Response
    {
        $response->getBody()->write('/get-fetch');
        return $response;
    }
}
