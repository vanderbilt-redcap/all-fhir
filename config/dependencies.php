<?php

use DI\Container;
use DI\ContainerBuilder;
use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Controllers\FetchController;
use Vanderbilt\AllFhir\Controllers\MrnController;
use Vanderbilt\AllFhir\Controllers\ArchiveController;
use Vanderbilt\AllFhir\Controllers\ProjectSettingsController;
use Vanderbilt\AllFhir\Controllers\MappingResourcesController;
use Vanderbilt\AllFhir\Services\FhirCategoryService;
use Vanderbilt\AllFhir\Services\FhirMetadataService;
use Vanderbilt\AllFhir\Services\FhirResourceService;
use Vanderbilt\AllFhir\Services\LazyFhirClientWrapper;
use Vanderbilt\AllFhir\Services\MappingResourceService;
use Vanderbilt\AllFhir\Services\RepeatedFormDataAccessor;
use Vanderbilt\AllFhir\Contracts\FhirClientInterface;
use Vanderbilt\AllFhir\Services\RepeatedFormResourceManager;
use Vanderbilt\AllFhir\Services\ResourceSynchronizationService;
use Vanderbilt\AllFhir\Services\OnDemandStreamingPackager;
use Vanderbilt\AllFhir\Services\ResourceFetcher;
use Vanderbilt\AllFhir\Services\ResourceContentService;
use Vanderbilt\AllFhir\Services\MrnService;
use Vanderbilt\AllFhir\Queue\QueueManager;
use Vanderbilt\AllFhir\Queue\QueueProcessor;
use Vanderbilt\AllFhir\Queue\Processors\EmailNotificationProcessor;
use Vanderbilt\AllFhir\Queue\Processors\FullSyncProcessor;
use Vanderbilt\AllFhir\Queue\Processors\RetryFailedProcessor;
use Vanderbilt\AllFhir\Settings\Settings;
use Vanderbilt\AllFhir\Constants;
use Vanderbilt\AllFhir\Controllers\TaskController;
use Vanderbilt\AllFhir\Controllers\FhirAccessController;
use Vanderbilt\AllFhir\Controllers\EndpointParamsController;
use Vanderbilt\AllFhir\Services\FhirEndpointRegistry;
use Vanderbilt\AllFhir\Services\FhirStudyResolver;
use Vanderbilt\AllFhir\Services\EndpointParamNormalizer;
use Vanderbilt\AllFhir\Services\FhirAccess\ProjectFhirAccessService;
use Vanderbilt\AllFhir\Services\Contracts\ProjectFhirAccessChecker;
use Vanderbilt\AllFhir\Controllers\StructureValidationController;
use Vanderbilt\AllFhir\Controllers\MaintenanceController;
use Vanderbilt\AllFhir\Services\Contracts\ProjectMetadataProvider as ProjectMetadataProviderContract;
use Vanderbilt\AllFhir\Services\Redcap\ProjectMetadataProvider as ProjectMetadataProviderImpl;
use Vanderbilt\AllFhir\Services\TaskService;
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
        // Define how to instantiate the AllFhir class.
        AllFhir::class => fn (Container $c) => AllFhir::getInstance(),
        RepeatedFormDataAccessor::class => factory(function(Container $c) {
            $module = $c->get(AllFhir::class);
            return new RepeatedFormDataAccessor($module->getProjectId());
        }),
        ResourceSynchronizationService::class => factory(function(Container $c) {
            $module = $c->get(AllFhir::class);
            return new ResourceSynchronizationService(
                $c->get(RepeatedFormDataAccessor::class),
                $c->get(QueueManager::class),
                $module->getProjectId()
            );
        }),
        RepeatedFormResourceManager::class => fn(Container $c) => new RepeatedFormResourceManager(
                $c->get(AllFhir::class),
                $c->get(RepeatedFormDataAccessor::class),
                $c->get(ResourceSynchronizationService::class),
                $c->get(QueueManager::class),
                $c->get(FhirResourceService::class)
        ),
        // FHIR Client configuration - using lazy initialization to handle unconfigured state
        FhirClientInterface::class => fn(Container $c) => new LazyFhirClientWrapper($c->get(AllFhir::class)),
        
        FhirResourceService::class => fn(Container $c) => new FhirResourceService(
            $c->get(AllFhir::class),
            $c->get(RepeatedFormDataAccessor::class),
            $c->get(FhirClientInterface::class),
            $c->get(MappingResourceService::class)
        ),

        // Mapping resources service
        MappingResourceService::class => fn(Container $c) => new MappingResourceService(
            $c->get(AllFhir::class)
        ),

        // Resource fetcher service (generic FHIR resource processing)
        ResourceFetcher::class => fn(Container $c) => new ResourceFetcher(
            $c->get(AllFhir::class),
            $c->get(RepeatedFormDataAccessor::class),
            $c->get(RepeatedFormResourceManager::class),
            $c->get(ResourceMonitor::class)
        ),
        
        // Resource content service (FHIR resource file content retrieval)
        ResourceContentService::class => fn(Container $c) => new ResourceContentService(
            $c->get(AllFhir::class),
            $c->get(RepeatedFormDataAccessor::class)
        ),
        MrnService::class => fn(Container $c) => new MrnService(
            $c->get(AllFhir::class),
            $c->get(RepeatedFormResourceManager::class),
            $c->get(RepeatedFormDataAccessor::class)
        ),
        
        // Streaming archive service
        OnDemandStreamingPackager::class => fn(Container $c) => new OnDemandStreamingPackager(
            $c->get(AllFhir::class),
            $c->get(RepeatedFormDataAccessor::class)
        ),
        // Tasks
        TaskService::class => fn(Container $c) => new TaskService(
            $c->get(AllFhir::class),
            $c->get(QueueManager::class),
            $c->get(RepeatedFormDataAccessor::class)
        ),

        // Define how to instantiate queue components
        QueueManager::class => fn(Container $c) => new QueueManager($c->get(AllFhir::class)),
        MemoryMonitor::class => fn(Container $c) => new MemoryMonitor($c->get(Settings::class)->get('memory_threshold')),
        TimeMonitor::class => fn(Container $c) => new TimeMonitor($c->get(Settings::class)->get('time_threshold')),
        ResourceMonitor::class => fn(Container $c) => new ResourceMonitor($c->get(MemoryMonitor::class), $c->get(TimeMonitor::class)),
        QueueProcessor::class => factory(function(Container $c) {
            $processorFactories = [
                Constants::TASK_EMAIL_NOTIFICATION => fn() => $c->get(EmailNotificationProcessor::class),
                Constants::TASK_FULL_SYNC => fn() => $c->get(FullSyncProcessor::class),
                Constants::TASK_RETRY_FAILED => fn() => $c->get(RetryFailedProcessor::class),
            ];
            
            return new QueueProcessor(
                $c->get(AllFhir::class),
                $c->get(QueueManager::class),
                $c->get(ResourceMonitor::class),
                $processorFactories
            );
        }),
        EmailNotificationProcessor::class => fn(Container $c) => new EmailNotificationProcessor($c->get(AllFhir::class)),
        FullSyncProcessor::class => fn(Container $c) => new FullSyncProcessor(
            $c->get(AllFhir::class),
            $c->get(RepeatedFormResourceManager::class)
        ),
        RetryFailedProcessor::class => fn(Container $c) => new RetryFailedProcessor(
            $c->get(AllFhir::class),
            $c->get(RepeatedFormResourceManager::class)
        ),

        // Define how to instantiate the controllers.
        ArchiveController::class => fn(Container $c) => new ArchiveController(
            $c->get(AllFhir::class),
            $c->get(OnDemandStreamingPackager::class)
        ),
        TaskController::class => fn(Container $c) => new TaskController(
            $c->get(AllFhir::class),
            $c->get(TaskService::class)
        ),
        FetchController::class => fn(Container $c) => new FetchController($c->get(AllFhir::class)),
        MrnController::class => fn(Container $c) => new MrnController(
            $c->get(AllFhir::class),
            $c->get(RepeatedFormResourceManager::class),
            $c->get(ResourceContentService::class),
            $c->get(RepeatedFormDataAccessor::class),
            $c->get(QueueManager::class),
            $c->get(MrnService::class)
        ),
        ProjectSettingsController::class => fn(Container $c) => new ProjectSettingsController(
            $c->get(AllFhir::class),
            $c->get(FhirSystemManager::class),
            $c->get(MappingResourceService::class),
            $c->get(FhirMetadataService::class),
            $c->get(FhirCategoryService::class),
            $c->get(RepeatedFormResourceManager::class)
        ),
        MappingResourcesController::class => fn(Container $c) => new MappingResourcesController(
            $c->get(AllFhir::class),
            $c->get(MappingResourceService::class),
            $c->get(RepeatedFormResourceManager::class)
        ),
        // Endpoint params
        FhirEndpointRegistry::class => fn(Container $c) => new FhirEndpointRegistry(),
        FhirStudyResolver::class => fn(Container $c) => new FhirStudyResolver(),
        EndpointParamNormalizer::class => fn(Container $c) => new EndpointParamNormalizer($c->get(FhirEndpointRegistry::class)),
        EndpointParamsController::class => fn(Container $c) => new EndpointParamsController(
            $c->get(AllFhir::class),
            $c->get(FhirEndpointRegistry::class)
        ),
        // FHIR Access status
        ProjectFhirAccessChecker::class => fn(Container $c) => new ProjectFhirAccessService(
            $c->get(AllFhir::class)
        ),
        FhirAccessController::class => fn(Container $c) => new FhirAccessController(
            $c->get(AllFhir::class),
            $c->get(ProjectFhirAccessChecker::class)
        ),
        // Structure validation
        ProjectMetadataProviderContract::class => fn(Container $c) => new ProjectMetadataProviderImpl(),
        StructureValidationController::class => fn(Container $c) => new StructureValidationController(
            $c->get(AllFhir::class),
            $c->get(ProjectMetadataProviderContract::class)
        ),
        MaintenanceController::class => fn(Container $c) => new MaintenanceController(
            $c->get(AllFhir::class),
            $c->get(RepeatedFormResourceManager::class)
        ),
    ]);
};
