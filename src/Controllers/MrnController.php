<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class MrnController extends AbstractController
{
    public function listMrns(Request $request, Response $response): Response
    {
        $response->getBody()->write('/list-mrns');
        return $response;
    }

    public function addMrn(Request $request, Response $response): Response
    {
        $params = (array) $request->getParsedBody();
        $response->getBody()->write('/add-mrn');
        return $response;
    }

    public function removeMrn(Request $request, Response $response, $mrn): Response
    {
        $response->getBody()->write('/remove-mrn'.' - '.$mrn);
        return $response;
    }
}
