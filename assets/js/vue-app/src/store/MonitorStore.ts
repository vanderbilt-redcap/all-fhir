import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useErrorsStore } from './ErrorsStore'
import type { Mrn } from '@/models/Mrn'
import { fetchMrns as fetchMrnsApi, addMrn as addMrnApi, fetchMrn as fetchMrnApi } from '@/API/mock'

export const useMonitorStore = defineStore('monitor', () => {
  const errorsStore = useErrorsStore()

  const loading = ref(false)
  const mrns = ref<Mrn[]>([])
  const selectedMrns = ref<number[]>([])

  const fetchMrns = async () => {
    try {
      loading.value = true
      mrns.value = await fetchMrnsApi()
      selectedMrns.value = [] // Reset selection on new fetch
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to load MRNs:', err)
      mrns.value = []
    } finally {
      loading.value = false
    }
  }

  const addMrn = async (mrn: string) => {
    try {
      const newMrn = await addMrnApi(mrn)
      mrns.value.push(newMrn)
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to add MRN:', err)
    }
  }

  const fetchMrn = async (id: number) => {
    try {
      const updatedMrn = await fetchMrnApi(id)
      const index = mrns.value.findIndex(m => m.id === id)
      if (index !== -1) {
        mrns.value[index] = updatedMrn
      }
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error(`Failed to fetch MRN ${id}:`, err)
    }
  }

  const fetchSelected = async () => {
    try {
      loading.value = true
      // In a real implementation, this would be a single API call
      for (const id of selectedMrns.value) {
        await fetchMrn(id)
      }
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to fetch selected MRNs:', err)
    } finally {
      loading.value = false
    }
  }

  const downloadSelected = async () => {
    // This would be an API call that takes the selected MRNs
    console.log('Downloading selected MRNs:', selectedMrns.value)
  }

  const allSelected = computed(() => {
    return mrns.value.length > 0 && selectedMrns.value.length === mrns.value.length
  })

  const toggleSelectAll = () => {
    if (allSelected.value) {
      selectedMrns.value = []
    } else {
      selectedMrns.value = mrns.value.map(item => item.id)
    }
  }

  const toggleSelection = (id: number) => {
    const index = selectedMrns.value.indexOf(id)
    if (index === -1) {
      selectedMrns.value.push(id)
    } else {
      selectedMrns.value.splice(index, 1)
    }
  }

  return {
    loading,
    mrns,
    selectedMrns,
    allSelected,
    fetchMrns,
    addMrn,
    fetchMrn,
    fetchSelected,
    downloadSelected,
    toggleSelectAll,
    toggleSelection,
  }
})
