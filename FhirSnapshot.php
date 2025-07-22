<?php
namespace Vanderbilt\FhirSnapshot;


use ExternalModules\AbstractExternalModule;

class FhirSnapshot extends AbstractExternalModule {


    function logToFile($message, $file = APP_PATH_TEMP.'FHIR-snapshot.log') {
        $timestamp = date('Y-m-d H:i:s');
        file_put_contents($file, "[$timestamp] $message" . PHP_EOL, FILE_APPEND);
    }


}
