<template>
  <div>
    <label for="ehr-dropdown">FHIR Systems</label>
    <select 
      class="form-select form-select-sm" 
      id="ehr-dropdown"
      :value="selectedFhirSystem || ''"
      @change="handleSystemChange"
    >
      <option value="">Select a FHIR System</option>
      <option 
        v-for="system in settings.fhir_systems" 
        :key="system.ehr_id"
        :value="system.ehr_id"
      >
        {{ system.ehr_name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/store/SettingsStore'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore()
const { settings, selectedFhirSystem } = storeToRefs(settingsStore)

const handleSystemChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const fhirSystemId = parseInt(target.value)
  settingsStore.updateSelectedFhirSystem(fhirSystemId)
}
</script>

<style scoped></style>
