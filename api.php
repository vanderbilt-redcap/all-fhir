<?php
require __DIR__ . '/vendor/autoload.php';

use DI\ContainerBuilder;
use Slim\Factory\AppFactory;
use Slim\Handlers\Strategies\RequestResponseArgs;
use Vanderbilt\FhirSnapshot\Middleware\ExtractRouteMiddleware;

// Instantiate PHP-DI ContainerBuilder
$containerBuilder = new ContainerBuilder();

// Set up settings
$dependencies = require __DIR__ . '/config/dependencies.php';
$dependencies($containerBuilder);

// Build PHP-DI Container instance
$container = $containerBuilder->build();


// Create App
// Set container to create App with on AppFactory
AppFactory::setContainer($container);
$app = AppFactory::create();

// Add Routing Middleware
$app->addRoutingMiddleware();

// NOTE: Enable automatic injection of route parameters into controller method arguments.
// This changes Slim’s default invocation strategy so we can write:
// public function removeMrn(Request $request, Response $response, string $mrn)
// instead of manually extracting $mrn from $args.
$routeCollector = $app->getRouteCollector();
$routeCollector->setDefaultInvocationStrategy(new RequestResponseArgs());

// Add the middleware to your Slim app
// this manages route navigation in external modules
$app->add(ExtractRouteMiddleware::class);
// Add error middleware
$app->addErrorMiddleware(true, true, true);

// Add Body Parsing Middleware
// $parsedBody = $request->getParsedBody();
$app->addBodyParsingMiddleware();

// load routes
$useRoutes = require_once __DIR__.'/config/routes.php';
$useRoutes($app);

// Run app
$app->run();
