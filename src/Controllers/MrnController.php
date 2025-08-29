<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\Queue\QueueManager;
use REDCap;

/**
 * MrnController
 * 
 * REST API controller for managing Medical Record Numbers (MRNs) and their associated
 * FHIR resource instances within the REDCap project context.
 * 
 * CORE OPERATIONS:
 * - List MRNs with pagination and resource status summaries
 * - Add new MRNs with automatic resource instance creation
 * - Remove MRNs and associated data
 * - Force fetch FHIR resources regardless of current status
 * - Retry failed resource fetches (single and bulk operations)
 * - Perform full project synchronization
 * - Retrieve detailed resource status and project summaries
 * 
 * API ENDPOINTS:
 * - GET /mrns - List MRNs with pagination
 * - POST /mrns - Add new MRN
 * - DELETE /mrns/{id} - Remove MRN
 * - POST /mrns/trigger-fetch - Force fetch resources for specified MRNs
 * - POST /mrns/retry-failed - Retry failed resources
 * - POST /mrns/full-sync - Perform full project synchronization
 * - GET /mrns/{mrn}/resources - Get detailed resource status for MRN
 * - GET /project/summary - Get project-wide resource summary
 */
class MrnController extends AbstractController
{
    public function __construct(
        protected \Vanderbilt\FhirSnapshot\FhirSnapshot $module,
        private RepeatedFormResourceManager $resourceManager,
        private QueueManager $queueManager
    ) {
        parent::__construct($module);
    }
    public function listMrns(Request $request, Response $response): Response
    {
        $queryParams = $request->getQueryParams();
        $page = max(1, intval($queryParams['_page'] ?? 1));
        $perPage = max(1, min(100, intval($queryParams['_per_page'] ?? 10)));
        
        // Get project summary with rich resource data
        $projectSummary = $this->resourceManager->getProjectSummary();
        $allMrns = $this->resourceManager->getAllMrns();
        
        $formattedData = [];
        foreach ($allMrns as $mrn) {
            $resourceStatus = $this->resourceManager->getResourceStatus($mrn);
            $mrnSummary = $projectSummary['mrn_summaries'][$mrn] ?? [
                'status_counts' => [],
                'total_resources' => 0,
                'resource_types' => []
            ];
            
            // Calculate overall MRN status based on resource states
            $status = $this->calculateMrnStatus($mrnSummary['status_counts']);
            
            // Format resources with detailed metadata
            $resources = [];
            foreach ($resourceStatus as $resource) {
                $resources[] = [
                    'name' => $resource['resource_name'],
                    'resource_spec' => $resource['resource_spec'],
                    'mapping_type' => $resource['mapping_type'],
                    'repeat_instance' => $resource['repeat_instance'],
                    'status' => ucfirst($resource['status']), // Match Vue enum format
                    'fetch_date' => $resource['fetch_date'],
                    'error_message' => $resource['error_message']
                ];
            }
            
            $formattedData[] = [
                'id' => $this->getMrnRecordId($mrn), // Helper to get record ID
                'mrn' => $mrn,
                'status' => $status,
                'resources' => $resources,
                'status_counts' => $mrnSummary['status_counts'],
                'total_resources' => $mrnSummary['total_resources']
            ];
        }

        // Calculate pagination
        $total = count($formattedData);
        $totalPages = ceil($total / $perPage);
        $offset = ($page - 1) * $perPage;
        $paginatedData = array_slice($formattedData, $offset, $perPage);

        // Build response with pagination metadata
        $responseData = [
            'data' => $paginatedData,
            'pagination' => [
                'page' => $page,
                'per_page' => $perPage,
                'total' => $total,
                'total_pages' => $totalPages,
                'has_next' => $page < $totalPages,
                'has_previous' => $page > 1
            ],
            'project_summary' => [
                'total_mrns' => $projectSummary['total_mrns'],
                'overall_status_counts' => $projectSummary['overall_status_counts'],
                'sync_status' => $projectSummary['sync_status']
            ]
        ];

        $response->getBody()->write(json_encode($responseData));
        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * Calculate overall MRN status based on resource status counts
     */
    private function calculateMrnStatus(array $statusCounts): string
    {
        $total = array_sum($statusCounts);
        if ($total === 0) {
            return 'Pending';
        }
        
        $completed = $statusCounts['completed'] ?? 0;
        $failed = $statusCounts['failed'] ?? 0;
        $fetching = $statusCounts['fetching'] ?? 0;
        
        if ($completed === $total) {
            return 'Completed';
        } elseif ($failed > 0 && ($completed + $failed) === $total) {
            return 'Failed'; // Some completed, some failed, none pending/fetching
        } elseif ($fetching > 0 || $completed > 0) {
            return 'Fetching'; // In progress
        }
        
        return 'Pending';
    }
    
    /**
     * Get record ID for a given MRN using the resource manager's data accessor
     */
    private function getMrnRecordId(string $mrn): ?int
    {
        // Access the data accessor through reflection since it's private
        $reflection = new \ReflectionClass($this->resourceManager);
        $dataAccessorProperty = $reflection->getProperty('dataAccessor');
        $dataAccessorProperty->setAccessible(true);
        $dataAccessor = $dataAccessorProperty->getValue($this->resourceManager);
        
        return $dataAccessor->getRecordIdByMrn($mrn);
    }

    public function addMrn(Request $request, Response $response): Response
    {
        $params = (array) $request->getParsedBody();
        $mrn = $params['mrn'] ?? null;

        if (!$mrn) {
            $response->getBody()->write(json_encode(['error' => 'MRN is required']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        try {
            $projectId = $this->module->getProjectId();
            $recordId = REDCap::reserveNewRecordId($projectId);
            $eventId = $this->module->getEventId();

            // Save the MRN to REDCap
            $data = [
                $recordId => [
                    $eventId => [
                        'mrn' => $mrn
                    ],
                ]
            ];

            $result = REDCap::saveData([
                'project_id' => $projectId,
                'dataFormat' => 'array',
                'data' => $data,
                'skipFileUploadFields' => false,
                'overwriteBehavior' => 'overwrite',
            ]);

            if (!empty($result['errors'])) {
                $response->getBody()->write(json_encode(['error' => 'Failed to save MRN', 'details' => $result]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
            }

            // Use resource manager to handle MRN addition with configured resources
            $configuredResources = $this->module->getAllConfiguredMappingResources();
            $this->resourceManager->addMrn($mrn, $configuredResources);

            // Get the newly created resource status
            $resourceStatus = $this->resourceManager->getResourceStatus($mrn);
            $resources = [];
            foreach ($resourceStatus as $resource) {
                $resources[] = [
                    'name' => $resource['resource_name'],
                    'resource_spec' => $resource['resource_spec'],
                    'mapping_type' => $resource['mapping_type'],
                    'repeat_instance' => $resource['repeat_instance'],
                    'status' => ucfirst($resource['status']),
                    'fetch_date' => $resource['fetch_date'],
                    'error_message' => $resource['error_message']
                ];
            }

            $newMrn = [
                'id' => $recordId,
                'mrn' => $mrn,
                'status' => 'Pending',
                'resources' => $resources,
                'status_counts' => ['pending' => count($resources)],
                'total_resources' => count($resources),
            ];

            $response->getBody()->write(json_encode($newMrn));
            return $response->withHeader('Content-Type', 'application/json');
            
        } catch (\Exception $e) {
            $response->getBody()->write(json_encode(['error' => 'Failed to add MRN: ' . $e->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
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

    /**
     * Get detailed resource status for a specific MRN
     */
    public function getMrnResources(Request $request, Response $response, array $args): Response
    {
        $mrn = $args['mrn'] ?? null;
        
        if (!$mrn) {
            $response->getBody()->write(json_encode(['error' => 'MRN is required']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        try {
            $resourceStatus = $this->resourceManager->getResourceStatus($mrn);
            
            $resources = [];
            foreach ($resourceStatus as $resource) {
                $resources[] = [
                    'name' => $resource['resource_name'],
                    'resource_spec' => $resource['resource_spec'],
                    'mapping_type' => $resource['mapping_type'],
                    'repeat_instance' => $resource['repeat_instance'],
                    'status' => ucfirst($resource['status']),
                    'fetch_date' => $resource['fetch_date'],
                    'error_message' => $resource['error_message']
                ];
            }

            $responseData = [
                'mrn' => $mrn,
                'resources' => $resources,
                'total_resources' => count($resources)
            ];

            $response->getBody()->write(json_encode($responseData));
            return $response->withHeader('Content-Type', 'application/json');
            
        } catch (\Exception $e) {
            $response->getBody()->write(json_encode(['error' => 'Failed to get MRN resources: ' . $e->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }

    /**
     * Trigger fetch for specific MRNs and resources regardless of current status
     * 
     * Forces all mapped resources for the specified MRNs to be re-fetched, independent 
     * of their current state in the fhirmetadataresource table. This is useful when 
     * you need to refresh FHIR data regardless of whether it was previously completed 
     * or failed.
     */
    public function triggerFetch(Request $request, Response $response): Response
    {
        $params = (array) $request->getParsedBody();
        $mrns = $params['mrns'] ?? [];

        if (empty($mrns)) {
            $response->getBody()->write(json_encode(['error' => 'At least one MRN is required']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        try {
            // Use the new forceFetchResourcesByMrns method to trigger fetching regardless of current status
            // Note: metadataFilter parameter is empty, so all resources for the MRNs will be forced to fetch
            $fetchResults = $this->resourceManager->forceFetchResourcesByMrns($mrns);

            $responseData = [
                'success' => true,
                'message' => $fetchResults['message'],
                'mrns' => $mrns,
                'total_resources' => $fetchResults['total_resources'],
                'successful_fetches' => $fetchResults['successful_fetches'],
                'failed_fetches' => $fetchResults['failed_fetches'],
                'resource_results' => $fetchResults['resource_results'],
                'timing_summary' => $fetchResults['timing_summary']
            ];

            $response->getBody()->write(json_encode($responseData));
            return $response->withHeader('Content-Type', 'application/json');
            
        } catch (\Exception $e) {
            $response->getBody()->write(json_encode(['error' => 'Failed to trigger fetch: ' . $e->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }

    /**
     * Perform full project synchronization
     * 
     * Synchronizes all configured FHIR resources with existing project data.
     * Can be performed in real-time (default) or as a background task.
     * 
     * @param Request $request HTTP request with optional 'background' parameter
     * @param Response $response HTTP response
     * @return Response JSON response with sync results or task information
     */
    public function performFullSync(Request $request, Response $response): Response
    {
        try {
            $params = (array) $request->getParsedBody();
            $background = $params['background'] ?? false;
            $configuredResources = $this->module->getAllConfiguredMappingResources();

            if ($background) {
                // Create background task for full sync
                $projectId = $this->module->getProjectId();
                
                // Convert resources to serializable format
                $configuredResourcesData = [];
                foreach ($configuredResources as $resource) {
                    $configuredResourcesData[] = $resource->toArray();
                }

                $task = $this->queueManager->addTask(
                    Constants::TASK_FULL_SYNC,
                    [
                        'project_id' => $projectId,
                        'configured_resources' => $configuredResourcesData
                    ],
                    [
                        'created_by_endpoint' => 'performFullSync',
                        'creation_timestamp' => time(),
                        'background_mode' => true
                    ]
                );

                $taskId = $task->getId();

                $responseData = [
                    'success' => true,
                    'background' => true,
                    'message' => 'Full sync task created successfully',
                    'task_id' => $taskId,
                    'configured_resources_count' => count($configuredResources),
                    'project_id' => $projectId
                ];

                $response->getBody()->write(json_encode($responseData));
                return $response->withHeader('Content-Type', 'application/json');
            } else {
                // Perform real-time sync (existing behavior)
                $syncResults = $this->resourceManager->performFullSync($configuredResources);

                $responseData = [
                    'success' => true,
                    'background' => false,
                    'message' => $syncResults->getSummaryMessage(),
                    'statistics' => $syncResults->getStatistics(),
                    'sync_results' => $syncResults->toArray()
                ];

                $response->getBody()->write(json_encode($responseData));
                return $response->withHeader('Content-Type', 'application/json');
            }
            
        } catch (\Exception $e) {
            $response->getBody()->write(json_encode(['error' => 'Failed to perform full sync: ' . $e->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }

    /**
     * Retry failed resources
     * 
     * Retries failed FHIR resources immediately. Supports multiple operation modes:
     * - Record-specific retry: {"record_ids": [123, 456]} 
     * - Bulk retry: {"bulk": true, "resource_type": "optional"}
     * - Single resource retry: {"mrn": "12345", "resource_type": "Patient", "repeat_instance": 1}
     * 
     * @param Request $request HTTP request with retry parameters
     * @param Response $response HTTP response
     * @return Response JSON response with retry results
     */
    public function retryFailed(Request $request, Response $response): Response
    {
        $params = (array) $request->getParsedBody();
        $recordIds = $params['record_ids'] ?? null;
        $mrn = $params['mrn'] ?? null;
        $resourceType = $params['resource_type'] ?? null;
        $repeatInstance = $params['repeat_instance'] ?? null;
        $bulkMode = $params['bulk'] ?? false;

        try {
            if ($recordIds && is_array($recordIds)) {
                // Record-specific retry (NEW)
                $filters = ['record_ids' => array_map('intval', $recordIds)];
                if ($resourceType) {
                    $filters['resource_type'] = $resourceType;
                }
                
                $retriedCount = $this->resourceManager->bulkRetryFailed($filters);
                
                $responseData = [
                    'success' => true,
                    'operation_type' => 'record_specific',
                    'message' => "Record-specific retry completed. {$retriedCount} failed resources marked for retry.",
                    'retried_count' => $retriedCount,
                    'record_ids' => $recordIds
                ];
                
            } elseif ($bulkMode) {
                // Bulk retry all failed resources (EXISTING)
                $filters = [];
                if ($resourceType) {
                    $filters['resource_type'] = $resourceType;
                }
                
                $retriedCount = $this->resourceManager->bulkRetryFailed($filters);
                
                $responseData = [
                    'success' => true,
                    'operation_type' => 'bulk',
                    'message' => "Bulk retry completed. {$retriedCount} failed resources marked for retry.",
                    'retried_count' => $retriedCount
                ];
                
            } else {
                // Single resource retry (EXISTING)
                if (!$mrn || !$resourceType || !$repeatInstance) {
                    $response->getBody()->write(json_encode(['error' => 'MRN, resource type, and repeat instance are required for single retry']));
                    return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
                }
                
                $success = $this->resourceManager->retryFailedResource($mrn, $resourceType, (int)$repeatInstance);
                
                if ($success) {
                    $responseData = [
                        'success' => true,
                        'operation_type' => 'single',
                        'message' => "Single resource retry completed for MRN: {$mrn}, Resource: {$resourceType}, Instance: {$repeatInstance}"
                    ];
                } else {
                    $responseData = [
                        'success' => false,
                        'operation_type' => 'single',
                        'error' => 'Failed to retry resource or resource is not in failed state'
                    ];
                }
            }

            $response->getBody()->write(json_encode($responseData));
            return $response->withHeader('Content-Type', 'application/json');
            
        } catch (\Exception $e) {
            $response->getBody()->write(json_encode(['error' => 'Failed to retry resources: ' . $e->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }

    /**
     * Get project resource status summary
     */
    public function getProjectSummary(Request $request, Response $response): Response
    {
        try {
            $projectSummary = $this->resourceManager->getProjectSummary();
            
            $response->getBody()->write(json_encode($projectSummary));
            return $response->withHeader('Content-Type', 'application/json');
            
        } catch (\Exception $e) {
            $response->getBody()->write(json_encode(['error' => 'Failed to get project summary: ' . $e->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
}
