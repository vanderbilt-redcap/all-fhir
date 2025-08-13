<?php
require_once(dirname(__DIR__, 2) . '/vendor/autoload.php');

use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\Services\ResourceSynchronizationService;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;

require_once APP_PATH_DOCROOT . 'ProjectGeneral/header.php';

$projectId = PROJECT_ID;
$dataAccessor = new RepeatedFormDataAccessor($projectId);
$queueManager = new QueueManager($module);
$syncService = new ResourceSynchronizationService($dataAccessor, $queueManager, $projectId);
$resourceManager = new RepeatedFormResourceManager($dataAccessor, $syncService, $queueManager, $projectId);

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
                $resourceType = $_POST['resource_type'] ?? '';
                $mappingType = $_POST['mapping_type'] ?? '';
                
                if (empty($resourceName) || empty($resourceType) || empty($mappingType)) {
                    throw new Exception('Resource Name, FHIR Resource Type, and Mapping Type are required');
                }
                
                // The MappingResource expects name (FHIR resource type) and type (predefined/custom)
                $mappingResource = MappingResource::create($resourceType, $mappingType);
                $tasks = $resourceManager->addMappingResource($mappingResource);
                
                $message = "Added mapping resource: $resourceName ($resourceType) as $mappingType. Created " . count($tasks) . " fetch tasks.";
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
    <table class="status-table">
        <tr>
            <th>Total MRNs</th>
            <td><?= $projectSummary['total_mrns'] ?></td>
        </tr>
        <tr>
            <th>Pending Tasks</th>
            <td><?= $projectSummary['sync_status']['pending_tasks'] ?></td>
        </tr>
        <tr>
            <th>Failed Tasks</th>
            <td><?= $projectSummary['sync_status']['failed_tasks'] ?></td>
        </tr>
    </table>
    
    <h4>Overall Status Counts</h4>
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
    <form method="post">
        <input type="hidden" name="redcap_csrf_token" value="<?= System::getCsrfToken() ?>">
        <input type="hidden" name="action" value="add_mapping_resource">
        
        <div class="form-group">
            <label for="resource_name">Display Name:</label>
            <input type="text" name="resource_name" id="resource_name" placeholder="e.g., Lab Results, Patient Demographics" required>
            <small>Friendly name for this mapping (for display purposes)</small>
        </div>
        
        <div class="form-group">
            <label for="resource_type">FHIR Resource Type:</label>
            <select name="resource_type" id="resource_type" required>
                <option value="">Select FHIR Resource Type</option>
                <option value="Patient">Patient</option>
                <option value="Observation">Observation</option>
                <option value="Condition">Condition</option>
                <option value="Medication">Medication</option>
                <option value="Procedure">Procedure</option>
                <option value="DiagnosticReport">DiagnosticReport</option>
                <option value="Encounter">Encounter</option>
                <option value="AllergyIntolerance">AllergyIntolerance</option>
                <option value="Immunization">Immunization</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="mapping_type">Mapping Type:</label>
            <select name="mapping_type" id="mapping_type" required>
                <option value="">Select Mapping Type</option>
                <option value="predefined">Predefined (Standard FHIR resource)</option>
                <option value="custom">Custom (Project-specific mapping)</option>
            </select>
            <small>Predefined for standard FHIR resources, Custom for project-specific mappings</small>
        </div>
        
        <button type="submit" class="btn btn-success">Add Mapping Resource</button>
    </form>
</div>

<div class="test-section">
    <h3>Retry Failed Resource</h3>
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