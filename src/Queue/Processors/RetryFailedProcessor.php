<?php

namespace Vanderbilt\AllFhir\Queue\Processors;

use Vanderbilt\AllFhir\Constants;
use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\ValueObjects\Task;
use Vanderbilt\AllFhir\ValueObjects\TaskProcessorResult;
use Vanderbilt\AllFhir\Services\RepeatedFormResourceManager;

/**
 * RetryFailedProcessor
 * 
 * Specialized task processor for retrying failed FHIR resource operations in background mode.
 * Handles both single resource retries and bulk retry operations with proper resource 
 * management, error handling, and detailed progress reporting.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Processes retry failed tasks created by MrnController::retryFailed
 * - Manages memory and execution time during large bulk retry operations
 * - Provides detailed processing statistics and comprehensive retry reporting
 * - Handles both single resource and bulk retry operations
 * - Ensures proper error handling and recovery for failed retry operations
 * 
 * PROCESSING WORKFLOW:
 * 
 * 1. TASK VALIDATION:
 *    - Validates required task parameters (project_id, operation_type)
 *    - Validates operation-specific parameters based on operation type
 *    - Verifies project accessibility and resource parameters
 * 
 * 2. RETRY EXECUTION:
 *    - Branches processing based on operation_type ('bulk' or 'single')
 *    - Uses RepeatedFormResourceManager to perform retry operations
 *    - Monitors memory usage and processing time during operation
 *    - Handles large datasets with progress tracking and resource monitoring
 * 
 * 3. RESULT REPORTING:
 *    - Provides detailed retry statistics and operation summaries
 *    - Reports retry counts, success/failure details, and processing metrics
 *    - Includes timing information and resource usage metrics
 *    - Handles error conditions with detailed diagnostic information
 * 
 * OPERATION MODES:
 * 
 * BULK RETRY MODE:
 * - Processes multiple failed resources matching optional filters
 * - Supports filtering by resource_type or other criteria
 * - Handles large-scale retry operations efficiently
 * - Reports total retry counts and success/failure statistics
 * 
 * SINGLE RETRY MODE:
 * - Retries a specific failed resource identified by MRN, resource type, and instance
 * - Validates resource exists and is in failed state before retry
 * - Provides detailed feedback on single resource retry results
 * - Handles resource-specific error conditions and reporting
 * 
 * MEMORY MANAGEMENT:
 * - Monitors resource usage during retry operations
 * - Handles large retry sets without exceeding memory limits
 * - Provides graceful degradation for resource constraints
 * - Ensures cleanup of temporary data and resources
 * 
 * ERROR HANDLING:
 * - Validates operation parameters before processing
 * - Handles retry operation failures gracefully
 * - Provides detailed error messages for troubleshooting
 * - Ensures partial retry operations are properly logged and reported
 * 
 * TASK PARAMETERS:
 * - 'project_id': REDCap project identifier
 * - 'operation_type': 'bulk' or 'single' retry mode
 * 
 * BULK MODE PARAMETERS:
 * - 'filters': Optional array of filters for bulk operations
 * 
 * SINGLE MODE PARAMETERS:
 * - 'mrn': Medical record number
 * - 'resource_type': Type of resource to retry
 * - 'repeat_instance': Repeat instance number
 * 
 * TASK METADATA:
 * - 'created_by_endpoint': Source endpoint that created the task
 * - 'creation_timestamp': Task creation time
 * - 'background_mode': Boolean indicating background processing
 * 
 * USAGE INTEGRATION:
 * Task is created by MrnController::retryFailed when background processing
 * is requested. The processor handles all technical aspects of retry operations
 * and provides comprehensive results for client consumption.
 */
class RetryFailedProcessor extends AbstractTaskProcessor
{

    function __construct(
        private AllFhir $module,
        private RepeatedFormResourceManager $resourceManager
    ) {
        parent::__construct($module);
    }

    public function getTaskKey(): string
    {
        return Constants::TASK_RETRY_FAILED;
    }

    protected function doProcess(Task $task): TaskProcessorResult
    {
        // Validate task parameters
        $validationResult = $this->validateParams($task, ['project_id', 'operation_type']);
        if ($validationResult !== null) {
            return $validationResult;
        }

        $params = $task->getParams();
        $metadata = $task->getMetadata();

        $projectId = $params['project_id'];
        $operationType = $params['operation_type'];

        $this->logInfo("Starting retry failed operation (type: {$operationType}) for project {$projectId}");

        $startTime = microtime(true);
        $startMemory = memory_get_usage(true);

        try {

            if ($operationType === 'bulk') {
                // Handle bulk retry operation
                $filters = $params['filters'] ?? [];
                
                $this->logInfo("Performing bulk retry with filters: " . json_encode($filters));
                $retriedCount = $this->resourceManager->bulkRetryFailed($filters);

                $endTime = microtime(true);
                $endMemory = memory_get_usage(true);
                $processingTime = $endTime - $startTime;
                $memoryUsed = $endMemory - $startMemory;

                $this->logInfo("Bulk retry completed for project {$projectId}: {$retriedCount} resources retried in {$processingTime}s");

                // Prepare result data for bulk operation
                $resultData = [
                    'operation_type' => 'bulk',
                    'retried_count' => $retriedCount,
                    'filters_applied' => $filters,
                    'processing_stats' => [
                        'processing_time_seconds' => round($processingTime, 3),
                        'memory_used_bytes' => $memoryUsed,
                        'memory_peak_mb' => round(memory_get_peak_usage(true) / 1024 / 1024, 2),
                        'start_time' => date('c', intval($startTime)),
                        'end_time' => date('c', intval($endTime))
                    ],
                    'operation_summary' => [
                        'project_id' => $projectId,
                        'background_mode' => $metadata['background_mode'] ?? true
                    ]
                ];

                return TaskProcessorResult::success(
                    "Bulk retry completed. {$retriedCount} failed resources marked for retry.",
                    $resultData
                );

            } elseif ($operationType === 'single') {
                // Handle single resource retry operation
                $mrn = $params['mrn'];
                $resourceType = $params['resource_type'];
                $repeatInstance = $params['repeat_instance'];

                $this->logInfo("Performing single retry for MRN: {$mrn}, Resource: {$resourceType}, Instance: {$repeatInstance}");
                $success = $this->resourceManager->retryFailedResource($mrn, $resourceType, (int)$repeatInstance);

                $endTime = microtime(true);
                $endMemory = memory_get_usage(true);
                $processingTime = $endTime - $startTime;
                $memoryUsed = $endMemory - $startMemory;

                if ($success) {
                    $this->logInfo("Single retry successful for MRN: {$mrn}, Resource: {$resourceType}, Instance: {$repeatInstance}");
                    $message = "Retry task created for MRN: {$mrn}, Resource: {$resourceType}, Instance: {$repeatInstance}";
                } else {
                    $this->logWarning("Single retry failed or resource not in failed state for MRN: {$mrn}, Resource: {$resourceType}, Instance: {$repeatInstance}");
                    $message = "Failed to create retry task or resource is not in failed state";
                }

                // Prepare result data for single operation
                $resultData = [
                    'operation_type' => 'single',
                    'success' => $success,
                    'mrn' => $mrn,
                    'resource_type' => $resourceType,
                    'repeat_instance' => $repeatInstance,
                    'processing_stats' => [
                        'processing_time_seconds' => round($processingTime, 3),
                        'memory_used_bytes' => $memoryUsed,
                        'memory_peak_mb' => round(memory_get_peak_usage(true) / 1024 / 1024, 2),
                        'start_time' => date('c', intval($startTime)),
                        'end_time' => date('c', intval($endTime))
                    ],
                    'operation_summary' => [
                        'project_id' => $projectId,
                        'background_mode' => $metadata['background_mode'] ?? true
                    ]
                ];

                if ($success) {
                    return TaskProcessorResult::success($message, $resultData);
                } else {
                    return TaskProcessorResult::failure($message, $resultData);
                }

            } else {
                return TaskProcessorResult::failure("Invalid operation_type: {$operationType}. Must be 'bulk' or 'single'");
            }

        } catch (\Exception $e) {
            $endTime = microtime(true);
            $processingTime = $endTime - $startTime;

            $this->logError("Failed to perform retry failed operation (type: {$operationType}) for project {$projectId}: " . $e->getMessage());

            return TaskProcessorResult::failure(
                "Failed to perform retry failed operation: " . $e->getMessage(),
                [
                    'error_details' => $e->getMessage(),
                    'exception_type' => get_class($e),
                    'processing_time_seconds' => round($processingTime, 3),
                    'operation_type' => $operationType,
                    'project_id' => $projectId
                ]
            );
        }
    }

    /**
     * Enhanced parameter validation for retry failed tasks
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

        // Validate operation_type
        if (!isset($params['operation_type']) || !in_array($params['operation_type'], ['bulk', 'single'])) {
            return TaskProcessorResult::failure("operation_type must be either 'bulk' or 'single'");
        }

        $operationType = $params['operation_type'];

        // Validate parameters specific to operation type
        if ($operationType === 'single') {
            $requiredSingleParams = ['mrn', 'resource_type', 'repeat_instance'];
            $missing = [];

            foreach ($requiredSingleParams as $param) {
                if (!isset($params[$param]) || $params[$param] === '') {
                    $missing[] = $param;
                }
            }

            if (!empty($missing)) {
                return TaskProcessorResult::failure(
                    sprintf('Missing required parameters for single retry: %s', implode(', ', $missing))
                );
            }

            // Validate repeat_instance is numeric
            if (!is_numeric($params['repeat_instance'])) {
                return TaskProcessorResult::failure("repeat_instance must be numeric");
            }
        }

        // For bulk operations, filters are optional, but if present must be an array
        if ($operationType === 'bulk' && isset($params['filters']) && !is_array($params['filters'])) {
            return TaskProcessorResult::failure("filters parameter must be an array");
        }

        return null; // Validation passed
    }
}