<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\REDCap\Classes\SystemMonitors\ResourceMonitor;

/**
 * ResourceFetcher
 * 
 * Flexible service for processing FHIR resources with configurable status filtering while monitoring 
 * system resources and providing detailed processing statistics.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Processes FHIR resources in the current project context with flexible status filtering
 * - Monitors system resources (memory, CPU, time) to prevent system overload
 * - Provides comprehensive processing statistics and error reporting
 * - Handles graceful stopping when resource limits are approached
 * - Integrates with existing resource fetching infrastructure
 * - Operates independently from the task queue system
 * 
 * CORE FEATURES:
 * 
 * FLEXIBLE RESOURCE DISCOVERY:
 * - Generic getResources() method with include/exclude status filters
 * - Convenience methods for common operations (getPendingResources, etc.)
 * - Fast pre-check methods (hasPendingResources) for optimization
 * - Support for all FhirResourceMetadata statuses with validation
 * 
 * RESOURCE MONITORING & LIMITS:
 * - Uses ResourceMonitor to check memory, CPU, and execution time
 * - Stops processing gracefully when limits are approached
 * - Provides resource status information in processing results
 * - Prevents system overload through proactive monitoring
 * 
 * PROCESSING COORDINATION:
 * - Leverages RepeatedFormResourceManager for actual resource fetching
 * - Maintains processing context and error handling
 * - Provides real-time processing feedback through logging
 * - Handles exceptions gracefully without stopping entire operation
 * 
 * STATISTICS & REPORTING:
 * - Tracks processed count, success count, and failure count
 * - Records processing times for performance analysis
 * - Provides detailed error information for troubleshooting
 * - Reports resource status and system health metrics
 * 
 * USAGE PATTERNS:
 * 
 * FLEXIBLE RESOURCE DISCOVERY:
 * ```php
 * $fetcher = $container->get(ResourceFetcher::class);
 * $allResources = $fetcher->getResources(); // Get all resources
 * $pendingOnly = $fetcher->getResources(['pending']); // Get only pending
 * $pendingAndFailed = $fetcher->getResources(['pending', 'failed']); // Multiple statuses
 * $allButCompleted = $fetcher->getResources(null, ['completed']); // Exclude completed
 * $pendingConvenience = $fetcher->getPendingResources(); // Convenience method
 * ```
 * 
 * PRE-CHECK OPTIMIZATION:
 * ```php
 * if ($fetcher->hasPendingResources()) {
 *     $pendingResources = $fetcher->getPendingResources();
 *     $result = $fetcher->processResources($pendingResources);
 * }
 * ```
 * 
 * PROCESSING WITH CUSTOM FILTERS:
 * ```php
 * $failedResources = $fetcher->getResources(['failed']);
 * $result = $fetcher->processResources($failedResources);
 * ```
 * 
 * INTEGRATION POINTS:
 * - RepeatedFormDataAccessor: For discovering resources by status
 * - RepeatedFormResourceManager: For actual resource fetching
 * - ResourceMonitor: For system resource monitoring
 * - FhirSnapshot: For logging and project context
 * 
 * ERROR HANDLING:
 * - Individual resource failures don't stop processing
 * - Comprehensive error logging with context information
 * - Graceful degradation when system limits are reached
 * - Detailed error reporting in processing results
 */
class ResourceFetcher
{
    /**
     * Initialize the resource fetcher with required dependencies
     * 
     * @param FhirSnapshot $module Main module instance for logging and project context
     * @param RepeatedFormDataAccessor $dataAccessor Service for accessing REDCap repeated form data
     * @param RepeatedFormResourceManager $resourceManager Service for individual resource fetching operations
     * @param ResourceMonitor $resourceMonitor System resource monitoring service
     */
    public function __construct(
        private FhirSnapshot $module,
        private RepeatedFormDataAccessor $dataAccessor,
        private RepeatedFormResourceManager $resourceManager,
        private ResourceMonitor $resourceMonitor
    ) {
    }

    /**
     * Generic method to get FHIR resources with flexible status filtering
     * 
     * @param array|null $includeStatuses Array of statuses to include (null = all statuses)
     * @param array|null $excludeStatuses Array of statuses to exclude (ignored if includeStatuses is provided)
     * @return array Array of resource arrays with keys: mrn, record_id, metadata
     * @throws \InvalidArgumentException If invalid statuses are provided
     */
    public function getResources(?array $includeStatuses = null, ?array $excludeStatuses = null): array
    {
        // Validate status parameters
        if ($includeStatuses !== null) {
            $this->validateStatuses($includeStatuses, 'includeStatuses');
        }
        if ($excludeStatuses !== null) {
            $this->validateStatuses($excludeStatuses, 'excludeStatuses');
        }
        
        $resources = [];
        $allMrns = $this->dataAccessor->getAllMrns();
        
        foreach ($allMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) continue;
            
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            /** @var FhirResourceMetadata $meta */
            foreach ($allMetadata as $meta) {
                if ($this->shouldIncludeResource($meta, $includeStatuses, $excludeStatuses)) {
                    $resources[] = [
                        'mrn' => $mrn,
                        'record_id' => $recordId,
                        'metadata' => $meta
                    ];
                }
            }
        }
        
        return $resources;
    }

    /**
     * Convenience method to get only pending FHIR resources
     * 
     * @return array Array of pending resource arrays
     */
    public function getPendingResources(): array
    {
        return $this->getResources([FhirResourceMetadata::STATUS_PENDING]);
    }

    /**
     * Fast pre-check method to determine if any pending resources exist
     * 
     * Optimized method that stops at the first pending resource found,
     * useful for avoiding unnecessary processing when no pending resources exist.
     * 
     * @return bool True if at least one pending resource exists
     */
    public function hasPendingResources(): bool
    {
        $allMrns = $this->dataAccessor->getAllMrns();
        
        foreach ($allMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) continue;
            
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            /** @var FhirResourceMetadata $meta */
            foreach ($allMetadata as $meta) {
                if ($meta->isPending()) {
                    return true; // Found at least one pending resource
                }
            }
        }
        
        return false; // No pending resources found
    }

    /**
     * Process a pre-filtered list of FHIR resources
     * 
     * Processes the provided resources individually while monitoring system resources
     * to prevent overload. This method accepts pre-filtered resources, allowing for
     * flexible processing workflows.
     * 
     * @param array $resources Pre-filtered array of resources to process
     * @return ResourceFetcherResult Comprehensive processing results and statistics
     */
    public function processResources(array $resources): ResourceFetcherResult
    {
        $startTime = microtime(true);
        $result = new ResourceFetcherResult();
        
        $this->logInfo("Starting resource processing for " . count($resources) . " resources");
        
        try {
            if (empty($resources)) {
                $this->logInfo("No resources provided for processing");
                return $result->finalize($startTime, $this->getResourceStatus());
            }
            
            // Process each resource while monitoring system resources
            foreach ($resources as $resource) {
                $resourceStartTime = microtime(true);
                
                // Check resource limits before processing each resource
                if (!$this->resourceMonitor->checkResources()) {
                    $this->logInfo("Resource limits reached, stopping processing gracefully");
                    $result->setStoppedDueToResources(true);
                    break;
                }
                
                try {
                    $fetchResult = $this->resourceManager->fetchSingleResourceRealTime($resource);
                    
                    $resourceTime = microtime(true) - $resourceStartTime;
                    $result->addProcessingTime($resourceTime);
                    
                    if ($fetchResult['success']) {
                        $result->recordSuccess(
                            $fetchResult['payload_size'] ?? 0,
                            $fetchResult['api_time'] ?? 0
                        );
                    } else {
                        $result->recordFailure(
                            $fetchResult['error'] ?? 'Unknown error',
                            $resource['mrn'] ?? 'Unknown'
                        );
                    }
                    
                } catch (\Exception $e) {
                    $this->logError("Exception processing resource: " . $e->getMessage());
                    $result->recordFailure(
                        $e->getMessage(),
                        $resource['mrn'] ?? 'Unknown'
                    );
                }
                
                $result->incrementProcessedCount();
            }
            
        } catch (\Exception $e) {
            $this->logError("Exception during resource processing: " . $e->getMessage());
            $result->setException($e);
        }
        
        $finalResult = $result->finalize($startTime, $this->getResourceStatus());
        $this->logProcessingSummary($finalResult);
        
        return $finalResult;
    }

    /**
     * Backward compatibility method for processing pending resources
     * 
     * @return ResourceFetcherResult Comprehensive processing results and statistics
     */
    public function processPendingResources(): ResourceFetcherResult
    {
        $pendingResources = $this->getPendingResources();
        return $this->processResources($pendingResources);
    }

    /**
     * Validate that provided statuses are valid FhirResourceMetadata statuses
     * 
     * @param array $statuses Array of status strings to validate
     * @param string $parameterName Name of the parameter for error messaging
     * @throws \InvalidArgumentException If any status is invalid
     */
    private function validateStatuses(array $statuses, string $parameterName): void
    {
        $validStatuses = [
            FhirResourceMetadata::STATUS_PENDING,
            FhirResourceMetadata::STATUS_FETCHING,
            FhirResourceMetadata::STATUS_COMPLETED,
            FhirResourceMetadata::STATUS_FAILED,
            FhirResourceMetadata::STATUS_OUTDATED,
            FhirResourceMetadata::STATUS_DELETED
        ];
        
        foreach ($statuses as $status) {
            if (!in_array($status, $validStatuses, true)) {
                throw new \InvalidArgumentException(
                    "Invalid status '{$status}' in {$parameterName}. Valid statuses: " . 
                    implode(', ', $validStatuses)
                );
            }
        }
    }

    /**
     * Determine if a resource should be included based on status filters
     * 
     * @param FhirResourceMetadata $metadata Resource metadata to check
     * @param array|null $includeStatuses Statuses to include (takes precedence)
     * @param array|null $excludeStatuses Statuses to exclude
     * @return bool True if resource should be included
     */
    private function shouldIncludeResource(
        FhirResourceMetadata $metadata, 
        ?array $includeStatuses, 
        ?array $excludeStatuses
    ): bool {
        $resourceStatus = $metadata->getStatus();
        
        // If includeStatuses is provided, only include resources with those statuses
        if ($includeStatuses !== null) {
            return in_array($resourceStatus, $includeStatuses, true);
        }
        
        // If excludeStatuses is provided, exclude resources with those statuses
        if ($excludeStatuses !== null) {
            return !in_array($resourceStatus, $excludeStatuses, true);
        }
        
        // If no filters, include all resources
        return true;
    }

    /**
     * Get current resource monitor status information
     * 
     * @return array Resource status information from the monitor
     */
    private function getResourceStatus(): array
    {
        return $this->resourceMonitor->getStatus();
    }

    /**
     * Log comprehensive processing summary
     * 
     * @param ResourceFetcherResult $result Processing results to log
     */
    private function logProcessingSummary(ResourceFetcherResult $result): void
    {
        $summary = [
            'total_processed' => $result->getProcessedCount(),
            'successful' => $result->getSuccessCount(),
            'failed' => $result->getFailCount(),
            'stopped_due_to_resources' => $result->wasStoppedDueToResources(),
            'processing_time_seconds' => round($result->getProcessingTime(), 2),
            'average_resource_time' => round($result->getAverageProcessingTime(), 3),
            'memory_status' => $this->resourceMonitor->getMemoryMonitor()->isMemoryStatusHealthy() ? 'healthy' : 'exceeded',
            'time_status' => $this->resourceMonitor->getTimeMonitor()->withinThreshold() ? 'within_threshold' : 'exceeded'
        ];

        $this->logInfo("Resource processing completed: " . json_encode($summary));
        
        if (!empty($result->getFailures())) {
            $this->logInfo("Failed resources: " . json_encode($result->getFailures()));
        }
    }

    /**
     * Log informational message
     * 
     * @param string $message Message to log
     */
    private function logInfo(string $message): void
    {
        $this->module->log("[RESOURCE_FETCHER][INFO] $message", []);
    }

    /**
     * Log error message
     * 
     * @param string $message Error message to log
     */
    private function logError(string $message): void
    {
        $this->module->log("[RESOURCE_FETCHER][ERROR] $message", []);
    }
}

/**
 * ResourceFetcherResult
 * 
 * Value object that encapsulates the results and statistics from resource processing.
 * Provides comprehensive information about the processing operation including success/failure
 * counts, timing information, resource status, and error details.
 */
class ResourceFetcherResult
{
    private int $processedCount = 0;
    private int $successCount = 0;
    private int $failCount = 0;
    private array $failures = [];
    private array $processingTimes = [];
    private array $apiTimes = [];
    private array $payloadSizes = [];
    private bool $stoppedDueToResources = false;
    private ?float $startTime = null;
    private ?float $endTime = null;
    private ?array $resourceStatus = null;
    private ?\Exception $exception = null;

    /**
     * Record a successful resource processing operation
     * 
     * @param int $payloadSize Size of the fetched resource payload
     * @param float $apiTime Time spent in API call
     */
    public function recordSuccess(int $payloadSize, float $apiTime): void
    {
        $this->successCount++;
        $this->payloadSizes[] = $payloadSize;
        $this->apiTimes[] = $apiTime;
    }

    /**
     * Record a failed resource processing operation
     * 
     * @param string $error Error message describing the failure
     * @param string $mrn MRN of the failed resource
     */
    public function recordFailure(string $error, string $mrn): void
    {
        $this->failCount++;
        $this->failures[] = [
            'mrn' => $mrn,
            'error' => $error,
            'timestamp' => date('Y-m-d H:i:s')
        ];
    }

    /**
     * Add processing time for a single resource
     * 
     * @param float $time Processing time in seconds
     */
    public function addProcessingTime(float $time): void
    {
        $this->processingTimes[] = $time;
    }

    /**
     * Increment the total processed count
     */
    public function incrementProcessedCount(): void
    {
        $this->processedCount++;
    }

    /**
     * Mark processing as stopped due to resource constraints
     * 
     * @param bool $stopped Whether processing was stopped due to resources
     */
    public function setStoppedDueToResources(bool $stopped): void
    {
        $this->stoppedDueToResources = $stopped;
    }

    /**
     * Set an exception that occurred during processing
     * 
     * @param \Exception $exception Exception that occurred
     */
    public function setException(\Exception $exception): void
    {
        $this->exception = $exception;
    }

    /**
     * Finalize the result with timing and resource status information
     * 
     * @param float $startTime Processing start time (from microtime(true))
     * @param array $resourceStatus Resource monitor status information
     * @return self Returns this instance for method chaining
     */
    public function finalize(float $startTime, array $resourceStatus): self
    {
        $this->startTime = $startTime;
        $this->endTime = microtime(true);
        $this->resourceStatus = $resourceStatus;
        return $this;
    }

    // Getter methods for accessing result data

    public function getProcessedCount(): int
    {
        return $this->processedCount;
    }

    public function getSuccessCount(): int
    {
        return $this->successCount;
    }

    public function getFailCount(): int
    {
        return $this->failCount;
    }

    public function getFailures(): array
    {
        return $this->failures;
    }

    public function wasStoppedDueToResources(): bool
    {
        return $this->stoppedDueToResources;
    }

    public function getProcessingTime(): float
    {
        return $this->endTime ? ($this->endTime - $this->startTime) : 0.0;
    }

    public function getAverageProcessingTime(): float
    {
        return empty($this->processingTimes) ? 0.0 : array_sum($this->processingTimes) / count($this->processingTimes);
    }

    public function getAverageApiTime(): float
    {
        return empty($this->apiTimes) ? 0.0 : array_sum($this->apiTimes) / count($this->apiTimes);
    }

    public function getTotalPayloadSize(): int
    {
        return array_sum($this->payloadSizes);
    }

    public function getResourceStatus(): ?array
    {
        return $this->resourceStatus;
    }

    public function hasException(): bool
    {
        return $this->exception !== null;
    }

    public function getException(): ?\Exception
    {
        return $this->exception;
    }

    /**
     * Convert result to array format for logging and serialization
     * 
     * @return array Comprehensive result data
     */
    public function toArray(): array
    {
        return [
            'processed_count' => $this->processedCount,
            'success_count' => $this->successCount,
            'fail_count' => $this->failCount,
            'stopped_due_to_resources' => $this->stoppedDueToResources,
            'processing_time' => $this->getProcessingTime(),
            'average_processing_time' => $this->getAverageProcessingTime(),
            'average_api_time' => $this->getAverageApiTime(),
            'total_payload_size' => $this->getTotalPayloadSize(),
            'failures' => $this->failures,
            'resource_status' => $this->resourceStatus,
            'has_exception' => $this->hasException(),
            'exception_message' => $this->exception?->getMessage()
        ];
    }
}