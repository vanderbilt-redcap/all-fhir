<?php
namespace Vanderbilt\AllFhir;

class Constants {
    const FIELD_PREFIX = '__all_fhir-';
    const DEFAULT_INSTRUMENT_NAME = 'fhir_resources';
    
    // Task types
    const TASK_ARCHIVE = 'archive';
    const TASK_EMAIL_NOTIFICATION = 'email_notification';
    const TASK_FULL_SYNC = 'full_sync';
    const TASK_RETRY_FAILED = 'retry_failed';
    
    // Project Settings Keys
    const SETTING_FHIR_SYSTEM = 'fhir-system';
    const SETTING_MAPPING_RESOURCES = 'mapping-resources';
    const SETTING_CUSTOM_MAPPING_RESOURCES = 'custom-mapping-resources';
}
