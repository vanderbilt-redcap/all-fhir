<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;

class FhirFetchProcessor extends AbstractTaskProcessor
{
    public function getTaskKey(): string
    {
        return 'fhir_fetch';
    }

    protected function doProcess(Task $task): TaskProcessorResult
    {
        $validationResult = $this->validateParams($task, ['mrn', 'resources']);
        if ($validationResult !== null) {
            return $validationResult;
        }

        $params = $task->getParams();
        $mrn = $params['mrn'];
        $resources = $params['resources'];

        $this->logInfo("Fetching FHIR data for MRN: $mrn, Resources: " . implode(', ', $resources));

        // Simulate FHIR data fetching process
        // In a real implementation, this would:
        // 1. Connect to the FHIR server
        // 2. Fetch resources for the given MRN
        // 3. Store the data in REDCap
        // 4. Update status fields

        // For now, we'll simulate the process
        $fetchedCount = 0;
        foreach ($resources as $resource) {
            $this->logDebug("Fetching $resource data for MRN: $mrn");
            
            // Simulate API call delay
            usleep(100000); // 0.1 seconds
            
            // Simulate success/failure (90% success rate)
            if (rand(1, 10) <= 9) {
                $fetchedCount++;
                $this->logDebug("Successfully fetched $resource for MRN: $mrn");
            } else {
                $this->logError("Failed to fetch $resource for MRN: $mrn");
            }
        }

        $totalResources = count($resources);
        $resultMessage = "Fetched $fetchedCount/$totalResources resources for MRN: $mrn";

        return TaskProcessorResult::success($resultMessage, [
            'mrn' => $mrn,
            'requested_resources' => $resources,
            'fetched_count' => $fetchedCount,
            'total_count' => $totalResources,
            'success_rate' => round(($fetchedCount / $totalResources) * 100, 2) . '%'
        ]);
    }
}