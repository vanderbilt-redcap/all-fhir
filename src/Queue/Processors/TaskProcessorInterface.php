<?php

namespace Vanderbilt\AllFhir\Queue\Processors;

use Vanderbilt\AllFhir\ValueObjects\Task;
use Vanderbilt\AllFhir\ValueObjects\TaskProcessorResult;
use Vanderbilt\REDCap\Classes\SystemMonitors\ResourceMonitor;

interface TaskProcessorInterface
{
    /**
     * Process a task
     *
     * @param Task $task The task to process
     * @param ResourceMonitor|null $resourceMonitor Optional resource monitor for tracking time/memory
     * @return TaskProcessorResult The result of processing
     */
    public function process(Task $task, ?ResourceMonitor $resourceMonitor = null): TaskProcessorResult;

    /**
     * Get the task key this processor handles
     *
     * @return string
     */
    public function getTaskKey(): string;

    /**
     * Check if this processor can handle the given task
     *
     * @param Task $task
     * @return bool
     */
    public function canProcess(Task $task): bool;
}