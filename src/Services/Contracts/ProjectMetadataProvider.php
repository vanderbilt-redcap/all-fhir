<?php

namespace Vanderbilt\AllFhir\Services\Contracts;

interface ProjectMetadataProvider
{
    /** @return array<string,array> field_name => metadata row */
    public function getMetadata(): array;

    /** @return array<string,array> form_name => ['fields' => array<string,mixed>] */
    public function getForms(): array;

    /** @return string[] */
    public function getFormFields(string $form): array;

    public function getFormOfField(string $field): ?string;

    public function isRepeatingFormAnyEvent(string $form): bool;

    /** @return array<int|string,mixed> event_id => 'WHOLE' or [form_name => custom_label] */
    public function getRepeatingFormsEvents(): array;

    public function isLongitudinal(): bool;

    public function getProjectId(): int;
}

