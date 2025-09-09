<?php

namespace Vanderbilt\AllFhir\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\Services\TaskService;
use Vanderbilt\AllFhir\ValueObjects\TaskPaginationInfo;
use Vanderbilt\AllFhir\ValueObjects\TaskFilter;

/**
 * TaskController
 * 
 * REST API controller for task management operations.
 * Handles HTTP requests for task listing, operations, and details.
 * 
 * RESPONSIBILITIES:
 * - HTTP request/response handling
 * - Parameter validation and parsing
 * - Delegating business logic to TaskService
 * - Consistent JSON response formatting
 * - Error handling and logging
 * 
 * ENDPOINTS:
 * - GET /tasks - List tasks with filtering and pagination
 * - POST /tasks/full-sync - Trigger full synchronization
 * - POST /tasks/retry-failed - Retry failed tasks
 * - GET /tasks/{id} - Get task details
 * - DELETE /tasks/{id} - Delete task
 */
class TaskController
{

    public function __construct(
        private AllFhir $module,
        private TaskService $taskService
    ) {}

    /**
     * List tasks with filtering and pagination
     * 
     * GET /tasks?page=1&limit=25&status=pending&task_type=fhir_fetch&search_query=mrn123
     */
    public function listTasks(Request $request, Response $response): Response
    {
        try {
            $queryParams = $request->getQueryParams();
            
            // Parse pagination parameters
            $page = max(1, (int) ($queryParams['page'] ?? 1));
            $limit = min(100, max(1, (int) ($queryParams['limit'] ?? 25)));
            $pagination = TaskPaginationInfo::create($page, $limit);
            
            // Parse filter parameters
            $filter = TaskFilter::create()
                ->withStatus($queryParams['status'] ?? '')
                ->withTaskType($queryParams['task_type'] ?? '')
                ->withSearchQuery($queryParams['search_query'] ?? '');
            
            // Add date range if provided
            if (isset($queryParams['date_from']) || isset($queryParams['date_to'])) {
                $filter = $filter->withDateRange(
                    $queryParams['date_from'] ?? null,
                    $queryParams['date_to'] ?? null
                );
            }
            
            // Get tasks from service
            $taskListResponse = $this->taskService->listTasks($filter, $pagination);
            
            // Return JSON response
            $response->getBody()->write(json_encode($taskListResponse->toArray()));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus($taskListResponse->isSuccess() ? 200 : 500);
                
        } catch (\InvalidArgumentException $e) {
            $errorResponse = [
                'success' => false,
                'message' => 'Invalid parameters: ' . $e->getMessage(),
                'tasks' => [],
                'pagination' => TaskPaginationInfo::create()->toArray()
            ];
            
            $response->getBody()->write(json_encode($errorResponse));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(400);
                
        } catch (\Exception $e) {
            $this->module->log("TaskController::listTasks error: " . $e->getMessage(), []);
            
            $errorResponse = [
                'success' => false,
                'message' => 'Internal server error',
                'tasks' => [],
                'pagination' => TaskPaginationInfo::create()->toArray()
            ];
            
            $response->getBody()->write(json_encode($errorResponse));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500);
        }
    }

    /**
     * Get detailed information about a specific task
     * 
     * GET /tasks/{id}
     */
    public function getTaskDetails(Request $request, Response $response, $taskId): Response
    {
        try {
            if (empty($taskId)) {
                $errorResponse = [
                    'success' => false,
                    'message' => 'Task ID is required',
                    'task' => null
                ];
                
                $response->getBody()->write(json_encode($errorResponse));
                return $response
                    ->withHeader('Content-Type', 'application/json')
                    ->withStatus(400);
            }
            
            $taskDetailsResponse = $this->taskService->getTaskDetails($taskId);
            
            $response->getBody()->write(json_encode($taskDetailsResponse->toArray()));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus($taskDetailsResponse->isSuccess() ? 200 : 404);
                
        } catch (\Exception $e) {
            $this->module->log("TaskController::getTaskDetails error: " . $e->getMessage(), []);
            
            $errorResponse = [
                'success' => false,
                'message' => 'Internal server error',
                'task' => null
            ];
            
            $response->getBody()->write(json_encode($errorResponse));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500);
        }
    }

    /**
     * Queue full synchronization task
     * 
     * POST /tasks/full-sync
     */
    public function performFullSync(Request $request, Response $response): Response
    {
        try {
            $operationResponse = $this->taskService->queueFullSync();
            
            $response->getBody()->write(json_encode($operationResponse->toArray()));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus($operationResponse->isSuccess() ? 200 : 500);
                
        } catch (\Exception $e) {
            $this->module->log("TaskController::performFullSync error: " . $e->getMessage(), []);
            
            $errorResponse = [
                'success' => false,
                'message' => 'Failed to perform full sync: ' . $e->getMessage(),
                'task_id' => null,
                'statistics' => []
            ];
            
            $response->getBody()->write(json_encode($errorResponse));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500);
        }
    }

    /**
     * Queue retry failed resources operation
     * 
     * POST /tasks/retry-failed
     * Optional request body: {"filters": {"record_ids": [123, 456]}}
     */
    public function retryFailedResources(Request $request, Response $response): Response
    {
        try {
            // Parse optional filters from request body
            $body = $request->getParsedBody();
            $filters = isset($body['filters']) && is_array($body['filters']) ? $body['filters'] : [];
            
            $operationResponse = $this->taskService->queueRetryFailedResources($filters);
            
            $response->getBody()->write(json_encode($operationResponse->toArray()));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus($operationResponse->isSuccess() ? 200 : 500);
                
        } catch (\Exception $e) {
            $this->module->log("TaskController::retryFailedResources error: " . $e->getMessage(), []);
            
            $errorResponse = [
                'success' => false,
                'message' => 'Failed to retry failed resources: ' . $e->getMessage(),
                'task_id' => null,
                'statistics' => []
            ];
            
            $response->getBody()->write(json_encode($errorResponse));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500);
        }
    }

    /**
     * Delete a specific task
     * 
     * DELETE /tasks/{id}
     */
    public function deleteTask(Request $request, Response $response, string $taskId): Response
    {
        try {
            
            if (empty($taskId)) {
                $errorResponse = [
                    'success' => false,
                    'message' => 'Task ID is required'
                ];
                
                $response->getBody()->write(json_encode($errorResponse));
                return $response
                    ->withHeader('Content-Type', 'application/json')
                    ->withStatus(400);
            }
            
            $operationResponse = $this->taskService->deleteTask($taskId);
            
            $response->getBody()->write(json_encode($operationResponse->toArray()));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus($operationResponse->isSuccess() ? 200 : 400);
                
        } catch (\Exception $e) {
            $this->module->log("TaskController::deleteTask error: " . $e->getMessage(), []);
            
            $errorResponse = [
                'success' => false,
                'message' => 'Failed to delete task: ' . $e->getMessage()
            ];
            
            $response->getBody()->write(json_encode($errorResponse));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500);
        }
    }

    /**
     * Get queue statistics
     * 
     * GET /tasks/queue-stats
     */
    public function getQueueStatistics(Request $request, Response $response): Response
    {
        try {
            $statistics = $this->taskService->getQueueStatistics();
            
            $responseData = [
                'success' => true,
                'statistics' => $statistics,
                'message' => 'Queue statistics retrieved successfully'
            ];
            
            $response->getBody()->write(json_encode($responseData));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
                
        } catch (\Exception $e) {
            $this->module->log("TaskController::getQueueStatistics error: " . $e->getMessage(), []);
            
            $errorResponse = [
                'success' => false,
                'message' => 'Failed to retrieve queue statistics: ' . $e->getMessage(),
                'statistics' => []
            ];
            
            $response->getBody()->write(json_encode($errorResponse));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500);
        }
    }

    /**
     * Clean up completed tasks
     * 
     * POST /tasks/cleanup
     */
    public function cleanupCompletedTasks(Request $request, Response $response): Response
    {
        try {
            $operationResponse = $this->taskService->cleanupCompletedTasks();
            
            $response->getBody()->write(json_encode($operationResponse->toArray()));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus($operationResponse->isSuccess() ? 200 : 500);
                
        } catch (\Exception $e) {
            $this->module->log("TaskController::cleanupCompletedTasks error: " . $e->getMessage(), []);
            
            $errorResponse = [
                'success' => false,
                'message' => 'Failed to cleanup completed tasks: ' . $e->getMessage(),
                'statistics' => []
            ];
            
            $response->getBody()->write(json_encode($errorResponse));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500);
        }
    }
}