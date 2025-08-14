<?php

use Vanderbilt\FhirSnapshot\FhirSnapshot;

require __DIR__ . '/vendor/autoload.php';

// Get container from FhirSnapshot (your desired API)
$fhirSnapshot = FhirSnapshot::getInstance();
$container = $fhirSnapshot->getContainer();

// Create App using the app factory
$createApp = require __DIR__ . '/config/app.php';
$app = $createApp($container);

// Load routes
$loadRoutes = require __DIR__ . '/config/routes.php';
$loadRoutes($app);

// Run app
$app->run();
