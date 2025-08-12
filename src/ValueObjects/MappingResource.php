<?php

namespace Vanderbilt\FhirSnapshot\ValueObjects;

use InvalidArgumentException;
use JsonSerializable;

class MappingResource implements JsonSerializable
{
    public const TYPE_PREDEFINED = 'predefined';
    public const TYPE_CUSTOM = 'custom';

    private const VALID_TYPES = [
        self::TYPE_PREDEFINED,
        self::TYPE_CUSTOM
    ];

    private string $id;
    private string $name;
    private string $type;

    public function __construct(
        string $id,
        string $name,
        string $type
    ) {
        $this->validateId($id);
        $this->validateName($name);
        $this->validateType($type);

        $this->id = $id;
        $this->name = $name;
        $this->type = $type;
    }

    public static function create(string $name, string $type): self
    {
        return new self(
            self::generateId(),
            $name,
            $type
        );
    }

    public static function fromArray(array $data): self
    {
        if (!isset($data['name'])) {
            throw new InvalidArgumentException('Missing required field: name');
        }
        
        if (!isset($data['type'])) {
            throw new InvalidArgumentException('Missing required field: type');
        }
        
        return new self(
            $data['id'] ?? self::generateId(),
            $data['name'],
            $data['type']
        );
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function isPredefined(): bool
    {
        return $this->type === self::TYPE_PREDEFINED;
    }

    public function isCustom(): bool
    {
        return $this->type === self::TYPE_CUSTOM;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }

    private static function generateId(): string
    {
        return uniqid('resource_', true);
    }

    private function validateId(string $id): void
    {
        if (empty(trim($id))) {
            throw new InvalidArgumentException('MappingResource ID cannot be empty');
        }
    }

    private function validateName(string $name): void
    {
        if (empty(trim($name))) {
            throw new InvalidArgumentException('MappingResource name cannot be empty');
        }
    }

    private function validateType(string $type): void
    {
        if (!in_array($type, self::VALID_TYPES, true)) {
            throw new InvalidArgumentException(
                sprintf('Invalid type "%s". Valid types: %s', 
                    $type, 
                    implode(', ', self::VALID_TYPES)
                )
            );
        }
    }
}