import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useErrorsStore } from './ErrorsStore'
import { api } from '@/API'
import type { ModalRef } from '@/types/Modal'

export interface ResourceContentMetadata {
  file_name: string
  mime_type: string
  full_size_bytes: number
  preview_size_bytes: number
  is_truncated: boolean
  is_valid_json: boolean
  edoc_id: number
  full_size_human: string
  preview_size_human: string
}

export interface ResourceContentData {
  success: boolean
  record_id: string
  mrn: string
  resource_name: string
  repeat_instance: number
  content: string
  metadata: ResourceContentMetadata
}

export const useResourceContentStore = defineStore('resourceContent', () => {
  const errorsStore = useErrorsStore()

  const loading = ref(false)
  const currentContent = ref<ResourceContentData | null>(null)
  const modalRef = ref<ModalRef>(null)

  const fetchResourceContent = async (
    recordId: string, 
    resourceName: string, 
    repeatInstance: number,
    previewLimit?: number
  ) => {
    try {
      loading.value = true
      
      const response = await api.getResourceContent(recordId, resourceName, repeatInstance, previewLimit)
      
      if (response.data.success) {
        currentContent.value = response.data
        return response.data
      } else {
        throw new Error(response.data.error || 'Failed to fetch resource content')
      }
    } catch (err: any) {
      errorsStore.addError(err, 'resourceContentStore')
      console.error('Failed to fetch resource content:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const loadResourceContent = async (
    recordId: string, 
    resourceName: string, 
    repeatInstance: number,
    previewLimit?: number
  ) => {
    return await fetchResourceContent(recordId, resourceName, repeatInstance, previewLimit)
  }

  const showResourceContent = async (
    recordId: string, 
    resourceName: string, 
    repeatInstance: number,
    previewLimit?: number
  ) => {
    await loadResourceContent(recordId, resourceName, repeatInstance, previewLimit)
    return modalRef.value?.show()
  }

  const setModalRef = (ref: ModalRef) => {
    modalRef.value = ref
  }

  const hideModal = () => {
    modalRef.value?.hide()
  }

  const clearContent = () => {
    currentContent.value = null
  }

  const copyToClipboard = async (content: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(content)
        return true
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea')
        textArea.value = content
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        const result = document.execCommand('copy')
        document.body.removeChild(textArea)
        return result
      }
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
      return false
    }
  }

  // Computed-like getters for content analysis
  const getContentStats = () => {
    if (!currentContent.value) return null
    
    const { content, metadata } = currentContent.value
    const lines = content.split('\n').length
    const characters = content.length
    
    return {
      lines,
      characters,
      size_human: metadata.preview_size_human,
      is_truncated: metadata.is_truncated,
      full_size_human: metadata.full_size_human
    }
  }

  const isJsonContent = () => {
    return currentContent.value?.metadata.is_valid_json || false
  }

  const getDisplayTitle = () => {
    if (!currentContent.value) return 'Resource Content'
    
    const { mrn, resource_name, repeat_instance } = currentContent.value
    return `${resource_name} - ${mrn} (Instance ${repeat_instance})`
  }

  return {
    // State
    loading,
    currentContent,
    
    // Actions
    fetchResourceContent,
    loadResourceContent,
    showResourceContent,
    setModalRef,
    hideModal,
    clearContent,
    copyToClipboard,
    
    // Getters
    getContentStats,
    isJsonContent,
    getDisplayTitle
  }
})