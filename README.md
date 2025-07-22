# FHIR Snapshot External Module

**Version:** 1.0
**Author:** Francesco Delacqua
**Date:** 07/22/2025

## Overview

**FHIR Snapshot** is a REDCap External Module designed to enhance data retrieval capabilities from FHIR-compliant systems using REDCap's existing CDIS tools. This module enables batch fetching of FHIR resources for selected MRNs and stores the resulting JSON payloads in structured directories, without modifying REDCap project data.

It is particularly useful for research workflows, data audits, or archiving raw clinical data.

---

## Key Features

* Select FHIR system and resource types from CDIS configuration
* Add or remove MRNs for tracking and fetch
* Background fetching of FHIR resources (e.g., Patient, Observation)
* Stores JSON payloads in `{project_id}{mrn}/` directories
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
2. **Enable the module** for individual projects where FHIR snapshot functionality is required.
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

Payloads are stored on the server as:

```
/{project_id}-{mrn}/
  ├── Patient.json
  ├── Observation-1.json
  ├── Observation-2.json
```

ZIP packages are created from this structure for download.

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

* No PHI is written to REDCap fields or instruments
* JSON payloads stored securely on the server
* Error logs avoid storing sensitive data
* Monitor UI and downloads are access-controlled

---