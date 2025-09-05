import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/API'
import { useErrorsStore } from './ErrorsStore'
import type { MappingResource, ProjectSettings } from '@/models/ProjectSettings'
import { useNotificationStore } from './NotificationStore'
import { AxiosError } from 'axios'

export const useSettingsStore = defineStore('settings', () => {
  const errorsStore = useErrorsStore()
  const notificationStore = useNotificationStore()

  /**
   * Version tag for the Resources import/export JSON schema.
   * Bump this when the payload structure changes, and update
   * `importResources` to handle backward compatibility as needed.
   */
  const RESOURCES_EXPORT_VERSION = '1' as const

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

  const addPredefinedResource = async (name: string, resourceSpec: string) => {
    try {
      const res = await api.createMappingResource({ name, resourceSpec, type: 'predefined' })
      await fetchProjectSettings()
      notificationStore.showSuccess(`${name} added`, 'Resource added')
      return res
    } catch (error) {
      let errorMessage = 'Error adding the resource'
      if(error instanceof AxiosError) {
        errorMessage = error.response?.data?.message ?? errorMessage
      }
      notificationStore.showError(`${name} not added: ${errorMessage}`, 'Error')
    }
  }

  const addCustomResource = async (name: string, resourceSpec: string) => {
    const res = await api.createMappingResource({ name, resourceSpec, type: 'custom' })
    await fetchProjectSettings()
    notificationStore.showSuccess(`${name} added`, 'Resource added')
    return res
  }

  const softDeleteResource = async (resource: MappingResource) => {
    if (!resource.id) return
    await api.softDeleteMappingResource(resource.id)
    await fetchProjectSettings()
    notificationStore.showWarning(`${resource.name} soft-deleted`, 'Resource Deleted')
  }

  const restoreResource = async (resource: MappingResource) => {
    if (!resource.id) return
    await api.restoreMappingResource(resource.id)
    await fetchProjectSettings()
    notificationStore.showSuccess(`${resource.name} restored`, 'Resource Restored')
  }

  const updateSelectedFhirSystem = async (fhirSystemId: number) => {
    // This method is now expected to be called once the user confirmed (if needed)
    await api.updateFhirSystem(fhirSystemId)
    selectedFhirSystem.value = fhirSystemId
    settings.fhir_system = fhirSystemId
    notificationStore.showSuccess('FHIR system changed', 'FHIR System Updated')
  }

  // Removed saveProjectSettings: updates are now route-based and immediate

  // ----- Import/Export of selected resources -----
  type ExportPayload = {
    version: string
    exportedAt: string
    items: MappingResource[]
  }

  const exportResources = (): ExportPayload => {
    const items: MappingResource[] = [
      ...selectedMappingResources.value,
      ...selectedCustomMappingResources.value,
    ]
    return {
      version: RESOURCES_EXPORT_VERSION,
      exportedAt: new Date().toISOString(),
      items,
    }
  }

  type ImportMode = 'merge' | 'replace'
  type ImportResult = { added: number; updated: number; skipped: number; total: number }

  const importResources = (data: unknown, options: { mode?: ImportMode } = {}): ImportResult => {
    const mode: ImportMode = options.mode ?? 'merge'

    // Basic schema validation
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid JSON payload')
    }
    const payload = data as Partial<ExportPayload>
    if (!payload.version || payload.version !== RESOURCES_EXPORT_VERSION) {
      throw new Error('Unsupported or missing version')
    }
    if (!Array.isArray(payload.items)) {
      throw new Error('Invalid payload: items must be an array')
    }

    // Type guard for MappingResource
    const isValidResource = (r: any): r is MappingResource => {
      return r && typeof r.name === 'string' && typeof r.resourceSpec === 'string' && (r.type === 'predefined' || r.type === 'custom')
    }

    const incoming: MappingResource[] = []
    for (const item of payload.items) {
      if (isValidResource(item)) incoming.push({ name: item.name, resourceSpec: item.resourceSpec, type: item.type })
    }

    const result: ImportResult = { added: 0, updated: 0, skipped: 0, total: incoming.length }

    if (mode === 'replace') {
      const predef = incoming.filter(i => i.type === 'predefined')
      const custom = incoming.filter(i => i.type === 'custom')
      selectedMappingResources.value = [...predef]
      selectedCustomMappingResources.value = [...custom]
      result.added = incoming.length
      return result
    }

    // merge mode
    for (const res of incoming) {
      const list = res.type === 'predefined' ? selectedMappingResources.value : selectedCustomMappingResources.value
      // Match by resourceSpec primarily; update name if resourceSpec exists with different name
      const bySpecIdx = list.findIndex(r => r.resourceSpec === res.resourceSpec)
      if (bySpecIdx > -1) {
        const existing = list[bySpecIdx]
        if (existing.name !== res.name) {
          list[bySpecIdx] = { ...existing, name: res.name }
          result.updated += 1
        } else {
          result.skipped += 1
        }
        continue
      }
      // Otherwise, add if exact duplicate not present
      const exists = list.some(r => r.name === res.name && r.resourceSpec === res.resourceSpec)
      if (exists) {
        result.skipped += 1
      } else {
        list.push(res)
        result.added += 1
      }
    }

    return result
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
    softDeleteResource,
    restoreResource,
    updateSelectedFhirSystem,
    exportResources,
    importResources,
  }
})
