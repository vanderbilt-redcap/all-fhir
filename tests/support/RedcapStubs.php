<?php

// Define minimal REDCap framework stubs to satisfy unit tests when running
// outside a full REDCap environment.

namespace Vanderbilt\REDCap\Classes\SystemMonitors {
    class ResourceMonitor {
        public function getMemoryMonitor(): MemoryMonitor { return new MemoryMonitor(); }
        public function getTimeMonitor(): TimeMonitor { return new TimeMonitor(); }
        public function checkResources(): bool { return true; }
        public function getStatus(): array { return ['memory' => 'OK', 'time' => 'OK']; }
    }
    class MemoryMonitor {
        public function isMemoryStatusHealthy(): bool { return true; }
    }
    class TimeMonitor {
        public function withinThreshold(): bool { return true; }
    }
}

namespace {
    // Global REDCap class stub if needed by unit tests
    if (!class_exists('REDCap')) {
        class REDCap {
            public static function getFile(int $edocId) { return null; }
            public static function reserveNewRecordId(int $projectId) { return '1'; }
            public static function saveData(array $params) { return ['errors' => []]; }
        }
    }
}

// User and privilege stubs
namespace {
    if (!class_exists('UserRights')) {
        class UserRights {
            // Returns: [ $projectId => [ username => rightsArray ] ]
            public static array $privileges = [];
            public static function getPrivileges(int $projectId): array
            {
                if (!isset(self::$privileges[$projectId])) {
                    // default: two users
                    self::$privileges[$projectId] = [
                        'alice' => [],
                        'bob' => [],
                    ];
                    return [$projectId => self::$privileges[$projectId]];
                }
                return [$projectId => self::$privileges[$projectId]];
            }
        }
    }

    if (!class_exists('User')) {
        class User {
            public static function getUIIDByUsername(string $username): int
            {
                // Deterministic pseudo-ID
                return abs(crc32($username)) % 100000;
            }
        }
    }
}

// Token manager stubs
namespace Vanderbilt\REDCap\Classes\Fhir\TokenManager {
    class FhirTokenDTO {
        public const STATUS_VALID = 'VALID';
        public const STATUS_EXPIRED = 'EXPIRED';
        public const STATUS_REVOKED = 'REVOKED';
        public function __construct(private string $status) {}
        public function getStatus(): string { return $this->status; }
    }

    class TokenManagerStub {
        public static array $userStatusMap = [];
        public function __construct(private int $userId, private int $projectId) {}
        public function getFirstToken(): ?FhirTokenDTO
        {
            if (!isset(self::$userStatusMap[$this->userId])) return null;
            return new FhirTokenDTO(self::$userStatusMap[$this->userId]);
        }
    }

    use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystem;
    class FhirTokenManagerFactory {
        public static function create(FhirSystem $system, int $userId, int $projectId): TokenManagerStub
        {
            return new TokenManagerStub($userId, $projectId);
        }
    }
}

// FHIR system stub
namespace Vanderbilt\REDCap\Classes\Fhir\FhirSystem {
    class FhirSystem {
        public function __construct(private string $ehrId) {}
        public function getEhrId(): string { return $this->ehrId; }
        public function getEhrName(): string { return 'Epic App Orchard'; }
    }
}

