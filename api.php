<?php

use Vanderbilt\AllFhir\AllFhir;

require __DIR__ . '/vendor/autoload.php';

// Get container from module (your desired API)
$module = AllFhir::getInstance();
$container = $module->getContainer();

// Create App using the app factory
$createApp = require __DIR__ . '/config/app.php';
$app = $createApp($container);

// Load routes
$loadRoutes = require __DIR__ . '/config/routes.php';
$loadRoutes($app);

// Run app
$app->run();
