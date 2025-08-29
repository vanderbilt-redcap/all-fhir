<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Security\PathSecurityValidator;

/**
 * ArchiveMetadataService
 * 
 * Unified service for managing archive metadata in the 'archives' project setting.
 * Provides a single source of truth for all archive types (immediate and background)
 * with consistent state management and operations.
 * 
 * RESPONSIBILITIES:
 * - Manage unified archive metadata storage in 'archives' project setting
 * - Handle archive lifecycle: pending → completed/failed
 * - Provide consistent CRUD operations for archive metadata
 * - Support both immediate and background archive workflows
 * - Maintain security validation for all archive operations
 * 
 * ARCHIVE STATES:
 * - 'pending': Archive task created but not yet processed
 * - 'completed': Archive successfully created and available for download
 * - 'failed': Archive creation failed with error information
 * 
 * METADATA STRUCTURE:
 * Each archive entry contains:
 * - archive_id: Unique identifier
 * - status: pending/completed/failed
 * - file_path: Path to archive file (when completed)
 * - file_name: Display name for archive
 * - file_size: Size in bytes (when completed)
 * - created_at: Creation timestamp
 * - completed_at: Completion timestamp (when completed/failed)
 * - total_resources: Number of resources in archive
 * - successful_files: Number of successfully archived files
 * - failed_files: Number of failed files
 * - processing_mode: 'immediate' or 'background'
 * - error_message: Error details (when failed)
 */
class ArchiveMetadataService
{
    private string $projectId;
    private PathSecurityValidator $securityValidator;

    /**
     * Initialize service with security validation
     * 
     * @param FhirSnapshot $module Main module instance
     */
    public function __construct(
        private FhirSnapshot $module
    ) {
        $this->projectId = $module->getProjectId();
        $this->securityValidator = new PathSecurityValidator(
            sys_get_temp_dir(),
            $this->projectId
        );
    }

    /**
     * Create new archive metadata entry with pending status
     * 
     * @param string $archiveId Unique archive identifier
     * @param array $metadata Initial archive metadata
     * @return bool Success status
     */
    public function createPendingArchive(string $archiveId, array $metadata): bool
    {
        if (!$this->securityValidator->isValidArchiveId($archiveId)) {
            throw new \InvalidArgumentException('Invalid archive ID - security violation');
        }

        $archives = $this->getArchives();
        
        $archives[$archiveId] = [
            'archive_id' => $archiveId,
            'status' => 'pending',
            'file_path' => null,
            'file_name' => $metadata['archive_name'] ?? 'unknown',
            'file_size' => 0,
            'created_at' => date('c'),
            'completed_at' => null,
            'total_resources' => $metadata['total_resources'] ?? 0,
            'successful_files' => 0,
            'failed_files' => 0,
            'processing_mode' => $metadata['processing_mode'] ?? 'background',
            'error_message' => null
        ];

        return $this->saveArchives($archives);
    }

    /**
     * Mark archive as completed with file information
     * 
     * @param string $archiveId Archive identifier
     * @param array $completionData Completion metadata including file_path, file_size, etc.
     * @return bool Success status
     */
    public function markCompleted(string $archiveId, array $completionData): bool
    {
        if (!$this->securityValidator->isValidArchiveId($archiveId)) {
            throw new \InvalidArgumentException('Invalid archive ID - security violation');
        }

        $archives = $this->getArchives();
        
        if (!isset($archives[$archiveId])) {
            return false;
        }

        // Validate file path if provided
        if (isset($completionData['file_path']) && !$this->securityValidator->validatePath($completionData['file_path'])) {
            throw new \InvalidArgumentException('File path failed security validation');
        }

        $archives[$archiveId]['status'] = 'completed';
        $archives[$archiveId]['completed_at'] = date('c');
        $archives[$archiveId]['file_path'] = $completionData['file_path'] ?? null;
        $archives[$archiveId]['file_size'] = $completionData['file_size'] ?? 0;
        $archives[$archiveId]['successful_files'] = $completionData['successful_files'] ?? 0;
        $archives[$archiveId]['failed_files'] = $completionData['failed_files'] ?? 0;
        
        // Update file name if provided
        if (isset($completionData['file_name'])) {
            $archives[$archiveId]['file_name'] = $completionData['file_name'];
        }

        return $this->saveArchives($archives);
    }

    /**
     * Mark archive as failed with error information
     * 
     * @param string $archiveId Archive identifier
     * @param string $errorMessage Error description
     * @return bool Success status
     */
    public function markFailed(string $archiveId, string $errorMessage): bool
    {
        if (!$this->securityValidator->isValidArchiveId($archiveId)) {
            throw new \InvalidArgumentException('Invalid archive ID - security violation');
        }

        $archives = $this->getArchives();
        
        if (!isset($archives[$archiveId])) {
            return false;
        }

        $archives[$archiveId]['status'] = 'failed';
        $archives[$archiveId]['completed_at'] = date('c');
        $archives[$archiveId]['error_message'] = $errorMessage;

        return $this->saveArchives($archives);
    }

    /**
     * Get archive metadata by ID
     * 
     * @param string $archiveId Archive identifier
     * @return array|null Archive metadata or null if not found
     */
    public function getArchive(string $archiveId): ?array
    {
        if (!$this->securityValidator->isValidArchiveId($archiveId)) {
            return null;
        }

        $archives = $this->getArchives();
        return $archives[$archiveId] ?? null;
    }

    /**
     * Get all archives with optional status filtering
     * 
     * @param string|null $statusFilter Optional status filter (pending, completed, failed)
     * @return array Array of archive metadata
     */
    public function getAllArchives(?string $statusFilter = null): array
    {
        $archives = $this->getArchives();
        
        if ($statusFilter) {
            $archives = array_filter($archives, fn($archive) => $archive['status'] === $statusFilter);
        }

        // Sort by creation date (newest first)
        uasort($archives, function($a, $b) {
            return strtotime($b['created_at']) - strtotime($a['created_at']);
        });

        return $archives;
    }

    /**
     * Delete archive metadata and optionally the file
     * 
     * @param string $archiveId Archive identifier
     * @param bool $deleteFile Whether to also delete the physical file
     * @return array Deletion result with detailed information
     */
    public function deleteArchive(string $archiveId, bool $deleteFile = true): array
    {
        if (!$this->securityValidator->isValidArchiveId($archiveId)) {
            return [
                'success' => false,
                'message' => 'Invalid archive ID - security violation',
                'archive_id' => $archiveId,
                'deleted_files' => 0
            ];
        }

        $archives = $this->getArchives();
        
        if (!isset($archives[$archiveId])) {
            return [
                'success' => false,
                'message' => 'Archive not found',
                'archive_id' => $archiveId,
                'deleted_files' => 0
            ];
        }

        $archive = $archives[$archiveId];
        $deletedFiles = 0;
        $deletedFrom = [];

        // Delete physical file if requested and exists
        if ($deleteFile && $archive['file_path']) {
            if ($this->securityValidator->validatePath($archive['file_path']) && file_exists($archive['file_path'])) {
                if (unlink($archive['file_path'])) {
                    $deletedFiles++;
                    $deletedFrom[] = 'archive_file';
                }
            }
        }

        // Remove from metadata
        unset($archives[$archiveId]);
        $this->saveArchives($archives);
        $deletedFrom[] = 'archive_metadata';

        return [
            'success' => true,
            'message' => "Archive deleted successfully from: " . implode(', ', $deletedFrom),
            'archive_id' => $archiveId,
            'deleted_files' => $deletedFiles,
            'deleted_from' => $deletedFrom
        ];
    }

    /**
     * Clean up old completed archives
     * 
     * @param int $olderThanDays Number of days to retain archives
     * @return int Number of archives cleaned up
     */
    public function cleanupOldArchives(int $olderThanDays = 7): int
    {
        $cleanedCount = 0;
        $cutoffTime = strtotime("-{$olderThanDays} days");
        $archives = $this->getArchives();
        $remainingArchives = [];

        foreach ($archives as $archiveId => $archive) {
            $archiveTime = strtotime($archive['completed_at'] ?? $archive['created_at']);
            
            if ($archiveTime < $cutoffTime && in_array($archive['status'], ['completed', 'failed'])) {
                // Delete physical file if it exists
                if ($archive['file_path'] && $this->securityValidator->validatePath($archive['file_path']) && file_exists($archive['file_path'])) {
                    unlink($archive['file_path']);
                }
                $cleanedCount++;
            } else {
                $remainingArchives[$archiveId] = $archive;
            }
        }

        $this->saveArchives($remainingArchives);
        return $cleanedCount;
    }

    /**
     * Get archives from project setting
     * 
     * @return array Archive metadata array
     */
    private function getArchives(): array
    {
        return $this->module->getProjectSetting('archives') ?? [];
    }

    /**
     * Save archives to project setting
     * 
     * @param array $archives Archive metadata array
     * @return bool Success status
     */
    private function saveArchives(array $archives): bool
    {
        try {
            $this->module->setProjectSetting('archives', $archives);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}