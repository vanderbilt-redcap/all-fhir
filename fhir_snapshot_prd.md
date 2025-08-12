# Product Requirements Document (PRD)

**Module Name:** FHIR Snapshot  
**Author:** Francesco Delacqua  
**Date:** 07/01/2025  
**Version:** 1.0  

---

## 1. Overview

**Purpose:**  
This REDCap External Module enables users to fetch FHIR resources from a configured FHIR system using the existing CDIS tools in REDCap. The module retrieves and stores JSON payloads for specific MRNs in structured directories without altering REDCap project data.

**Background/Context:**  
While REDCap’s CDIS tools allow for real-time FHIR integration by storing data directly into REDCap project instruments, this module takes a different approach. Instead of populating project fields, it stores the raw FHIR payloads in structured directories and enables users to download them. This makes it particularly useful for research workflows or audits that require archived, unaltered FHIR data.

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
*Notes:* Via monitor page

**FR4**  
*Requirement:* Fetch FHIR resources in background using queue-based processing  
*Priority:* High  
*Notes:* Implemented via cron-based queue processor that manages FHIR fetching tasks for each MRN and resource combination. Resources include Patient, Observation (vital-signs), etc.

**FR5**  
*Requirement:* Store payloads as JSON files using naming convention  
*Priority:* High  
*Notes:* `{project_id}-{mrn}/{resource-type}-{optional-pagination-number}.json`

**FR6**  
*Requirement:* Allow packaging of completed payloads into ZIP files for download  
*Priority:* Medium  
*Notes:* Multi-select support on monitor page

**FR7**  
*Requirement:* Track fetch status and errors per MRN  
*Priority:* Medium  
*Notes:* Includes parsing of OperationOutcome resources

**FR8**  
*Requirement:* Detect and flag protected resources (e.g., Epic's break-the-glass)  
*Priority:* Medium  
*Notes:* Based on OperationOutcome metadata


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

### 4.2 Monitor Page
- The module will identify which resources have already been downloaded for each MRN. This allows for partial fetching and ensures that newly added MRNs or resources will not re-download existing data, optimizing performance and preventing duplication.
- List of MRNs with individual statuses per resource type (e.g., Patient, Observation), such as Pending, Fetching, Completed, or Failed
- Add/Remove MRNs (uses redcap_data)
- Button to trigger fetch for all or selected MRNs, including resource-specific status updates per MRN
- Option to select completed MRNs and generate downloadable ZIP archive

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

When users trigger FHIR fetching from the Monitor page:

1. **Task Creation:** For each selected MRN and each configured resource type, a `fhir_fetch` task is created with parameters:
   ```php
   [
       'mrn' => '123456',
       'resources' => ['Patient', 'Observation', 'Condition'],
       'fhir_system' => 'configured_system_id'
   ]
   ```

2. **Background Processing:** The cron job processes these tasks:
   - Connects to configured FHIR system using CDIS tools
   - Fetches resources for the specified MRN
   - Handles pagination for large result sets
   - Stores JSON payloads in structured directories
   - Updates task status and project data fields accordingly

3. **Status Tracking:** Each task's progress is tracked and reflected in the Monitor page UI, showing per-resource status for each MRN

### 5.4 Queue Processing Features

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

## 6. Data & Privacy Considerations

- No FHIR data is written to REDCap fields or forms
- All FHIR JSON payloads stored in server-side folders
- Queue processing tasks stored in REDCap project settings (no PHI in task metadata)
- Access to ZIP downloads and monitor UI is permission-restricted  
- Error logs avoid storing PHI when possible
- Background processing respects REDCap user permissions and project access controls

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