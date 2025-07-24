<script setup lang="ts">
import api from '@/API/index'
import { onMounted } from 'vue';

onMounted(() => {
  api.getAvailableFhirSystems()
})
</script>

<template>
<div class="card">
  <div class="card-body">
    <p>FHIR Snapshot</p>
  </div>
</div>
<router-view></router-view>
</template>

<style scoped>

</style>
