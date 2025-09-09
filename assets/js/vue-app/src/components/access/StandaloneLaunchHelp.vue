<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFhirAccessStore } from '@/store/FhirAccessStore'
import { FhirAccessState } from '@/models/FhirAccess'

const fhirAccessStore = useFhirAccessStore()
const { shouldWarn, launchUrl, status, state, setupRoute } = storeToRefs(fhirAccessStore)
</script>

<template>
  <!-- Case 1: No FHIR system configured -->
  <div v-if="state === FhirAccessState.NoFhirSystem" class="alert alert-warning" role="alert" style="margin-bottom:12px;">
    <i class="fas fa-exclamation-triangle" style="margin-right:8px;"></i>
    <span>
      A FHIR system must be configured before users can authorize access or data can be fetched. Open Setup to select a system.
    </span>
    <div class="d-flex align-items-end justify-content-center mt-2">
      <a v-if="setupRoute" :href="setupRoute" class="btn btn-sm btn-default" style="margin-left:10px;">
        <i class="fas fa-gear fa-fw" /> Open Setup
      </a>
    </div>
  </div>

  <!-- Case 2: System configured but no valid tokens -->
  <div v-else-if="shouldWarn && launchUrl" class="alert alert-info" role="alert" style="margin-bottom:12px;">
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
