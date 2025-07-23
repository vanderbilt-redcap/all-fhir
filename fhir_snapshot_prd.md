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
*Requirement:* Fetch FHIR resources in background  
*Priority:* High  
*Notes:* Resources include Patient, Observation (vital-signs), etc.

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
- Must support background processing (e.g., cron or queue runner)
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

## 5. API/Integration Requirements

- Utilizes REDCap's CDIS tools for FHIR communication
- Parses FHIR Bundles (including paging logic)
- Handles OperationOutcome resources to detect issues such as break-the-glass restrictions (Epic)

---

## 6. Data & Privacy Considerations

- No data is written to REDCap fields or forms
- All FHIR JSON payloads stored in server-side folders
- Access to ZIP downloads and monitor UI is permission-restricted
- Error logs must avoid storing PHI when possible

---

## 7. Success Metrics

- Module successfully fetches and stores payloads for >= 95% of MRNs entered
- UI correctly displays and tracks MRN status and errors
- Downloadable ZIP contains complete and accurate resource payloads
- No performance issues when enabled in multiple projects

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
- Email notification for completed fetches