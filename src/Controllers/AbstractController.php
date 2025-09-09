<?php
namespace Vanderbilt\AllFhir\Controllers;

use Vanderbilt\AllFhir\AllFhir;
use Psr\Http\Message\ResponseInterface as Response;

abstract class AbstractController
{
    public function __construct(protected AllFhir $module) {}

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
