<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\ValueObjects\Task;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\Services\RepeatedFormDataAccessor;

class EnhancedFhirFetchProcessor extends AbstractTaskProcessor
{
    private RepeatedFormDataAccessor $dataAccessor;

    public function __construct(RepeatedFormDataAccessor $dataAccessor)
    {
        $this->dataAccessor = $dataAccessor;
    }

    public function getTaskKey(): string
    {
        return 'enhanced_fhir_fetch';
    }

    protected function doProcess(Task $task): TaskProcessorResult
    {
        $validationResult = $this->validateParams($task, ['record_id', 'mrn', 'resource_type', 'repeat_instance']);
        if ($validationResult !== null) {
            return $validationResult;
        }

        $params = $task->getParams();
        $recordId = $params['record_id'];
        $mrn = $params['mrn'];
        $resourceType = $params['resource_type'];
        $repeatInstance = (int) $params['repeat_instance'];
        $mappingResourceId = $params['mapping_resource_id'] ?? null;
        $isRefetch = $params['is_refetch'] ?? false;

        $this->logInfo("Enhanced FHIR fetch for Record ID: $recordId, MRN: $mrn, Resource: $resourceType, Instance: $repeatInstance");

        $metadata = $this->dataAccessor->getResourceMetadata($recordId, $resourceType, $repeatInstance);
        
        if (!$metadata) {
            $metadata = FhirResourceMetadata::create($resourceType, $repeatInstance);
        }

        $metadata = $metadata->withStatus(FhirResourceMetadata::STATUS_FETCHING);
        $this->dataAccessor->saveResourceMetadata($recordId, $metadata);

        try {
            $fhirData = $this->fetchFhirResource($mrn, $resourceType, $isRefetch);
            
            if ($fhirData === null) {
                return $this->handleFetchFailure($recordId, $mrn, $metadata, "No data found for resource type: $resourceType");
            }

            $edocId = $this->storeFhirDataAsFile($fhirData, $mrn, $resourceType);
            
            $completedMetadata = $metadata
                ->withStatus(FhirResourceMetadata::STATUS_COMPLETED)
                ->withEdocId($edocId)
                ->withFetchDate(date('Y-m-d H:i:s'))
                ->withErrorMessage(null);

            if (isset($fhirData['pagination'])) {
                $completedMetadata = $completedMetadata->withPaginationInfo($fhirData['pagination']);
            }

            $this->dataAccessor->saveResourceMetadata($recordId, $completedMetadata);

            $resultMessage = "Successfully fetched and stored $resourceType for Record ID: $recordId, MRN: $mrn (Instance: $repeatInstance)";
            
            return TaskProcessorResult::success($resultMessage, [
                'record_id' => $recordId,
                'mrn' => $mrn,
                'resource_type' => $resourceType,
                'repeat_instance' => $repeatInstance,
                'edoc_id' => $edocId,
                'data_size' => strlen(json_encode($fhirData)),
                'is_refetch' => $isRefetch,
                'mapping_resource_id' => $mappingResourceId
            ]);

        } catch (\Exception $e) {
            return $this->handleFetchFailure($recordId, $mrn, $metadata, $e->getMessage());
        }
    }

    private function fetchFhirResource(string $mrn, string $resourceType, bool $isRefetch): ?array
    {
        $this->logDebug("Fetching $resourceType data for MRN: $mrn" . ($isRefetch ? ' (refetch)' : ''));
        
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

    private function generateMockResourceData(string $resourceType): array
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

    private function storeFhirDataAsFile(array $fhirData, string $mrn, string $resourceType): int
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

    private function handleFetchFailure(string $recordId, string $mrn, FhirResourceMetadata $metadata, string $errorMessage): TaskProcessorResult
    {
        $this->logError("FHIR fetch failed for Record ID: $recordId, MRN: $mrn, Resource: " . $metadata->getResourceType() . " - $errorMessage");
        
        $failedMetadata = $metadata
            ->withStatus(FhirResourceMetadata::STATUS_FAILED)
            ->withErrorMessage($errorMessage);
        
        $this->dataAccessor->saveResourceMetadata($recordId, $failedMetadata);
        
        return TaskProcessorResult::failure($errorMessage, [
            'record_id' => $recordId,
            'mrn' => $mrn,
            'resource_type' => $metadata->getResourceType(),
            'repeat_instance' => $metadata->getRepeatInstance(),
            'error' => $errorMessage
        ]);
    }
}