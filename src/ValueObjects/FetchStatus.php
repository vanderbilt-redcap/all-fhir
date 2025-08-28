<?php

namespace FHIR\ValueObjects;

/**
 * Enumeration of possible fetch statuses for FHIR resources
 */
class FetchStatus
{
    public const PENDING = 'Pending';
    public const FETCHING = 'Fetching';
    public const COMPLETED = 'Completed';
    public const FAILED = 'Failed';
    public const OUTDATED = 'Outdated';
    public const DELETED = 'Deleted';

    /**
     * Get all valid status values
     */
    public static function getAll(): array
    {
        return [
            self::PENDING,
            self::FETCHING,
            self::COMPLETED,
            self::FAILED,
            self::OUTDATED,
            self::DELETED
        ];
    }

    /**
     * Check if a status is valid
     */
    public static function isValid(string $status): bool
    {
        return in_array($status, self::getAll(), true);
    }

    /**
     * Get statuses that represent active processing
     */
    public static function getActiveStatuses(): array
    {
        return [
            self::PENDING,
            self::FETCHING
        ];
    }

    /**
     * Get statuses that represent completed processing (success or failure)
     */
    public static function getFinalStatuses(): array
    {
        return [
            self::COMPLETED,
            self::FAILED,
            self::OUTDATED,
            self::DELETED
        ];
    }

    /**
     * Get statuses that represent archivable resources
     */
    public static function getArchivableStatuses(): array
    {
        return [
            self::COMPLETED
        ];
    }

    /**
     * Check if a status is archivable
     */
    public static function isArchivable(string $status): bool
    {
        return in_array($status, self::getArchivableStatuses(), true);
    }

    /**
     * Check if a status represents active processing
     */
    public static function isActive(string $status): bool
    {
        return in_array($status, self::getActiveStatuses(), true);
    }

    /**
     * Check if a status represents final state
     */
    public static function isFinal(string $status): bool
    {
        return in_array($status, self::getFinalStatuses(), true);
    }
}