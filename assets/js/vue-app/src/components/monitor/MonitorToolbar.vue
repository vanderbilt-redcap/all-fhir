<template>
    <div class="mb-3">
        <button class="btn btn-sm btn-primary me-2" @click="$emit('add-mrn')">
            <i class="fas fa-plus fa-fw"></i> Add MRN
        </button>
        <button class="btn btn-sm btn-secondary me-2" @click="monitorStore.fetchSelected" :disabled="downloadDisabled">
            <i class="fas fa-sync fa-fw"></i> Fetch Selected
        </button>
        <button class="btn btn-sm btn-success me-2" @click="monitorStore.downloadSelected" :disabled="downloadDisabled">
            <i class="fas fa-download fa-fw"></i> Download Selected
        </button>
        <button class="btn btn-sm btn-light" @click="monitorStore.fetchMrns" title="Refresh list">
            <i class="fas fa-sync-alt fa-fw"></i>
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMonitorStore } from '@/store/MonitorStore'

const monitorStore = useMonitorStore()

defineEmits(['add-mrn'])

const downloadDisabled = computed(() => monitorStore.selectedMrns.length === 0)
</script>

<style scoped>
</style>