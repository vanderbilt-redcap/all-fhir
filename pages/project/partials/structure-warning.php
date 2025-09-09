<?php
use Vanderbilt\AllFhir\Services\Redcap\ProjectMetadataProvider;
use Vanderbilt\AllFhir\Services\Validation\Criteria\NonRepeatingMrnCriterion;
use Vanderbilt\AllFhir\Services\Validation\Criteria\ResourceFieldsPresentCriterion;
use Vanderbilt\AllFhir\Services\Validation\Criteria\ResourceFieldsSameInstrumentCriterion;
use Vanderbilt\AllFhir\Services\Validation\Criteria\ResourceFormRepeatingCriterion;
use Vanderbilt\AllFhir\Services\ProjectStructureValidator;

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
<?php
return $isCompliant;