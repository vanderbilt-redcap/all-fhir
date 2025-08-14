<?php

use DI\Container;
use DI\ContainerBuilder;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Controllers\FetchController;
use Vanderbilt\FhirSnapshot\Controllers\MrnController;
use Vanderbilt\FhirSnapshot\Controllers\ArchiveController;
use Vanderbilt\FhirSnapshot\Controllers\ProjectSettingsController;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Factories\RepeatedFormDataAccessorFactory;
use Vanderbilt\FhirSnapshot\Factories\RepeatedFormResourceManagerFactory;
use Vanderbilt\FhirSnapshot\Services\FhirCategoryService;
use Vanderbilt\FhirSnapshot\Services\FhirMetadataService;
use Vanderbilt\FhirSnapshot\Services\FhirResourceService;
use Vanderbilt\FhirSnapshot\Services\MappingResourceService;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystemManager;

use function DI\factory;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        // Define how to instantiate the FhirSnapshot class.
        FhirSnapshot::class => fn (Container $c) => FhirSnapshot::getInstance(),
        RepeatedFormDataAccessor::class => factory(function(Container $c) {
            $module = $c->get(FhirSnapshot::class);
            return new RepeatedFormDataAccessor($module->getProjectId());
        }),
        FhirResourceService::class => fn(Container $c) => new FhirResourceService($c->get(RepeatedFormDataAccessor::class)),

        // Define how to instantiate factories
        RepeatedFormDataAccessorFactory::class => fn(Container $c) => new RepeatedFormDataAccessorFactory(),
        RepeatedFormResourceManagerFactory::class => fn(Container $c) => new RepeatedFormResourceManagerFactory(
            $c->get(RepeatedFormDataAccessorFactory::class),
            $c->get(FhirSnapshot::class),
            $c->get(QueueManager::class)
        ),

        // Define how to instantiate the controllers.
        ArchiveController::class => fn(Container $c) => new ArchiveController($c->get(FhirSnapshot::class)),
        FetchController::class => fn(Container $c) => new FetchController($c->get(FhirSnapshot::class)),
        MrnController::class => fn(Container $c) => new MrnController($c->get(FhirSnapshot::class)),
        ProjectSettingsController::class => fn(Container $c) => new ProjectSettingsController(
            $c->get(FhirSnapshot::class),
            $c->get(FhirSystemManager::class),
            $c->get(MappingResourceService::class),
            $c->get(FhirMetadataService::class),
            $c->get(FhirCategoryService::class),
            $c->get(RepeatedFormResourceManagerFactory::class)
        ),
    ]);
};
