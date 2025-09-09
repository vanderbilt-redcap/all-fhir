<?php

namespace Vanderbilt\AllFhir\ValueObjects;

/**
 * TaskProcessorResult
 * 
 * Immutable value object representing the outcome of task processor execution.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Encapsulates the result of a task processor's execution
 * - Standardizes success/failure reporting across all processors
 * - Provides structured data about task execution outcomes
 * - Enables consistent result handling in the queue processing system
 * - Supports detailed debugging and monitoring information
 * 
 * RESULT COMPONENTS:
 * 
 * SUCCESS (boolean):
 * - Indicates whether the task completed successfully
 * - True = task completed without errors
 * - False = task failed or encountered errors
 * 
 * MESSAGE (string):
 * - Human-readable description of the execution outcome
 * - Success: "Successfully fetched Patient resource for MRN: 12345"
 * - Failure: "Failed to connect to FHIR server: Connection timeout"
 * 
 * DATA (array):
 * - Structured data about the execution results
 * - Success metrics, processed record counts, file IDs, etc.
 * - Error details, stack traces, debugging information
 * - Task-specific outcome data for monitoring and analysis
 * 
 * FACTORY METHODS:
 * 
 * SUCCESS RESULTS:
 * - TaskProcessorResult::success($message, $data)
 * - Used when task completes successfully
 * - Automatically sets success = true
 * 
 * FAILURE RESULTS:
 * - TaskProcessorResult::failure($message, $data)
 * - Used when task encounters errors or fails
 * - Automatically sets success = false
 * 
 * KEY FEATURES:
 * - Immutable design ensuring result consistency
 * - JSON serialization for logging and storage
 * - Standardized interface across all task processors
 * - Rich data payload support for detailed reporting
 * - Type-safe success/failure handling
 * 
 * USAGE BY PROCESSORS:
 * - return TaskProcessorResult::success("Operation completed", ['count' => 5]);
 * - return TaskProcessorResult::failure("Database error", ['error' => $e->getMessage()]);
 * 
 * USAGE BY QUEUE PROCESSOR:
 * - $result = $processor->process($task);
 * - if ($result->isSuccess()) { ... }
 * - $this->logger->info($result->getMessage(), $result->getData());
 * 
 * INTEGRATION:
 * - QueueProcessor uses results to update task status
 * - Logging system captures results for monitoring
 * - Error handling systems process failure results
 * - Monitoring dashboards display success/failure metrics
 */
class TaskProcessorResult
{
    private bool $success;
    private string $message;
    private array $data;

    public function __construct(bool $success, string $message = '', array $data = [])
    {
        $this->success = $success;
        $this->message = $message;
        $this->data = $data;
    }

    public static function success(string $message = 'Task completed successfully', array $data = []): self
    {
        return new self(true, $message, $data);
    }

    public static function failure(string $message = 'Task processing failed', array $data = []): self
    {
        return new self(false, $message, $data);
    }

    public function isSuccess(): bool
    {
        return $this->success;
    }

    public function isFailure(): bool
    {
        return !$this->success;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function getData(): array
    {
        return $this->data;
    }

    public function toArray(): array
    {
        return [
            'success' => $this->success,
            'message' => $this->message,
            'data' => $this->data
        ];
    }
}