<template>
  <div>
    <label for="ehr-dropdown">FHIR Systems</label>
    <select 
      class="form-select form-select-sm" 
      id="ehr-dropdown"
      :value="settings.fhir_system"
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
import { inject } from 'vue'
import { useSettingsStore } from '@/store/SettingsStore'
import type { ProjectSettings } from '@/models/ProjectSettings'

const settings = inject<ProjectSettings>('settings')!
const settingsStore = useSettingsStore()

const handleSystemChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  settingsStore.updateSelectedFhirSystem(target.value)
}
</script>

<style scoped></style>
