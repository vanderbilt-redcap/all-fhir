<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Services\ArchiveUrlService;
use Vanderbilt\AllFhir\ValueObjects\FhirResourceMetadata;
use Vanderbilt\AllFhir\ValueObjects\ArchiveInfo;
use ZipArchive;
use Exception;


/**
 * ArchivePackager
 * 
 * Utility class for low-level ZIP archive creation and file management for FHIR resources.
 * Handles the technical aspects of packaging completed FHIR JSON files into organized
 * ZIP archives with proper folder structure and metadata.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Creates ZIP archives with structured folder hierarchy
 * - Retrieves FHIR JSON files from REDCap edocs system
 * - Manages temporary file creation and cleanup
 * - Generates archive metadata and summary information
 * - Handles file naming conventions and path generation
 * - Provides error handling for file system operations
 * 
 * ARCHIVE STRUCTURE:
 * Creates organized directory structure within ZIP files:
 * ```
 * project_123/
 * ├── record_1/
 * │   └── MRN001/
 * │       ├── Patient_Demographics-2024-01-15_14-30-00.json
 * │       └── Vital_Signs-2024-01-15_14-32-15.json
 * ├── record_2/
 * │   └── MRN002/
 * │       └── Lab_Results-2024-01-16_09-15-30.json
 * └── archive_metadata.json
 * ```
 * 
 * FILE NAMING CONVENTIONS:
 * - FHIR files: {resource_name}-{fetch_date_formatted}.json
 * - Folder structure: {project_id}/{record_id}/{mrn}/
 * - Archive metadata: archive_metadata.json (at root level)
 * - Date format: YYYY-MM-DD_HH-MM-SS (filesystem safe)
 * 
 * CORE OPERATIONS:
 * 
 * RESOURCE PACKAGING:
 * - Accepts array of resource data with metadata
 * - Creates temporary directory structure for organization
 * - Retrieves FHIR JSON content from REDCap edocs
 * - Assembles files into ZIP archive with proper paths
 * 
 * FILE MANAGEMENT:
 * - Handles temporary file creation and cleanup
 * - Manages ZIP archive creation and compression
 * - Provides file size calculation and statistics
 * - Ensures proper file permissions and access
 * 
 * METADATA GENERATION:
 * - Creates comprehensive archive summary information
 * - Includes resource counts, file sizes, and timestamps
 * - Documents folder structure and file organization
 * - Provides processing statistics and validation data
 * 
 * ERROR HANDLING:
 * - Validates edoc file accessibility before packaging
 * - Handles ZIP creation failures gracefully
 * - Provides detailed error messages for troubleshooting
 * - Ensures cleanup of partial files on failure
 * 
 * USAGE PATTERNS:
 * - $packager->packageResources($resources, $options) - Create ZIP archive
 * - $packager->retrieveFhirFile($edocId) - Get individual FHIR file
 * - $packager->cleanupTempFiles($paths) - Clean temporary files
 * - $packager->generateArchiveMetadata($resources) - Create metadata
 * 
 * INTEGRATION POINTS:
 * - REDCap edocs system: File retrieval through REDCap::getFile()
 * - File system: ZIP creation and temporary file management
 * - FhirResourceMetadata: Resource information and file references
 * - AllFhir module: URL building for download links
 * - Archive storage: Organized file structure and metadata
 */
class ArchivePackager
{
    private string $tempDir;
    private array $createdFiles = [];

    /**
     * Initialize the archive packager with dependencies
     * 
     * @param AllFhir $module module instance for project context
     * @param ArchiveUrlService $urlService URL generation service for download links
     */
    public function __construct(
        private AllFhir $module,
        private ArchiveUrlService $urlService
    ) {
        $this->tempDir = sys_get_temp_dir();
    }

    /**
     * Package FHIR resources into a ZIP archive with organized folder structure
     * 
     * Creates a ZIP file containing all provided FHIR resources organized in a
     * hierarchical folder structure by project/record/MRN. Includes metadata
     * summary and handles file naming conventions.
     * 
     * @param array $resources Array of resource data with structure:
     *   [
     *     [
     *       'record_id' => string,
     *       'mrn' => string, 
     *       'metadata' => FhirResourceMetadata
     *     ],
     *     ...
     *   ]
     * @param array $options Packaging options:
     *   - 'archive_name': Custom archive filename (without extension)
     *   - 'project_id': Project identifier for folder structure
     *   - 'include_metadata': Boolean to include archive_metadata.json
     *   - 'temp_dir': Custom temporary directory path
     * @return ArchiveInfo Archive information with file path, size, and metadata
     * @throws Exception If ZIP creation fails or resources are invalid
     */
    public function packageResources(array $resources, array $options = []): ArchiveInfo
    {
        if (empty($resources)) {
            throw new Exception('No resources provided for packaging');
        }

        $archiveName = $options['archive_name'] ?? ('fhir_archive_' . uniqid());
        $projectId = $options['project_id'] ?? 'unknown_project';
        $includeMetadata = $options['include_metadata'] ?? true;
        $tempDir = $options['temp_dir'] ?? $this->tempDir;

        // Generate unique archive ID that complies with PathSecurityValidator rules
        $archiveId = self::generateCompliantArchiveId();
        $zipFileName = $archiveName . '.zip';
        $zipFilePath = $tempDir . DIRECTORY_SEPARATOR . $zipFileName;

        $zip = new ZipArchive();
        $zipResult = $zip->open($zipFilePath, ZipArchive::CREATE | ZipArchive::OVERWRITE);

        if ($zipResult !== TRUE) {
            throw new Exception("Cannot create ZIP archive: " . $this->getZipError($zipResult));
        }

        // Initialize counters for archive statistics
        $totalResources = 0;
        $successfulFiles = 0;
        $failedFiles = 0;
        $errors = [];
        $resourcesByMrn = [];

        try {
            // Process each resource and add to ZIP
            foreach ($resources as $resource) {
                $this->addResourceToZip(
                    $zip, 
                    $resource, 
                    $projectId, 
                    $totalResources, 
                    $successfulFiles, 
                    $failedFiles, 
                    $errors, 
                    $resourcesByMrn
                );
            }

            // Add archive metadata if requested
            if ($includeMetadata) {
                $this->addArchiveMetadata($zip, $resources, $totalResources, $successfulFiles, $failedFiles, $resourcesByMrn, $options);
            }

            $zip->close();

            // Get final file size and generate download URL
            $fileSize = file_exists($zipFilePath) ? filesize($zipFilePath) : 0;
            $downloadUrl = $this->urlService->generateDownloadUrl($archiveId);

            // Create ArchiveInfo object directly
            return new ArchiveInfo(
                archiveId: $archiveId,
                filePath: $zipFilePath,
                fileName: $zipFileName,
                fileSize: $fileSize,
                totalResources: $totalResources,
                successfulFiles: $successfulFiles,
                failedFiles: $failedFiles,
                downloadUrl: $downloadUrl,
                createdAt: date('c'),
                errors: $errors
            );

        } catch (Exception $e) {
            $zip->close();
            // Cleanup partial file on failure
            if (file_exists($zipFilePath)) {
                unlink($zipFilePath);
            }
            throw new Exception("Failed to create archive: " . $e->getMessage());
        }
    }

    /**
     * Retrieve FHIR JSON file content from REDCap edocs system
     * 
     * @param int $edocId REDCap edoc file identifier
     * @return array|null File information array or null if not accessible
     */
    public function retrieveFhirFile(int $edocId): ?array
    {
        try {
            $fileInfo = \REDCap::getFile($edocId);
            
            if (!$fileInfo || count($fileInfo) < 3) {
                return null;
            }

            // REDCap::getFile returns array: [file_name, mime_type, content, ...]
            return [
                'file_name' => $fileInfo[0] ?? 'unknown.json',
                'mime_type' => $fileInfo[1] ?? 'application/json',
                'content' => $fileInfo[2] ?? '',
                'file_size' => strlen($fileInfo[2] ?? '')
            ];

        } catch (Exception $e) {
            // Log error but don't throw - allow processing to continue
            error_log("Failed to retrieve edoc file {$edocId}: " . $e->getMessage());
            return null;
        }
    }

    /**
     * Generate safe filename from resource metadata
     * 
     * @param FhirResourceMetadata $metadata Resource metadata object
     * @return string Safe filename for file system
     */
    public function generateResourceFileName(FhirResourceMetadata $metadata): string
    {
        $resourceName = $this->sanitizeFileName($metadata->getResourceName());
        $fetchDate = $metadata->getFetchDate();
        
        if ($fetchDate) {
            // Convert fetch date to filesystem-safe format
            $formattedDate = date('Y-m-d_H-i-s', strtotime($fetchDate));
            return "{$resourceName}-{$formattedDate}.json";
        } else {
            // Fallback if no fetch date available
            $instance = $metadata->getRepeatInstance();
            return "{$resourceName}-instance_{$instance}.json";
        }
    }

    /**
     * Create folder structure path for resource within archive
     * 
     * @param string $projectId Project identifier
     * @param string $recordId REDCap record identifier  
     * @param string $mrn Medical Record Number
     * @return string Folder path within archive
     */
    public function createFolderPath(string $projectId, string $recordId, string $mrn): string
    {
        $safeProjectId = $this->sanitizeFileName($projectId);
        $safeRecordId = $this->sanitizeFileName($recordId);
        $safeMrn = $this->sanitizeFileName($mrn);
        
        return "{$safeProjectId}/{$safeRecordId}/{$safeMrn}/";
    }

    /**
     * Clean up temporary files and directories
     * 
     * @param array $filePaths Array of file paths to clean up
     * @return int Number of files successfully cleaned up
     */
    public function cleanupTempFiles(array $filePaths): int
    {
        $cleanedCount = 0;
        
        foreach ($filePaths as $filePath) {
            if (file_exists($filePath) && is_writable($filePath)) {
                if (unlink($filePath)) {
                    $cleanedCount++;
                }
            }
        }
        
        return $cleanedCount;
    }

    /**
     * Add individual resource to ZIP archive
     * 
     * @param ZipArchive $zip ZIP archive object
     * @param array $resource Resource data array
     * @param string $projectId Project identifier
     * @param int $totalResources Total resource count (passed by reference)
     * @param int $successfulFiles Successful file count (passed by reference)  
     * @param int $failedFiles Failed file count (passed by reference)
     * @param array $errors Error messages array (passed by reference)
     * @param array $resourcesByMrn Resources grouped by MRN (passed by reference)
     */
    private function addResourceToZip(
        ZipArchive $zip, 
        array $resource, 
        string $projectId, 
        int &$totalResources,
        int &$successfulFiles,
        int &$failedFiles,
        array &$errors,
        array &$resourcesByMrn
    ): void
    {
        $recordId = $resource['record_id'];
        $mrn = $resource['mrn'];
        $metadata = $resource['metadata'];

        // Handle serialized metadata - convert array back to object if needed
        if (is_array($metadata)) {
            try {
                $metadata = FhirResourceMetadata::fromArray($metadata);
            } catch (\InvalidArgumentException $e) {
                $errors[] = "Invalid metadata structure for record {$recordId}: " . $e->getMessage();
                $failedFiles++;
                $totalResources++;
                return;
            }
        }

        if (!$metadata instanceof FhirResourceMetadata) {
            $errors[] = "Invalid metadata for record {$recordId}";
            $failedFiles++;
            $totalResources++;
            return;
        }

        $edocId = $metadata->getEdocId();
        if (!$edocId) {
            $errors[] = "No file reference for {$metadata->getResourceName()} in record {$recordId}";
            $failedFiles++;
            $totalResources++;
            return;
        }

        // Retrieve FHIR file content
        $fileInfo = $this->retrieveFhirFile($edocId);
        if (!$fileInfo) {
            $errors[] = "Failed to retrieve file for edoc {$edocId} in record {$recordId}";
            $failedFiles++;
            $totalResources++;
            return;
        }

        // Generate file path within archive
        $folderPath = $this->createFolderPath($projectId, $recordId, $mrn);
        $fileName = $this->generateResourceFileName($metadata);
        $archivePath = $folderPath . $fileName;

        // Add file to ZIP
        if ($zip->addFromString($archivePath, $fileInfo['content'])) {
            $successfulFiles++;
            $totalResources++;
            
            // Track resources by MRN
            if (!isset($resourcesByMrn[$mrn])) {
                $resourcesByMrn[$mrn] = [];
            }
            $resourcesByMrn[$mrn][] = [
                'resource_name' => $metadata->getResourceName(),
                'file_name' => $fileName,
                'file_size' => $fileInfo['file_size'],
                'fetch_date' => $metadata->getFetchDate()
            ];
        } else {
            $errors[] = "Failed to add {$fileName} to archive";
            $failedFiles++;
            $totalResources++;
        }
    }

    /**
     * Add comprehensive metadata file to archive
     * 
     * @param ZipArchive $zip ZIP archive object
     * @param array $resources Original resource data
     * @param int $totalResources Total resource count
     * @param int $successfulFiles Successful file count
     * @param int $failedFiles Failed file count
     * @param array $resourcesByMrn Resources grouped by MRN
     * @param array $options Packaging options
     */
    private function addArchiveMetadata(
        ZipArchive $zip, 
        array $resources, 
        int $totalResources,
        int $successfulFiles,
        int $failedFiles,
        array $resourcesByMrn,
        array $options
    ): void
    {
        $processingStats = [
            'total_resources' => $totalResources,
            'successful_files' => $successfulFiles,
            'failed_files' => $failedFiles,
            'resources_by_mrn' => $resourcesByMrn
        ];

        $metadata = [
            'archive_info' => [
                'created_at' => date('c'),
                'created_by' => 'Module - ArchivePackager',
                'project_id' => $options['project_id'] ?? 'unknown',
                'archive_name' => $options['archive_name'] ?? 'fhir_archive',
                'total_resources' => count($resources),
                'version' => '1.0'
            ],
            'processing_stats' => $processingStats,
            'folder_structure' => [
                'description' => 'Files are organized as: project_id/record_id/mrn/resource_name-fetch_date.json',
                'total_mrns' => count($resourcesByMrn),
                'mrn_list' => array_keys($resourcesByMrn)
            ],
            'file_details' => $resourcesByMrn
        ];

        $metadataJson = json_encode($metadata, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        $zip->addFromString('archive_metadata.json', $metadataJson);
    }

    /**
     * Sanitize filename for file system compatibility
     * 
     * @param string $fileName Original filename
     * @return string Sanitized filename
     */
    private function sanitizeFileName(string $fileName): string
    {
        // Replace or remove characters that are problematic for file systems
        $sanitized = preg_replace('/[^a-zA-Z0-9\-_\.]/', '_', $fileName);
        // Remove multiple consecutive underscores
        $sanitized = preg_replace('/_+/', '_', $sanitized);
        // Trim underscores from start/end
        return trim($sanitized, '_');
    }


    /**
     * Get human-readable error message for ZIP creation errors
     * 
     * @param int $zipError ZIP error code
     * @return string Error description
     */
    private function getZipError(int $zipError): string
    {
        $errors = [
            ZipArchive::ER_OK => 'No error',
            ZipArchive::ER_MULTIDISK => 'Multi-disk zip archives not supported',
            ZipArchive::ER_RENAME => 'Renaming temporary file failed',
            ZipArchive::ER_CLOSE => 'Closing zip archive failed',
            ZipArchive::ER_SEEK => 'Seek error',
            ZipArchive::ER_READ => 'Read error',
            ZipArchive::ER_WRITE => 'Write error',
            ZipArchive::ER_CRC => 'CRC error',
            ZipArchive::ER_ZIPCLOSED => 'Containing zip archive was closed',
            ZipArchive::ER_NOENT => 'No such file',
            ZipArchive::ER_EXISTS => 'File already exists',
            ZipArchive::ER_OPEN => 'Can not open file',
            ZipArchive::ER_TMPOPEN => 'Failure to create temporary file',
            ZipArchive::ER_ZLIB => 'Zlib error',
            ZipArchive::ER_MEMORY => 'Memory allocation failure',
            ZipArchive::ER_CHANGED => 'Entry has been changed',
            ZipArchive::ER_COMPNOTSUPP => 'Compression method not supported',
            ZipArchive::ER_EOF => 'Premature EOF',
            ZipArchive::ER_INVAL => 'Invalid argument',
            ZipArchive::ER_NOZIP => 'Not a zip archive',
            ZipArchive::ER_INTERNAL => 'Internal error',
            ZipArchive::ER_INCONS => 'Zip archive inconsistent',
            ZipArchive::ER_REMOVE => 'Can not remove file',
            ZipArchive::ER_DELETED => 'Entry has been deleted'
        ];

        return $errors[$zipError] ?? "Unknown error ({$zipError})";
    }
    
    /**
     * Generate security-compliant archive ID
     * 
     * Uses timestamp + random bytes to avoid dots from uniqid(..., true)
     * and comply with PathSecurityValidator rules: [a-zA-Z0-9_-]+
     * 
     * @return string Compliant archive ID
     */
    public static function generateCompliantArchiveId(): string
    {
        return 'archive_' . date('YmdHis') . '_' . bin2hex(random_bytes(8));
    }
}