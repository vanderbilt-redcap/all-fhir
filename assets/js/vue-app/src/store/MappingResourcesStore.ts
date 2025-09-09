import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/API'
import type { MappingResource } from '@/models/ProjectSettings'
import { useNotificationStore } from './NotificationStore'
import { useErrorsStore } from './ErrorsStore'

export const useMappingResourcesStore = defineStore('mappingResources', () => {
  const notificationStore = useNotificationStore()
  const errorsStore = useErrorsStore()

  const items = ref<MappingResource[]>([])
  const selectedId = ref<string | null>(null)
  const selected = ref<MappingResource | null>(null)
  const loading = reactive({ list: false, get: false, save: false })

  const fetchAll = async () => {
    loading.list = true
    try {
      const res = await api.listMappingResources()
      const data = res.data || {}
      const merged: MappingResource[] = [
        ...(data.selected_mapping_resources || []),
        ...(data.selected_custom_mapping_resources || []),
      ]
      items.value = merged
    } catch (err) {
      errorsStore.addError(err as Error, 'mappingResources.fetchAll')
    } finally {
      loading.list = false
    }
  }

  const fetchOne = async (id: string) => {
    loading.get = true
    try {
      const cached = items.value.find(r => r.id === id)
      if (cached) {
        selected.value = cached
        selectedId.value = id
        return cached
      }
      const res = await api.getMappingResource(id)
      selected.value = res.data?.resource || null
      selectedId.value = selected.value?.id || null
      return selected.value
    } catch (err) {
      errorsStore.addError(err as Error, 'mappingResources.fetchOne')
      throw err
    } finally {
      loading.get = false
    }
  }

  const select = async (id: string) => {
    if (!id) return null
    return fetchOne(id)
  }

  const updateSelected = async (payload: Partial<Pick<MappingResource, 'name' | 'resourceSpec' | 'params'>>) => {
    if (!selectedId.value) return null
    loading.save = true
    try {
      const res = await api.updateMappingResource(selectedId.value, payload)
      const updated: MappingResource = res.data?.resource
      // update cache
      selected.value = updated
      const idx = items.value.findIndex(r => r.id === updated.id)
      if (idx !== -1) items.value[idx] = updated
      notificationStore.showSuccess(`${updated.name} updated`, `Instances marked pending: ${res.data?.sync_results?.instances_updated ?? 0}`)
      return updated
    } catch (err) {
      errorsStore.addError(err as Error, 'mappingResources.updateSelected')
      throw err
    } finally {
      loading.save = false
    }
  }

  return { items, selectedId, selected, loading, fetchAll, fetchOne, select, updateSelected }
})

