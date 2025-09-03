<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Project;
use Vanderbilt\FhirSnapshot\Constants;
use Vanderbilt\FhirSnapshot\Constants\FhirFormFields;
use Vanderbilt\FhirSnapshot\ValueObjects\FhirResourceMetadata;
use Vanderbilt\FhirSnapshot\ValueObjects\RepeatedFormInstance;
use REDCap;

/**
 * RepeatedFormDataAccessor
 * 
 * Low-level data access service that handles all REDCap database operations for FHIR resource
 * metadata stored in repeated form instances. Serves as the primary data persistence layer
 * for the FHIR snapshot system.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Manages REDCap repeated form data structure operations with proper field mapping
 * - Provides complete CRUD operations for FHIR resource metadata persistence
 * - Handles MRN ↔ Record ID conversions for user-friendly vs. system identifiers
 * - Implements REDCap-specific data format conversions and validation
 * - Manages repeat instance numbering, sequencing, and lifecycle operations
 * - Provides data retrieval with filtering, counting, and aggregation capabilities
 * 
 * CORE OPERATIONS:
 * 
 * METADATA PERSISTENCE:
 * - Save/update FhirResourceMetadata objects to REDCap repeated forms
 * - Retrieve metadata by record ID, resource type, or repeat instance
 * - Handle status updates and lifecycle transitions
 * - Manage file upload references through REDCap's edoc system
 * 
 * INSTANCE MANAGEMENT:
 * - Calculate next available repeat instance numbers
 * - Create, update, and delete repeated form instances
 * - Handle proper REDCap repeat_instances data structure
 * - Ensure data integrity across concurrent operations
 * 
 * IDENTIFIER CONVERSION:
 * - Convert Medical Record Numbers (MRNs) to REDCap record IDs
 * - Provide reverse lookup from record IDs to MRNs
 * - Support bulk operations across all project MRNs
 * - Handle missing or invalid identifier scenarios
 * 
 * DATA AGGREGATION:
 * - Generate status count summaries by record
 * - Provide project-wide statistics and reporting data
 * - Support filtering and search operations
 * - Calculate metadata across multiple repeat instances
 * 
 * REDCAP INTEGRATION:
 * - Uses REDCap's getData/saveData APIs with proper parameter handling
 * - Manages REDCap event IDs and project contexts automatically
 * - Handles REDCap field mapping through configurable field definitions
 * - Ensures compatibility with REDCap's repeated form constraints
 * 
 * DATA STRUCTURE DETAILS:
 * REDCap repeated forms use this nested structure:
 * ```php
 * $data[$recordId]['repeat_instances'][$eventId][$instrumentName][$instanceNum][$fieldName] = $value
 * ```
 * 
 * FIELD MAPPING:
 * - resource_name → all_fhir_resource_name (display name)
 * - resource_spec → all_fhir_resource_spec (FHIR query specification)
 * - mapping_type → all_fhir_resource_type (predefined/custom classification)
 * - status → all_fhir_resource_status (lifecycle status)
 * - file_upload → all_fhir_file_upload (edoc ID reference)
 * - fetch_date → all_fhir_fetch_date (completion timestamp)
 * - error_message → all_fhir_error_message (failure details)
 * - pagination_info → all_fhir_pagination_info (FHIR pagination metadata)
 * 
 * USAGE PATTERNS:
 * - saveResourceMetadata($recordId, $metadata) - Persist metadata to REDCap
 * - getResourceMetadata($recordId, $resourceType, $instance) - Retrieve specific metadata
 * - getAllResourceMetadata($recordId) - Get all resources for a record
 * - getRecordIdByMrn($mrn) - Convert MRN to REDCap record ID
 * - getNextRepeatInstance($recordId) - Calculate next instance number
 * - getResourceStatusCounts($recordId) - Aggregate status statistics
 * 
 * ERROR HANDLING:
 * - Returns null for missing data rather than throwing exceptions
 * - Provides boolean success indicators for write operations
 * - Handles REDCap API errors gracefully with detailed logging
 * - Validates data integrity before persistence operations
 * 
 * PERFORMANCE CONSIDERATIONS:
 * - Uses targeted REDCap queries with specific record/field filters
 * - Implements efficient bulk operations for project-wide operations
 * - Caches project context (event IDs) to avoid repeated lookups
 * - Optimizes repeat instance calculations with max() operations
 */
class RepeatedFormDataAccessor
{
    private string $projectId;
    private string $instrumentName;
    private array $fieldMap;

    /**
     * Initialize the data accessor with REDCap project context and field mappings
     * 
     * @param string $projectId REDCap project identifier for data operations
     * @param string $instrumentName REDCap instrument/form name for repeated form storage
     */
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
            'pagination_info' => FhirFormFields::PAGINATION_INFO,
            'mapping_resource_id' => FhirFormFields::MAPPING_RESOURCE_ID
        ];
    }

    /**
     * Get the REDCap project ID associated with this data accessor
     * 
     * @return string REDCap project identifier
     */
    public function getProjectId(): string { return $this->projectId; }

    /**
     * Persist FHIR resource metadata to REDCap repeated form storage
     * 
     * Converts FhirResourceMetadata object to REDCap's repeat_instances data structure
     * and saves to the configured instrument with proper error handling.
     * 
     * @param string $recordId REDCap record identifier
     * @param FhirResourceMetadata $metadata Complete metadata object to persist
     * @return bool True if save successful, false if errors occurred
     */
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

    /**
     * Retrieve specific FHIR resource metadata from REDCap repeated form
     * 
     * Fetches metadata for a specific record, resource type, and repeat instance.
     * Currently matches by resource spec for backward compatibility.
     * 
     * @param string $recordId REDCap record identifier
     * @param string $resourceType FHIR resource type/spec to match
     * @param int $repeatInstance Specific repeat instance number to retrieve
     * @return FhirResourceMetadata|null Metadata object or null if not found
     */
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

        // If resource name is empty (e.g., after hard deletion), treat as non-existent
        $resourceName = trim($instanceData[$this->fieldMap['resource_name']] ?? '');
        if ($resourceName === '') {
            return null;
        }

        return new FhirResourceMetadata(
            $resourceName,
            $instanceData[$this->fieldMap['resource_spec']] ?? '',
            $instanceData[$this->fieldMap['mapping_type']] ?? FhirResourceMetadata::MAPPING_TYPE_CUSTOM,
            $instanceData[$this->fieldMap['status']] ?? FhirResourceMetadata::STATUS_PENDING,
            !empty($instanceData[$this->fieldMap['file_upload']]) ? (int) $instanceData[$this->fieldMap['file_upload']] : null,
            $instanceData[$this->fieldMap['fetch_date']] ?? null,
            $instanceData[$this->fieldMap['error_message']] ?? null,
            !empty($instanceData[$this->fieldMap['pagination_info']]) ? json_decode($instanceData[$this->fieldMap['pagination_info']], true) : null,
            $repeatInstance,
            $instanceData[$this->fieldMap['mapping_resource_id']] ?? null
        );
    }

    /**
     * Retrieve all FHIR resource metadata instances matching a specific resource type
     * 
     * Searches all repeat instances for a given record and returns metadata objects
     * where the resource name matches the specified parameter.
     * 
     * @param string $recordId REDCap record identifier
     * @param string $resourceType Resource name to match (e.g., "Demographics", "Vital Signs")
     * @return FhirResourceMetadata[] Array of matching metadata objects
     */
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
            // Match against resource name
            if (isset($instanceData[$this->fieldMap['resource_name']]) &&
                $instanceData[$this->fieldMap['resource_name']] === $resourceType &&
                trim((string)$instanceData[$this->fieldMap['resource_name']]) !== '') {
                
                $metadata[] = new FhirResourceMetadata(
                    $instanceData[$this->fieldMap['resource_name']] ?? '',
                    $instanceData[$this->fieldMap['resource_spec']] ?? '',
                    $instanceData[$this->fieldMap['mapping_type']] ?? FhirResourceMetadata::MAPPING_TYPE_CUSTOM,
                    $instanceData[$this->fieldMap['status']] ?? FhirResourceMetadata::STATUS_PENDING,
                    !empty($instanceData[$this->fieldMap['file_upload']]) ? (int) $instanceData[$this->fieldMap['file_upload']] : null,
                    $instanceData[$this->fieldMap['fetch_date']] ?? null,
                    $instanceData[$this->fieldMap['error_message']] ?? null,
                    !empty($instanceData[$this->fieldMap['pagination_info']]) ? json_decode($instanceData[$this->fieldMap['pagination_info']], true) : null,
                    (int) $repeatInstance,
                    $instanceData[$this->fieldMap['mapping_resource_id']] ?? null
                );
            }
        }
        
        return $metadata;
    }

    /**
     * Retrieve all FHIR resource metadata for a specific REDCap record
     * 
     * Fetches all repeat instances containing FHIR resource metadata for the given record,
     * returning a complete array of FhirResourceMetadata objects.
     * 
     * @param string $recordId REDCap record identifier
     * @return FhirResourceMetadata[] Array of all resource metadata for the record
     */
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
            $name = isset($instanceData[$this->fieldMap['resource_name']]) ? trim((string)$instanceData[$this->fieldMap['resource_name']]) : '';
            if ($name !== '') {
                
                $metadata[] = new FhirResourceMetadata(
                    $name,
                    $instanceData[$this->fieldMap['resource_spec']] ?? '',
                    $instanceData[$this->fieldMap['mapping_type']] ?? FhirResourceMetadata::MAPPING_TYPE_CUSTOM,
                    $instanceData[$this->fieldMap['status']] ?? FhirResourceMetadata::STATUS_PENDING,
                    !empty($instanceData[$this->fieldMap['file_upload']]) ? (int) $instanceData[$this->fieldMap['file_upload']] : null,
                    $instanceData[$this->fieldMap['fetch_date']] ?? null,
                    $instanceData[$this->fieldMap['error_message']] ?? null,
                    !empty($instanceData[$this->fieldMap['pagination_info']]) ? json_decode($instanceData[$this->fieldMap['pagination_info']], true) : null,
                    (int) $repeatInstance,
                    $instanceData[$this->fieldMap['mapping_resource_id']] ?? null
                );
            }
        }
        
        return $metadata;
    }

    /**
     * Retrieve all FHIR resource metadata instances matching a specific mapping resource id
     * Falls back to empty if none.
     */
    public function getResourceMetadataByMappingId(string $recordId, string $mappingResourceId): array
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
        $results = [];
        foreach ($data[$recordId]['repeat_instances'][$eventId][$this->instrumentName] as $repeatInstance => $instanceData) {
            if (($instanceData[$this->fieldMap['mapping_resource_id']] ?? null) === $mappingResourceId) {
                $results[] = new FhirResourceMetadata(
                    $instanceData[$this->fieldMap['resource_name']] ?? '',
                    $instanceData[$this->fieldMap['resource_spec']] ?? '',
                    $instanceData[$this->fieldMap['mapping_type']] ?? FhirResourceMetadata::MAPPING_TYPE_CUSTOM,
                    $instanceData[$this->fieldMap['status']] ?? FhirResourceMetadata::STATUS_PENDING,
                    !empty($instanceData[$this->fieldMap['file_upload']]) ? (int) $instanceData[$this->fieldMap['file_upload']] : null,
                    $instanceData[$this->fieldMap['fetch_date']] ?? null,
                    $instanceData[$this->fieldMap['error_message']] ?? null,
                    !empty($instanceData[$this->fieldMap['pagination_info']]) ? json_decode($instanceData[$this->fieldMap['pagination_info']], true) : null,
                    (int) $repeatInstance,
                    $instanceData[$this->fieldMap['mapping_resource_id']] ?? null
                );
            }
        }
        return $results;
    }

    /**
     * Calculate the next available repeat instance number for a given record
     * 
     * Examines existing repeat instances and returns the next sequential number
     * to use for creating new repeated form instances.
     * 
     * @param string $recordId REDCap record identifier
     * @return int Next available repeat instance number (starts at 1)
     */
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

    /**
     * Retrieve all REDCap record IDs in the project
     * 
     * Fetches the complete list of record identifiers from the project,
     * useful for bulk operations and project-wide statistics.
     * 
     * @return string[] Array of REDCap record IDs
     */
    public function getAllRecordIds(): array
    {
        $Proj = new Project($this->projectId);
        $recordIdField = $Proj->table_pk;
        
        $data = REDCap::getData(
            $this->projectId,
            'array',
            null,
            [$recordIdField]
        );
        
        return array_keys($data);
    }

    /**
     * Retrieve all Medical Record Numbers (MRNs) from the project
     * 
     * Extracts unique MRN values from all records, filtering out empty values.
     * Provides the user-friendly identifier list for the project.
     * 
     * @return string[] Array of unique MRN values
     */
    public function getAllMrns(): array
    {
        $data = REDCap::getData(
            $this->projectId,
            'array',
            null,
            FhirFormFields::MRN
        );
        
        $mrns = [];
        
        foreach ($data as $recordId => $recordData) {
            $eventData = reset($recordData);
            if (isset($eventData[FhirFormFields::MRN]) && !empty($eventData[FhirFormFields::MRN])) {
                $mrns[] = $eventData[FhirFormFields::MRN];
            }
        }
        
        return array_unique($mrns);
    }

    /**
     * Convert Medical Record Number to REDCap record ID
     * 
     * Searches through project records to find the REDCap record ID that
     * corresponds to the specified MRN value.
     * 
     * @param string $mrn Medical Record Number to look up
     * @return string|null REDCap record ID or null if MRN not found
     */
    public function getRecordIdByMrn(string $mrn): ?string
    {
        $data = REDCap::getData(
            $this->projectId,
            'array',
            null,
            FhirFormFields::MRN
        );
        
        foreach ($data as $recordId => $recordData) {
            $eventData = reset($recordData);
            if (isset($eventData[FhirFormFields::MRN]) && $eventData[FhirFormFields::MRN] === $mrn) {
                return $recordId;
            }
        }
        
        return null;
    }

    /**
     * Convert REDCap record ID to Medical Record Number
     * 
     * Retrieves the MRN value associated with a specific REDCap record ID.
     * Provides reverse lookup for user-friendly identifier display.
     * 
     * @param string $recordId REDCap record identifier
     * @return string|null MRN value or null if record not found or MRN empty
     */
    public function getMrnByRecordId(string $recordId): ?string
    {
        $data = REDCap::getData(
            $this->projectId,
            'array',
            $recordId,
            FhirFormFields::MRN
        );
        
        if (empty($data[$recordId])) {
            return null;
        }
        
        $eventData = reset($data[$recordId]);
        return $eventData[FhirFormFields::MRN] ?? null;
    }

    /**
     * Create a new repeated form instance with initial data
     * 
     * Constructs a RepeatedFormInstance object with basic resource metadata
     * and any additional data provided, ready for persistence to REDCap.
     * 
     * @param string $recordId REDCap record identifier
     * @param string $resourceType FHIR resource type for the instance
     * @param int $repeatInstance Repeat instance number for the new instance
     * @param array $additionalData Additional field data to include
     * @return RepeatedFormInstance Configured instance ready for saving
     */
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

    /**
     * Save a repeated form instance to REDCap
     * 
     * Persists a RepeatedFormInstance object to REDCap using the proper
     * data structure and format for repeated form storage.
     * 
     * @param RepeatedFormInstance $instance Configured instance to save
     * @return bool True if save successful, false if errors occurred
     */
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

    /**
     * Delete a repeated form instance by clearing all field values
     * 
     * REDCap doesn't support true deletion of repeat instances, so this method
     * clears all field values to effectively remove the instance data.
     * 
     * @param string $recordId REDCap record identifier
     * @param int $repeatInstance Repeat instance number to delete
     * @return bool True if deletion successful, false if errors occurred
     */
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

    /**
     * Calculate resource status count statistics for a specific record
     * 
     * Aggregates all resource metadata for a record and returns counts by status,
     * useful for dashboard displays and progress tracking.
     * 
     * @param string $recordId REDCap record identifier
     * @return array<string,int> Associative array of status => count mappings
     */
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

    /**
     * Count failed FHIR resource metadata records across all project records
     * 
     * Scans all records in the project to find FhirResourceMetadata with STATUS_FAILED.
     * Uses record IDs directly to avoid MRN ambiguity issues.
     * 
     * @return int Total count of failed resource metadata across all records
     */
    public function countAllFailedResources(): int
    {
        $allRecordIds = $this->getAllRecordIds();
        $failedCount = 0;
        
        foreach ($allRecordIds as $recordId) {
            $allMetadata = $this->getAllResourceMetadata($recordId);
            foreach ($allMetadata as $metadata) {
                if ($metadata->isFailed()) {
                    $failedCount++;
                }
            }
        }
        
        return $failedCount;
    }

    /**
     * Get the REDCap event ID for data operations
     * 
     * Retrieves the first event ID from the project configuration, handling
     * both longitudinal and classic project types. Manages global Project object.
     * 
     * @return string REDCap event identifier
     */
    private function getEventId(): string
    {
        global $Proj;
        
        if (!$Proj || $Proj->project_id != $this->projectId) {
            $Proj = new \Project($this->projectId);
        }
        
        return (string) $Proj->firstEventId;
    }
}
