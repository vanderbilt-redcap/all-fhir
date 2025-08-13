<?php

use DI\Container;
use DI\ContainerBuilder;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Controllers\FetchController;
use Vanderbilt\FhirSnapshot\Controllers\MrnController;
use Vanderbilt\FhirSnapshot\Controllers\ArchiveController;
use Vanderbilt\FhirSnapshot\Controllers\ProjectSettingsController;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Services\FhirCategoryService;
use Vanderbilt\FhirSnapshot\Services\FhirMetadataService;
use Vanderbilt\FhirSnapshot\Services\MappingResourceService;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\Services\ResourceSynchronizationService;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystemManager;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        // Define how to instantiate the FhirSnapshot class.
        FhirSnapshot::class => fn (Container $c) => FhirSnapshot::getInstance(),

        // Define how to instantiate the controllers.
        ArchiveController::class => fn(Container $c) => new ArchiveController($c->get(FhirSnapshot::class)),
        FetchController::class => fn(Container $c) => new FetchController($c->get(FhirSnapshot::class)),
        MrnController::class => fn(Container $c) => new MrnController($c->get(FhirSnapshot::class)),
        RepeatedFormResourceManager::class => function(Container $c) {
            return new RepeatedFormResourceManager(
                $c->get(FhirSnapshot::class),
                $c->get(RepeatedFormDataAccessor::class),
                $c->get(ResourceSynchronizationService::class),
                $c->get(QueueManager::class),
            );
        }, 
        ProjectSettingsController::class => fn(Container $c) => new ProjectSettingsController(
            $c->get(FhirSnapshot::class),
            $c->get(FhirSystemManager::class),
            $c->get(MappingResourceService::class),
            $c->get(FhirMetadataService::class),
            $c->get(FhirCategoryService::class),
            $c->get(RepeatedFormResourceManager::class)
        ),
    ]);
};
