<?php
namespace Vanderbilt\AllFhir\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;

class ExtractRouteMiddleware implements MiddlewareInterface
{
    /**
     * Process an incoming server request.
     *
     * Processes an incoming server request in order to extract the route from the query parameters
     * and rewrite the URI.
     *
     * @param ServerRequestInterface $request The request
     * @param RequestHandler $handler The request handler
     * @return ResponseInterface The response
     */
    public function process(ServerRequestInterface $request, RequestHandler $handler): ResponseInterface
    {
        $queryParams = $request->getQueryParams();

        // Check if the 'route' parameter is present in the query string
        if (isset($queryParams['route'])) {
            // Extract the route
            $route = $queryParams['route'];

            // Rewrite the URI with the extracted route
            $uri = $request->getUri()->withPath($route);

            // Replace the URI in the request
            $request = $request->withUri($uri)->withQueryParams($queryParams);
        }

        // Process the request with the next middleware or route
        return $handler->handle($request);
    }
}
