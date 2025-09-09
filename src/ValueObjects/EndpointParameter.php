<?php

namespace Vanderbilt\AllFhir\ValueObjects;

use JsonSerializable;
use Vanderbilt\AllFhir\Constants\EndpointParams;

/**
 * EndpointParameter
 *
 * Value object that defines a single endpoint parameter's schema for
 * configuration and UI rendering.
 */
class EndpointParameter implements JsonSerializable
{
    public function __construct(
        private string $key,
        private string $label,
        private string $type,
        private bool $required = false,
        private ?string $description = null,
        private mixed $default = null,
        private ?array $enumOptions = null,
        private bool $serverResolved = false,
    ) {
    }

    public function getKey(): string { return $this->key; }
    public function getLabel(): string { return $this->label; }
    public function getType(): string { return $this->type; }
    public function isRequired(): bool { return $this->required; }
    public function getDescription(): ?string { return $this->description; }
    public function getDefault(): mixed { return $this->default; }
    public function getEnumOptions(): ?array { return $this->enumOptions; }
    public function isServerResolved(): bool { return $this->serverResolved; }

    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->label,
            'type' => $this->type,
            'required' => $this->required,
            'description' => $this->description,
            'default' => $this->default,
            'enumOptions' => $this->enumOptions,
            'server_resolved' => $this->serverResolved,
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }

    // --------- Builder-style helpers for readability ---------

    public static function make(string $key, string $label, string $type): self
    {
        return new self($key, $label, $type);
    }

    public static function string(string $key, string $label): self
    {
        return new self($key, $label, EndpointParams::TYPE_STRING);
    }

    public static function number(string $key, string $label): self
    {
        return new self($key, $label, EndpointParams::TYPE_NUMBER);
    }

    public static function boolean(string $key, string $label): self
    {
        return new self($key, $label, EndpointParams::TYPE_BOOLEAN);
    }

    public static function date(string $key, string $label): self
    {
        return new self($key, $label, EndpointParams::TYPE_DATE);
    }

    public static function enum(string $key, string $label, array $options): self
    {
        return new self($key, $label, EndpointParams::TYPE_ENUM, false, null, null, $options);
    }

    public function required(bool $required = true): self
    {
        $this->required = $required;
        return $this;
    }

    public function optional(): self
    {
        $this->required = false;
        return $this;
    }

    public function description(?string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function withDefault(mixed $default): self
    {
        $this->default = $default;
        return $this;
    }

    public function withEnumOptions(?array $options): self
    {
        $this->enumOptions = $options;
        return $this;
    }

    public function serverResolved(bool $serverResolved = true): self
    {
        $this->serverResolved = $serverResolved;
        return $this;
    }
}
