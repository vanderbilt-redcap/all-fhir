<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Exception;
use Vanderbilt\FhirSnapshot\ValueObjects\TaskProcessorResult;
use Vanderbilt\REDCap\Classes\SystemMonitors\ResourceMonitor;

abstract class AbstractTaskProcessor implements TaskProcessorInterface
{
    protected ?ResourceMonitor $resourceMonitor = null;

    public function __construct(private FhirSnapshot $module) {}

    public function process(Task $task, ?ResourceMonitor $resourceMonitor = null): TaskProcessorResult
    {
        $this->resourceMonitor = $resourceMonitor;
        
        if (!$this->canProcess($task)) {
            return TaskProcessorResult::failure(
                sprintf('Processor %s cannot handle task with key: %s', 
                    static::class, 
                    $task->getKey()
                )
            );
        }

        try {
            $this->logInfo("Starting processing task {$task->getId()} with key '{$task->getKey()}'");
            
            $result = $this->doProcess($task);
            
            if ($result->isSuccess()) {
                $this->logInfo("Successfully processed task {$task->getId()}: {$result->getMessage()}");
            } else {
                $this->logError("Failed to process task {$task->getId()}: {$result->getMessage()}");
            }
            
            return $result;
            
        } catch (Exception $e) {
            $errorMessage = "Exception while processing task {$task->getId()}: " . $e->getMessage();
            $this->logError($errorMessage);
            
            return TaskProcessorResult::failure($errorMessage, [
                'exception' => get_class($e),
                'trace' => $e->getTraceAsString()
            ]);
        }
    }

    public function canProcess(Task $task): bool
    {
        return $task->getKey() === $this->getTaskKey();
    }

    /**
     * Implement the actual task processing logic
     *
     * @param Task $task
     * @return TaskProcessorResult
     */
    abstract protected function doProcess(Task $task): TaskProcessorResult;

    /**
     * Validate task parameters
     *
     * @param Task $task
     * @param array $requiredParams
     * @return TaskProcessorResult|null Returns result if validation fails, null if validation passes
     */
    protected function validateParams(Task $task, array $requiredParams): ?TaskProcessorResult
    {
        $params = $task->getParams();
        $missing = [];

        foreach ($requiredParams as $param) {
            if (!isset($params[$param]) || $params[$param] === '') {
                $missing[] = $param;
            }
        }

        if (!empty($missing)) {
            return TaskProcessorResult::failure(
                sprintf('Missing required parameters: %s', implode(', ', $missing))
            );
        }

        return null;
    }

    /**
     * Check if resources are within acceptable limits
     *
     * @return bool True if resources are OK, false if limits exceeded
     */
    protected function shouldPauseProcessing(): bool
    {
        if ($this->resourceMonitor === null) {
            return false; // No monitoring available
        }
        
        return !$this->resourceMonitor->checkResources();
    }

    /**
     * Get resource monitor status information
     *
     * @return array Status information about resources
     */
    protected function getResourceStatus(): array
    {
        if ($this->resourceMonitor === null) {
            return [];
        }
        
        return $this->resourceMonitor->getStatus();
    }

    protected function logInfo(string $message): void
    {
        $this->module->log("[QUEUE][INFO] $message", []);
    }

    protected function logWarning(string $message): void
    {
        $this->module->log("[QUEUE][WRNING] $message", []);
    }

    protected function logError(string $message): void
    {
        $this->module->log("[QUEUE][ERROR] $message", []);
    }

    protected function logDebug(string $message): void
    {
        $this->module->log("[QUEUE][DEBUG] $message", []);
    }
}