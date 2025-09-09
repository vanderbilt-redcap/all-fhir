<?php

namespace Tests\Unit\Services;

use PHPUnit\Framework\TestCase;
use Vanderbilt\AllFhir\Services\FhirAccess\ProjectFhirAccessService;
use Vanderbilt\AllFhir\AllFhir;

class ProjectFhirAccessServiceTest extends TestCase
{
    public function testGetStatusWhenNoFhirSystemConfigured(): void
    {
        $module = $this->createMock(AllFhir::class);
        $module->method('getProjectSetting')
               ->willReturn(null);

        $service = new ProjectFhirAccessService($module);

        $status = $service->getStatus(123);

        $this->assertFalse($status->hasAnyValidToken());
        $this->assertSame(0, $status->getValidCount());
        $this->assertSame(0, $status->getTotalUsersWithToken());
        $this->assertSame(0, $status->getTotalProjectUsers());
        $this->assertContains('No FHIR system configured for this project.', $status->getErrors());
        $this->assertNull($status->getFhirSystemId());
        $this->assertNull($status->getFhirSystemName());
    }
}
