<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\ValueObjects\RepeatedFormInstance;
use REDCap;

class RepeatedFormDataAccessor
{
    private string $projectId;
    private string $instrumentName;
    private array $fieldMap;

    public function __construct(string $projectId, string $instrumentName = 'fhir_resources')
    {
        $this->projectId = $projectId;
        $this->instrumentName = $instrumentName;
        $this->fieldMap = [
            'resource_type' => 'all_fhir_resource_type',
            'status' => 'all_fhir_resource_status',
            'file_upload' => 'all_fhir_file_upload',
            'fetch_date' => 'all_fhir_fetch_date',
            'error_message' => 'all_fhir_error_message',
            'pagination_info' => 'all_fhir_pagination_info'
        ];
    }

    public function saveResourceMetadata(string $recordId, FhirResourceMetadata $metadata): bool
    {
        $eventId = $this->getEventId();
        $redcapData = $metadata->toRedCapData($recordId, $eventId, $this->instrumentName);
        
        $result = REDCap::saveData(
            $this->projectId,
            'array',
            $redcapData,
            'overwrite'
        );
        
        return empty($result['errors']);
    }

    public function getResourceMetadata(string $recordId, string $resourceType, int $repeatInstance): ?FhirResourceMetadata
    {
        $eventId = $this->getEventId();
        
        $data = REDCap::getData(
            $this->projectId,
            'array',
            $recordId,
            null,
            $eventId,
            null,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            $this->instrumentName,
            $repeatInstance
        );
        
        // Check if we have repeat instances data
        if (empty($data[$recordId]['repeat_instances'][$eventId][$this->instrumentName][$repeatInstance])) {
            return null;
        }
        
        $instanceData = $data[$recordId]['repeat_instances'][$eventId][$this->instrumentName][$repeatInstance];
        
        if ($instanceData[$this->fieldMap['resource_type']] !== $resourceType) {
            return null;
        }
        
        return new FhirResourceMetadata(
            $instanceData[$this->fieldMap['resource_type']],
            $instanceData[$this->fieldMap['status']] ?? FhirResourceMetadata::STATUS_PENDING,
            !empty($instanceData[$this->fieldMap['file_upload']]) ? (int) $instanceData[$this->fieldMap['file_upload']] : null,
            $instanceData[$this->fieldMap['fetch_date']] ?? null,
            $instanceData[$this->fieldMap['error_message']] ?? null,
            !empty($instanceData[$this->fieldMap['pagination_info']]) ? json_decode($instanceData[$this->fieldMap['pagination_info']], true) : null,
            $repeatInstance
        );
    }

    public function getResourceMetadataByType(string $recordId, string $resourceType): array
    {
        $eventId = $this->getEventId();
        
        $data = REDCap::getData(
            $this->projectId,
            'array',
            $recordId,
            null,
            $eventId,
            null,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            $this->instrumentName
        );
        
        if (empty($data[$recordId]['repeat_instances'][$eventId][$this->instrumentName])) {
            return [];
        }
        
        $metadata = [];
        $repeatInstances = $data[$recordId]['repeat_instances'][$eventId][$this->instrumentName];
        
        foreach ($repeatInstances as $repeatInstance => $instanceData) {
            if (isset($instanceData[$this->fieldMap['resource_type']]) &&
                $instanceData[$this->fieldMap['resource_type']] === $resourceType) {
                
                $metadata[] = new FhirResourceMetadata(
                    $instanceData[$this->fieldMap['resource_type']],
                    $instanceData[$this->fieldMap['status']] ?? FhirResourceMetadata::STATUS_PENDING,
                    !empty($instanceData[$this->fieldMap['file_upload']]) ? (int) $instanceData[$this->fieldMap['file_upload']] : null,
                    $instanceData[$this->fieldMap['fetch_date']] ?? null,
                    $instanceData[$this->fieldMap['error_message']] ?? null,
                    !empty($instanceData[$this->fieldMap['pagination_info']]) ? json_decode($instanceData[$this->fieldMap['pagination_info']], true) : null,
                    (int) $repeatInstance
                );
            }
        }
        
        return $metadata;
    }

    public function getAllResourceMetadata(string $recordId): array
    {
        $eventId = $this->getEventId();
        
        $data = REDCap::getData(
            $this->projectId,
            'array',
            $recordId,
            null,
            $eventId,
            null,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            $this->instrumentName
        );
        
        if (empty($data[$recordId]['repeat_instances'][$eventId][$this->instrumentName])) {
            return [];
        }
        
        $metadata = [];
        $repeatInstances = $data[$recordId]['repeat_instances'][$eventId][$this->instrumentName];
        
        foreach ($repeatInstances as $repeatInstance => $instanceData) {
            if (isset($instanceData[$this->fieldMap['resource_type']])) {
                
                $metadata[] = new FhirResourceMetadata(
                    $instanceData[$this->fieldMap['resource_type']],
                    $instanceData[$this->fieldMap['status']] ?? FhirResourceMetadata::STATUS_PENDING,
                    !empty($instanceData[$this->fieldMap['file_upload']]) ? (int) $instanceData[$this->fieldMap['file_upload']] : null,
                    $instanceData[$this->fieldMap['fetch_date']] ?? null,
                    $instanceData[$this->fieldMap['error_message']] ?? null,
                    !empty($instanceData[$this->fieldMap['pagination_info']]) ? json_decode($instanceData[$this->fieldMap['pagination_info']], true) : null,
                    (int) $repeatInstance
                );
            }
        }
        
        return $metadata;
    }

    public function getNextRepeatInstance(string $recordId): int
    {
        $eventId = $this->getEventId();
        
        $data = REDCap::getData(
            $this->projectId,
            'array',
            $recordId,
            null,
            $eventId,
            null,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            $this->instrumentName
        );
        
        if (empty($data[$recordId]['repeat_instances'][$eventId][$this->instrumentName])) {
            return 1;
        }
        
        $repeatInstances = $data[$recordId]['repeat_instances'][$eventId][$this->instrumentName];
        $maxInstance = max(array_keys($repeatInstances));
        
        return $maxInstance + 1;
    }

    public function getAllRecordIds(): array
    {
        $recordIdField = REDCap::getRecordIdField($this->projectId);
        
        $data = REDCap::getData(
            $this->projectId,
            'array',
            null,
            [$recordIdField]
        );
        
        return array_keys($data);
    }

    public function getAllMrns(): array
    {
        $data = REDCap::getData(
            $this->projectId,
            'array',
            null,
            'mrn'
        );
        
        $mrns = [];
        
        foreach ($data as $recordId => $recordData) {
            $eventData = reset($recordData);
            if (isset($eventData['mrn']) && !empty($eventData['mrn'])) {
                $mrns[] = $eventData['mrn'];
            }
        }
        
        return array_unique($mrns);
    }

    public function getRecordIdByMrn(string $mrn): ?string
    {
        $data = REDCap::getData(
            $this->projectId,
            'array',
            null,
            'mrn'
        );
        
        foreach ($data as $recordId => $recordData) {
            $eventData = reset($recordData);
            if (isset($eventData['mrn']) && $eventData['mrn'] === $mrn) {
                return $recordId;
            }
        }
        
        return null;
    }

    public function getMrnByRecordId(string $recordId): ?string
    {
        $data = REDCap::getData(
            $this->projectId,
            'array',
            $recordId,
            'mrn'
        );
        
        if (empty($data[$recordId])) {
            return null;
        }
        
        $eventData = reset($data[$recordId]);
        return $eventData['mrn'] ?? null;
    }

    public function createRepeatedFormInstance(
        string $recordId,
        string $resourceType,
        int $repeatInstance,
        array $additionalData = []
    ): RepeatedFormInstance {
        $eventId = $this->getEventId();
        
        $data = array_merge($additionalData, [
            $this->fieldMap['resource_type'] => $resourceType,
            $this->fieldMap['status'] => FhirResourceMetadata::STATUS_PENDING
        ]);
        
        return RepeatedFormInstance::create(
            $recordId,
            $eventId,
            $this->instrumentName,
            $repeatInstance,
            $data
        );
    }

    public function saveRepeatedFormInstance(RepeatedFormInstance $instance): bool
    {
        $redcapData = $instance->toRedCapSaveData();
        
        $result = REDCap::saveData(
            $this->projectId,
            'array',
            $redcapData,
            'overwrite'
        );
        
        return empty($result['errors']);
    }

    public function deleteRepeatedFormInstance(string $recordId, int $repeatInstance): bool
    {
        $eventId = $this->getEventId();
        
        // To delete a repeat instance, we set all its fields to empty
        $deleteData = [
            $recordId => [
                'repeat_instances' => [
                    $eventId => [
                        $this->instrumentName => [
                            $repeatInstance => array_fill_keys(array_values($this->fieldMap), '')
                        ]
                    ]
                ]
            ]
        ];
        
        $result = REDCap::saveData(
            $this->projectId,
            'array',
            $deleteData,
            'overwrite'
        );
        
        return empty($result['errors']);
    }

    public function getResourceStatusCounts(string $recordId): array
    {
        $metadata = $this->getAllResourceMetadata($recordId);
        
        $counts = [
            FhirResourceMetadata::STATUS_PENDING => 0,
            FhirResourceMetadata::STATUS_FETCHING => 0,
            FhirResourceMetadata::STATUS_COMPLETED => 0,
            FhirResourceMetadata::STATUS_FAILED => 0,
            FhirResourceMetadata::STATUS_OUTDATED => 0,
            FhirResourceMetadata::STATUS_DELETED => 0
        ];
        
        foreach ($metadata as $item) {
            $counts[$item->getStatus()]++;
        }
        
        return $counts;
    }

    private function getEventId(): string
    {
        global $Proj;
        
        if (!$Proj || $Proj->project_id != $this->projectId) {
            $Proj = new \Project($this->projectId);
        }
        
        return (string) $Proj->firstEventId;
    }
}