<?php

namespace Vanderbilt\FhirSnapshot\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\FhirSnapshot;
use Vanderbilt\FhirSnapshot\Services\MappingResourceService;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormResourceManager;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;

class MappingResourcesController extends AbstractController
{
    public function __construct(
        protected FhirSnapshot $module,
        protected MappingResourceService $mappingResourceService,
        protected RepeatedFormResourceManager $resourceManager
    ) {
        parent::__construct($module);
    }

    /**
     * List all selected mapping resources (predefined + custom) including deleted flag
     */
    public function list(Request $request, Response $response): Response
    {
        $predefinedData = $this->module->getProjectSetting(Constants::SETTING_MAPPING_RESOURCES) ?? [];
        $customData = $this->module->getProjectSetting(Constants::SETTING_CUSTOM_MAPPING_RESOURCES) ?? [];

        $predefined = $this->mappingResourceService->convertToMappingResources($predefinedData, MappingResource::TYPE_PREDEFINED);
        $custom = $this->mappingResourceService->convertToMappingResources($customData, MappingResource::TYPE_CUSTOM);

        $payload = [
            'selected_mapping_resources' => array_map(fn($r) => $r->toArray(), $predefined),
            'selected_custom_mapping_resources' => array_map(fn($r) => $r->toArray(), $custom),
        ];

        $response->getBody()->write(json_encode($payload));
        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * Create a new mapping resource and synchronize (treated as added)
     */
    public function create(Request $request, Response $response): Response
    {
        $params = (array)$request->getParsedBody();
        $name = $params['name'] ?? null;
        $spec = $params['resourceSpec'] ?? null;
        $type = $params['type'] ?? null; // 'predefined' | 'custom'

        if (!$name || !$spec || !$type) {
            return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Missing required fields (name, resourceSpec, type)'], 400);
        }

        $resource = MappingResource::create($name, $spec, $type);

        // Persist in the proper array
        [$predefinedData, $customData] = $this->getStoredResourceArrays();
        if ($type === MappingResource::TYPE_PREDEFINED) {
            $predefinedData[] = $resource->toArray();
        } else {
            $customData[] = $resource->toArray();
        }
        $this->saveResourceArrays($predefinedData, $customData);

        // Sync
        $allMrns = $this->resourceManager->getAllMrns();
        $this->resourceManager->addMappingResource($resource);
        $syncResults = [
            'resources_added' => 1,
            'resources_modified' => 0,
            'resources_removed' => 0,
            'resources_soft_deleted' => 0,
            'resources_restored' => 0,
            'tasks_created' => 0,
            'instances_updated' => count($allMrns),
            'total_mrns' => count($allMrns)
        ];

        $payload = [
            'status' => 'success',
            'resource' => $resource->toArray(),
            'sync_results' => $syncResults
        ];
        $response->getBody()->write(json_encode($payload));
        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * Update an existing mapping resource (name/spec) and synchronize (modified)
     */
    public function update(Request $request, Response $response, string $id): Response
    {
        if (!$id) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Missing resource id'], 400);

        $params = (array)$request->getParsedBody();
        $name = $params['name'] ?? null;
        $spec = $params['resourceSpec'] ?? null;

        // Load existing
        [$predefinedData, $customData] = $this->getStoredResourceArrays();
        [$resource, $type, $index] = $this->findResourceById($id, $predefinedData, $customData);
        if (!$resource) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Resource not found'], 404);

        // Update fields
        $updated = new MappingResource(
            $resource->getId(),
            $name ?? $resource->getName(),
            $spec ?? $resource->getResourceSpec(),
            $resource->getType(),
            $resource->isDeleted(),
            $resource->getDeletedAt()
        );

        if ($type === MappingResource::TYPE_PREDEFINED) {
            $predefinedData[$index] = $updated->toArray();
        } else {
            $customData[$index] = $updated->toArray();
        }
        $this->saveResourceArrays($predefinedData, $customData);

        // Sync as modified
        $allMrns = $this->resourceManager->getAllMrns();
        $this->resourceManager->updateMappingResource($updated);
        $syncResults = [
            'resources_added' => 0,
            'resources_modified' => 1,
            'resources_removed' => 0,
            'resources_soft_deleted' => 0,
            'resources_restored' => 0,
            'tasks_created' => 0,
            'instances_updated' => count($allMrns),
            'total_mrns' => count($allMrns)
        ];

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'resource' => $updated->toArray(),
            'sync_results' => $syncResults
        ]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * Soft-delete a mapping resource and synchronize (mark instances DELETED)
     */
    public function softDelete(Request $request, Response $response, string $id): Response
    {
        if (!$id) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Missing resource id'], 400);

        [$predefinedData, $customData] = $this->getStoredResourceArrays();
        [$resource, $type, $index] = $this->findResourceById($id, $predefinedData, $customData);
        if (!$resource) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Resource not found'], 404);

        $now = date('c');
        $updated = $resource->withDeleted(true)->withDeletedAt($now);
        if ($type === MappingResource::TYPE_PREDEFINED) {
            $predefinedData[$index] = $updated->toArray();
        } else {
            $customData[$index] = $updated->toArray();
        }
        $this->saveResourceArrays($predefinedData, $customData);

        $result = $this->resourceManager->removeMappingResource($updated);
        $instancesAffected = $result['instances_affected'] ?? 0;

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'resource' => $updated->toArray(),
            'sync_results' => [
                'resources_added' => 0,
                'resources_modified' => 0,
                'resources_removed' => 0,
                'resources_soft_deleted' => 1,
                'resources_restored' => 0,
                'tasks_created' => 0,
                'instances_updated' => $instancesAffected,
                'total_mrns' => count($this->resourceManager->getAllMrns())
            ]
        ]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * Restore a soft-deleted resource and synchronize (treated as added)
     */
    public function restore(Request $request, Response $response, string $id): Response
    {
        if (!$id) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Missing resource id'], 400);

        [$predefinedData, $customData] = $this->getStoredResourceArrays();
        [$resource, $type, $index] = $this->findResourceById($id, $predefinedData, $customData);
        if (!$resource) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Resource not found'], 404);

        $updated = $resource->withDeleted(false)->withDeletedAt(null);
        if ($type === MappingResource::TYPE_PREDEFINED) {
            $predefinedData[$index] = $updated->toArray();
        } else {
            $customData[$index] = $updated->toArray();
        }
        $this->saveResourceArrays($predefinedData, $customData);

        $affected = $this->resourceManager->restoreMappingResource($updated);

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'resource' => $updated->toArray(),
            'sync_results' => [
                'resources_added' => 1,
                'resources_modified' => 0,
                'resources_removed' => 0,
                'resources_soft_deleted' => 0,
                'resources_restored' => 1,
                'tasks_created' => 0,
                'instances_updated' => $affected,
                'total_mrns' => count($this->resourceManager->getAllMrns())
            ]
        ]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * Permanently delete (purge) instances marked as DELETED for this mapping resource
     */
    public function purgeDeleted(Request $request, Response $response, string $id): Response
    {
        if (!$id) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Missing resource id'], 400);

        [$predefinedData, $customData] = $this->getStoredResourceArrays();
        [$resource] = $this->findResourceById($id, $predefinedData, $customData);
        if (!$resource) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Resource not found'], 404);

        $purged = $this->resourceManager->purgeDeletedInstancesForMappingResource($resource);

        return $this->jsonResponse($response, [
            'status' => 'success',
            'resource' => $resource->toArray(),
            'purged_instances' => $purged
        ]);
    }

    /**
     * Hard-delete mapping resource configuration
     *
     * Behavior:
     * - Ensures existing instances are marked as DELETED (same as soft delete sync)
     * - Removes the mapping from project settings
     * - DOES NOT delete FHIR metadata instances; they remain with status=DELETED
     */
    public function delete(Request $request, Response $response, string $id): Response
    {
        if (!$id) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Missing resource id'], 400);

        [$predefinedData, $customData] = $this->getStoredResourceArrays();
        [$resource, $type, $index] = $this->findResourceById($id, $predefinedData, $customData);
        if (!$resource) return $this->jsonResponse($response, ['status' => 'error', 'message' => 'Resource not found'], 404);

        // Ensure instances are marked deleted (sync like soft-delete)
        $archived = $this->resourceManager->removeMappingResource($resource);

        // Remove from settings
        if ($type === MappingResource::TYPE_PREDEFINED) {
            array_splice($predefinedData, (int)$index, 1);
        } else {
            array_splice($customData, (int)$index, 1);
        }
        $this->saveResourceArrays($predefinedData, $customData);

        return $this->jsonResponse($response, [
            'status' => 'success',
            'removed' => true,
            'resource' => $resource->toArray(),
            'instances_marked_deleted' => is_array($archived) ? count($archived) : 0
        ]);
    }

    private function getStoredResourceArrays(): array
    {
        $predefinedData = $this->module->getProjectSetting(Constants::SETTING_MAPPING_RESOURCES) ?? [];
        $customData = $this->module->getProjectSetting(Constants::SETTING_CUSTOM_MAPPING_RESOURCES) ?? [];
        return [$predefinedData, $customData];
    }

    private function saveResourceArrays(array $predefinedData, array $customData): void
    {
        $this->module->setProjectSetting(Constants::SETTING_MAPPING_RESOURCES, $predefinedData);
        $this->module->setProjectSetting(Constants::SETTING_CUSTOM_MAPPING_RESOURCES, $customData);
    }

    /**
     * Find a mapping resource by id. Returns [MappingResource|null, type, index]
     */
    private function findResourceById(string $id, array $predefinedData, array $customData): array
    {
        $predefined = $this->mappingResourceService->convertToMappingResources($predefinedData, MappingResource::TYPE_PREDEFINED);
        foreach ($predefined as $idx => $r) {
            if ($r->getId() === $id) {
                return [$r, MappingResource::TYPE_PREDEFINED, $idx];
            }
        }
        $custom = $this->mappingResourceService->convertToMappingResources($customData, MappingResource::TYPE_CUSTOM);
        foreach ($custom as $idx => $r) {
            if ($r->getId() === $id) {
                return [$r, MappingResource::TYPE_CUSTOM, $idx];
            }
        }
        return [null, null, null];
    }
}
