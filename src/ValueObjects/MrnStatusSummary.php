<?php

namespace FHIR\ValueObjects;

use FHIR\ValueObjects\StatusDistribution;
use FHIR\ValueObjects\FetchStatus;

/**
 * Value Object representing the complete status summary for an MRN
 * 
 * Encapsulates overall status, detailed distribution, and resource-type-specific
 * information for comprehensive status reporting.
 */
class MrnStatusSummary
{
    private StatusDistribution $distribution;
    private bool $hasArchivableResources;
    private array $resourceTypeStatuses;

    /**
     * @param StatusDistribution $distribution Detailed status distribution
     * @param bool $hasArchivableResources Whether any resources can be archived
     * @param array $resourceTypeStatuses Status breakdown by resource type
     */
    public function __construct(
        StatusDistribution $distribution,
        bool $hasArchivableResources,
        array $resourceTypeStatuses = []
    ) {
        $this->distribution = $distribution;
        $this->hasArchivableResources = $hasArchivableResources;
        $this->resourceTypeStatuses = $resourceTypeStatuses;
    }

    /**
     * Get the overall status from dominant status
     */
    public function getOverallStatus(): string
    {
        return $this->distribution->getDominantStatus() ?? FetchStatus::PENDING;
    }

    /**
     * Get the status distribution
     */
    public function getDistribution(): StatusDistribution
    {
        return $this->distribution;
    }

    /**
     * Check if there are archivable resources
     */
    public function hasArchivableResources(): bool
    {
        return $this->hasArchivableResources;
    }

    /**
     * Get resource type statuses
     */
    public function getResourceTypeStatuses(): array
    {
        return $this->resourceTypeStatuses;
    }

    /**
     * Get status for a specific resource type
     */
    public function getResourceTypeStatus(string $resourceType): ?array
    {
        return $this->resourceTypeStatuses[$resourceType] ?? null;
    }

    /**
     * Get available resource types (those with completed resources)
     */
    public function getAvailableResourceTypes(): array
    {
        return array_keys(array_filter(
            $this->resourceTypeStatuses,
            fn($status) => ($status['completed_count'] ?? 0) > 0
        ));
    }

    /**
     * Get a smart status display text based on distribution
     */
    public function getSmartStatusDisplay(): string
    {
        $completionPercentage = $this->distribution->getCompletionPercentage();
        $totalResources = $this->distribution->getTotalResources();

        if ($totalResources === 0) {
            return 'No Resources';
        }

        if ($this->distribution->isFullyCompleted()) {
            return 'Completed';
        }

        if ($completionPercentage >= 75) {
            return "Mostly Completed ({$completionPercentage}%)";
        }

        if ($completionPercentage >= 25) {
            return "Mixed Progress ({$completionPercentage}%)";
        }

        if ($completionPercentage > 0) {
            return "Starting ({$completionPercentage}%)";
        }

        $dominantStatus = $this->distribution->getDominantStatus();
        return $dominantStatus ?: 'Unknown';
    }

    /**
     * Get archive button configuration
     */
    public function getArchiveButtonConfig(): array
    {
        $completedCount = $this->distribution->getStatusCount(FetchStatus::COMPLETED);
        $totalCount = $this->distribution->getTotalResources();
        $completionPercentage = $this->distribution->getCompletionPercentage();

        if (!$this->hasArchivableResources) {
            return [
                'variant' => 'secondary',
                'disabled' => true,
                'tooltip' => 'No completed resources to archive',
                'text' => 'Archive'
            ];
        }

        if ($this->distribution->isFullyCompleted()) {
            return [
                'variant' => 'success',
                'disabled' => false,
                'tooltip' => "Archive all {$completedCount} completed resources",
                'text' => 'Archive All'
            ];
        }

        return [
            'variant' => 'outline-success',
            'disabled' => false,
            'tooltip' => "Archive {$completedCount} of {$totalCount} completed resources",
            'text' => 'Archive Available'
        ];
    }

    /**
     * Get progress bar configuration
     */
    public function getProgressBarConfig(): array
    {
        $distribution = $this->distribution->getDistribution();
        $total = $this->distribution->getTotalResources();

        $segments = [];
        foreach ($distribution as $status => $count) {
            if ($count > 0) {
                $percentage = ($count / $total) * 100;
                $segments[] = [
                    'status' => $status,
                    'count' => $count,
                    'percentage' => round($percentage, 1),
                    'color' => $this->getStatusColor($status)
                ];
            }
        }

        return [
            'segments' => $segments,
            'completion_percentage' => $this->distribution->getCompletionPercentage(),
            'total_resources' => $total
        ];
    }

    /**
     * Get color for status visualization
     */
    private function getStatusColor(string $status): string
    {
        return match ($status) {
            FetchStatus::COMPLETED => 'success',
            FetchStatus::FAILED => 'danger',
            FetchStatus::FETCHING => 'info',
            FetchStatus::PENDING => 'warning',
            FetchStatus::OUTDATED => 'secondary',
            FetchStatus::DELETED => 'dark',
            default => 'secondary'
        };
    }

    /**
     * Export as array for API responses
     */
    public function toArray(): array
    {
        return [
            'overall_status' => $this->getOverallStatus(),
            'status_distribution' => $this->distribution->toArray(),
            'has_archivable_resources' => $this->hasArchivableResources,
            'resource_type_statuses' => $this->resourceTypeStatuses,
            'smart_status_display' => $this->getSmartStatusDisplay(),
            'archive_button_config' => $this->getArchiveButtonConfig(),
            'progress_bar_config' => $this->getProgressBarConfig(),
            'available_resource_types' => $this->getAvailableResourceTypes()
        ];
    }
}