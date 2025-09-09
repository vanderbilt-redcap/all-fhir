<?php

namespace Tests\Unit\Services;

use PHPUnit\Framework\TestCase;
use Vanderbilt\AllFhir\Services\ArchiveUrlService;
use Vanderbilt\AllFhir\AllFhir;

class ArchiveUrlServiceTest extends TestCase
{
    public function testValidationAllowsSafeIdsOnly(): void
    {
        $module = $this->createMock(AllFhir::class);
        $svc = new ArchiveUrlService($module);

        $this->assertTrue($svc->isValidArchiveIdForUrl('valid_ID-123'));
        $this->assertFalse($svc->isValidArchiveIdForUrl('..'));
        $this->assertFalse($svc->isValidArchiveIdForUrl('invalid/seg'));
        $this->assertFalse($svc->isValidArchiveIdForUrl('evil\\backslash'));
        $this->assertFalse($svc->isValidArchiveIdForUrl(''));
    }

    public function testSafeGenerateDownloadUrlBuildsExpectedRoute(): void
    {
        $module = $this->createMock(AllFhir::class);
        $module->method('buildApiUrl')
               ->willReturnCallback(fn(string $route) => "/api?route={$route}");
        $svc = new ArchiveUrlService($module);

        $url = $svc->safeGenerateDownloadUrl('archive_1');
        $this->assertSame('/api?route=archives/archive_1/download', $url);

        $this->assertNull($svc->safeGenerateDownloadUrl('../bad'));
    }

    public function testExtractArchiveIdFromUrl(): void
    {
        $module = $this->createMock(AllFhir::class);
        $svc = new ArchiveUrlService($module);

        $url = '/api?pid=1&page=api&type=module&prefix=all_fhir&redcap_csrf_token=t&route=archives/abc123/download';
        $this->assertSame('abc123', $svc->extractArchiveIdFromUrl($url));

        $badUrl = '/api?route=archives//download';
        $this->assertNull($svc->extractArchiveIdFromUrl($badUrl));
    }
}

