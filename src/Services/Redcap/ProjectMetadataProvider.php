<?php

namespace Vanderbilt\FhirSnapshot\Services\Redcap;

use Vanderbilt\FhirSnapshot\Services\Contracts\ProjectMetadataProvider as ProjectMetadataProviderContract;

class ProjectMetadataProvider implements ProjectMetadataProviderContract
{
    /** @var \Project */
    private $project;

    public function __construct(?\Project $project = null)
    {
        $this->project = $project ?: new \Project(PROJECT_ID);
    }

    public function getMetadata(): array
    {
        return $this->project->getMetadata() ?? [];
    }

    public function getForms(): array
    {
        return $this->project->getForms() ?? [];
    }

    public function getFormFields(string $form): array
    {
        return $this->project->getFormFields($form) ?? [];
    }

    public function getFormOfField(string $field): ?string
    {
        $metadata = $this->getMetadata();
        return $metadata[$field]['form_name'] ?? null;
    }

    public function isRepeatingFormAnyEvent(string $form): bool
    {
        return $this->project->isRepeatingFormAnyEvent($form);
    }

    public function getRepeatingFormsEvents(): array
    {
        return $this->project->getRepeatingFormsEvents() ?? [];
    }

    public function isLongitudinal(): bool
    {
        return (bool) $this->project->longitudinal;
    }

    public function getProjectId(): int
    {
        return $this->project->getId();
    }
}

