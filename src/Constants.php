<?php
namespace Vanderbilt\FhirSnapshot;

class Constants {
    const FIELD_PREFIX = '__all_fhir-';
    const DEFAULT_INSTRUMENT_NAME = 'fhir_resources';
    
    // Task types
    const TASK_FHIR_FETCH = 'fhir_fetch';
    const TASK_ARCHIVE = 'archive';
    const TASK_EMAIL_NOTIFICATION = 'email_notification';
    
    // Project Settings Keys
    const SETTING_FHIR_SYSTEM = 'fhir-system';
    const SETTING_MAPPING_RESOURCES = 'mapping-resources';
    const SETTING_CUSTOM_MAPPING_RESOURCES = 'custom-mapping-resources';
}
