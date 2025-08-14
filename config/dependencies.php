<?php

use DI\Container;
use DI\ContainerBuilder;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Controllers\FetchController;
use Vanderbilt\FhirSnapshot\Controllers\MrnController;
use Vanderbilt\FhirSnapshot\Controllers\ArchiveController;
use Vanderbilt\FhirSnapshot\Controllers\ProjectSettingsController;
use Vanderbilt\FhirSnapshot\Services\FhirCategoryService;
use Vanderbilt\FhirSnapshot\Services\FhirMetadataService;
use Vanderbilt\FhirSnapshot\Services\FhirResourceService;
use Vanderbilt\FhirSnapshot\Services\MappingResourceService;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\Services\ResourceSynchronizationService;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Queue\QueueProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\FhirFetchProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\ArchiveProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\EmailNotificationProcessor;
use Vanderbilt\FhirSnapshot\Settings\Settings;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystemManager;
use Vanderbilt\REDCap\Classes\SystemMonitors\MemoryMonitor;
use Vanderbilt\REDCap\Classes\SystemMonitors\ResourceMonitor;
use Vanderbilt\REDCap\Classes\SystemMonitors\TimeMonitor;

use function DI\factory;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        Settings::class => fn() => new Settings([
            'memory_threshold'  => 0.8,
            'time_threshold'    => '30 minutes',
        ]),
        // Define how to instantiate the FhirSnapshot class.
        FhirSnapshot::class => fn (Container $c) => FhirSnapshot::getInstance(),
        RepeatedFormDataAccessor::class => factory(function(Container $c) {
            $module = $c->get(FhirSnapshot::class);
            return new RepeatedFormDataAccessor($module->getProjectId());
        }),
        ResourceSynchronizationService::class => factory(function(Container $c) {
            $module = $c->get(FhirSnapshot::class);
            return new ResourceSynchronizationService(
                $c->get(RepeatedFormDataAccessor::class),
                $c->get(QueueManager::class),
                $module->getProjectId()
            );
        }),
        RepeatedFormResourceManager::class => factory(function(Container $c) {
            return new RepeatedFormResourceManager(
                $c->get(FhirSnapshot::class),
                $c->get(RepeatedFormDataAccessor::class),
                $c->get(ResourceSynchronizationService::class),
                $c->get(QueueManager::class)
            );
        }),
        FhirResourceService::class => fn(Container $c) => new FhirResourceService($c->get(RepeatedFormDataAccessor::class)),

        // Define how to instantiate queue components
        QueueManager::class => fn(Container $c) => new QueueManager($c->get(FhirSnapshot::class)),
        MemoryMonitor::class => fn(Container $c) => new MemoryMonitor($c->get(Settings::class)->get('memory_threshold')),
        TimeMonitor::class => fn(Container $c) => new TimeMonitor($c->get(Settings::class)->get('time_threshold')),
        ResourceMonitor::class => fn(Container $c) => new ResourceMonitor($c->get(MemoryMonitor::class), $c->get(TimeMonitor::class)),
        QueueProcessor::class => factory(function(Container $c) {
            $processorFactories = [
                Constants::TASK_FHIR_FETCH => fn() => $c->get(FhirFetchProcessor::class),
                Constants::TASK_ARCHIVE => fn() => $c->get(ArchiveProcessor::class),
                Constants::TASK_EMAIL_NOTIFICATION => fn() => $c->get(EmailNotificationProcessor::class),
            ];
            
            return new QueueProcessor(
                $c->get(FhirSnapshot::class),
                $c->get(QueueManager::class),
                $c->get(ResourceMonitor::class),
                $processorFactories
            );
        }),
        
        // Define how to instantiate processors
        FhirFetchProcessor::class => fn(Container $c) => new FhirFetchProcessor($c->get(FhirSnapshot::class), $c->get(FhirResourceService::class)),
        ArchiveProcessor::class => fn(Container $c) => new ArchiveProcessor($c->get(FhirSnapshot::class)),
        EmailNotificationProcessor::class => fn(Container $c) => new EmailNotificationProcessor($c->get(FhirSnapshot::class)),

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
            $c->get(RepeatedFormResourceManager::class)
        ),
    ]);
};
