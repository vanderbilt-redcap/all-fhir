<?php

namespace Vanderbilt\AllFhir\ValueObjects;

use JsonSerializable;

/**
 * ArchiveStatus
 * 
 * Immutable value object representing complete archive status and lifecycle information.
 * Encapsulates both archive file information and processing status for unified handling
 * of background and immediate archive operations.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Combines archive file info with processing status
 * - Provides unified interface for both background and immediate archives
 * - Tracks archive lifecycle from creation through completion
 * - Type-safe status checking and property access
 * - Serialization support for API responses
 * 
 * STATUS VALUES:
 * - 'pending': Archive task created, waiting for processing
 * - 'processing': Archive creation currently in progress
 * - 'completed': Archive successfully created and ready for download
 * - 'failed': Archive creation failed with error
 * 
 * PROCESSING MODES:
 * - 'immediate': Archive created synchronously, always completed
 * - 'background': Archive created via queue task, status may vary
 * 
 * FACTORY METHODS:
 * - fromTask(): Creates from queue task data (legacy support)
 * - fromArchiveData(): Creates from unified archive metadata
 * - fromCompletedTask(): Creates for completed background task
 * 
 * INTEGRATION POINTS:
 * - Queue task system: Background archive processing
 * - Project settings: Immediate archive storage
 * - API responses: Status checking and download info
 * - Archive cleanup: Lifecycle management
 */
class ArchiveStatus implements JsonSerializable
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_PROCESSING = 'processing';
    public const STATUS_COMPLETED = 'completed';
    public const STATUS_FAILED = 'failed';

    public const MODE_IMMEDIATE = 'immediate';
    public const MODE_BACKGROUND = 'background';

    /**
     * Create new ArchiveStatus instance
     * 
     * @param string $archiveId Archive identifier
     * @param string $status Current processing status
     * @param string $processingMode How archive was processed
     * @param string $createdAt ISO 8601 creation timestamp
     * @param string $updatedAt ISO 8601 last update timestamp
     * @param ArchiveInfo|null $archiveInfo Archive file information
     * @param array $metadata Additional status metadata
     */
    public function __construct(
        private string $archiveId,
        private string $status,
        private string $processingMode,
        private string $createdAt,
        private string $updatedAt,
        private ?ArchiveInfo $archiveInfo = null,
        private array $metadata = []
    ) {
        // Validation
        if (empty($archiveId)) {
            throw new \InvalidArgumentException('Archive ID cannot be empty');
        }
        if (!in_array($status, [self::STATUS_PENDING, self::STATUS_PROCESSING, self::STATUS_COMPLETED, self::STATUS_FAILED])) {
            throw new \InvalidArgumentException("Invalid status: {$status}");
        }
        if (!in_array($processingMode, [self::MODE_IMMEDIATE, self::MODE_BACKGROUND])) {
            throw new \InvalidArgumentException("Invalid processing mode: {$processingMode}");
        }
        if (empty($createdAt)) {
            throw new \InvalidArgumentException('Created timestamp cannot be empty');
        }
        if (empty($updatedAt)) {
            throw new \InvalidArgumentException('Updated timestamp cannot be empty');
        }
    }

    /**
     * Factory method to create from queue task
     * 
     * @param Task $task Queue task object
     * @return self New ArchiveStatus instance
     */
    public static function fromTask(Task $task): self
    {
        $metadata = $task->getMetadata();
        $archiveInfo = null;

        // If task is completed and has archive info in metadata, create ArchiveInfo
        if ($task->getStatus() === self::STATUS_COMPLETED && !empty($metadata['file_path'])) {
            $archiveInfo = ArchiveInfo::fromTaskMetadata($task->getId(), $metadata);
        }

        return new self(
            archiveId: $task->getId(),
            status: $task->getStatus(),
            processingMode: self::MODE_BACKGROUND,
            createdAt: $task->getCreatedAt(),
            updatedAt: $task->getUpdatedAt(),
            archiveInfo: $archiveInfo,
            metadata: $metadata
        );
    }

    /**
     * Factory method to create from unified archive data
     * 
     * @param array $archiveData Data from unified archives project setting
     * @return self New ArchiveStatus instance
     */
    public static function fromArchiveData(array $archiveData): self
    {
        $archiveInfo = null;
        
        // Create ArchiveInfo if archive is completed and has file data
        if ($archiveData['status'] === self::STATUS_COMPLETED && !empty($archiveData['file_path'])) {
            $archiveInfo = ArchiveInfo::fromArchiveData($archiveData);
        }
        
        $createdAt = $archiveData['created_at'] ?? date('c');
        $updatedAt = $archiveData['completed_at'] ?? $createdAt;

        return new self(
            archiveId: $archiveData['archive_id'],
            status: $archiveData['status'],
            processingMode: $archiveData['processing_mode'] ?? self::MODE_BACKGROUND,
            createdAt: $createdAt,
            updatedAt: $updatedAt,
            archiveInfo: $archiveInfo,
            metadata: [
                'error_message' => $archiveData['error_message'] ?? null
            ]
        );
    }

    /**
     * Factory method to create for completed background task with archive info
     * 
     * @param Task $task Completed queue task
     * @param ArchiveInfo $archiveInfo Archive file information
     * @return self New ArchiveStatus instance
     */
    public static function fromCompletedTask(Task $task, ArchiveInfo $archiveInfo): self
    {
        return new self(
            archiveId: $task->getId(),
            status: self::STATUS_COMPLETED,
            processingMode: self::MODE_BACKGROUND,
            createdAt: $task->getCreatedAt(),
            updatedAt: $task->getUpdatedAt(),
            archiveInfo: $archiveInfo,
            metadata: $task->getMetadata()
        );
    }

    /**
     * Create new instance with updated archive info (immutable update)
     * 
     * @param ArchiveInfo $archiveInfo Updated archive information
     * @return self New instance with updated archive info
     */
    public function withArchiveInfo(ArchiveInfo $archiveInfo): self
    {
        return new self(
            $this->archiveId,
            $this->status,
            $this->processingMode,
            $this->createdAt,
            $this->updatedAt,
            $archiveInfo,
            $this->metadata
        );
    }

    /**
     * Create new instance with download URL added to archive info
     * 
     * @param string $downloadUrl Complete download URL
     * @return self New instance with download URL
     */
    public function withDownloadUrl(string $downloadUrl): self
    {
        if ($this->archiveInfo === null) {
            return $this;
        }

        $updatedArchiveInfo = $this->archiveInfo->withDownloadUrl($downloadUrl);
        return $this->withArchiveInfo($updatedArchiveInfo);
    }

    // Getters
    public function getArchiveId(): string
    {
        return $this->archiveId;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getProcessingMode(): string
    {
        return $this->processingMode;
    }

    public function getCreatedAt(): string
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): string
    {
        return $this->updatedAt;
    }

    public function getArchiveInfo(): ?ArchiveInfo
    {
        return $this->archiveInfo;
    }

    public function getMetadata(): array
    {
        return $this->metadata;
    }

    // Status checking methods
    public function isPending(): bool
    {
        return $this->status === self::STATUS_PENDING;
    }

    public function isProcessing(): bool
    {
        return $this->status === self::STATUS_PROCESSING;
    }

    public function isCompleted(): bool
    {
        return $this->status === self::STATUS_COMPLETED;
    }

    public function isFailed(): bool
    {
        return $this->status === self::STATUS_FAILED;
    }

    public function isBackground(): bool
    {
        return $this->processingMode === self::MODE_BACKGROUND;
    }

    public function isImmediate(): bool
    {
        return $this->processingMode === self::MODE_IMMEDIATE;
    }

    /**
     * Check if archive is ready for download
     * 
     * @return bool True if completed and has archive info
     */
    public function isReadyForDownload(): bool
    {
        return $this->isCompleted() && $this->archiveInfo !== null;
    }

    /**
     * Get download URL if available
     * 
     * @return string|null Download URL or null if not available
     */
    public function getDownloadUrl(): ?string
    {
        return $this->archiveInfo?->getDownloadUrl();
    }

    /**
     * Get file path if available
     * 
     * @return string|null File path or null if not available
     */
    public function getFilePath(): ?string
    {
        return $this->archiveInfo?->getFilePath();
    }

    /**
     * Get total resources count if available
     * 
     * @return int Total resources count, 0 if not available
     */
    public function getTotalResources(): int
    {
        return $this->archiveInfo?->getTotalResources() ?? 0;
    }

    /**
     * Get file size if available
     * 
     * @return int File size in bytes, 0 if not available
     */
    public function getFileSize(): int
    {
        return $this->archiveInfo?->getFileSize() ?? 0;
    }

    /**
     * Convert to array for backward compatibility and API responses
     * 
     * @return array Status information as associative array
     */
    public function toArray(): array
    {
        $result = [
            'archive_id' => $this->archiveId,
            'status' => $this->status,
            'processing_mode' => $this->processingMode,
            'created_at' => $this->createdAt,
            'updated_at' => $this->updatedAt,
            'metadata' => $this->metadata,
            'is_completed' => $this->isCompleted(),
            'is_ready_for_download' => $this->isReadyForDownload(),
        ];

        // Add archive info if available
        if ($this->archiveInfo !== null) {
            $result = array_merge($result, [
                'file_path' => $this->archiveInfo->getFilePath(),
                'file_name' => $this->archiveInfo->getFileName(),
                'file_size' => $this->archiveInfo->getFileSize(),
                'total_resources' => $this->archiveInfo->getTotalResources(),
                'successful_files' => $this->archiveInfo->getSuccessfulFiles(),
                'failed_files' => $this->archiveInfo->getFailedFiles(),
                'download_url' => $this->archiveInfo->getDownloadUrl(),
                'formatted_file_size' => $this->archiveInfo->getFormattedFileSize(),
            ]);
        }

        return $result;
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