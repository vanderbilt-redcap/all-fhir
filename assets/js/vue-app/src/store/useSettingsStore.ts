import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface FhirSystem {
  id: string
  name: string
  baseUrl: string
}

export type ResourceType = 'predefined' | 'custom'

export interface SelectedResource {
  name: string           // E.g. "Observation"
  type: ResourceType     // "predefined" or "custom"
  parameters?: string    // E.g. "?category=social-history"
}

export const useSettingsStore = defineStore('settings', () => {
  // FHIR Systems
  const availableSystems = ref<FhirSystem[]>([])
  const selectedSystem = ref<FhirSystem | null>(null)

  // Selected FHIR Resources (shown in the table)
  const selectedResources = ref<SelectedResource[]>([])

  // Predefined resource types for dropdown
  const predefinedTypes = ref<string[]>([])

  const fetchAvailableSystems = async () => {
    const res = await fetch('/api/fhir-systems') // adjust to backend
    availableSystems.value = await res.json()
  }

  const fetchPredefinedResourceTypes = async () => {
    if (!selectedSystem.value) return
    const res = await fetch(`/api/fhir-resources?system=${selectedSystem.value.id}`)
    predefinedTypes.value = await res.json()
  }

  const setSelectedSystem = (system: FhirSystem) => {
    selectedSystem.value = system
    selectedResources.value = [] // reset on system change
    fetchPredefinedResourceTypes()
  }

  const addPredefinedResource = (name: string) => {
    selectedResources.value.push({
      name,
      type: 'predefined'
    })
  }

  const addCustomResource = (expression: string) => {
    const [name, query] = expression.split('?')
    selectedResources.value.push({
      name,
      type: 'custom',
      parameters: query ? `?${query}` : ''
    })
  }

  const removeResource = (index: number) => {
    selectedResources.value.splice(index, 1)
  }

  const importResources = (imported: SelectedResource[]) => {
    selectedResources.value = [...imported]
  }

  const exportResources = (): SelectedResource[] => {
    return selectedResources.value
  }

  return {
    availableSystems,
    selectedSystem,
    setSelectedSystem,
    fetchAvailableSystems,
    fetchPredefinedResourceTypes,
    predefinedTypes,

    selectedResources,
    addPredefinedResource,
    addCustomResource,
    removeResource,
    importResources,
    exportResources,
  }
})
