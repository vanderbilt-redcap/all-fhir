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
     * @param MappingResource|null $mappingResource Mapping resource configuration for advanced request generation
     * @param bool $isRefetch Whether this is a refetch operation
     * @return array|null FHIR data array or null if not found
     */
    public function fetchFhirResource(string $mrn, MappingResource $mappingResource, bool $isRefetch = false): ?array;
}