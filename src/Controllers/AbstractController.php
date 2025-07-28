<?php
namespace Vanderbilt\FhirSnapshot\Controllers;

use Vanderbilt\FhirSnapshot\FhirSnapshot;

abstract class AbstractController
{
    public function __construct(protected FhirSnapshot $module) {}
}
