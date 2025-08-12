<?php

namespace Tests\Unit\Queue;

use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use Vanderbilt\FhirSnapshot\Queue\QueueProcessor;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\Queue\Task;
use Vanderbilt\FhirSnapshot\Queue\Processors\TaskProcessorInterface;
use Vanderbilt\FhirSnapshot\Queue\Processors\TaskProcessorResult;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\REDCap\Classes\SystemMonitors\ResourceMonitor;
use Vanderbilt\REDCap\Classes\SystemMonitors\MemoryMonitor;
use Vanderbilt\REDCap\Classes\SystemMonitors\TimeMonitor;

class QueueProcessorTest extends TestCase
{
    private QueueProcessor $queueProcessor;
    private MockObject $mockModule;
    private MockObject $mockQueueManager;
    private MockObject $mockResourceMonitor;
    private MockObject $mockMemoryMonitor;
    private MockObject $mockTimeMonitor;

    protected function setUp(): void
    {
        $this->mockModule = $this->createMock(FhirSnapshot::class);
        $this->mockQueueManager = $this->createMock(QueueManager::class);
        $this->mockResourceMonitor = $this->createMock(ResourceMonitor::class);
        $this->mockMemoryMonitor = $this->createMock(MemoryMonitor::class);
        $this->mockTimeMonitor = $this->createMock(TimeMonitor::class);

        $this->mockResourceMonitor->method('getMemoryMonitor')
            ->willReturn($this->mockMemoryMonitor);
        $this->mockResourceMonitor->method('getTimeMonitor')
            ->willReturn($this->mockTimeMonitor);

        $this->queueProcessor = new QueueProcessor(
            $this->mockModule,
            $this->mockQueueManager,
            $this->mockResourceMonitor
        );
    }

    public function testProcessWithNoTasks(): void
    {
        $this->mockResourceMonitor->expects($this->once())
            ->method('checkResources')
            ->willReturn(true);

        $this->mockQueueManager->expects($this->once())
            ->method('getNextPendingTask')
            ->willReturn(null);

        $this->mockModule->expects($this->atLeastOnce())
            ->method('logToFile')
            ->withConsecutive(
                [$this->stringContains('Starting queue processing')],
                [$this->stringContains('No pending tasks found')],
                [$this->stringContains('Queue processing completed')]
            );

        $this->mockMemoryMonitor->method('isMemoryStatusHealthy')
            ->willReturn(true);
        $this->mockTimeMonitor->method('withinThreshold')
            ->willReturn(true);

        $result = $this->queueProcessor->process();

        $this->assertEquals(0, $result->getTasksProcessed());
        $this->assertFalse($result->wasStoppedDueToResources());
        $this->assertFalse($result->hasException());
    }

    public function testProcessWithResourceConstraints(): void
    {
        $this->mockResourceMonitor->expects($this->once())
            ->method('checkResources')
            ->willReturn(false);

        $this->mockResourceMonitor->expects($this->once())
            ->method('getStatus')
            ->willReturn(['memory' => 'Exceeded', 'time' => 'OK']);

        $this->mockQueueManager->expects($this->never())
            ->method('getNextPendingTask');

        $this->mockModule->expects($this->atLeastOnce())
            ->method('logToFile')
            ->withConsecutive(
                [$this->stringContains('Starting queue processing')],
                [$this->stringContains('Stopping queue processing due to resource constraints')],
                [$this->stringContains('Queue processing completed')]
            );

        $result = $this->queueProcessor->process();

        $this->assertEquals(0, $result->getTasksProcessed());
        $this->assertTrue($result->wasStoppedDueToResources());
    }

    public function testProcessTaskSuccessfully(): void
    {
        $task = Task::create('test_processor', ['param' => 'value']);
        $mockProcessor = $this->createMock(TaskProcessorInterface::class);
        $processorResult = TaskProcessorResult::success('Task completed');

        // Register the mock processor
        $mockProcessor->method('getTaskKey')->willReturn('test_processor');
        $mockProcessor->method('canProcess')->willReturn(true);
        $mockProcessor->method('process')->willReturn($processorResult);
        
        $this->queueProcessor->registerProcessor($mockProcessor);

        $this->mockResourceMonitor->expects($this->exactly(2))
            ->method('checkResources')
            ->willReturn(true, false); // First check passes, second fails to stop processing

        $this->mockResourceMonitor->expects($this->once())
            ->method('getStatus')
            ->willReturn(['memory' => 'OK', 'time' => 'Exceeded']);

        $this->mockQueueManager->expects($this->once())
            ->method('getNextPendingTask')
            ->willReturn($task);

        $this->mockQueueManager->expects($this->exactly(2))
            ->method('updateTaskStatus')
            ->withConsecutive(
                [$task->getId(), Task::STATUS_PROCESSING],
                [$task->getId(), Task::STATUS_COMPLETED]
            );

        $this->mockQueueManager->expects($this->once())
            ->method('updateTaskMetadata')
            ->with($task->getId(), $this->callback(function($metadata) {
                $this->assertArrayHasKey('processed_at', $metadata);
                $this->assertArrayHasKey('result', $metadata);
                $this->assertTrue($metadata['result']['success']);
                return true;
            }));

        $result = $this->queueProcessor->process();

        $this->assertEquals(1, $result->getTasksProcessed());
        $this->assertEquals(1, $result->getSuccessfulTasks());
        $this->assertEquals(0, $result->getFailedTasks());
        $this->assertTrue($result->wasStoppedDueToResources());
    }

    public function testProcessTaskWithFailure(): void
    {
        $task = Task::create('test_processor', ['param' => 'value']);
        $mockProcessor = $this->createMock(TaskProcessorInterface::class);
        $processorResult = TaskProcessorResult::failure('Task failed');

        $mockProcessor->method('getTaskKey')->willReturn('test_processor');
        $mockProcessor->method('canProcess')->willReturn(true);
        $mockProcessor->method('process')->willReturn($processorResult);
        
        $this->queueProcessor->registerProcessor($mockProcessor);

        $this->mockResourceMonitor->expects($this->exactly(2))
            ->method('checkResources')
            ->willReturn(true, false);

        $this->mockQueueManager->expects($this->once())
            ->method('getNextPendingTask')
            ->willReturn($task);

        $this->mockQueueManager->expects($this->exactly(2))
            ->method('updateTaskStatus')
            ->withConsecutive(
                [$task->getId(), Task::STATUS_PROCESSING],
                [$task->getId(), Task::STATUS_FAILED]
            );

        $result = $this->queueProcessor->process();

        $this->assertEquals(1, $result->getTasksProcessed());
        $this->assertEquals(0, $result->getSuccessfulTasks());
        $this->assertEquals(1, $result->getFailedTasks());
    }

    public function testProcessTaskWithNoProcessor(): void
    {
        $task = Task::create('unknown_processor', ['param' => 'value']);

        $this->mockResourceMonitor->expects($this->exactly(2))
            ->method('checkResources')
            ->willReturn(true, false);

        $this->mockQueueManager->expects($this->once())
            ->method('getNextPendingTask')
            ->willReturn($task);

        $this->mockQueueManager->expects($this->exactly(2))
            ->method('updateTaskStatus')
            ->withConsecutive(
                [$task->getId(), Task::STATUS_PROCESSING],
                [$task->getId(), Task::STATUS_FAILED]
            );

        $result = $this->queueProcessor->process();

        $this->assertEquals(1, $result->getTasksProcessed());
        $this->assertEquals(0, $result->getSuccessfulTasks());
        $this->assertEquals(1, $result->getFailedTasks());
    }

    public function testProcessTaskWithException(): void
    {
        $task = Task::create('test_processor', ['param' => 'value']);
        $mockProcessor = $this->createMock(TaskProcessorInterface::class);

        $mockProcessor->method('getTaskKey')->willReturn('test_processor');
        $mockProcessor->method('canProcess')->willReturn(true);
        $mockProcessor->method('process')->willThrowException(new \Exception('Processing error'));
        
        $this->queueProcessor->registerProcessor($mockProcessor);

        $this->mockResourceMonitor->expects($this->exactly(2))
            ->method('checkResources')
            ->willReturn(true, false);

        $this->mockQueueManager->expects($this->once())
            ->method('getNextPendingTask')
            ->willReturn($task);

        $this->mockQueueManager->expects($this->exactly(2))
            ->method('updateTaskStatus')
            ->withConsecutive(
                [$task->getId(), Task::STATUS_PROCESSING],
                [$task->getId(), Task::STATUS_FAILED]
            );

        $result = $this->queueProcessor->process();

        $this->assertEquals(1, $result->getTasksProcessed());
        $this->assertEquals(0, $result->getSuccessfulTasks());
        $this->assertEquals(1, $result->getFailedTasks());
    }

    public function testRegisterProcessor(): void
    {
        $mockProcessor = $this->createMock(TaskProcessorInterface::class);
        $mockProcessor->method('getTaskKey')->willReturn('custom_processor');

        $this->queueProcessor->registerProcessor($mockProcessor);

        $processors = $this->queueProcessor->getRegisteredProcessors();
        $this->assertArrayHasKey('custom_processor', $processors);
        $this->assertSame($mockProcessor, $processors['custom_processor']);
    }

    public function testGetters(): void
    {
        $this->assertSame($this->mockQueueManager, $this->queueProcessor->getQueueManager());
        $this->assertSame($this->mockResourceMonitor, $this->queueProcessor->getResourceMonitor());
        
        $processors = $this->queueProcessor->getRegisteredProcessors();
        $this->assertIsArray($processors);
        
        // Should have default processors registered
        $this->assertArrayHasKey('fhir_fetch', $processors);
        $this->assertArrayHasKey('create_archive', $processors);
        $this->assertArrayHasKey('send_email', $processors);
    }
}