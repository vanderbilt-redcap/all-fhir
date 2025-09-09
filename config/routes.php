<?php

use Slim\App;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\AllFhir\Controllers\ArchiveController;
use Vanderbilt\AllFhir\Controllers\FetchController;
use Vanderbilt\AllFhir\Controllers\MrnController;
use Vanderbilt\AllFhir\Controllers\ProjectSettingsController;
use Vanderbilt\AllFhir\Controllers\TaskController;
use Vanderbilt\AllFhir\Controllers\MappingResourcesController;
use Vanderbilt\AllFhir\Controllers\StructureValidationController;
use Vanderbilt\AllFhir\Controllers\FhirAccessController;
use Vanderbilt\AllFhir\Controllers\EndpointParamsController;

return function (App $app) {
    // Home route
    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write("Welcome to the API!");
        return $response;
    });

    // $app->get('/get-available-fhir-systems', function(Request $request, Response $response) {
    //     $response->getBody()->write('/get-available');
    //     return $response;
    // });

    // ProjectSettingsController routes
    $app->get('/project-settings', [ProjectSettingsController::class, 'getSettings']);
    $app->put('/project-settings', [ProjectSettingsController::class, 'updateSettings']);
    $app->put('/project-settings/fhir-system', [ProjectSettingsController::class, 'updateFhirSystem']);

    // MappingResourcesController routes
    $app->get('/mapping-resources', [MappingResourcesController::class, 'list']);
    $app->post('/mapping-resources', [MappingResourcesController::class, 'create']);
    $app->put('/mapping-resources/{id}', [MappingResourcesController::class, 'update']);
    $app->post('/mapping-resources/{id}/soft-delete', [MappingResourcesController::class, 'softDelete']);
    $app->post('/mapping-resources/{id}/restore', [MappingResourcesController::class, 'restore']);
    $app->post('/mapping-resources/{id}/purge-deleted', [MappingResourcesController::class, 'purgeDeleted']);
    $app->delete('/mapping-resources/{id}', [MappingResourcesController::class, 'delete']);
    $app->post('/mapping-resources/import', [MappingResourcesController::class, 'import']);

    // MrnController routes
    $app->get('/mrns', [MrnController::class, 'listMrns']);
    $app->post('/mrns', [MrnController::class, 'addMrn']);
    $app->delete('/mrns/{id}', [MrnController::class, 'removeMrn']);
    $app->get('/mrns/{mrn}/resources', [MrnController::class, 'getMrnResources']);
    $app->get('/records/{recordId}/resources/{resourceName}/content/{repeatInstance}', [MrnController::class, 'viewResourceContent']);
    $app->post('/trigger-fetch', [MrnController::class, 'triggerFetch']);
    $app->post('/perform-full-sync', [MrnController::class, 'performFullSync']);
    $app->post('/retry-failed', [MrnController::class, 'retryFailed']);
    $app->get('/project-summary', [MrnController::class, 'getProjectSummary']);

    // FetchController routes
    $app->post('/fetch-mrn', [FetchController::class, 'fetchMrn']);
    $app->post('/fetch-selected', [FetchController::class, 'fetchSelected']);
    $app->get('/fetch-status', [FetchController::class, 'getFetchStatus']);

    // TaskController routes
    $app->get('/tasks', [TaskController::class, 'listTasks']);
    $app->post('/tasks/full-sync', [TaskController::class, 'performFullSync']);
    $app->post('/tasks/retry-failed', [TaskController::class, 'retryFailedResources']);
    $app->get('/tasks/stats', [TaskController::class, 'getQueueStatistics']);
    $app->post('/tasks/cleanup', [TaskController::class, 'cleanupCompletedTasks']);
    $app->get('/tasks/{id}', [TaskController::class, 'getTaskDetails']);
    $app->delete('/tasks/{id}', [TaskController::class, 'deleteTask']);

    // ArchiveController routes
    $app->get('/archives', [ArchiveController::class, 'listArchives']);
    $app->post('/archives/selected', [ArchiveController::class, 'archiveSelected']);
    $app->post('/archives/all', [ArchiveController::class, 'archiveAll']);
    $app->get('/archives/{archive_id}/download', [ArchiveController::class, 'downloadArchive']);
    $app->delete('/archives/{archive_id}', [ArchiveController::class, 'deleteArchive']);
    
    // On-demand streaming archive routes
    $app->post('/archives/stream/selected', [ArchiveController::class, 'streamSelected']);
    $app->post('/archives/stream/all', [ArchiveController::class, 'streamAll']);

    // Structure Validation routes
    $app->get('/project-structure/validate', [StructureValidationController::class, 'validate']);

    // FHIR Access routes
    $app->get('/fhir-access/status', [FhirAccessController::class, 'getStatus']);

    // Endpoint parameter schemas
    $app->get('/endpoint-params', [EndpointParamsController::class, 'list']);
    $app->get('/endpoint-params/{resourceSpec}', [EndpointParamsController::class, 'get']);

    // // Dynamic route
    // $app->get('/user/{id}', function (Request $request, Response $response, array $args) {
    //     $response->getBody()->write("User ID: " . $args['id']);
    //     return $response;
    // });

    // // POST route
    // $app->post('/submit', function (Request $request, Response $response) {
    //     $params = (array) $request->getParsedBody();
    //     $response->getBody()->write("Received: " . json_encode($params));
    //     return $response;
    // });
};
