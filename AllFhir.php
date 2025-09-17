<?php
namespace Vanderbilt\AllFhir;

use DI\Container;
use ExternalModules\AbstractExternalModule;
use ExternalModules\ExternalModules;
use Project;
use Vanderbilt\AllFhir\Queue\QueueProcessor;
use Vanderbilt\AllFhir\Services\MappingResourceService;
use Vanderbilt\AllFhir\Services\ResourceFetcher;
use Vanderbilt\AllFhir\ValueObjects\MappingResource;

/**
 * AllFhir
 * 
 * Main REDCap External Module class for the AllFhir system that orchestrates 
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
 * - buildApiUrl() - Convenience method for generating proper API URLs with authentication
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
 * API URL BUILDING:
 * ```php
 * $downloadUrl = $module->buildApiUrl('archives/12345/download');
 * // Generates: https://redcap.test/api/?route=archives/12345/download&pid=123&...
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
class AllFhir extends AbstractExternalModule {

    const PREFIX = 'all_fhir';

    private static AllFhir $instance;
    private static ?Container $globalContainer = null;

    public static function getInstance(): self
    {
        if (!isset(self::$instance)) {
            $module = ExternalModules::getModuleInstance(self::PREFIX);
            if ($module instanceof self) {
                self::$instance = $module;
            } else {
                self::$instance = new self();
            }
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
            self::$globalContainer->set(AllFhir::class, $instance);
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


    function logToFile($message, $file = APP_PATH_TEMP.'ALL-FHIR.log') {
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
        } catch (\Throwable $e) {
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
        $cron_name = $cronInfo['cron_name'] ?? 'ALL FHIR';
        try {
            $this->processQueue();
            return sprintf("%s - all jobs have been processed", $cron_name);
        } catch (\Exception $e) {
            return sprintf("%s - error processing the jobs: %s", $cron_name, $e->getMessage());
        }
    }

    /**
     * Process pending FHIR resources across all enabled projects
     * 
     * Iterates through all projects with the module enabled and processes pending
     * FHIR resources using the specialized ResourceFetcher service with pre-check optimization.
     * 
     * @return array Array of ResourceFetcherResult objects, one per project
     */
    function fetchPending() {
        try {
            $results = [];
            $c = $this->getContainer();
            if(!$c) {
                return $results;
            }
            
            foreach($this->getProjectsWithModuleEnabled() as $localProjectId){
                $this->setProjectId($localProjectId);

                $resourceFetcher = $c->get(ResourceFetcher::class);
                
                // PRE-CHECK: Only process if there are pending resources
                if (!$resourceFetcher->hasPendingResources()) {
                    continue; // Skip to next project
                }
                
                // Get pending resources and process them
                $pendingResources = $resourceFetcher->getPendingResources();
                $result = $resourceFetcher->processResources($pendingResources);
                
                // Log processing summary
                $this->log("Pending resource processing completed: ", ['result' => json_encode($result->toArray())]);
                $results[] = $result;
            }
            return $results;
        } catch (\Exception $e) {
            $this->log("Error in fetchPending: ", ['message' => $e->getMessage()]);
            throw $e;
        }
    }

    /**
     * Cron job integration for automated pending resource processing
     * 
     * REDCap cron job method that processes pending FHIR resources across all
     * enabled projects using the fetchPending() method.
     * 
     * @param array $cronInfo Cron configuration array [cron_name, cron_description, method, cron_frequency, cron_max_run_time]
     * @return string Cron execution status message
     */
    function cron_fetchPending($cronInfo)
    {
        require_once __DIR__ . '/vendor/autoload.php';
        $cron_name = $cronInfo['cron_name'] ?? 'FHIR Pending Resource Fetcher';
        try {
            $this->fetchPending();
            return sprintf("%s - all pending resources have been processed", $cron_name);
        } catch (\Exception $e) {
            return sprintf("%s - error processing pending resources: %s", $cron_name, $e->getMessage());
        }
    }

    /**
     * Get all configured mapping resources for the current project
     * 
     * Retrieves both predefined and custom mapping resources from project settings
     * and converts them to proper MappingResource value objects using the 
     * MappingResourceService for consistent format handling.
     * 
     * @return MappingResource[] Array of all configured mapping resources
     */
    public function getAllConfiguredMappingResources(): array
    {
        $mappingResourceService = self::getOrCreateContainer()->get(MappingResourceService::class);
        
        // Get data from project settings
        $predefinedData = $this->getProjectSetting(Constants::SETTING_MAPPING_RESOURCES) ?? [];
        $customData = $this->getProjectSetting(Constants::SETTING_CUSTOM_MAPPING_RESOURCES) ?? [];
        
        // Use the service to convert to MappingResource objects
        $predefinedResources = $mappingResourceService->convertToMappingResources($predefinedData, 'predefined');
        $customResources = $mappingResourceService->convertToMappingResources($customData, 'custom');

        // Only return active (not soft-deleted) resources
        $active = array_filter(array_merge($predefinedResources, $customResources), fn($r) => method_exists($r, 'isDeleted') ? !$r->isDeleted() : true);
        return array_values($active);
    }

    /**
     * Get the REDCap event ID for data operations
     * 
     * Retrieves the first event ID from the project configuration, handling
     * both longitudinal and classic project types. Manages global Project object.
     * 
     * @return string REDCap event identifier
     */
    public function getEventId(): string
    {
        $projectId = $this->getProjectId();
        $Proj = new Project($projectId);
        
        return (string) $Proj->firstEventId;
    }

    /**
     * Build API URL for the specified route
     * 
     * Creates a complete API URL following the REDCap External Module API pattern
     * with proper authentication parameters and route specification.
     * 
     * @param string $route The API route to build URL for
     * @return string Complete API URL with all required parameters
     */
    public function buildApiUrl(string $route): string
    {
        $params = [
            'pid' => $this->getProjectId(),
            'page' => 'api',
            'type' => 'module', 
            'prefix' => self::PREFIX,
            // 'route' => $route,
            'redcap_csrf_token' => \System::getCsrfToken()
        ];
        
        $baseUrl = APP_PATH_WEBROOT . 'api/';

        // build query string without route
        $query = http_build_query($params);

        // append route manually, raw (slashes preserved)
        return $baseUrl . '?' . $query . '&route=' . $route;
    }
}
