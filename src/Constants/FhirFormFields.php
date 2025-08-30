<?php

namespace Vanderbilt\FhirSnapshot\Constants;

/**
 * FhirFormFields
 * 
 * Constants for FHIR repeated form field names used throughout the application.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Centralize all REDCap field name constants for FHIR resources
 * - Provide type-safe field name references
 * - Eliminate magic strings throughout the codebase
 * - Enable IDE autocomplete and refactoring support
 * - Document field purposes and data types
 * 
 * FIELD DESCRIPTIONS:
 * - MRN: Medical Record Number field in REDCap (primary identifier for patients)
 * - RESOURCE_NAME: Display name for the mapping resource (e.g., "Demographics", "Vital Signs")
 * - RESOURCE_SPEC: Technical specification - predefined key OR custom URL
 * - RESOURCE_TYPE: Mapping type - "predefined" or "custom"
 * - RESOURCE_STATUS: Processing status (Pending, Fetching, Completed, Failed) 
 * - FILE_UPLOAD: REDCap edoc ID containing JSON payload
 * - FETCH_DATE: Timestamp when resource was successfully fetched
 * - ERROR_MESSAGE: Error details for failed fetch operations
 * - PAGINATION_INFO: JSON metadata for paginated resource collections
 */
class FhirFormFields
{
    public const MRN = 'mrn';
    public const RESOURCE_NAME = 'all_fhir_resource_name';
    public const RESOURCE_SPEC = 'all_fhir_resource_spec';
    public const RESOURCE_TYPE = 'all_fhir_resource_type';
    public const RESOURCE_STATUS = 'all_fhir_resource_status';
    public const FILE_UPLOAD = 'all_fhir_file_upload';
    public const FETCH_DATE = 'all_fhir_fetch_date';
    public const ERROR_MESSAGE = 'all_fhir_error_message';
    public const PAGINATION_INFO = 'all_fhir_pagination_info';
}