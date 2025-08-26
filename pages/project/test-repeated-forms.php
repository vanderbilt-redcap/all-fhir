<?php
require_once(dirname(__DIR__, 2) . '/vendor/autoload.php');

use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\Services\ResourceSynchronizationService;
use Vanderbilt\FhirSnapshot\Services\ResourceArchiveService;
use Vanderbilt\FhirSnapshot\Services\ArchivePackager;
use Vanderbilt\FhirSnapshot\Services\FhirCategoryService;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;

require_once APP_PATH_DOCROOT . 'ProjectGeneral/header.php';

$module = FhirSnapshot::getInstance();
$container = $module->getContainer();

$projectId = PROJECT_ID;
$dataAccessor = $container->get(RepeatedFormDataAccessor::class);
$queueManager = $container->get(QueueManager::class);
$syncService = $container->get(ResourceSynchronizationService::class);
$resourceManager = $container->get(RepeatedFormResourceManager::class);
$archivePackager = $container->get(ArchivePackager::class);
$archiveService = $container->get(ResourceArchiveService::class);
$fhirCategoryService = $container->get(FhirCategoryService::class);

$availableCategories = $fhirCategoryService->getAvailableCategories();

$action = $_POST['action'] ?? $_GET['action'] ?? 'view';
$message = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        switch ($action) {
            case 'create_instance':
                $mrn = $_POST['mrn'] ?? '';
                $resourceType = $_POST['resource_type'] ?? '';
                
                if (empty($mrn) || empty($resourceType)) {
                    throw new Exception('MRN and Resource Type are required');
                }
                
                $recordId = $dataAccessor->getRecordIdByMrn($mrn);
                if (!$recordId) {
                    throw new Exception("No record found for MRN: $mrn");
                }
                
                $nextInstance = $dataAccessor->getNextRepeatInstance($recordId);
                // Create metadata with proper parameters: resourceName, resourceSpec, mappingType, repeatInstance
                $metadata = FhirResourceMetadata::create(
                    $resourceType,          // resourceName (display name)
                    $resourceType,          // resourceSpec (for testing, use same as name)
                    'custom',               // mappingType (default to custom for manual testing)
                    $nextInstance           // repeatInstance
                );
                $result = $dataAccessor->saveResourceMetadata($recordId, $metadata);
                
                if ($result) {
                    $message = "Created new instance for MRN: $mrn (Record ID: $recordId), Resource: $resourceType, Instance: $nextInstance";
                } else {
                    $error = "Failed to create instance";
                }
                break;
                
            case 'add_mapping_resource':
                $resourceName = $_POST['resource_name'] ?? '';
                $mappingType = $_POST['mapping_type'] ?? '';
                
                // Get resourceSpec based on mapping type
                $resourceSpec = '';
                if ($mappingType === 'predefined') {
                    $resourceSpec = $_POST['predefined_resource_spec'] ?? '';
                } elseif ($mappingType === 'custom') {
                    $resourceSpec = $_POST['custom_resource_spec'] ?? '';
                }
                
                if (empty($resourceName) || empty($mappingType) || empty($resourceSpec)) {
                    throw new Exception('Display Name, Mapping Type, and Resource Specification are required');
                }
                
                // Create MappingResource with separate name and resourceSpec
                $mappingResource = MappingResource::create($resourceName, $resourceSpec, $mappingType);
                $tasks = $resourceManager->addMappingResource($mappingResource);
                
                if (count($tasks) === 1) {
                    $message = "Added mapping resource: $resourceName ($resourceSpec) as $mappingType. Created 1 generic FHIR fetch task.";
                } else {
                    $message = "Added mapping resource: $resourceName ($resourceSpec) as $mappingType. Created " . count($tasks) . " fetch tasks.";
                }
                break;
                
            case 'retry_failed':
                $mrn = $_POST['retry_mrn'] ?? '';
                $resourceType = $_POST['retry_resource_type'] ?? '';
                $repeatInstance = (int) ($_POST['retry_repeat_instance'] ?? 0);
                
                if (empty($mrn) || empty($resourceType) || $repeatInstance <= 0) {
                    throw new Exception('MRN, Resource Type, and Repeat Instance are required');
                }
                
                $result = $resourceManager->retryFailedResource($mrn, $resourceType, $repeatInstance);
                
                if ($result) {
                    $message = "Retry task created for MRN: $mrn, Resource: $resourceType, Instance: $repeatInstance";
                } else {
                    $error = "Failed to create retry task or resource is not in failed state";
                }
                break;
                
            case 'export_data':
                $exportMrn = $_POST['export_mrn'] ?? '';
                
                if (empty($exportMrn)) {
                    throw new Exception('MRN is required for export');
                }
                
                $exportData = $resourceManager->exportResourceData($exportMrn);
                
                header('Content-Type: application/json');
                header('Content-Disposition: attachment; filename="fhir_export_' . $exportMrn . '_' . date('Y-m-d_H-i-s') . '.json"');
                echo json_encode($exportData, JSON_PRETTY_PRINT);
                exit;
                
            case 'create_task':
                $taskKey = $_POST['task_key'] ?? '';
                $taskParams = $_POST['task_params'] ?? '{}';
                $taskMetadata = $_POST['task_metadata'] ?? '{}';
                
                if (empty($taskKey)) {
                    throw new Exception('Task key is required');
                }
                
                $params = json_decode($taskParams, true);
                $metadata = json_decode($taskMetadata, true);
                
                if (json_last_error() !== JSON_ERROR_NONE) {
                    throw new Exception('Invalid JSON in parameters or metadata: ' . json_last_error_msg());
                }
                
                $task = $queueManager->addTask($taskKey, $params ?: [], $metadata ?: []);
                $message = "Created task with ID: {$task->getId()}, Key: $taskKey";
                break;
                
            case 'update_task':
                $taskId = $_POST['task_id'] ?? '';
                $newStatus = $_POST['task_status'] ?? '';
                $updateMetadata = $_POST['update_metadata'] ?? '{}';
                
                if (empty($taskId) || empty($newStatus)) {
                    throw new Exception('Task ID and status are required');
                }
                
                $metadata = json_decode($updateMetadata, true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    throw new Exception('Invalid JSON in metadata: ' . json_last_error_msg());
                }
                
                $statusUpdated = $queueManager->updateTaskStatus($taskId, $newStatus);
                if ($metadata && is_array($metadata) && !empty($metadata)) {
                    $queueManager->updateTaskMetadata($taskId, $metadata);
                }
                
                if ($statusUpdated) {
                    $message = "Updated task $taskId to status: $newStatus";
                } else {
                    $error = "Task $taskId not found";
                }
                break;
                
            case 'delete_task':
                $taskId = $_POST['delete_task_id'] ?? '';
                
                if (empty($taskId)) {
                    throw new Exception('Task ID is required');
                }
                
                $removed = $queueManager->removeTask($taskId);
                if ($removed) {
                    $message = "Deleted task: $taskId";
                } else {
                    $error = "Task $taskId not found";
                }
                break;
                
            case 'delete_completed_tasks':
                $removedCount = $queueManager->removeCompletedTasks();
                $message = "Removed $removedCount completed tasks";
                break;
                
            case 'clear_queue':
                $queueManager->clearQueue();
                $message = "Cleared all tasks from queue";
                break;
                
            case 'perform_full_sync':
                // Get all configured mapping resources using the helper method
                $configuredResources = $module->getAllConfiguredMappingResources();
                
                $syncResults = $resourceManager->performFullSync($configuredResources);
                
                $createdTasks = count($syncResults['created_tasks']);
                $cleanedInstances = $syncResults['cleaned_instances'];
                $missingInstances = count($syncResults['comparison']['missing_instances']);
                $orphanedInstances = count($syncResults['comparison']['orphaned_instances']);
                
                $message = "Full sync completed. Created $missingInstances missing instances, " .
                          "cleaned $cleanedInstances orphaned instances, " .
                          "and created $createdTasks background tasks.";
                break;
                
            case 'create_archive':
                $selectedMrns = $_POST['archive_mrns'] ?? [];
                $archiveMode = $_POST['archive_mode'] ?? 'selected';
                $resourceTypeFilter = $_POST['archive_resource_types'] ?? [];
                $archiveName = $_POST['archive_name'] ?? '';
                $backgroundMode = isset($_POST['background_mode']) && $_POST['background_mode'] === '1';
                
                if ($archiveMode === 'selected' && empty($selectedMrns)) {
                    throw new Exception('Please select at least one MRN for archive creation');
                }
                
                $archiveOptions = [
                    'background' => $backgroundMode
                ];
                
                if (!empty($resourceTypeFilter)) {
                    $archiveOptions['resource_types'] = $resourceTypeFilter;
                }
                
                if (!empty($archiveName)) {
                    $archiveOptions['archive_name'] = $archiveName;
                }
                
                if ($archiveMode === 'all_completed') {
                    $result = $archiveService->createArchiveForAllCompleted($archiveOptions);
                } else {
                    $result = $archiveService->createArchiveForMrns($selectedMrns, $archiveOptions);
                }
                
                if ($result['success']) {
                    $processingMode = $result['processing_mode'];
                    $totalResources = $result['total_resources'];
                    
                    if ($processingMode === 'background') {
                        $message = "Archive task created successfully with ID: {$result['archive_id']}. " .
                                  "Processing {$totalResources} resources in background.";
                    } else {
                        $archiveId = $result['archive_id'];
                        $fileSize = number_format($result['file_size'] / 1024, 1);
                        $message = "Archive created successfully: {$totalResources} resources, {$fileSize} KB. " .
                                  "Archive ID: {$archiveId}";
                    }
                } else {
                    $error = "Archive creation failed: " . $result['message'];
                }
                break;
                
            case 'download_archive':
                $archiveId = $_POST['download_archive_id'] ?? '';
                
                if (empty($archiveId)) {
                    throw new Exception('Archive ID is required for download');
                }
                
                $filePath = $archiveService->downloadArchive($archiveId);
                
                if ($filePath) {
                    // Provide download link or initiate download
                    $fileName = basename($filePath);
                    $message = "Archive ready for download: {$fileName}";
                    
                    // In a real implementation, you might redirect to a download handler
                    // header('Content-Type: application/zip');
                    // header('Content-Disposition: attachment; filename="' . $fileName . '"');
                    // readfile($filePath);
                    // exit;
                } else {
                    $error = "Archive not found or not ready for download";
                }
                break;
                
            case 'get_archive_status':
                $archiveId = $_POST['status_archive_id'] ?? '';
                
                if (empty($archiveId)) {
                    throw new Exception('Archive ID is required for status check');
                }
                
                $status = $archiveService->getArchiveStatus($archiveId);
                
                if ($status) {
                    $statusText = ucfirst($status['status']);
                    $createdAt = date('M j, Y H:i', strtotime($status['created_at']));
                    
                    $message = "Archive Status: {$statusText}, Created: {$createdAt}";
                    
                    if ($status['status'] === 'completed') {
                        $totalResources = $status['total_resources'] ?? 0;
                        $fileSize = isset($status['file_size']) ? number_format($status['file_size'] / 1024, 1) . ' KB' : 'Unknown';
                        $message .= ", Resources: {$totalResources}, Size: {$fileSize}";
                    }
                } else {
                    $error = "Archive not found or invalid archive ID";
                }
                break;
        }
    } catch (Exception $e) {
        $error = $e->getMessage();
    }
}

$allMrns = $dataAccessor->getAllMrns();
$projectSummary = $resourceManager->getProjectSummary();

// Get task data for display
$allTasks = $queueManager->getTasks();
$queueStats = $queueManager->getQueueStatistics();
$statusFilter = $_GET['status_filter'] ?? 'all';
$filteredTasks = $statusFilter === 'all' ? $allTasks : $queueManager->getTasksByStatus($statusFilter);
?>

<style>
.test-section {
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}
.test-section h3 {
    margin-top: 0;
    color: #333;
}
.form-group {
    margin: 10px 0;
}
.form-group label {
    display: inline-block;
    width: 150px;
    font-weight: bold;
}
.form-group input, .form-group select {
    width: 200px;
    padding: 5px;
}
.form-group small {
    display: block;
    color: #666;
    font-size: 0.9em;
    margin-top: 2px;
}
.btn {
    padding: 8px 15px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    color: white;
}
.btn-primary { background-color: #007cba; }
.btn-success { background-color: #28a745; }
.btn-warning { background-color: #ffc107; color: black; }
.btn-danger { background-color: #dc3545; }
.message { 
    padding: 10px; 
    margin: 10px 0; 
    border-radius: 3px; 
}
.message.success { 
    background-color: #d4edda; 
    border: 1px solid #c3e6cb; 
    color: #155724; 
}
.message.error { 
    background-color: #f8d7da; 
    border: 1px solid #f5c6cb; 
    color: #721c24; 
}
.status-table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
}
.status-table th, .status-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}
.status-table th {
    background-color: #f2f2f2;
}
.status-pending { color: #856404; }
.status-fetching { color: #0c5460; }
.status-completed { color: #155724; }
.status-failed { color: #721c24; }
.status-outdated { color: #533f03; }
.status-deleted { color: #6c757d; }
.status-processing { color: #0c5460; }
.task-filter-buttons {
    margin: 10px 0;
}
.filter-btn {
    padding: 5px 10px;
    margin: 2px;
    border: 1px solid #ddd;
    background: #f8f9fa;
    color: #333;
    text-decoration: none;
    border-radius: 3px;
    display: inline-block;
}
.filter-btn.active {
    background: #007cba;
    color: white;
}
.json-display {
    background: #f8f9fa;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-family: monospace;
    font-size: 11px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.task-id {
    font-family: monospace;
    font-size: 11px;
    color: #666;
}
.form-group textarea {
    width: 200px;
    height: 80px;
    padding: 5px;
    font-family: monospace;
    font-size: 12px;
}
.summary-section {
    margin: 10px 0;
    padding: 10px;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 3px;
}
.summary-section h5 {
    margin: 0 0 10px 0;
    color: #495057;
}
.metric-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin: 10px 0;
}
.metric-item {
    background: white;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 3px;
    text-align: center;
}
.metric-value {
    font-size: 18px;
    font-weight: bold;
    color: #007cba;
}
.metric-label {
    font-size: 12px;
    color: #666;
    margin-top: 2px;
}
.error-list {
    list-style: none;
    padding: 0;
    margin: 5px 0;
}
.error-item {
    padding: 3px 8px;
    margin: 2px 0;
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 3px;
    font-size: 12px;
}
.failed-samples {
    max-height: 150px;
    overflow-y: auto;
}
.sample-item {
    padding: 5px;
    margin: 2px 0;
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 3px;
    font-size: 11px;
    font-family: monospace;
}
</style>

<div class="projhdr">
    <h4>FHIR Snapshot - Repeated Forms Test Page</h4>
</div>

<?php if ($message): ?>
    <div class="message success"><?= htmlspecialchars($message) ?></div>
<?php endif; ?>

<?php if ($error): ?>
    <div class="message error"><?= htmlspecialchars($error) ?></div>
<?php endif; ?>

<div class="test-section">
    <h3>Project Summary</h3>
    <p><em>This section displays overall project statistics including total MRNs, background queue processing status (pending/failed tasks), and resource status counts across all patients in the FHIR snapshot system.</em></p>
    <table class="status-table">
        <tr>
            <th>Total MRNs</th>
            <td><?= $projectSummary['total_mrns'] ?></td>
        </tr>
        <tr>
            <th>Queue: Pending Tasks</th>
            <td><?= $projectSummary['sync_status']['pending_tasks'] ?></td>
        </tr>
        <tr>
            <th>Queue: Failed Tasks</th>
            <td><?= $projectSummary['sync_status']['failed_tasks'] ?></td>
        </tr>
    </table>
    
    <h4>Resource Status Counts</h4>
    <table class="status-table">
        <?php foreach ($projectSummary['overall_status_counts'] as $status => $count): ?>
            <tr>
                <th class="status-<?= $status ?>"><?= ucfirst($status) ?></th>
                <td><?= $count ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</div>

<div class="test-section">
    <h3>Create New Resource Instance</h3>
    <p><em>This section manually creates new FHIR resource instances in the repeated forms structure for testing purposes, simulating what the background queue processor would create during normal operation.</em></p>
    <form method="post">
        <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
        <input type="hidden" name="action" value="create_instance">
        
        <div class="form-group">
            <label for="mrn">MRN:</label>
            <select name="mrn" id="mrn" required>
                <option value="">Select MRN</option>
                <?php foreach ($allMrns as $mrn): ?>
                    <option value="<?= htmlspecialchars($mrn) ?>"><?= htmlspecialchars($mrn) ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        
        <div class="form-group">
            <label for="resource_type">Resource Name:</label>
            <select name="resource_type" id="resource_type" required>
                <option value="">Select Resource Name</option>
                <option value="Patient Demographics">Patient Demographics</option>
                <option value="Vital Signs">Vital Signs</option>
                <option value="Lab Results">Lab Results</option>
                <option value="Medications">Medications</option>
                <option value="Procedures">Procedures</option>
                <option value="Diagnostic Reports">Diagnostic Reports</option>
            </select>
            <small>Display name for the resource (used for identification)</small>
        </div>
        
        <button type="submit" class="btn btn-primary">Create Instance</button>
    </form>
</div>

<div class="test-section">
    <h3>Add New Mapping Resource</h3>
    <p><em>This section adds new FHIR resource types to fetch from the configured FHIR system. It supports both predefined REDCap categories and custom FHIR query specifications (e.g., <code>Observation?category=social-history</code>) to define what data should be retrieved.</em></p>
    <form method="post" id="mapping-resource-form">
        <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
        <input type="hidden" name="action" value="add_mapping_resource">
        
        <div class="form-group">
            <label for="resource_name">Display Name:</label>
            <input type="text" name="resource_name" id="resource_name" placeholder="e.g., Vital Signs, Social History" required>
            <small>User-friendly name shown in the interface</small>
        </div>
        
        <div class="form-group">
            <label for="mapping_type">Mapping Type:</label>
            <select name="mapping_type" id="mapping_type" onchange="toggleResourceSpec()" required>
                <option value="">Select Mapping Type</option>
                <option value="predefined">Predefined (REDCap Category)</option>
                <option value="custom">Custom (FHIR Query)</option>
            </select>
        </div>
        
        <!-- Predefined Resource Dropdown -->
        <div class="form-group" id="predefined-group" style="display: none;">
            <label for="predefined_resource_spec">Predefined Resource:</label>
            <select name="predefined_resource_spec" id="predefined_resource_spec">
                <option value="">Select Predefined Resource</option>
                <?php foreach ($availableCategories as $category): ?>
                    <option value="<?= htmlspecialchars($category['resourceSpec']) ?>">
                        <?= htmlspecialchars($category['name']) ?>
                    </option>
                <?php endforeach; ?>
            </select>
            <small>Choose from standard REDCap FHIR categories</small>
        </div>
        
        <!-- Custom Resource Text Field -->
        <div class="form-group" id="custom-group" style="display: none;">
            <label for="custom_resource_spec">FHIR Resource Specification:</label>
            <input type="text" name="custom_resource_spec" id="custom_resource_spec" placeholder="e.g., Observation?category=social-history&status=final">
            <small>Enter custom FHIR query specification with parameters</small>
        </div>
        
        <button type="submit" class="btn btn-success">Add Mapping Resource</button>
    </form>
    
    <script>
    function toggleResourceSpec() {
        const mappingType = document.getElementById('mapping_type').value;
        const predefinedGroup = document.getElementById('predefined-group');
        const customGroup = document.getElementById('custom-group');
        
        if (mappingType === 'predefined') {
            predefinedGroup.style.display = 'block';
            customGroup.style.display = 'none';
            document.getElementById('custom_resource_spec').removeAttribute('required');
            document.getElementById('predefined_resource_spec').setAttribute('required', 'required');
        } else if (mappingType === 'custom') {
            predefinedGroup.style.display = 'none';
            customGroup.style.display = 'block';
            document.getElementById('predefined_resource_spec').removeAttribute('required');
            document.getElementById('custom_resource_spec').setAttribute('required', 'required');
        } else {
            predefinedGroup.style.display = 'none';
            customGroup.style.display = 'none';
            document.getElementById('predefined_resource_spec').removeAttribute('required');
            document.getElementById('custom_resource_spec').removeAttribute('required');
        }
    }
    </script>
</div>

<div class="test-section">
    <h3>Perform Full Synchronization</h3>
    <p><em>This section performs a complete synchronization between configured mapping resources and existing data instances across all MRNs. It identifies missing instances, creates them, cleans up orphaned instances, and creates background tasks for data fetching.</em></p>
    <form method="post" onsubmit="return confirm('Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances.');">
        <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
        <input type="hidden" name="action" value="perform_full_sync">
        
        <p><strong>This operation will:</strong></p>
        <ul>
            <li>Compare configured mapping resources against existing data instances</li>
            <li>Create missing resource instances for all MRNs</li>
            <li>Clean up orphaned instances from removed mappings</li>
            <li>Create background tasks to fetch FHIR data for new instances</li>
        </ul>
        
        <button type="submit" class="btn btn-primary">Perform Full Sync</button>
    </form>
</div>

<div class="test-section">
    <h3>Retry Failed Resource</h3>
    <p><em>This section retries specific FHIR resources that failed during the background queue processing, allowing recovery from transient errors, connectivity issues, or break-the-glass restrictions that may have been resolved.</em></p>
    <form method="post">
        <input type="hidden" name="action" value="retry_failed">
        
        <div class="form-group">
            <label for="retry_mrn">MRN:</label>
            <select name="retry_mrn" id="retry_mrn" required>
                <option value="">Select MRN</option>
                <?php foreach ($allMrns as $mrn): ?>
                    <option value="<?= htmlspecialchars($mrn) ?>"><?= htmlspecialchars($mrn) ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        
        <div class="form-group">
            <label for="retry_resource_type">Resource Name:</label>
            <input type="text" name="retry_resource_type" id="retry_resource_type" placeholder="e.g., Patient Demographics" required>
            <small>Display name of the resource to retry</small>
        </div>
        
        <div class="form-group">
            <label for="retry_repeat_instance">Repeat Instance:</label>
            <input type="number" name="retry_repeat_instance" id="retry_repeat_instance" min="1" required>
        </div>
        
        <button type="submit" class="btn btn-warning">Retry Failed Resource</button>
    </form>
</div>

<div class="test-section">
    <h3>Export Resource Data</h3>
    <p><em>This section exports all stored FHIR JSON payloads for a specific patient (MRN) as a downloadable JSON file, providing access to the raw FHIR data useful for auditing, research workflows, or external analysis.</em></p>
    <form method="post">
        <input type="hidden" name="action" value="export_data">
        
        <div class="form-group">
            <label for="export_mrn">MRN:</label>
            <select name="export_mrn" id="export_mrn" required>
                <option value="">Select MRN</option>
                <?php foreach ($allMrns as $mrn): ?>
                    <option value="<?= htmlspecialchars($mrn) ?>"><?= htmlspecialchars($mrn) ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        
        <button type="submit" class="btn btn-primary">Export Data (JSON)</button>
    </form>
</div>

<div class="test-section">
    <h3>Create FHIR Resource Archive</h3>
    <p><em>This section creates ZIP archives of completed FHIR resources organized by project/record/MRN structure. Archives can be created for selected MRNs or all completed resources in the project, with optional filtering by resource types.</em></p>
    
    <form method="post" id="archive-form">
        <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
        <input type="hidden" name="action" value="create_archive">
        
        <div class="form-group">
            <label for="archive_name">Archive Name (optional):</label>
            <input type="text" name="archive_name" id="archive_name" placeholder="e.g., patient_data_backup_<?= date('Y-m-d') ?>">
            <small>Custom name for the archive file (without .zip extension)</small>
        </div>
        
        <div class="form-group">
            <label>Archive Mode:</label>
            <div>
                <input type="radio" name="archive_mode" id="mode_selected" value="selected" checked onchange="toggleMrnSelection()">
                <label for="mode_selected">Selected MRNs</label>
                
                <input type="radio" name="archive_mode" id="mode_all" value="all_completed" onchange="toggleMrnSelection()">
                <label for="mode_all">All Completed Resources</label>
            </div>
        </div>
        
        <div class="form-group" id="mrn-selection-group">
            <label>Select MRNs:</label>
            <div style="max-height: 150px; overflow-y: auto; border: 1px solid #ddd; padding: 8px;">
                <?php foreach ($allMrns as $mrn): ?>
                    <div>
                        <input type="checkbox" name="archive_mrns[]" id="mrn_<?= htmlspecialchars($mrn) ?>" value="<?= htmlspecialchars($mrn) ?>">
                        <label for="mrn_<?= htmlspecialchars($mrn) ?>"><?= htmlspecialchars($mrn) ?></label>
                    </div>
                <?php endforeach; ?>
            </div>
            <small>
                <a href="#" onclick="selectAllMrns(); return false;">Select All</a> |
                <a href="#" onclick="selectNoMrns(); return false;">Select None</a>
            </small>
        </div>
        
        <div class="form-group">
            <label>Resource Type Filter (optional):</label>
            <div style="max-height: 100px; overflow-y: auto; border: 1px solid #ddd; padding: 8px;">
                <div>
                    <input type="checkbox" name="archive_resource_types[]" id="res_patient" value="Patient Demographics">
                    <label for="res_patient">Patient Demographics</label>
                </div>
                <div>
                    <input type="checkbox" name="archive_resource_types[]" id="res_vitals" value="Vital Signs">
                    <label for="res_vitals">Vital Signs</label>
                </div>
                <div>
                    <input type="checkbox" name="archive_resource_types[]" id="res_labs" value="Lab Results">
                    <label for="res_labs">Lab Results</label>
                </div>
                <div>
                    <input type="checkbox" name="archive_resource_types[]" id="res_meds" value="Medications">
                    <label for="res_meds">Medications</label>
                </div>
                <div>
                    <input type="checkbox" name="archive_resource_types[]" id="res_procedures" value="Procedures">
                    <label for="res_procedures">Procedures</label>
                </div>
            </div>
            <small>Leave empty to include all resource types</small>
        </div>
        
        <div class="form-group">
            <input type="checkbox" name="background_mode" id="background_mode" value="1">
            <label for="background_mode">Force background processing</label>
            <small>Process large archives in background queue (recommended for >50 resources)</small>
        </div>
        
        <button type="submit" class="btn btn-primary">Create Archive</button>
    </form>
    
    <script>
    function toggleMrnSelection() {
        const selectedMode = document.querySelector('input[name="archive_mode"]:checked').value;
        const mrnGroup = document.getElementById('mrn-selection-group');
        
        if (selectedMode === 'selected') {
            mrnGroup.style.display = 'block';
        } else {
            mrnGroup.style.display = 'none';
        }
    }
    
    function selectAllMrns() {
        const checkboxes = document.querySelectorAll('input[name="archive_mrns[]"]');
        checkboxes.forEach(cb => cb.checked = true);
    }
    
    function selectNoMrns() {
        const checkboxes = document.querySelectorAll('input[name="archive_mrns[]"]');
        checkboxes.forEach(cb => cb.checked = false);
    }
    </script>
</div>

<div class="test-section">
    <h3>Archive Status & Download</h3>
    <p><em>This section allows you to check the status of archive tasks and download completed archives.</em></p>
    
    <div style="margin: 15px 0;">
        <h4>Check Archive Status</h4>
        <form method="post" style="display: inline-block; margin-right: 20px;">
            <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
            <input type="hidden" name="action" value="get_archive_status">
            <input type="text" name="status_archive_id" placeholder="Enter Archive ID" required style="width: 200px;">
            <button type="submit" class="btn btn-primary">Check Status</button>
        </form>
    </div>
    
    <div style="margin: 15px 0;">
        <h4>Download Archive</h4>
        <form method="post" style="display: inline-block;">
            <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
            <input type="hidden" name="action" value="download_archive">
            <input type="text" name="download_archive_id" placeholder="Enter Archive ID" required style="width: 200px;">
            <button type="submit" class="btn btn-success">Download Archive</button>
        </form>
    </div>
    
    <div style="margin-top: 20px;">
        <h4>Recent Archive Tasks</h4>
        <?php 
        $archiveTasks = array_filter($allTasks, function($task) {
            return $task->getKey() === \Vanderbilt\FhirSnapshot\Constants::TASK_FHIR_ARCHIVE;
        });
        $archiveTasks = array_slice(array_reverse($archiveTasks), 0, 5); // Show last 5
        ?>
        
        <?php if (!empty($archiveTasks)): ?>
            <table class="status-table">
                <thead>
                    <tr>
                        <th>Archive ID</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Resources</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($archiveTasks as $task): ?>
                        <?php 
                        $metadata = $task->getMetadata();
                        $params = $task->getParams();
                        $resourceCount = $params['resource_count'] ?? 0;
                        ?>
                        <tr>
                            <td class="task-id"><?= htmlspecialchars(substr($task->getId(), 0, 15)) ?>...</td>
                            <td class="status-<?= $task->getStatus() ?>"><?= ucfirst($task->getStatus()) ?></td>
                            <td><?= date('M j, Y H:i', strtotime($task->getCreatedAt())) ?></td>
                            <td><?= $resourceCount ?></td>
                            <td>
                                <button onclick="checkArchiveStatus('<?= htmlspecialchars($task->getId()) ?>')" class="btn btn-primary" style="padding: 2px 8px; font-size: 11px;">Status</button>
                                <?php if ($task->getStatus() === 'completed'): ?>
                                    <button onclick="downloadArchive('<?= htmlspecialchars($task->getId()) ?>')" class="btn btn-success" style="padding: 2px 8px; font-size: 11px;">Download</button>
                                <?php endif; ?>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p>No archive tasks found.</p>
        <?php endif; ?>
    </div>
    
    <script>
    function checkArchiveStatus(archiveId) {
        const form = document.createElement('form');
        form.method = 'post';
        form.innerHTML = `
            <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
            <input type="hidden" name="action" value="get_archive_status">
            <input type="hidden" name="status_archive_id" value="${archiveId}">
        `;
        document.body.appendChild(form);
        form.submit();
    }
    
    function downloadArchive(archiveId) {
        const form = document.createElement('form');
        form.method = 'post';
        form.innerHTML = `
            <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
            <input type="hidden" name="action" value="download_archive">
            <input type="hidden" name="download_archive_id" value="${archiveId}">
        `;
        document.body.appendChild(form);
        form.submit();
    }
    </script>
</div>

<div class="test-section">
    <h3>Queue Task List</h3>
    <p><em>This section displays all background tasks in the queue system, allowing you to monitor task status, filter by status, and view task details including parameters and metadata for testing the queue processing system.</em></p>
    
    <div class="task-filter-buttons">
        <a href="<?= APP_PATH_WEBROOT ?>ExternalModules/?prefix=fhir_snapshot&page=pages%2Fproject%2Ftest-repeated-forms&pid=<?= PROJECT_ID ?>&status_filter=all" class="filter-btn <?= $statusFilter === 'all' ? 'active' : '' ?>">All (<?= $queueStats['total'] ?>)</a>
        <a href="<?= APP_PATH_WEBROOT ?>ExternalModules/?prefix=fhir_snapshot&page=pages%2Fproject%2Ftest-repeated-forms&pid=<?= PROJECT_ID ?>&status_filter=pending" class="filter-btn <?= $statusFilter === 'pending' ? 'active' : '' ?>">Pending (<?= $queueStats['pending'] ?>)</a>
        <a href="<?= APP_PATH_WEBROOT ?>ExternalModules/?prefix=fhir_snapshot&page=pages%2Fproject%2Ftest-repeated-forms&pid=<?= PROJECT_ID ?>&status_filter=processing" class="filter-btn <?= $statusFilter === 'processing' ? 'active' : '' ?>">Processing (<?= $queueStats['processing'] ?>)</a>
        <a href="<?= APP_PATH_WEBROOT ?>ExternalModules/?prefix=fhir_snapshot&page=pages%2Fproject%2Ftest-repeated-forms&pid=<?= PROJECT_ID ?>&status_filter=completed" class="filter-btn <?= $statusFilter === 'completed' ? 'active' : '' ?>">Completed (<?= $queueStats['completed'] ?>)</a>
        <a href="<?= APP_PATH_WEBROOT ?>ExternalModules/?prefix=fhir_snapshot&page=pages%2Fproject%2Ftest-repeated-forms&pid=<?= PROJECT_ID ?>&status_filter=failed" class="filter-btn <?= $statusFilter === 'failed' ? 'active' : '' ?>">Failed (<?= $queueStats['failed'] ?>)</a>
    </div>
    
    <?php if (!empty($filteredTasks)): ?>
        <table class="status-table">
            <thead>
                <tr>
                    <th>Task ID</th>
                    <th>Key</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Parameters</th>
                    <th>Metadata</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($filteredTasks as $task): ?>
                    <tr>
                        <td class="task-id"><?= htmlspecialchars($task->getId()) ?></td>
                        <td><?= htmlspecialchars($task->getKey()) ?></td>
                        <td class="status-<?= $task->getStatus() ?>"><?= ucfirst($task->getStatus()) ?></td>
                        <td><?= date('M j, Y H:i', strtotime($task->getCreatedAt())) ?></td>
                        <td><?= date('M j, Y H:i', strtotime($task->getUpdatedAt())) ?></td>
                        <td>
                            <div class="json-display" title="<?= htmlspecialchars(json_encode($task->getParams(), JSON_PRETTY_PRINT)) ?>">
                                <?= !empty($task->getParams()) ? htmlspecialchars(json_encode($task->getParams())) : '-' ?>
                            </div>
                        </td>
                        <td>
                            <div class="json-display" title="<?= htmlspecialchars(json_encode($task->getMetadata(), JSON_PRETTY_PRINT)) ?>">
                                <?= !empty($task->getMetadata()) ? htmlspecialchars(json_encode($task->getMetadata())) : '-' ?>
                            </div>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php else: ?>
        <p>No tasks found<?= $statusFilter !== 'all' ? " with status: $statusFilter" : '' ?>.</p>
    <?php endif; ?>
</div>

<div class="test-section">
    <h3>Task Summaries</h3>
    <p><em>This section displays rich summary information from completed generic FHIR fetch tasks, including processing statistics, performance metrics, error analysis, and operational intelligence.</em></p>
    
    <?php 
    $completedTasks = $queueManager->getTasksByStatus('completed');
    $tasksWithSummaries = array_filter($completedTasks, function($task) {
        $data = $task->getMetadata();
        return isset($data['execution']) || isset($data['statistics']);
    });
    ?>
    
    <?php if (!empty($tasksWithSummaries)): ?>
        <?php foreach (array_slice(array_reverse($tasksWithSummaries), 0, 5) as $task): ?>
            <?php 
            $summary = $task->getMetadata();
            $execution = $summary['execution'] ?? [];
            $statistics = $summary['statistics'] ?? [];
            $statusSummary = $summary['status_summary'] ?? [];
            $errors = $summary['errors'] ?? [];
            $performance = $summary['performance'] ?? [];
            $failedSamples = $summary['failed_samples'] ?? [];
            $resourceContext = $summary['resource_context'] ?? [];
            $continuation = $summary['continuation'] ?? [];
            ?>
            <div class="summary-section">
                <h4>Task Summary: <?= htmlspecialchars(substr($task->getId(), 0, 20)) ?>...</h4>
                <p><strong>Resource:</strong> <?= htmlspecialchars($resourceContext['mapping_resource_name'] ?? $resourceContext['resource_type'] ?? 'Unknown') ?> 
                   <strong>Operation:</strong> <?= htmlspecialchars($resourceContext['operation'] ?? 'Unknown') ?>
                   <strong>Completed:</strong> <?= htmlspecialchars($execution['completed_at'] ?? 'Unknown') ?></p>
                
                <!-- Execution Overview -->
                <?php if (!empty($execution)): ?>
                <div class="summary-section">
                    <h5>Execution Summary</h5>
                    <div class="metric-grid">
                        <div class="metric-item">
                            <div class="metric-value"><?= htmlspecialchars($execution['duration_seconds'] ?? 0) ?>s</div>
                            <div class="metric-label">Duration</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= htmlspecialchars($execution['memory_peak_mb'] ?? 0) ?>MB</div>
                            <div class="metric-label">Peak Memory</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= ucfirst($execution['termination_reason'] ?? 'Unknown') ?></div>
                            <div class="metric-label">Termination</div>
                        </div>
                        <?php if (isset($continuation['next_task_needed']) && $continuation['next_task_needed']): ?>
                        <div class="metric-item">
                            <div class="metric-value">Yes</div>
                            <div class="metric-label">Continuation Needed</div>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
                <?php endif; ?>
                
                <!-- Statistics Overview -->
                <?php if (!empty($statistics)): ?>
                <div class="summary-section">
                    <h5>Processing Statistics</h5>
                    <div class="metric-grid">
                        <div class="metric-item">
                            <div class="metric-value"><?= htmlspecialchars($statistics['total_mrns_processed'] ?? 0) ?></div>
                            <div class="metric-label">MRNs Processed</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= htmlspecialchars($statistics['resources_created'] ?? 0) ?></div>
                            <div class="metric-label">Resources Created</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= htmlspecialchars($statistics['resources_failed'] ?? 0) ?></div>
                            <div class="metric-label">Resources Failed</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= htmlspecialchars($statistics['api_calls_made'] ?? 0) ?></div>
                            <div class="metric-label">API Calls</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= number_format($statistics['total_payload_size_mb'] ?? 0, 1) ?>MB</div>
                            <div class="metric-label">Total Payload</div>
                        </div>
                        <?php if (isset($statistics['total_mrns_remaining']) && $statistics['total_mrns_remaining'] > 0): ?>
                        <div class="metric-item">
                            <div class="metric-value"><?= htmlspecialchars($statistics['total_mrns_remaining']) ?></div>
                            <div class="metric-label">Remaining</div>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
                <?php endif; ?>
                
                <!-- Performance Metrics -->
                <?php if (!empty($performance) && ($performance['avg_processing_time_seconds'] ?? 0) > 0): ?>
                <div class="summary-section">
                    <h5>Performance Metrics</h5>
                    <div class="metric-grid">
                        <div class="metric-item">
                            <div class="metric-value"><?= number_format($performance['avg_processing_time_seconds'] ?? 0, 3) ?>s</div>
                            <div class="metric-label">Avg Processing Time</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= number_format($performance['throughput_mrns_per_minute'] ?? 0, 1) ?></div>
                            <div class="metric-label">MRNs/Minute</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= number_format($performance['api_response_avg_ms'] ?? 0, 1) ?>ms</div>
                            <div class="metric-label">Avg API Response</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= number_format($performance['fastest_mrn_seconds'] ?? 0, 3) ?>s</div>
                            <div class="metric-label">Fastest MRN</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value"><?= number_format($performance['slowest_mrn_seconds'] ?? 0, 3) ?>s</div>
                            <div class="metric-label">Slowest MRN</div>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
                
                <!-- Error Analysis -->
                <?php if (!empty($errors)): ?>
                <div class="summary-section">
                    <h5>Error Analysis</h5>
                    <ul class="error-list">
                        <?php foreach ($errors as $errorType => $count): ?>
                        <li class="error-item">
                            <strong><?= ucfirst(str_replace('_', ' ', $errorType)) ?>:</strong> <?= $count ?>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endif; ?>
                
                <!-- Failed Samples -->
                <?php if (!empty($failedSamples)): ?>
                <div class="summary-section">
                    <h5>Failed Samples</h5>
                    <div class="failed-samples">
                        <?php foreach ($failedSamples as $sample): ?>
                        <div class="sample-item">
                            <strong>MRN:</strong> <?= htmlspecialchars($sample['mrn'] ?? 'Unknown') ?><br>
                            <strong>Error:</strong> <?= htmlspecialchars($sample['error'] ?? 'Unknown error') ?>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
        
        <?php if (count($tasksWithSummaries) > 5): ?>
            <p><em>Showing latest 5 task summaries of <?= count($tasksWithSummaries) ?> total completed tasks with summaries.</em></p>
        <?php endif; ?>
    <?php else: ?>
        <p>No completed tasks with summaries found.</p>
    <?php endif; ?>
</div>

<div class="test-section">
    <h3>Create New Task</h3>
    <p><em>This section allows you to create custom background tasks for testing the queue system. You can specify the task key (processor type), parameters as JSON, and metadata as JSON.</em></p>
    <form method="post">
        <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
        <input type="hidden" name="action" value="create_task">
        
        <div class="form-group">
            <label for="task_key">Task Key:</label>
            <select name="task_key" id="task_key" required>
                <option value="">Select Task Type</option>
                <option value="fhir_fetch">fhir_fetch</option>
                <option value="archive">archive</option>
                <option value="cleanup">cleanup</option>
                <option value="notification">notification</option>
                <option value="test_task">test_task</option>
            </select>
            <small>Type of task processor to handle this task</small>
        </div>
        
        <div class="form-group">
            <label for="task_params">Parameters (JSON):</label>
            <textarea name="task_params" id="task_params" placeholder='{"operation": "test", "resource_type": "Patient", "target_mrn_count": 10}'>{}</textarea>
            <small>Task-specific parameters as JSON (use "operation" for generic tasks)</small>
        </div>
        
        <div class="form-group">
            <label for="task_metadata">Metadata (JSON):</label>
            <textarea name="task_metadata" id="task_metadata" placeholder='{"retry_count": 0, "priority": "normal"}'>{}</textarea>
            <small>Additional metadata as JSON</small>
        </div>
        
        <button type="submit" class="btn btn-success">Create Task</button>
    </form>
</div>

<div class="test-section">
    <h3>Update Task</h3>
    <p><em>This section allows you to update existing tasks by changing their status or adding metadata. Use this to test task lifecycle transitions and metadata updates.</em></p>
    <form method="post">
        <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
        <input type="hidden" name="action" value="update_task">
        
        <div class="form-group">
            <label for="task_id">Task ID:</label>
            <select name="task_id" id="task_id" required>
                <option value="">Select Task</option>
                <?php foreach ($allTasks as $task): ?>
                    <option value="<?= htmlspecialchars($task->getId()) ?>">
                        <?= htmlspecialchars(substr($task->getId(), 0, 20)) ?>... (<?= $task->getKey() ?> - <?= $task->getStatus() ?>)
                    </option>
                <?php endforeach; ?>
            </select>
        </div>
        
        <div class="form-group">
            <label for="task_status">New Status:</label>
            <select name="task_status" id="task_status" required>
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="update_metadata">Additional Metadata (JSON):</label>
            <textarea name="update_metadata" id="update_metadata" placeholder='{"error_message": "Connection timeout", "retry_count": 1}'>{}</textarea>
            <small>Additional metadata to merge (JSON)</small>
        </div>
        
        <button type="submit" class="btn btn-warning">Update Task</button>
    </form>
</div>

<div class="test-section">
    <h3>Delete Tasks</h3>
    <p><em>This section provides bulk operations for task cleanup including deleting specific tasks, removing all completed tasks, or clearing the entire queue for testing purposes.</em></p>
    
    <div style="margin: 15px 0;">
        <h4>Delete Specific Task</h4>
        <form method="post" style="display: inline-block; margin-right: 20px;">
            <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
            <input type="hidden" name="action" value="delete_task">
            <select name="delete_task_id" required>
                <option value="">Select Task</option>
                <?php foreach ($allTasks as $task): ?>
                    <option value="<?= htmlspecialchars($task->getId()) ?>">
                        <?= htmlspecialchars(substr($task->getId(), 0, 20)) ?>... (<?= $task->getKey() ?> - <?= $task->getStatus() ?>)
                    </option>
                <?php endforeach; ?>
            </select>
            <button type="submit" class="btn btn-danger">Delete Task</button>
        </form>
    </div>
    
    <div style="margin: 15px 0;">
        <h4>Bulk Operations</h4>
        <form method="post" style="display: inline-block; margin-right: 10px;">
            <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
            <input type="hidden" name="action" value="delete_completed_tasks">
            <button type="submit" class="btn btn-warning">Remove All Completed Tasks (<?= $queueStats['completed'] ?>)</button>
        </form>
        
        <form method="post" style="display: inline-block;" onsubmit="return confirm('Are you sure you want to clear ALL tasks from the queue?');">
            <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
            <input type="hidden" name="action" value="clear_queue">
            <button type="submit" class="btn btn-danger">Clear Entire Queue (<?= $queueStats['total'] ?>)</button>
        </form>
    </div>
</div>

<div class="test-section">
    <h3>MRN Details</h3>
    <p><em>This section displays detailed status information for each patient's FHIR resources, showing the repeated forms structure with individual resource instances, their processing status, fetch timestamps, and any error messages encountered during data retrieval.</em></p>
    <?php if (!empty($allMrns)): ?>
        <?php foreach (array_slice($allMrns, 0, 5) as $mrn): ?>
            <?php 
                $mrnStatus = $resourceManager->getResourceStatus($mrn);
                $statusCounts = $projectSummary['mrn_summaries'][$mrn] ?? ['status_counts' => [], 'resource_types' => []];
            ?>
            <div style="margin: 10px 0; padding: 10px; background: white; border: 1px solid #ccc;">
                <h4>MRN: <?= htmlspecialchars($mrn) ?></h4>
                <p><strong>Mapping Types:</strong> <?= implode(', ', $statusCounts['resource_types']) ?></p>
                <p><strong>Total Resources:</strong> <?= $statusCounts['total_resources'] ?></p>
                
                <table class="status-table" style="width: auto;">
                    <?php foreach ($statusCounts['status_counts'] as $status => $count): ?>
                        <?php if ($count > 0): ?>
                            <tr>
                                <td class="status-<?= $status ?>"><?= ucfirst($status) ?></td>
                                <td><?= $count ?></td>
                            </tr>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </table>
                
                <?php if (!empty($mrnStatus)): ?>
                    <details style="margin-top: 10px;">
                        <summary>View Resource Instances (<?= count($mrnStatus) ?>)</summary>
                        <table class="status-table" style="margin-top: 10px; font-size: 12px;">
                            <thead>
                                <tr>
                                    <th>Resource Name</th>
                                    <th>Resource Spec</th>
                                    <th>Mapping Type</th>
                                    <th>Instance</th>
                                    <th>Status</th>
                                    <th>Fetch Date</th>
                                    <th>Error</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($mrnStatus as $resource): ?>
                                    <tr>
                                        <td><?= htmlspecialchars($resource['resource_name']) ?></td>
                                        <td><?= htmlspecialchars($resource['resource_spec']) ?></td>
                                        <td><?= htmlspecialchars($resource['mapping_type']) ?></td>
                                        <td><?= $resource['repeat_instance'] ?></td>
                                        <td class="status-<?= $resource['status'] ?>"><?= ucfirst($resource['status']) ?></td>
                                        <td><?= $resource['fetch_date'] ? date('M j, Y H:i', strtotime($resource['fetch_date'])) : '-' ?></td>
                                        <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">
                                            <?= $resource['error_message'] ? htmlspecialchars(substr($resource['error_message'], 0, 50)) . '...' : '-' ?>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </details>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
        
        <?php if (count($allMrns) > 5): ?>
            <p><em>Showing first 5 MRNs of <?= count($allMrns) ?> total.</em></p>
        <?php endif; ?>
    <?php else: ?>
        <p>No MRNs found in project.</p>
    <?php endif; ?>
</div>

<?php require_once APP_PATH_DOCROOT . 'ProjectGeneral/footer.php'; ?>