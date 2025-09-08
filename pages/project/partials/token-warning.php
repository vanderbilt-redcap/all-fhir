<?php
use Vanderbilt\FhirSnapshot\Services\FhirAccess\ProjectFhirAccessService;

$tokenService = new ProjectFhirAccessService($module);
$tokenStatus = $tokenService->getStatus($module->getProjectId());
$hasValidToken = $tokenStatus->hasAnyValidToken();

if (!$hasValidToken): ?>
    <div class="alert alert-warning d-flex align-items-start" role="alert" style="margin-bottom:15px;">
        <i class="fas fa-key fa-fw fa-1x me-2"></i>
        <div>
            No users in this project currently have a valid FHIR access token<?php $sysName = $tokenStatus->getFhirSystemName(); echo $sysName ? " (System: {$sysName})" : ""; ?>.
            To fetch data, at least one project user must log in to the EHR and authorize access.
            <br/>
            Use the Standalone Launch link to obtain a FHIR token. If you don’t have login credentials, another project member with EHR access can perform the launch.

            <div class="mt-2">
                <a class="btn btn-sm btn-primary text-light" href="<?= APP_PATH_WEBROOT_FULL . '/ehr.php?standalone_launch=1&ehr_id='. $tokenStatus->getFhirSystemId() ?>"><i class="fas fa-rocket fa-fw"></i> Standalone Launch</a>
            </div>
        </div>
    </div>
<?php endif; ?>
<?php
return $hasValidToken;

