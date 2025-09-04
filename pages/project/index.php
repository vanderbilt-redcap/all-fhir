<?php
require_once(dirname(__DIR__, 2). '/vendor/autoload.php');

use Vanderbilt\FhirSnapshot\Services\Redcap\ProjectMetadataProvider;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\NonRepeatingMrnCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFieldsPresentCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFieldsSameInstrumentCriterion;
use Vanderbilt\FhirSnapshot\Services\Validation\Criteria\ResourceFormRepeatingCriterion;
use Vanderbilt\FhirSnapshot\Services\ProjectStructureValidator;

require_once APP_PATH_DOCROOT . 'ProjectGeneral/header.php';
$module_path = $module->getModulePath();

// Run lightweight validation to determine if we should display the link
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
?>

<div style="max-width:1000px;">
    <?php if (!$isCompliant): ?>
        <div class="alert alert-warning d-flex align-items-center" role="alert" style="margin-bottom:15px;">
            <i class="fas fa-exclamation-triangle" style="margin-right:8px;"></i>
            <div>
                Project structure needs attention. <a href="<?= $module->getUrl('pages/project/check.php') ?>">View details</a>
            </div>
        </div>
    <?php endif; ?>
    <div id="app"></div>
</div>

<link rel="stylesheet" type="text/css" media="screen,print" href="<?= $module->getUrl('assets/js/vue-app/dist/style.css') ?>"/>

<script type="module">
    import init from '<?= $module->getUrl('assets/js/vue-app/dist/lib.es.js') ?>'

    init('#app')
</script>
<?php require_once APP_PATH_DOCROOT . 'ControlCenter/footer.php'; ?>
