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
  
  // Archive Modal State
  const archiveModal = ref<ArchiveModalState>({
    visible: false,
    archiveType: 'selected',
    selectedMrns: []
  })

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
  const archiveModalVisible = computed(() => archiveModal.value.visible)
  const archiveModalType = computed(() => archiveModal.value.archiveType)
  const archiveModalSelectedMrns = computed(() => archiveModal.value.selectedMrns)

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
    
    // Archive Modal
    archiveModalVisible,
    archiveModalType,
    archiveModalSelectedMrns,
    showArchiveModalSelected,
    showArchiveModalAll,
    hideArchiveModal,

    // Streaming Modal
    streamingModalVisible,
    streamingModalType,
    streamingModalSelectedMrns,
    showStreamingModalSelected,
    showStreamingModalAll,
    hideStreamingModal
  }
})