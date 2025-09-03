<?php

use DI\Container;
use DI\ContainerBuilder;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Controllers\FetchController;
use Vanderbilt\FhirSnapshot\Controllers\MrnController;
use Vanderbilt\FhirSnapshot\Controllers\ArchiveController;
use Vanderbilt\FhirSnapshot\Controllers\ProjectSettingsController;
use Vanderbilt\FhirSnapshot\Controllers\MappingResourcesController;
use Vanderbilt\FhirSnapshot\Services\FhirCategoryService;
use Vanderbilt\FhirSnapshot\Services\FhirMetadataService;
use Vanderbilt\FhirSnapshot\Services\FhirResourceService;
use Vanderbilt\FhirSnapshot\Services\LazyFhirClientWrapper;
use Vanderbilt\FhirSnapshot\Services\MappingResourceService;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\FhirSnapshot\Contracts\FhirClientInterface;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\Services\ResourceSynchronizationService;
use Vanderbilt\FhirSnapshot\Services\ResourceArchiveService;
use Vanderbilt\FhirSnapshot\Services\ArchivePackager;
use Vanderbilt\FhirSnapshot\Services\OnDemandStreamingPackager;
use Vanderbilt\FhirSnapshot\Services\ArchiveUrlService;
use Vanderbilt\FhirSnapshot\Services\ResourceFetcher;
use Vanderbilt\FhirSnapshot\Services\ResourceContentService;
use Vanderbilt\FhirSnapshot\Services\MrnService;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Queue\QueueProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\ArchiveProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\EmailNotificationProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\FullSyncProcessor;
use Vanderbilt\FhirSnapshot\Queue\Processors\RetryFailedProcessor;
use Vanderbilt\FhirSnapshot\Settings\Settings;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\Controllers\TaskController;
use Vanderbilt\FhirSnapshot\Services\ArchiveMetadataService;
use Vanderbilt\FhirSnapshot\Services\TaskService;
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
        RepeatedFormResourceManager::class => fn(Container $c) => new RepeatedFormResourceManager(
                $c->get(FhirSnapshot::class),
                $c->get(RepeatedFormDataAccessor::class),
                $c->get(ResourceSynchronizationService::class),
                $c->get(QueueManager::class),
                $c->get(FhirResourceService::class)
        ),
        // FHIR Client configuration - using lazy initialization to handle unconfigured state
        FhirClientInterface::class => fn(Container $c) => new LazyFhirClientWrapper($c->get(FhirSnapshot::class)),
        
        FhirResourceService::class => fn(Container $c) => new FhirResourceService(
            $c->get(RepeatedFormDataAccessor::class),
            $c->get(FhirClientInterface::class)
        ),

        // Resource fetcher service (generic FHIR resource processing)
        ResourceFetcher::class => fn(Container $c) => new ResourceFetcher(
            $c->get(FhirSnapshot::class),
            $c->get(RepeatedFormDataAccessor::class),
            $c->get(RepeatedFormResourceManager::class),
            $c->get(ResourceMonitor::class)
        ),
        
        // Resource content service (FHIR resource file content retrieval)
        ResourceContentService::class => fn(Container $c) => new ResourceContentService(
            $c->get(FhirSnapshot::class),
            $c->get(RepeatedFormDataAccessor::class)
        ),
        MrnService::class => fn(Container $c) => new MrnService(
            $c->get(FhirSnapshot::class),
            $c->get(RepeatedFormResourceManager::class),
            $c->get(RepeatedFormDataAccessor::class)
        ),
        
        // Archive services
        ArchiveUrlService::class => fn(Container $c) => new ArchiveUrlService($c->get(FhirSnapshot::class)),
        ArchivePackager::class => fn(Container $c) => new ArchivePackager(
            $c->get(FhirSnapshot::class),
            $c->get(ArchiveUrlService::class)
        ),
        OnDemandStreamingPackager::class => fn(Container $c) => new OnDemandStreamingPackager(
            $c->get(FhirSnapshot::class),
            $c->get(RepeatedFormDataAccessor::class)
        ),
        ArchiveProcessor::class => fn(Container $c) => new ArchiveProcessor(
            $c->get(FhirSnapshot::class),
            $c->get(ArchivePackager::class),
            $c->get(ArchiveMetadataService::class)
        ),
        ResourceArchiveService::class => fn(Container $c) => new ResourceArchiveService(
            $c->get(FhirSnapshot::class),
            $c->get(RepeatedFormDataAccessor::class),
            $c->get(ArchivePackager::class),
            $c->get(QueueManager::class),
            $c->get(ArchiveUrlService::class),
            $c->get(ArchiveMetadataService::class)
        ),
        // Tasks
        TaskService::class => fn(Container $c) => new TaskService(
            $c->get(FhirSnapshot::class),
            $c->get(QueueManager::class),
            $c->get(RepeatedFormDataAccessor::class)
        ),

        // Define how to instantiate queue components
        QueueManager::class => fn(Container $c) => new QueueManager($c->get(FhirSnapshot::class)),
        MemoryMonitor::class => fn(Container $c) => new MemoryMonitor($c->get(Settings::class)->get('memory_threshold')),
        TimeMonitor::class => fn(Container $c) => new TimeMonitor($c->get(Settings::class)->get('time_threshold')),
        ResourceMonitor::class => fn(Container $c) => new ResourceMonitor($c->get(MemoryMonitor::class), $c->get(TimeMonitor::class)),
        QueueProcessor::class => factory(function(Container $c) {
            $processorFactories = [
                Constants::TASK_ARCHIVE => fn() => $c->get(ArchiveProcessor::class),
                Constants::TASK_EMAIL_NOTIFICATION => fn() => $c->get(EmailNotificationProcessor::class),
                Constants::TASK_FULL_SYNC => fn() => $c->get(FullSyncProcessor::class),
                Constants::TASK_RETRY_FAILED => fn() => $c->get(RetryFailedProcessor::class),
            ];
            
            return new QueueProcessor(
                $c->get(FhirSnapshot::class),
                $c->get(QueueManager::class),
                $c->get(ResourceMonitor::class),
                $processorFactories
            );
        }),
        EmailNotificationProcessor::class => fn(Container $c) => new EmailNotificationProcessor($c->get(FhirSnapshot::class)),
        FullSyncProcessor::class => fn(Container $c) => new FullSyncProcessor(
            $c->get(FhirSnapshot::class),
            $c->get(RepeatedFormResourceManager::class)
        ),
        RetryFailedProcessor::class => fn(Container $c) => new RetryFailedProcessor(
            $c->get(FhirSnapshot::class),
            $c->get(RepeatedFormResourceManager::class)
        ),

        // Define how to instantiate the controllers.
        ArchiveController::class => fn(Container $c) => new ArchiveController(
            $c->get(FhirSnapshot::class),
            $c->get(ResourceArchiveService::class),
            $c->get(OnDemandStreamingPackager::class)
        ),
        TaskController::class => fn(Container $c) => new TaskController(
            $c->get(FhirSnapshot::class),
            $c->get(TaskService::class)
        ),
        FetchController::class => fn(Container $c) => new FetchController($c->get(FhirSnapshot::class)),
        MrnController::class => fn(Container $c) => new MrnController(
            $c->get(FhirSnapshot::class),
            $c->get(RepeatedFormResourceManager::class),
            $c->get(ResourceContentService::class),
            $c->get(RepeatedFormDataAccessor::class),
            $c->get(QueueManager::class),
            $c->get(MrnService::class)
        ),
        ProjectSettingsController::class => fn(Container $c) => new ProjectSettingsController(
            $c->get(FhirSnapshot::class),
            $c->get(FhirSystemManager::class),
            $c->get(MappingResourceService::class),
            $c->get(FhirMetadataService::class),
            $c->get(FhirCategoryService::class),
            $c->get(RepeatedFormResourceManager::class)
        ),
        MappingResourcesController::class => fn(Container $c) => new MappingResourcesController(
            $c->get(FhirSnapshot::class),
            $c->get(MappingResourceService::class),
            $c->get(RepeatedFormResourceManager::class)
        ),
    ]);
};
