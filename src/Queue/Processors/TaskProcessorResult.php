<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

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