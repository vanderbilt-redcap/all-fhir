<?php

namespace Vanderbilt\AllFhir\Services;

use Vanderbilt\AllFhir\Services\FhirEndpointRegistry;

/**
 * EndpointParamNormalizer
 *
 * Centralized normalization and validation of endpoint parameters
 * based on the schema definitions from FhirEndpointRegistry.
 */
class EndpointParamNormalizer
{
    public function __construct(private FhirEndpointRegistry $registry) {}

    /**
     * Validate and normalize params for storage (type-safe, trimmed, no unknown keys).
     * Returns an array with keys: [ 'params' => array, 'errors' => array<string,string> ]
     */
    public function normalizeForStorage(string $resourceSpec, array $params): array
    {
        $schema = $this->registry->getParamSchemaForCategory($resourceSpec);
        $errors = [];
        $normalized = [];

        $defsByKey = [];
        foreach ($schema as $def) {
            $defsByKey[$def->getKey()] = $def;
        }

        // Coerce known keys only
        foreach ($defsByKey as $key => $def) {
            $has = array_key_exists($key, $params);
            $value = $has ? $params[$key] : null;

            $coerced = $this->coerceValue($def->getType(), $value, $errors, $key);
            if ($coerced === null) {
                // Required check when missing/null/empty
                if ($def->isRequired()) {
                    $errors[$key] = $errors[$key] ?? 'This field is required';
                }
                continue; // skip storing null/empty
            }

            // enum validation
            if ($def->getType() === 'enum') {
                $allowed = array_map(fn($o) => (string)($o['value'] ?? ''), $def->getEnumOptions() ?? []);
                if (!in_array((string)$coerced, $allowed, true)) {
                    $errors[$key] = 'Invalid value';
                    continue;
                }
            }

            $normalized[$key] = $coerced;
        }

        return ['params' => $normalized, 'errors' => $errors];
    }

    /**
     * Normalize for visitor: derive from storage-normalized values; safe to pass to visitor.
     */
    public function normalizeForVisitor(string $resourceSpec, array $params): array
    {
        $result = $this->normalizeForStorage($resourceSpec, $params);
        return $result['errors'] ? [] : $result['params'];
    }

    /**
     * Validate only, returning errors keyed by field.
     */
    public function validate(string $resourceSpec, array $params): array
    {
        return $this->normalizeForStorage($resourceSpec, $params)['errors'];
    }

    private function coerceValue(string $type, $value, array &$errors, string $key)
    {
        if ($value === null) return null;
        switch ($type) {
            case 'string':
                if (is_string($value)) {
                    $v = trim($value);
                    return $v === '' ? null : $v;
                }
                // allow scalars
                if (is_scalar($value)) {
                    $v = trim((string)$value);
                    return $v === '' ? null : $v;
                }
                $errors[$key] = 'Invalid string';
                return null;
            case 'number':
                if (is_numeric($value)) return $value + 0; // cast to int/float
                if (is_string($value) && is_numeric(trim($value))) return (trim($value) + 0);
                $errors[$key] = 'Invalid number';
                return null;
            case 'boolean':
                if (is_bool($value)) return $value;
                if (is_string($value)) {
                    $lv = strtolower(trim($value));
                    if ($lv === 'true' || $lv === '1') return true;
                    if ($lv === 'false' || $lv === '0') return false;
                }
                if (is_int($value)) return (bool)$value;
                $errors[$key] = 'Invalid boolean';
                return null;
            case 'date':
                if (is_string($value) && preg_match('/^\d{4}-\d{2}-\d{2}$/', trim($value))) return trim($value);
                $errors[$key] = 'Invalid date (expected YYYY-MM-DD)';
                return null;
            case 'enum':
                if (is_scalar($value)) return (string)$value;
                $errors[$key] = 'Invalid enum value';
                return null;
            default:
                // Unknown type: ignore
                return null;
        }
    }
}

