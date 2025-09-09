<?php

namespace Tests\Unit\Services;

use PHPUnit\Framework\TestCase;
use Vanderbilt\AllFhir\Services\FhirAccess\ProjectFhirAccessService;
use Vanderbilt\AllFhir\AllFhir;

// Use stubs defined in tests/support/RedcapStubs.php
use UserRights;
use User;
use Vanderbilt\REDCap\Classes\Fhir\TokenManager\TokenManagerStub;
use Vanderbilt\REDCap\Classes\Fhir\TokenManager\FhirTokenDTO;

class ProjectFhirAccessServiceCountsTest extends TestCase
{
    public function testCountsIncludeTotalProjectUsers(): void
    {
        $projectId = 999;

        // Configure project users
        UserRights::$privileges[$projectId] = [
            'alice' => [],
            'bob' => [],
            'carol' => [],
        ];

        // Map tokens by user ID (alice valid, bob expired, carol no token)
        $aliceId = User::getUIIDByUsername('alice');
        $bobId = User::getUIIDByUsername('bob');
        $carolId = User::getUIIDByUsername('carol');
        TokenManagerStub::$userStatusMap = [
            $aliceId => FhirTokenDTO::STATUS_VALID,
            $bobId => FhirTokenDTO::STATUS_EXPIRED,
            // carol omitted => no token
        ];

        // Mock module and settings
        $module = $this->createMock(AllFhir::class);
        // Return any non-empty FHIR system setting
        $module->method('getProjectSetting')->willReturn('ehr-123');

        $service = new ProjectFhirAccessService($module);

        $status = $service->getStatus($projectId);

        $this->assertTrue($status->hasAnyValidToken());
        $this->assertSame(1, $status->getValidCount());
        $this->assertSame(2, $status->getTotalUsersWithToken());
        $this->assertSame(3, $status->getTotalProjectUsers());

        $arr = $status->toArray();
        $this->assertArrayHasKey('total_project_users', $arr);
        $this->assertSame(3, $arr['total_project_users']);
    }
}

