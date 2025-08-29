/**
 * StreamingStore - Pinia store for managing streaming archive operations
 * 
 * Handles streaming download state, progress tracking, and operations
 * following the same architectural patterns as other stores in the application.
 */

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { StreamingProgress } from '@/models/Archive'

export const useStreamingStore = defineStore('streaming', () => {
  // State
  const streamingProgress = ref<StreamingProgress>({
    active: false,
    filename: '',
    startTime: null
  })

  // Computed
  const isStreamingActive = computed(() => streamingProgress.value.active)
  
  const streamingDuration = computed(() => {
    if (!streamingProgress.value.startTime) return 0
    return Math.round((Date.now() - streamingProgress.value.startTime.getTime()) / 1000)
  })

  // Actions
  const startStreaming = (filename: string) => {
    streamingProgress.value = {
      active: true,
      filename,
      startTime: new Date()
    }
  }

  const finishStreaming = (): number => {
    const duration = streamingProgress.value.startTime 
      ? Date.now() - streamingProgress.value.startTime.getTime()
      : 0
    
    streamingProgress.value = { 
      active: false, 
      filename: '', 
      startTime: null 
    }
    
    return Math.round(duration / 1000)
  }

  const resetStreaming = () => {
    streamingProgress.value = {
      active: false,
      filename: '',
      startTime: null
    }
  }

  return {
    // State
    streamingProgress,
    
    // Computed
    isStreamingActive,
    streamingDuration,
    
    // Actions
    startStreaming,
    finishStreaming,
    resetStreaming
  }
})