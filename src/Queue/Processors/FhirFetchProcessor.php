<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskSummary;
use Vanderbilt\FhirSnapshot\Services\FhirResourceService;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\FhirSnapshot;

class FhirFetchProcessor extends AbstractTaskProcessor
{

    public function __construct(
        FhirSnapshot $module, 
        private FhirResourceService $fhirResourceService,
        private RepeatedFormDataAccessor $dataAccessor
    ) {
        parent::__construct($module);
    }

    public function getTaskKey(): string
    {
        return Constants::TASK_FHIR_FETCH;
    }

    public function canHandle(string $taskKey): bool
    {
        return $taskKey === Constants::TASK_FHIR_FETCH;
    }

    protected function doProcess(Task $task): TaskProcessorResult
    {
        $params = $task->getParams();

        return $this->processGenericFhirFetch($task);
    }

    private function processGenericFhirFetch(Task $task): TaskProcessorResult
    {
        $params = $task->getParams();
        $startTime = microtime(true);
        
        $this->logInfo("Starting generic FHIR fetch task - Trigger: " . ($params['trigger'] ?? 'unknown'));
        
        // Initialize summary using value object
        $taskSummary = TaskSummary::create($params['trigger'] ?? 'unknown');
        
        // Get pending resources to process (simplified approach)
        $pendingResources = $this->getPendingResources();
        
        if (empty($pendingResources)) {
            $this->logInfo("No pending resources found for processing");
            $finalizedSummary = $taskSummary->finalize($startTime, 0, [], [], $this->getResourceStatus());
            return TaskProcessorResult::success("No pending resources to process", $finalizedSummary->toArray());
        }
        
        $this->logInfo("Found " . count($pendingResources) . " pending resources to process");
        
        // Process resources with resource monitoring
        $processedCount = 0;
        $processingTimes = [];
        $apiTimes = [];
        
        foreach ($pendingResources as $resource) {
            $resourceStartTime = microtime(true);
            
            // Check resource limits before processing each resource using inherited method
            if ($this->shouldPauseProcessing()) {
                $this->logInfo("Resource limits approaching, creating continuation task");
                $estimatedMinutes = round(((count($pendingResources) - $processedCount) / ($processedCount ?: 1)) * 
                          ((microtime(true) - $startTime) / 60), 1);
                
                // Create continuation task
                $continuationTask = $this->createContinuationTask($task);
                $taskSummary = $taskSummary->withContinuation(true, $continuationTask?->getId(), $estimatedMinutes);
                break;
            }
            
            try {
                $result = $this->processSingleResource($resource);
                
                $resourceTime = microtime(true) - $resourceStartTime;
                $processingTimes[] = $resourceTime;
                
                // Update processing metrics
                $taskSummary = $taskSummary->updateProcessingMetrics($resourceTime);
                
                if ($result['success']) {
                    if (isset($result['api_time'])) {
                        $apiTimes[] = $result['api_time'];
                    }
                    $taskSummary = $taskSummary->recordSuccess(
                        $result['payload_size'] ?? 0,
                        $result['api_time'] ?? 0
                    );
                } else {
                    $taskSummary = $taskSummary->recordFailure(
                        $result['error'] ?? 'Unknown error',
                        $resource['mrn'] ?? 'Unknown'
                    );
                }
                
            } catch (\Exception $e) {
                $this->logError("Exception processing resource: " . $e->getMessage());
                $taskSummary = $taskSummary->recordFailure(
                    $e->getMessage(),
                    $resource['mrn'] ?? 'Unknown'
                );
            }
            
            $processedCount++;
        }
        
        // Calculate remaining pending resources and finalize summary
        $remainingResources = $this->getPendingResources();
        $finalSummary = $taskSummary->finalize(
            $startTime,
            count($remainingResources),
            $processingTimes,
            $apiTimes,
            $this->getResourceStatus()
        );
        
        $message = "Processed $processedCount resources. " .
                  "Success: {$finalSummary->getResourcesCreated()}, " .
                  "Failed: {$finalSummary->getResourcesFailed()}, " .
                  "Remaining: {$finalSummary->getTotalMrnsRemaining()}";
        
        $this->logInfo($message);
        
        return TaskProcessorResult::success($message, $finalSummary->toArray());
    }
    
    private function getPendingResources(): array
    {
        $pendingResources = [];
        $allMrns = $this->dataAccessor->getAllMrns();
        
        foreach ($allMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) continue;
            
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            /** @var FhirResourceMetadata $meta */
            foreach ($allMetadata as $meta) {
                if ($meta->isPending()) {
                    $pendingResources[] = [
                        'mrn' => $mrn,
                        'record_id' => $recordId,
                        'metadata' => $meta
                    ];
                }
            }
        }
        
        return $pendingResources;
    }
    
    private function processSingleResource(array $resource): array
    {
        $startTime = microtime(true);
        
        // Mark as fetching
        $metadata = $resource['metadata']->withStatus(FhirResourceMetadata::STATUS_FETCHING);
        $this->dataAccessor->saveResourceMetadata($resource['record_id'], $metadata);
        
        try {
            // Fetch the resource - determine resource spec dynamically
            $result = $this->fhirResourceService->fetchAndStoreResource(
                $resource['record_id'],
                $resource['mrn'],
                $resource['metadata']->getResourceType(),
                $resource['metadata']->getRepeatInstance(),
                [
                    'resource_spec' => $resource['metadata']->getResourceType(), // Default to resource type
                    'mapping_resource_id' => null // Will be determined by the service
                ]
            );
            
            $apiTime = (microtime(true) - $startTime) * 1000; // Convert to milliseconds
            
            if ($result['success']) {
                return [
                    'success' => true,
                    'api_time' => $apiTime,
                    'payload_size' => $result['data']['payload_size'] ?? 0,
                    'message' => $result['message']
                ];
            } else {
                // Mark as failed
                $failedMetadata = $resource['metadata']
                    ->withStatus(FhirResourceMetadata::STATUS_FAILED)
                    ->withErrorMessage($result['message']);
                $this->dataAccessor->saveResourceMetadata($resource['record_id'], $failedMetadata);
                
                return [
                    'success' => false,
                    'api_time' => $apiTime,
                    'error' => $result['message']
                ];
            }
            
        } catch (\Exception $e) {
            // Mark as failed with exception
            $failedMetadata = $resource['metadata']
                ->withStatus(FhirResourceMetadata::STATUS_FAILED)
                ->withErrorMessage($e->getMessage());
            $this->dataAccessor->saveResourceMetadata($resource['record_id'], $failedMetadata);
            
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }
    
    private function createContinuationTask(Task $originalTask): ?Task
    {
        try {
            // Create a new task with the same parameters
            $continuationTask = Task::create(
                $originalTask->getKey(),
                $originalTask->getParams(),
                array_merge($originalTask->getMetadata(), [
                    'is_continuation' => true,
                    'parent_task_id' => $originalTask->getId(),
                    'created_due_to' => 'resource_limit_approached'
                ])
            );
            
            // Add to queue (we need access to QueueManager here)
            // For now, we'll return the task and let the calling code handle adding it
            return $continuationTask;
            
        } catch (\Exception $e) {
            $this->logError("Failed to create continuation task: " . $e->getMessage());
            return null;
        }
    }
}