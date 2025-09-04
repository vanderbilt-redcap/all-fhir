<?php
require_once(dirname(__DIR__, 2). '/vendor/autoload.php');

use Vanderbilt\FhirSnapshot\Services\Redcap\ProjectMetadataProvider;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\NonRepeatingMrnCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFieldsPresentCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFieldsSameInstrumentCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFormRepeatingCriterion;
use Vanderbilt\FhirSnapshot\Services\ProjectStructureValidator;

require_once APP_PATH_DOCROOT . 'ProjectGeneral/header.php';

// Run the validator again and display results
$provider = new ProjectMetadataProvider();
$criteria = [
    new NonRepeatingMrnCriterion(),
    new ResourceFieldsPresentCriterion(),
    new ResourceFieldsSameInstrumentCriterion(),
    new ResourceFormRepeatingCriterion(),
];
$validator = new ProjectStructureValidator($provider, $criteria);
$report = $validator->validate();
$isCompliant = $report->isCompliant();

function esc($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
?>

<div style="max-width:1000px;">
    <div class="d-flex align-items-center" style="margin-bottom:15px;">
        <h4 class="m-0;">Project Structure Check</h4>
        <div class="ms-auto">
            <a class="btn btn-default" href="<?= $module->getUrl('pages/project/index.php') ?>">Home</a>
        </div>
    </div>

    <?php if ($isCompliant): ?>
        <div class="alert alert-success">
            <i class="fas fa-check-circle"></i>
            All checks passed. Your project structure is compliant.
        </div>
    <?php else: ?>
        <div class="alert alert-warning">
            <i class="fas fa-exclamation-triangle"></i>
            Some checks failed. See details below.
        </div>
    <?php endif; ?>

    <div class="panel panel-default">
        <div class="panel-heading"><strong>Validation Results</strong></div>
        <div class="panel-body">
            <table class="table table-bordered table-sm table-hover table-condensed">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th style="width:20%">Criterion</th>
                        <th>Details</th>
                        <th>Remediation Steps</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($report->getResults() as $result): ?>
                        <tr>
                            <td>
                                <div class="d-flex flex-column align-items-start">
                                    <?php if ($result->passed()): ?>
                                        <span class="label label-success"><i class="fas fa-circle-check fa-fw text-success"></i></span>
                                    <?php else: ?>
                                        <span class="label label-danger"><i class="fas fa-ban fa-fw text-danger"></i></span>
                                    <?php endif; ?>
                                </div>
                            </td>
                            <td><?= esc($result->getLabel()) ?><br><small class="text-muted">Code: <?= esc($result->getCode()) ?></small></td>
                            <td>
                                <?php $details = $result->getDetails(); ?>
                                <?php if (empty($details)): ?>
                                    <em class="text-muted">—</em>
                                <?php else: ?>
<pre style="margin:0; white-space:pre-wrap; word-break:break-word;">
<?= esc(json_encode($details, JSON_PRETTY_PRINT)) ?>
</pre>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php $steps = $result->getRemediationSteps(); ?>
                                <?php if (empty($steps)): ?>
                                    <em class="text-muted">—</em>
                                <?php else: ?>
                                    <ul class="ps-4 m-0">
                                        <?php foreach ($steps as $step): ?>
                                            <li><?= esc($step) ?></li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>

    <div class="well">
        <strong>Summary</strong>
        <ul class="mt-2">
            <li>Compliant: <?= $isCompliant ? 'Yes' : 'No' ?></li>
            <?php if (!$isCompliant): ?>
                <li>Missing: 
                    <ul class="mt-1">
                        <?php foreach ($report->getMissingMessages() as $msg): ?>
                            <li><?= esc($msg) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </li>
            <?php endif; ?>
        </ul>
    </div>
</div>

<?php require_once APP_PATH_DOCROOT . 'ControlCenter/footer.php'; ?>

