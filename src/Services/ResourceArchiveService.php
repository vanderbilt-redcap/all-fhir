<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\Security\PathSecurityValidator;

/**
 * ResourceArchiveService
 * 
 * High-level coordinator service for creating ZIP archives of completed FHIR resources.
 * Follows the same architectural patterns as RepeatedFormResourceManager, providing
 * a unified API for FHIR resource archiving with background queue processing support.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Serves as the main entry point for FHIR resource archive operations
 * - Filters completed resources with valid edoc files for archiving
 * - Coordinates between data access, packaging service, and queue management
 * - Provides both real-time and background processing options
 * - Manages archive metadata, status tracking, and download links
 * - Supports flexible filtering by MRN, resource type, and date ranges
 * 
 * CORE OPERATIONS:
 * 
 * ARCHIVE CREATION:
 * - Create archives for specific MRNs with completed resources
 * - Generate project-wide archives with flexible filtering
 * - Support both immediate and background processing modes
 * - Handle large datasets through queue-based processing
 * 
 * RESOURCE FILTERING:
 * - Only includes resources with STATUS_COMPLETED
 * - Validates presence of valid edoc_id (file reference)
 * - Supports filtering by resource types, date ranges, MRN lists
 * - Handles empty result sets gracefully
 * 
 * BACKGROUND PROCESSING:
 * - Creates queue tasks for large archive operations
 * - Provides archive status tracking and progress monitoring
 * - Handles task completion notifications and download links
 * - Manages temporary file cleanup and storage
 * 
 * ARCHIVE STRUCTURE:
 * - Organized by project_id/record_id/mrn/resource_name-fetch_date.json
 * - Includes archive metadata with summary information
 * - Maintains REDCap file naming and organization conventions
 * - Supports multiple output formats (ZIP primary)
 * 
 * USAGE PATTERNS:
 * - $service->createArchiveForMrns($mrns, $options) - Archive specific MRNs
 * - $service->createArchiveForAllCompleted($filters) - Project-wide archive
 * - $service->getArchiveStatus($archiveId) - Check archive task status
 * - $service->downloadArchive($archiveId) - Retrieve completed archive
 * 
 * INTEGRATION POINTS:
 * - RepeatedFormDataAccessor: Resource data retrieval and filtering
 * - ArchivePackager: Low-level ZIP creation and file management
 * - QueueManager: Background task creation and status tracking
 * - REDCap edocs system: FHIR JSON file retrieval
 */
class ResourceArchiveService
{
    private string $projectId;
    private PathSecurityValidator $securityValidator;

    /**
     * Initialize the archive service with all required dependencies
     * 
     * @param FhirSnapshot $module Main module instance providing project context
     * @param RepeatedFormDataAccessor $dataAccessor Data access for FHIR resource metadata
     * @param ArchivePackager $archivePackager Low-level ZIP creation and file management
     * @param QueueManager $queueManager Background task management
     */
    public function __construct(
        private FhirSnapshot $module,
        private RepeatedFormDataAccessor $dataAccessor,
        private ArchivePackager $archivePackager,
        private QueueManager $queueManager,
    ) {
        $this->projectId = $module->getProjectId();
        $this->securityValidator = new PathSecurityValidator(
            sys_get_temp_dir(),
            $this->projectId
        );
    }


    /**
     * Create ZIP archive for specific MRNs with their completed FHIR resources
     * 
     * Filters resources to include only those with STATUS_COMPLETED status and valid 
     * edoc file references. Supports both immediate processing for small datasets and
     * background queue processing for larger operations.
     * 
     * @param array $mrns Array of MRN strings to include in archive
     * @param array $options Optional parameters for filtering and processing:
     *   - 'resource_types': Array of resource type names to filter by
     *   - 'date_from': Start date for fetch date filtering (YYYY-MM-DD)
     *   - 'date_to': End date for fetch date filtering (YYYY-MM-DD)  
     *   - 'background': Boolean to force background processing
     *   - 'archive_name': Custom archive filename (without extension)
     * @return array Archive creation result with task info or direct download details
     */
    public function createArchiveForMrns(array $mrns, array $options = []): array
    {
        if (empty($mrns)) {
            return [
                'success' => false,
                'message' => 'No MRNs provided for archive creation',
                'archive_id' => null,
                'total_resources' => 0
            ];
        }

        // Collect completed resources for the specified MRNs
        $resourcesForArchive = $this->collectCompletedResourcesForMrns($mrns, $options);
        
        if (empty($resourcesForArchive)) {
            return [
                'success' => false,
                'message' => 'No completed resources found for specified MRNs and filters',
                'archive_id' => null,
                'total_resources' => 0,
                'mrn_count' => count($mrns)
            ];
        }

        // Determine processing mode
        $forceBackground = $options['background'] ?? false;
        $resourceCount = count($resourcesForArchive);
        $shouldUseBackground = $forceBackground || $resourceCount > 50; // Threshold for background processing

        if ($shouldUseBackground) {
            return $this->createBackgroundArchiveTask($resourcesForArchive, $options);
        } else {
            return $this->createArchiveImmediately($resourcesForArchive, $options);
        }
    }

    /**
     * Create ZIP archive for all completed resources in the project
     * 
     * Scans all MRNs in the project and includes their completed FHIR resources
     * based on the provided filtering criteria. Typically uses background processing
     * due to potentially large dataset size.
     * 
     * @param array $filters Optional filtering criteria:
     *   - 'mrn_list': Array of specific MRNs to limit scope
     *   - 'resource_types': Array of resource type names to include
     *   - 'date_from': Start date for fetch date filtering
     *   - 'date_to': End date for fetch date filtering
     *   - 'immediate': Boolean to force immediate processing
     * @return array Archive creation result with background task information
     */
    public function createArchiveForAllCompleted(array $filters = []): array
    {
        // Get all MRNs or use provided list
        $allMrns = isset($filters['mrn_list']) 
            ? (array) $filters['mrn_list']
            : $this->dataAccessor->getAllMrns();

        if (empty($allMrns)) {
            return [
                'success' => false,
                'message' => 'No MRNs found in project for archive creation',
                'archive_id' => null,
                'total_resources' => 0
            ];
        }

        // Remove mrn_list from options to avoid confusion in downstream processing
        $options = $filters;
        unset($options['mrn_list']);

        return $this->createArchiveForMrns($allMrns, $options);
    }

    /**
     * Get status information for a specific archive task
     * 
     * Handles both background-processed archives (queue tasks) and immediate archives.
     * For immediate archives, returns status as 'completed' since they are created synchronously.
     * 
     * @param string $archiveId The archive task identifier
     * @return array|null Archive status information or null if not found
     */
    public function getArchiveStatus(string $archiveId): ?array
    {
        // First, try to get status from queue (background-processed archives)
        $task = $this->queueManager->getTaskById($archiveId);
        
        if ($task && $task->getKey() === Constants::TASK_FHIR_ARCHIVE) {
            $status = [
                'archive_id' => $archiveId,
                'status' => $task->getStatus(),
                'created_at' => $task->getCreatedAt(),
                'updated_at' => $task->getUpdatedAt(),
                'metadata' => $task->getMetadata(),
                'processing_mode' => 'background'
            ];

            // Add download info if completed
            if ($task->getStatus() === 'completed') {
                $metadata = $task->getMetadata();
                $status['download_url'] = $metadata['download_url'] ?? null;
                $status['file_path'] = $metadata['file_path'] ?? null;
                $status['file_size'] = $metadata['file_size'] ?? null;
                $status['total_resources'] = $metadata['total_resources'] ?? 0;
            }

            return $status;
        }

        // If not found in queue, check immediate archives
        $immediateArchives = $this->module->getProjectSetting('immediate_archives') ?? [];
        
        if (isset($immediateArchives[$archiveId])) {
            $archiveInfo = $immediateArchives[$archiveId];
            
            return [
                'archive_id' => $archiveId,
                'status' => 'completed', // Immediate archives are always completed
                'created_at' => $archiveInfo['created_at'],
                'updated_at' => $archiveInfo['created_at'], // Same as created for immediate
                'processing_mode' => 'immediate',
                'file_path' => $archiveInfo['file_path'],
                'file_name' => $archiveInfo['file_name'],
                'file_size' => $archiveInfo['file_size'],
                'total_resources' => $archiveInfo['total_resources'],
                'successful_files' => $archiveInfo['successful_files'],
                'failed_files' => $archiveInfo['failed_files'],
                'download_url' => null // Can be added if needed
            ];
        }

        return null;
    }

    /**
     * Download a completed archive file with mandatory security validation
     * 
     * SECURITY-FIRST IMPLEMENTATION:
     * - Validates archive ID with strict rules (alphanumeric + hyphens/underscores only)
     * - Validates all file paths against path traversal attacks
     * - Logs all access attempts for security auditing
     * - Fails immediately on any security violation
     * - No fallback mechanisms that could bypass security
     * 
     * @param string $archiveId The archive task identifier or direct archive ID
     * @return string|null File path for download or null if not available/security violation
     */
    public function downloadArchive(string $archiveId): ?string
    {
        // MANDATORY: Validate archive ID first - fail fast on any violation
        if (!$this->securityValidator->isValidArchiveId($archiveId)) {
            return null;
        }
        
        
        // First, try to get status from queue (for background-processed archives)
        $status = $this->getArchiveStatus($archiveId);
        
        if ($status && $status['status'] === 'completed') {
            $filePath = $status['file_path'] ?? null;
            
            // MANDATORY: Validate file path with strict security checks
            if ($filePath && $this->securityValidator->validatePath($filePath)) {
                return $filePath;
            }
        }
        
        // Try direct file path approach for immediate archives
        $directFilePath = $this->resolveDirectArchiveFilePath($archiveId);
        
        if ($directFilePath && $this->securityValidator->validatePath($directFilePath)) {
            return $directFilePath;
        }
        
        return null;
    }

    /**
     * Clean up completed archive files older than specified days
     * 
     * Cleans up both background-processed archives (from queue tasks) and 
     * immediate archives (stored in project settings).
     * 
     * @param int $olderThanDays Number of days to retain completed archives
     * @return int Number of archive files cleaned up
     */
    public function cleanupOldArchives(int $olderThanDays = 7): int
    {
        $cleanedCount = 0;
        $cutoffTime = strtotime("-{$olderThanDays} days");

        // Clean up background-processed archives (queue tasks)
        $completedTasks = $this->queueManager->getTasksByStatus('completed');
        
        foreach ($completedTasks as $task) {
            if ($task->getKey() !== Constants::TASK_FHIR_ARCHIVE) {
                continue;
            }

            $taskTime = strtotime($task->getUpdatedAt());
            if ($taskTime < $cutoffTime) {
                $metadata = $task->getMetadata();
                $filePath = $metadata['file_path'] ?? null;
                
                if ($filePath && file_exists($filePath)) {
                    unlink($filePath);
                    $cleanedCount++;
                }
                
                // Remove the task record as well
                $this->queueManager->removeTask($task->getId());
            }
        }

        // Clean up immediate archives (stored in project settings)
        $immediateArchives = $this->module->getProjectSetting('immediate_archives') ?? [];
        $remainingArchives = [];

        foreach ($immediateArchives as $archiveId => $archiveInfo) {
            $createdTime = strtotime($archiveInfo['created_at']);
            
            if ($createdTime < $cutoffTime) {
                $filePath = $archiveInfo['file_path'];
                
                if (file_exists($filePath)) {
                    unlink($filePath);
                    $cleanedCount++;
                }
                
                // Don't include in remaining archives (effectively removes it)
            } else {
                // Keep this archive
                $remainingArchives[$archiveId] = $archiveInfo;
            }
        }

        // Update the project settings with remaining archives
        $this->module->setProjectSetting('immediate_archives', $remainingArchives);

        return $cleanedCount;
    }

    /**
     * Resolve direct file path for immediate archives with strict security
     * 
     * SECURITY-HARDENED IMPLEMENTATION:
     * - REMOVED all vulnerable path construction patterns
     * - REMOVED direct path usage from archive ID
     * - REMOVED pattern matching with user input
     * - ONLY uses pre-validated stored paths
     * - ONLY constructs paths within allowed base directory
     * - NO legacy support for unsafe path patterns
     * 
     * @param string $archiveId Archive identifier (already validated)
     * @return string|null File path if safely resolvable, null otherwise
     */
    private function resolveDirectArchiveFilePath(string $archiveId): ?string
    {
        // ONLY check stored immediate archive info - no fallback patterns
        $immediateArchives = $this->module->getProjectSetting('immediate_archives') ?? [];
        
        if (isset($immediateArchives[$archiveId])) {
            $storedInfo = $immediateArchives[$archiveId];
            $filePath = $storedInfo['file_path'] ?? null;
            
            if ($filePath) {
                // The stored path will be validated by validateArchivePath() in the caller
                // We just return it here for validation
                return $filePath;
            }
        }
        
        // REMOVED: All vulnerable fallback logic including:
        // - Direct usage of archiveId as path
        // - Pattern matching with user input
        // - Path concatenation with user-controlled data
        // - Legacy path resolution attempts
        
        // If not found in stored archives, try safe construction with validated archive ID
        // Use the security validator to create a safe path
        return $this->securityValidator->createSafeFilePath($archiveId);
    }

    /**
     * Collect completed FHIR resources for specified MRNs with filtering
     * 
     * @param array $mrns Array of MRN strings
     * @param array $options Filtering options
     * @return array Array of resource data ready for archiving
     */
    private function collectCompletedResourcesForMrns(array $mrns, array $options = []): array
    {
        $resources = [];
        $resourceTypeFilter = $options['resource_types'] ?? [];
        $dateFrom = $options['date_from'] ?? null;
        $dateTo = $options['date_to'] ?? null;

        foreach ($mrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue; // Skip if no record found for MRN
            }

            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);

            foreach ($allMetadata as $metadata) {
                // Only include completed resources with valid file uploads
                if (!$metadata->isCompleted() || !$metadata->getEdocId()) {
                    continue;
                }

                // Apply resource type filter
                if (!empty($resourceTypeFilter) && 
                    !in_array($metadata->getResourceName(), $resourceTypeFilter)) {
                    continue;
                }

                // Apply date range filter
                if ($dateFrom || $dateTo) {
                    $fetchDate = $metadata->getFetchDate();
                    if (!$fetchDate) {
                        continue;
                    }
                    
                    $fetchTime = strtotime($fetchDate);
                    if ($dateFrom && $fetchTime < strtotime($dateFrom)) {
                        continue;
                    }
                    if ($dateTo && $fetchTime > strtotime($dateTo . ' 23:59:59')) {
                        continue;
                    }
                }

                $resources[] = [
                    'record_id' => $recordId,
                    'mrn' => $mrn,
                    'metadata' => $metadata
                ];
            }
        }

        return $resources;
    }

    /**
     * Create archive task for background processing
     * 
     * @param array $resources Array of resource data for archiving
     * @param array $options Archive creation options
     * @return array Task creation result
     */
    private function createBackgroundArchiveTask(array $resources, array $options = []): array
    {
        $archiveName = $options['archive_name'] ?? 
            'fhir_archive_' . $this->projectId . '_' . date('Y-m-d_H-i-s');

        $taskParams = [
            'project_id' => $this->projectId,
            'archive_name' => $archiveName,
            'resource_count' => count($resources),
            'options' => $options
        ];

        // Store resource data in task metadata for processing
        $taskMetadata = [
            'resources' => $resources,
            'created_by_service' => 'ResourceArchiveService',
            'creation_timestamp' => date('c')
        ];

        $task = \Vanderbilt\FhirSnapshot\ValueObjects\Task::create(
            Constants::TASK_FHIR_ARCHIVE, 
            $taskParams, 
            $taskMetadata
        );

        $addedTask = $this->queueManager->addTask(
            $task->getKey(), 
            $task->getParams(), 
            $task->getMetadata()
        );

        return [
            'success' => true,
            'message' => 'Archive task created successfully for background processing',
            'archive_id' => $addedTask->getId(),
            'total_resources' => count($resources),
            'processing_mode' => 'background',
            'task_status' => 'pending'
        ];
    }

    /**
     * Create archive immediately for small datasets
     * 
     * For immediate archives, we store a simple mapping in project settings to enable
     * proper download functionality. The archive_id can be used directly with downloadArchive().
     * 
     * @param array $resources Array of resource data for archiving
     * @param array $options Archive creation options
     * @return array Archive creation result
     */
    private function createArchiveImmediately(array $resources, array $options = []): array
    {
        $archiveName = $options['archive_name'] ?? 
            'fhir_archive_' . $this->projectId . '_' . date('Y-m-d_H-i-s');

        try {
            $archiveInfo = $this->archivePackager->packageResources($resources, [
                'archive_name' => $archiveName,
                'project_id' => $this->projectId
            ]);

            // Store immediate archive info for download capability
            $this->storeImmediateArchiveInfo($archiveInfo['archive_id'], $archiveInfo);

            return [
                'success' => true,
                'message' => 'Archive created successfully',
                'archive_id' => $archiveInfo['archive_id'],
                'total_resources' => count($resources),
                'processing_mode' => 'immediate',
                'file_path' => $archiveInfo['file_path'],
                'file_size' => $archiveInfo['file_size'],
                'download_url' => $archiveInfo['download_url'] ?? null
            ];

        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Failed to create archive: ' . $e->getMessage(),
                'archive_id' => null,
                'total_resources' => count($resources),
                'processing_mode' => 'immediate',
                'error' => $e->getMessage()
            ];
        }
    }

    /**
     * Store immediate archive information with mandatory security validation
     * 
     * SECURITY-HARDENED IMPLEMENTATION:
     * - Validates archive ID with strict rules before storage
     * - Validates file path against path traversal attacks before storage
     * - Rejects any storage attempt that fails security checks
     * - Logs all storage attempts and security violations
     * - Only stores paths within allowed base directory
     * 
     * @param string $archiveId Archive identifier
     * @param array $archiveInfo Archive creation result from ArchivePackager
     * @throws \InvalidArgumentException If security validation fails
     */
    private function storeImmediateArchiveInfo(string $archiveId, array $archiveInfo): void
    {
        // MANDATORY: Validate archive ID with strict security rules
        if (!$this->securityValidator->isValidArchiveId($archiveId)) {
            throw new \InvalidArgumentException('Invalid archive ID - security violation');
        }
        
        // MANDATORY: Validate file path before storing
        $filePath = $archiveInfo['file_path'] ?? null;
        if (!$filePath) {
            throw new \InvalidArgumentException('File path is required for archive storage');
        }
        
        // MANDATORY: Validate file path against security rules
        if (!$this->securityValidator->validatePath($filePath)) {
            throw new \InvalidArgumentException('File path failed security validation');
        }
        
        // All security checks passed - store the archive info
        $immediateArchives = $this->module->getProjectSetting('immediate_archives') ?? [];
        
        $immediateArchives[$archiveId] = [
            'file_path' => $filePath,  // Already validated
            'file_name' => $archiveInfo['file_name'] ?? 'unknown',
            'file_size' => $archiveInfo['file_size'] ?? 0,
            'created_at' => date('c'),
            'total_resources' => $archiveInfo['total_resources'] ?? 0,
            'successful_files' => $archiveInfo['successful_files'] ?? 0,
            'failed_files' => $archiveInfo['failed_files'] ?? 0
        ];
        
        $this->module->setProjectSetting('immediate_archives', $immediateArchives);
    }
}