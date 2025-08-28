<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

/**
 * SyncResults Value Object
 * 
 * Represents the results of a full synchronization operation, including statistics
 * about instances created and cleaned up, along with detailed comparison data.
 */
class SyncResults
{
    public function __construct(
        private int $createdInstances,
        private int $cleanedInstances, 
        private array $comparison
    ) {}

    /**
     * Create SyncResults from comparison data and counters
     */
    public static function create(array $comparison, int $createdInstances = 0, int $cleanedInstances = 0): self
    {
        return new self($createdInstances, $cleanedInstances, $comparison);
    }

    /**
     * Get the number of instances created during sync
     */
    public function getCreatedInstances(): int
    {
        return $this->createdInstances;
    }

    /**
     * Get the number of orphaned instances cleaned up during sync
     */
    public function getCleanedInstances(): int
    {
        return $this->cleanedInstances;
    }

    /**
     * Get the detailed comparison data
     * Contains: missing_instances, orphaned_instances, etc.
     */
    public function getComparison(): array
    {
        return $this->comparison;
    }

    /**
     * Get missing instances from comparison data
     */
    public function getMissingInstances(): array
    {
        return $this->comparison['missing_instances'] ?? [];
    }

    /**
     * Get orphaned instances from comparison data
     */
    public function getOrphanedInstances(): array
    {
        return $this->comparison['orphaned_instances'] ?? [];
    }

    /**
     * Update the created instances count
     */
    public function setCreatedInstances(int $count): void
    {
        $this->createdInstances = $count;
    }

    /**
     * Update the cleaned instances count
     */
    public function setCleanedInstances(int $count): void
    {
        $this->cleanedInstances = $count;
    }

    /**
     * Convert to array format for API responses
     */
    public function toArray(): array
    {
        return [
            'created_instances' => $this->createdInstances,
            'cleaned_instances' => $this->cleanedInstances,
            'comparison' => $this->comparison
        ];
    }

    /**
     * Generate a human-readable summary message
     */
    public function getSummaryMessage(): string
    {
        return "Full sync completed. Created {$this->createdInstances} missing instances " .
               "and cleaned {$this->cleanedInstances} orphaned instances.";
    }

    /**
     * Get statistics array for API response
     */
    public function getStatistics(): array
    {
        return [
            'missing_instances_created' => $this->createdInstances,
            'orphaned_instances_cleaned' => $this->cleanedInstances
        ];
    }
}