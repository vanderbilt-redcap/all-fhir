<?php

namespace Vanderbilt\FhirSnapshot\Tests\Unit\Security;

use PHPUnit\Framework\TestCase;
use Vanderbilt\FhirSnapshot\Security\PathSecurityValidator;

/**
 * Comprehensive security tests for PathSecurityValidator
 * 
 * Tests all known path traversal attack vectors and security vulnerabilities:
 * - Basic path traversal (../)
 * - Absolute path override attacks
 * - Symbolic link traversal
 * - Null byte injection
 * - Unicode normalization attacks
 * - Archive ID validation bypasses
 * - File permission attacks
 * - Directory escape attacks
 */
class PathSecurityValidatorTest extends TestCase
{
    private PathSecurityValidator $validator;
    private string $tempDir;
    private string $allowedDir;
    private string $projectId = 'test_project_123';

    protected function setUp(): void
    {
        // Create a temporary test environment
        $this->tempDir = sys_get_temp_dir() . '/security_test_' . uniqid();
        $this->allowedDir = $this->tempDir . '/allowed';
        
        // Create directory structure for testing
        mkdir($this->tempDir, 0755, true);
        mkdir($this->allowedDir, 0755, true);
        mkdir($this->tempDir . '/forbidden', 0755, true);
        
        // Create test files
        file_put_contents($this->allowedDir . '/valid_file.zip', 'test content');
        file_put_contents($this->tempDir . '/forbidden/secret.txt', 'secret data');
        
        $this->validator = new PathSecurityValidator($this->allowedDir, $this->projectId);
    }

    protected function tearDown(): void
    {
        // Clean up test files
        $this->removeDir($this->tempDir);
    }

    private function removeDir(string $dir): void
    {
        if (!is_dir($dir)) {
            return;
        }
        
        $files = array_diff(scandir($dir), ['.', '..']);
        foreach ($files as $file) {
            $path = $dir . DIRECTORY_SEPARATOR . $file;
            is_dir($path) ? $this->removeDir($path) : unlink($path);
        }
        rmdir($dir);
    }

    /**
     * Test valid archive ID patterns that should pass validation
     */
    public function testValidArchiveIds(): void
    {
        $validIds = [
            'abc123',
            'test_archive_1',
            'VALID-ARCHIVE-ID',
            '123456789',
            'a',
            'Test_Archive-2023_01',
            str_repeat('a', 64) // Maximum length
        ];

        foreach ($validIds as $id) {
            $this->assertTrue(
                $this->validator->isValidArchiveId($id),
                "Archive ID '$id' should be valid but was rejected"
            );
        }
    }

    /**
     * Test basic path traversal attempts - should all be rejected
     */
    public function testPathTraversalAttacks(): void
    {
        $pathTraversalIds = [
            '../secret',
            '../../etc/passwd',
            '../../../secret.txt',
            '....//....//secret',
            '..\\..\\secret.txt',
            './../secret',
             'test/../../../secret',
            '..%2F..%2Fsecret',
            '..%252F..%252Fsecret',
            '%2e%2e%2fsecret',
        ];

        foreach ($pathTraversalIds as $id) {
            $this->assertFalse(
                $this->validator->isValidArchiveId($id),
                "Path traversal archive ID '$id' should be rejected but was accepted"
            );
        }
    }

    /**
     * Test archive IDs with suspicious characters and patterns
     */
    public function testSuspiciousArchiveIdPatterns(): void
    {
        $suspiciousIds = [
            '', // Empty string
            '.htaccess',
            '/etc/passwd',
            '\\windows\\system32',
            'file.txt',
            'test.zip',
            'archive~',
            'test$var',
            'bad%20id',
            'test#hash',
            'email@domain.com',
            'test!exclamation',
            "test\0null",
            str_repeat('a', 65), // Over maximum length
            ' test', // Leading space
            'test ', // Trailing space
            "\ntest", // Newline
            "\ttest", // Tab
        ];

        foreach ($suspiciousIds as $id) {
            $this->assertFalse(
                $this->validator->isValidArchiveId($id),
                "Suspicious archive ID '$id' should be rejected but was accepted"
            );
        }
    }

    /**
     * Test Unicode normalization attacks
     */
    public function testUnicodeNormalizationAttacks(): void
    {
        $unicodeIds = [
            "test\u{2044}secret", // Unicode fraction slash
            "test\u{FF0E}\u{FF0E}/secret", // Full-width dots
            "te\u{0301}st", // Combining acute accent
            "\u{FEFF}test", // Zero-width no-break space
        ];

        foreach ($unicodeIds as $id) {
            $this->assertFalse(
                $this->validator->isValidArchiveId($id),
                "Unicode attack archive ID should be rejected"
            );
        }
    }

    /**
     * Test valid file paths within allowed directory
     */
    public function testValidFilePaths(): void
    {
        $validPath = $this->allowedDir . '/valid_file.zip';
        
        $this->assertTrue(
            $this->validator->validatePath($validPath),
            "Valid file path should pass validation"
        );
    }

    /**
     * Test path traversal attempts via file paths
     */
    public function testFilePathTraversalAttacks(): void
    {
        $forbiddenFile = $this->tempDir . '/forbidden/secret.txt';
        
        $traversalPaths = [
            $this->allowedDir . '/../forbidden/secret.txt',
            $this->allowedDir . '/../../forbidden/secret.txt',
            $this->allowedDir . '/../../../etc/passwd',
            $forbiddenFile, // Direct absolute path outside allowed dir
            '/etc/passwd', // System file
            '/etc/shadow',
            '/proc/version',
            '/var/log/auth.log',
        ];

        foreach ($traversalPaths as $path) {
            $this->assertFalse(
                $this->validator->validatePath($path),
                "Path traversal attempt '$path' should be rejected"
            );
        }
    }

    /**
     * Test symbolic link traversal prevention
     */
    public function testSymbolicLinkTraversalPrevention(): void
    {
        // Create a symbolic link that points outside the allowed directory
        $symlinkPath = $this->allowedDir . '/malicious_symlink';
        $targetPath = $this->tempDir . '/forbidden/secret.txt';
        
        if (function_exists('symlink') && symlink($targetPath, $symlinkPath)) {
            $this->assertFalse(
                $this->validator->validatePath($symlinkPath),
                "Symbolic link traversal should be rejected"
            );
            
            unlink($symlinkPath);
        } else {
            $this->markTestSkipped('Symbolic links not supported on this system');
        }
    }

    /**
     * Test null byte injection attacks
     */
    public function testNullByteInjection(): void
    {
        $nullBytePaths = [
            $this->allowedDir . "/valid_file.zip\0../../../etc/passwd",
            $this->allowedDir . "/test\0.txt",
            $this->allowedDir . "\0/etc/passwd",
        ];

        foreach ($nullBytePaths as $path) {
            $this->assertFalse(
                $this->validator->validatePath($path),
                "Null byte injection '$path' should be rejected"
            );
        }
    }

    /**
     * Test file paths that don't exist
     */
    public function testNonExistentFilePaths(): void
    {
        $nonExistentPaths = [
            $this->allowedDir . '/nonexistent.zip',
            $this->allowedDir . '/missing/file.txt',
            '/completely/fake/path.zip',
        ];

        foreach ($nonExistentPaths as $path) {
            $this->assertFalse(
                $this->validator->validatePath($path),
                "Non-existent file path '$path' should be rejected"
            );
        }
    }

    /**
     * Test directory access attempts (should be rejected)
     */
    public function testDirectoryAccess(): void
    {
        $directoryPaths = [
            $this->allowedDir,
            $this->tempDir,
            $this->tempDir . '/forbidden',
            '/',
            '/etc',
            '/tmp',
        ];

        foreach ($directoryPaths as $path) {
            $this->assertFalse(
                $this->validator->validatePath($path),
                "Directory access '$path' should be rejected"
            );
        }
    }

    /**
     * Test world-writable file detection
     */
    public function testWorldWritableFileDetection(): void
    {
        $worldWritablePath = $this->allowedDir . '/world_writable.zip';
        file_put_contents($worldWritablePath, 'test');
        chmod($worldWritablePath, 0666); // World writable
        
        $this->assertFalse(
            $this->validator->validatePath($worldWritablePath),
            "World-writable file should be rejected for security"
        );
        
        unlink($worldWritablePath);
    }

    /**
     * Test createSafeFilePath functionality
     */
    public function testCreateSafeFilePath(): void
    {
        // Valid filename should create safe path
        $safePath = $this->validator->createSafeFilePath('valid_archive');
        $expectedPath = $this->allowedDir . '/valid_archive.zip';
        
        $this->assertEquals($expectedPath, $safePath);
        
        // Invalid filename should return null
        $unsafePath = $this->validator->createSafeFilePath('../invalid');
        $this->assertNull($unsafePath);
        
        $unsafePath2 = $this->validator->createSafeFilePath('file.with.dots');
        $this->assertNull($unsafePath2);
    }

    /**
     * Test getAllowedBaseDirectory getter
     */
    public function testGetAllowedBaseDirectory(): void
    {
        $this->assertEquals(
            $this->allowedDir,
            $this->validator->getAllowedBaseDirectory()
        );
    }

    /**
     * Test edge cases and boundary conditions
     */
    public function testEdgeCases(): void
    {
        // Test maximum valid length archive ID
        $maxLengthId = str_repeat('a', 64);
        $this->assertTrue($this->validator->isValidArchiveId($maxLengthId));
        
        // Test over-length archive ID
        $overLengthId = str_repeat('a', 65);
        $this->assertFalse($this->validator->isValidArchiveId($overLengthId));
        
        // Test minimum valid length
        $minLengthId = 'a';
        $this->assertTrue($this->validator->isValidArchiveId($minLengthId));
        
        // Test empty string
        $this->assertFalse($this->validator->isValidArchiveId(''));
    }

    /**
     * Test complex attack combinations
     */
    public function testComplexAttackCombinations(): void
    {
        $complexAttacks = [
            // URL encoding + path traversal
            '%2e%2e%2f%2e%2e%2fsecret',
            // Double encoding
            '%252e%252e%252fsecret',
            // Mixed encodings
            '..%2f..%5csecret',
            // Unicode + path traversal
            "\u{FF0E}\u{FF0E}/secret",
            // Null byte + path traversal  
            "normal\0../../../secret",
            // Multiple path separators
            '..//////secret',
            '..\\\\\\\\secret',
        ];

        foreach ($complexAttacks as $attack) {
            $this->assertFalse(
                $this->validator->isValidArchiveId($attack),
                "Complex attack '$attack' should be rejected"
            );
        }
    }

    /**
     * Test case sensitivity and normalization
     */
    public function testCaseSensitivityAndNormalization(): void
    {
        $validMixedCase = 'Test_Archive-123';
        $this->assertTrue($this->validator->isValidArchiveId($validMixedCase));
        
        // Both uppercase and lowercase should be allowed
        $this->assertTrue($this->validator->isValidArchiveId('UPPERCASE'));
        $this->assertTrue($this->validator->isValidArchiveId('lowercase'));
        $this->assertTrue($this->validator->isValidArchiveId('MiXeDcAsE'));
    }

    /**
     * Test performance with large inputs (prevent ReDoS attacks)
     */
    public function testPerformanceWithLargeInputs(): void
    {
        // Test with very large but valid input
        $largeValidId = str_repeat('a', 64);
        $startTime = microtime(true);
        $result = $this->validator->isValidArchiveId($largeValidId);
        $endTime = microtime(true);
        
        $this->assertTrue($result);
        $this->assertLessThan(0.1, $endTime - $startTime, 'Validation should complete quickly');
        
        // Test with large invalid input
        $largeInvalidId = str_repeat('../', 1000);
        $startTime = microtime(true);
        $result = $this->validator->isValidArchiveId($largeInvalidId);
        $endTime = microtime(true);
        
        $this->assertFalse($result);
        $this->assertLessThan(0.1, $endTime - $startTime, 'Validation should complete quickly even for large invalid input');
    }
}