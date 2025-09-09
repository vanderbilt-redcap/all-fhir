<?php

namespace Tests\Unit\Services;

use PHPUnit\Framework\TestCase;
use Vanderbilt\AllFhir\Services\MrnService;
use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Services\RepeatedFormResourceManager;
use Vanderbilt\AllFhir\Services\RepeatedFormDataAccessor;

class MrnServiceTest extends TestCase
{
    /**
     * Test addMany summarizes successes and failures correctly.
     * Uses a test double overriding addOne to avoid REDCap dependencies.
     */
    public function testAddManySummarizesResults(): void
    {
        $module = $this->createMock(AllFhir::class);
        $resourceManager = $this->createMock(RepeatedFormResourceManager::class);
        $dataAccessor = $this->createMock(RepeatedFormDataAccessor::class);

        // Create a partial stub that overrides addOne
        $service = new class($module, $resourceManager, $dataAccessor) extends MrnService {
            public function addOne(string $mrn): array
            {
                if (preg_match('/^ok/i', $mrn)) {
                    return ['success' => true, 'mrn' => $mrn];
                }
                return ['success' => false, 'mrn' => $mrn, 'error' => 'invalid or empty'];
            }
        };

        $input = ['ok-1', 'bad-1', 'ok-2', 'bad-2'];
        $summary = $service->addMany($input);

        $this->assertSame(2, $summary['added_count']);
        $this->assertSame(2, $summary['failed_count']);
        $this->assertEqualsCanonicalizing(['ok-1', 'ok-2'], $summary['success']);
        $this->assertCount(2, $summary['failures']);
        $this->assertEquals('bad-1', $summary['failures'][0]['mrn']);
        $this->assertEquals('invalid or empty', $summary['failures'][0]['error']);
    }
}

