<?php

use Slim\App;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\Controllers\ArchiveController;
use Vanderbilt\FhirSnapshot\Controllers\FetchController;
use Vanderbilt\FhirSnapshot\Controllers\MrnController;
use Vanderbilt\FhirSnapshot\Controllers\SystemController;

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

    // SystemController routes
    $app->get('/get-available-fhir-systems', [SystemController::class, 'getAvailableFhirSystems']);
    $app->get('/get-available-resource-types', [SystemController::class, 'getAvailableResourceTypes']);

    // MrnController routes
    $app->get('/list-mrns', [MrnController::class, 'listMrns']);
    $app->post('/add-mrn', [MrnController::class, 'addMrn']);
    $app->delete('/remove-mrn/{mrn}', [MrnController::class, 'removeMrn']);

    // FetchController routes
    $app->post('/trigger-fetch', [FetchController::class, 'triggerFetch']);
    $app->get('/get-fetch-status', [FetchController::class, 'getFetchStatus']);

    // ArchiveController routes
    $app->post('/create-zip-archive', [ArchiveController::class, 'createZipArchive']);
    $app->get('/download-zip', [ArchiveController::class, 'downloadZip']);

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