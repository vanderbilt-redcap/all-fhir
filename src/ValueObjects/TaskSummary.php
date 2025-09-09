<?php

namespace Vanderbilt\AllFhir\ValueObjects;

/**
 * TaskSummary
 * 
 * Immutable value object representing a comprehensive summary of FHIR fetch task execution.
 * Provides structured access to execution metrics, processing statistics, performance data,
 * error analysis, and continuation information.
 * 
 * DESIGN PRINCIPLES:
 * - Immutable: All updates return new instances
 * - Type-safe: Strong typing for all properties
 * - Self-validating: Ensures data consistency
 * - Readable: Clear method names and structure
 * - Extensible: Easy to add new metrics
 * 
 * USAGE EXAMPLES:
 * - $summary = TaskSummary::create('trigger_name')
 * - $updated = $summary->recordSuccess($payloadSize, $apiTime)
 * - $updated = $summary->recordFailure($error, $mrn)
 * - $data = $summary->toArray() // For serialization
 */
class TaskSummary
{
    private string $startedAt;
    private ?string $completedAt;
    private float $durationSeconds;
    private string $terminationReason;
    private array $resourceStatus;
    
    private int $totalMrnsProcessed;
    private int $totalMrnsRemaining;
    private int $resourcesCreated;
    private int $resourcesFailed;
    private int $apiCallsMade;
    private float $totalPayloadSizeMb;
    
    private float $avgProcessingTimeSeconds;
    private float $fastestMrnSeconds;
    private float $slowestMrnSeconds;
    private float $apiResponseAvgMs;
    private float $throughputMrnsPerMinute;
    
    private array $errorCounts;
    private array $failedSamples;
    
    private string $trigger;
    
    private bool $nextTaskNeeded;
    private ?string $nextTaskId;
    private float $estimatedRemainingTimeMinutes;

    private function __construct(
        string $startedAt,
        ?string $completedAt,
        float $durationSeconds,
        string $terminationReason,
        array $resourceStatus,
        int $totalMrnsProcessed,
        int $totalMrnsRemaining,
        int $resourcesCreated,
        int $resourcesFailed,
        int $apiCallsMade,
        float $totalPayloadSizeMb,
        float $avgProcessingTimeSeconds,
        float $fastestMrnSeconds,
        float $slowestMrnSeconds,
        float $apiResponseAvgMs,
        float $throughputMrnsPerMinute,
        array $errorCounts,
        array $failedSamples,
        string $trigger,
        bool $nextTaskNeeded,
        ?string $nextTaskId,
        float $estimatedRemainingTimeMinutes
    ) {
        $this->startedAt = $startedAt;
        $this->completedAt = $completedAt;
        $this->durationSeconds = $durationSeconds;
        $this->terminationReason = $terminationReason;
        $this->resourceStatus = $resourceStatus;
        $this->totalMrnsProcessed = $totalMrnsProcessed;
        $this->totalMrnsRemaining = $totalMrnsRemaining;
        $this->resourcesCreated = $resourcesCreated;
        $this->resourcesFailed = $resourcesFailed;
        $this->apiCallsMade = $apiCallsMade;
        $this->totalPayloadSizeMb = $totalPayloadSizeMb;
        $this->avgProcessingTimeSeconds = $avgProcessingTimeSeconds;
        $this->fastestMrnSeconds = $fastestMrnSeconds;
        $this->slowestMrnSeconds = $slowestMrnSeconds;
        $this->apiResponseAvgMs = $apiResponseAvgMs;
        $this->throughputMrnsPerMinute = $throughputMrnsPerMinute;
        $this->errorCounts = $errorCounts;
        $this->failedSamples = $failedSamples;
        $this->trigger = $trigger;
        $this->nextTaskNeeded = $nextTaskNeeded;
        $this->nextTaskId = $nextTaskId;
        $this->estimatedRemainingTimeMinutes = $estimatedRemainingTimeMinutes;
    }

    public static function create(string $trigger): self
    {
        return new self(
            startedAt: date('Y-m-d H:i:s'),
            completedAt: null,
            durationSeconds: 0.0,
            terminationReason: 'completed',
            resourceStatus: [],
            totalMrnsProcessed: 0,
            totalMrnsRemaining: 0,
            resourcesCreated: 0,
            resourcesFailed: 0,
            apiCallsMade: 0,
            totalPayloadSizeMb: 0.0,
            avgProcessingTimeSeconds: 0.0,
            fastestMrnSeconds: PHP_FLOAT_MAX,
            slowestMrnSeconds: 0.0,
            apiResponseAvgMs: 0.0,
            throughputMrnsPerMinute: 0.0,
            errorCounts: [],
            failedSamples: [],
            trigger: $trigger,
            nextTaskNeeded: false,
            nextTaskId: null,
            estimatedRemainingTimeMinutes: 0.0
        );
    }

    public function recordSuccess(float $payloadSizeBytes, float $apiTimeMs): self
    {
        return new self(
            $this->startedAt,
            $this->completedAt,
            $this->durationSeconds,
            $this->terminationReason,
            $this->resourceStatus,
            $this->totalMrnsProcessed,
            $this->totalMrnsRemaining,
            $this->resourcesCreated + 1,
            $this->resourcesFailed,
            $this->apiCallsMade + 1,
            $this->totalPayloadSizeMb + ($payloadSizeBytes / 1024 / 1024),
            $this->avgProcessingTimeSeconds,
            $this->fastestMrnSeconds,
            $this->slowestMrnSeconds,
            $this->apiResponseAvgMs,
            $this->throughputMrnsPerMinute,
            $this->errorCounts,
            $this->failedSamples,
            $this->trigger,
            $this->nextTaskNeeded,
            $this->nextTaskId,
            $this->estimatedRemainingTimeMinutes
        );
    }

    public function recordFailure(string $error, string $mrn): self
    {
        $errorType = $this->categorizeError($error);
        $newErrorCounts = $this->errorCounts;
        $newErrorCounts[$errorType] = ($newErrorCounts[$errorType] ?? 0) + 1;

        $newFailedSamples = $this->failedSamples;
        if (count($newFailedSamples) < 5) {
            $newFailedSamples[] = [
                'mrn' => $mrn,
                'error' => substr($error, 0, 100)
            ];
        }

        return new self(
            $this->startedAt,
            $this->completedAt,
            $this->durationSeconds,
            $this->terminationReason,
            $this->resourceStatus,
            $this->totalMrnsProcessed,
            $this->totalMrnsRemaining,
            $this->resourcesCreated,
            $this->resourcesFailed + 1,
            $this->apiCallsMade,
            $this->totalPayloadSizeMb,
            $this->avgProcessingTimeSeconds,
            $this->fastestMrnSeconds,
            $this->slowestMrnSeconds,
            $this->apiResponseAvgMs,
            $this->throughputMrnsPerMinute,
            $newErrorCounts,
            $newFailedSamples,
            $this->trigger,
            $this->nextTaskNeeded,
            $this->nextTaskId,
            $this->estimatedRemainingTimeMinutes
        );
    }

    public function updateProcessingMetrics(float $resourceTime): self
    {
        return new self(
            $this->startedAt,
            $this->completedAt,
            $this->durationSeconds,
            $this->terminationReason,
            $this->resourceStatus,
            $this->totalMrnsProcessed + 1,
            $this->totalMrnsRemaining,
            $this->resourcesCreated,
            $this->resourcesFailed,
            $this->apiCallsMade,
            $this->totalPayloadSizeMb,
            $this->avgProcessingTimeSeconds,
            min($this->fastestMrnSeconds, $resourceTime),
            max($this->slowestMrnSeconds, $resourceTime),
            $this->apiResponseAvgMs,
            $this->throughputMrnsPerMinute,
            $this->errorCounts,
            $this->failedSamples,
            $this->trigger,
            $this->nextTaskNeeded,
            $this->nextTaskId,
            $this->estimatedRemainingTimeMinutes
        );
    }

    public function finalize(float $startTime, int $remainingResources, array $processingTimes, array $apiTimes, array $resourceStatus = []): self
    {
        $endTime = microtime(true);
        $duration = $endTime - $startTime;
        
        $avgProcessingTime = !empty($processingTimes) ? 
            array_sum($processingTimes) / count($processingTimes) : 0.0;
        
        $throughput = $this->totalMrnsProcessed > 0 && $duration > 0 ? 
            ($this->totalMrnsProcessed / $duration) * 60 : 0.0;
        
        $avgApiResponse = !empty($apiTimes) ? 
            array_sum($apiTimes) / count($apiTimes) : 0.0;

        return new self(
            $this->startedAt,
            date('Y-m-d H:i:s'),
            round($duration, 2),
            $this->terminationReason,
            $resourceStatus,
            $this->totalMrnsProcessed,
            $remainingResources,
            $this->resourcesCreated,
            $this->resourcesFailed,
            $this->apiCallsMade,
            $this->totalPayloadSizeMb,
            round($avgProcessingTime, 3),
            $this->fastestMrnSeconds === PHP_FLOAT_MAX ? 0.0 : $this->fastestMrnSeconds,
            $this->slowestMrnSeconds,
            round($avgApiResponse, 1),
            round($throughput, 1),
            $this->errorCounts,
            $this->failedSamples,
            $this->trigger,
            $this->nextTaskNeeded,
            $this->nextTaskId,
            $this->estimatedRemainingTimeMinutes
        );
    }

    public function withContinuation(bool $needed, ?string $taskId = null, float $estimatedMinutes = 0.0): self
    {
        return new self(
            $this->startedAt,
            $this->completedAt,
            $this->durationSeconds,
            $needed ? 'resource_limit_approached' : $this->terminationReason,
            $this->resourceStatus,
            $this->totalMrnsProcessed,
            $this->totalMrnsRemaining,
            $this->resourcesCreated,
            $this->resourcesFailed,
            $this->apiCallsMade,
            $this->totalPayloadSizeMb,
            $this->avgProcessingTimeSeconds,
            $this->fastestMrnSeconds,
            $this->slowestMrnSeconds,
            $this->apiResponseAvgMs,
            $this->throughputMrnsPerMinute,
            $this->errorCounts,
            $this->failedSamples,
            $this->trigger,
            $needed,
            $taskId,
            $estimatedMinutes
        );
    }

    private function categorizeError(string $error): string
    {
        $error = strtolower($error);
        
        if (strpos($error, 'timeout') !== false || strpos($error, 'timed out') !== false) {
            return 'connection_timeout';
        } elseif (strpos($error, 'authentication') !== false || strpos($error, 'unauthorized') !== false) {
            return 'authentication_failed';
        } elseif (strpos($error, 'break') !== false && strpos($error, 'glass') !== false) {
            return 'break_the_glass_required';
        } elseif (strpos($error, 'not found') !== false || strpos($error, '404') !== false) {
            return 'resource_not_found';
        } elseif (strpos($error, 'connection') !== false) {
            return 'connection_error';
        } else {
            return 'other';
        }
    }

    // Getters for accessing properties
    public function getStartedAt(): string { return $this->startedAt; }
    public function getCompletedAt(): ?string { return $this->completedAt; }
    public function getDurationSeconds(): float { return $this->durationSeconds; }
    public function getTerminationReason(): string { return $this->terminationReason; }
    public function getResourceStatus(): array { return $this->resourceStatus; }
    public function getTotalMrnsProcessed(): int { return $this->totalMrnsProcessed; }
    public function getTotalMrnsRemaining(): int { return $this->totalMrnsRemaining; }
    public function getResourcesCreated(): int { return $this->resourcesCreated; }
    public function getResourcesFailed(): int { return $this->resourcesFailed; }
    public function getApiCallsMade(): int { return $this->apiCallsMade; }
    public function getTotalPayloadSizeMb(): float { return $this->totalPayloadSizeMb; }
    public function getAvgProcessingTimeSeconds(): float { return $this->avgProcessingTimeSeconds; }
    public function getFastestMrnSeconds(): float { return $this->fastestMrnSeconds; }
    public function getSlowestMrnSeconds(): float { return $this->slowestMrnSeconds; }
    public function getApiResponseAvgMs(): float { return $this->apiResponseAvgMs; }
    public function getThroughputMrnsPerMinute(): float { return $this->throughputMrnsPerMinute; }
    public function getErrorCounts(): array { return $this->errorCounts; }
    public function getFailedSamples(): array { return $this->failedSamples; }
    public function getTrigger(): string { return $this->trigger; }
    public function isNextTaskNeeded(): bool { return $this->nextTaskNeeded; }
    public function getNextTaskId(): ?string { return $this->nextTaskId; }
    public function getEstimatedRemainingTimeMinutes(): float { return $this->estimatedRemainingTimeMinutes; }

    /**
     * Convert to array format for backward compatibility with existing UI
     */
    public function toArray(): array
    {
        return [
            'execution' => [
                'started_at' => $this->startedAt,
                'completed_at' => $this->completedAt,
                'duration_seconds' => $this->durationSeconds,
                'termination_reason' => $this->terminationReason,
                'resource_status' => $this->resourceStatus
            ],
            'statistics' => [
                'total_mrns_processed' => $this->totalMrnsProcessed,
                'total_mrns_remaining' => $this->totalMrnsRemaining,
                'resources_created' => $this->resourcesCreated,
                'resources_failed' => $this->resourcesFailed,
                'api_calls_made' => $this->apiCallsMade,
                'total_payload_size_mb' => $this->totalPayloadSizeMb
            ],
            'performance' => [
                'avg_processing_time_seconds' => $this->avgProcessingTimeSeconds,
                'fastest_mrn_seconds' => $this->fastestMrnSeconds,
                'slowest_mrn_seconds' => $this->slowestMrnSeconds,
                'api_response_avg_ms' => $this->apiResponseAvgMs,
                'throughput_mrns_per_minute' => $this->throughputMrnsPerMinute
            ],
            'errors' => $this->errorCounts,
            'failed_samples' => $this->failedSamples,
            'resource_context' => [
                'trigger' => $this->trigger
            ],
            'continuation' => [
                'next_task_needed' => $this->nextTaskNeeded,
                'next_task_id' => $this->nextTaskId,
                'estimated_remaining_time_minutes' => $this->estimatedRemainingTimeMinutes
            ]
        ];
    }
}