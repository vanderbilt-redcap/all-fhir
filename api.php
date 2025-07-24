<?php
require __DIR__ . '/vendor/autoload.php';

use Slim\Factory\AppFactory;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;

$extractRouteMiddleware = function (ServerRequestInterface $request, RequestHandler $handler): ResponseInterface {
    $queryParams = $request->getQueryParams();

    // Check if the 'route' parameter is present in the query string
    if (isset($queryParams['route'])) {
        // Extract the route
        $route = $queryParams['route'];

        // Rewrite the URI with the extracted route
        $uri = $request->getUri()->withPath($route);

        // Replace the URI in the request
        $request = $request->withUri($uri);
    }

    // Process the request with the next middleware or route
    return $handler->handle($request);
};

// Create App
$app = AppFactory::create();

// Add the middleware to your Slim app
$app->add($extractRouteMiddleware);
// Add error middleware
$app->addErrorMiddleware(true, true, true);

// Add Routing Middleware
$app->addRoutingMiddleware();

// Add Body Parsing Middleware
// $parsedBody = $request->getParsedBody();
$app->addBodyParsingMiddleware();

// load routes
$useRoutes = require_once __DIR__.'/config/routes.php';
$useRoutes($app);

// Run app
$app->run();
