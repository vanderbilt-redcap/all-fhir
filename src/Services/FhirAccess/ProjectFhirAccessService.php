<?php

namespace Vanderbilt\AllFhir\Services\FhirAccess;

use Vanderbilt\AllFhir\Constants;
use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Services\Contracts\ProjectFhirAccessChecker;
use Vanderbilt\AllFhir\ValueObjects\ProjectFhirAccessStatus;
use Vanderbilt\REDCap\Classes\Fhir\TokenManager\FhirTokenDTO;
use Vanderbilt\REDCap\Classes\Fhir\TokenManager\FhirTokenManagerFactory;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystem;
use Vanderbilt\REDCap\Classes\Utility\FileCache\FileCache;

class ProjectFhirAccessService implements ProjectFhirAccessChecker
{
    private const CACHE_TTL_SECONDS = 300; // 5 minutes

    public function __construct(private AllFhir $module)
    {
    }

    public function getCachedStatus(int $projectId): ProjectFhirAccessStatus
    {
        $cacheKey = $this->buildCacheKey($projectId);
        $cache = $this->getCache();

        $cached = $cache?->get($cacheKey);
        if ($cached) {
            $decoded = json_decode($cached, true);
            if (is_array($decoded)) {
                return new ProjectFhirAccessStatus(
                    (bool)($decoded['has_any_valid_token'] ?? false),
                    (int)($decoded['valid_count'] ?? 0),
                    (int)($decoded['total_users_with_token'] ?? 0),
                    (array)($decoded['details_by_user'] ?? []),
                    (array)($decoded['errors'] ?? []),
                    isset($decoded['fhir_system_id']) ? (string)$decoded['fhir_system_id'] : null,
                    isset($decoded['fhir_system_name']) ? (string)$decoded['fhir_system_name'] : null,
                );
            }
            // if decoding fails, clear cache entry
            $cache?->delete($cacheKey);
        }

        $result = $this->compute($projectId);

        // store to cache
        if ($cache) {
            $cache->set($cacheKey, json_encode($result->toArray()), self::CACHE_TTL_SECONDS);
        }

        return $result;
    }
    
    public function getStatus(int $projectId): ProjectFhirAccessStatus
    {
        return $this->compute($projectId);
    }

    private function compute(int $projectId): ProjectFhirAccessStatus
    {
        $errors = [];
        $detailsByUser = [];
        $validCount = 0;
        $totalUsersWithToken = 0;
        $fhirSystemId = null;
        $fhirSystemName = null;

        try {
            $ehrId = $this->module->getProjectSetting(Constants::SETTING_FHIR_SYSTEM);
            if (!$ehrId) {
                // No configured FHIR system: no tokens available
                return new ProjectFhirAccessStatus(false, 0, 0, [], ['No FHIR system configured for this project.'], null, null);
            }

            $fhirSystem = new FhirSystem($ehrId);
            $fhirSystemId = (string)($fhirSystem->getEhrId() ?? $ehrId);
            $fhirSystemName = (string)($fhirSystem->getEhrName() ?? '');

            $privileges = \UserRights::getPrivileges($projectId);
            $usernames = array_keys($privileges[$projectId] ?? []);

            foreach ($usernames as $username) {
                $status = null;
                try {
                    $userId = \User::getUIIDByUsername($username);
                    $tokenManager = FhirTokenManagerFactory::create($fhirSystem, $userId, $projectId);
                    $token = $tokenManager->getFirstToken();
                    if ($token instanceof FhirTokenDTO) {
                        $status = $token->getStatus();
                        $totalUsersWithToken++;
                        if ($status === FhirTokenDTO::STATUS_VALID) {
                            $validCount++;
                        }
                    }
                } catch (\Throwable $inner) {
                    // ignore per-user errors but record generic status
                    $errors[] = 'Token check failed for user ' . $username . ': ' . $inner->getMessage();
                }
                $detailsByUser[$username] = $status;
            }
        } catch (\Throwable $e) {
            $errors[] = 'Failed to retrieve FHIR access tokens: ' . $e->getMessage();
        }

        $hasAnyValid = $validCount > 0;
        return new ProjectFhirAccessStatus($hasAnyValid, $validCount, $totalUsersWithToken, $detailsByUser, $errors, $fhirSystemId, $fhirSystemName);
    }

    private function buildCacheKey(int $projectId): string
    {
        return 'fhir_access_status_project_' . $projectId;
    }

    private function getCache(): ?FileCache
    {
        try {
            return new FileCache(__CLASS__);
        } catch (\Throwable $e) {
            return null; // if FileCache unavailable, skip caching gracefully
        }
    }
}
