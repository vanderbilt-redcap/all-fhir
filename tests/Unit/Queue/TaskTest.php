<?php

namespace Tests\Unit\Queue;

use PHPUnit\Framework\TestCase;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use InvalidArgumentException;

class TaskTest extends TestCase
{
    public function testCreateTaskWithValidData(): void
    {
        $task = Task::create('test_key', ['param1' => 'value1'], ['meta1' => 'metavalue1']);

        $this->assertInstanceOf(Task::class, $task);
        $this->assertEquals('test_key', $task->getKey());
        $this->assertEquals(['param1' => 'value1'], $task->getParams());
        $this->assertEquals(['meta1' => 'metavalue1'], $task->getMetadata());
        $this->assertEquals(Task::STATUS_PENDING, $task->getStatus());
        $this->assertTrue($task->isPending());
        $this->assertFalse($task->isProcessing());
        $this->assertFalse($task->isCompleted());
        $this->assertFalse($task->isFailed());
    }

    public function testTaskFromArray(): void
    {
        $data = [
            'id' => 'test_123',
            'key' => 'fhir_fetch',
            'params' => ['mrn' => '12345'],
            'status' => Task::STATUS_PROCESSING,
            'created_at' => '2023-01-01 10:00:00',
            'updated_at' => '2023-01-01 10:05:00',
            'metadata' => ['attempts' => 1]
        ];

        $task = Task::fromArray($data);

        $this->assertEquals('test_123', $task->getId());
        $this->assertEquals('fhir_fetch', $task->getKey());
        $this->assertEquals(['mrn' => '12345'], $task->getParams());
        $this->assertEquals(Task::STATUS_PROCESSING, $task->getStatus());
        $this->assertEquals('2023-01-01 10:00:00', $task->getCreatedAt());
        $this->assertEquals('2023-01-01 10:05:00', $task->getUpdatedAt());
        $this->assertEquals(['attempts' => 1], $task->getMetadata());
        $this->assertTrue($task->isProcessing());
    }

    public function testTaskFromArrayMissingRequiredField(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Missing required field: key');

        Task::fromArray(['id' => 'test_123']);
    }

    public function testWithStatus(): void
    {
        $originalTask = Task::create('test_key');
        sleep(1);
        $updatedTask = $originalTask->withStatus(Task::STATUS_COMPLETED);

        // Original task should remain unchanged
        $this->assertEquals(Task::STATUS_PENDING, $originalTask->getStatus());
        
        // New task should have updated status
        $this->assertEquals(Task::STATUS_COMPLETED, $updatedTask->getStatus());
        $this->assertTrue($updatedTask->isCompleted());
        $this->assertEquals($originalTask->getId(), $updatedTask->getId());
        $this->assertNotEquals($originalTask->getUpdatedAt(), $updatedTask->getUpdatedAt());
    }

    public function testWithInvalidStatus(): void
    {
        $task = Task::create('test_key');
        
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Invalid status "invalid"');
        
        $task->withStatus('invalid');
    }

    public function testWithMetadata(): void
    {
        $originalTask = Task::create('test_key', [], ['initial' => 'value']);
        $updatedTask = $originalTask->withMetadata(['added' => 'metadata']);

        $expectedMetadata = ['initial' => 'value', 'added' => 'metadata'];
        $this->assertEquals($expectedMetadata, $updatedTask->getMetadata());
        $this->assertEquals(['initial' => 'value'], $originalTask->getMetadata());
    }

    public function testToArrayAndJsonSerialize(): void
    {
        $task = Task::create('test_key', ['param' => 'value'], ['meta' => 'data']);
        $array = $task->toArray();

        $this->assertArrayHasKey('id', $array);
        $this->assertArrayHasKey('key', $array);
        $this->assertArrayHasKey('params', $array);
        $this->assertArrayHasKey('status', $array);
        $this->assertArrayHasKey('created_at', $array);
        $this->assertArrayHasKey('updated_at', $array);
        $this->assertArrayHasKey('metadata', $array);

        $this->assertEquals('test_key', $array['key']);
        $this->assertEquals(['param' => 'value'], $array['params']);
        $this->assertEquals(Task::STATUS_PENDING, $array['status']);
        $this->assertEquals(['meta' => 'data'], $array['metadata']);

        // Test JSON serialization
        $jsonArray = $task->jsonSerialize();
        $this->assertEquals($array, $jsonArray);
    }

    public function testEmptyIdValidation(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Task ID cannot be empty');

        new Task('', 'test_key');
    }

    public function testEmptyKeyValidation(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Task key cannot be empty');

        new Task('test_id', '');
    }

    public function testStatusConstants(): void
    {
        $this->assertEquals('pending', Task::STATUS_PENDING);
        $this->assertEquals('processing', Task::STATUS_PROCESSING);
        $this->assertEquals('completed', Task::STATUS_COMPLETED);
        $this->assertEquals('failed', Task::STATUS_FAILED);
    }

    public function testStatusCheckers(): void
    {
        $pendingTask = Task::create('test_key');
        $processingTask = $pendingTask->withStatus(Task::STATUS_PROCESSING);
        $completedTask = $pendingTask->withStatus(Task::STATUS_COMPLETED);
        $failedTask = $pendingTask->withStatus(Task::STATUS_FAILED);

        $this->assertTrue($pendingTask->isPending());
        $this->assertTrue($processingTask->isProcessing());
        $this->assertTrue($completedTask->isCompleted());
        $this->assertTrue($failedTask->isFailed());

        $this->assertFalse($pendingTask->isProcessing());
        $this->assertFalse($processingTask->isCompleted());
        $this->assertFalse($completedTask->isFailed());
        $this->assertFalse($failedTask->isPending());
    }
}