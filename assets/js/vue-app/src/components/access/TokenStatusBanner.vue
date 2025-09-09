<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFhirAccessStore } from '@/store/FhirAccessStore'
import { FhirAccessState } from '@/models/FhirAccess'

const fhirAccessStore = useFhirAccessStore()
const { banner, status, shouldWarn, message, loading, lastChecked, state } = storeToRefs(fhirAccessStore)
</script>

<template>
  <div v-if="banner" class="alert" :class="shouldWarn ? 'alert-warning' : 'alert-info'" role="alert" style="margin-bottom:10px;">
    <i class="fas" :class="shouldWarn ? 'fa-exclamation-triangle' : 'fa-info-circle'" style="margin-right:8px;"></i>
    <span>{{ message }}</span>
    <template v-if="status && state !== FhirAccessState.NoFhirSystem">
      <span class="text-muted" style="margin-left:8px;">
        (Valid: {{ status.valid_count }} / {{ status.total_users_with_token }}
        <template v-if="status.fhir_system_name"> • System: {{ status.fhir_system_name }}</template>
        <template v-if="lastChecked"> • Updated: {{ lastChecked.toLocaleTimeString() }}</template>)
      </span>
    </template>

    <button
      class="btn btn-xs btn-default"
      style="margin-left:10px;"
      :disabled="loading"
      @click="$emit('refresh')"
      title="Refresh token status">
      <i :class="loading ? 'fas fa-spinner fa-spin' : 'fas fa-rotate'" />
    </button>

  </div>
</template>

<style scoped>
.btn.btn-xs {
  padding: 2px 6px;
  font-size: 12px;
  line-height: 1.4;
}
</style>
