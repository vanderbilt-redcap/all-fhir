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
import { useNotificationStore } from '@/store/NotificationStore'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore()
const notificationStore = useNotificationStore()
const { settings, selectedFhirSystem } = storeToRefs(settingsStore)

const handleSystemChange = async (event: Event) => {
  const target = event.target as HTMLSelectElement
  const value = target.value
  const fhirSystemId = value === '' ? null : parseInt(value)

  const current = settings.value.fhir_system

  // If first time selection (current is null), proceed without confirmation
  if (current === null) {
    if (fhirSystemId !== null) await settingsStore.updateSelectedFhirSystem(fhirSystemId)
    return
  }

  // If changing to a different value, confirm
  if (fhirSystemId !== current) {
    const confirmed = await notificationStore.confirmAction(
      'Change FHIR System',
      'Changing the FHIR system may affect future fetches. Continue?'
    )
    if (!confirmed) {
      // revert selection
      target.value = String(current)
      return
    }
    if (fhirSystemId !== null) await settingsStore.updateSelectedFhirSystem(fhirSystemId)
  }
}
</script>

<style scoped></style>
