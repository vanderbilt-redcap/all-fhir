import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface OperationResult {
  operation: string
  success: boolean
  message: string
  data?: any
  timestamp: string
}

export interface ArchiveModalState {
  visible: boolean
  archiveType: 'selected' | 'all'
  selectedMrns: string[]
}

export const useOperationsStore = defineStore('operations', () => {
  // State
  const loading = ref(false)
  const lastOperation = ref<OperationResult | null>(null)
  const showSummary = ref(false)
  const showToast = ref(false)
  
  // Archive Modal State
  const archiveModal = ref<ArchiveModalState>({
    visible: false,
    archiveType: 'selected',
    selectedMrns: []
  })

  // Actions
  const setLoading = (isLoading: boolean) => {
    loading.value = isLoading
  }

  const recordOperation = (operation: string, success: boolean, message: string, data?: any) => {
    lastOperation.value = {
      operation,
      success,
      message,
      data,
      timestamp: new Date().toISOString()
    }
    showToast.value = true
    
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      showToast.value = false
    }, 5000)
  }

  const clearToast = () => {
    showToast.value = false
  }

  const toggleSummary = () => {
    showSummary.value = !showSummary.value
  }

  // Archive Modal Actions
  const showArchiveModalSelected = (selectedMrns: string[]) => {
    archiveModal.value = {
      visible: true,
      archiveType: 'selected',
      selectedMrns
    }
  }

  const showArchiveModalAll = () => {
    archiveModal.value = {
      visible: true,
      archiveType: 'all',
      selectedMrns: []
    }
  }

  const hideArchiveModal = () => {
    archiveModal.value.visible = false
  }

  // Computed properties for modal
  const archiveModalVisible = computed(() => archiveModal.value.visible)
  const archiveModalType = computed(() => archiveModal.value.archiveType)
  const archiveModalSelectedMrns = computed(() => archiveModal.value.selectedMrns)

  return {
    // State
    loading,
    lastOperation,
    showSummary,
    showToast,
    
    // Actions
    setLoading,
    recordOperation,
    clearToast,
    toggleSummary,
    
    // Archive Modal
    archiveModalVisible,
    archiveModalType,
    archiveModalSelectedMrns,
    showArchiveModalSelected,
    showArchiveModalAll,
    hideArchiveModal
  }
})