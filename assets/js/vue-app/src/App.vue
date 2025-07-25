<script setup lang="ts">
import { onMounted } from 'vue';
import { useSettingsStore } from './store/useSettingsStore';
import ErrorsVisualizer from './components/ErrorsVisualizer.vue';

const settingsStore = useSettingsStore()



onMounted(() => {
  settingsStore.fetchAvailableSystems()
})
</script>

<template>
<div class="card">
  <div class="card-body">
    <p>FHIR Snapshot</p>
  </div>
</div>
<router-view></router-view>
<ErrorsVisualizer />
</template>

<style scoped>

</style>
