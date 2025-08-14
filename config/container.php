<?php
use DI\Container;
use DI\ContainerBuilder;


return function(): Container {
    // Instantiate PHP-DI ContainerBuilder
    $containerBuilder = new ContainerBuilder();
    
    // Set up dependencies
    $dependencies = require __DIR__ . '/dependencies.php';
    $dependencies($containerBuilder);
    
    // Build PHP-DI Container instance
    $container = $containerBuilder->build();
    
    return $container;
};