<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use InvalidArgumentException;
use JsonSerializable;

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