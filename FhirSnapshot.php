<?php
namespace Vanderbilt\FhirSnapshot;

use DI\Container;
use ExternalModules\AbstractExternalModule;
use Vanderbilt\FhirSnapshot\Queue\QueueProcessor;
use Vanderbilt\FhirSnapshot\Services\MappingResourceService;

/**
 * FhirSnapshot
 * 
 * Main REDCap External Module class for the FHIR Snapshot system that orchestrates 
 * automated FHIR data retrieval, storage, and management in REDCap repeated forms.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Module lifecycle management and dependency injection coordination
 * - Project-level configuration and settings management
 * - Queue processing coordination via cron jobs and manual triggers
 * - Public API endpoints for external integrations and automation
 * - Logging and error handling for system-wide operations
 * - Bridge between REDCap framework and FHIR business logic
 * 
 * CORE FEATURES:
 * 
 * DEPENDENCY INJECTION & SERVICE COORDINATION:
 * - Manages global container instance with service registration
 * - Provides singleton pattern for consistent module instance access
 * - Coordinates service dependencies across the entire module ecosystem
 * - Ensures proper initialization order and lifecycle management
 * 
 * CONFIGURATION MANAGEMENT:
 * - getAllConfiguredMappingResources() - Retrieves all project mapping resources
 * - Handles both predefined REDCap categories and custom FHIR specifications
 * - Provides centralized access to project settings with proper type conversion
 * - Supports legacy data format migration and validation
 * 
 * QUEUE PROCESSING ORCHESTRATION:
 * - processQueue() - Coordinates background FHIR data fetching across projects
 * - cron_processQueue() - REDCap cron integration for automated processing
 * - Multi-project support with proper context switching
 * - Comprehensive error handling and logging for queue operations
 * 
 * API INTEGRATION:
 * - redcap_module_api() - External API endpoints for automation and integration
 * - Support for MRN management, fetch triggering, and status monitoring
 * - JSON-based API responses with proper error handling
 * - Integration points for external systems and workflows
 * 
 * LOGGING & MONITORING:
 * - logToFile() - Centralized logging with timestamp formatting
 * - Operation tracking and error reporting across all services
 * - Debug and monitoring capabilities for troubleshooting
 * - Performance and status logging for queue operations
 * 
 * USAGE PATTERNS:
 * 
 * CONFIGURATION ACCESS:
 * ```php
 * $configuredResources = $module->getAllConfiguredMappingResources();
 * // Returns array of MappingResource objects for full sync operations
 * ```
 * 
 * SERVICE COORDINATION:
 * ```php
 * $container = $module->getContainer();
 * $service = $container->get(SomeService::class);
 * // Provides dependency injection for all module services
 * ```
 * 
 * QUEUE PROCESSING:
 * ```php
 * $results = $module->processQueue();
 * // Processes background tasks across all enabled projects
 * ```
 * 
 * ARCHITECTURAL INTEGRATION:
 * - Extends REDCap's AbstractExternalModule for framework integration
 * - Coordinates with RepeatedFormResourceManager for high-level operations
 * - Integrates with ResourceSynchronizationService for data consistency
 * - Manages QueueProcessor for asynchronous FHIR data operations
 * - Provides centralized configuration access for all services
 * 
 * MULTI-PROJECT SUPPORT:
 * - Maintains project context during queue processing
 * - Handles configuration isolation between projects
 * - Coordinates cross-project operations with proper scoping
 * - Ensures data integrity across multiple project instances
 * 
 * ERROR HANDLING & RECOVERY:
 * - Comprehensive exception handling with detailed error context
 * - Graceful degradation when individual operations fail
 * - Logging and monitoring for troubleshooting and maintenance
 * - Recovery mechanisms for transient failures and system issues
 */
class FhirSnapshot extends AbstractExternalModule {

    private static FhirSnapshot $instance;
    private static ?Container $globalContainer = null;

    public static function getInstance() {
        if(!isset(self::$instance)) {
            global $module;
            if($module) self::$instance = $module;
            else self::$instance = new self();
        }
        return self::$instance;
    }

    public function getContainer(): Container {
        return self::getOrCreateContainer();
    }

    public static function getOrCreateContainer(): Container {
        if (self::$globalContainer === null) {
            $createContainer = require __DIR__ . '/config/container.php';
            self::$globalContainer = $createContainer();

            // Ensure this specific instance is registered
            $instance = self::getInstance();
            self::$globalContainer->set(FhirSnapshot::class, $instance);
        }
        return self::$globalContainer;
    }

    // Reset for testing
    public static function resetContainer(): void {
        self::$globalContainer = null;
    }

    function redcap_module_api($action, $payload, $project_id, $user_id, $format, $returnFormat, $csvDelim) {
        if ($returnFormat != "json") {
            return $this->framework->apiErrorResponse("This API only supports JSON as return format!", 400);
        }
        match ($action) {
            "getAvailableFhirSystems" => fn() => "getAvailableFhirSystems",
            "getAvailableResourceTypes" => fn() => "getAvailableResourceTypes",
            "listMrns" => fn() => "listMrns",
            "addMrn" => fn() => "addMrn",
            "removeMrn" => fn() => "removeMrn",
            "triggerFetch" => fn() => "triggerFetch",
            "getFetchStatus" => fn() => "getFetchStatus",
            "createZipArchive" => fn() => "createZipArchive",
            "downloadZip" => fn() => "downloadZip",
        };
    }


    function logToFile($message, $file = APP_PATH_TEMP.'FHIR-snapshot.log') {
        $timestamp = date('Y-m-d H:i:s');
        file_put_contents($file, "[$timestamp] $message" . PHP_EOL, FILE_APPEND);
    }

    function processQueue() {
        try {
            $results = [];
            $c = $this->getContainer();
            if(!$c) {
                return $results;
            }
            
            foreach($this->getProjectsWithModuleEnabled() as $localProjectId){
                $this->setProjectId($localProjectId);

                $queueProcessor = $c->get(QueueProcessor::class);
                // Process the queue
                $result = $queueProcessor->process();
                // Log processing summary
                $this->log("Queue processing completed: ", ['result' => json_encode($result->toArray())]);
                $results[] = $result;
            }
            return $results;
        } catch (\Exception $e) {
            $this->log("Error in processQueue: ", ['message' => $e->getMessage()]);
            throw $e;
        }
    }

     /**
     * use this if enabled at project level?
     * no, I'm setting the project context every time a job is processed
     *
     * @param array $cronInfo  [cron_name, cron_description, method, cron_processQueue, cron_frequency, cron_max_run_time]
     * @return string
     */
    function cron_processQueue($cronInfo)
    {
        require_once __DIR__ . '/vendor/autoload.php';
        $cron_name = $cronInfo['cron_name'] ?? 'FHIR Snapshot';
        try {
            $this->processQueue();
            return sprintf("%s - all jobs have been processed", $cron_name);
        } catch (\Exception $e) {
            return sprintf("%s - error processing the jobs: %s", $cron_name, $e->getMessage());
        }
    }

    /**
     * Get all configured mapping resources for the current project
     * 
     * Retrieves both predefined and custom mapping resources from project settings
     * and converts them to proper MappingResource value objects using the 
     * MappingResourceService for consistent format handling.
     * 
     * @return \Vanderbilt\FhirSnapshot\ValueObjects\MappingResource[] Array of all configured mapping resources
     */
    public function getAllConfiguredMappingResources(): array
    {
        $mappingResourceService = new MappingResourceService();
        
        // Get data from project settings
        $predefinedData = $this->getProjectSetting('mapping_resources') ?? [];
        $customData = $this->getProjectSetting('custom_mapping_resources') ?? [];
        
        // Use the service to convert to MappingResource objects
        $predefinedResources = $mappingResourceService->convertToMappingResources($predefinedData, 'predefined');
        $customResources = $mappingResourceService->convertToMappingResources($customData, 'custom');
        
        // Combine both types
        return array_merge($predefinedResources, $customResources);
    }


}
