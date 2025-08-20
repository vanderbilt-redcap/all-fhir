<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\Contracts\FhirClientInterface;
use Vanderbilt\REDCap\Classes\Fhir\FhirClient;

/**
 * FhirClientWrapper
 * 
 * Wrapper around REDCap's FhirClient to implement our FhirClientInterface.
 * Provides a clean interface for FHIR resource fetching while integrating 
 * with REDCap's FHIR infrastructure including token management and logging.
 */
class FhirClientWrapper implements FhirClientInterface
{
    private FhirClient $fhirClient;

    public function __construct(FhirClient $fhirClient)
    {
        $this->fhirClient = $fhirClient;
    }

    /**
     * Fetch FHIR resource data from external source using REDCap's FhirClient
     * 
     * @param string $mrn Medical Record Number
     * @param string $resourceType FHIR resource type
     * @param bool $isRefetch Whether this is a refetch operation
     * @return array|null FHIR data array or null if not found
     * @throws \Exception If FHIR client encounters an error
     */
    public function fetchFhirResource(string $mrn, string $resourceType, bool $isRefetch = false): ?array
    {
        try {
            // Use REDCap's FhirClient to fetch the resource
            // Note: This is a simplified implementation - you may need to adjust
            // based on the actual FhirClient API methods available
            
            // The actual implementation will depend on how REDCap's FhirClient
            // is designed to fetch resources. This is a placeholder structure.
            $result = $this->fhirClient->getData($mrn, $resourceType);
            
            if (!$result || empty($result)) {
                return null;
            }

            // Transform the result to match our expected structure
            return $this->transformFhirResult($result, $mrn, $resourceType, $isRefetch);
            
        } catch (\Exception $e) {
            // Log the error and re-throw
            error_log("FHIR fetch error for MRN $mrn, resource $resourceType: " . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Transform REDCap FhirClient result to our expected format
     * 
     * @param mixed $result Raw result from REDCap FhirClient
     * @param string $mrn Medical Record Number
     * @param string $resourceType FHIR resource type  
     * @param bool $isRefetch Whether this is a refetch operation
     * @return array Transformed FHIR data
     */
    private function transformFhirResult($result, string $mrn, string $resourceType, bool $isRefetch): array
    {
        // This transformation logic will need to be adjusted based on 
        // the actual structure returned by REDCap's FhirClient
        
        if (is_array($result)) {
            $fhirData = [
                'resourceType' => $resourceType,
                'id' => $result['id'] ?? uniqid($resourceType . '_', true),
                'subject' => [
                    'reference' => "Patient/$mrn"
                ],
                'meta' => [
                    'lastUpdated' => $result['meta']['lastUpdated'] ?? date('c'),
                    'versionId' => $result['meta']['versionId'] ?? ($isRefetch ? '2' : '1')
                ],
                'data' => $result,
                'fetchedAt' => date('c')
            ];

            // Check for pagination information if available
            if (isset($result['total']) || isset($result['link'])) {
                $fhirData['pagination'] = [
                    'total' => $result['total'] ?? null,
                    'pageSize' => $result['pageSize'] ?? 20,
                    'currentPage' => 1,
                    'hasNext' => isset($result['link']) && !empty($result['link'])
                ];
            }

            return $fhirData;
        }

        // Fallback for unexpected result format
        return [
            'resourceType' => $resourceType,
            'id' => uniqid($resourceType . '_', true),
            'subject' => [
                'reference' => "Patient/$mrn"
            ],
            'meta' => [
                'lastUpdated' => date('c'),
                'versionId' => $isRefetch ? '2' : '1'
            ],
            'data' => $result,
            'fetchedAt' => date('c')
        ];
    }
}