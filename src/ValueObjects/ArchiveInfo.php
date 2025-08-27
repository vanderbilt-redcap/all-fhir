<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use JsonSerializable;

/**
 * ArchiveInfo
 * 
 * Immutable value object representing archive file information and metadata.
 * Replaces hardcoded array structures for type safety and better maintainability.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Encapsulates all essential information about a created archive
 * - Provides type-safe access to archive properties
 * - Supports serialization for API responses and storage
 * - Factory methods for creating from different data sources
 * - Immutable design prevents accidental modifications
 * 
 * KEY PROPERTIES:
 * - archiveId: Unique identifier for the archive
 * - filePath: Absolute file system path to the archive file
 * - fileName: Display name for download (with extension)
 * - fileSize: Size of the archive file in bytes
 * - totalResources: Number of FHIR resources included
 * - successfulFiles: Count of successfully packaged files
 * - failedFiles: Count of files that failed to package
 * - downloadUrl: Complete URL for downloading the archive
 * - createdAt: ISO 8601 timestamp of archive creation
 * 
 * FACTORY METHODS:
 * - fromPackagerResult(): Creates from ArchivePackager output
 * - fromStoredData(): Creates from stored project settings
 * - fromTaskMetadata(): Creates from background task metadata
 * 
 * USAGE PATTERNS:
 * - Type-safe property access via getters
 * - Serialization support for API responses
 * - Backward compatibility via toArray() method
 * - Immutable design with validation
 */
class ArchiveInfo implements JsonSerializable
{
    /**
     * Create new ArchiveInfo instance with validation
     * 
     * @param string $archiveId Unique archive identifier
     * @param string $filePath Absolute path to archive file
     * @param string $fileName Display filename for download
     * @param int $fileSize Size in bytes
     * @param int $totalResources Number of FHIR resources
     * @param int $successfulFiles Count of successful file inclusions
     * @param int $failedFiles Count of failed file inclusions
     * @param string|null $downloadUrl Complete download URL
     * @param string|null $createdAt ISO 8601 creation timestamp
     */
    public function __construct(
        private string $archiveId,
        private string $filePath,
        private string $fileName,
        private int $fileSize,
        private int $totalResources,
        private int $successfulFiles,
        private int $failedFiles,
        private ?string $downloadUrl = null,
        private ?string $createdAt = null
    ) {
        // Validation
        if (empty($archiveId)) {
            throw new \InvalidArgumentException('Archive ID cannot be empty');
        }
        if (empty($filePath)) {
            throw new \InvalidArgumentException('File path cannot be empty');
        }
        if ($fileSize < 0) {
            throw new \InvalidArgumentException('File size cannot be negative');
        }
        if ($totalResources < 0) {
            throw new \InvalidArgumentException('Total resources cannot be negative');
        }
        if ($successfulFiles < 0) {
            throw new \InvalidArgumentException('Successful files count cannot be negative');
        }
        if ($failedFiles < 0) {
            throw new \InvalidArgumentException('Failed files count cannot be negative');
        }
        
        // Set default created timestamp if not provided
        if ($this->createdAt === null) {
            $this->createdAt = date('c');
        }
    }

    /**
     * Factory method to create from ArchivePackager result array
     * 
     * @param array $packagerResult Result array from ArchivePackager::packageResources()
     * @return self New ArchiveInfo instance
     */
    public static function fromPackagerResult(array $packagerResult): self
    {
        return new self(
            archiveId: $packagerResult['archive_id'] ?? '',
            filePath: $packagerResult['file_path'] ?? '',
            fileName: $packagerResult['file_name'] ?? 'unknown.zip',
            fileSize: $packagerResult['file_size'] ?? 0,
            totalResources: $packagerResult['total_resources'] ?? 0,
            successfulFiles: $packagerResult['successful_files'] ?? 0,
            failedFiles: $packagerResult['failed_files'] ?? 0,
            downloadUrl: $packagerResult['download_url'] ?? null,
            createdAt: $packagerResult['created_at'] ?? null
        );
    }

    /**
     * Factory method to create from stored project settings data
     * 
     * @param string $archiveId Archive identifier
     * @param array $storedData Data from immediate_archives project setting
     * @return self New ArchiveInfo instance
     */
    public static function fromStoredData(string $archiveId, array $storedData): self
    {
        return new self(
            archiveId: $archiveId,
            filePath: $storedData['file_path'] ?? '',
            fileName: $storedData['file_name'] ?? 'unknown.zip',
            fileSize: $storedData['file_size'] ?? 0,
            totalResources: $storedData['total_resources'] ?? 0,
            successfulFiles: $storedData['successful_files'] ?? 0,
            failedFiles: $storedData['failed_files'] ?? 0,
            downloadUrl: null, // Will be set externally using withDownloadUrl()
            createdAt: $storedData['created_at'] ?? null
        );
    }

    /**
     * Factory method to create from background task metadata
     * 
     * @param string $archiveId Archive identifier
     * @param array $metadata Task metadata array
     * @return self New ArchiveInfo instance
     */
    public static function fromTaskMetadata(string $archiveId, array $metadata): self
    {
        return new self(
            archiveId: $archiveId,
            filePath: $metadata['file_path'] ?? '',
            fileName: $metadata['file_name'] ?? 'unknown.zip',
            fileSize: $metadata['file_size'] ?? 0,
            totalResources: $metadata['total_resources'] ?? 0,
            successfulFiles: $metadata['successful_files'] ?? 0,
            failedFiles: $metadata['failed_files'] ?? 0,
            downloadUrl: $metadata['download_url'] ?? null,
            createdAt: $metadata['created_at'] ?? null
        );
    }

    /**
     * Create new instance with download URL (immutable update)
     * 
     * @param string $downloadUrl Complete download URL
     * @return self New instance with updated download URL
     */
    public function withDownloadUrl(string $downloadUrl): self
    {
        return new self(
            $this->archiveId,
            $this->filePath,
            $this->fileName,
            $this->fileSize,
            $this->totalResources,
            $this->successfulFiles,
            $this->failedFiles,
            $downloadUrl,
            $this->createdAt
        );
    }

    // Getters
    public function getArchiveId(): string
    {
        return $this->archiveId;
    }

    public function getFilePath(): string
    {
        return $this->filePath;
    }

    public function getFileName(): string
    {
        return $this->fileName;
    }

    public function getFileSize(): int
    {
        return $this->fileSize;
    }

    public function getTotalResources(): int
    {
        return $this->totalResources;
    }

    public function getSuccessfulFiles(): int
    {
        return $this->successfulFiles;
    }

    public function getFailedFiles(): int
    {
        return $this->failedFiles;
    }

    public function getDownloadUrl(): ?string
    {
        return $this->downloadUrl;
    }

    public function getCreatedAt(): ?string
    {
        return $this->createdAt;
    }

    /**
     * Check if archive has any failed files
     * 
     * @return bool True if there are failed files
     */
    public function hasFailedFiles(): bool
    {
        return $this->failedFiles > 0;
    }

    /**
     * Check if archive creation was completely successful
     * 
     * @return bool True if no files failed to package
     */
    public function isCompletelySuccessful(): bool
    {
        return $this->failedFiles === 0 && $this->successfulFiles > 0;
    }

    /**
     * Get human-readable file size
     * 
     * @return string Formatted file size (e.g., "2.5 MB")
     */
    public function getFormattedFileSize(): string
    {
        $units = ['B', 'KB', 'MB', 'GB'];
        $size = $this->fileSize;
        $unitIndex = 0;

        while ($size >= 1024 && $unitIndex < count($units) - 1) {
            $size /= 1024;
            $unitIndex++;
        }

        return round($size, 1) . ' ' . $units[$unitIndex];
    }

    /**
     * Convert to array for backward compatibility and API responses
     * 
     * @return array Archive information as associative array
     */
    public function toArray(): array
    {
        return [
            'archive_id' => $this->archiveId,
            'file_path' => $this->filePath,
            'file_name' => $this->fileName,
            'file_size' => $this->fileSize,
            'total_resources' => $this->totalResources,
            'successful_files' => $this->successfulFiles,
            'failed_files' => $this->failedFiles,
            'download_url' => $this->downloadUrl,
            'created_at' => $this->createdAt,
            'formatted_file_size' => $this->getFormattedFileSize(),
            'has_failed_files' => $this->hasFailedFiles(),
            'is_completely_successful' => $this->isCompletelySuccessful()
        ];
    }

    /**
     * JSON serialization support
     * 
     * @return array Data for JSON encoding
     */
    public function jsonSerialize(): array
    {
        return $this->toArray();
    }
}