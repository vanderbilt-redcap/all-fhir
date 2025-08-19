<?php
require_once(dirname(__DIR__, 2) . '/vendor/autoload.php');

use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\Services\ResourceSynchronizationService;
use Vanderbilt\FhirSnapshot\Services\FhirCategoryService;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;

require_once APP_PATH_DOCROOT . 'ProjectGeneral/header.php';

$projectId = PROJECT_ID;
$dataAccessor = new RepeatedFormDataAccessor($projectId);
$queueManager = new QueueManager($module);
$syncService = new ResourceSynchronizationService($dataAccessor, $queueManager, $projectId);
$resourceManager = new RepeatedFormResourceManager($module, $dataAccessor, $syncService, $queueManager);
$fhirCategoryService = new FhirCategoryService();
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
                $metadata = FhirResourceMetadata::create($resourceType, $nextInstance);
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
                
                $message = "Added mapping resource: $resourceName ($resourceSpec) as $mappingType. Created " . count($tasks) . " fetch tasks.";
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
        }
    } catch (Exception $e) {
        $error = $e->getMessage();
    }
}

$allMrns = $dataAccessor->getAllMrns();
$projectSummary = $resourceManager->getProjectSummary();
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
            <label for="resource_type">Resource Type:</label>
            <select name="resource_type" id="resource_type" required>
                <option value="">Select Resource Type</option>
                <option value="Patient">Patient</option>
                <option value="Observation">Observation</option>
                <option value="Condition">Condition</option>
                <option value="Medication">Medication</option>
                <option value="Procedure">Procedure</option>
                <option value="DiagnosticReport">DiagnosticReport</option>
            </select>
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
            <label for="retry_resource_type">Resource Type:</label>
            <input type="text" name="retry_resource_type" id="retry_resource_type" placeholder="e.g., Patient" required>
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
                <p><strong>Resource Types:</strong> <?= implode(', ', $statusCounts['resource_types']) ?></p>
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
                                    <th>Resource Type</th>
                                    <th>Instance</th>
                                    <th>Status</th>
                                    <th>Fetch Date</th>
                                    <th>Error</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($mrnStatus as $resource): ?>
                                    <tr>
                                        <td><?= htmlspecialchars($resource['resource_type']) ?></td>
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