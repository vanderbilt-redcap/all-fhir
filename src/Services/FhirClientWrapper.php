<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\Contracts\FhirClientInterface;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\REDCap\Classes\Fhir\FhirClient;
use Vanderbilt\REDCap\Classes\Fhir\FhirClientResponse;
use Vanderbilt\REDCap\Classes\Fhir\Endpoints\AbstractEndpoint;

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
     * @param MappingResource|null $mappingResource Mapping resource configuration for advanced request generation
     * @return array|null FHIR data array or null if not found
     * @throws \Exception If FHIR client encounters an error
     */
    public function fetchFhirResource(string $mrn, string $resourceType, bool $isRefetch = false, ?MappingResource $mappingResource = null): ?array
    {
        try {
            // Convert MRN to Patient ID
            $patientId = $this->fhirClient->getPatientID($mrn);
            if (!$patientId) {
                return null; // Patient not found
            }
            
            // Create FHIR request based on mapping resource type
            $fhir_request = $this->createFhirRequest($patientId, $resourceType, $mappingResource);
            
            // Create response object with project and user context
            $response = new FhirClientResponse([
                'project_id' => $this->fhirClient->getProjectID(),
                'user_id' => $this->fhirClient->getUserId(),
            ]);
            
            // Send request and get response
            $response = $this->fhirClient->sendRequest($fhir_request, $response);
            
            // Extract resource from response
            $resource = $response->getResource();
            
            // Handle errors
            if (is_null($resource) && $response->hasError()) {
                throw $response->getError();
            }
            
            if (is_null($resource)) {
                return null; // No resource found
            }
            
            // Return the resource payload as-is from the FHIR system
            return $resource->getPayload();
            
        } catch (\Exception $e) {
            // Log the error and re-throw
            error_log("FHIR fetch error for MRN $mrn, resource $resourceType: " . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Create FHIR request based on mapping resource configuration
     * 
     * @param string $patientId FHIR Patient ID
     * @param string $resourceType FHIR resource type
     * @param MappingResource|null $mappingResource Mapping resource configuration
     * @return \Vanderbilt\REDCap\Classes\Fhir\Endpoints\FhirRequest
     * @throws \Exception If request creation fails
     */
    private function createFhirRequest(string $patientId, string $resourceType, ?MappingResource $mappingResource)
    {
        if ($mappingResource && $mappingResource->isPredefined()) {
            // Use REDCap's EndpointFactory for predefined resources
            return $this->createPredefinedRequest($patientId, $mappingResource);
        } else {
            // Handle custom resources or fallback for missing mapping resource
            return $this->createCustomRequest($patientId, $resourceType, $mappingResource);
        }
    }

    /**
     * Create FHIR request for predefined resources using REDCap's EndpointFactory
     * 
     * @param string $patientId FHIR Patient ID
     * @param MappingResource $mappingResource Predefined mapping resource
     * @return \Vanderbilt\REDCap\Classes\Fhir\Endpoints\FhirRequest
     * @throws \Exception If endpoint creation fails
     */
    private function createPredefinedRequest(string $patientId, MappingResource $mappingResource)
    {
        // Get the endpoint factory from the FHIR client
        $endpointFactory = $this->fhirClient->getEndpointFactory();
        
        // Use the resource spec as the category for predefined resources
        $category = $mappingResource->getResourceSpec();
        
        // Create the request using REDCap's endpoint factory
        $fhir_request = $endpointFactory->make(
            $category, 
            $patientId, 
            AbstractEndpoint::INTERACTION_SEARCH, 
            []
        );
        
        if (!$fhir_request) {
            throw new \Exception("Failed to create predefined FHIR request for category: {$category}");
        }
        
        return $fhir_request;
    }

    /**
     * Create FHIR request for custom resources or fallback
     * 
     * @param string $patientId FHIR Patient ID
     * @param string $resourceType FHIR resource type
     * @param MappingResource|null $mappingResource Custom mapping resource or null
     * @return \Vanderbilt\REDCap\Classes\Fhir\Endpoints\FhirRequest
     */
    private function createCustomRequest(string $patientId, string $resourceType, ?MappingResource $mappingResource)
    {
        if ($mappingResource && $mappingResource->isCustom()) {
            // Parse custom resource spec and add patient parameter
            $relative_url = $this->buildCustomUrl($patientId, $mappingResource->getResourceSpec());
        } else {
            // Fallback for missing mapping resource
            $relative_url = "{$resourceType}?patient={$patientId}";
        }
        
        // Create request manually
        return $this->fhirClient->getFhirRequest($relative_url, 'GET', []);
    }

    /**
     * Build custom URL by parsing resource spec and adding patient parameter
     * 
     * @param string $patientId FHIR Patient ID
     * @param string $resourceSpec Resource specification (e.g., "Observation?category=vital-signs")
     * @return string Complete relative URL with patient parameter
     */
    private function buildCustomUrl(string $patientId, string $resourceSpec): string
    {
        // Parse the resource spec
        $parts = parse_url($resourceSpec);
        $basePath = $parts['path'] ?? $resourceSpec;
        $existingQuery = $parts['query'] ?? '';
        
        // Build query parameters
        $queryParams = [];
        if ($existingQuery) {
            parse_str($existingQuery, $queryParams);
        }
        
        // Add patient parameter
        $queryParams['patient'] = $patientId;
        
        // Build final URL
        $queryString = http_build_query($queryParams);
        return $basePath . ($queryString ? '?' . $queryString : '');
    }

}