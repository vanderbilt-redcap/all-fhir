<?php

namespace Vanderbilt\AllFhir\Constants;

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
    public const RESOURCE_NAME = 'af_resource_name';
    public const RESOURCE_SPEC = 'af_resource_spec';
    public const RESOURCE_TYPE = 'af_resource_type';
    public const RESOURCE_STATUS = 'af_resource_status';
    public const MAPPING_RESOURCE_ID = 'af_mapping_resource_id';
    public const FILE_UPLOAD = 'af_file_upload';
    public const FETCH_DATE = 'af_fetch_date';
    public const ERROR_MESSAGE = 'af_error_message';
    public const PAGINATION_INFO = 'af_pagination_info';
}
