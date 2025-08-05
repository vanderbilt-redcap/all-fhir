import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/API'
import { useErrorsStore } from './ErrorsStore'
import type { MappingResource, ProjectSettings } from '@/models/ProjectSettings'

export const useSettingsStore = defineStore('settings', () => {
  const errorsStore = useErrorsStore()

  // Holds the last saved state from the server
  const settings = reactive<ProjectSettings>({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: [],
  })

  // "Draft" state for user edits
  const selectedFhirSystem = ref<number | null>(null)
  const selectedMappingResources = ref<MappingResource[]>([])
  const selectedCustomMappingResources = ref<MappingResource[]>([])

  const loading = reactive({
    fetch: false,
    save: false,
  })

  const fetchProjectSettings = async () => {
    try {
      loading.fetch = true
      const res = await api.getProjectSettings()
      const fetchedSettings = res.data ?? {}
      
      // Update the "saved" state
      Object.assign(settings, fetchedSettings)

      // Initialize the "draft" state with copies
      selectedFhirSystem.value = settings.fhir_system
      selectedMappingResources.value = [...settings.selected_mapping_resources]
      selectedCustomMappingResources.value = [...settings.selected_custom_mapping_resources]

    } catch (err) {
      errorsStore.addError(err as Error, 'settingsStore')
      console.error('Failed to load project settings:', err)
    } finally {
      loading.fetch = false
    }
  }

  const addPredefinedResource = (name: string) => {
    const resource: MappingResource = { name, type: 'predefined' }
    selectedMappingResources.value.push(resource)
  }

  const addCustomResource = (expression: string) => {
    const [name, query] = expression.split('?')
    const resource: MappingResource = {
      name,
      type: 'custom',
      parameters: query ? `?${query}` : '',
    }
    selectedCustomMappingResources.value.push(resource)
  }

  const removeResource = (resource: MappingResource, type: 'predefined' | 'custom') => {
    if (type === 'predefined') {
      const index = selectedMappingResources.value.findIndex(r => r.name === resource.name)
      if (index > -1) selectedMappingResources.value.splice(index, 1)
    } else {
      const index = selectedCustomMappingResources.value.findIndex(r => r.name === resource.name)
      if (index > -1) selectedCustomMappingResources.value.splice(index, 1)
    }
  }

  const updateSelectedFhirSystem = (fhirSystemId: number) => {
    selectedFhirSystem.value = fhirSystemId
  }

  const saveProjectSettings = async () => {
    try {
      loading.save = true
      const payload = {
        fhir_system: selectedFhirSystem.value,
        selected_mapping_resources: selectedMappingResources.value,
        selected_custom_mapping_resources: selectedCustomMappingResources.value,
      }
      await api.updateProjectSettings(payload)
      // Re-fetch to sync saved and draft states
      await fetchProjectSettings() 
    } catch (err) {
      errorsStore.addError(err as Error, 'settingsStore')
      console.error('Failed to save project settings:', err)
      throw err // Re-throw to be caught in the component
    } finally {
      loading.save = false
    }
  }

  return {
    loading,
    settings,
    selectedFhirSystem,
    selectedMappingResources,
    selectedCustomMappingResources,
    fetchProjectSettings,
    addPredefinedResource,
    addCustomResource,
    removeResource,
    updateSelectedFhirSystem,
    saveProjectSettings,
  }
})
