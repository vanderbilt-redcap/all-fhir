<?php
// Displays a professional notice with links to download and upload the recommended data dictionary
// Render only when $isCompliant is defined and false
if (isset($isCompliant) && !$isCompliant): ?>
    <div class="alert alert-info" role="alert" style="margin-bottom:15px;">
        <strong>Download the recommended Data Dictionary.</strong>
        To ensure this module functions correctly, please use the provided data dictionary which defines the required instruments and fields. Download it here:
        <a href="<?= $module->getUrl('assets/data-dictionary/DataDictionary_2025-09-08.csv') ?>" download>DataDictionary_2025-09-08.csv</a>.
        After downloading, upload it on the Data Dictionary page to update your project structure:
        <a href="<?= APP_PATH_WEBROOT . 'Design/data_dictionary_upload.php?pid=' . PROJECT_ID ?>">Upload Data Dictionary</a>.
    </div>
<?php endif; ?>

