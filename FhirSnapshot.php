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


}
