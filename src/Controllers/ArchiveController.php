<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\Services\ResourceArchiveService;

/**
 * ArchiveController
 * 
 * REST API controller for FHIR resource archive operations including creation,
 * status checking, and download functionality. Provides HTTP endpoints that map
 * to ResourceArchiveService operations with proper request/response handling.
 * 
 * SUPPORTED OPERATIONS:
 * - Create archives for selected MRNs with filtering options
 * - Create archives for all completed resources in project
 * - Download completed archive files with security validation
 * - Support both immediate and background processing modes
 * 
 * ENDPOINT MAPPING:
 * - GET /archives → listArchives() → ResourceArchiveService::listAllArchives()
 * - POST /archives/selected → archiveSelected() → ResourceArchiveService::createArchiveForMrns()
 * - POST /archives/all → archiveAll() → ResourceArchiveService::createArchiveForAllCompleted()  
 * - GET /archives/{id}/download → downloadArchive() → ResourceArchiveService::downloadArchive()
 * - DELETE /archives/{id} → deleteArchive() → ResourceArchiveService::deleteArchive()
 * 
 * REQUEST/RESPONSE FORMAT:
 * - Accepts JSON payloads for creation endpoints
 * - Returns JSON responses for status/creation operations
 * - Returns file streams for download operations
 * - Includes comprehensive error handling and validation
 * 
 * SECURITY FEATURES:
 * - Parameter validation and sanitization
 * - Archive ID validation before processing
 * - File path security validation via ResourceArchiveService
 * - Proper HTTP status codes for all error conditions
 */
class ArchiveController extends AbstractController
{
    private ResourceArchiveService $archiveService;

    /**
     * Initialize controller with ResourceArchiveService dependency
     * 
     * @param ResourceArchiveService $archiveService Service for archive operations
     */
    public function __construct(
        \Vanderbilt\FhirSnapshot\FhirSnapshot $module,
        ResourceArchiveService $archiveService
    ) {
        parent::__construct($module);
        $this->archiveService = $archiveService;
    }

    /**
     * List all available archives for the project
     * 
     * Handles GET requests to retrieve all available archives from both immediate
     * and background processing storage. Returns a unified list with archive metadata,
     * status information, and download links for completed archives.
     * 
     * @param Response $response HTTP response object
     * @return Response JSON response with archives list
     */
    public function listArchives(Response $response): Response
    {
        try {
            $result = $this->archiveService->listAllArchives();
            return $this->jsonResponse($response, $result, 200);

        } catch (\Exception $e) {
            return $this->jsonResponse($response, [
                'success' => false,
                'message' => 'Failed to retrieve archives: ' . $e->getMessage(),
                'archives' => [],
                'total_count' => 0
            ], 500);
        }
    }

    /**
     * Create archive for selected MRNs with optional filtering
     * 
     * Handles POST requests to create archives containing FHIR resources for
     * specified MRNs. Supports filtering by resource types and custom naming.
     * 
     * Expected request payload:
     * {
     *   "mrns": ["123456", "789012"],
     *   "resource_types": ["Patient Demographics", "Lab Results"], // optional
     *   "archive_name": "custom_archive_name", // optional
     *   "background_mode": true // optional, forces background processing
     * }
     * 
     * @param Request $request HTTP request with MRN list and options
     * @param Response $response HTTP response object
     * @return Response JSON response with archive creation result
     */
    public function archiveSelected(Request $request, Response $response): Response
    {
        try {
            $params = (array) $request->getParsedBody();
            
            // Validate required parameters
            if (empty($params['mrns']) || !is_array($params['mrns'])) {
                return $this->jsonResponse($response, [
                    'success' => false,
                    'message' => 'MRNs array is required',
                    'archive_id' => null
                ], 400);
            }

            // Prepare options for archive service
            $options = [];
            if (!empty($params['resource_types']) && is_array($params['resource_types'])) {
                $options['resource_types'] = $params['resource_types'];
            }
            if (!empty($params['archive_name'])) {
                $options['archive_name'] = trim($params['archive_name']);
            }
            if (!empty($params['background_mode'])) {
                $options['background'] = (bool) $params['background_mode'];
            }

            // Create the archive
            $result = $this->archiveService->createArchiveForMrns($params['mrns'], $options);
            
            $statusCode = $result['success'] ? 200 : 400;
            return $this->jsonResponse($response, $result, $statusCode);

        } catch (\Exception $e) {
            return $this->jsonResponse($response, [
                'success' => false,
                'message' => 'Archive creation failed: ' . $e->getMessage(),
                'archive_id' => null
            ], 500);
        }
    }

    /**
     * Create archive for all completed resources in the project
     * 
     * Handles POST requests to create comprehensive archives containing all
     * completed FHIR resources in the project with optional filtering.
     * 
     * Expected request payload:
     * {
     *   "resource_types": ["Patient Demographics", "Lab Results"], // optional
     *   "archive_name": "complete_project_archive", // optional
     *   "background_mode": true // optional, typically recommended for all-resources archives
     * }
     * 
     * @param Request $request HTTP request with filtering options
     * @param Response $response HTTP response object
     * @return Response JSON response with archive creation result
     */
    public function archiveAll(Request $request, Response $response): Response
    {
        try {
            $params = (array) $request->getParsedBody();

            // Prepare options for archive service
            $options = [];
            if (!empty($params['resource_types']) && is_array($params['resource_types'])) {
                $options['resource_types'] = $params['resource_types'];
            }
            if (!empty($params['archive_name'])) {
                $options['archive_name'] = trim($params['archive_name']);
            }
            if (!empty($params['background_mode'])) {
                $options['background'] = (bool) $params['background_mode'];
            }

            // Create the archive for all completed resources
            $result = $this->archiveService->createArchiveForAllCompleted($options);
            
            $statusCode = $result['success'] ? 200 : 400;
            return $this->jsonResponse($response, $result, $statusCode);

        } catch (\Exception $e) {
            return $this->jsonResponse($response, [
                'success' => false,
                'message' => 'Archive creation failed: ' . $e->getMessage(),
                'archive_id' => null
            ], 500);
        }
    }

    /**
     * Download completed archive file with security validation
     * 
     * Handles GET requests to download archive files. Validates archive ID,
     * checks completion status, and streams the file with appropriate headers.
     * 
     * @param Request $request HTTP request with archive_id in URL path
     * @param Response $response HTTP response object for file streaming
     * @return Response File download response or JSON error response
     */
    public function downloadArchive(Request $request, Response $response, string $archiveId): Response
    {
        try {
            if (empty($archiveId)) {
                return $this->jsonResponse($response, [
                    'success' => false,
                    'message' => 'Archive ID is required'
                ], 400);
            }

            // Get file path from archive service (includes security validation)
            $filePath = $this->archiveService->downloadArchive($archiveId);
            
            if (!$filePath || !file_exists($filePath)) {
                return $this->jsonResponse($response, [
                    'success' => false,
                    'message' => 'Archive not found or not ready for download'
                ], 404);
            }

            // Get archive status for additional metadata
            $status = $this->archiveService->getArchiveStatus($archiveId);
            $fileName = basename($filePath);
            
            // check if there is nother name in the info
            $fileName = ($status && ($info = $status->getArchiveInfo())) ? $info->getFileName() : $fileName;

            // Stream the file with appropriate headers
            return $this->streamFile($response, $filePath, $fileName);

        } catch (\Exception $e) {
            return $this->jsonResponse($response, [
                'success' => false,
                'message' => 'Download failed: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Stream file download with security-validated path
     * 
     * @param Response $response HTTP response object
     * @param string $filePath Validated file path to stream
     * @param string $fileName Display name for downloaded file
     * @return Response File streaming response with appropriate headers
     */
    private function streamFile(Response $response, string $filePath, string $fileName): Response
    {
        $fileSize = filesize($filePath);
        $fileStream = fopen($filePath, 'rb');
        
        if (!$fileStream) {
            throw new \RuntimeException('Unable to open file for reading');
        }

        return $response
            ->withHeader('Content-Type', 'application/zip')
            ->withHeader('Content-Disposition', 'attachment; filename="' . $fileName . '"')
            ->withHeader('Content-Length', (string) $fileSize)
            ->withHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
            ->withBody(new \Slim\Psr7\Stream($fileStream));
    }

    /**
     * Delete archive with security validation
     * 
     * Handles DELETE requests to remove archive files from both storage locations.
     * Validates archive ID, removes physical files, and cleans up metadata.
     * 
     * @param Request $request HTTP request with archive_id in URL path
     * @param Response $response HTTP response object
     * @param string $archiveId Archive identifier from URL path
     * @return Response JSON response with deletion result
     */
    public function deleteArchive(Request $request, Response $response, string $archiveId): Response
    {
        try {
            if (empty($archiveId)) {
                return $this->jsonResponse($response, [
                    'success' => false,
                    'message' => 'Archive ID is required'
                ], 400);
            }

            // Delete the archive via service (includes security validation)
            $result = $this->archiveService->deleteArchive($archiveId);
            
            $statusCode = $result['success'] ? 200 : 400;
            return $this->jsonResponse($response, $result, $statusCode);

        } catch (\Exception $e) {
            return $this->jsonResponse($response, [
                'success' => false,
                'message' => 'Archive deletion failed: ' . $e->getMessage()
            ], 500);
        }
    }
}
