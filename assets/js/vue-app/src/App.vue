<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import { storeToRefs } from 'pinia'
import { useSettingsStore } from './store/SettingsStore';
import { useFhirAccessStore } from './store/FhirAccessStore';
import ErrorsVisualizer from './components/ErrorsVisualizer.vue';
import TokenStatusBanner from './components/access/TokenStatusBanner.vue';
import StandaloneLaunchHelp from './components/access/StandaloneLaunchHelp.vue';

const settingsStore = useSettingsStore()
const fhirAccessStore = useFhirAccessStore()

const { selectedFhirSystem } = storeToRefs(settingsStore)

onMounted(async () => {
  await settingsStore.fetchProjectSettings()
  await fhirAccessStore.fetchStatus()
  fhirAccessStore.startPolling(60_000)
})

onUnmounted(() => {
  fhirAccessStore.stopPolling()
})

watch(selectedFhirSystem, async () => {
  await fhirAccessStore.refreshNow()
})
</script>

<template>
<div>
  <TokenStatusBanner @refresh="fhirAccessStore.refreshNow()" />
  <StandaloneLaunchHelp />
  <router-view></router-view>
  <ErrorsVisualizer />
</div>
</template>

<style>
button.btn-icon {
  width: 1.8rem;
  height: 1.8rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
}
</style>
