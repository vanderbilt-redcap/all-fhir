<?php
require_once(dirname(__DIR__, 1). '/vendor/autoload.php');

require_once APP_PATH_DOCROOT . 'ControlCenter/header.php';
$module_path = $module->getModulePath();
?>

<div id="app"></div>

<script type="module">
    import init from '<?= $module->getUrl('assets/js/vue-app/dist/lib.es.js') ?>'

    init('#app')
</script>
<?php require_once APP_PATH_DOCROOT . 'ControlCenter/footer.php'; ?>
