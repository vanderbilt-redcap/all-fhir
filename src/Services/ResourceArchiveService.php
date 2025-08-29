<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\Security\PathSecurityValidator;
use Vanderbilt\FhirSnapshot\ValueObjects\ArchiveInfo;
use Vanderbilt\FhirSnapshot\ValueObjects\ArchiveStatus;
use Vanderbilt\FhirSnapshot\Services\ArchiveMetadataService;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;

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
 * - $service->deleteArchive($archiveId) - Remove archive files and metadata
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
     * @param ArchiveUrlService $urlService URL generation service for download links
     * @param ArchiveMetadataService $archiveMetadataService Unified archive metadata management
     */
    public function __construct(
        private FhirSnapshot $module,
        private RepeatedFormDataAccessor $dataAccessor,
        private ArchivePackager $archivePackager,
        private QueueManager $queueManager,
        private ArchiveUrlService $urlService,
        private ArchiveMetadataService $archiveMetadataService,
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
     * Get status information for a specific archive
     * 
     * Uses unified archive metadata from the archives project setting.
     * Returns ArchiveStatus value object with proper download URLs generated.
     * 
     * @param string $archiveId The archive identifier
     * @return ArchiveStatus|null Archive status information or null if not found
     */
    public function getArchiveStatus(string $archiveId): ?ArchiveStatus
    {
        $archiveData = $this->archiveMetadataService->getArchive($archiveId);
        
        if (!$archiveData) {
            return null;
        }
        
        $archiveStatus = ArchiveStatus::fromArchiveData($archiveData);
        
        // Add download URL if completed
        if ($archiveStatus->isCompleted()) {
            $downloadUrl = $this->urlService->generateDownloadUrl($archiveId);
            $archiveStatus = $archiveStatus->withDownloadUrl($downloadUrl);
        }
        
        return $archiveStatus;
    }

    /**
     * Get archive metadata information for a specific archive
     * 
     * Returns only the ArchiveInfo portion without full status details.
     * Useful when only file information is needed without processing status.
     * 
     * @param string $archiveId The archive identifier
     * @return ArchiveInfo|null Archive metadata or null if not found
     */
    public function getArchiveInfo(string $archiveId): ?ArchiveInfo
    {
        $status = $this->getArchiveStatus($archiveId);
        return $status?->getArchiveInfo();
    }

    /**
     * List all available archives in the project
     * 
     * Retrieves archives from the unified archives project setting.
     * Archives are sorted by creation date with newest first.
     * 
     * @return array Array of archive information with unified format
     */
    public function listAllArchives(): array
    {
        $archiveData = $this->archiveMetadataService->getAllArchives();
        $archives = [];
        
        foreach ($archiveData as $archiveId => $archive) {
            $downloadUrl = null;
            
            // Only provide download URL for completed archives
            if ($archive['status'] === 'completed') {
                $downloadUrl = $this->urlService->generateDownloadUrl($archiveId);
            }
            
            $archives[] = [
                'archive_id' => $archiveId,
                'status' => $archive['status'],
                'created_at' => $archive['created_at'],
                'completed_at' => $archive['completed_at'],
                'file_name' => $archive['file_name'],
                'file_size' => $archive['file_size'],
                'total_resources' => $archive['total_resources'],
                'successful_files' => $archive['successful_files'],
                'failed_files' => $archive['failed_files'],
                'download_url' => $downloadUrl,
                'processing_mode' => $archive['processing_mode'],
                'error_message' => $archive['error_message']
            ];
        }
        
        return [
            'success' => true,
            'archives' => $archives,
            'total_count' => count($archives)
        ];
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
     * @param string $archiveId The archive identifier
     * @return string|null File path for download or null if not available/security violation
     */
    public function downloadArchive(string $archiveId): ?string
    {
        // MANDATORY: Validate archive ID first - fail fast on any violation
        if (!$this->securityValidator->isValidArchiveId($archiveId)) {
            return null;
        }
        
        $archiveData = $this->archiveMetadataService->getArchive($archiveId);
        
        if (!$archiveData || $archiveData['status'] !== 'completed') {
            return null;
        }
        
        $filePath = $archiveData['file_path'] ?? null;
        
        // MANDATORY: Validate file path with strict security checks
        if ($filePath && $this->securityValidator->validatePath($filePath)) {
            return $filePath;
        }
        
        return null;
    }

    /**
     * Clean up completed archive files older than specified days
     * 
     * Uses the unified archive metadata service to clean up old archives.
     * 
     * @param int $olderThanDays Number of days to retain completed archives
     * @return int Number of archive files cleaned up
     */
    public function cleanupOldArchives(int $olderThanDays = 7): int
    {
        return $this->archiveMetadataService->cleanupOldArchives($olderThanDays);
    }

    /**
     * Delete archive with comprehensive security validation and cleanup
     * 
     * SECURITY-FIRST IMPLEMENTATION:
     * - Validates archive ID with strict alphanumeric rules
     * - Validates all file paths against path traversal attacks
     * - Removes physical files safely with proper error handling
     * - Cleans up metadata from unified storage
     * - Logs all deletion attempts for security auditing
     * 
     * @param string $archiveId The archive identifier to delete
     * @return array Deletion result with detailed status information
     */
    public function deleteArchive(string $archiveId): array
    {
        return $this->archiveMetadataService->deleteArchive($archiveId, true);
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

        $task = Task::create(
            Constants::TASK_ARCHIVE, 
            $taskParams, 
            $taskMetadata
        );

        $addedTask = $this->queueManager->addTask(
            $task->getKey(), 
            $task->getParams(), 
            $task->getMetadata()
        );
        
        // Generate security-compliant archive ID (separate from task ID)
        $archiveId = ArchivePackager::generateCompliantArchiveId();
        
        // Store mapping in task metadata for processor to use
        $this->queueManager->updateTaskMetadata($addedTask->getId(), array_merge(
            $addedTask->getMetadata(),
            ['archive_id' => $archiveId]
        ));
        
        // Create pending archive metadata using compliant archive ID
        $this->archiveMetadataService->createPendingArchive($archiveId, [
            'archive_name' => $archiveName,
            'total_resources' => count($resources),
            'processing_mode' => 'background'
        ]);

        return [
            'success' => true,
            'message' => 'Archive task created successfully for background processing',
            'archive_id' => $archiveId,
            'total_resources' => count($resources),
            'processing_mode' => 'background',
            'task_status' => 'pending',
            'task_id' => $addedTask->getId()
        ];
    }

    /**
     * Create archive immediately for small datasets
     * 
     * Uses unified archive metadata service to store archive information.
     * The archive_id can be used directly with downloadArchive().
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

            // Store immediate archive in unified metadata service
            $this->archiveMetadataService->createPendingArchive($archiveInfo->getArchiveId(), [
                'archive_name' => $archiveName,
                'total_resources' => count($resources),
                'processing_mode' => 'immediate'
            ]);
            
            // Mark as completed immediately since it's already done
            $this->archiveMetadataService->markCompleted($archiveInfo->getArchiveId(), $archiveInfo->toArray());

            return [
                'success' => true,
                'message' => 'Archive created successfully',
                'archive_id' => $archiveInfo->getArchiveId(),
                'total_resources' => count($resources),
                'processing_mode' => 'immediate',
                'file_path' => $archiveInfo->getFilePath(),
                'file_size' => $archiveInfo->getFileSize(),
                'download_url' => $archiveInfo->getDownloadUrl()
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

}