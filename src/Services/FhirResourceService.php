<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\AllFhir\Contracts\FhirClientInterface;
use Vanderbilt\AllFhir\ValueObjects\FhirResourceMetadata;
use Vanderbilt\AllFhir\ValueObjects\MappingResource;
use Vanderbilt\AllFhir\Services\MappingResourceService;

/**
 * FhirResourceService
 * 
 * Service for fetching FHIR resources and storing them in REDCap repeated forms.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Fetches FHIR resources from external APIs/servers via FhirClientInterface
 * - Stores FHIR JSON payloads as REDCap edoc files
 * - Updates resource metadata status throughout the fetch process
 * - Handles FHIR-specific error conditions and pagination
 * - Manages the complete lifecycle of FHIR resource retrieval and storage
 * 
 * PROCESSING WORKFLOW:
 * 
 * 1. STATUS MANAGEMENT:
 *    - Requires existing FhirResourceMetadata object (passed via options or retrieved from database)
 *    - Updates resource status to FETCHING before beginning
 *    - Tracks progress through REDCap repeated form updates
 * 
 * 2. FHIR DATA RETRIEVAL:
 *    - Connects to FHIR server/API using MRN and resource type
 *    - Handles authentication, pagination, and API-specific requirements
 *    - Processes FHIR responses and validates data structure
 * 
 * 3. FILE STORAGE:
 *    - Stores FHIR JSON payload as REDCap edoc file
 *    - Generates descriptive filename for tracking
 *    - Links file to resource metadata via edoc ID
 * 
 * 4. COMPLETION HANDLING:
 *    - Updates resource status to COMPLETED on success
 *    - Records fetch timestamp and pagination metadata
 *    - Clears any previous error messages
 * 
 * 5. ERROR HANDLING:
 *    - Updates resource status to FAILED on errors
 *    - Stores detailed error messages for troubleshooting
 *    - Maintains data integrity even when fetch fails
 * 
 * FHIR-SPECIFIC FEATURES:
 * - Handles pagination for large FHIR resource sets
 * - Supports different FHIR resource types (Patient, Observation, etc.)
 * - Manages FHIR-specific error conditions and retry scenarios
 * - Integrates with REDCap's FHIR infrastructure via clean interface abstraction
 */
class FhirResourceService
{
    private RepeatedFormDataAccessor $dataAccessor;
    private FhirClientInterface $fhirClient;
    private MappingResourceService $mappingResourceService;

    /**
     * Initialize the FHIR resource service with data access and client dependencies
     * 
     * @param RepeatedFormDataAccessor $dataAccessor Service for managing REDCap repeated form data and metadata
     * @param FhirClientInterface $fhirClient Interface for fetching FHIR resources from external systems
     */
    public function __construct(
        RepeatedFormDataAccessor $dataAccessor,
        FhirClientInterface $fhirClient,
        MappingResourceService $mappingResourceService
    ) {
        $this->dataAccessor = $dataAccessor;
        $this->fhirClient = $fhirClient;
        $this->mappingResourceService = $mappingResourceService;
    }

    /**
     * Fetch and store FHIR resource for a given record using existing metadata
     * 
     * @param string $recordId REDCap record identifier
     * @param string $mrn Medical Record Number for FHIR API calls
     * @param string $resourceType FHIR resource type (Patient, Observation, etc.)
     * @param int $repeatInstance REDCap repeated form instance number
     * @param array $options Required options: metadata (FhirResourceMetadata), mapping_resource (MappingResource), is_refetch (bool)
     * @return array Result array with success status, message, and data
     */
    public function fetchAndStoreResource(
        string $recordId,
        string $mrn,
        FhirResourceMetadata $metadata,
        array $options = []
    ): array {
        $isRefetch = $options['is_refetch'] ?? false;
        $resourceName = $metadata->getResourceName();
        $repeatInstance = $metadata->getRepeatInstance();


        // Update status to FETCHING
        $metadata = $metadata->withStatus(FhirResourceMetadata::STATUS_FETCHING);
        $this->dataAccessor->saveResourceMetadata($recordId, $metadata);

        try {
            // Resolve MappingResource strictly by ID (or provided)
            $mappingResource = $options['mapping_resource'] ?? null;
            if ($mappingResource instanceof MappingResource) {
                if (method_exists($mappingResource, 'isDeleted') && $mappingResource->isDeleted()) {
                    return $this->handleFetchFailure(
                        $recordId,
                        $metadata,
                        'Mapping resource is deleted; cannot fetch.'
                    );
                }
            } else {
                $id = $metadata->getMappingResourceId();
                if (empty($id)) {
                    return $this->handleFetchFailure(
                        $recordId,
                        $metadata,
                        'Missing mapping_resource_id; re-sync configuration is required.'
                    );
                }
                [$predefinedData, $customData] = $this->mappingResourceService->getStoredResourceArrays();
                [$resolved] = $this->mappingResourceService->findResourceByIdInArrays($id, $predefinedData, $customData);
                if (!$resolved || (method_exists($resolved, 'isDeleted') && $resolved->isDeleted())) {
                    return $this->handleFetchFailure(
                        $recordId,
                        $metadata,
                        'Mapping resource not found or deleted; cannot fetch.'
                    );
                }
                $mappingResource = $resolved;
            }
            $mappingResourceId = $mappingResource->getId();
            
            // Fetch FHIR resource data from external system
            $fhirData = $this->fhirClient->fetchFhirResource($mrn, $mappingResource, $isRefetch);
            
            if ($fhirData === null) {
                // No data found - update metadata and return failure result
                return $this->handleFetchFailure(
                    $recordId,
                    $metadata,
                    "No data found for resource type: $resourceName"
                );
            }

            // Store FHIR data as REDCap edoc file
            $edocId = $this->storeFhirDataAsFile($fhirData, $mrn, $resourceName);
            
            // Update metadata with completion status and file reference
            $completedMetadata = $metadata
                ->withStatus(FhirResourceMetadata::STATUS_COMPLETED)
                ->withEdocId($edocId)
                ->withFetchDate(date('Y-m-d H:i:s'));

            // Add pagination metadata if present in FHIR response
            if (isset($fhirData['pagination'])) {
                $completedMetadata = $completedMetadata->withPaginationInfo($fhirData['pagination']);
            }

            $this->dataAccessor->saveResourceMetadata($recordId, $completedMetadata);

            return [
                'success' => true,
                'message' => "Successfully fetched and stored $resourceName for Record ID: $recordId, MRN: $mrn (Instance: $repeatInstance)",
                'data' => [
                    'record_id' => $recordId,
                    'mrn' => $mrn,
                    'resource_name' => $resourceName,
                    'repeat_instance' => $repeatInstance,
                    'edoc_id' => $edocId,
                    'data_size' => strlen(json_encode($fhirData)),
                    'is_refetch' => $isRefetch,
                    'mapping_resource_id' => $mappingResourceId
                ]
            ];

        } catch (\Exception $e) {
            return $this->handleFetchFailure($recordId, $metadata, $e->getMessage());
        }
    }


    /**
     * Store FHIR data as REDCap edoc file
     * 
     * @param array $fhirData FHIR data to store
     * @param string $mrn Medical Record Number
     * @param string $resourceType FHIR resource type
     * @return int REDCap edoc ID
     * @throws \RuntimeException If file storage fails
     */
    public function storeFhirDataAsFile(array $fhirData, string $mrn, string $resourceType): int
    {
        $jsonContent = json_encode($fhirData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        $projectId = $this->dataAccessor->getProjectId();
        $filename = sprintf('%s_%s_%s_%s.json', $projectId, $mrn, $resourceType, date('Y-m-d_H-i-s'));
        
        $tempPath = sys_get_temp_dir() . DIRECTORY_SEPARATOR . $filename;
        file_put_contents($tempPath, $jsonContent);
        
        $edocId = \REDCap::storeFile($tempPath, $projectId, $filename);
        
        unlink($tempPath);
        
        if (!$edocId) {
            throw new \RuntimeException("Failed to store FHIR data file for $resourceType");
        }
        
        return $edocId;
    }

    /**
     * Handle fetch failure by updating metadata and returning error result
     * 
     * @param string $recordId REDCap record identifier
     * @param FhirResourceMetadata $metadata Resource metadata
     * @param string $errorMessage Error message
     * @return array Error result array
     */
    private function handleFetchFailure(
        string $recordId,
        FhirResourceMetadata $metadata,
        string $errorMessage
    ): array {
        $failedMetadata = $metadata
            ->withStatus(FhirResourceMetadata::STATUS_FAILED)
            ->withErrorMessage($errorMessage);
        
        $this->dataAccessor->saveResourceMetadata($recordId, $failedMetadata);
        
        return [
            'success' => false,
            'message' => $errorMessage,
            'data' => [
                'record_id' => $recordId,
                'resource_type' => $metadata->getResourceName(),
                'repeat_instance' => $metadata->getRepeatInstance(),
                'error' => $errorMessage
            ]
        ];
    }
}
