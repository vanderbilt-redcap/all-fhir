# Product Requirements Document (PRD)

**Module Name:** FHIR Snapshot  
**Author:** Francesco Delacqua  
**Date:** 07/01/2025  
**Version:** 1.0  

---

## 1. Overview

**Purpose:**  
This REDCap External Module enables users to fetch FHIR resources from configured FHIR systems using existing CDIS tools in REDCap. The module retrieves and stores JSON payloads for specific MRNs, then provides on-demand streaming downloads without requiring server-side archive storage.

**Background/Context:**  
While REDCap's CDIS tools allow for real-time FHIR integration by storing data directly into REDCap project instruments, this External Module takes a different approach. Instead of populating project fields, it stores raw FHIR payloads using REDCap's repeated forms and file storage, then provides on-demand streaming downloads of ZIP archives. This makes it particularly useful for research workflows or audits that require unaltered FHIR data without server storage overhead.

**Stakeholders:**  
- REDCap Administrators  
- Clinical Researchers  
- Data Managers  
- IT/FHIR Integration Teams  

---

## 2. Functional Requirements

**FR1**  
*Requirement:* Enable module at system and project level  
*Priority:* High  
*Notes:* Admins control enablement

**FR2**  
*Requirement:* Display setup page to select FHIR system and resources  
*Priority:* High  
*Notes:* Pulls from existing CDIS configuration

**FR3**  
*Requirement:* Allow users to add/remove MRNs  
*Priority:* High  
*Notes:* Via resources page

**FR4**  
*Requirement:* Fetch FHIR resources in background using queue-based processing  
*Priority:* High  
*Notes:* Implemented via cron-based queue processor using generic FHIR fetch tasks that process all pending resources efficiently. Uses intelligent task deduplication to prevent unnecessary duplicate tasks.

**FR5**  
*Requirement:* Store payloads using REDCap repeated forms with JSON file storage  
*Priority:* High  
*Notes:* Use repeated forms with `all_fhir_` prefixed fields for metadata and edoc file storage for JSON payloads. Each resource instance is stored in a separate repeat instance with complete metadata tracking including resource name, specification, mapping type, status, and file references.

**FR6**  
*Requirement:* Provide on-demand streaming downloads of FHIR resources  
*Priority:* High  
*Notes:* Real-time ZIP generation without server storage using OnDemandStreamingPackager

**FR7**  
*Requirement:* Track fetch status and errors per MRN  
*Priority:* Medium  
*Notes:* Includes parsing of OperationOutcome resources

**FR8**  
*Requirement:* Detect and flag protected resources (e.g., Epic's break-the-glass)  
*Priority:* Medium  
*Notes:* Based on OperationOutcome metadata

**FR9**  
*Requirement:* Automatic synchronization between configured mapping resources and data instances  
*Priority:* High  
*Notes:* System maintains consistency between configuration changes and existing data through automated synchronization workflows. Supports resource lifecycle management (created, updated, deleted).

**FR10**  
*Requirement:* Manual full synchronization capability  
*Priority:* Medium  
*Notes:* Provides manual trigger for comprehensive project synchronization that creates missing instances, cleans orphaned data, and ensures complete resource coverage across all MRNs.

**FR11**  
*Requirement:* Flexible mapping resource configuration  
*Priority:* High  
*Notes:* Support for both predefined REDCap FHIR categories and custom FHIR query specifications. Separates display names from technical specifications for better user experience.

**FR12**  
*Requirement:* On-demand streaming archive generation  
*Priority:* High  
*Notes:* Generate ZIP archives on-the-fly with zero server-side storage, memory-efficient processing, and direct browser streaming using ZipStream library.

**FR13**  
*Requirement:* Dual cron job architecture for automated processing  
*Priority:* High  
*Notes:* Separate cron jobs: (1) Resource Fetching Cron - automatically processes FhirResourceMetadata instances marked as pending, (2) Task Processing Cron - handles queued operations like full sync and retry failed operations.

---

## 3. Non-Functional Requirements

- Requires REDCap CDIS feature to be enabled
- At least one FHIR system must be configured in CDIS settings
- Implements robust background processing via queue-based architecture with cron scheduling
- Access token must be valid for at least one user in the project
- Project does not need to be CDIS-enabled
- Files are stored in `edocs` folder
- Complies with REDCap security and privacy standards

---

## 4. User Interface

### 4.1 Setup Page
- Dropdown to select FHIR system (pulled dynamically from CDIS config)
- Checklist or multi-select input for available FHIR resource types,including the ability to specify custom resource queries using the `{resource.search}` syntax (e.g., `/Observation?category=social-history`)

### 4.2 Resources Page
- The module identifies which resources have been downloaded for each MRN, allowing for partial fetching and ensuring newly added MRNs or resources won't re-download existing data.
- List of MRNs with individual statuses per resource type (e.g., Patient, Observation), such as Pending, Fetching, Completed, or Failed
- Add/Remove MRNs (uses REDCap data storage)
- Real-time status monitoring with automatic updates
- On-demand streaming download functionality with flexible filtering options (MRNs, resource types, date ranges)
- Direct ZIP streaming to browser without server-side archive creation

### 4.3 Tasks Page
- View and manage background processing tasks queue
- Monitor task status (pending, processing, completed, failed)
- Manual trigger for "Full Sync" operations (creates resource placeholders)
- Manual trigger for "Retry Failed" operations (resets failed resources to pending)
- Task execution history and logging
- Real-time progress tracking for active tasks

---

## 5. Background Queue Processing Architecture

### 5.1 Queue System Overview
The module implements a sophisticated background queue processing system to manage FHIR data fetching efficiently and reliably. This system ensures that large-scale FHIR operations don't interfere with the user experience and can handle resource-intensive operations within system constraints.

### 5.2 Queue Components

**Task Management:**
- **Task Value Object:** Immutable task representation with validation, status tracking (pending → processing → completed/failed), and metadata storage
- **Queue Manager:** Handles task storage/retrieval using REDCap project settings, with methods for adding, updating, and querying tasks
- **Resource Monitoring:** Integrates with REDCap's ResourceMonitor to respect memory and time limits during processing

**Processing Architecture:**
- **Strategy Pattern:** Extensible processor system where each task type (e.g., `fhir_fetch`, `create_archive`, `send_email`) has its own specialized processor
- **Cron-Based Execution:** Queue processor runs every minute via REDCap's cron system, processing pending tasks within resource constraints
- **Graceful Degradation:** Tasks remain pending if stopped due to resource limits, ensuring no data loss

### 5.3 FHIR Fetching Workflow

The module uses an optimized workflow with generic FHIR fetch tasks and intelligent synchronization:

1. **Resource Synchronization:** When mapping resources are added/updated or MRNs are added:
   - System creates FhirResourceMetadata instances for all applicable MRN/resource combinations
   - Each instance is stored as a separate repeat instance with "pending" status
   - Single generic `fhir_fetch` task is created (with deduplication to prevent multiple tasks)

2. **Generic Task Processing:** The cron job processes generic tasks efficiently:
   ```php
   // Single task processes ALL pending resources across ALL MRNs
   [
       'trigger' => 'new_mapping_resource', // Context for logging
       // No specific MRN/resource - processes all pending instances
   ]
   ```

3. **Background Processing:** The FhirFetchProcessor:
   - Scans all MRNs for pending resource instances
   - Processes resources within memory/time constraints
   - Connects to FHIR system using CDIS tools
   - Stores JSON payloads in REDCap edocs
   - Updates repeat instance status and metadata
   - Creates continuation tasks if resource limits are approached

4. **Status Tracking:** Each resource instance tracks its own status independently, providing granular monitoring per MRN per resource type

### 5.4 Synchronization Architecture

**Automatic Synchronization:** The module maintains data consistency through:
- **Resource Lifecycle Management:** When mapping resources are created, updated, or deleted, the system automatically synchronizes data instances across all MRNs
- **Outdated Instance Handling:** When mappings are updated, existing instances are marked as "outdated" and new instances are created
- **Orphan Cleanup:** When mappings are removed, instances are marked as "deleted" for audit trail preservation
- **New MRN Integration:** When MRNs are added, instances are automatically created for all active mapping resources

**Manual Full Synchronization:** Comprehensive project-wide synchronization that:
- Compares configured mapping resources against existing data instances
- Creates missing instances for incomplete MRN coverage
- Cleans up orphaned instances from removed mappings
- Provides detailed reporting on sync operations performed

### 5.5 Queue Processing Features

**Resource Management:**
- Monitors memory usage (80% threshold) and execution time (30 minutes max)
- Automatically stops processing when approaching limits
- Comprehensive logging for monitoring and debugging

**Error Handling:**
- Robust exception handling with detailed error logging
- Failed tasks are marked appropriately without affecting other tasks
- Support for retry logic and error classification

**Extensibility:**
- Additional processors can be easily added for new task types
- Archive creation and email notifications already implemented
- Supports custom task parameters and metadata

---

## 6. API/Integration Requirements

- Utilizes REDCap's CDIS tools for FHIR communication
- Parses FHIR Bundles (including paging logic)
- Handles OperationOutcome resources to detect issues such as break-the-glass restrictions (Epic)

---

## 6. Data Storage Architecture

### REDCap Repeated Forms Structure
The module uses REDCap repeated forms to store FHIR resource metadata with the following field naming convention:

**Repeated Form Fields (prefixed with `all_fhir_`):**
- `all_fhir_resource_name`: User-friendly display name for the mapping resource
- `all_fhir_resource_spec`: Technical specification (predefined name OR partial URL)
- `all_fhir_resource_type`: Mapping type ("predefined" or "custom")
- `all_fhir_resource_status`: Processing status (pending, fetching, completed, failed, outdated, deleted)
- `all_fhir_file_upload`: REDCap edoc ID containing the JSON payload
- `all_fhir_fetch_date`: Timestamp when resource was successfully fetched
- `all_fhir_error_message`: Error details for failed fetch operations
- `all_fhir_pagination_info`: JSON metadata for paginated resource collections

**Field Usage Examples:**
- Resource Name: "Patient Demographics", "Vital Signs", "Social History"
- Resource Spec: "patient-health", "Observation?category=social-history"
- Mapping Type: "predefined" (REDCap category) or "custom" (FHIR query)

### Data & Privacy Considerations

- FHIR resource metadata stored in REDCap repeated forms using `all_fhir_` field prefix
- JSON payloads stored using REDCap's native file upload system in edocs
- Queue processing tasks stored in REDCap project settings (no PHI in task metadata)
- Access to ZIP downloads and monitor UI is permission-restricted  
- Error logs avoid storing PHI when possible
- Background processing respects REDCap user permissions and project access controls
- Repeated form structure provides audit trail and better data organization

---

## 7. Success Metrics

- Module successfully fetches and stores payloads for >= 95% of MRNs entered
- Background queue processing completes tasks efficiently within resource constraints
- UI correctly displays and tracks real-time MRN and resource-level status
- Downloadable ZIP contains complete and accurate resource payloads
- No performance issues when enabled in multiple projects
- Queue system handles concurrent project processing without conflicts

---

## 8. Timeline

| Milestone | Target Date | Responsible |
|-----------|-------------|-------------|
| Initial Development | Early July | [Developer Name] |
| Internal Testing | Mid August | [QA or Dev Team] |
| Pilot Testing | Mid September | [User/Research Team] |
| Public Release | October | [Admin or DevOps] |

---

## 9. Future Enhancements

- Support for filtering resource queries using FHIR query parameters
- UI for advanced OperationOutcome parsing and classification
- Enhanced queue management UI for administrators (task monitoring, retry capabilities)
- Priority-based task scheduling for urgent requests
- Task retry mechanisms with exponential backoff for failed operations
- Webhook notifications for task completion events
- Queue analytics and performance monitoring dashboard