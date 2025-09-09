<?php
// Attempt to load REDCap bootstrap if available; otherwise provide minimal stubs
$redcapBootstrap = dirname(__DIR__, 3) . '/redcap_connect.php';
if (file_exists($redcapBootstrap)) {
    require_once $redcapBootstrap;
} else {
    // Minimal constants/classes used by tests and code under test
    if (!defined('APP_PATH_TEMP')) define('APP_PATH_TEMP', sys_get_temp_dir() . DIRECTORY_SEPARATOR);
    if (!defined('APP_PATH_WEBROOT')) define('APP_PATH_WEBROOT', '/');

    if (!class_exists('System')) {
        class System {
            public static function getCsrfToken() { return 'test-csrf-token'; }
        }
    }

    // Load lightweight REDCap stubs for unit tests when framework is absent
    $stubs = __DIR__ . '/support/RedcapStubs.php';
    if (file_exists($stubs)) require_once $stubs;
}

// Composer autoload (module-local)
require_once(dirname(__DIR__) . '/vendor/autoload.php');
