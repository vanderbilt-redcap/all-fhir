<?php

namespace Tests\Unit\Services;

use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use Vanderbilt\FhirSnapshot\Services\FhirResourceService;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\FhirSnapshot\Contracts\FhirClientInterface;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Tests\Mocks\MockFhirClient;

class FhirResourceServiceTest extends TestCase
{
    private FhirResourceService $service;
    private MockObject $mockDataAccessor;
    private MockFhirClient $mockFhirClient;

    protected function setUp(): void
    {
        $this->mockDataAccessor = $this->createMock(RepeatedFormDataAccessor::class);
        $this->mockFhirClient = new MockFhirClient();
        
        $this->service = new FhirResourceService(
            $this->mockDataAccessor,
            $this->mockFhirClient
        );
    }

    public function testFetchAndStoreResourceSuccess(): void
    {
        $recordId = 'test_record_1';
        $mrn = '123456';
        $resourceType = 'Patient';
        $repeatInstance = 1;

        // Mock metadata
        $metadata = FhirResourceMetadata::create($resourceType, $repeatInstance);
        
        $this->mockDataAccessor->expects($this->once())
            ->method('getResourceMetadata')
            ->with($recordId, $resourceType, $repeatInstance)
            ->willReturn($metadata);

        $this->mockDataAccessor->expects($this->once())
            ->method('getProjectId')
            ->willReturn(123);

        $this->mockDataAccessor->expects($this->exactly(2))
            ->method('saveResourceMetadata')
            ->with($recordId, $this->isInstanceOf(FhirResourceMetadata::class));

        // Mock REDCap::storeFile (this would normally require a global mock)
        // For now, we'll assume it returns a valid edoc ID
        
        $result = $this->service->fetchAndStoreResource($recordId, $mrn, $resourceType, $repeatInstance);

        $this->assertTrue($result['success']);
        $this->assertStringContainsString('Successfully fetched', $result['message']);
        $this->assertEquals($recordId, $result['data']['record_id']);
        $this->assertEquals($mrn, $result['data']['mrn']);
        $this->assertEquals($resourceType, $result['data']['resource_type']);
        $this->assertEquals($repeatInstance, $result['data']['repeat_instance']);
    }

    public function testFetchAndStoreResourceNoDataFound(): void
    {
        $recordId = 'test_record_1';
        $mrn = '123456';
        $resourceType = 'NonExistentResource';
        $repeatInstance = 1;

        // Create a mock FHIR client that returns null (no data found)
        $mockFhirClient = $this->createMock(FhirClientInterface::class);
        $mockFhirClient->expects($this->once())
            ->method('fetchFhirResource')
            ->with($mrn, $resourceType, false)
            ->willReturn(null);

        $service = new FhirResourceService($this->mockDataAccessor, $mockFhirClient);

        // Mock metadata
        $metadata = FhirResourceMetadata::create($resourceType, $repeatInstance);
        
        $this->mockDataAccessor->expects($this->once())
            ->method('getResourceMetadata')
            ->willReturn($metadata);

        $this->mockDataAccessor->expects($this->exactly(2))
            ->method('saveResourceMetadata');

        $result = $service->fetchAndStoreResource($recordId, $mrn, $resourceType, $repeatInstance);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('No data found', $result['message']);
        $this->assertEquals($recordId, $result['data']['record_id']);
    }

    public function testFetchAndStoreResourceWithException(): void
    {
        $recordId = 'test_record_1';
        $mrn = '123456';
        $resourceType = 'Patient';
        $repeatInstance = 1;

        // Create a mock FHIR client that throws an exception
        $mockFhirClient = $this->createMock(FhirClientInterface::class);
        $mockFhirClient->expects($this->once())
            ->method('fetchFhirResource')
            ->willThrowException(new \Exception('FHIR API error'));

        $service = new FhirResourceService($this->mockDataAccessor, $mockFhirClient);

        // Mock metadata
        $metadata = FhirResourceMetadata::create($resourceType, $repeatInstance);
        
        $this->mockDataAccessor->expects($this->once())
            ->method('getResourceMetadata')
            ->willReturn($metadata);

        $this->mockDataAccessor->expects($this->exactly(2))
            ->method('saveResourceMetadata');

        $result = $service->fetchAndStoreResource($recordId, $mrn, $resourceType, $repeatInstance);

        $this->assertFalse($result['success']);
        $this->assertEquals('FHIR API error', $result['message']);
        $this->assertEquals($recordId, $result['data']['record_id']);
    }

    public function testFetchAndStoreResourceWithRefetch(): void
    {
        $recordId = 'test_record_1';
        $mrn = '123456';
        $resourceType = 'Patient';
        $repeatInstance = 1;
        $options = ['is_refetch' => true];

        // Mock metadata
        $metadata = FhirResourceMetadata::create($resourceType, $repeatInstance);
        
        $this->mockDataAccessor->expects($this->once())
            ->method('getResourceMetadata')
            ->willReturn($metadata);

        $this->mockDataAccessor->expects($this->once())
            ->method('getProjectId')
            ->willReturn(123);

        $this->mockDataAccessor->expects($this->exactly(2))
            ->method('saveResourceMetadata');

        $result = $this->service->fetchAndStoreResource($recordId, $mrn, $resourceType, $repeatInstance, $options);

        $this->assertTrue($result['success']);
        $this->assertTrue($result['data']['is_refetch']);
    }
}