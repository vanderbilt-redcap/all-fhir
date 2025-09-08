import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useErrorsStore } from './ErrorsStore'
import { api } from '@/API'
import type { FhirAccessBanner, FhirAccessResponse, FhirAccessStatus } from '@/models/FhirAccess'

export const useFhirAccessStore = defineStore('fhirAccess', () => {
  const errorsStore = useErrorsStore()

  const status = ref<FhirAccessStatus | null>(null)
  const banner = ref<FhirAccessBanner | null>(null)
  const loading = ref(false)
  const launchUrl = ref<string | null>(null)
  const lastChecked = ref<Date | null>(null)
  let pollHandle: number | null = null

  const hasValidToken = computed(() => !!status.value?.has_any_valid_token)
  const shouldWarn = computed(() => !!banner.value?.should_warn)
  const level = computed(() => banner.value?.level ?? (hasValidToken.value ? 'info' : 'warning'))
  const message = computed(() => banner.value?.message ?? '')

  const fetchStatus = async () => {
    try {
      loading.value = true
      const res = await api.getFhirAccessStatus()
      const data = res.data as FhirAccessResponse
      status.value = data.status
      banner.value = data.banner
      launchUrl.value = data.standalone_launch_url ?? null
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
    // computed
    hasValidToken,
    shouldWarn,
    level,
    message,
    // actions
    fetchStatus,
    refreshNow,
    startPolling,
    stopPolling,
  }
})
