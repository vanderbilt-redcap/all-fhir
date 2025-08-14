<?php
namespace Vanderbilt\FhirSnapshot;

use DI\Container;
use ExternalModules\AbstractExternalModule;
use Vanderbilt\FhirSnapshot\Queue\QueueProcessor;

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


}
