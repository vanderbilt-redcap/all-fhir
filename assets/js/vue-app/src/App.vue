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

<style>
.btn-icon {
  width: 1.8rem;
  height: 1.8rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
}
</style>
