<?php
require_once(dirname(__DIR__, 2). '/vendor/autoload.php');

// Partials will handle specific logic for warnings

require_once APP_PATH_DOCROOT . 'ProjectGeneral/header.php';
$module_path = $module->getModulePath();

?>

<div style="max-width:1000px;">
    <?php include __DIR__ . '/partials/structure-warning.php'; ?>
    <?php include __DIR__ . '/partials/token-warning.php'; ?>
    <div id="app"></div>
</div>

<link rel="stylesheet" type="text/css" media="screen,print" href="<?= $module->getUrl('assets/js/vue-app/dist/style.css') ?>"/>

<script type="module">
    import init from '<?= $module->getUrl('assets/js/vue-app/dist/lib.es.js') ?>'

    init('#app')
</script>
<?php require_once APP_PATH_DOCROOT . 'ControlCenter/footer.php'; ?>
