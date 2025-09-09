<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\AllFhir\AllFhir;
use Vanderbilt\AllFhir\ValueObjects\MappingResource;
use Vanderbilt\AllFhir\ValueObjects\FhirResourceMetadata;
use Vanderbilt\AllFhir\ValueObjects\SyncResults;
use Vanderbilt\AllFhir\Queue\QueueManager;
use Vanderbilt\AllFhir\Services\FhirResourceService;

/**
 * RepeatedFormResourceManager
 * 
 * High-level coordinator service that provides a unified API for managing FHIR resources 
 * stored in REDCap repeated forms, combining data access, synchronization, and queue management.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Serves as the main entry point for FHIR resource management operations
 * - Coordinates between data access layer, synchronization service, and queue manager
 * - Provides user-friendly API methods that handle complex multi-step operations
 * - Manages resource lifecycle from creation to archival
 * - Generates comprehensive project summaries and reports
 * 
 * CORE OPERATIONS:
 * 
 * RESOURCE MAPPING MANAGEMENT:
 * - Add/update/remove mapping resources with automatic synchronization
 * - Handles MRN addition with automatic resource instance creation
 * - Manages the complete lifecycle of resource mappings
 * - Resources are automatically fetched by cron job (no task creation)
 * 
 * RESOURCE STATUS & MONITORING:
 * - Provides resource status by MRN and resource type
 * - Generates project-wide summaries with status counts
 * - Tracks resource metadata across all patients
 * 
 * DATA OPERATIONS:
 * - Retrieves FHIR resource files from REDCap edocs
 * - Exports resource data in structured formats
 * - Handles bulk retry operations for failed resources
 * - Forces resource fetching with real-time processing regardless of current status
 * - Provides reusable single resource fetching logic for both real-time and background operations
 * - Manages resource archival and cleanup
 * 
 * SYNCHRONIZATION & MAINTENANCE:
 * - Performs full project synchronization between config and data
 * - Identifies and resolves data inconsistencies
 * - Provides automated cleanup for orphaned instances
 * 
 * USER INTERFACE SUPPORT:
 * - Maintains MRN-based external API (user-friendly)
 * - Handles record ID conversion internally (REDCap-compatible)
 * - Provides detailed error handling and status reporting
 * 
 * USAGE EXAMPLES:
 * - $manager->addMappingResource($resource) - Add new FHIR resource mapping (void return)
 * - $manager->updateMappingResource($resource) - Update existing mapping (void return)
 * - $manager->addMrn($mrn, $resources) - Add new MRN to project (void return)
 * - $manager->getResourceStatus($mrn) - Get all resources for an MRN
 * - $manager->retryFailedResource($mrn, $type, $instance) - Retry failed fetch
 * - $manager->forceFetchResourcesByMrns($mrns, $metadataFilter) - Real-time force fetch (MRN-based)
 * - $manager->forceFetchResourcesByRecordIds($recordIds, $metadataFilter) - Real-time force fetch (record ID-based)
 * - $manager->fetchSingleResourceRealTime($resource) - Fetch single resource with real-time processing
 * - $manager->getProjectSummary() - Get complete project status overview
 * - $manager->exportResourceData($mrn) - Export all FHIR data for MRN
 * - $manager->performFullSync($configuredResources) - Synchronize configuration with data
 * 
 * CONFIGURATION INTEGRATION:
 * - Use $module->getAllConfiguredMappingResources() to get configured resources
 * - Integrates with MappingResourceService for robust data conversion
 * - Supports legacy format migration and validation through main module helper
 */
class RepeatedFormResourceManager
{
    private string $projectId;

    /**
     * Initialize the resource manager with all required service dependencies
     * 
     * @param AllFhir $module Main module instance providing project context and configuration
     * @param RepeatedFormDataAccessor $dataAccessor Low-level data access for REDCap repeated forms
     * @param ResourceSynchronizationService $syncService Orchestration service for resource lifecycle management
     * @param QueueManager $queueManager Asynchronous task management for FHIR operations
     * @param FhirResourceService $fhirResourceService Service for real-time FHIR resource fetching and storage
     */
    public function __construct(
        private AllFhir $module,
        private RepeatedFormDataAccessor $dataAccessor,
        private ResourceSynchronizationService $syncService,
        private QueueManager $queueManager,
        private FhirResourceService $fhirResourceService,
    ) {
        $this->projectId = $module->getProjectId();
    }

    /**
     * Get all MRNs in the project
     * 
     * @return array Array of MRN strings
     */
    public function getAllMrns(): array
    {
        return $this->dataAccessor->getAllMrns();
    }

    /**
     * Add a new FHIR resource mapping to the project
     * 
     * Creates resource instances for all existing MRNs in the project. Resources will be
     * automatically fetched by the cron job.
     * 
     * @param MappingResource $resource New mapping resource configuration
     */
    public function addMappingResource(MappingResource $resource): void
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        $this->syncService->syncMappingResourceCreated($resource, $existingMrns);
    }

    /**
     * Update an existing FHIR resource mapping configuration
     * 
     * Marks existing instances as outdated and creates new instances with updated configuration.
     * Resources will be automatically fetched by the cron job.
     * 
     * @param MappingResource $resource Updated mapping resource configuration
     */
    public function updateMappingResource(MappingResource $resource): void
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        $this->syncService->syncMappingResourceUpdated($resource, $existingMrns);
    }

    /**
     * Remove a FHIR resource mapping from the project
     * 
     * Marks existing instances as deleted while preserving historical data.
     * 
     * @param MappingResource $resource Mapping resource to be deleted
     * @return array Array of archived instance details for reporting
     */
    public function removeMappingResource(MappingResource $resource): array
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        return $this->syncService->syncMappingResourceDeleted($resource, $existingMrns);
    }

    /**
     * Restore a soft-deleted mapping resource by reactivating deleted instances to pending
     * and creating missing ones if none exist for a record.
     * 
     * @param MappingResource $resource
     * @return int number of instances updated/created
     */
    public function restoreMappingResource(MappingResource $resource): int
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        return $this->syncService->syncMappingResourceRestored($resource, $existingMrns);
    }

    /**
     * Permanently delete instances marked as DELETED for a mapping resource
     *
     * @param MappingResource $resource
     * @return int number of instances purged
     */
    public function purgeDeletedInstancesForMappingResource(MappingResource $resource): int
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        return $this->syncService->purgeDeletedInstances($resource, $existingMrns);
    }

    /**
     * Add a new patient/MRN to the project
     * 
     * Creates resource instances for all currently active mappings. Resources will be
     * automatically fetched by the cron job.
     * 
     * @param string $mrn Medical Record Number of the newly added patient
     * @param array $activeResources Array of MappingResource objects currently active
     */
    public function addMrn(string $mrn, array $activeResources): void
    {
        $this->syncService->syncNewMrn($mrn, $activeResources);
    }

    public function getResourceStatus(string $mrn, ?string $resourceType = null): array
    {
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return [];
        }
        
        if ($resourceType) {
            $metadata = $this->dataAccessor->getResourceMetadataByType($recordId, $resourceType);
            return array_map(fn($item) => $item->toArray(), $metadata);
        }
        
        $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
        return array_map(fn($item) => $item->toArray(), $allMetadata);
    }

    public function getResourceFile(string $mrn, string $resourceType, int $repeatInstance): ?array
    {
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return null;
        }
        
        $metadata = $this->dataAccessor->getResourceMetadata($recordId, $resourceType, $repeatInstance);
        
        if (!$metadata || !$metadata->getEdocId()) {
            return null;
        }
        
        $fileContent = \REDCap::getFile($metadata->getEdocId());
        
        if (!$fileContent) {
            return null;
        }
        
        return [
            'content' => $fileContent,
            'metadata' => $metadata->toArray(),
            'edoc_id' => $metadata->getEdocId()
        ];
    }

    /**
     * Retry a specific failed resource by marking it as pending for re-fetch
     * 
     * @param string $mrn The Medical Record Number
     * @param string $resourceType The resource type name to retry
     * @param int $repeatInstance The repeat instance number
     * @return bool True if resource was marked for retry, false if not found or not failed
     */
    public function retryFailedResource(string $mrn, string $resourceType, int $repeatInstance): bool
    {
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return false;
        }
        
        $metadata = $this->dataAccessor->getResourceMetadata($recordId, $resourceType, $repeatInstance);
        
        if (!$metadata || !$metadata->isFailed()) {
            return false;
        }
        
        // Mark as pending for automatic processing by cron job
        $resources = [['record_id' => $recordId, 'metadata' => $metadata]];
        $this->markResourcesAsPending($resources);
        
        return true; // Resource marked as pending, will be processed by cron job
    }

    /**
     * Retry all failed resources with optional filtering by resource type or record IDs
     * 
     * @param array $filters Optional filters including 'resource_type' and 'record_ids' to limit retry scope
     * @return int Number of resources marked for retry
     */
    public function bulkRetryFailed(array $filters = []): int
    {
        // Determine which record IDs to process
        if (!empty($filters['record_ids']) && is_array($filters['record_ids'])) {
            $recordIds = array_map('strval', $filters['record_ids']); // Ensure strings
        } else {
            $recordIds = $this->dataAccessor->getAllRecordIds();
        }
        
        $resourcesToRetry = [];
        
        // Find all failed resources that match filters
        foreach ($recordIds as $recordId) {
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            
            foreach ($allMetadata as $metadata) {
                if (!$metadata->isFailed()) {
                    continue;
                }
                
                if (!empty($filters['resource_type']) && $metadata->getResourceName() !== $filters['resource_type']) {
                    continue;
                }
                
                $resourcesToRetry[] = ['record_id' => $recordId, 'metadata' => $metadata];
            }
        }
        
        // Mark resources as pending for automatic processing by cron job
        $retriedCount = $this->markResourcesAsPending($resourcesToRetry);
        
        return $retriedCount;
    }

    /**
     * Perform full synchronization between configured resources and existing data
     * 
     * Coordinates comprehensive project synchronization by analyzing configured mapping 
     * resources against existing data instances, creating missing instances, and cleaning up 
     * orphaned data. Resources will be automatically fetched by the cron job.
     * 
     * RECOMMENDED USAGE:
     * ```php
     * // Get configured resources using the centralized helper method
     * $configuredResources = $module->getAllConfiguredMappingResources();
     * $syncResults = $manager->performFullSync($configuredResources);
     * ```
     * 
     * SYNC OPERATIONS PERFORMED:
     * - Compares configured vs existing resource instances across all MRNs
     * - Creates missing resource instances for incomplete patient coverage
     * - Cleans up orphaned instances from removed mapping configurations
     * - Provides detailed results for monitoring and reporting
     * 
     * @param MappingResource[] $configuredResources Array of configured mapping resources
     * @return SyncResults Sync results with comparison data and cleanup counts
     */
    public function performFullSync(array $configuredResources): SyncResults
    {
        $existingMrns = $this->dataAccessor->getAllMrns();
        $comparison = $this->syncService->compareConfiguredVsExisting($configuredResources, $existingMrns);
        
        $syncResults = SyncResults::create($comparison);
        
        $createdInstances = 0;
        
        // Create a lookup map for configured resources by name
        /** @var array<string, MappingResource> $resourceLookup */
        $resourceLookup = [];
        foreach ($configuredResources as $resource) {
            $resourceLookup[$resource->getName()] = $resource;
        }
        
        // Create missing instances
        foreach ($syncResults->getMissingInstances() as $missing) {
            /** @var array{mrn: string, resource_type: string} $missing */
            $recordId = $this->dataAccessor->getRecordIdByMrn($missing['mrn']);
            $nextInstance = $this->dataAccessor->getNextRepeatInstance($recordId);
            
            // Find the corresponding MappingResource to get full details
            $mappingResource = $resourceLookup[$missing['resource_type']] ?? null;
            if (!$mappingResource) {
                // Skip if we can't find the mapping resource (shouldn't happen in normal flow)
                continue;
            }
            
            $metadata = FhirResourceMetadata::create(
                $mappingResource->getName(),
                $mappingResource->getResourceSpec(), 
                $mappingResource->getType(),
                $nextInstance,
                $mappingResource->getId()
            );
            
            $this->dataAccessor->saveResourceMetadata($recordId, $metadata);
            $createdInstances++;
        }
        
        // Resources will be automatically fetched by cron job
        
        $syncResults->setCreatedInstances($createdInstances);
        $cleanedCount = $this->syncService->cleanupOrphanedInstances($syncResults->getOrphanedInstances());
        $syncResults->setCleanedInstances($cleanedCount);
        
        return $syncResults;
    }

    public function getProjectSummary(): array
    {
        $allMrns = $this->dataAccessor->getAllMrns();
        $summary = [
            'total_mrns' => count($allMrns),
            'overall_status_counts' => [
                FhirResourceMetadata::STATUS_PENDING => 0,
                FhirResourceMetadata::STATUS_FETCHING => 0,
                FhirResourceMetadata::STATUS_COMPLETED => 0,
                FhirResourceMetadata::STATUS_FAILED => 0,
                FhirResourceMetadata::STATUS_OUTDATED => 0,
                FhirResourceMetadata::STATUS_DELETED => 0
            ]
        ];
        
        foreach ($allMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue; // Skip if no record ID found for this MRN
            }
            
            $statusCounts = $this->dataAccessor->getResourceStatusCounts($recordId);
            
            foreach ($statusCounts as $status => $count) {
                $summary['overall_status_counts'][$status] += $count;
            }
        }
        
        $syncStatus = $this->syncService->getProjectSyncStatus();
        $summary['sync_status'] = $syncStatus;
        
        return $summary;
    }

    public function exportResourceData(string $mrn, array $resourceTypes = []): array
    {
        $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
        if (!$recordId) {
            return [
                'mrn' => $mrn,
                'export_timestamp' => date('c'),
                'total_resources' => 0,
                'resources' => [],
                'error' => 'No record found for MRN: ' . $mrn
            ];
        }
        
        $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
        $exportData = [];
        
        foreach ($allMetadata as $metadata) {
            if (!empty($resourceTypes) && !in_array($metadata->getResourceName(), $resourceTypes)) {
                continue;
            }
            
            if (!$metadata->isCompleted() || !$metadata->getEdocId()) {
                continue;
            }
            
            $eDocFile = \REDCap::getFile($metadata->getEdocId());
            $fileContent = $eDocFile[2] ?? null; // get the content of the eDoc file
            if ($fileContent) {
                $exportData[] = [
                    'metadata' => $metadata->toArray(),
                    'data' => json_decode($fileContent, true)
                ];
            }
        }
        
        return [
            'mrn' => $mrn,
            'export_timestamp' => date('c'),
            'total_resources' => count($exportData),
            'resources' => $exportData
        ];
    }

    public function archiveCompletedResources(array $filters = []): int
    {
        $allMrns = $this->dataAccessor->getAllMrns();
        $archivedCount = 0;
        
        foreach ($allMrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if (!$recordId) {
                continue;
            }
            
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            
            foreach ($allMetadata as $metadata) {
                if (!$metadata->isCompleted()) {
                    continue;
                }
                
                if (!empty($filters['resource_type']) && $metadata->getResourceName() !== $filters['resource_type']) {
                    continue;
                }
                
                if (!empty($filters['older_than_days'])) {
                    $fetchDate = $metadata->getFetchDate();
                    if (!$fetchDate || strtotime($fetchDate) > strtotime("-{$filters['older_than_days']} days")) {
                        continue;
                    }
                }
                
                $archivedMetadata = $metadata->withStatus(FhirResourceMetadata::STATUS_DELETED);
                $this->dataAccessor->saveResourceMetadata($recordId, $archivedMetadata);
                $archivedCount++;
            }
        }
        
        return $archivedCount;
    }

    /**
     * Force fetch all resources for specified record IDs with immediate real-time processing
     * 
     * Performs immediate FHIR resource fetching for all matching resources, regardless of their 
     * current status (completed, failed, etc.). This method processes resources in real-time
     * rather than creating background tasks, providing immediate results and status updates.
     * 
     * @param array $recordIds Array of REDCap record ID strings to force fetch resources for
     * @param array $metadataFilter Optional array of FhirResourceMetadata objects to limit scope (empty = all resources)
     * @return array Results containing detailed fetch results, timing info, and success/failure details per resource
     */
    public function forceFetchResourcesByRecordIds(array $recordIds, array $metadataFilter = []): array
    {
        if (empty($recordIds)) {
            return [
                'total_resources' => 0,
                'successful_fetches' => 0,
                'failed_fetches' => 0,
                'message' => 'No record IDs provided',
                'resource_results' => [],
                'timing_summary' => []
            ];
        }
        
        $resourcesToFetch = [];
        // Build active mapping index so we only fetch resources with active mapping
        $activeIndex = $this->getActiveMappingIndex();
        
        // Build filter lookup for efficient filtering if provided
        $filterLookup = [];
        if (!empty($metadataFilter)) {
            foreach ($metadataFilter as $filterMetadata) {
                $key = $filterMetadata->getResourceName() . '|' . $filterMetadata->getRepeatInstance();
                $filterLookup[$key] = true;
            }
        }
        
        // Collect all resources to fetch
        foreach ($recordIds as $recordId) {
            $mrn = $this->dataAccessor->getMrnByRecordId($recordId);
            if (!$mrn) {
                continue; // Skip if no MRN found for this record
            }
            
            $allMetadata = $this->dataAccessor->getAllResourceMetadata($recordId);
            
            foreach ($allMetadata as $metadata) {
                // Skip deleted resources or resources without active mapping
                if ($metadata->isDeleted()) {
                    continue;
                }
                if (!$this->isMappingActiveForMetadata($metadata, $activeIndex)) {
                    continue;
                }
                // Apply metadata filter if specified
                if (!empty($filterLookup)) {
                    $key = $metadata->getResourceName() . '|' . $metadata->getRepeatInstance();
                    if (!isset($filterLookup[$key])) {
                        continue;
                    }
                }
                
                $resourcesToFetch[] = [
                    'record_id' => $recordId,
                    'mrn' => $mrn,
                    'metadata' => $metadata
                ];
            }
        }
        
        if (empty($resourcesToFetch)) {
            return [
                'total_resources' => 0,
                'successful_fetches' => 0,
                'failed_fetches' => 0,
                'message' => 'No resources found for specified record IDs and filters',
                'resource_results' => [],
                'timing_summary' => []
            ];
        }
        
        // Perform real-time fetching for each resource
        $startTime = microtime(true);
        $resourceResults = [];
        $successCount = 0;
        $failCount = 0;
        $apiTimes = [];
        
        foreach ($resourcesToFetch as $resource) {
            $fetchResult = $this->fetchSingleResourceRealTime($resource);
            
            $resourceResults[] = $fetchResult;
            $apiTimes[] = $fetchResult['api_time'];
            
            if ($fetchResult['success']) {
                $successCount++;
            } else {
                $failCount++;
            }
        }
        
        $totalTime = (microtime(true) - $startTime) * 1000; // Convert to milliseconds
        
        return [
            'total_resources' => count($resourcesToFetch),
            'successful_fetches' => $successCount,
            'failed_fetches' => $failCount,
            'message' => "Real-time fetch completed: {$successCount} successful, {$failCount} failed out of " . count($resourcesToFetch) . " resource(s) across " . count($recordIds) . " record(s)",
            'resource_results' => $resourceResults,
            'timing_summary' => [
                'total_time_ms' => $totalTime,
                'average_api_time_ms' => !empty($apiTimes) ? array_sum($apiTimes) / count($apiTimes) : 0,
                'min_api_time_ms' => !empty($apiTimes) ? min($apiTimes) : 0,
                'max_api_time_ms' => !empty($apiTimes) ? max($apiTimes) : 0
            ]
        ];
    }

    private function getActiveMappingIndex(): array
    {
        $active = $this->module->getAllConfiguredMappingResources();
        $ids = [];
        $nameType = [];
        foreach ($active as $r) {
            if (method_exists($r, 'getId') && $r->getId()) {
                $ids[$r->getId()] = true;
            }
            $nameType[$r->getName() . '|' . $r->getType()] = true;
        }
        return ['ids' => $ids, 'nameType' => $nameType];
    }

    private function isMappingActiveForMetadata(\Vanderbilt\AllFhir\ValueObjects\FhirResourceMetadata $meta, array $activeIndex): bool
    {
        $id = $meta->getMappingResourceId();
        if (!empty($id)) return isset($activeIndex['ids'][$id]);
        $key = $meta->getResourceName() . '|' . $meta->getMappingType();
        return isset($activeIndex['nameType'][$key]);
    }

    /**
     * Force fetch all resources for specified MRNs with immediate real-time processing (convenience wrapper)
     * 
     * Convenience method that provides MRN-based interface while internally using the record ID-based
     * implementation. Converts MRNs to record IDs and delegates to forceFetchResourcesByRecordIds()
     * for immediate real-time FHIR resource fetching.
     * 
     * @param array $mrns Array of MRN strings to force fetch resources for
     * @param array $metadataFilter Optional array of FhirResourceMetadata objects to limit scope (empty = all resources)
     * @return array Results containing detailed fetch results, timing info, and success/failure details per resource
     */
    public function forceFetchResourcesByMrns(array $mrns, array $metadataFilter = []): array
    {
        if (empty($mrns)) {
            return [
                'total_resources' => 0,
                'successful_fetches' => 0,
                'failed_fetches' => 0,
                'message' => 'No MRNs provided',
                'resource_results' => [],
                'timing_summary' => []
            ];
        }
        
        // Convert MRNs to record IDs
        $recordIds = [];
        $mrnToRecordMap = [];
        
        foreach ($mrns as $mrn) {
            $recordId = $this->dataAccessor->getRecordIdByMrn($mrn);
            if ($recordId) {
                $recordIds[] = $recordId;
                $mrnToRecordMap[$recordId] = $mrn;
            }
        }
        
        if (empty($recordIds)) {
            return [
                'total_resources' => 0,
                'successful_fetches' => 0,
                'failed_fetches' => 0,
                'message' => 'No valid record IDs found for provided MRNs',
                'resource_results' => [],
                'timing_summary' => []
            ];
        }
        
        // Delegate to record ID-based implementation
        $result = $this->forceFetchResourcesByRecordIds($recordIds, $metadataFilter);
        
        // Update message to be MRN-oriented
        if ($result['total_resources'] > 0) {
            $result['message'] = "Real-time fetch completed: {$result['successful_fetches']} successful, {$result['failed_fetches']} failed out of {$result['total_resources']} resource(s) across " . count($mrns) . " MRN(s)";
        }
        
        return $result;
    }

    /**
     * Fetch a single resource in real-time with proper status management
     * 
     * Handles the complete lifecycle of fetching a single FHIR resource, including
     * status updates, error handling, and result reporting. This method is designed
     * to be reusable for both force-fetch operations and background processing.
     * 
     * Uses the existing FhirResourceMetadata object and passes it to FhirResourceService
     * to ensure consistent metadata handling without recreation.
     * 
     * @param array $resource Array with keys: record_id, mrn, metadata (FhirResourceMetadata)
     * @return array Result array with success status, timing info, and detailed results
     */
    public function fetchSingleResourceRealTime(array $resource): array
    {
        $startTime = microtime(true);
        $recordId = $resource['record_id'];
        $mrn = $resource['mrn'];
        $metadata = $resource['metadata'];
        
        try {
            // Resolve configured MappingResource (to include params if available)
            $mappingResource = $this->resolveConfiguredMappingResource($metadata);

            // Use FhirResourceService to fetch and store the resource
            // Pass the existing metadata object instead of letting the service recreate it
            $result = $this->fhirResourceService->fetchAndStoreResource(
                $recordId,
                $mrn,
                $metadata,
                [
                    'is_refetch' => true, // Force fetch is always a refetch
                    'mapping_resource' => $mappingResource
                ]
            );
            
            $apiTime = (microtime(true) - $startTime) * 1000; // Convert to milliseconds
            
            if ($result['success']) {
                return [
                    'success' => true,
                    'api_time' => $apiTime,
                    'payload_size' => $result['data']['data_size'] ?? 0,
                    'message' => $result['message'],
                    'record_id' => $recordId,
                    'mrn' => $mrn,
                    'resource_type' => $metadata->getResourceName(),
                    'repeat_instance' => $metadata->getRepeatInstance(),
                    'edoc_id' => $result['data']['edoc_id'] ?? null
                ];
            } else {
                return [
                    'success' => false,
                    'api_time' => $apiTime,
                    'error' => $result['message'],
                    'record_id' => $recordId,
                    'mrn' => $mrn,
                    'resource_type' => $metadata->getResourceName(),
                    'repeat_instance' => $metadata->getRepeatInstance()
                ];
            }
            
        } catch (\Exception $e) {
            // Let FhirResourceService handle the status update, but if it didn't reach the service,
            // we need to mark as failed manually
            $failedMetadata = $metadata
                ->withStatus(FhirResourceMetadata::STATUS_FAILED)
                ->withErrorMessage($e->getMessage());
            $this->dataAccessor->saveResourceMetadata($recordId, $failedMetadata);
            
            $apiTime = (microtime(true) - $startTime) * 1000;
            
            return [
                'success' => false,
                'api_time' => $apiTime,
                'error' => $e->getMessage(),
                'record_id' => $recordId,
                'mrn' => $mrn,
                'resource_type' => $metadata->getResourceName(),
                'repeat_instance' => $metadata->getRepeatInstance()
            ];
        }
    }

    private function resolveConfiguredMappingResource(FhirResourceMetadata $metadata): ?MappingResource
    {
        try {
            $configured = $this->module->getAllConfiguredMappingResources();
            $id = $metadata->getMappingResourceId();
            if (!empty($id)) {
                foreach ($configured as $res) if ($res->getId() === $id) return $res;
            }
            foreach ($configured as $res) {
                if ($res->getName() === $metadata->getResourceName()
                    && $res->getType() === $metadata->getMappingType()
                    && $res->getResourceSpec() === $metadata->getResourceSpec()) {
                    return $res;
                }
            }
        } catch (\Throwable $e) {}
        return null;
    }

    /**
     * Mark multiple resources as pending and clear any error messages
     * 
     * @param array $resources Array of arrays with keys: record_id, metadata (FhirResourceMetadata)
     * @return int Number of resources marked as pending
     */
    private function markResourcesAsPending(array $resources): int
    {
        $markedCount = 0;
        
        foreach ($resources as $resource) {
            $recordId = $resource['record_id'];
            $metadata = $resource['metadata'];
            
            $pendingMetadata = $metadata
                ->withStatus(FhirResourceMetadata::STATUS_PENDING)
                ->withErrorMessage(null);
            
            $this->dataAccessor->saveResourceMetadata($recordId, $pendingMetadata);
            $markedCount++;
        }
        
        return $markedCount;
    }

}
