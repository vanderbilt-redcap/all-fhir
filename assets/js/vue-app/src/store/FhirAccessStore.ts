import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useErrorsStore } from './ErrorsStore'
import { api } from '@/API'
import type { FhirAccessBanner, FhirAccessResponse, FhirAccessStatus, FhirAccessState as FhirAccessStateType } from '@/models/FhirAccess'
import { FhirAccessState } from '@/models/FhirAccess'

export const useFhirAccessStore = defineStore('fhirAccess', () => {
  const errorsStore = useErrorsStore()

  const status = ref<FhirAccessStatus | null>(null)
  const banner = ref<FhirAccessBanner | null>(null)
  const loading = ref(false)
  const launchUrl = ref<string | null>(null)
  const lastChecked = ref<Date | null>(null)
  const state = ref<FhirAccessStateType>(FhirAccessState.HasValidToken)
  const setupRoute = ref<string | null>(null)
  let pollHandle: number | null = null

  const hasValidToken = computed(() => !!status.value?.has_any_valid_token)
  const shouldWarn = computed(() => state.value !== FhirAccessState.HasValidToken)
  const level = computed(() => banner.value?.level ?? (hasValidToken.value ? 'info' : 'warning'))
  const message = computed(() => banner.value?.message ?? '')
  const isNoFhirSystem = computed(() => state.value === FhirAccessState.NoFhirSystem)

  const fetchStatus = async () => {
    try {
      loading.value = true
      const res = await api.getFhirAccessStatus()
      const data = res.data as FhirAccessResponse
      status.value = data.status
      banner.value = data.banner
      state.value = data.state ?? FhirAccessState.HasValidToken
      launchUrl.value = data.standalone_launch_url ?? null
      setupRoute.value = data.setup_route ?? null
      lastChecked.value = new Date()
    } catch (err) {
      errorsStore.addError(err as Error, 'fhirAccessStore.fetchStatus')
    } finally {
      loading.value = false
    }
  }

  const refreshNow = async () => {
    await fetchStatus()
  }

  const startPolling = (intervalMs = 60_000) => {
    stopPolling()
    pollHandle = window.setInterval(() => {
      // Fire and forget to avoid overlapping awaits
      fetchStatus()
    }, intervalMs)
  }

  const stopPolling = () => {
    if (pollHandle !== null) {
      clearInterval(pollHandle)
      pollHandle = null
    }
  }

  return {
    // state
    status,
    banner,
    loading,
    lastChecked,
    launchUrl,
    state,
    setupRoute,
    // computed
    hasValidToken,
    shouldWarn,
    level,
    message,
    isNoFhirSystem,
    // actions
    fetchStatus,
    refreshNow,
    startPolling,
    stopPolling,
  }
})
