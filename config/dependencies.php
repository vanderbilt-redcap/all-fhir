<?php

use DI\Container;
use DI\ContainerBuilder;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Controllers\FetchController;
use Vanderbilt\FhirSnapshot\Controllers\MrnController;
use Vanderbilt\FhirSnapshot\Controllers\SystemController;
use Vanderbilt\FhirSnapshot\Controllers\ArchiveController;
use Vanderbilt\FhirSnapshot\Controllers\ProjectSettingsController;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystemManager;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        // Define how to instantiate the FhirSnapshot class.
        FhirSnapshot::class => fn (Container $c) => FhirSnapshot::getInstance(),

        // Define how to instantiate the controllers.
        ArchiveController::class => fn(Container $c) => new ArchiveController($c->get(FhirSnapshot::class)),
        FetchController::class => fn(Container $c) => new FetchController($c->get(FhirSnapshot::class)),
        MrnController::class => fn(Container $c) => new MrnController($c->get(FhirSnapshot::class)),
        ProjectSettingsController::class => fn(Container $c) => new ProjectSettingsController($c->get(FhirSnapshot::class), $c->get(FhirSystemManager::class)),
    ]);
};
