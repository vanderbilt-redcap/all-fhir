<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\Constants;
use REDCap;

class MrnController extends AbstractController
{
    public function listMrns(Request $request, Response $response): Response
    {
        $projectId = $this->module->getProjectId();
        $projectSettings = $this->module->getProjectSettings();
        $resources = array_map(fn($resource) => $resource['name'], $projectSettings['selected_mapping_resources'] ?? []);

        $fields = [REDCap::getRecordIdField(), 'mrn'];
        foreach ($resources as $resource) {
            $fields[] = Constants::FIELD_PREFIX . strtolower($resource) . '_status';
        }

        $params = [
            'project_id' => $projectId,
            'fields' => $fields,
            'return_format' => 'json'
        ];
        $data = REDCap::getData($params);
        $data = json_decode($data, true);

        $formattedData = [];
        foreach ($data as $item) {
            $recordId = $item[REDCap::getRecordIdField()];
            $mrnData = [
                'id' => $recordId,
                'mrn' => $item['mrn'],
                'status' => 'Pending', // This will be calculated based on resource statuses
                'resources' => []
            ];

            $completedCount = 0;
            foreach ($resources as $resource) {
                $statusField = Constants::FIELD_PREFIX . strtolower($resource) . '_status';
                $status = $item[$statusField] ?? 'Pending';
                $mrnData['resources'][] = [
                    'name' => $resource,
                    'status' => $status
                ];
                if ($status === 'Completed') {
                    $completedCount++;
                }
            }

            if (count($resources) > 0) {
                if ($completedCount === count($resources)) {
                    $mrnData['status'] = 'Completed';
                } elseif ($completedCount > 0) {
                    $mrnData['status'] = 'Fetching';
                }
            }

            $formattedData[] = $mrnData;
        }

        $response->getBody()->write(json_encode($formattedData));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function addMrn(Request $request, Response $response): Response
    {
        $params = (array) $request->getParsedBody();
        $mrn = $params['mrn'] ?? null;

        if (!$mrn) {
            $response->getBody()->write(json_encode(['error' => 'MRN is required']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $projectId = $this->module->getProjectId();
        $recordId = REDCap::reserveNewRecordId($projectId);

        $data = [
            $recordId => [
                REDCap::getEventIdFromUniqueEvent('mrn_form') => [ // Assuming 'mrn_form' is the instrument name
                    'mrn' => $mrn
                ]
            ]
        ];

        $result = REDCap::saveData($projectId, 'json', json_encode($data));

        if (!empty($result['errors'])) {
            $response->getBody()->write(json_encode($result));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }

        $newMrn = [
            'id' => $recordId,
            'mrn' => $mrn,
            'status' => 'Pending',
            'resources' => []
        ];

        $response->getBody()->write(json_encode($newMrn));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function removeMrn(Request $request, Response $response, $args): Response
    {
        $recordId = $args['id'] ?? null;
        if (!$recordId) {
            $response->getBody()->write(json_encode(['error' => 'Record ID is required']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $projectId = $this->module->getProjectId();
        $result = REDCap::deleteRecord($projectId, $recordId);

        if (isset($result['error'])) {
            $response->getBody()->write(json_encode($result));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }

        $response->getBody()->write(json_encode(['success' => true]));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
