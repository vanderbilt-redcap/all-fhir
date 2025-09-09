<?php

namespace Vanderbilt\AllFhir\Constants;

/**
 * Discrete states for project FHIR access status.
 */
enum FhirAccessState: string
{
    case HasValidToken = 'has_valid_token';
    case NoFhirSystem = 'no_fhir_system';
    case NoValidTokens = 'no_valid_tokens';
}

