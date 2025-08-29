<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use ZipStream\ZipStream;
use ZipStream\OperationMode;
use ZipStream\CompressionMethod;
use Exception;

/**
 * OnDemandStreamingPackager
 * 
 * On-demand streaming ZIP archive service that creates "made-to-order" archives
 * directly from user requests without any server-side storage. Processes FHIR
 * resources in real-time and streams them directly to the browser as a ZIP file.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Creates streaming ZIP archives from user-specified criteria
 * - Queries database in real-time for requested resources
 * - Streams ZIP content directly without temporary files
 * - Generates metadata on-the-fly during streaming process
 * - Handles large datasets with minimal memory usage
 * - Provides immediate download experience
 * 
 * STREAMING ARCHITECTURE:
 * - Zero server-side storage - no temporary files created
 * - Memory-efficient processing - one resource at a time
 * - Real-time resource collection from database
 * - Direct browser streaming with proper HTTP headers
 * - On-the-fly ZIP compression and delivery
 * 
 * REQUEST-TO-STREAM FLOW:
 * 1. User specifies MRNs and resource types
 * 2. Query database for matching completed resources
 * 3. Initialize streaming ZIP with HTTP headers
 * 4. Stream each FHIR resource file individually
 * 5. Generate and stream metadata file
 * 6. Complete ZIP stream and download
 * 
 * ARCHIVE STRUCTURE (Same as traditional archives):
 * ```
 * project_123/
 * ├── record_1/
 * │   └── MRN001/
 * │       ├── Demographics-2024-01-15_14-30-00.json
 * │       └── Conditions-2024-01-15_14-32-15.json
 * ├── record_2/
 * │   └── MRN002/
 * │       └── Vitals-2024-01-16_09-15-30.json
 * └── archive_metadata.json
 * ```
 * 
 * MEMORY EFFICIENCY:
 * - Only current resource file content in memory at any time
 * - Automatic garbage collection after each resource processed  
 * - No accumulation of ZIP data on server side
 * - Streaming directly to HTTP response eliminates storage needs
 * 
 * CORE OPERATIONS:
 * 
 * ON-DEMAND STREAMING:
 * - Accept user criteria (MRNs + resource types + filters)
 * - Query current database state for matching resources
 * - Stream ZIP headers immediately to start download
 * - Process and stream each resource individually
 * - Generate real-time metadata based on processed resources
 * 
 * ERROR HANDLING:
 * - Graceful handling of missing or corrupted resources
 * - Continue streaming even if some resources fail
 * - Include error summary in streamed metadata file
 * - Proper HTTP status and header management
 * 
 * SECURITY FEATURES:
 * - Same filename sanitization as existing archive services
 * - Proper path validation for folder structures
 * - Resource access validation through existing data layer
 * - No exposure of server file paths
 * 
 * USAGE PATTERNS:
 * - $packager->streamResourcesForMrns($mrns, $resourceTypes, $options)
 * - $packager->streamAllCompletedResources($filters)
 * - Direct integration with ArchiveController endpoints
 * - Real-time processing with immediate user feedback
 * 
 * INTEGRATION POINTS:
 * - RepeatedFormDataAccessor: Real-time resource querying
 * - REDCap edocs system: FHIR file content retrieval
 * - HTTP Response: Direct streaming to browser
 * - ZipStream library: Memory-efficient ZIP generation
 * - Existing security and validation layers
 */
class OnDemandStreamingPackager
{
    /**
     * Initialize on-demand streaming packager
     * 
     * @param FhirSnapshot $fhirSnapshot Module instance for project context
     * @param RepeatedFormDataAccessor $dataAccessor Data access for real-time resource queries
     */
    public function __construct(
        private FhirSnapshot $fhirSnapshot,
        private RepeatedFormDataAccessor $dataAccessor
    ) {
    }

    /**
     * Stream ZIP archive for specific MRNs and resource types on-demand
     * 
     * Creates a real-time streaming ZIP archive containing FHIR resources
     * for the specified MRNs and resource types. Resources are queried from
     * the database in real-time and streamed directly to the browser.
     * 
     * @param array $mrns Array of MRN strings to include
     * @param array $resourceTypes Array of resource type names to include (empty = all types)
     * @param array $options Streaming options:
     *   - 'archive_name': Custom archive filename (without extension)
     *   - 'date_from': Start date for fetch date filtering (YYYY-MM-DD)
     *   - 'date_to': End date for fetch date filtering (YYYY-MM-DD)
     *   - 'include_metadata': Boolean to include archive_metadata.json (default: true)
     * @throws Exception If streaming cannot be initialized or critical error occurs
     */
    public function streamResourcesForMrns(array $mrns, array $resourceTypes = [], array $options = []): void
    {
        if (empty($mrns)) {
            throw new Exception('No MRNs provided for streaming archive');
        }

        // Collect resources in real-time based on current database state
        $resources = $this->collectResourcesForMrns($mrns, $resourceTypes, $options);

        if (empty($resources)) {
            throw new Exception('No completed resources found for specified MRNs and resource types');
        }

        $archiveName = $options['archive_name'] ?? $this->generateDefaultArchiveName($mrns, $resourceTypes);
        
        $this->streamResources($resources, $archiveName, $options);
    }

    /**
     * Stream ZIP archive for all completed resources in project
     * 
     * Creates streaming archive containing all completed FHIR resources
     * in the project, optionally filtered by resource types and date ranges.
     * 
     * @param array $options Filtering and streaming options:
     *   - 'mrn_list': Array of specific MRNs to limit scope (optional)
     *   - 'resource_types': Array of resource type names to include
     *   - 'date_from': Start date for fetch date filtering  
     *   - 'date_to': End date for fetch date filtering
     *   - 'archive_name': Custom archive filename
     *   - 'include_metadata': Include metadata file (default: true)
     * @throws Exception If no resources found or streaming fails
     */
    public function streamAllCompletedResources(array $options = []): void
    {
        // Get all MRNs or use provided list
        $allMrns = isset($options['mrn_list']) && !empty($options['mrn_list'])
            ? (array) $options['mrn_list']
            : $this->dataAccessor->getAllMrns();

        if (empty($allMrns)) {
            throw new Exception('No MRNs found in project for streaming archive');
        }

        $resourceTypes = $options['resource_types'] ?? [];
        $archiveName = $options['archive_name'] ?? $this->generateDefaultArchiveName($allMrns, $resourceTypes, true);

        $this->streamResourcesForMrns($allMrns, $resourceTypes, $options);
    }

    /**
     * Core streaming method that handles ZIP generation and HTTP streaming
     * 
     * @param array $resources Array of resource data ready for streaming
     * @param string $archiveName Base archive filename
     * @param array $options Streaming configuration options
     */
    private function streamResources(array $resources, string $archiveName, array $options = []): void
    {
        $includeMetadata = $options['include_metadata'] ?? true;
        $projectId = $this->fhirSnapshot->getProjectId();

        // Clear any existing output buffers to prevent interference
        while (ob_get_level()) {
            ob_end_clean();
        }

        // Initialize streaming ZIP with proper headers
        $zipFileName = $this->sanitizeFileName($archiveName) . '.zip';
        $zip = new ZipStream(
            operationMode: OperationMode::NORMAL,
            comment: 'On-Demand FHIR Archive - Generated by FHIR Snapshot Module',
            defaultCompressionMethod: CompressionMethod::DEFLATE,
            defaultDeflateLevel: 6,
            enableZip64: true,
            sendHttpHeaders: true,
            outputName: $zipFileName,
            contentDisposition: 'attachment',
            contentType: 'application/zip'
        );

        // Initialize counters for metadata generation
        $totalResources = 0;
        $successfulFiles = 0;
        $failedFiles = 0;
        $errors = [];
        $resourcesByMrn = [];

        try {
            // Stream each resource individually
            foreach ($resources as $resource) {
                $this->addResourceToStream(
                    $zip,
                    $resource,
                    $projectId,
                    $totalResources,
                    $successfulFiles,
                    $failedFiles,
                    $errors,
                    $resourcesByMrn
                );

                // Force memory cleanup between resources
                if (function_exists('gc_collect_cycles')) {
                    gc_collect_cycles();
                }
            }

            // Add real-time generated metadata if requested
            if ($includeMetadata) {
                $this->addOnDemandMetadata(
                    $zip,
                    $archiveName,
                    $totalResources,
                    $successfulFiles,
                    $failedFiles,
                    $resourcesByMrn,
                    $errors,
                    $options
                );
            }

            // Complete the streaming ZIP
            $zip->finish();

        } catch (Exception $e) {
            // Since streaming has started, add error file to ZIP rather than JSON response
            $errorMessage = "Streaming archive generation error: " . $e->getMessage() . "\n";
            $errorMessage .= "Timestamp: " . date('c') . "\n";
            $errorMessage .= "Archive: " . $archiveName . "\n";
            
            $zip->addFile('STREAMING_ERROR.txt', $errorMessage);
            $zip->finish();
        }
    }

    /**
     * Collect FHIR resources for specified MRNs and types in real-time
     * 
     * @param array $mrns Array of MRN strings
     * @param array $resourceTypes Array of resource type names (empty = all types)
     * @param array $options Filtering options (date_from, date_to)
     * @return array Array of resource data ready for streaming
     */
    private function collectResourcesForMrns(array $mrns, array $resourceTypes, array $options): array
    {
        $resources = [];
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

                // Apply resource type filter if specified
                if (!empty($resourceTypes) && 
                    !in_array($metadata->getResourceName(), $resourceTypes)) {
                    continue;
                }

                // Apply date range filter if specified
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
     * Add individual FHIR resource to streaming ZIP
     * 
     * @param ZipStream $zip Active ZIP stream
     * @param array $resource Resource data array
     * @param string $projectId Project identifier
     * @param int $totalResources Total count (by reference)
     * @param int $successfulFiles Success count (by reference)
     * @param int $failedFiles Failure count (by reference)
     * @param array $errors Error messages (by reference)
     * @param array $resourcesByMrn Resources grouped by MRN (by reference)
     */
    private function addResourceToStream(
        ZipStream $zip,
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

        // Retrieve FHIR file content from REDCap
        $fileInfo = $this->retrieveFhirFileContent($edocId);
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

        try {
            // Stream file content directly into ZIP
            $zip->addFile($archivePath, $fileInfo['content']);
            
            $successfulFiles++;
            $totalResources++;
            
            // Track resources by MRN for metadata
            if (!isset($resourcesByMrn[$mrn])) {
                $resourcesByMrn[$mrn] = [];
            }
            $resourcesByMrn[$mrn][] = [
                'resource_name' => $metadata->getResourceName(),
                'file_name' => $fileName,
                'file_size' => $fileInfo['file_size'],
                'fetch_date' => $metadata->getFetchDate()
            ];

        } catch (Exception $e) {
            $errors[] = "Failed to add {$fileName} to streaming archive: " . $e->getMessage();
            $failedFiles++;
            $totalResources++;
        }
    }

    /**
     * Add comprehensive metadata file to streaming archive
     * 
     * @param ZipStream $zip Active ZIP stream
     * @param string $archiveName Original archive name requested
     * @param int $totalResources Total resources processed
     * @param int $successfulFiles Successful file count
     * @param int $failedFiles Failed file count  
     * @param array $resourcesByMrn Resources organized by MRN
     * @param array $errors Error messages from processing
     * @param array $options Original streaming options
     */
    private function addOnDemandMetadata(
        ZipStream $zip,
        string $archiveName,
        int $totalResources,
        int $successfulFiles,
        int $failedFiles,
        array $resourcesByMrn,
        array $errors,
        array $options
    ): void
    {
        $processingStats = [
            'total_resources' => $totalResources,
            'successful_files' => $successfulFiles,
            'failed_files' => $failedFiles,
            'processing_errors' => $errors,
            'resources_by_mrn' => $resourcesByMrn
        ];

        $metadata = [
            'archive_info' => [
                'created_at' => date('c'),
                'created_by' => 'FHIR Snapshot Module - OnDemandStreamingPackager',
                'project_id' => $this->fhirSnapshot->getProjectId(),
                'archive_name' => $archiveName,
                'total_resources' => $totalResources,
                'on_demand_streaming' => true,
                'no_server_storage' => true,
                'version' => '1.0'
            ],
            'processing_stats' => $processingStats,
            'streaming_info' => [
                'generated_on_the_fly' => true,
                'real_time_database_query' => true,
                'memory_efficient_processing' => true,
                'zero_temporary_files' => true
            ],
            'folder_structure' => [
                'description' => 'Files organized as: project_id/record_id/mrn/resource_name-fetch_date.json',
                'total_mrns' => count($resourcesByMrn),
                'mrn_list' => array_keys($resourcesByMrn)
            ],
            'request_details' => [
                'requested_resource_types' => $options['resource_types'] ?? 'all',
                'date_filter_from' => $options['date_from'] ?? null,
                'date_filter_to' => $options['date_to'] ?? null,
                'custom_archive_name' => !empty($options['archive_name'])
            ],
            'file_details' => $resourcesByMrn
        ];

        $metadataJson = json_encode($metadata, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        $zip->addFile('archive_metadata.json', $metadataJson);
    }

    /**
     * Retrieve FHIR file content from REDCap edocs
     * 
     * @param int $edocId REDCap edoc identifier
     * @return array|null File information or null if not accessible
     */
    private function retrieveFhirFileContent(int $edocId): ?array
    {
        try {
            $fileInfo = \REDCap::getFile($edocId);
            
            if (!$fileInfo || count($fileInfo) < 3) {
                return null;
            }

            return [
                'file_name' => $fileInfo[0] ?? 'unknown.json',
                'mime_type' => $fileInfo[1] ?? 'application/json',
                'content' => $fileInfo[2] ?? '',
                'file_size' => strlen($fileInfo[2] ?? '')
            ];

        } catch (Exception $e) {
            error_log("Failed to retrieve edoc file {$edocId} for streaming: " . $e->getMessage());
            return null;
        }
    }

    /**
     * Generate resource filename from metadata
     * 
     * @param FhirResourceMetadata $metadata Resource metadata
     * @return string Safe filename
     */
    private function generateResourceFileName(FhirResourceMetadata $metadata): string
    {
        $resourceName = $this->sanitizeFileName($metadata->getResourceName());
        $fetchDate = $metadata->getFetchDate();
        
        if ($fetchDate) {
            $formattedDate = date('Y-m-d_H-i-s', strtotime($fetchDate));
            return "{$resourceName}-{$formattedDate}.json";
        } else {
            $instance = $metadata->getRepeatInstance();
            return "{$resourceName}-instance_{$instance}.json";
        }
    }

    /**
     * Create folder path within archive
     * 
     * @param string $projectId Project identifier
     * @param string $recordId Record identifier
     * @param string $mrn Medical Record Number
     * @return string Folder path
     */
    private function createFolderPath(string $projectId, string $recordId, string $mrn): string
    {
        $safeProjectId = $this->sanitizeFileName($projectId);
        $safeRecordId = $this->sanitizeFileName($recordId);
        $safeMrn = $this->sanitizeFileName($mrn);
        
        return "{$safeProjectId}/{$safeRecordId}/{$safeMrn}/";
    }

    /**
     * Generate default archive name based on request parameters
     * 
     * @param array $mrns List of MRNs
     * @param array $resourceTypes List of resource types
     * @param bool $allProject Whether this is project-wide archive
     * @return string Default archive name
     */
    private function generateDefaultArchiveName(array $mrns, array $resourceTypes, bool $allProject = false): string
    {
        $projectId = $this->fhirSnapshot->getProjectId();
        $timestamp = date('Y-m-d_H-i-s');
        
        if ($allProject) {
            $scope = 'all_project_resources';
        } else if (count($mrns) <= 3) {
            $scope = 'mrns_' . implode('_', array_slice($mrns, 0, 3));
        } else {
            $scope = count($mrns) . '_mrns';
        }
        
        if (!empty($resourceTypes) && count($resourceTypes) <= 3) {
            $typeScope = implode('_', array_map([$this, 'sanitizeFileName'], $resourceTypes));
            return "fhir_stream_{$scope}_{$typeScope}_{$projectId}_{$timestamp}";
        }
        
        return "fhir_stream_{$scope}_{$projectId}_{$timestamp}";
    }

    /**
     * Sanitize filename for filesystem compatibility
     * 
     * @param string $fileName Original filename
     * @return string Sanitized filename
     */
    private function sanitizeFileName(string $fileName): string
    {
        // Replace path separators and problematic characters with underscores
        $sanitized = preg_replace('/[^a-zA-Z0-9\-_]/', '_', $fileName);
        // Remove multiple consecutive underscores
        $sanitized = preg_replace('/_+/', '_', $sanitized);
        // Trim underscores from start/end
        return trim($sanitized, '_');
    }

    /**
     * Check if on-demand streaming is supported in current environment
     * 
     * @return bool True if streaming is supported
     */
    public static function isStreamingSupported(): bool
    {
        // Check ZipStream availability
        if (!class_exists('\ZipStream\ZipStream')) {
            return false;
        }

        // Check output buffer control
        if (!function_exists('ob_get_level') || !function_exists('ob_end_clean')) {
            return false;
        }

        // Check if not in CLI mode
        if (php_sapi_name() === 'cli') {
            return false;
        }

        return true;
    }
}