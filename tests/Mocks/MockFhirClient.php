<?php

namespace Tests\Mocks;

use Vanderbilt\AllFhir\Contracts\FhirClientInterface;
use Vanderbilt\AllFhir\ValueObjects\MappingResource;

/**
 * MockFhirClient
 * 
 * Mock implementation of FhirClientInterface for testing purposes
 * Contains the mock data generation logic extracted from FhirResourceService
 */
class MockFhirClient implements FhirClientInterface
{
    /**
     * Fetch FHIR resource data from external source (mocked)
     * 
     * @param string $mrn Medical Record Number
     * @param string $resourceType FHIR resource type
     * @param bool $isRefetch Whether this is a refetch operation
     * @param MappingResource|null $mappingResource Mapping resource configuration (ignored in mock)
     * @return array|null FHIR data array or null if not found
     */
    public function fetchFhirResource(string $mrn, string $resourceType, bool $isRefetch = false, ?MappingResource $mappingResource = null): ?array
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
}