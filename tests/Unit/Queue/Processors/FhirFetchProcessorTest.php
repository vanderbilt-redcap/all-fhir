<?php

namespace Tests\Unit\Queue\Processors;

use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use Vanderbilt\FhirSnapshot\Queue\Processors\FhirFetchProcessor;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Services\FhirResourceService;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Tests\Mocks\MockFhirClient;

class FhirFetchProcessorTest extends TestCase
{
    private FhirFetchProcessor $processor;
    private MockObject $mockModule;
    private MockObject $mockDataAccessor;
    private FhirResourceService $fhirResourceService;
    private MockFhirClient $mockFhirClient;

    protected function setUp(): void
    {
        $this->mockModule = $this->createMock(FhirSnapshot::class);
        $this->mockDataAccessor = $this->createMock(RepeatedFormDataAccessor::class);
        $this->mockFhirClient = new MockFhirClient();
        
        $this->fhirResourceService = new FhirResourceService(
            $this->mockDataAccessor,
            $this->mockFhirClient
        );
        
        $this->processor = new FhirFetchProcessor(
            $this->mockModule, 
            $this->fhirResourceService, 
            $this->mockDataAccessor
        );
    }

    public function testGetTaskKey(): void
    {
        $this->assertEquals('fhir_fetch', $this->processor->getTaskKey());
    }

    public function testCanProcessWithCorrectKey(): void
    {
        $task = Task::create('fhir_fetch');
        $this->assertTrue($this->processor->canProcess($task));
    }

    public function testCanProcessWithIncorrectKey(): void
    {
        $task = Task::create('other_key');
        $this->assertFalse($this->processor->canProcess($task));
    }

    public function testProcessWithValidParams(): void
    {
        $task = Task::create('fhir_fetch', [
            'mrn' => '12345',
            'resources' => ['Patient', 'Observation', 'Condition']
        ]);

        $this->mockModule->expects($this->atLeastOnce())
            ->method('logToFile')
            ->with($this->stringContains('QUEUE'));

        $result = $this->processor->process($task);

        $this->assertTrue($result->isSuccess());
        $this->assertStringContainsStringString('Fetched', $result->getMessage());
        $this->assertStringContainsStringString('12345', $result->getMessage());

        $data = $result->getData();
        $this->assertEquals('12345', $data['mrn']);
        $this->assertEquals(['Patient', 'Observation', 'Condition'], $data['requested_resources']);
        $this->assertArrayHasKey('fetched_count', $data);
        $this->assertArrayHasKey('total_count', $data);
        $this->assertArrayHasKey('success_rate', $data);
        $this->assertEquals(3, $data['total_count']);
    }

    public function testProcessWithMissingMrnParam(): void
    {
        $task = Task::create('fhir_fetch', [
            'resources' => ['Patient']
        ]);

        $result = $this->processor->process($task);

        $this->assertTrue($result->isFailure());
        $this->assertStringContainsString('Missing required parameters: mrn', $result->getMessage());
    }

    public function testProcessWithMissingResourcesParam(): void
    {
        $task = Task::create('fhir_fetch', [
            'mrn' => '12345'
        ]);

        $result = $this->processor->process($task);

        $this->assertTrue($result->isFailure());
        $this->assertStringContainsString('Missing required parameters: resources', $result->getMessage());
    }

    public function testProcessWithBothMissingParams(): void
    {
        $task = Task::create('fhir_fetch', []);

        $result = $this->processor->process($task);

        $this->assertTrue($result->isFailure());
        $this->assertStringContainsString('Missing required parameters: mrn, resources', $result->getMessage());
    }

    public function testProcessWithEmptyParams(): void
    {
        $task = Task::create('fhir_fetch', [
            'mrn' => '',
            'resources' => []
        ]);

        $result = $this->processor->process($task);

        $this->assertTrue($result->isFailure());
        $this->assertStringContainsString('Missing required parameters', $result->getMessage());
    }

    public function testProcessLogMessages(): void
    {
        $task = Task::create('fhir_fetch', [
            'mrn' => '12345',
            'resources' => ['Patient']
        ]);

        $logMessages = [];
        $this->mockModule->expects($this->atLeastOnce())
            ->method('logToFile')
            ->willReturnCallback(function($message) use (&$logMessages) {
                $logMessages[] = $message;
            });

        $result = $this->processor->process($task);

        $this->assertNotEmpty($logMessages);
        $this->assertTrue(
            count(array_filter($logMessages, fn($msg) => strpos($msg, 'Starting processing') !== false)) > 0,
            'Should log start message'
        );
        $this->assertTrue(
            count(array_filter($logMessages, fn($msg) => strpos($msg, 'Fetching FHIR data') !== false)) > 0,
            'Should log fetching message'
        );
    }
}