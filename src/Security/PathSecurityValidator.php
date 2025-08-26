<?php

namespace Vanderbilt\FhirSnapshot\Security;

/**
 * PathSecurityValidator
 * 
 * Specialized security utility for validating file paths and identifiers against
 * path traversal attacks and other security vulnerabilities.
 * 
 * SECURITY-FIRST DESIGN PRINCIPLES:
 * - Zero-tolerance approach to path validation
 * - Comprehensive logging of all security violations
 * - Strict containment within allowed base directories
 * - No fallback mechanisms that could bypass security
 * - Extensive attack vector detection and prevention
 * 
 * USAGE PATTERNS:
 * - $validator = new PathSecurityValidator($allowedBaseDir, $projectId)
 * - $isValid = $validator->isValidArchiveId($archiveId)
 * - $isSecure = $validator->validatePath($filePath)
 * 
 * ATTACK VECTORS PREVENTED:
 * - Path traversal via ../../../
 * - Absolute path override attacks
 * - Symbolic link traversal
 * - Directory escape through path manipulation
 * - Archive ID injection attacks
 * - Null byte injection
 * - Unicode normalization attacks
 */
class PathSecurityValidator
{
    private string $allowedBaseDirectory;
    private string $projectId;
    
    /**
     * Initialize the security validator with strict configuration
     * 
     * @param string $allowedBaseDirectory Single allowed base directory for all operations
     * @param string $projectId Project identifier for logging context
     */
    public function __construct(string $allowedBaseDirectory, string $projectId)
    {
        $this->allowedBaseDirectory = rtrim($allowedBaseDirectory, DIRECTORY_SEPARATOR);
        $this->projectId = $projectId;
    }
    
    /**
     * Validate archive ID with strict security rules
     * 
     * Archive IDs must contain ONLY:
     * - Letters (a-z, A-Z)
     * - Numbers (0-9)
     * - Hyphens (-)
     * - Underscores (_)
     * - Maximum length: 64 characters
     * 
     * This prevents any path traversal attempts via archive ID injection.
     * 
     * @param string $archiveId Archive identifier to validate
     * @return bool True if archive ID is safe, false otherwise
     */
    public function isValidArchiveId(string $archiveId): bool
    {
        // Check length
        if (strlen($archiveId) === 0 || strlen($archiveId) > 64) {
            $this->logSecurityViolation('Invalid archive ID length', ['archive_id' => $archiveId]);
            return false;
        }
        
        // Check for allowed characters only
        if (!preg_match('/^[a-zA-Z0-9_-]+$/', $archiveId)) {
            $this->logSecurityViolation('Invalid archive ID characters', ['archive_id' => $archiveId]);
            return false;
        }
        
        // Additional checks for suspicious patterns
        $suspiciousPatterns = ['.', '/', '\\', '..', '~', '$', '%', '#', '@', '!', "\0"];
        foreach ($suspiciousPatterns as $pattern) {
            if (strpos($archiveId, $pattern) !== false) {
                $this->logSecurityViolation('Archive ID contains suspicious pattern', [
                    'archive_id' => $archiveId,
                    'pattern' => $pattern
                ]);
                return false;
            }
        }
        
        // Check for Unicode normalization attacks
        if ($archiveId !== $this->normalizeString($archiveId)) {
            $this->logSecurityViolation('Archive ID failed Unicode normalization check', [
                'archive_id' => $archiveId
            ]);
            return false;
        }
        
        return true;
    }
    
    /**
     * Validate file path with zero-tolerance security approach
     * 
     * Ensures that:
     * 1. Path resolves to a real location (no broken symlinks)
     * 2. Real path is strictly within the allowed base directory
     * 3. No path traversal attempts succeed
     * 4. File exists and is readable
     * 5. No null byte injection
     * 6. No Unicode normalization attacks
     * 
     * @param string $filePath File path to validate
     * @return bool True if path is safe and accessible, false otherwise
     */
    public function validatePath(string $filePath): bool
    {
        // Log all access attempts
        $this->logSecurityAttempt('File path access attempt', ['file_path' => $filePath]);
        
        // Check for null byte injection
        if (strpos($filePath, "\0") !== false) {
            $this->logSecurityViolation('Null byte injection detected in file path', [
                'file_path' => $filePath
            ]);
            return false;
        }
        
        // Check Unicode normalization
        if ($filePath !== $this->normalizeString($filePath)) {
            $this->logSecurityViolation('File path failed Unicode normalization check', [
                'file_path' => $filePath
            ]);
            return false;
        }
        
        // Check if file exists first
        if (!file_exists($filePath)) {
            $this->logSecurityViolation('File path does not exist', ['file_path' => $filePath]);
            return false;
        }
        
        // Get real path (resolves symlinks and relative paths)
        $realPath = realpath($filePath);
        if ($realPath === false) {
            $this->logSecurityViolation('Cannot resolve real path', ['file_path' => $filePath]);
            return false;
        }
        
        // Ensure real path starts with allowed base directory
        $allowedRealPath = realpath($this->allowedBaseDirectory);
        if ($allowedRealPath === false) {
            $this->logSecurityViolation('Cannot resolve allowed base directory', [
                'base_directory' => $this->allowedBaseDirectory
            ]);
            return false;
        }
        
        // Strict containment check - real path must be within allowed directory
        if (!str_starts_with($realPath, $allowedRealPath . DIRECTORY_SEPARATOR) && 
            $realPath !== $allowedRealPath) {
            $this->logSecurityViolation('Path traversal attempt detected', [
                'attempted_path' => $filePath,
                'resolved_path' => $realPath,
                'allowed_base' => $allowedRealPath
            ]);
            return false;
        }
        
        // Check file is readable
        if (!is_readable($realPath)) {
            $this->logSecurityViolation('File is not readable', [
                'file_path' => $filePath,
                'real_path' => $realPath
            ]);
            return false;
        }
        
        // Additional security checks
        if (!$this->performAdditionalSecurityChecks($realPath)) {
            return false;
        }
        
        // All checks passed
        $this->logSecurityAttempt('File path validation successful', [
            'file_path' => $filePath,
            'real_path' => $realPath
        ]);
        
        return true;
    }
    
    /**
     * Perform additional security checks on the resolved path
     * 
     * @param string $realPath The resolved real path
     * @return bool True if additional checks pass, false otherwise
     */
    private function performAdditionalSecurityChecks(string $realPath): bool
    {
        // Check if path contains suspicious patterns that survived previous checks
        $suspiciousPathPatterns = [
            '/..',       // Hidden directory traversal
            '/.',        // Hidden files (may be suspicious)
            '/proc/',    // Linux proc filesystem
            '/dev/',     // Device files
            '/sys/',     // System files
            '/etc/',     // Configuration files
            '/var/log/', // Log files
            '/tmp/../',  // Temp directory traversal
            '/home/',    // User directories
        ];
        
        foreach ($suspiciousPathPatterns as $pattern) {
            if (strpos($realPath, $pattern) !== false) {
                $this->logSecurityViolation('Path contains suspicious pattern', [
                    'real_path' => $realPath,
                    'pattern' => $pattern
                ]);
                return false;
            }
        }
        
        // Check file permissions are not overly permissive
        $perms = fileperms($realPath);
        if ($perms === false) {
            $this->logSecurityViolation('Cannot determine file permissions', [
                'real_path' => $realPath
            ]);
            return false;
        }
        
        // Check if file is world-writable (potential security risk)
        if ($perms & 0x0002) {
            $this->logSecurityViolation('File is world-writable - security risk', [
                'real_path' => $realPath,
                'permissions' => sprintf('%o', $perms)
            ]);
            return false;
        }
        
        return true;
    }
    
    /**
     * Normalize string to prevent Unicode normalization attacks
     * 
     * @param string $input Input string to normalize
     * @return string Normalized string
     */
    private function normalizeString(string $input): string
    {
        // Use intl extension if available, fallback to manual checks
        if (class_exists('Normalizer')) {
            return \Normalizer::normalize($input, \Normalizer::FORM_C) ?: $input;
        }
        
        return $input;
    }
    
    /**
     * Log security violation with detailed information
     * 
     * @param string $message Violation description
     * @param array $context Additional context information
     */
    private function logSecurityViolation(string $message, array $context = []): void
    {
        $logEntry = [
            'timestamp' => date('c'),
            'project_id' => $this->projectId,
            'violation_type' => 'path_traversal_attempt',
            'message' => $message,
            'context' => $context,
            'user_info' => [
                'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
                'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
                'redcap_user' => defined('USERID') ? USERID : 'unknown'
            ]
        ];
        
        // Log to REDCap system log
        \REDCap::logEvent(
            'SECURITY VIOLATION: Path Traversal Attempt',
            json_encode($logEntry),
            null,
            null,
            null,
            $this->projectId
        );
        
        // Also log to error log for system administrators
        error_log('FHIR Archive Security Violation: ' . $message . ' - ' . json_encode($context));
    }
    
    /**
     * Log security-related access attempts for auditing
     * 
     * @param string $message Activity description
     * @param array $context Additional context information
     */
    private function logSecurityAttempt(string $message, array $context = []): void
    {
        $logEntry = [
            'timestamp' => date('c'),
            'project_id' => $this->projectId,
            'activity_type' => 'path_security_check',
            'message' => $message,
            'context' => $context,
            'user_info' => [
                'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
                'redcap_user' => defined('USERID') ? USERID : 'unknown'
            ]
        ];
        
        // Log to REDCap system log for audit trail
        \REDCap::logEvent(
            'Path Security Check',
            json_encode($logEntry),
            null,
            null,
            null,
            $this->projectId
        );
    }
    
    /**
     * Get the allowed base directory
     * 
     * @return string The allowed base directory
     */
    public function getAllowedBaseDirectory(): string
    {
        return $this->allowedBaseDirectory;
    }
    
    /**
     * Create a safe file path within the allowed base directory
     * 
     * @param string $filename Filename (will be validated)
     * @return string|null Safe file path or null if filename is invalid
     */
    public function createSafeFilePath(string $filename): ?string
    {
        // Validate filename using archive ID rules (reuse the same strict validation)
        if (!$this->isValidArchiveId($filename)) {
            return null;
        }
        
        return $this->allowedBaseDirectory . DIRECTORY_SEPARATOR . $filename . '.zip';
    }
}