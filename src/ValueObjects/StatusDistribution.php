<?php

namespace FHIR\ValueObjects;

use FHIR\ValueObjects\FetchStatus;

/**
 * Value Object representing the distribution of statuses across resources
 * 
 * Provides methods for calculating status percentages, completion rates,
 * and determining archivable resource availability.
 */
class StatusDistribution
{
    private array $distribution;
    private int $totalResources;
    private int $completedResources;
    private int $archivableResources;
    private float $completionPercentage;

    /**
     * @param array $resources Array of resources with status information
     */
    public function __construct(array $resources)
    {
        $this->calculateDistribution($resources);
    }

    /**
     * Calculate the status distribution from resources array
     */
    private function calculateDistribution(array $resources): void
    {
        $this->distribution = [];
        $nonDeletedResources = array_filter($resources, fn($resource) => 
            $resource['status'] !== FetchStatus::DELETED
        );

        $this->totalResources = count($nonDeletedResources);
        
        foreach ($nonDeletedResources as $resource) {
            $status = $resource['status'];
            $this->distribution[$status] = ($this->distribution[$status] ?? 0) + 1;
        }

        $this->completedResources = $this->distribution[FetchStatus::COMPLETED] ?? 0;
        $this->archivableResources = $this->completedResources;
        $this->completionPercentage = $this->totalResources > 0 
            ? ($this->completedResources / $this->totalResources) * 100 
            : 0;
    }

    /**
     * Get the count of resources for a specific status
     */
    public function getStatusCount(string $status): int
    {
        return $this->distribution[$status] ?? 0;
    }

    /**
     * Get the percentage of resources for a specific status
     */
    public function getStatusPercentage(string $status): float
    {
        if ($this->totalResources === 0) {
            return 0.0;
        }
        
        $count = $this->getStatusCount($status);
        return ($count / $this->totalResources) * 100;
    }

    /**
     * Check if there are any completed resources
     */
    public function hasCompletedResources(): bool
    {
        return $this->completedResources > 0;
    }

    /**
     * Get the number of archivable resources
     */
    public function getArchivableResourceCount(): int
    {
        return $this->archivableResources;
    }

    /**
     * Get the completion percentage (excluding deleted resources)
     */
    public function getCompletionPercentage(): float
    {
        return $this->completionPercentage;
    }

    /**
     * Get the total number of non-deleted resources
     */
    public function getTotalResources(): int
    {
        return $this->totalResources;
    }

    /**
     * Get the full distribution array
     */
    public function getDistribution(): array
    {
        return $this->distribution;
    }

    /**
     * Get all statuses that have at least one resource
     */
    public function getActiveStatuses(): array
    {
        return array_keys(array_filter($this->distribution, fn($count) => $count > 0));
    }

    /**
     * Check if all non-deleted resources are completed
     */
    public function isFullyCompleted(): bool
    {
        return $this->totalResources > 0 && $this->completedResources === $this->totalResources;
    }

    /**
     * Check if resources are in a mixed state
     */
    public function isMixedState(): bool
    {
        return count($this->getActiveStatuses()) > 1;
    }

    /**
     * Get the dominant status (status with highest count)
     */
    public function getDominantStatus(): ?string
    {
        if (empty($this->distribution)) {
            return null;
        }

        return array_key_first(
            array_filter(
                $this->distribution,
                fn($count) => $count === max($this->distribution)
            )
        );
    }

    /**
     * Export as array for API responses
     */
    public function toArray(): array
    {
        $distributionWithPercentages = [];
        
        foreach ($this->distribution as $status => $count) {
            $distributionWithPercentages[$status] = [
                'count' => $count,
                'percentage' => $this->getStatusPercentage($status)
            ];
        }

        return [
            'distribution' => $distributionWithPercentages,
            'total_resources' => $this->totalResources,
            'completed_resources' => $this->completedResources,
            'completion_percentage' => $this->completionPercentage,
            'archivable_resources' => $this->archivableResources,
            'has_completed_resources' => $this->hasCompletedResources(),
            'is_fully_completed' => $this->isFullyCompleted(),
            'is_mixed_state' => $this->isMixedState(),
            'dominant_status' => $this->getDominantStatus()
        ];
    }
}