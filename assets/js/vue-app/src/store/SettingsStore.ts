import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/API' // adjust import path
import { useErrorsStore } from './ErrorsStore'
import type { MappingResource, ProjectSettings } from '@/models/ProjectSettings'

export const useSettingsStore = defineStore('settings', () => {

  const errorsStore = useErrorsStore()

  const emptySettings = () => ({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: []
  })
  
  // FHIR Systems
  const loading = ref(false)
  const settings = reactive<ProjectSettings>(emptySettings())

  // Selected FHIR Resources (shown in the table)
  const selectedResources = ref<MappingResource[]>([])

  // Predefined resource types
  const predefinedTypes = ref<string[]>([])

  const fetchProjectSettings = async () => {
    try {
      loading.value = true;
      const res = await api.getProjectSettings()
      Object.assign(settings, res.data ?? {})

    } catch (err) {
      errorsStore.addError(err, 'settingsStore')
      console.log('Failed to load project settings:', err)
      Object.assign(settings, emptySettings())
    }finally {
      loading.value = false
    }
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

  const updateResource = (index: number, updated: MappingResource) => {
    if (index >= 0 && index < selectedResources.value.length) {
      selectedResources.value[index] = { ...updated }
    }
  }

  const removeResource = (index: number) => {
    selectedResources.value.splice(index, 1)
  }

  const importResources = (imported: MappingResource[]) => {
    selectedResources.value = [...imported]
  }

  const exportResources = (): MappingResource[] => {
    return selectedResources.value
  }

  return {
    loading,
    predefinedTypes,
    selectedResources,
    settings,

    fetchProjectSettings,
    addPredefinedResource,
    addCustomResource,
    updateResource,
    removeResource,
    importResources,
    exportResources
  }
})
