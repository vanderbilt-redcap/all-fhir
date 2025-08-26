<?php
namespace Vanderbilt\FhirSnapshot\Controllers;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

abstract class AbstractController
{
    public function __construct(protected FhirSnapshot $module) {}

    /**
     * Create JSON response with consistent formatting
     * 
     * @param Response $response HTTP response object
     * @param array $data Response data to encode as JSON
     * @param int $statusCode HTTP status code
     * @return Response JSON response with appropriate headers
     */
    protected function jsonResponse(Response $response, array $data, int $statusCode = 200): Response
    {
        $response->getBody()->write(json_encode($data, JSON_PRETTY_PRINT));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($statusCode);
    }
}
