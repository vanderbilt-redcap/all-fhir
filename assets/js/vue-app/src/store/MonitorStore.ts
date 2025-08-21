import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useErrorsStore } from './ErrorsStore'
import type { Mrn } from '@/models/Mrn'
import { api } from '@/API'

export const useMonitorStore = defineStore('monitor', () => {
  const errorsStore = useErrorsStore()

  const loading = ref(false)
  const mrns = ref<Mrn[]>([])
  const selectedMrns = ref<number[]>([])
  
  // Pagination state
  const pagination = ref({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrevious: false,
    perPageOptions: [10, 25, 50, 100, 250],
  })

  const fetchMrns = async () => {
    try {
      loading.value = true
      const response = await api.listMrns(pagination.value.page, pagination.value.limit)
      
      // Handle paginated response structure
      if (response.data.data && response.data.pagination) {
        mrns.value = response.data.data
        pagination.value.total = response.data.pagination.total
        pagination.value.totalPages = response.data.pagination.total_pages
        pagination.value.hasNext = response.data.pagination.has_next
        pagination.value.hasPrevious = response.data.pagination.has_previous
      } else {
        // Fallback for non-paginated response
        mrns.value = response.data
      }
      
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
      await api.addMrn(mrn)
      // After adding, refresh the current page to show updated data
      await fetchMrns()
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to add MRN:', err)
    }
  }

  const fetchMrn = async (id: number) => {
    try {
      // This should be updated to use a real API endpoint
      // const updatedMrn = await fetchMrnApi(id)
      // const index = mrns.value.findIndex(m => m.id === id)
      // if (index !== -1) {
      //   mrns.value[index] = updatedMrn
      // }
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

  const indeterminate = computed(() => {
    return selectedMrns.value.length > 0 && selectedMrns.value.length < mrns.value.length
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

  // Pagination methods
  const setPage = (newPage: number) => {
    pagination.value.page = newPage
    fetchMrns()
  }

  const setLimit = (newLimit: number) => {
    pagination.value.limit = newLimit
    pagination.value.page = 1 // Reset to first page when changing limit
    fetchMrns()
  }

  return {
    loading,
    mrns,
    selectedMrns,
    pagination,
    allSelected,
    indeterminate,
    fetchMrns,
    addMrn,
    fetchMrn,
    fetchSelected,
    downloadSelected,
    toggleSelectAll,
    toggleSelection,
    setPage,
    setLimit,
  }
})
