<?php

namespace FHIR\Services;

use FHIR\ValueObjects\StatusDistribution;
use FHIR\ValueObjects\MrnStatusSummary;
use FHIR\ValueObjects\FetchStatus;

/**
 * Service for calculating MRN status summaries and distributions
 * 
 * Encapsulates the business logic for determining overall MRN status,
 * calculating resource distributions, and determining archivability.
 */
class MrnStatusCalculator
{
    /**
     * Calculate complete status summary for an MRN
     * 
     * @param array $resources Array of resource data with status information
     * @return MrnStatusSummary Complete status summary
     */
    public function calculateStatusSummary(array $resources): MrnStatusSummary
    {
        $distribution = new StatusDistribution($resources);
        $hasArchivableResources = $distribution->hasCompletedResources();
        $resourceTypeStatuses = $this->getResourceTypeAvailability($resources);

        return new MrnStatusSummary(
            $distribution,
            $hasArchivableResources,
            $resourceTypeStatuses
        );
    }


    /**
     * Get resource type availability for archive operations
     * 
     * @param array $resources Array of resource data
     * @return array Resource types with their availability status
     */
    public function getResourceTypeAvailability(array $resources): array
    {
        $resourceTypes = [];

        // Filter out deleted resources
        $activeResources = array_filter($resources, fn($resource) => 
            $resource['status'] !== FetchStatus::DELETED
        );

        foreach ($activeResources as $resource) {
            $resourceType = $resource['name'] ?? $resource['resource_type'] ?? 'Unknown';
            $status = $resource['status'];

            if (!isset($resourceTypes[$resourceType])) {
                $resourceTypes[$resourceType] = [
                    'total_count' => 0,
                    'completed_count' => 0,
                    'failed_count' => 0,
                    'pending_count' => 0,
                    'fetching_count' => 0,
                    'outdated_count' => 0,
                    'has_completed' => false,
                    'completion_percentage' => 0.0,
                    'is_archivable' => false
                ];
            }

            $resourceTypes[$resourceType]['total_count']++;

            switch ($status) {
                case FetchStatus::COMPLETED:
                    $resourceTypes[$resourceType]['completed_count']++;
                    $resourceTypes[$resourceType]['has_completed'] = true;
                    $resourceTypes[$resourceType]['is_archivable'] = true;
                    break;
                case FetchStatus::FAILED:
                    $resourceTypes[$resourceType]['failed_count']++;
                    break;
                case FetchStatus::PENDING:
                    $resourceTypes[$resourceType]['pending_count']++;
                    break;
                case FetchStatus::FETCHING:
                    $resourceTypes[$resourceType]['fetching_count']++;
                    break;
                case FetchStatus::OUTDATED:
                    $resourceTypes[$resourceType]['outdated_count']++;
                    break;
            }
        }

        // Calculate completion percentages
        foreach ($resourceTypes as $type => $data) {
            if ($data['total_count'] > 0) {
                $resourceTypes[$type]['completion_percentage'] = 
                    ($data['completed_count'] / $data['total_count']) * 100;
            }
        }

        return $resourceTypes;
    }

    /**
     * Calculate status priority for determining dominant status
     * 
     * @param string $status
     * @return int Priority value (higher = more important)
     */
    private function getStatusPriority(string $status): int
    {
        return match ($status) {
            FetchStatus::FAILED => 5,      // Failures are most important
            FetchStatus::FETCHING => 4,    // Active processing
            FetchStatus::COMPLETED => 3,   // Success
            FetchStatus::PENDING => 2,     // Waiting
            FetchStatus::OUTDATED => 1,    // Outdated data
            default => 0                   // Unknown/other
        };
    }

    /**
     * Check if an MRN is ready for archiving
     * 
     * @param array $resources Resource array
     * @return bool True if any resources are archivable
     */
    public function isArchivable(array $resources): bool
    {
        foreach ($resources as $resource) {
            if ($resource['status'] === FetchStatus::COMPLETED) {
                return true;
            }
        }
        
        return false;
    }

    /**
     * Get archivable resource count
     * 
     * @param array $resources Resource array
     * @return int Number of archivable resources
     */
    public function getArchivableCount(array $resources): int
    {
        return count(array_filter($resources, fn($resource) => 
            $resource['status'] === FetchStatus::COMPLETED
        ));
    }

    /**
     * Calculate batch status summary for multiple MRNs
     * 
     * @param array $mrns Array of MRN data with resources
     * @return array Array of status summaries indexed by MRN
     */
    public function calculateBatchStatusSummaries(array $mrns): array
    {
        $summaries = [];
        
        foreach ($mrns as $mrn) {
            $mrnId = $mrn['mrn'] ?? $mrn['id'] ?? null;
            if ($mrnId && isset($mrn['resources'])) {
                $summaries[$mrnId] = $this->calculateStatusSummary($mrn['resources']);
            }
        }
        
        return $summaries;
    }

    /**
     * Get project-wide status statistics
     * 
     * @param array $mrns Array of all MRNs with resources
     * @return array Project statistics
     */
    public function getProjectStatistics(array $mrns): array
    {
        $totalMrns = count($mrns);
        $totalResources = 0;
        $overallDistribution = [];
        $archivableMrns = 0;
        $fullyCompletedMrns = 0;

        foreach ($mrns as $mrn) {
            if (!isset($mrn['resources'])) continue;

            $summary = $this->calculateStatusSummary($mrn['resources']);
            $distribution = $summary->getDistribution();
            
            $totalResources += $distribution->getTotalResources();
            
            if ($summary->hasArchivableResources()) {
                $archivableMrns++;
            }
            
            if ($distribution->isFullyCompleted()) {
                $fullyCompletedMrns++;
            }

            // Aggregate distribution
            foreach ($distribution->getDistribution() as $status => $count) {
                $overallDistribution[$status] = ($overallDistribution[$status] ?? 0) + $count;
            }
        }

        return [
            'total_mrns' => $totalMrns,
            'total_resources' => $totalResources,
            'archivable_mrns' => $archivableMrns,
            'fully_completed_mrns' => $fullyCompletedMrns,
            'overall_distribution' => $overallDistribution,
            'completion_rate' => $totalMrns > 0 ? ($fullyCompletedMrns / $totalMrns) * 100 : 0
        ];
    }
}