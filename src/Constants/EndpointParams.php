<?php

namespace Vanderbilt\AllFhir\Constants;

class EndpointParams
{
    // Common UI/input types
    public const TYPE_STRING = 'string';
    public const TYPE_NUMBER = 'number';
    public const TYPE_BOOLEAN = 'boolean';
    public const TYPE_DATE = 'date';
    public const TYPE_ENUM = 'enum';

    // AdverseEvent parameter keys
    // Study identifier (aka IRB number in REDCap)
    public const KEY_STUDY_ID = 'study_id';

    // Identifier type values removed
}
