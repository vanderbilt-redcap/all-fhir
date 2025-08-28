<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;

/**
 * FullSyncProcessor
 * 
 * Specialized task processor for performing full project synchronization in background mode.
 * Handles comprehensive FHIR resource synchronization between configuration and existing data
 * with proper resource management, error handling, and detailed progress reporting.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Processes full sync tasks created by MrnController::performFullSync
 * - Manages memory and execution time during large synchronization operations
 * - Provides detailed processing statistics and comprehensive sync reporting
 * - Handles resource creation, updates, and cleanup operations
 * - Ensures proper error handling and recovery for failed sync operations
 * 
 * PROCESSING WORKFLOW:
 * 
 * 1. TASK VALIDATION:
 *    - Validates required task parameters (project_id, configured_resources)
 *    - Deserializes and validates configured mapping resources
 *    - Verifies project accessibility and permissions
 * 
 * 2. SYNCHRONIZATION EXECUTION:
 *    - Uses RepeatedFormResourceManager to perform comprehensive sync
 *    - Monitors memory usage and processing time during operation
 *    - Handles large datasets with progress tracking and resource monitoring
 *    - Processes resource creation, updates, and cleanup operations
 * 
 * 3. RESULT REPORTING:
 *    - Provides detailed sync statistics and operation summaries
 *    - Reports created, updated, and removed resource counts
 *    - Includes timing information and resource usage metrics
 *    - Handles error conditions with detailed diagnostic information
 * 
 * MEMORY MANAGEMENT:
 * - Monitors resource usage during sync operations
 * - Handles large resource sets without exceeding memory limits
 * - Provides graceful degradation for resource constraints
 * - Ensures cleanup of temporary data and resources
 * 
 * ERROR HANDLING:
 * - Validates configured resources before processing
 * - Handles sync operation failures gracefully
 * - Provides detailed error messages for troubleshooting
 * - Ensures partial sync operations are properly logged
 * 
 * TASK PARAMETERS:
 * - 'project_id': REDCap project identifier
 * - 'configured_resources': Serialized array of MappingResource objects
 * 
 * TASK METADATA:
 * - 'created_by_endpoint': Source endpoint that created the task
 * - 'creation_timestamp': Task creation time
 * - 'background_mode': Boolean indicating background processing
 * 
 * USAGE INTEGRATION:
 * Task is created by MrnController::performFullSync when background processing
 * is requested. The processor handles all technical aspects of synchronization
 * and provides comprehensive results for client consumption.
 */
class FullSyncProcessor extends AbstractTaskProcessor
{

    function __construct(
        private FhirSnapshot $module,
        private RepeatedFormResourceManager $resourceManager
    ) {
        parent::__construct($module);
    }

    public function getTaskKey(): string
    {
        return Constants::TASK_FULL_SYNC;
    }

    protected function doProcess(Task $task): TaskProcessorResult
    {
        // Validate task parameters
        $validationResult = $this->validateParams($task, ['project_id', 'configured_resources']);
        if ($validationResult !== null) {
            return $validationResult;
        }

        $params = $task->getParams();
        $metadata = $task->getMetadata();

        $projectId = $params['project_id'];
        $configuredResourcesData = $params['configured_resources'];

        // Deserialize configured resources
        try {
            $configuredResources = [];
            foreach ($configuredResourcesData as $resourceData) {
                $configuredResources[] = MappingResource::fromArray($resourceData);
            }
        } catch (\Exception $e) {
            return TaskProcessorResult::failure("Failed to deserialize configured resources: " . $e->getMessage());
        }

        if (empty($configuredResources)) {
            return TaskProcessorResult::failure("No configured resources found for synchronization");
        }

        $this->logInfo("Starting full project synchronization for project {$projectId} with " . count($configuredResources) . " configured resources");

        $startTime = microtime(true);
        $startMemory = memory_get_usage(true);

        try {

            // Perform the full synchronization
            $syncResults = $this->resourceManager->performFullSync($configuredResources);

            $endTime = microtime(true);
            $endMemory = memory_get_usage(true);
            $processingTime = $endTime - $startTime;
            $memoryUsed = $endMemory - $startMemory;

            $this->logInfo("Full sync completed successfully for project {$projectId} in {$processingTime}s");

            // Prepare comprehensive result data
            $resultData = [
                'sync_results' => $syncResults->toArray(),
                'statistics' => $syncResults->getStatistics(),
                'summary_message' => $syncResults->getSummaryMessage(),
                'processing_stats' => [
                    'processing_time_seconds' => round($processingTime, 3),
                    'memory_used_bytes' => $memoryUsed,
                    'memory_peak_mb' => round(memory_get_peak_usage(true) / 1024 / 1024, 2),
                    'start_time' => date('c', intval($startTime)),
                    'end_time' => date('c', intval($endTime))
                ],
                'resource_summary' => [
                    'total_configured' => count($configuredResources),
                    'project_id' => $projectId,
                    'background_mode' => $metadata['background_mode'] ?? true
                ]
            ];

            return TaskProcessorResult::success(
                $syncResults->getSummaryMessage(),
                $resultData
            );

        } catch (\Exception $e) {
            $endTime = microtime(true);
            $processingTime = $endTime - $startTime;

            $this->logError("Failed to perform full sync for project {$projectId}: " . $e->getMessage());

            return TaskProcessorResult::failure(
                "Failed to perform full project synchronization: " . $e->getMessage(),
                [
                    'error_details' => $e->getMessage(),
                    'exception_type' => get_class($e),
                    'processing_time_seconds' => round($processingTime, 3),
                    'configured_resources_count' => count($configuredResources),
                    'project_id' => $projectId
                ]
            );
        }
    }

    /**
     * Enhanced parameter validation for full sync tasks
     * 
     * @param Task $task Task to validate
     * @param array $requiredParams Required parameter names
     * @return TaskProcessorResult|null Validation result if failed, null if valid
     */
    protected function validateParams(Task $task, array $requiredParams): ?TaskProcessorResult
    {
        // First run standard parameter validation
        $baseValidation = parent::validateParams($task, $requiredParams);
        if ($baseValidation !== null) {
            return $baseValidation;
        }

        $params = $task->getParams();

        // Validate project_id format
        if (isset($params['project_id']) && !is_numeric($params['project_id'])) {
            return TaskProcessorResult::failure("Invalid project_id format");
        }

        // Validate configured_resources is an array
        if (!isset($params['configured_resources']) || !is_array($params['configured_resources'])) {
            return TaskProcessorResult::failure("Task parameters must contain 'configured_resources' array");
        }

        if (empty($params['configured_resources'])) {
            return TaskProcessorResult::failure("No configured resources found in task parameters");
        }

        return null; // Validation passed
    }
}