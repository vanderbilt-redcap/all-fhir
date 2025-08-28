<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use InvalidArgumentException;

/**
 * TaskPaginationInfo
 * 
 * Immutable value object representing pagination information for task lists.
 * Provides structured access to pagination parameters and calculations.
 * 
 * DESIGN PRINCIPLES:
 * - Immutable: All updates return new instances
 * - Type-safe: Strong typing for all properties
 * - Self-validating: Ensures data consistency
 * - Readable: Clear method names and structure
 * - Reusable: Can be used across different list endpoints
 */
class TaskPaginationInfo
{
    private int $page;
    private int $limit;
    private int $total;
    private int $totalPages;
    private bool $hasNext;
    private bool $hasPrevious;

    public function __construct(
        int $page,
        int $limit,
        int $total
    ) {
        $this->validatePage($page);
        $this->validateLimit($limit);
        $this->validateTotal($total);

        $this->page = $page;
        $this->limit = $limit;
        $this->total = $total;
        $this->totalPages = $limit > 0 ? (int) ceil($total / $limit) : 0;
        $this->hasNext = $page < $this->totalPages;
        $this->hasPrevious = $page > 1;
    }

    public static function create(int $page = 1, int $limit = 25, int $total = 0): self
    {
        return new self($page, $limit, $total);
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['page'] ?? 1,
            $data['limit'] ?? 25,
            $data['total'] ?? 0
        );
    }

    public function withPage(int $page): self
    {
        return new self($page, $this->limit, $this->total);
    }

    public function withLimit(int $limit): self
    {
        return new self($this->page, $limit, $this->total);
    }

    public function withTotal(int $total): self
    {
        return new self($this->page, $this->limit, $total);
    }

    public function getPage(): int
    {
        return $this->page;
    }

    public function getLimit(): int
    {
        return $this->limit;
    }

    public function getTotal(): int
    {
        return $this->total;
    }

    public function getTotalPages(): int
    {
        return $this->totalPages;
    }

    public function hasNext(): bool
    {
        return $this->hasNext;
    }

    public function hasPrevious(): bool
    {
        return $this->hasPrevious;
    }

    public function getOffset(): int
    {
        return ($this->page - 1) * $this->limit;
    }

    public function getStartItem(): int
    {
        return $this->total === 0 ? 0 : $this->getOffset() + 1;
    }

    public function getEndItem(): int
    {
        return min($this->getOffset() + $this->limit, $this->total);
    }

    public function toArray(): array
    {
        return [
            'page' => $this->page,
            'limit' => $this->limit,
            'total' => $this->total,
            'total_pages' => $this->totalPages,
            'has_next' => $this->hasNext,
            'has_previous' => $this->hasPrevious,
            'start_item' => $this->getStartItem(),
            'end_item' => $this->getEndItem(),
            'offset' => $this->getOffset()
        ];
    }

    private function validatePage(int $page): void
    {
        if ($page < 1) {
            throw new InvalidArgumentException('Page must be greater than or equal to 1');
        }
    }

    private function validateLimit(int $limit): void
    {
        if ($limit < 1 || $limit > 1000) {
            throw new InvalidArgumentException('Limit must be between 1 and 1000');
        }
    }

    private function validateTotal(int $total): void
    {
        if ($total < 0) {
            throw new InvalidArgumentException('Total must be greater than or equal to 0');
        }
    }
}