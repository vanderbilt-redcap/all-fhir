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
     * Get the list of available FHIR mapping categories
     * 
     * @return array
     */
    public function getAvailableCategories(): array
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