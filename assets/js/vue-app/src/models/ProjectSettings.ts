export interface FhirSystem {
  ehr_id: number
  ehr_name: string
  fhir_base_url: string
}

export type ResourceType = 'predefined' | 'custom'

export interface MappingResource {
  name: string           // E.g. "Observation"
  type: ResourceType     // "predefined" or "custom"
  parameters?: string    // E.g. "?category=social-history"
}

export interface ProjectSettings {
  fhir_system: number|null
  fhir_systems: Array<FhirSystem>
  mapping_resources: Array<MappingResource>
  selected_mapping_resources: Array<MappingResource>
  selected_custom_mapping_resources: Array<MappingResource>
}