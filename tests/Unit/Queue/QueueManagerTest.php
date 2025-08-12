<?php

namespace Tests\Unit\Queue;

use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\FhirSnapshot;

class QueueManagerTest extends TestCase
{
    private QueueManager $queueManager;
    private MockObject $mockModule;

    protected function setUp(): void
    {
        $this->mockModule = $this->createMock(FhirSnapshot::class);
        $this->queueManager = new QueueManager($this->mockModule);
    }

    public function testAddTask(): void
    {
        // Mock getProjectSetting to return empty array (no existing tasks)
        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn([]);

        // Mock setProjectSetting to capture the saved tasks
        $this->mockModule->expects($this->once())
            ->method('setProjectSetting')
            ->with('tasks', $this->callback(function($tasks) {
                $this->assertIsArray($tasks);
                $this->assertCount(1, $tasks);
                $this->assertEquals('test_key', $tasks[0]['key']);
                $this->assertEquals(['param' => 'value'], $tasks[0]['params']);
                return true;
            }));

        $task = $this->queueManager->addTask('test_key', ['param' => 'value'], ['meta' => 'data']);

        $this->assertInstanceOf(Task::class, $task);
        $this->assertEquals('test_key', $task->getKey());
        $this->assertEquals(['param' => 'value'], $task->getParams());
        $this->assertEquals(['meta' => 'data'], $task->getMetadata());
    }

    public function testGetTasksWithEmptyQueue(): void
    {
        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn(null);

        $tasks = $this->queueManager->getTasks();

        $this->assertIsArray($tasks);
        $this->assertEmpty($tasks);
    }

    public function testGetTasksWithValidData(): void
    {
        $taskData = [
            [
                'id' => 'task_1',
                'key' => 'fhir_fetch',
                'params' => ['mrn' => '123'],
                'status' => Task::STATUS_PENDING,
                'created_at' => '2023-01-01 10:00:00',
                'updated_at' => '2023-01-01 10:00:00',
                'metadata' => []
            ],
            [
                'id' => 'task_2',
                'key' => 'send_email',
                'params' => ['to' => 'test@example.com'],
                'status' => Task::STATUS_COMPLETED,
                'created_at' => '2023-01-01 11:00:00',
                'updated_at' => '2023-01-01 11:05:00',
                'metadata' => ['attempts' => 1]
            ]
        ];

        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn($taskData);

        $tasks = $this->queueManager->getTasks();

        $this->assertCount(2, $tasks);
        $this->assertInstanceOf(Task::class, $tasks[0]);
        $this->assertEquals('fhir_fetch', $tasks[0]->getKey());
        $this->assertTrue($tasks[0]->isPending());
        $this->assertEquals('send_email', $tasks[1]->getKey());
        $this->assertTrue($tasks[1]->isCompleted());
    }

    public function testGetTasksWithInvalidDataSkipsInvalidTasks(): void
    {
        $taskData = [
            [
                'id' => 'task_1',
                'key' => 'valid_task',
                'params' => [],
                'status' => Task::STATUS_PENDING
            ],
            [
                // Missing required 'key' field
                'id' => 'task_2',
                'params' => []
            ]
        ];

        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn($taskData);

        $this->mockModule->expects($this->once())
            ->method('logToFile')
            ->with($this->stringContains('Invalid task data'));

        $tasks = $this->queueManager->getTasks();

        $this->assertCount(1, $tasks);
        $this->assertEquals('valid_task', $tasks[0]->getKey());
    }

    public function testUpdateTaskStatus(): void
    {
        $existingTask = Task::create('test_key');
        $taskId = $existingTask->getId();

        // Mock getting existing tasks
        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn([$existingTask->toArray()]);

        // Mock saving updated tasks
        $this->mockModule->expects($this->once())
            ->method('setProjectSetting')
            ->with('tasks', $this->callback(function($tasks) {
                $this->assertCount(1, $tasks);
                $this->assertEquals(Task::STATUS_PROCESSING, $tasks[0]['status']);
                return true;
            }));

        $result = $this->queueManager->updateTaskStatus($taskId, Task::STATUS_PROCESSING);

        $this->assertTrue($result);
    }

    public function testUpdateTaskStatusNotFound(): void
    {
        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn([]);

        $this->mockModule->expects($this->never())
            ->method('setProjectSetting');

        $result = $this->queueManager->updateTaskStatus('nonexistent_id', Task::STATUS_PROCESSING);

        $this->assertFalse($result);
    }

    public function testGetNextPendingTask(): void
    {
        $task1 = Task::create('task_1')->withStatus(Task::STATUS_COMPLETED);
        $task2 = Task::create('task_2'); // pending
        $task3 = Task::create('task_3'); // pending

        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn([
                $task1->toArray(),
                $task2->toArray(),
                $task3->toArray()
            ]);

        $nextTask = $this->queueManager->getNextPendingTask();

        $this->assertInstanceOf(Task::class, $nextTask);
        $this->assertEquals($task2->getId(), $nextTask->getId());
        $this->assertTrue($nextTask->isPending());
    }

    public function testGetNextPendingTaskWithNoPendingTasks(): void
    {
        $task1 = Task::create('task_1')->withStatus(Task::STATUS_COMPLETED);
        $task2 = Task::create('task_2')->withStatus(Task::STATUS_FAILED);

        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn([
                $task1->toArray(),
                $task2->toArray()
            ]);

        $nextTask = $this->queueManager->getNextPendingTask();

        $this->assertNull($nextTask);
    }

    public function testGetQueueStatistics(): void
    {
        $tasks = [
            Task::create('task_1'),                                    // pending
            Task::create('task_2'),                                    // pending
            Task::create('task_3')->withStatus(Task::STATUS_PROCESSING), // processing
            Task::create('task_4')->withStatus(Task::STATUS_COMPLETED),  // completed
            Task::create('task_5')->withStatus(Task::STATUS_COMPLETED),  // completed
            Task::create('task_6')->withStatus(Task::STATUS_FAILED),     // failed
        ];

        $taskData = array_map(fn($task) => $task->toArray(), $tasks);

        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn($taskData);

        $stats = $this->queueManager->getQueueStatistics();

        $this->assertEquals(6, $stats['total']);
        $this->assertEquals(2, $stats['pending']);
        $this->assertEquals(1, $stats['processing']);
        $this->assertEquals(2, $stats['completed']);
        $this->assertEquals(1, $stats['failed']);
    }

    public function testRemoveTask(): void
    {
        $task1 = Task::create('task_1');
        $task2 = Task::create('task_2');
        $taskIdToRemove = $task1->getId();

        $this->mockModule->expects($this->once())
            ->method('getProjectSetting')
            ->with('tasks')
            ->willReturn([
                $task1->toArray(),
                $task2->toArray()
            ]);

        $this->mockModule->expects($this->once())
            ->method('setProjectSetting')
            ->with('tasks', $this->callback(function($tasks) use ($task2) {
                $this->assertCount(1, $tasks);
                $this->assertEquals($task2->getId(), $tasks[0]['id']);
                return true;
            }));

        $result = $this->queueManager->removeTask($taskIdToRemove);

        $this->assertTrue($result);
    }

    public function testClearQueue(): void
    {
        $this->mockModule->expects($this->once())
            ->method('removeProjectSetting')
            ->with('tasks');

        $this->queueManager->clearQueue();
    }
}