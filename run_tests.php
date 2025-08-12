<?php

require_once(dirname(__DIR__, 2) . '/redcap_connect.php');
// if(!defined('PLUGIN') || PLUGIN!=true) define('PLUGIN', true);
/**
 * Simple test runner for the Queue System
 * 
 * This script demonstrates how to run the PHPUnit tests for the queue system.
 * You can run this directly or use the PHPUnit command line.
 */

require_once __DIR__ . '/vendor/autoload.php';

echo "FHIR Snapshot Queue System Test Runner\n";
echo "=====================================\n\n";

// Example of how to use the queue system
echo "Example Usage:\n";
echo "--------------\n";

// This would normally be done within REDCap context
try {
    // Mock the FhirSnapshot module for demonstration
    $module = new class extends \Vanderbilt\FhirSnapshot\FhirSnapshot {
        public function getProjectId() { return 123; }
        public function getProjectSetting() { return []; }
        public function setProjectSetting() { /* mock */ }
        public function removeProjectSetting() { /* mock */ }
    };

    // Create queue manager
    $queueManager = new \Vanderbilt\FhirSnapshot\Queue\QueueManager($module);
    
    // Add some example tasks
    $task1 = $queueManager->addTask('fhir_fetch', [
        'mrn' => '123456',
        'resources' => ['Patient', 'Observation']
    ]);
    
    $task2 = $queueManager->addTask('send_email', [
        'to' => 'admin@example.com',
        'subject' => 'FHIR Data Fetch Complete',
        'message' => 'The FHIR data fetch has been completed successfully.'
    ]);
    
    $task3 = $queueManager->addTask('create_archive', [
        'mrns' => ['123456', '789012'],
        'format' => 'zip'
    ]);
    
    echo "✓ Created 3 example tasks:\n";
    echo "  - FHIR Fetch task (ID: {$task1->getId()})\n";
    echo "  - Email notification task (ID: {$task2->getId()})\n";
    echo "  - Archive creation task (ID: {$task3->getId()})\n\n";
    
    // Show queue statistics
    $stats = $queueManager->getQueueStatistics();
    echo "Queue Statistics:\n";
    echo "  Total tasks: {$stats['total']}\n";
    echo "  Pending: {$stats['pending']}\n";
    echo "  Processing: {$stats['processing']}\n";
    echo "  Completed: {$stats['completed']}\n";
    echo "  Failed: {$stats['failed']}\n\n";
    
} catch (Exception $e) {
    echo "Error in example: " . $e->getMessage() . "\n\n";
}

echo "To run the actual tests, use one of these commands:\n";
echo "  ./vendor/bin/phpunit                    # Run all tests\n";
echo "  ./vendor/bin/phpunit tests/Unit/Queue   # Run queue tests only\n";
echo "  ./vendor/bin/phpunit --coverage-html coverage  # Generate coverage report\n\n";

echo "Test files created:\n";
echo "  - tests/Unit/Queue/TaskTest.php\n";
echo "  - tests/Unit/Queue/QueueManagerTest.php\n";
echo "  - tests/Unit/Queue/QueueProcessorTest.php\n";
echo "  - tests/Unit/Queue/Processors/FhirFetchProcessorTest.php\n\n";

echo "Implementation files created:\n";
echo "  - src/Queue/Task.php (Value object)\n";
echo "  - src/Queue/QueueManager.php (Task management)\n";
echo "  - src/Queue/QueueProcessor.php (Main processor with ResourceMonitor)\n";
echo "  - src/Queue/Processors/ (Strategy pattern implementations)\n";
echo "  - FhirSnapshot.php (Updated with processQueue method)\n\n";

echo "The queue processor is now ready for use!\n";
echo "The cron job will automatically process tasks every minute.\n";