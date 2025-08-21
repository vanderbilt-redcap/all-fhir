<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\Constants\FhirFormFields;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\ValueObjects\RepeatedFormInstance;
use REDCap;

/**
 * RepeatedFormDataAccessor
 * 
 * Provides data access layer for managing FHIR resource metadata stored in REDCap repeated forms.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Handles all REDCap data operations for repeated form instances
 * - Manages CRUD operations for FHIR resource metadata
 * - Provides conversion utilities between MRNs and REDCap record IDs
 * - Implements proper REDCap repeated form data structure handling
 * - Manages repeat instance numbering and data retrieval
 * 
 * KEY FEATURES:
 * - Uses correct REDCap repeated form data structure (repeat_instances)
 * - Handles MRN to record ID conversion for REDCap compatibility
 * - Provides status counting and summary statistics
 * - Manages file attachments through REDCap's edoc system
 * - Ensures data integrity through proper validation
 * 
 * USAGE PATTERNS:
 * - Save resource metadata: saveResourceMetadata($recordId, $metadata)
 * - Retrieve by type: getResourceMetadataByType($recordId, $resourceType)
 * - Get next instance: getNextRepeatInstance($recordId)
 * - Convert identifiers: getRecordIdByMrn($mrn) / getMrnByRecordId($recordId)
 * 
 * DATA STRUCTURE:
 * Uses REDCap's repeat_instances structure:
 * $record[$recordId]['repeat_instances'][$eventId][$instrumentName][$instanceNum][$fieldName] = $value
 */
class RepeatedFormDataAccessor
{
    private string $projectId;
    private string $instrumentName;
    private array $fieldMap;

    public function __construct(string $projectId, string $instrumentName = Constants::DEFAULT_INSTRUMENT_NAME)
    {
        $this->projectId = $projectId;
        $this->instrumentName = $instrumentName;
        $this->fieldMap = [
            'resource_name' => FhirFormFields::RESOURCE_NAME,
            'resource_spec' => FhirFormFields::RESOURCE_SPEC,
            'mapping_type' => FhirFormFields::RESOURCE_TYPE,
            'status' => FhirFormFields::RESOURCE_STATUS,
            'file_upload' => FhirFormFields::FILE_UPLOAD,
            'fetch_date' => FhirFormFields::FETCH_DATE,
            'error_message' => FhirFormFields::ERROR_MESSAGE,
            'pagination_info' => FhirFormFields::PAGINATION_INFO
        ];
    }

    public function getProjectId() { return $this->projectId; }

    public function saveResourceMetadata(string $recordId, FhirResourceMetadata $metadata): bool
    {
        $eventId = $this->getEventId();
        $redcapData = $metadata->toRedCapData($recordId, $eventId, $this->instrumentName);
        
        $result = REDCap::saveData([
            'project_id'=>$this->projectId,
            'dataFormat'=>'array',
            'data'=>$redcapData,
            'skipFileUploadFields'=>false,
            'overwriteBehavior' => 'overwrite',
        ]);
        
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
        
        // For now, we'll match against resource spec since that's what identifies the resource
        // TODO: Consider updating the method signature to be more specific
        
        return new FhirResourceMetadata(
            $instanceData[$this->fieldMap['resource_name']] ?? '',
            $instanceData[$this->fieldMap['resource_spec']] ?? '',
            $instanceData[$this->fieldMap['mapping_type']] ?? FhirResourceMetadata::MAPPING_TYPE_CUSTOM,
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
            // Match against resource spec for backward compatibility
            if (isset($instanceData[$this->fieldMap['resource_spec']]) &&
                $instanceData[$this->fieldMap['resource_spec']] === $resourceType) {
                
                $metadata[] = new FhirResourceMetadata(
                    $instanceData[$this->fieldMap['resource_name']] ?? '',
                    $instanceData[$this->fieldMap['resource_spec']] ?? '',
                    $instanceData[$this->fieldMap['mapping_type']] ?? FhirResourceMetadata::MAPPING_TYPE_CUSTOM,
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
            if (isset($instanceData[$this->fieldMap['resource_name']])) {
                
                $metadata[] = new FhirResourceMetadata(
                    $instanceData[$this->fieldMap['resource_name']] ?? '',
                    $instanceData[$this->fieldMap['resource_spec']] ?? '',
                    $instanceData[$this->fieldMap['mapping_type']] ?? FhirResourceMetadata::MAPPING_TYPE_CUSTOM,
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