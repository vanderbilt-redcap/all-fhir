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

