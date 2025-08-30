<?php

namespace Vanderbilt\FhirSnapshot\Services;

use InvalidArgumentException;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;

/**
 * ResourceContentService
 * 
 * Service for retrieving and managing FHIR resource file content from REDCap edocs.
 * Provides secure access to stored FHIR resource JSON files with size validation
 * and content preview capabilities.
 * 
 * CORE RESPONSIBILITIES:
 * - Retrieve FHIR resource content by edoc ID with security validation
 * - Handle large files with configurable size limits and content truncation
 * - Provide file metadata including size, MIME type, and truncation status
 * - Ensure proper project-level security for edoc access
 * - Format content for frontend display with proper encoding
 * 
 * SECURITY FEATURES:
 * - Validates edoc ownership within project context
 * - Ensures user has proper permissions to access resource data
 * - Prevents unauthorized access to files from other projects
 * 
 * SIZE MANAGEMENT:
 * - Default preview limit: 1MB for performance
 * - Configurable truncation with clear user indication
 * - Full file size reporting for user awareness
 * - Memory-efficient handling of large files
 * 
 * USAGE:
 * - Called from MrnController to serve resource content to frontend
 * - Integrated with existing FhirResourceMetadata for edoc ID resolution
 * - Returns structured data suitable for JSON API responses
 */
class ResourceContentService
{
    private const DEFAULT_PREVIEW_LIMIT_BYTES = 1048576; // 1MB
    private const MAX_PREVIEW_LIMIT_BYTES = 10485760; // 10MB
    
    public function __construct(
        private FhirSnapshot $module,
        private RepeatedFormDataAccessor $dataAccessor
    ) {}

    /**
     * Retrieve resource content by record ID, resource name and repeat instance
     * 
     * @param string $recordId The REDCap record ID
     * @param string $resourceName The FHIR resource name
     * @param int $repeatInstance The repeat instance number
     * @param int|null $previewLimitBytes Optional size limit for content preview
     * @return array Content data with metadata
     * @throws InvalidArgumentException If resource not found or access denied
     */
    public function getResourceContent(
        string $recordId, 
        string $resourceName, 
        int $repeatInstance, 
        ?int $previewLimitBytes = null
    ): array {
        $previewLimit = $this->validatePreviewLimit($previewLimitBytes);
        
        // Get resource metadata to obtain edoc ID
        $metadata = $this->dataAccessor->getResourceMetadata($recordId, $resourceName, $repeatInstance);
        
        if (!$metadata || !$metadata->getEdocId()) {
            throw new InvalidArgumentException('Resource file not found or not available');
        }

        return $this->getContentByEdocId($metadata->getEdocId(), $previewLimit);
    }

    /**
     * Retrieve content directly by edoc ID with security validation
     * 
     * @param int $edocId The REDCap edoc ID
     * @param int $previewLimitBytes Size limit for content preview
     * @return array Content data with metadata
     * @throws InvalidArgumentException If file not found or access denied
     */
    public function getContentByEdocId(int $edocId, int $previewLimitBytes = self::DEFAULT_PREVIEW_LIMIT_BYTES): array
    {
        $this->validateEdocAccess($edocId);
        
        // Retrieve file from REDCap edocs system
        $fileInfo = \REDCap::getFile($edocId);
        
        if (!$fileInfo || !isset($fileInfo[2])) {
            throw new InvalidArgumentException('File content could not be retrieved');
        }

        [$fileName, $mimeType, $content] = $fileInfo;
        $fullSize = strlen($content);
        
        // Determine if content needs truncation
        $isTruncated = $fullSize > $previewLimitBytes;
        $previewContent = $isTruncated ? substr($content, 0, $previewLimitBytes) : $content;
        
        // Attempt to decode JSON for validation and pretty formatting
        $decodedContent = null;
        $isValidJson = false;
        
        if ($this->isJsonMimeType($mimeType) || $this->looksLikeJson($previewContent)) {
            $decodedContent = json_decode($previewContent, true);
            $isValidJson = $decodedContent !== null && json_last_error() === JSON_ERROR_NONE;
            
            // Re-encode with pretty printing for display
            if ($isValidJson) {
                $previewContent = json_encode($decodedContent, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
            }
        }

        return [
            'content' => $previewContent,
            'metadata' => [
                'file_name' => $fileName,
                'mime_type' => $mimeType,
                'full_size_bytes' => $fullSize,
                'preview_size_bytes' => strlen($previewContent),
                'is_truncated' => $isTruncated,
                'is_valid_json' => $isValidJson,
                'edoc_id' => $edocId,
                'full_size_human' => $this->formatBytes($fullSize),
                'preview_size_human' => $this->formatBytes(strlen($previewContent))
            ]
        ];
    }


    /**
     * Validate edoc access within project context
     */
    private function validateEdocAccess(int $edocId): void
    {
        // Verify the edoc belongs to this project by checking if it's referenced
        // in any of our resource records across all record IDs
        $allRecordIds = $this->dataAccessor->getAllRecordIds();
        
        $edocFound = false;
        foreach ($allRecordIds as $recordId) {
            $resources = $this->dataAccessor->getAllResourceMetadata($recordId);
            foreach ($resources as $resource) {
                if ($resource->getEdocId() === $edocId) {
                    $edocFound = true;
                    break 2; // Break out of both loops
                }
            }
        }
        
        if (!$edocFound) {
            throw new InvalidArgumentException('Access denied: File does not belong to this project');
        }
    }

    /**
     * Validate and normalize preview limit parameter
     */
    private function validatePreviewLimit(?int $previewLimitBytes): int
    {
        if ($previewLimitBytes === null) {
            return self::DEFAULT_PREVIEW_LIMIT_BYTES;
        }
        
        if ($previewLimitBytes < 1024) { // Minimum 1KB
            return 1024;
        }
        
        if ($previewLimitBytes > self::MAX_PREVIEW_LIMIT_BYTES) {
            return self::MAX_PREVIEW_LIMIT_BYTES;
        }
        
        return $previewLimitBytes;
    }

    /**
     * Check if MIME type indicates JSON content
     */
    private function isJsonMimeType(string $mimeType): bool
    {
        return in_array(strtolower($mimeType), [
            'application/json',
            'application/fhir+json',
            'text/json'
        ]);
    }

    /**
     * Heuristic check if content looks like JSON
     */
    private function looksLikeJson(string $content): bool
    {
        $trimmed = trim($content);
        return (str_starts_with($trimmed, '{') && str_ends_with($trimmed, '}')) ||
               (str_starts_with($trimmed, '[') && str_ends_with($trimmed, ']'));
    }

    /**
     * Format bytes into human readable format
     */
    private function formatBytes(int $bytes, int $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }
}