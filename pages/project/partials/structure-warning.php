<?php
use Vanderbilt\FhirSnapshot\Services\Redcap\ProjectMetadataProvider;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\NonRepeatingMrnCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFieldsPresentCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFieldsSameInstrumentCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFormRepeatingCriterion;
use Vanderbilt\FhirSnapshot\Services\ProjectStructureValidator;

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

if (!$isCompliant): ?>
    <div class="alert alert-warning d-flex align-items-center" role="alert" style="margin-bottom:15px;">
        <i class="fas fa-exclamation-triangle" style="margin-right:8px;"></i>
        <div>
            Project structure needs attention. <a href="<?= $module->getUrl('pages/project/check.php') ?>">View details</a>
        </div>
    </div>
<?php endif; ?>

