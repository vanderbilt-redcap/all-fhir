<template>
  <div>
    <label for="ehr-dropdown">FHIR Systems</label>
    <select 
      class="form-select form-select-sm" 
      id="ehr-dropdown"
      :value="draftResources?.selectedFhirSystem.value || ''"
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
import { inject, type Ref } from 'vue'
import { useSettingsStore } from '@/store/SettingsStore'
import type { ProjectSettings, MappingResource } from '@/models/ProjectSettings'

const settings = inject<ProjectSettings>('settings')!
const draftResources = inject<{
  selectedFhirSystem: Ref<number | null>
  selectedMappingResources: Ref<MappingResource[]>
  selectedCustomMappingResources: Ref<MappingResource[]>
}>('draftResources')
const settingsStore = useSettingsStore()

const handleSystemChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const fhirSystemId = parseInt(target.value)
  settingsStore.updateSelectedFhirSystem(fhirSystemId)
}
</script>

<style scoped></style>
