<?php

namespace Tests\Unit\Queue;

use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use Vanderbilt\AllFhir\Queue\Processors\ArchiveProcessor;
use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Services\ArchivePackager;
use Vanderbilt\AllFhir\Services\ArchiveMetadataService;
use Vanderbilt\AllFhir\ValueObjects\Task;
use Vanderbilt\AllFhir\ValueObjects\ArchiveInfo;

class ArchiveProcessorTest extends TestCase
{
    private ArchiveProcessor $processor;
    private MockObject $module;
    private MockObject $packager;
    private MockObject $metadataService;

    protected function setUp(): void
    {
        $this->module = $this->createMock(AllFhir::class);
        $this->packager = $this->createMock(ArchivePackager::class);
        $this->metadataService = $this->createMock(ArchiveMetadataService::class);

        $this->processor = new ArchiveProcessor(
            $this->module,
            $this->packager,
            $this->metadataService
        );
    }

    public function testValidationFailsWhenResourcesMissing(): void
    {
        $task = Task::create('archive', [
            'project_id' => 1,
            'archive_name' => 'test',
            'resource_count' => 1,
        ], [
            'resources' => []
        ]);

        $result = $this->processor->process($task);
        $this->assertTrue($result->isFailure());
        $this->assertStringContainsString('No resources found', $result->getMessage());
    }

    public function testSuccessfulArchiveMarksMetadataCompleted(): void
    {
        $task = Task::create('archive', [
            'project_id' => 1,
            'archive_name' => 'test',
            'resource_count' => 1,
        ], [
            'resources' => [
                [
                    'record_id' => '1',
                    'mrn' => 'MRN1',
                    'metadata' => [
                        'resource_name' => 'Patient',
                        'edoc_id' => 1,
                        'repeat_instance' => 1
                    ]
                ]
            ],
            'archive_id' => 'archive_123'
        ]);

        // Return a minimal ArchiveInfo
        $archiveInfo = new ArchiveInfo(
            archiveId: 'archive_123',
            filePath: sys_get_temp_dir() . '/test.zip',
            fileName: 'test.zip',
            fileSize: 10,
            totalResources: 1,
            successfulFiles: 1,
            failedFiles: 0
        );

        $this->packager->method('packageResources')->willReturn($archiveInfo);
        $this->metadataService->expects($this->once())
            ->method('markCompleted')
            ->with('archive_123', $archiveInfo->toArray())
            ->willReturn(true);

        $result = $this->processor->process($task);
        $this->assertTrue($result->isSuccess());
    }
}

