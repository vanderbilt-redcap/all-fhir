# Product Requirements Document (PRD)

**Module Name:** FHIR Snapshot  
**Author:** [Your Name]  
**Date:** [Insert Date]  
**Version:** 1.0  

---

## 1. Overview

**Purpose:**  
This REDCap External Module enables users to fetch FHIR resources from a configured FHIR system using the existing CDIS tools in REDCap. The module retrieves and stores JSON payloads for specific MRNs in structured directories without altering REDCap project data.

**Background/Context:**  
While REDCap’s CDIS tools allow for real-time FHIR integration, this module enhances that functionality by supporting batch fetching and structured payload storage. It is particularly useful for research workflows or audits that require archived raw data from FHIR endpoints.

**Stakeholders:**
- REDCap Administrators  
- Clinical Researchers  
- Data Managers  
- IT/FHIR Integration Teams  

---

## 2. Functional Requirements

| ID | Requirement Description | Priority | Notes |
|----|--------------------------|----------|-------|
| FR1 | Enable module at system and project level | High | Admins control enablement |
| FR2 | Display setup page to select FHIR system and resources | High | Pulls from existing CDIS configuration |
| FR3 | Allow users to add/remove MRNs | High | Via monitor page |
| FR4 | Fetch FHIR resources in background | High | Resources include Patient, Observation (vital-signs), etc. |
| FR5 | Store payloads as JSON files using naming convention | High | `{project_id}{mrn}/{resource-type}-{optional-pagination-number}.json` |
| FR6 | Allow packaging of completed payloads into ZIP files for download | Medium | Multi-select support on monitor page |
| FR7 | Track fetch status and errors per MRN | Medium | Includes parsing of OperationOutcome resources |
| FR8 | Detect and flag protected resources (e.g., Epic's break-the-glass) | Medium | Based on OperationOutcome metadata |

---

## 3. Non-Functional Requirements

- Requires REDCap CDIS feature to be enabled  
- At least one FHIR system must be configured in CDIS settings  
- Must support background processing (e.g., cron or queue runner)  
- Access token must be valid for at least one user in the project  
- Project does not need to be CDIS-enabled  
- Files are stored outside of REDCap fields and forms  
- Complies with REDCap security and privacy standards  

---

## 4. User Interface

### 4.1 Setup Page
- Dropdown to select FHIR system (pulled dynamically from CDIS config)
- Checklist or multi-select input for available FHIR resource types, including the ability to specify custom resource queries using the `{resource.search}` syntax (e.g., `/Observation?category=social-history`)

### 4.2 Monitor Page
- The module will identify which resources have already been downloaded for each MRN. This allows for partial fetching and ensures that newly added MRNs or resources will not re-download existing data, optimizing performance and preventing duplication.
- List of MRNs with individual statuses per resource type (e.g., Patient, Observation), such as Pending, Fetching, Completed, or Failed
- Add/Remove MRNs
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

- Module successfully fetches and stores payloads for ≥ 95% of MRNs entered  
- UI correctly displays and tracks MRN status and errors  
- Downloadable ZIP contains complete and accurate resource payloads  
- No performance issues when enabled in multiple projects

---

## 8. Timeline

| Milestone | Target Date | Responsible |
|-----------|-------------|-------------|
| Initial Development | [Insert Date] | [Developer Name] |
| Internal Testing | [Insert Date] | [QA or Dev Team] |
| Pilot Testing | [Insert Date] | [User/Research Team] |
| Public Release | [Insert Date] | [Admin or DevOps] |

---

## 9. Future Enhancements

- Support for filtering resource queries using FHIR query parameters
- Audit log export of fetch activity
- UI for advanced OperationOutcome parsing and classification
- Email notification for completed fetches

