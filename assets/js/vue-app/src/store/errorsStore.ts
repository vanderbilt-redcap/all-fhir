import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ErrorEntry {
  message: string
  source?: string // e.g. 'settingsStore', 'api', 'auth'
  timestamp: Date
  raw?: unknown    // the original error object
}

export const useErrorsStore = defineStore('errors', () => {
  const errors = ref<ErrorEntry[]>([])

  const addError = (error: unknown, source?: string) => {
    const normalized = normalizeError(error)
    errors.value.push({
      message: normalized.message,
      source,
      timestamp: new Date(),
      raw: error
    })
  }

  const resetErrors = () => {
    errors.value = []
  }

  return {
    errors,
    addError,
    resetErrors,
  }
})

function normalizeError(error: unknown): Error {
  if (error instanceof Error) return error
  if (typeof error === 'string') return new Error(error)
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return new Error(String((error as any).message))
  }
  return new Error('Unknown error')
}
