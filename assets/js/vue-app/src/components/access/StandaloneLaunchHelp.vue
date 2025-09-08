<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFhirAccessStore } from '@/store/FhirAccessStore'

const fhirAccessStore = useFhirAccessStore()
const { shouldWarn, launchUrl, status } = storeToRefs(fhirAccessStore)
</script>

<template>
  <div v-if="shouldWarn && launchUrl" class="alert alert-info" role="alert" style="margin-bottom:12px;">
    <i class="fas fa-info-circle" style="margin-right:8px;"></i>
    <span>
      To enable data fetching, sign in to the EHR and authorize access for this project using Standalone Launch.
      <template v-if="status?.fhir_system_name"> (System: {{ status.fhir_system_name }})</template>
    </span>
    <div class="d-flex align-items-end justify-content-center mt-2">
      <a :href="launchUrl" class="btn btn-sm btn-primary text-light" style="margin-left:10px;">
        <i class="fas fa-rocket fa-fw" /> Standalone Launch
      </a>
    </div>
  </div>
  
</template>

