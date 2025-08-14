<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;
use Vanderbilt\FhirSnapshot\Services\FhirResourceService;

class FhirFetchProcessor extends AbstractTaskProcessor
{
    private FhirResourceService $fhirResourceService;

    public function __construct(FhirResourceService $fhirResourceService)
    {
        $this->fhirResourceService = $fhirResourceService;
    }

    public function getTaskKey(): string
    {
        return 'fhir_fetch';
    }

    public function canHandle(string $taskKey): bool
    {
        return in_array($taskKey, ['fhir_fetch', 'enhanced_fhir_fetch']);
    }

    protected function doProcess(Task $task): TaskProcessorResult
    {
        $taskKey = $task->getKey();
        
        if ($taskKey === 'enhanced_fhir_fetch') {
            return $this->processEnhancedFhirFetch($task);
        } else {
            return $this->processBatchFhirFetch($task);
        }
    }

    private function processEnhancedFhirFetch(Task $task): TaskProcessorResult
    {
        $validationResult = $this->validateParams($task, ['record_id', 'mrn', 'resource_type', 'repeat_instance']);
        if ($validationResult !== null) {
            return $validationResult;
        }

        $params = $task->getParams();
        $recordId = $params['record_id'];
        $mrn = $params['mrn'];
        $resourceType = $params['resource_type'];
        $repeatInstance = (int) $params['repeat_instance'];
        $mappingResourceId = $params['mapping_resource_id'] ?? null;
        $isRefetch = $params['is_refetch'] ?? false;

        $this->logInfo("Enhanced FHIR fetch for Record ID: $recordId, MRN: $mrn, Resource: $resourceType, Instance: $repeatInstance");

        $result = $this->fhirResourceService->fetchAndStoreResource(
            $recordId,
            $mrn,
            $resourceType,
            $repeatInstance,
            [
                'mapping_resource_id' => $mappingResourceId,
                'is_refetch' => $isRefetch
            ]
        );

        if ($result['success']) {
            return TaskProcessorResult::success($result['message'], $result['data']);
        } else {
            $this->logError("FHIR fetch failed for Record ID: $recordId, MRN: $mrn, Resource: $resourceType - " . $result['message']);
            return TaskProcessorResult::failure($result['message'], $result['data']);
        }
    }

    private function processBatchFhirFetch(Task $task): TaskProcessorResult
    {
        $validationResult = $this->validateParams($task, ['mrn', 'resources']);
        if ($validationResult !== null) {
            return $validationResult;
        }

        $params = $task->getParams();
        $mrn = $params['mrn'];
        $resources = $params['resources'];

        $this->logInfo("Fetching FHIR data for MRN: $mrn, Resources: " . implode(', ', $resources));

        $fetchedCount = 0;
        $errors = [];
        $fetchResults = [];

        foreach ($resources as $resourceType) {
            $this->logDebug("Fetching $resourceType data for MRN: $mrn");
            
            try {
                $fhirData = $this->fhirResourceService->fetchFhirResource($mrn, $resourceType, false);
                
                if ($fhirData !== null) {
                    $fetchedCount++;
                    $fetchResults[] = [
                        'resource_type' => $resourceType,
                        'status' => 'success',
                        'data_size' => strlen(json_encode($fhirData))
                    ];
                    $this->logDebug("Successfully fetched $resourceType for MRN: $mrn");
                } else {
                    $errors[] = "No data found for $resourceType";
                    $fetchResults[] = [
                        'resource_type' => $resourceType,
                        'status' => 'no_data',
                        'error' => "No data found"
                    ];
                    $this->logError("No data found for $resourceType for MRN: $mrn");
                }
            } catch (\Exception $e) {
                $errors[] = "Failed to fetch $resourceType: " . $e->getMessage();
                $fetchResults[] = [
                    'resource_type' => $resourceType,
                    'status' => 'error',
                    'error' => $e->getMessage()
                ];
                $this->logError("Failed to fetch $resourceType for MRN: $mrn - " . $e->getMessage());
            }
        }

        $totalResources = count($resources);
        $resultMessage = "Fetched $fetchedCount/$totalResources resources for MRN: $mrn";
        
        if (!empty($errors)) {
            $resultMessage .= " (Errors: " . implode('; ', $errors) . ")";
        }

        return TaskProcessorResult::success($resultMessage, [
            'mrn' => $mrn,
            'requested_resources' => $resources,
            'fetched_count' => $fetchedCount,
            'total_count' => $totalResources,
            'success_rate' => round(($fetchedCount / $totalResources) * 100, 2) . '%',
            'results' => $fetchResults,
            'errors' => $errors
        ]);
    }
}