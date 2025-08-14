<?php
namespace Vanderbilt\FhirSnapshot;

class Constants {
    const FIELD_PREFIX = '__all_fhir-';
    const DEFAULT_INSTRUMENT_NAME = 'fhir_resources';
    
    // Task types
    const TASK_FHIR_FETCH = 'fhir_fetch';
    const TASK_ARCHIVE = 'archive';
    const TASK_EMAIL_NOTIFICATION = 'email_notification';
}
