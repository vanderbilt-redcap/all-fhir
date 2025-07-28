<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArchiveController extends AbstractController
{
    public function createZipArchive(Request $request, Response $response): Response
    {
        $params = (array) $request->getParsedBody();
        $response->getBody()->write('/create-zip');
        return $response;
    }

    public function downloadZip(Request $request, Response $response): Response
    {
        $response->getBody()->write('/download-zip');
        return $response;
    }
}
