<?php

use DI\Container;
use Slim\App;
use Slim\Factory\AppFactory;
use Slim\Handlers\Strategies\RequestResponseArgs;
use Vanderbilt\AllFhir\Middleware\ExtractRouteMiddleware;

/**
 * Application Factory
 * 
 * Creates and configures a Slim application instance with all middleware
 * but without loading routes. This allows for app reuse in different contexts.
 * 
 * RESPONSIBILITIES:
 * - Creates Slim app instance with DI container
 * - Configures routing middleware and invocation strategy
 * - Adds custom middleware (ExtractRouteMiddleware)
 * - Configures error handling and body parsing
 * - Returns fully configured app ready for route loading
 * 
 * USAGE:
 * $container = // ... build your DI container
 * $createApp = require __DIR__ . '/config/app.php';
 * $app = $createApp($container);
 * 
 * // Optionally load routes
 * $loadRoutes = require __DIR__ . '/config/routes.php';
 * $loadRoutes($app);
 * 
 * $app->run();
 */
return function (Container $container): App {
    // Create App with DI container
    AppFactory::setContainer($container);
    $app = AppFactory::create();

    // Add Routing Middleware
    $app->addRoutingMiddleware();

    // Configure route parameter injection strategy
    // This enables automatic injection of route parameters into controller method arguments
    // Example: public function removeMrn(Request $request, Response $response, string $mrn)
    // instead of manually extracting $mrn from $args
    $routeCollector = $app->getRouteCollector();
    $routeCollector->setDefaultInvocationStrategy(new RequestResponseArgs());

    // Add custom middleware for route navigation in external modules
    $app->add(ExtractRouteMiddleware::class);
    
    // Add error middleware (display errors, log errors, log error details)
    $app->addErrorMiddleware(true, true, true);

    // Add Body Parsing Middleware
    // Enables $request->getParsedBody() for JSON/form data
    $app->addBodyParsingMiddleware();

    return $app;
};