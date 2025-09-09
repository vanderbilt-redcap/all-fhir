import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/API'
import { useErrorsStore } from './ErrorsStore'
import type { MappingResource, ProjectSettings } from '@/models/ProjectSettings'
import { useEndpointParamsStore } from './EndpointParamsStore'
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
    importing: false,
  })

  const fetchProjectSettings = async () => {
    try {
      loading.fetch = true
      // Fetch settings and endpoint schemas in parallel
      const endpointParamsStore = useEndpointParamsStore()
      const [settingsRes] = await Promise.all([
        api.getProjectSettings(),
        endpointParamsStore.fetchSchemas().catch(() => null),
      ])
      const res = settingsRes
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
      // include endpoint params draft if available
      const endpointParamsStore = useEndpointParamsStore()
      const paramsDraft = endpointParamsStore.currentResourceSpec === resourceSpec ? (endpointParamsStore.draft || {}) : {}
      const res = await api.createMappingResource({ name, resourceSpec, type: 'predefined', params: paramsDraft })
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
    const list = resource.type === 'predefined' ? selectedMappingResources.value : selectedCustomMappingResources.value
    const idx = list.findIndex(r => r.id === resource.id)
    if (idx === -1) return
    const original = { ...list[idx] }
    // Optimistic update
    list[idx] = { ...list[idx], deleted: true, deletedAt: new Date().toISOString() } as any
    try {
      await api.softDeleteMappingResource(resource.id)
      notificationStore.showWarning(`${resource.name} soft-deleted`, 'Resource Deleted')
    } catch (err) {
      // Rollback
      list[idx] = original
      errorsStore.addError(err as Error, 'settingsStore.softDeleteResource')
      notificationStore.showError(`Failed to soft-delete ${resource.name}`)
      throw err
    }
  }

  const restoreResource = async (resource: MappingResource) => {
    if (!resource.id) return
    const list = resource.type === 'predefined' ? selectedMappingResources.value : selectedCustomMappingResources.value
    const idx = list.findIndex(r => r.id === resource.id)
    if (idx === -1) return
    const original = { ...list[idx] }
    // Optimistic update
    list[idx] = { ...list[idx], deleted: false, deletedAt: null } as any
    try {
      await api.restoreMappingResource(resource.id)
      notificationStore.showSuccess(`${resource.name} restored`, 'Resource Restored')
    } catch (err) {
      // Rollback
      list[idx] = original
      errorsStore.addError(err as Error, 'settingsStore.restoreResource')
      notificationStore.showError(`Failed to restore ${resource.name}`)
      throw err
    }
  }

  const deleteResource = async (resource: MappingResource) => {
    if (!resource.id) return false
    const list = resource.type === 'predefined' ? selectedMappingResources.value : selectedCustomMappingResources.value
    const idx = list.findIndex(r => r.id === resource.id)
    if (idx === -1) return false
    const original = { ...list[idx] }
    // Optimistic remove
    list.splice(idx, 1)
    try {
      await api.deleteMappingResource(resource.id)
      notificationStore.showSuccess(`${resource.name} removed`, 'Resource Deleted')
      return true
    } catch (err) {
      // Rollback
      list.splice(idx, 0, original)
      errorsStore.addError(err as Error, 'settingsStore.deleteResource')
      notificationStore.showError(`Failed to delete ${resource.name}`)
      return false
    }
  }

  const updateSelectedFhirSystem = async (fhirSystemId: number | null) => {
    // This method is now expected to be called once the user confirmed (if needed)
    await api.updateFhirSystem(fhirSystemId)
    selectedFhirSystem.value = fhirSystemId
    settings.fhir_system = fhirSystemId
    notificationStore.showSuccess(
      fhirSystemId === null ? 'FHIR system disabled' : 'FHIR system changed',
      'FHIR System Updated'
    )
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

  const importResources = async (data: unknown, options: { mode?: ImportMode } = {}): Promise<ImportResult> => {
    const mode: ImportMode = options.mode ?? 'merge'

    if (!data || typeof data !== 'object') throw new Error('Invalid JSON payload')
    const payload = data as Partial<ExportPayload>
    if (!payload.version || payload.version !== RESOURCES_EXPORT_VERSION) throw new Error('Unsupported or missing version')
    if (!Array.isArray(payload.items)) throw new Error('Invalid payload: items must be an array')

    loading.importing = true
    try {
      // Send server-side for authoritative import
      const res = await api.importMappingResources({ version: RESOURCES_EXPORT_VERSION, mode, items: payload.items })
      const summary = res.data?.summary || { added: 0, updated: 0, skipped: 0, total: 0 }
      // refresh settings to reflect changes
      await fetchProjectSettings()
      return summary
    } finally {
      loading.importing = false
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
    softDeleteResource,
    restoreResource,
    deleteResource,
    updateSelectedFhirSystem,
    exportResources,
    importResources,
  }
})
