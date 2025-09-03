export interface FhirSystem {
  ehr_id: number
  ehr_name: string
  fhir_base_url: string
}

export type ResourceType = 'predefined' | 'custom'

export interface MappingResource {
  id?: string
  name: string           // User-friendly display name (e.g., "Vital Signs")
  resourceSpec: string   // FHIR query specification (e.g., "Observation?category=vital-signs")
  type: ResourceType     // "predefined" or "custom"
  deleted?: boolean
  deletedAt?: string | null
}

export interface ProjectSettings {
  fhir_system: number|null
  fhir_systems: Array<FhirSystem>
  mapping_resources: Array<MappingResource>
  selected_mapping_resources: Array<MappingResource>
  selected_custom_mapping_resources: Array<MappingResource>
}
