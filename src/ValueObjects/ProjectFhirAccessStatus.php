<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

class ProjectFhirAccessStatus
{
    private bool $hasAnyValidToken;
    private int $validCount;
    private int $totalUsersWithToken;
    /** @var array<string,string|null> */
    private array $detailsByUser;
    /** @var string[] */
    private array $errors;
    private ?string $fhirSystemId = null;
    private ?string $fhirSystemName = null;

    /**
     * @param array<string,string|null> $detailsByUser
     * @param string[] $errors
     */
    public function __construct(
        bool $hasAnyValidToken,
        int $validCount,
        int $totalUsersWithToken,
        array $detailsByUser = [],
        array $errors = [],
        ?string $fhirSystemId = null,
        ?string $fhirSystemName = null
    ) {
        $this->hasAnyValidToken = $hasAnyValidToken;
        $this->validCount = $validCount;
        $this->totalUsersWithToken = $totalUsersWithToken;
        $this->detailsByUser = $detailsByUser;
        $this->errors = $errors;
        $this->fhirSystemId = $fhirSystemId;
        $this->fhirSystemName = $fhirSystemName;
    }

    public function hasAnyValidToken(): bool { return $this->hasAnyValidToken; }
    public function getValidCount(): int { return $this->validCount; }
    public function getTotalUsersWithToken(): int { return $this->totalUsersWithToken; }
    /** @return array<string,string|null> */
    public function getDetailsByUser(): array { return $this->detailsByUser; }
    /** @return string[] */
    public function getErrors(): array { return $this->errors; }
    public function getFhirSystemId(): ?string { return $this->fhirSystemId; }
    public function getFhirSystemName(): ?string { return $this->fhirSystemName; }

    public function toArray(): array
    {
        return [
            'has_any_valid_token' => $this->hasAnyValidToken,
            'valid_count' => $this->validCount,
            'total_users_with_token' => $this->totalUsersWithToken,
            'details_by_user' => $this->detailsByUser,
            'errors' => $this->errors,
            'fhir_system_id' => $this->fhirSystemId,
            'fhir_system_name' => $this->fhirSystemName,
        ];
    }
}
