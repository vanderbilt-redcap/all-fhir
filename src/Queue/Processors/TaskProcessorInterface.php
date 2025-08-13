<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;

interface TaskProcessorInterface
{
    /**
     * Process a task
     *
     * @param Task $task The task to process
     * @return TaskProcessorResult The result of processing
     */
    public function process(Task $task): TaskProcessorResult;

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