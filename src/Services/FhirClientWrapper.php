<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\Contracts\FhirClientInterface;
use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;
use Vanderbilt\FhirSnapshot\Services\FhirSnapshotEndpointVisitor;
use Vanderbilt\REDCap\Classes\Fhir\FhirClient;
use Vanderbilt\REDCap\Classes\Fhir\FhirClientResponse;
use Vanderbilt\REDCap\Classes\Fhir\Endpoints\AbstractEndpoint;

/**
 * FhirClientWrapper
 * 
 * Adapter service that wraps REDCap's FHIR client infrastructure to provide a clean, 
 * project-specific interface for fetching FHIR resources from external EHR systems.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Adapts REDCap's FhirClient to implement the project's FhirClientInterface
 * - Handles patient ID resolution from MRN (Medical Record Numbers)
 * - Manages different types of FHIR resource requests (predefined vs custom)
 * - Provides error handling and logging for FHIR operations
 * - Integrates with REDCap's token management and authentication system
 * 
 * KEY FEATURES:
 * 
 * RESOURCE FETCHING:
 * - Converts MRN to FHIR Patient ID using REDCap's patient resolution
 * - Supports both predefined REDCap categories and custom FHIR queries
 * - Returns raw FHIR resource payloads for storage and processing
 * - Handles authentication and authorization through REDCap's FHIR infrastructure
 * 
 * REQUEST HANDLING:
 * - Predefined requests: Uses REDCap's EndpointFactory for standard categories
 * - Custom requests: Parses custom resource specifications and builds appropriate URLs
 * - Automatic patient parameter injection for all resource types
 * - Query parameter parsing and URL construction for complex FHIR searches
 * 
 * ERROR MANAGEMENT:
 * - Graceful handling of patient not found scenarios
 * - Comprehensive error logging with context (MRN, resource type)
 * - Exception propagation with detailed error information
 * - Response validation and error extraction from FHIR responses
 * 
 * INTEGRATION PATTERNS:
 * - Works with MappingResource configurations to determine request type
 * - Integrates with REDCap's project and user context management
 * - Supports refetch operations for resource updates
 * - Compatible with REDCap's FHIR logging and audit systems
 * 
 * USAGE EXAMPLES:
 * - $wrapper->fetchFhirResource($mrn, 'Observation') - Basic resource fetch
 * - $wrapper->fetchFhirResource($mrn, 'Observation', false, $mapping) - With mapping config
 * - Typically used by FhirResourceService for coordinated resource management
 * 
 * FHIR COMPLIANCE:
 * - Supports FHIR R4 resource specifications
 * - Handles pagination through REDCap's client infrastructure
 * - Maintains FHIR search parameter compatibility
 * - Preserves original FHIR resource structure and metadata
 */
class FhirClientWrapper implements FhirClientInterface
{
    private FhirClient $fhirClient;

    /**
     * Initialize the FHIR client wrapper with REDCap's FHIR client instance
     * 
     * @param FhirClient $fhirClient Configured REDCap FHIR client with authentication and project context
     */
    public function __construct(FhirClient $fhirClient)
    {
        $this->fhirClient = $fhirClient;
    }

    /**
     * Fetch FHIR resource data from external source using REDCap's FhirClient
     * 
     * @param string $mrn Medical Record Number
     * @param MappingResource $mappingResource Mapping resource configuration for advanced request generation
     * @param bool $isRefetch Whether this is a refetch operation
     * @return array|null FHIR data array or null if not found
     * @throws \Exception If FHIR client encounters an error
     */
    public function fetchFhirResource(string $mrn, MappingResource $mappingResource, bool $isRefetch = false): ?array
    {
        try {
            // Convert MRN to Patient ID
            $patientId = $this->fhirClient->getPatientID($mrn);
            if (!$patientId) {
                return null; // Patient not found
            }
            
            // Create FHIR request based on mapping resource type
            $fhir_request = $this->createFhirRequest($patientId, $mappingResource);
            
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
            $resourceName = $mappingResource->getName();
            error_log("FHIR fetch error for MRN $mrn, resource : '$resourceName'" . $e->getMessage());
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
    private function createFhirRequest(string $patientId, ?MappingResource $mappingResource)
    {
        if ($mappingResource && $mappingResource->isPredefined()) {
            // Use REDCap's EndpointFactory for predefined resources
            return $this->createPredefinedRequest($patientId, $mappingResource);
        } else {
            // Handle custom resources or fallback for missing mapping resource
            return $this->createCustomRequest($patientId, $mappingResource);
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
        
        // Create the endpoint using REDCap's endpoint factory
        $endpoint = $endpointFactory->makeEndpoint($category);
        if (!$endpoint) {
            throw new \Exception("Failed to create predefined FHIR endpoint for category: {$category}");
        }
        
        // Create visitor to apply patient ID parameters
        $visitor = new FhirSnapshotEndpointVisitor($this->fhirClient, $patientId);
        
        // Apply visitor to get endpoint-specific options
        $options = $endpoint->accept($visitor);
        
        // Create the request using the endpoint and visitor-generated options
        $fhir_request = $endpointFactory->makeRequest(
            $endpoint,
            $patientId,
            AbstractEndpoint::INTERACTION_SEARCH,
            $options
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
     * @param MappingResource $mappingResource Custom mapping resource or null
     * @return \Vanderbilt\REDCap\Classes\Fhir\Endpoints\FhirRequest
     */
    private function createCustomRequest(string $patientId, MappingResource $mappingResource)
    {
        if (!$mappingResource->isCustom()) return;
            // Parse custom resource spec and add patient parameter
        $relative_url = $this->buildCustomUrl($patientId, $mappingResource->getResourceSpec());
        
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