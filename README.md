# ALL FHIR External Module

**Version:** 1.0
**Author:** Francesco Delacqua
**Date:** 07/22/2025

## Overview

**ALL FHIR** is a REDCap External Module designed to enhance data retrieval capabilities from FHIR-compliant systems using REDCap's existing CDIS tools. This module enables batch fetching of FHIR resources for selected MRNs and stores the resulting JSON payloads in structured directories, without modifying REDCap project data.

It is particularly useful for research workflows, data audits, or archiving raw clinical data.

---

## Key Features

* Select FHIR system and resource types from CDIS configuration
* Add or remove MRNs for tracking and fetch
* Background fetching of FHIR resources (e.g., Patient, Observation)
* Stores JSON payloads in `{project_id}/{record_id}/{mrn}/` directories
* Monitor page with real-time status updates for each MRN and resource
* ZIP download of completed payloads
* OperationOutcome parsing for error detection and privacy protection

---

## Requirements

* REDCap CDIS tools must be enabled
* At least one FHIR system must be configured
* Background processing enabled (cron or queue runner)
* Valid access token for a project user
* Project does **not** need to be CDIS-enabled
* Files stored **outside** of REDCap fields/forms
* Must comply with REDCap security/privacy standards

---

## Installation & Configuration

1. **Enable the module** at the **System level** via the REDCap External Module Manager.
2. **Enable the module** for individual projects where ALL FHIR functionality is required.
3. Go to the **Setup Page**:

   * Select a FHIR system from CDIS configuration.
   * Choose FHIR resources to fetch (e.g., `Patient`, `Observation`), with optional custom queries (`/Observation?category=social-history`).
4. Go to the **Monitor Page**:

   * Add MRNs to be fetched.
   * View status of fetch per resource and MRN.
   * Trigger fetch for selected MRNs.
   * Download completed payloads as ZIP files.

---

## File Storage Convention

Payloads are organized as:

```
/{project_id}/
  └── {record_id}/
      └── {mrn}/
          ├── Patient.json
          ├── Observation-1.json
          ├── Observation-2.json
archive_metadata.json
```

ZIP packages are created from this structure for download and include a root-level `archive_metadata.json` file with summary information about the archive (counts, file list, and processing details).

---

## Status Tracking

Each MRN displays status per resource:

* **Pending** – Not yet fetched
* **Fetching** – Currently retrieving
* **Completed** – Successfully stored
* **Failed** – Error encountered during fetch

OperationOutcome messages are parsed for error details and protection flags (e.g., Epic’s break-the-glass alerts).

---

## Security & Privacy

* JSON payloads stored securely on the server
* Error logs avoid storing sensitive data
* Monitor UI and downloads are access-controlled

---

## Features

- Token status banner with auto-refresh and clear guidance when no tokens or no FHIR system is configured
- Standalone Launch button for EHR sign-in and automatic status refresh
- FHIR system selection with placeholder option, Disabled mode, and change confirmation
- Data dictionary notice with packaged template and link to the REDCap Data Dictionary upload page when the project is not compliant

---

## Maintenance

### Backfill Mapping Resource IDs

If you have existing FHIR resource metadata that predates the ID-only policy, you can backfill missing `mapping_resource_id` values so all future fetches consistently resolve the configured mapping (including endpoint params).

- What it does:
  - Scans all records and resource metadata instances.
  - For entries missing `mapping_resource_id`, matches by exact triple: `resource_name | mapping_type | resource_spec` against the project’s active configured mappings.
  - Writes the matched mapping’s ID back into the metadata.
  - Idempotent; safe to run multiple times.

- Endpoint:
  - Route: `maintenance/backfill-mapping-ids`
  - Methods: `GET` or `POST`

- How to run:
  - While authenticated to REDCap, open the module API URL for the route.
  - Example (programmatic): `\$url = $module->buildApiUrl('maintenance/backfill-mapping-ids');`
  - Example (direct): `[APP_PATH_WEBROOT]/api/?pid=PID&page=api&type=module&prefix=all_fhir&route=maintenance/backfill-mapping-ids`
  - Note: Direct calls require a valid REDCap session cookie (and CSRF token for POST).

- Response:
  - JSON summary with keys: `records_scanned`, `instances_scanned`, `missing_id`, `backfilled`, `unmatched`.

- Permissions:
  - Requires project-level access to the module’s API routes.

- Performance:
  - On large projects, allow time for the scan to complete.
