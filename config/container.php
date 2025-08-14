<?php
use DI\Container;
use DI\ContainerBuilder;


return function(array $overrides = []): Container {
    // Instantiate PHP-DI ContainerBuilder
    $containerBuilder = new ContainerBuilder();
    
    // Set up dependencies
    $dependencies = require __DIR__ . '/dependencies.php';
    $dependencies($containerBuilder);

    // Environment-specific overrides
    if (!empty($overrides)) {
        $containerBuilder->addDefinitions($overrides);
    }
    
    // Build PHP-DI Container instance
    return $containerBuilder->build();
};