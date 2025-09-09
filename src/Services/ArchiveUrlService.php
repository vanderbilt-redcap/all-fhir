<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\AllFhir\AllFhir;

/**
 * ArchiveUrlService
 * 
 * Dedicated utility service for generating archive-related URLs with proper authentication
 * and routing. Centralizes URL generation logic to ensure consistency across all archive
 * operations and provides a single point for URL format changes.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Generate download URLs for archive files
 * - Ensure proper authentication parameters (CSRF tokens)
 * - Maintain consistent URL format across all archive operations
 * - Abstract URL generation from business logic services
 * - Support future URL format changes in single location
 * 
 * URL PATTERNS:
 * - Download URL: /api/?route=archives/{archiveId}/download&pid={pid}&...
 * - Status URL: /api/?route=archives/{archiveId}/status&pid={pid}&...
 * - List URL: /api/?route=archives&pid={pid}&...
 * 
 * INTEGRATION POINTS:
 * - AllFhir: Uses buildApiUrl() for base URL construction
 * - ArchivePackager: Generates download URLs during archive creation
 * - ResourceArchiveService: Provides URLs for status responses
 * - API Controllers: Consistent URL format for all endpoints
 * 
 * USAGE PATTERNS:
 * - Injected into services that need URL generation
 * - Called during archive creation and status retrieval
 * - Used for API response URL population
 * - Supports both immediate and background archives
 */
class ArchiveUrlService
{
    /**
     * Initialize service with AllFhir dependency
     * 
     * @param AllFhir $module Module instance for URL building
     */
    public function __construct(private AllFhir $module) {}

    /**
     * Generate download URL for a specific archive
     * 
     * Creates a complete download URL using the REDCap External Module API pattern
     * with proper authentication and routing parameters.
     * 
     * @param string $archiveId Archive identifier
     * @return string Complete download URL with authentication
     */
    public function generateDownloadUrl(string $archiveId): string
    {
        return $this->module->buildApiUrl("archives/{$archiveId}/download");
    }

    /**
     * Generate status URL for a specific archive
     * 
     * Creates URL for checking archive processing status and metadata.
     * 
     * @param string $archiveId Archive identifier
     * @return string Complete status URL with authentication
     */
    public function generateStatusUrl(string $archiveId): string
    {
        return $this->module->buildApiUrl("archives/{$archiveId}/status");
    }

    /**
     * Generate URL for listing all archives
     * 
     * Creates URL for retrieving list of available archives for the project.
     * 
     * @return string Complete archives list URL with authentication
     */
    public function generateListUrl(): string
    {
        return $this->module->buildApiUrl('archives');
    }

    /**
     * Generate URL for creating new archive
     * 
     * Creates URL for initiating archive creation operations.
     * 
     * @param string $archiveType Type of archive ('selected', 'all', etc.)
     * @return string Complete archive creation URL with authentication
     */
    public function generateCreateUrl(string $archiveType): string
    {
        return $this->module->buildApiUrl("archives/{$archiveType}");
    }

    /**
     * Generate all relevant URLs for an archive
     * 
     * Convenience method that generates all URLs related to a specific archive
     * in a single call for comprehensive API responses.
     * 
     * @param string $archiveId Archive identifier
     * @return array Associative array of all archive URLs
     */
    public function generateAllUrls(string $archiveId): array
    {
        return [
            'download' => $this->generateDownloadUrl($archiveId),
            'status' => $this->generateStatusUrl($archiveId),
            'list' => $this->generateListUrl(),
        ];
    }

    /**
     * Validate archive ID format for URL generation
     * 
     * Ensures archive ID is safe for use in URLs and matches expected format.
     * Prevents injection attacks and malformed URLs.
     * 
     * @param string $archiveId Archive identifier to validate
     * @return bool True if archive ID is safe for URL generation
     */
    public function isValidArchiveIdForUrl(string $archiveId): bool
    {
        // Allow alphanumeric characters, hyphens, and underscores
        // This matches the security validation patterns used elsewhere
        return !empty($archiveId) && preg_match('/^[a-zA-Z0-9_-]+$/', $archiveId);
    }

    /**
     * Generate download URL with validation
     * 
     * Safer version of generateDownloadUrl that validates the archive ID first.
     * Returns null if the archive ID is not safe for URL generation.
     * 
     * @param string $archiveId Archive identifier
     * @return string|null Download URL or null if archive ID is invalid
     */
    public function safeGenerateDownloadUrl(string $archiveId): ?string
    {
        if (!$this->isValidArchiveIdForUrl($archiveId)) {
            return null;
        }

        return $this->generateDownloadUrl($archiveId);
    }

    /**
     * Extract archive ID from download URL
     * 
     * Utility method to parse archive ID from a download URL.
     * Useful for reverse URL processing and validation.
     * 
     * @param string $downloadUrl Complete download URL
     * @return string|null Archive ID or null if not found
     */
    public function extractArchiveIdFromUrl(string $downloadUrl): ?string
    {
        // Parse the URL and extract the route parameter
        $urlParts = parse_url($downloadUrl);
        if (!isset($urlParts['query'])) {
            return null;
        }

        parse_str($urlParts['query'], $queryParams);
        $route = $queryParams['route'] ?? '';

        // Match pattern: archives/{archiveId}/download
        if (preg_match('/^archives\/([a-zA-Z0-9_-]+)\/download$/', $route, $matches)) {
            return $matches[1];
        }

        return null;
    }

    /**
     * Get base API URL for the current project
     * 
     * Returns the base URL that all archive URLs are built from.
     * Useful for client-side URL construction and debugging.
     * 
     * @return string Base API URL with project context
     */
    public function getBaseApiUrl(): string
    {
        return $this->module->buildApiUrl('');
    }
}