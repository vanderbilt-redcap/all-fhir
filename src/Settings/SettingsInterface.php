<?php

declare(strict_types=1);

namespace Vanderbilt\FhirSnapshot\Settings;

interface SettingsInterface
{
    /**
     * @param string $key
     * @return mixed
     */
    public function get(string $key = '');
}
