import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface OperationResult {
  operation: string
  success: boolean
  message: string
  data?: any
  timestamp: string
}

export interface StreamingModalState {
  visible: boolean
  archiveType: 'selected' | 'all'
  selectedMrns: string[]
}

export const useOperationsStore = defineStore('operations', () => {
  // State
  const loading = ref(false)
  const lastOperation = ref<OperationResult | null>(null)
  const showSummary = ref(true)
  
  // Streaming Modal State
  const streamingModal = ref<StreamingModalState>({
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
  }


  const toggleSummary = () => {
    showSummary.value = !showSummary.value
  }

  // Streaming Modal Actions
  const showStreamingModalSelected = (selectedMrns: string[]) => {
    streamingModal.value = {
      visible: true,
      archiveType: 'selected',
      selectedMrns
    }
  }

  const showStreamingModalAll = () => {
    streamingModal.value = {
      visible: true,
      archiveType: 'all',
      selectedMrns: []
    }
  }

  const hideStreamingModal = () => {
    streamingModal.value.visible = false
  }


  // Computed properties for modals
  const streamingModalVisible = computed(() => streamingModal.value.visible)
  const streamingModalType = computed(() => streamingModal.value.archiveType)
  const streamingModalSelectedMrns = computed(() => streamingModal.value.selectedMrns)

  return {
    // State
    loading,
    lastOperation,
    showSummary,
    
    // Actions
    setLoading,
    recordOperation,
    toggleSummary,

    // Streaming Modal
    streamingModalVisible,
    streamingModalType,
    streamingModalSelectedMrns,
    showStreamingModalSelected,
    showStreamingModalAll,
    hideStreamingModal
  }
})
