import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface OperationResult {
  operation: string
  success: boolean
  message: string
  data?: any
  timestamp: string
}

export const useOperationsStore = defineStore('operations', () => {
  // State
  const loading = ref(false)
  const lastOperation = ref<OperationResult | null>(null)
  const showSummary = ref(false)
  const showToast = ref(false)

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
    toggleSummary
  }
})