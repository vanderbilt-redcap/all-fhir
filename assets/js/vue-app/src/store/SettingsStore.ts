import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/API'
import { useErrorsStore } from './ErrorsStore'
import { useToaster } from 'bootstrap-vue'
import type { MappingResource, ProjectSettings } from '@/models/ProjectSettings'

export const useSettingsStore = defineStore('settings', () => {
  const errorsStore = useErrorsStore()
  const toaster = useToaster()

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

  const addPredefinedResource = (name: string, resourceSpec: string) => {
    const resource: MappingResource = { name, resourceSpec, type: 'predefined' }
    selectedMappingResources.value.push(resource)
  }

  const addCustomResource = (name: string, resourceSpec: string) => {
    const resource: MappingResource = {
      name,
      resourceSpec,
      type: 'custom',
    }
    selectedCustomMappingResources.value.push(resource)
  }

  const removeResource = (resource: MappingResource, type: 'predefined' | 'custom') => {
    if (type === 'predefined') {
      const index = selectedMappingResources.value.findIndex(r => 
        r.name === resource.name && r.resourceSpec === resource.resourceSpec)
      if (index > -1) selectedMappingResources.value.splice(index, 1)
    } else {
      const index = selectedCustomMappingResources.value.findIndex(r => 
        r.name === resource.name && r.resourceSpec === resource.resourceSpec)
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
      const response = await api.updateProjectSettings(payload)
      
      // Show sync results in toaster
      if (response.data.sync_results) {
        showSyncResultsToast(response.data.sync_results)
      }
      
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

  const showSyncResultsToast = (syncResults: any) => {
    const { 
      resources_added,
      resources_modified,
      resources_removed,
      tasks_created,
      total_mrns,
      error 
    } = syncResults

    // Show error toast if sync failed
    if (error) {
      toaster.toast({
        title: 'Sync Warning',
        body: `Settings saved but sync failed: ${error}`,
        variant: 'warning',
        delay: 8000
      })
      return
    }

    // Skip toast if no changes
    const totalChanges = resources_added + resources_modified + resources_removed
    if (totalChanges === 0) {
      return
    }

    // Build success message
    const changes = []
    if (resources_added > 0) changes.push(`${resources_added} added`)
    if (resources_modified > 0) changes.push(`${resources_modified} modified`) 
    if (resources_removed > 0) changes.push(`${resources_removed} removed`)

    const title = 'Resources Synchronized'
    const body = `${changes.join(', ')}. Created ${tasks_created} tasks for ${total_mrns} patients.`

    toaster.toast({
      title,
      body,
      variant: 'success',
      delay: 6000
    })
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
    exportResources,
    importResources,
  }
})
