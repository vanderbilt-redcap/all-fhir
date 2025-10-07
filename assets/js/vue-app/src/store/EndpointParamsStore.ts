import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/API'
import type { EndpointParamDef, EndpointParamsSchemas } from '@/models/EndpointParams'
import { useErrorsStore } from './ErrorsStore'

export const useEndpointParamsStore = defineStore('endpointParams', () => {
  const errorsStore = useErrorsStore()

  const schemas = ref<EndpointParamsSchemas>({})
  const loaded = ref(false)

  // Simple single-draft model for current editor (modal usage)
  const currentResourceSpec = ref<string | null>(null)
  const draft = ref<Record<string, any>>({})

  const fetchSchemas = async () => {
    try {
      const res = await api.getEndpointParamsSchemas()
      const data = (res.data?.schemas || {}) as EndpointParamsSchemas
      schemas.value = data
      loaded.value = true
    } catch (err) {
      errorsStore.addError(err as Error, 'endpointParamsStore.fetchSchemas')
      // degrade gracefully
      schemas.value = {}
      loaded.value = false
    }
  }

  const getSchema = (resourceSpec: string): EndpointParamDef[] => {
    return schemas.value?.[resourceSpec] || []
  }

  const prepareDraftFor = (resourceSpec: string, initial?: Record<string, any>) => {
    currentResourceSpec.value = resourceSpec
    const schema = getSchema(resourceSpec)
    const next: Record<string, any> = {}
    // apply defaults
    schema.forEach(def => {
      if (def.default !== undefined) next[def.key] = def.default
    })
    // apply incoming params
    if (initial) {
      Object.assign(next, initial)
    }
    draft.value = next
  }

  const updateDraftField = (key: string, value: any) => {
    draft.value = { ...draft.value, [key]: value }
  }

  const resetDraft = () => {
    draft.value = {}
    currentResourceSpec.value = null
  }

  return {
    // state
    schemas,
    loaded,
    draft,
    currentResourceSpec,
    // actions
    fetchSchemas,
    getSchema,
    prepareDraftFor,
    updateDraftField,
    resetDraft,
  }
})

