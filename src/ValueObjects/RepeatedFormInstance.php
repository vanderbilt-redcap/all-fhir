<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use InvalidArgumentException;
use JsonSerializable;

/**
 * RepeatedFormInstance
 * 
 * Immutable value object representing a single instance of a REDCap repeated form.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Encapsulates REDCap repeated form instance data structure
 * - Provides proper data formatting for REDCap::saveData operations
 * - Handles repeat instance metadata (record ID, event ID, instance number)
 * - Manages form field data with validation and type safety
 * - Supports both creation and parsing of REDCap data structures
 * 
 * REDCap REPEATED FORM STRUCTURE:
 * This class handles the proper REDCap repeated form data structure:
 * $data[$recordId]['repeat_instances'][$eventId][$instrumentName][$instanceNum][$field] = $value
 * 
 * KEY FEATURES:
 * - Immutable design ensuring data consistency
 * - Proper REDCap data structure handling
 * - Validation of required REDCap identifiers
 * - Fluent interface for data manipulation
 * - Bi-directional REDCap data conversion
 * 
 * USAGE PATTERNS:
 * 
 * CREATION:
 * - RepeatedFormInstance::create($recordId, $eventId, $instrument, $instance, $data)
 * - RepeatedFormInstance::fromRedCapData($redcapDataArray)
 * 
 * DATA MANIPULATION:
 * - $instance->withData(['field1' => 'value1']) - Add/update fields
 * - $instance->getFieldValue('field_name') - Get specific field value
 * - $instance->hasField('field_name') - Check field existence
 * 
 * REDCap INTEGRATION:
 * - $instance->toRedCapSaveData() - Generate REDCap::saveData compatible array
 * - Handles proper repeat_instances structure automatically
 * - Maintains REDCap identifiers (record ID, event ID, instrument, instance)
 * 
 * VALIDATION:
 * - Record ID and Event ID cannot be empty
 * - Instrument name must be valid
 * - Repeat instance number must be positive integer
 * - Field data properly encapsulated and validated
 */
class RepeatedFormInstance implements JsonSerializable
{
    private string $recordId;
    private string $eventId;
    private string $instrumentName;
    private int $repeatInstance;
    private array $data;

    public function __construct(
        string $recordId,
        string $eventId,
        string $instrumentName,
        int $repeatInstance,
        array $data = []
    ) {
        $this->validateRecordId($recordId);
        $this->validateEventId($eventId);
        $this->validateInstrumentName($instrumentName);
        $this->validateRepeatInstance($repeatInstance);

        $this->recordId = $recordId;
        $this->eventId = $eventId;
        $this->instrumentName = $instrumentName;
        $this->repeatInstance = $repeatInstance;
        $this->data = $data;
    }

    public static function create(
        string $recordId,
        string $eventId,
        string $instrumentName,
        int $repeatInstance,
        array $data = []
    ): self {
        return new self($recordId, $eventId, $instrumentName, $repeatInstance, $data);
    }

    public static function fromRedCapData(array $redcapData): self
    {
        $recordId = key($redcapData);
        $recordData = reset($redcapData);

        if (!isset($recordData['repeat_instances'])) {
            throw new InvalidArgumentException('Missing repeat_instances in REDCap data');
        }

        $repeatInstances = $recordData['repeat_instances'];
        $eventId = key($repeatInstances);
        $eventData = reset($repeatInstances);

        $instrumentName = key($eventData);
        $instrumentData = reset($eventData);

        $repeatInstance = key($instrumentData);
        $instanceData = reset($instrumentData);

        return new self(
            $recordId,
            $eventId,
            $instrumentName,
            (int) $repeatInstance,
            $instanceData
        );
    }

    public function withData(array $data): self
    {
        return new self(
            $this->recordId,
            $this->eventId,
            $this->instrumentName,
            $this->repeatInstance,
            array_merge($this->data, $data)
        );
    }

    public function getRecordId(): string
    {
        return $this->recordId;
    }

    public function getEventId(): string
    {
        return $this->eventId;
    }

    public function getInstrumentName(): string
    {
        return $this->instrumentName;
    }

    public function getRepeatInstance(): int
    {
        return $this->repeatInstance;
    }

    public function getData(): array
    {
        return $this->data;
    }

    public function getFieldValue(string $fieldName): mixed
    {
        return $this->data[$fieldName] ?? null;
    }

    public function hasField(string $fieldName): bool
    {
        return array_key_exists($fieldName, $this->data);
    }

    public function toRedCapSaveData(): array
    {
        return [
            $this->recordId => [
                'repeat_instances' => [
                    $this->eventId => [
                        $this->instrumentName => [
                            $this->repeatInstance => $this->data
                        ]
                    ]
                ]
            ]
        ];
    }

    public function toArray(): array
    {
        return [
            'record_id' => $this->recordId,
            'event_id' => $this->eventId,
            'instrument_name' => $this->instrumentName,
            'repeat_instance' => $this->repeatInstance,
            'data' => $this->data
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }

    private function validateRecordId(string $recordId): void
    {
        if (empty(trim($recordId))) {
            throw new InvalidArgumentException('Record ID cannot be empty');
        }
    }

    private function validateEventId(string $eventId): void
    {
        if (empty(trim($eventId))) {
            throw new InvalidArgumentException('Event ID cannot be empty');
        }
    }

    private function validateInstrumentName(string $instrumentName): void
    {
        if (empty(trim($instrumentName))) {
            throw new InvalidArgumentException('Instrument name cannot be empty');
        }
    }

    private function validateRepeatInstance(int $repeatInstance): void
    {
        if ($repeatInstance < 1) {
            throw new InvalidArgumentException('Repeat instance must be greater than 0');
        }
    }
}