<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;


return function (App $app) {
    // Home route
    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write("Welcome to the API!");
        return $response;
    });

    $app->get('/get-available-fhir-systems', function(Request $request, Response $response) {
        $response->getBody()->write('/get-available');
        return $response;
    });
    $app->get('/get-available-resource-types', function(Request $request, Response $response) {
        $response->getBody()->write('/get-available');
        return $response;
    });
    $app->get('/list-mrns', function(Request $request, Response $response) {
        $response->getBody()->write('/list-mrns');
        return $response;
    });
    $app->post('/add-mrn', function(Request $request, Response $response) {
        $params = (array) $request->getParsedBody();
        $response->getBody()->write('/add-mrn');
        return $response;
    });
    $app->delete('/remove-mrn', function(Request $request, Response $response) {
        $response->getBody()->write('/remove-mrn');
        return $response;
    });
    $app->post('/trigger-fetch', function(Request $request, Response $response) {
        $params = (array) $request->getParsedBody();
        $response->getBody()->write('/trigger-fetch');
        return $response;
    });
    $app->get('/get-fetch-status', function(Request $request, Response $response) {
        $response->getBody()->write('/get-fetch');
        return $response;
    });
    $app->post('/create-zip-archive', function(Request $request, Response $response) {
        $params = (array) $request->getParsedBody();
        $response->getBody()->write('/create-zip');
        return $response;
    });
    $app->get('/download-zip', function(Request $request, Response $response) {
        $response->getBody()->write('/download-zip');
        return $response;
    });

    // Dynamic route
    $app->get('/user/{id}', function (Request $request, Response $response, array $args) {
        $response->getBody()->write("User ID: " . $args['id']);
        return $response;
    });

    // POST route
    $app->post('/submit', function (Request $request, Response $response) {
        $params = (array) $request->getParsedBody();
        $response->getBody()->write("Received: " . json_encode($params));
        return $response;
    });
};