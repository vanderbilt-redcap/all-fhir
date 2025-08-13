<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\REDCap\Classes\Fhir\FhirCategory;

/**
 * FhirCategoryService
 * 
 * Service for managing available FHIR mapping categories.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Provide centralized list of supported FHIR resource categories
 * - Handle category filtering and availability logic
 * - Manage category configuration and customization
 * - Provide category metadata and descriptions
 * - Support future category management features
 * 
 * SUPPORTED CATEGORIES:
 * - Core patient demographics and characteristics
 * - Clinical data (conditions, procedures, medications)
 * - Appointments and encounters
 * - Laboratory and vital signs
 * - Device and coverage information
 * - Various specialized resource types
 * 
 * KEY FEATURES:
 * - Centralized category management
 * - Easy addition/removal of categories
 * - Support for category filtering
 * - Consistent category ordering
 */
class FhirCategoryService
{
    /**
     * Get the list of available FHIR mapping categories with their resource specifications
     * 
     * Returns array of category objects with display name and FHIR resourceSpec
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
            ['name' => 'Condition', 'resourceSpec' => FhirCategory::CONDITION],
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
            // ['name' => 'Document reference clinical notes', 'resourceSpec' => // FhirCategory::DOCUMENT_REFERENCE_CLINICAL_NOTES],
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
     * Get legacy category constants for backward compatibility
     * 
     * @return array Array of FhirCategory constants
     * @deprecated Use getAvailableCategories() for new implementations
     */
    public function getLegacyCategories(): array
    {
        return [
            FhirCategory::APPOINTMENT_APPOINTMENTS,
            FhirCategory::APPOINTMENT_SCHEDULED_SURGERIES,
            FhirCategory::ALLERGY_INTOLERANCE,
            FhirCategory::ADVERSE_EVENT,
            FhirCategory::CONDITION,
            FhirCategory::CONDITION_DENTAL_FINDING,
            FhirCategory::CONDITION_GENOMICS,
            FhirCategory::CONDITION_INFECTION,
            FhirCategory::CONDITION_MEDICAL_HISTORY,
            FhirCategory::CONDITION_PROBLEMS,
            FhirCategory::CONDITION_REASON_FOR_VISIT,
            FhirCategory::CORE_CHARACTERISTICS,
            FhirCategory::COVERAGE,
            FhirCategory::DEMOGRAPHICS,
            FhirCategory::DEVICE_IMPLANTS,
            FhirCategory::DIAGNOSIS,
            // FhirCategory::DOCUMENT_REFERENCE_CLINICAL_NOTES,
            FhirCategory::ENCOUNTER,
            FhirCategory::IMMUNIZATION,
            FhirCategory::LABORATORY,
            FhirCategory::MEDICATIONS,
            // FhirCategory::PRACTITIONER,
            FhirCategory::SOCIAL_HISTORY,
            FhirCategory::PROCEDURE,
            // FhirCategory::RESEARCH_STUDY,
            // FhirCategory::SMART_DATA,
            FhirCategory::VITAL_SIGNS,
        ];
    }

    /**
     * Check if a category is available
     * 
     * @param string $category
     * @return bool
     */
    public function isCategoryAvailable(string $category): bool
    {
        return in_array($category, $this->getAvailableCategories(), true);
    }
}