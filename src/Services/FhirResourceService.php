<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;

/**
 * FhirResourceService
 * 
 * Service for fetching FHIR resources and storing them in REDCap repeated forms.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Fetches FHIR resources from external APIs/servers
 * - Stores FHIR JSON payloads as REDCap edoc files
 * - Updates resource metadata status throughout the fetch process
 * - Handles FHIR-specific error conditions and pagination
 * - Generates mock FHIR data for testing/development
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
 * - Generates mock FHIR data for testing/development
 * - Supports different FHIR resource types (Patient, Observation, etc.)
 * - Manages FHIR-specific error conditions and retry scenarios
 */
class FhirResourceService
{
    private RepeatedFormDataAccessor $dataAccessor;

    public function __construct(RepeatedFormDataAccessor $dataAccessor)
    {
        $this->dataAccessor = $dataAccessor;
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
            $fhirData = $this->fetchFhirResource($mrn, $resourceType, $isRefetch);
            
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
     * Fetch FHIR resource data from external source
     * 
     * @param string $mrn Medical Record Number
     * @param string $resourceType FHIR resource type
     * @param bool $isRefetch Whether this is a refetch operation
     * @return array|null FHIR data array or null if not found
     */
    public function fetchFhirResource(string $mrn, string $resourceType, bool $isRefetch = false): ?array
    {
        // Simulate API call delay
        usleep(200000); // 0.2 seconds simulation
        
        if (rand(1, 100) <= 85) { // 85% success rate
            $mockData = [
                'resourceType' => $resourceType,
                'id' => uniqid($resourceType . '_', true),
                'subject' => [
                    'reference' => "Patient/$mrn"
                ],
                'meta' => [
                    'lastUpdated' => date('c'),
                    'versionId' => $isRefetch ? '2' : '1'
                ],
                'data' => $this->generateMockResourceData($resourceType),
                'fetchedAt' => date('c')
            ];

            if (rand(1, 10) <= 3) { // 30% chance of pagination
                $mockData['pagination'] = [
                    'total' => rand(50, 200),
                    'pageSize' => 20,
                    'currentPage' => 1,
                    'hasNext' => true
                ];
            }

            return $mockData;
        }
        
        return null;
    }

    /**
     * Generate mock FHIR resource data for testing
     * 
     * @param string $resourceType FHIR resource type
     * @return array Mock data structure
     */
    public function generateMockResourceData(string $resourceType): array
    {
        $baseData = [
            'identifier' => [
                [
                    'system' => 'http://hospital.example.org',
                    'value' => uniqid('id_', true)
                ]
            ],
            'status' => 'active'
        ];

        return match($resourceType) {
            'Patient' => array_merge($baseData, [
                'name' => [
                    [
                        'given' => ['John'],
                        'family' => 'Doe'
                    ]
                ],
                'gender' => 'male',
                'birthDate' => '1980-01-01'
            ]),
            'Observation' => array_merge($baseData, [
                'code' => [
                    'coding' => [
                        [
                            'system' => 'http://loinc.org',
                            'code' => '8302-2',
                            'display' => 'Body height'
                        ]
                    ]
                ],
                'valueQuantity' => [
                    'value' => rand(150, 200),
                    'unit' => 'cm'
                ],
                'effectiveDateTime' => date('c')
            ]),
            'Condition' => array_merge($baseData, [
                'code' => [
                    'coding' => [
                        [
                            'system' => 'http://snomed.info/sct',
                            'code' => '44054006',
                            'display' => 'Diabetes mellitus type 2'
                        ]
                    ]
                ],
                'onsetDateTime' => date('c', strtotime('-1 year'))
            ]),
            default => $baseData
        };
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
        $jsonContent = json_encode($fhirData, JSON_PRETTY_PRINT);
        $filename = sprintf('%s_%s_%s.json', $resourceType, $mrn, date('Y-m-d_H-i-s'));
        
        $tempPath = sys_get_temp_dir() . DIRECTORY_SEPARATOR . $filename;
        file_put_contents($tempPath, $jsonContent);
        
        $edocId = \REDCap::storeFile($tempPath, $filename);
        
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