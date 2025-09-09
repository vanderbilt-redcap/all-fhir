<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\REDCap\Classes\Fhir\FhirClient;
use Vanderbilt\REDCap\Classes\Fhir\Endpoints\EndpointsHelper;

/**
 * FhirStudyResolver
 *
 * Resolves human study identifiers (e.g., IRB number or study code) into
 * FHIR ResearchStudy IDs using the connected EHR via REDCap's FHIR client.
 */
class FhirStudyResolver
{
    /**
     * Resolve using a single study identifier string.
     * In REDCap this may be referred to as IRB number, but it is the study ID.
     */
    public function resolveByIdentifier(string $identifier, FhirClient $client): ?string
    {
        try {
            $helper = new EndpointsHelper();
            return $helper->getFhirStudyID($client, $identifier) ?: null;
        } catch (\Throwable $e) {
            error_log('FhirStudyResolver resolveByIdentifier error: ' . $e->getMessage());
            return null;
        }
    }

    /**
     * Resolve a human study identifier to a FHIR ResearchStudy ID.
     * @param string $identifier
     * @param string $type 'irb_number' | 'study_code'
     * @param FhirClient $client
     * @return string|null ResearchStudy ID or null if not found
     */
    public function resolve(string $identifier, string $type, FhirClient $client): ?string
    {
        // Types are deprecated; always resolve by identifier
        return $this->resolveByIdentifier($identifier, $client);
    }

    /**
     * Resolve using the project IRB number from REDCap configuration.
     */
    public function resolveFromProjectIrbNumber(FhirClient $client): ?string
    {
        try {
            $helper = new EndpointsHelper();
            $irbNumber = $helper->getProjectIrbNumber();
            if (!$irbNumber) return null;
            return $helper->getFhirStudyID($client, $irbNumber) ?: null;
        } catch (\Throwable $e) {
            error_log('FhirStudyResolver project IRB resolve error: ' . $e->getMessage());
            return null;
        }
    }
}
