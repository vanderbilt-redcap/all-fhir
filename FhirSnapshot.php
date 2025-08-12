<?php
namespace Vanderbilt\FhirSnapshot;


use ExternalModules\AbstractExternalModule;

class FhirSnapshot extends AbstractExternalModule {

    private static FhirSnapshot $instance;

    public static function getInstance() {
        if(!isset(self::$instance)) {
            global $module;
            if($module) self::$instance = $module;
            else self::$instance = new self();
        }
        return self::$instance;
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
            // Import required classes
            require_once '/Users/delacqf/code/redcap/html/redcap_v999.0.0/Classes/SystemMonitors/ResourceMonitor.php';
            
            // Initialize ResourceMonitor with appropriate limits for cron jobs
            $resourceMonitor = \Vanderbilt\REDCap\Classes\SystemMonitors\ResourceMonitor::create([
                'memory' => 0.8,      // 80% memory threshold
                'time' => '50 seconds' // Allow 50 seconds for processing (cron runs every minute)
            ]);
            
            // Initialize queue components
            $queueManager = new \Vanderbilt\FhirSnapshot\Queue\QueueManager($this);
            $queueProcessor = new \Vanderbilt\FhirSnapshot\Queue\QueueProcessor(
                $this, 
                $queueManager, 
                $resourceMonitor
            );
            
            // Process the queue
            $result = $queueProcessor->process();
            
            // Log processing summary
            $this->logToFile("Queue processing completed: " . json_encode($result->toArray()));
            
            return $result;
            
        } catch (\Exception $e) {
            $this->logToFile("Error in processQueue: " . $e->getMessage());
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
        $cron_name = $cronInfo['cron_name'] ?? 'FHIR Snapshot';
        try {
            $this->processQueue();
            return sprintf("%s - all jobs have been processed", $cron_name);
        } catch (\Exception $e) {
            return sprintf("%s - error processing the jobs: %s", $cron_name, $e->getMessage());
        }
    }


}
