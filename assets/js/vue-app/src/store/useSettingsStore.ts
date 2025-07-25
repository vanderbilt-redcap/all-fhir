import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/API' // adjust import path
import { useError } from '@/composables/useError'
import { useErrorsStore } from './errorsStore'
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

  const errorsStore = useErrorsStore()
  
  // FHIR Systems
  const loading = ref(false)
  const availableSystems = ref<FhirSystem[]>([])
  const selectedSystem = ref<FhirSystem | null>(null)

  // Selected FHIR Resources (shown in the table)
  const selectedResources = ref<SelectedResource[]>([])

  // Predefined resource types
  const predefinedTypes = ref<string[]>([])

  const fetchAvailableSystems = async () => {
    try {
      loading.value = true;
      const res = await api.getAvailableFhirSystems()
      availableSystems.value = res.data ?? []
    } catch (err) {
      errorsStore.addError(err, 'settingsStore')
      console.log('Failed to load FHIR systems:', err)
      availableSystems.value = []
    }finally {
      loading.value = false
    }
  }

  const fetchPredefinedResourceTypes = async () => {
    if (!selectedSystem.value) return
    try {
      loading.value = true;
      const res = await api.getAvailableResourceTypes()
      predefinedTypes.value = res.data ?? []
    } catch (err) {
      console.error('Failed to load resource types:', err)
      predefinedTypes.value = []
    }finally {
      loading.value = false
    }
  }

  const setSelectedSystem = (system: FhirSystem) => {
    selectedSystem.value = system
    selectedResources.value = [] // reset
    fetchPredefinedResourceTypes()
  }

  // ➕ Resource management
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

  const updateResource = (index: number, updated: SelectedResource) => {
    if (index >= 0 && index < selectedResources.value.length) {
      selectedResources.value[index] = { ...updated }
    }
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
    loading,
    availableSystems,
    selectedSystem,
    predefinedTypes,
    selectedResources,

    fetchAvailableSystems,
    fetchPredefinedResourceTypes,
    setSelectedSystem,

    addPredefinedResource,
    addCustomResource,
    updateResource,
    removeResource,
    importResources,
    exportResources
  }
})
