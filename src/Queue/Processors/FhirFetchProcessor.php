<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;
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
        
        // Initialize summary structure
        $taskSummary = [
            'execution' => [
                'started_at' => date('Y-m-d H:i:s'),
                'completed_at' => null,
                'duration_seconds' => 0,
                'termination_reason' => 'completed'
            ],
            'statistics' => [
                'total_mrns_targeted' => 0,
                'total_mrns_processed' => 0,
                'total_mrns_remaining' => 0,
                'resources_created' => 0,
                'resources_updated' => 0,
                'resources_failed' => 0,
                'api_calls_made' => 0,
                'total_payload_size_mb' => 0
            ],
            'status_summary' => [
                'completed' => 0,
                'failed' => 0,
                'pending' => 0
            ],
            'errors' => [],
            'performance' => [
                'avg_processing_time_seconds' => 0,
                'fastest_mrn_seconds' => PHP_FLOAT_MAX,
                'slowest_mrn_seconds' => 0,
                'api_response_avg_ms' => 0,
                'throughput_mrns_per_minute' => 0
            ],
            'failed_samples' => [],
            'resource_context' => [
                'trigger' => $params['trigger'] ?? 'unknown'
            ],
            'continuation' => [
                'next_task_needed' => false,
                'next_task_id' => null,
                'estimated_remaining_time_minutes' => 0
            ]
        ];
        
        // Get pending resources to process (simplified approach)
        $pendingResources = $this->getPendingResources();
        $taskSummary['statistics']['total_mrns_targeted'] = count($pendingResources);
        
        if (empty($pendingResources)) {
            $this->logInfo("No pending resources found for processing");
            $taskSummary['execution']['completed_at'] = date('Y-m-d H:i:s');
            return TaskProcessorResult::success("No pending resources to process", $taskSummary);
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
                $taskSummary['execution']['termination_reason'] = 'resource_limit_approached';
                $taskSummary['continuation']['next_task_needed'] = true;
                $taskSummary['continuation']['estimated_remaining_time_minutes'] = 
                    round(((count($pendingResources) - $processedCount) / ($processedCount ?: 1)) * 
                          ((microtime(true) - $startTime) / 60), 1);
                
                // Create continuation task
                $continuationTask = $this->createContinuationTask($task);
                $taskSummary['continuation']['next_task_id'] = $continuationTask ? $continuationTask->getId() : null;
                break;
            }
            
            try {
                $result = $this->processSingleResource($resource);
                
                $resourceTime = microtime(true) - $resourceStartTime;
                $processingTimes[] = $resourceTime;
                
                if ($result['success']) {
                    $taskSummary['statistics']['resources_created']++;
                    $taskSummary['status_summary']['completed']++;
                    if (isset($result['payload_size'])) {
                        $taskSummary['statistics']['total_payload_size_mb'] += $result['payload_size'] / 1024 / 1024;
                    }
                    if (isset($result['api_time'])) {
                        $apiTimes[] = $result['api_time'];
                        $taskSummary['statistics']['api_calls_made']++;
                    }
                } else {
                    $taskSummary['statistics']['resources_failed']++;
                    $taskSummary['status_summary']['failed']++;
                    
                    // Track error types
                    $errorType = $this->categorizeError($result['error'] ?? 'Unknown error');
                    $taskSummary['errors'][$errorType] = ($taskSummary['errors'][$errorType] ?? 0) + 1;
                    
                    // Add failed sample (limit to 5)
                    if (count($taskSummary['failed_samples']) < 5) {
                        $taskSummary['failed_samples'][] = [
                            'mrn' => $resource['mrn'] ?? 'Unknown',
                            'error' => substr($result['error'] ?? 'Unknown error', 0, 100)
                        ];
                    }
                }
                
                // Update performance metrics
                $taskSummary['performance']['fastest_mrn_seconds'] = min($taskSummary['performance']['fastest_mrn_seconds'], $resourceTime);
                $taskSummary['performance']['slowest_mrn_seconds'] = max($taskSummary['performance']['slowest_mrn_seconds'], $resourceTime);
                
            } catch (\Exception $e) {
                $this->logError("Exception processing resource: " . $e->getMessage());
                $taskSummary['statistics']['resources_failed']++;
                $taskSummary['status_summary']['failed']++;
                
                $taskSummary['errors']['exception'] = ($taskSummary['errors']['exception'] ?? 0) + 1;
                
                if (count($taskSummary['failed_samples']) < 5) {
                    $taskSummary['failed_samples'][] = [
                        'mrn' => $resource['mrn'] ?? 'Unknown',
                        'error' => substr($e->getMessage(), 0, 100)
                    ];
                }
            }
            
            $processedCount++;
            $taskSummary['statistics']['total_mrns_processed'] = $processedCount;
        }
        
        // Calculate remaining pending resources
        $remainingResources = $this->getPendingResources();
        $taskSummary['statistics']['total_mrns_remaining'] = count($remainingResources);
        $taskSummary['status_summary']['pending'] = count($remainingResources);
        
        // Finalize execution summary
        $endTime = microtime(true);
        $taskSummary['execution']['completed_at'] = date('Y-m-d H:i:s');
        $taskSummary['execution']['duration_seconds'] = round($endTime - $startTime, 2);
        
        // Add resource status information if monitor available
        $resourceStatus = $this->getResourceStatus();
        if (!empty($resourceStatus)) {
            $taskSummary['execution']['resource_status'] = $resourceStatus;
        }
        
        // Calculate performance metrics
        if (!empty($processingTimes)) {
            $taskSummary['performance']['avg_processing_time_seconds'] = round(array_sum($processingTimes) / count($processingTimes), 3);
            $taskSummary['performance']['throughput_mrns_per_minute'] = round(($processedCount / $taskSummary['execution']['duration_seconds']) * 60, 1);
        }
        
        if (!empty($apiTimes)) {
            $taskSummary['performance']['api_response_avg_ms'] = round(array_sum($apiTimes) / count($apiTimes), 1);
        }
        
        // Reset fastest time if no processing occurred
        if ($taskSummary['performance']['fastest_mrn_seconds'] === PHP_FLOAT_MAX) {
            $taskSummary['performance']['fastest_mrn_seconds'] = 0;
        }
        
        $message = "Processed $processedCount resources. " .
                  "Success: {$taskSummary['status_summary']['completed']}, " .
                  "Failed: {$taskSummary['status_summary']['failed']}, " .
                  "Remaining: {$taskSummary['status_summary']['pending']}";
        
        $this->logInfo($message);
        
        return TaskProcessorResult::success($message, $taskSummary);
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
    
    private function categorizeError(string $error): string
    {
        $error = strtolower($error);
        
        if (strpos($error, 'timeout') !== false || strpos($error, 'timed out') !== false) {
            return 'connection_timeout';
        } elseif (strpos($error, 'authentication') !== false || strpos($error, 'unauthorized') !== false) {
            return 'authentication_failed';
        } elseif (strpos($error, 'break') !== false && strpos($error, 'glass') !== false) {
            return 'break_the_glass_required';
        } elseif (strpos($error, 'not found') !== false || strpos($error, '404') !== false) {
            return 'resource_not_found';
        } elseif (strpos($error, 'connection') !== false) {
            return 'connection_error';
        } else {
            return 'other';
        }
    }
}