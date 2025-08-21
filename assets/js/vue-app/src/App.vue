<script setup lang="ts">
import { onMounted } from 'vue';
import { useSettingsStore } from './store/SettingsStore';
import ErrorsVisualizer from './components/ErrorsVisualizer.vue';

const settingsStore = useSettingsStore()

onMounted(() => {
  settingsStore.fetchProjectSettings()
})
</script>

<template>
<div>
  <router-view></router-view>
  <ErrorsVisualizer />
</div>
</template>

<style scoped>

</style>
