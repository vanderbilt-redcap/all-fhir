<?php
require __DIR__ . '/vendor/autoload.php';

// Build PHP-DI Container instance
$createContainer = require __DIR__ . '/config/container.php';
$container = $createContainer();

// Create App using the app factory
$createApp = require __DIR__ . '/config/app.php';
$app = $createApp($container);

// Load routes
$loadRoutes = require __DIR__ . '/config/routes.php';
$loadRoutes($app);

// Run app
$app->run();
