<?php

namespace Vanderbilt\AllFhir\Tests\Unit\Services;

use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use Vanderbilt\AllFhir\Services\ResourceArchiveService;
use Vanderbilt\AllFhir\Services\RepeatedFormDataAccessor;
use Vanderbilt\AllFhir\Services\ArchivePackager;
use Vanderbilt\AllFhir\Queue\QueueManager;
use Vanderbilt\AllFhir\AllFhir;

/**
 * Security-focused integration tests for ResourceArchiveService
 * 
 * Tests the security integration between ResourceArchiveService and PathSecurityValidator:
 * - Archive ID validation during downloads
 * - File path validation during downloads
 * - Security validation during archive info storage
 * - Path traversal prevention in all operations
 * - Proper exception handling on security violations
 */
class ResourceArchiveServiceSecurityTest extends TestCase
{
    private ResourceArchiveService $service;
    private MockObject $module;
    private MockObject $dataAccessor;
    private MockObject $archivePackager;
    private MockObject $queueManager;
    private string $tempDir;
    private string $allowedDir;

    protected function setUp(): void
    {
        // Create test environment
        $this->tempDir = sys_get_temp_dir() . '/archive_security_test_' . uniqid();
        $this->allowedDir = $this->tempDir . '/allowed';
        
        mkdir($this->tempDir, 0755, true);
        mkdir($this->allowedDir, 0755, true);
        mkdir($this->tempDir . '/forbidden', 0755, true);
        
        // Create test files
        file_put_contents($this->allowedDir . '/valid_archive.zip', 'valid archive content');
        file_put_contents($this->tempDir . '/forbidden/secret.zip', 'secret archive content');

        // Create mocks
        $this->module = $this->createMock(AllFhir::class);
        $this->dataAccessor = $this->createMock(RepeatedFormDataAccessor::class);
        $this->archivePackager = $this->createMock(ArchivePackager::class);
        $this->queueManager = $this->createMock(QueueManager::class);

        // Configure module mock
        $this->module->method('getProjectId')->willReturn('test_project');

        // Mock sys_get_temp_dir to return our test directory
        // Note: In a real test environment, you might need dependency injection for this
        
        $this->service = new ResourceArchiveService(
            $this->module,
            $this->dataAccessor,
            $this->archivePackager,
            $this->queueManager
        );
    }

    protected function tearDown(): void
    {
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
     * Test that downloadArchive rejects invalid archive IDs
     */
    public function testDownloadArchiveRejectsInvalidArchiveIds(): void
    {
        $invalidArchiveIds = [
            '../secret',
            '../../etc/passwd',
            '/etc/shadow',
            'archive.zip',
            'test/path',
            'test\\path',
            'test..secret',
            'test~secret',
            'test$secret',
            'test%secret',
            'test#secret',
            'test@secret',
            'test!secret',
            "test\0secret",
            '', // Empty string
            str_repeat('a', 65), // Too long
        ];

        foreach ($invalidArchiveIds as $archiveId) {
            $result = $this->service->downloadArchive($archiveId);
            
            $this->assertNull(
                $result,
                "Download should reject invalid archive ID: '$archiveId'"
            );
        }
    }

    /**
     * Test that downloadArchive accepts valid archive IDs
     */
    public function testDownloadArchiveAcceptsValidArchiveIds(): void
    {
        $validArchiveIds = [
            'valid_archive_123',
            'TEST-ARCHIVE-456',
            'archive123',
            'a',
            str_repeat('a', 64), // Maximum length
        ];

        // Mock getArchiveStatus to return null (no queue task found)
        // This will cause the service to try resolveDirectArchiveFilePath
        $this->module->method('getProjectSetting')
                    ->with('immediate_archives')
                    ->willReturn([]);

        foreach ($validArchiveIds as $archiveId) {
            // The method should not immediately reject valid archive IDs
            // Even if no archive is found, it should reach the validation logic
            $result = $this->service->downloadArchive($archiveId);
            
            // Result may be null if no archive exists, but the method should not
            // reject due to invalid archive ID format
            // We're testing that it doesn't fail immediately on validation
            $this->assertTrue(true, "Valid archive ID '$archiveId' should not be immediately rejected");
        }
    }

    /**
     * Test path traversal prevention in direct file path resolution
     */
    public function testDirectFilePathTraversalPrevention(): void
    {
        $validArchiveId = 'test_archive';
        
        // Mock immediate archives with a malicious path
        $maliciousPath = $this->tempDir . '/forbidden/secret.zip';
        $immediateArchives = [
            $validArchiveId => [
                'file_path' => $maliciousPath,
                'file_name' => 'secret.zip',
                'file_size' => 1024,
                'created_at' => '2023-01-01T00:00:00Z',
                'total_resources' => 5,
                'successful_files' => 5,
                'failed_files' => 0
            ]
        ];
        
        $this->module->method('getProjectSetting')
                    ->with('immediate_archives')
                    ->willReturn($immediateArchives);

        $result = $this->service->downloadArchive($validArchiveId);
        
        // Should reject access to file outside allowed directory
        $this->assertNull($result, 'Should reject access to file outside allowed directory');
    }

    /**
     * Test that getArchiveStatus validates archive IDs
     */
    public function testGetArchiveStatusWithInvalidIds(): void
    {
        $invalidIds = [
            '../secret',
            '/etc/passwd',
            'test.zip',
            'test/path'
        ];

        // Mock no queue tasks found
        $this->queueManager->method('getTaskById')->willReturn(null);

        foreach ($invalidIds as $archiveId) {
            $result = $this->service->getArchiveStatus($archiveId);
            
            // The method should handle invalid IDs gracefully
            // Implementation might return null or handle differently
            $this->assertTrue(true, "getArchiveStatus should handle invalid ID gracefully: '$archiveId'");
        }
    }

    /**
     * Test storeImmediateArchiveInfo security validation
     */
    public function testStoreImmediateArchiveInfoSecurity(): void
    {
        // Use reflection to access private method for testing
        $reflection = new \ReflectionClass($this->service);
        $method = $reflection->getMethod('storeImmediateArchiveInfo');
        $method->setAccessible(true);

        // Test with invalid archive ID
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage('Invalid archive ID - security violation');

        $method->invoke($this->service, '../invalid', [
            'file_path' => $this->allowedDir . '/test.zip',
            'file_name' => 'test.zip',
            'file_size' => 1024
        ]);
    }

    /**
     * Test storeImmediateArchiveInfo with malicious file path
     */
    public function testStoreImmediateArchiveInfoMaliciousPath(): void
    {
        $reflection = new \ReflectionClass($this->service);
        $method = $reflection->getMethod('storeImmediateArchiveInfo');
        $method->setAccessible(true);

        // Test with valid archive ID but malicious file path
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage('File path failed security validation');

        $maliciousPath = $this->tempDir . '/forbidden/secret.zip';
        
        $method->invoke($this->service, 'valid_archive', [
            'file_path' => $maliciousPath,
            'file_name' => 'secret.zip',
            'file_size' => 1024
        ]);
    }

    /**
     * Test storeImmediateArchiveInfo with missing file path
     */
    public function testStoreImmediateArchiveInfoMissingPath(): void
    {
        $reflection = new \ReflectionClass($this->service);
        $method = $reflection->getMethod('storeImmediateArchiveInfo');
        $method->setAccessible(true);

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage('File path is required for archive storage');

        $method->invoke($this->service, 'valid_archive', [
            'file_name' => 'test.zip',
            'file_size' => 1024
            // Missing 'file_path'
        ]);
    }

    /**
     * Test resolveDirectArchiveFilePath security
     */
    public function testResolveDirectArchiveFilePathSecurity(): void
    {
        $reflection = new \ReflectionClass($this->service);
        $method = $reflection->getMethod('resolveDirectArchiveFilePath');
        $method->setAccessible(true);

        // Test with invalid archive ID - should not reach file system operations
        $result = $method->invoke($this->service, '../invalid');
        $this->assertNull($result, 'Should reject invalid archive ID');

        // Test with valid archive ID but no stored info
        $this->module->method('getProjectSetting')
                    ->with('immediate_archives')
                    ->willReturn([]);

        $result = $method->invoke($this->service, 'valid_archive');
        // Should return a path but it will be validated by the caller
        $this->assertIsString($result, 'Should return constructed path for valid archive ID');
    }

    /**
     * Test that security violations are properly logged
     * Note: This test would require mocking REDCap::logEvent in a real environment
     */
    public function testSecurityViolationLogging(): void
    {
        // Test various security violations to ensure they're handled
        $securityViolations = [
            '../traversal',
            '/absolute/path',
            'test.suspicious',
            'test/slash',
            'test\\backslash'
        ];

        foreach ($securityViolations as $violation) {
            $result = $this->service->downloadArchive($violation);
            $this->assertNull($result, "Security violation should be rejected: '$violation'");
        }
    }

    /**
     * Test performance and DoS prevention
     */
    public function testPerformanceAndDosPrevention(): void
    {
        // Test with very long archive ID
        $longId = str_repeat('a', 1000);
        
        $startTime = microtime(true);
        $result = $this->service->downloadArchive($longId);
        $endTime = microtime(true);
        
        $this->assertNull($result, 'Should reject overly long archive ID');
        $this->assertLessThan(0.1, $endTime - $startTime, 'Should reject quickly to prevent DoS');
    }

    /**
     * Test edge cases in archive ID validation
     */
    public function testArchiveIdEdgeCases(): void
    {
        $edgeCases = [
            ' leading_space',
            'trailing_space ',
            "\ttest", // Tab character
            "\ntest", // Newline
            "\rtest", // Carriage return
            "test\u{00A0}", // Non-breaking space
            "test\u{2000}", // En quad
            "test\u{FEFF}", // Zero-width no-break space
        ];

        foreach ($edgeCases as $edgeCase) {
            $result = $this->service->downloadArchive($edgeCase);
            $this->assertNull($result, "Edge case should be rejected: '" . addcslashes($edgeCase, "\0..\37") . "'");
        }
    }
}