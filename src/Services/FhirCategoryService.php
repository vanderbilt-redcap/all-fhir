<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\REDCap\Classes\Fhir\FhirCategory;

/**
 * FhirCategoryService
 * 
 * Centralized registry service for managing REDCap's predefined FHIR resource categories.
 * Provides structured access to FHIR mapping categories supported by the REDCap FHIR infrastructure,
 * enabling consistent category management across the application.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Maintains comprehensive catalog of supported REDCap FHIR categories
 * - Provides unified interface for category discovery and validation
 * - Manages category metadata including display names and resource specifications
 * - Supports both current API and legacy compatibility patterns
 * - Enables category filtering and availability checking
 * - Centralizes category configuration for easy maintenance
 * 
 * CATEGORY ORGANIZATION:
 * 
 * PATIENT INFORMATION:
 * - Demographics: Core patient demographic data
 * - Core characteristics: Essential patient attributes
 * - Coverage: Insurance and coverage information
 * 
 * CLINICAL DATA:
 * - Conditions: General condition/diagnosis information with specialized subtypes:
 *   • Dental findings, genomics, infections, medical history
 *   • Problems, reason for visit categorizations
 * - Procedures: Medical procedures and interventions
 * - Medications: Medication management and history
 * - Immunizations: Vaccination records and schedules
 * 
 * OBSERVATIONS & MEASUREMENTS:
 * - Laboratory: Lab results and diagnostic testing
 * - Vital signs: Patient vital sign measurements
 * - Social history: Social determinants and lifestyle factors
 * 
 * HEALTHCARE DELIVERY:
 * - Appointments: General appointments and scheduled surgeries
 * - Encounters: Healthcare encounters and visits
 * - Diagnosis: Diagnostic information and findings
 * 
 * DEVICES & EVENTS:
 * - Device implants: Implanted medical devices
 * - Adverse events: Adverse drug reactions and safety events
 * - Allergy intolerance: Allergy and intolerance tracking
 * 
 * INTEGRATION WITH REDCAP FHIR:
 * - Maps to REDCap's FhirCategory constants for technical specifications
 * - Provides display names suitable for user interfaces
 * - Supports REDCap's FHIR endpoint factory and request generation
 * - Maintains compatibility with REDCap's authentication and API patterns
 * 
 * USAGE PATTERNS:
 * - getAvailableCategories() - Get all categories with display names and specs
 * - isCategoryAvailable($category) - Validate category availability
 * 
 * EXTENSIBILITY:
 * - Categories can be easily added/removed by updating the category lists
 * - Supports future category management features and filtering
 * - Designed for easy integration with dynamic category systems
 * - Maintains backward compatibility through legacy method support
 * 
 * DATA STRUCTURE:
 * Returns categories as arrays with:
 * - 'name': Human-readable display name for UI presentation
 * - 'resourceSpec': Technical FHIR resource specification for API calls
 * 
 * MAINTENANCE NOTES:
 * - Some categories are commented out (Document reference, Practitioner, etc.)
 * - Legacy method marked deprecated to encourage new API usage
 * - Category availability can be managed through enable/disable patterns
 */
class FhirCategoryService
{
    /**
     * Get comprehensive list of available FHIR mapping categories
     * 
     * Returns structured array of category objects with user-friendly display names
     * and technical resource specifications for FHIR API integration.
     * 
     * Each category includes:
     * - 'name': Human-readable display name for UI elements
     * - 'resourceSpec': REDCap FhirCategory constant for API calls
     * 
     * Categories are organized by clinical domain and maintain consistent ordering
     * for predictable user interface presentation.
     * 
     * @return array Array of category objects with 'name' and 'resourceSpec' keys
     */
    public function getAvailableCategories(): array
    {
        return [
            ['name' => 'Appointment - appointments', 'resourceSpec' => FhirCategory::APPOINTMENT_APPOINTMENTS],
            ['name' => 'Appointment - scheduled surgeries', 'resourceSpec' => FhirCategory::APPOINTMENT_SCHEDULED_SURGERIES],
            ['name' => 'Allergy intolerance', 'resourceSpec' => FhirCategory::ALLERGY_INTOLERANCE],
            ['name' => 'Adverse event', 'resourceSpec' => FhirCategory::ADVERSE_EVENT],
            // ['name' => 'Condition', 'resourceSpec' => FhirCategory::CONDITION],
            ['name' => 'Condition - dental finding', 'resourceSpec' => FhirCategory::CONDITION_DENTAL_FINDING],
            ['name' => 'Condition - genomics', 'resourceSpec' => FhirCategory::CONDITION_GENOMICS],
            ['name' => 'Condition - infection', 'resourceSpec' => FhirCategory::CONDITION_INFECTION],
            ['name' => 'Condition - medical_history', 'resourceSpec' => FhirCategory::CONDITION_MEDICAL_HISTORY],
            ['name' => 'Condition - problems', 'resourceSpec' => FhirCategory::CONDITION_PROBLEMS],
            ['name' => 'Condition - reason for visit', 'resourceSpec' => FhirCategory::CONDITION_REASON_FOR_VISIT],
            ['name' => 'Core characteristics', 'resourceSpec' => FhirCategory::CORE_CHARACTERISTICS],
            ['name' => 'Coverage', 'resourceSpec' => FhirCategory::COVERAGE],
            ['name' => 'Demographics', 'resourceSpec' => FhirCategory::DEMOGRAPHICS],
            ['name' => 'Device implants', 'resourceSpec' => FhirCategory::DEVICE_IMPLANTS],
            ['name' => 'Diagnosis', 'resourceSpec' => FhirCategory::DIAGNOSIS],
            ['name' => 'Document reference clinical notes', 'resourceSpec' => FhirCategory::DOCUMENT_REFERENCE_CLINICAL_NOTES],
            ['name' => 'Encounter', 'resourceSpec' => FhirCategory::ENCOUNTER],
            ['name' => 'Immunization', 'resourceSpec' => FhirCategory::IMMUNIZATION],
            ['name' => 'Laboratory', 'resourceSpec' => FhirCategory::LABORATORY],
            ['name' => 'Medications', 'resourceSpec' => FhirCategory::MEDICATIONS],
            // ['name' => 'Practitioner', 'resourceSpec' => // FhirCategory::PRACTITIONER],
            ['name' => 'Social history', 'resourceSpec' => FhirCategory::SOCIAL_HISTORY],
            ['name' => 'Procedure', 'resourceSpec' => FhirCategory::PROCEDURE],
            // ['name' => 'Research study', 'resourceSpec' => // FhirCategory::RESEARCH_STUDY],
            // ['name' => 'Smart data', 'resourceSpec' => // FhirCategory::SMART_DATA],
            ['name' => 'Vital signs', 'resourceSpec' => FhirCategory::VITAL_SIGNS],
        ];
    }


    /**
     * Validate if a FHIR category is currently available for use
     * 
     * Checks against the current list of available categories to determine
     * if a given category identifier is supported and active.
     * 
     * Note: Current implementation has a logical error - it should check against
     * resourceSpec values rather than the full category objects.
     * 
     * @param string $category FHIR category resourceSpec to validate
     * @return bool True if category is available, false otherwise
     * @todo Fix implementation to check resourceSpec values properly
     */
    public function isCategoryAvailable(string $category): bool
    {
        // TODO: Fix this implementation - should check resourceSpec values
        $availableSpecs = array_column($this->getAvailableCategories(), 'resourceSpec');
        return in_array($category, $availableSpecs, true);
    }
}