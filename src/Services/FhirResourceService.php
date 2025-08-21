<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\Contracts\FhirClientInterface;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;

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
 *    - Updates resource status to FETCHING before beginning
 *    - Creates resource metadata if not exists
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

    public function __construct(
        RepeatedFormDataAccessor $dataAccessor,
        FhirClientInterface $fhirClient
    ) {
        $this->dataAccessor = $dataAccessor;
        $this->fhirClient = $fhirClient;
    }

    /**
     * Fetch and store FHIR resource for a given record
     * 
     * @param string $recordId REDCap record identifier
     * @param string $mrn Medical Record Number for FHIR API calls
     * @param string $resourceType FHIR resource type (Patient, Observation, etc.)
     * @param int $repeatInstance REDCap repeated form instance number
     * @param array $options Additional options (mapping_resource_id, is_refetch, etc.)
     * @return array Result array with success status, message, and data
     */
    public function fetchAndStoreResource(
        string $recordId,
        string $mrn,
        string $resourceType,
        int $repeatInstance,
        array $options = []
    ): array {
        $mappingResourceId = $options['mapping_resource_id'] ?? null;
        $isRefetch = $options['is_refetch'] ?? false;

        $metadata = $this->dataAccessor->getResourceMetadata($recordId, $resourceType, $repeatInstance);
        
        if (!$metadata) {
            $metadata = FhirResourceMetadata::create($resourceType, $repeatInstance);
        }

        $metadata = $metadata->withStatus(FhirResourceMetadata::STATUS_FETCHING);
        $this->dataAccessor->saveResourceMetadata($recordId, $metadata);

        try {
            // Get mapping resource from options if provided
            $mappingResource = $options['mapping_resource'] ?? null;
            
            $fhirData = $this->fhirClient->fetchFhirResource($mrn, $resourceType, $isRefetch, $mappingResource);
            
            if ($fhirData === null) {
                return $this->handleFetchFailure(
                    $recordId,
                    $metadata,
                    "No data found for resource type: $resourceType"
                );
            }

            $edocId = $this->storeFhirDataAsFile($fhirData, $mrn, $resourceType);
            
            $completedMetadata = $metadata
                ->withStatus(FhirResourceMetadata::STATUS_COMPLETED)
                ->withEdocId($edocId)
                ->withFetchDate(date('Y-m-d H:i:s'));

            if (isset($fhirData['pagination'])) {
                $completedMetadata = $completedMetadata->withPaginationInfo($fhirData['pagination']);
            }

            $this->dataAccessor->saveResourceMetadata($recordId, $completedMetadata);

            return [
                'success' => true,
                'message' => "Successfully fetched and stored $resourceType for Record ID: $recordId, MRN: $mrn (Instance: $repeatInstance)",
                'data' => [
                    'record_id' => $recordId,
                    'mrn' => $mrn,
                    'resource_type' => $resourceType,
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
                'resource_type' => $metadata->getResourceType(),
                'repeat_instance' => $metadata->getRepeatInstance(),
                'error' => $errorMessage
            ]
        ];
    }
}