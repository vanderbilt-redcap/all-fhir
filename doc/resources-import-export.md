# Resources Import/Export

This module supports importing and exporting selected mapping resources as JSON.

## JSON Schema (version 1)

Root object:

```
{
  "version": "1",
  "exportedAt": "<ISO-8601 datetime>",
  "items": [
    { "name": "Vital Signs", "resourceSpec": "Observation?category=vital-signs", "type": "predefined" },
    { "name": "Custom Obs", "resourceSpec": "Observation?code=1234-5", "type": "custom" }
  ]
}
```

Where each item matches the `MappingResource` model with:
- `name`: display name
- `resourceSpec`: FHIR query spec
- `type`: `predefined` or `custom`

## Behavior

- Export: Downloads the current selection (predefined + custom) to a file named `resources-YYYYMMDD-HHMM.json`.
- Import modes:
  - Merge (default): Adds new resources; updates the `name` when a matching `resourceSpec` exists; skips exact duplicates.
  - Replace: Replaces current selection with file contents (both predefined and custom). A confirmation modal is shown before proceeding.

## Implementation Notes

- Store actions live in `src/store/SettingsStore.ts`:
  - `exportResources()` returns the payload above.
  - `importResources(data, { mode })` validates the schema and applies merge/replace.
- UI wiring in `src/pages/SetupPage.vue`:
  - Import: Opens `ImportResourcesModal` to choose mode, optionally confirms replace, then reads a selected `.json` file and calls the store.
  - Export: Serializes store data to a `Blob` and triggers a download.
- Notifications: Uses `NotificationStore` to show success/errors and confirmation modals.

