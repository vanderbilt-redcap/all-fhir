<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\AllFhir\Constants\EndpointParams as P;
use Vanderbilt\AllFhir\ValueObjects\EndpointParameter as Param;
use Vanderbilt\REDCap\Classes\Fhir\FhirCategory as Cat;

/**
 * FhirEndpointRegistry
 *
 * Provides parameter metadata for known FHIR endpoints (by REDCap category/resourceSpec).
 * Enables UI and backend validation/assistance for endpoint-specific parameters.
 */
class FhirEndpointRegistry
{
    /**
     * Return parameter schema for a given resourceSpec (category).
     * Each param has: key, label, type, required, description, default?, enumOptions?, server_resolved?
     */
    public function getParamSchemaForCategory(string $resourceSpec): array
    {
        $schemas = $this->listParamSchemas();
        return $schemas[$resourceSpec] ?? [];
    }

    /**
     * Return all parameter schemas keyed by resourceSpec.
     */
    public function listParamSchemas(): array
    {
        // Minimal initial schema focused on AdverseEvent
        return [
            // REDCap category name for adverse events
            Cat::ADVERSE_EVENT => [
                Param::string(P::KEY_STUDY_ID, 'Study ID')
                    ->description('Often called IRB number in REDCap. Enter the study identifier; the system resolves it server-side to a FHIR ResearchStudy ID.')
                    ->serverResolved(),
            ],
        ];
    }
}
