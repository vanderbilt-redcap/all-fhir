<?php

namespace Vanderbilt\FhirSnapshot\Contracts;

use Vanderbilt\FhirSnapshot\ValueObjects\MappingResource;

/**
 * FhirClientInterface
 * 
 * Contract for FHIR client implementations to fetch FHIR resources
 */
interface FhirClientInterface
{
    /**
     * Fetch FHIR resource data from external source
     * 
     * @param string $mrn Medical Record Number
     * @param string $resourceType FHIR resource type
     * @param bool $isRefetch Whether this is a refetch operation
     * @param MappingResource|null $mappingResource Mapping resource configuration for advanced request generation
     * @return array|null FHIR data array or null if not found
     */
    public function fetchFhirResource(string $mrn, string $resourceType, bool $isRefetch = false, ?MappingResource $mappingResource = null): ?array;
}