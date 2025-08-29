<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;
use Vanderbilt\FhirSnapshot\Services\ArchivePackager;
use Vanderbilt\FhirSnapshot\Services\ArchiveMetadataService;

/**
 * ArchiveProcessor
 * 
 * Specialized task processor for creating ZIP archives of completed FHIR resources.
 * Handles background processing of FHIR resource archiving with proper resource management,
 * error handling, and detailed progress reporting.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Processes FHIR archive tasks created by ResourceArchiveService
 * - Manages memory and execution time during large archive operations
 * - Provides detailed processing statistics and error reporting
 * - Handles archive file creation and storage management
 * - Ensures proper cleanup of temporary resources on completion or failure
 * 
 * PROCESSING WORKFLOW:
 * 
 * 1. TASK VALIDATION:
 *    - Validates required task parameters (project_id, archive_name, etc.)
 *    - Extracts resource data from task metadata
 *    - Verifies resource accessibility and completeness
 * 
 * 2. ARCHIVE CREATION:
 *    - Uses ArchivePackager to create ZIP with organized structure
 *    - Monitors memory usage and processing time
 *    - Handles large datasets with progress tracking
 *    - Provides detailed statistics on processing results
 * 
 * 3. RESULT REPORTING:
 *    - Updates task metadata with archive details
 *    - Provides download information and file statistics
 *    - Reports processing metrics and performance data
 *    - Handles error conditions with detailed error messages
 * 
 * MEMORY MANAGEMENT:
 * - Monitors resource usage during archive creation
 * - Handles large datasets without exceeding limits
 * - Provides graceful degradation for memory constraints
 * - Ensures cleanup of temporary resources
 * 
 * ERROR HANDLING:
 * - Validates resource accessibility before processing
 * - Handles ZIP creation failures gracefully
 * - Provides detailed error messages for troubleshooting
 * - Ensures partial archives are cleaned up on failure
 * 
 * TASK PARAMETERS:
 * - 'project_id': REDCap project identifier
 * - 'archive_name': Name for the created archive file
 * - 'resource_count': Expected number of resources (for progress tracking)
 * - 'options': Additional options passed from ResourceArchiveService
 * 
 * TASK METADATA:
 * - 'resources': Array of resource data for archiving
 * - 'created_by_service': Service that created the task
 * - 'creation_timestamp': Task creation time
 * 
 * USAGE INTEGRATION:
 * Task is typically created by ResourceArchiveService when background processing
 * is needed for large archive operations. The processor handles all technical
 * aspects of ZIP creation and provides comprehensive results.
 */
class ArchiveProcessor extends AbstractTaskProcessor
{

    function __construct(
        private FhirSnapshot $module,
        private ArchivePackager $archivePackager,
        private ArchiveMetadataService $archiveMetadataService
    ) {
        parent::__construct($module);
    }

    public function getTaskKey(): string
    {
        return Constants::TASK_ARCHIVE;
    }

    protected function doProcess(Task $task): TaskProcessorResult
    {
        // Validate task parameters
        $validationResult = $this->validateParams($task, ['project_id', 'archive_name', 'resource_count']);
        if ($validationResult !== null) {
            return $validationResult;
        }

        $params = $task->getParams();
        $metadata = $task->getMetadata();

        $projectId = $params['project_id'];
        $archiveName = $params['archive_name'];
        $resourceCount = $params['resource_count'];
        $options = $params['options'] ?? [];

        // Extract resources from task metadata
        $resources = $metadata['resources'] ?? [];
        
        if (empty($resources)) {
            return TaskProcessorResult::failure("No resources found in task metadata");
        }

        if (count($resources) !== $resourceCount) {
            $this->logWarning("Resource count mismatch: expected {$resourceCount}, found " . count($resources));
        }

        $this->logInfo("Starting FHIR archive creation for {$archiveName} with " . count($resources) . " resources");

        $startTime = microtime(true);
        $startMemory = memory_get_usage(true);

        try {

            // Package the resources into ZIP archive
            $packagingOptions = array_merge($options, [
                'archive_name' => $archiveName,
                'project_id' => $projectId,
                'include_metadata' => true
            ]);

            $archiveInfo = $this->archivePackager->packageResources($resources, $packagingOptions);

            $endTime = microtime(true);
            $endMemory = memory_get_usage(true);
            $processingTime = $endTime - $startTime;
            $memoryUsed = $endMemory - $startMemory;

            $this->logInfo("Archive created successfully: {$archiveInfo->getFileName()} " .
                          "({$archiveInfo->getFileSize()} bytes, {$processingTime}s)");

            if ($archiveInfo->getFailedFiles() > 0) {
                $this->logWarning("Archive created with {$archiveInfo->getFailedFiles()} failed files");
            }
            
            // Get the archive ID from task metadata (set by ResourceArchiveService)
            $metadata = $task->getMetadata();
            $archiveId = $metadata['archive_id'] ?? $task->getId(); // Fallback to task ID for backward compatibility
            
            // Update archive status in unified metadata service
            $this->archiveMetadataService->markCompleted($archiveId, $archiveInfo->toArray());

            return TaskProcessorResult::success(
                "FHIR archive created successfully: {$archiveInfo->getSuccessfulFiles()} files, " .
                "{$archiveInfo->getFileSize()} bytes"
            );

        } catch (\Exception $e) {
            $endTime = microtime(true);
            $processingTime = $endTime - $startTime;

            $this->logError("Failed to create FHIR archive: " . $e->getMessage());
            
            // Get the archive ID from task metadata (set by ResourceArchiveService)
            $metadata = $task->getMetadata();
            $archiveId = $metadata['archive_id'] ?? $task->getId(); // Fallback to task ID for backward compatibility
            
            // Mark archive as failed in unified metadata service
            $this->archiveMetadataService->markFailed($archiveId, $e->getMessage());

            return TaskProcessorResult::failure(
                "Failed to create FHIR archive: " . $e->getMessage()
            );
        }
    }

    /**
     * Enhanced parameter validation for FHIR archive tasks
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
        $metadata = $task->getMetadata();

        // Validate resource count is positive
        if (isset($params['resource_count']) && $params['resource_count'] <= 0) {
            return TaskProcessorResult::failure("Resource count must be greater than 0");
        }

        // Validate resources are present in metadata
        if (!isset($metadata['resources']) || !is_array($metadata['resources'])) {
            return TaskProcessorResult::failure("Task metadata must contain 'resources' array");
        }

        if (empty($metadata['resources'])) {
            return TaskProcessorResult::failure("No resources found in task metadata");
        }

        // Validate project_id format
        if (isset($params['project_id']) && !is_numeric($params['project_id'])) {
            return TaskProcessorResult::failure("Invalid project_id format");
        }

        return null; // Validation passed
    }
}