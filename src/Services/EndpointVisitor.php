<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\REDCap\Classes\Fhir\FhirClient;
use Vanderbilt\REDCap\Classes\Fhir\Endpoints\EndpointVisitorInterface;
use Vanderbilt\REDCap\Classes\Fhir\Endpoints\R4\Patient as Patient_R4;
use Vanderbilt\REDCap\Classes\Fhir\Endpoints\DSTU2\Patient as Patient_DSTU2;
use Vanderbilt\REDCap\Classes\Fhir\Endpoints\R4\AdverseEvent;
use Vanderbilt\REDCap\Classes\Fhir\Endpoints\EndpointsHelper;

/**
 * EndpointVisitor
 * 
 * Simplified FHIR endpoint visitor for the module that applies
 * patient ID parameters to FHIR endpoints without complex mapping logic.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Applies patient ID to FHIR endpoint requests for proper scoping
 * - Handles endpoint-specific parameter naming conventions
 * - Maintains FhirClient reference for additional API calls when needed
 * - Provides clean, minimal parameter injection for FHIR requests
 * 
 * KEY FEATURES:
 * 
 * SIMPLIFIED APPROACH:
 * - Focuses solely on patient ID injection without date ranges or field mapping
 * - Removes complex REDCap mapping group dependencies
 * - Streamlined for basic FHIR resource fetching operations
 * - Maintains compatibility with REDCap's endpoint visitor pattern
 * 
 * ENDPOINT HANDLING:
 * - Patient endpoints: Uses '_id' parameter instead of 'patient'
 * - AdverseEvent endpoints: Supports study ID lookup via FhirClient
 * - All other endpoints: Standard 'patient' parameter injection
 * - Follows REDCap's endpoint visitor interface contract
 * 
 * INTEGRATION PATTERNS:
 * - Used by FhirClientWrapper for predefined resource requests
 * - Works with REDCap's EndpointFactory and AbstractEndpoint infrastructure
 * - Supports the visitor pattern via endpoint.accept(visitor) calls
 * - Compatible with both DSTU2 and R4 FHIR versions
 * 
 * USAGE EXAMPLES:
 * - $visitor = new EndpointVisitor($fhirClient, $patientId)
 * - $options = $endpoint->accept($visitor)
 * - Used internally by FhirClientWrapper for parameter injection
 * 
 * DESIGN PRINCIPLES:
 * - Minimal complexity - only essential patient scoping
 * - REDCap compatibility - follows established patterns
 * - Extensible - easy to add endpoint-specific logic later
 * - Clean separation - visitor handles parameter concerns
 */
class EndpointVisitor implements EndpointVisitorInterface
{
    /**
     * @var FhirClient REDCap FHIR client for additional API calls
     */
    private FhirClient $fhirClient;

    /**
     * @var string FHIR Patient ID for scoping requests
     */
    private string $patientId;

    /**
     * Initialize the endpoint visitor with FHIR client and patient context
     * 
     * @param FhirClient $fhirClient Configured REDCap FHIR client instance
     * @param string $patientId FHIR Patient ID for request scoping
     */
    public function __construct(FhirClient $fhirClient, string $patientId)
    {
        $this->fhirClient = $fhirClient;
        $this->patientId = $patientId;
    }

    /**
     * Apply patient ID parameters to the endpoint based on its type
     * 
     * @param \Vanderbilt\REDCap\Classes\Fhir\Endpoints\AbstractEndpoint $endpoint FHIR endpoint to visit
     * @return array Options array with appropriate patient parameters
     */
    public function visit($endpoint): array
    {
        $options = [];
        $class = get_class($endpoint);
        
        switch ($class) {
            case Patient_DSTU2::class:
            case Patient_R4::class:
                $options = $this->visitPatient($endpoint, $options);
                break;
                
            case AdverseEvent::class:
                $options = $this->visitAdverseEvent($endpoint, $options);
                break;
                
            default:
                // For all other endpoints, apply standard patient parameter
                $options['patient'] = $this->patientId;
                break;
        }
        
        return $options;
    }

    /**
     * Handle Patient endpoint parameter injection
     * 
     * Patient endpoints use '_id' parameter instead of 'patient' for filtering
     * 
     * @param Patient_DSTU2|Patient_R4 $endpoint Patient endpoint instance
     * @param array $options Current options array
     * @return array Updated options with patient ID parameter
     */
    private function visitPatient($endpoint, array $options): array
    {
        $options['_id'] = $this->patientId;
        return $options;
    }

    /**
     * Handle AdverseEvent endpoint parameter injection
     * 
     * AdverseEvent endpoints require both study and subject parameters.
     * Uses EndpointsHelper to look up FHIR study ID from project IRB number.
     * 
     * @param AdverseEvent $endpoint AdverseEvent endpoint instance
     * @param array $options Current options array
     * @return array Updated options with study and subject parameters
     */
    private function visitAdverseEvent(AdverseEvent $endpoint, array $options): array
    {
        $endpointsHelper = new EndpointsHelper();
        
        // Get the project IRB number for study lookup
        $irbNumber = $endpointsHelper->getProjectIrbNumber();
        if (empty($irbNumber)) {
            // If no IRB number available, fall back to patient-only filtering
            $options['subject'] = $this->patientId;
            return $options;
        }
        
        // Look up the FHIR study ID using the IRB number
        $studyFhirId = $endpointsHelper->getFhirStudyID($this->fhirClient, $irbNumber);
        
        if ($studyFhirId) {
            $options['study'] = $studyFhirId;
        }
        
        $options['subject'] = $this->patientId;
        return $options;
    }
}