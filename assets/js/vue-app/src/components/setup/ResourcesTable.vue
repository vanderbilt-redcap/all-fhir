<template>
    <table class="table table-striped table-hover table-sm border-top">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Parameters</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="resource in allResources" :key="`${resource.type}-${resource.name}`">
                <td>{{ resource.name }}</td>
                <td>{{ resource.type }}</td>
                <td>{{ resource.parameters || '-' }}</td>
                <td>
                    <button 
                        type="button" 
                        class="btn btn-outline-danger btn-sm"
                        @click="handleRemove(resource)"
                    >
                        <i class="fas fa-trash fa-fw"></i>
                    </button>
                </td>
            </tr>
            <tr v-if="allResources.length === 0">
                <td colspan="4" class="text-muted text-center">No resources configured</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'
import { useSettingsStore } from '@/store/SettingsStore'
import type { MappingResource } from '@/models/ProjectSettings'

const settingsStore = useSettingsStore()
const draftResources = inject<{
    selectedMappingResources: Ref<MappingResource[]>
    selectedCustomMappingResources: Ref<MappingResource[]>
}>('draftResources')

const allResources = computed(() => {
    if (!draftResources) return []
    return [
        ...draftResources.selectedMappingResources.value,
        ...draftResources.selectedCustomMappingResources.value,
    ]
})

function handleRemove(resource: MappingResource) {
    settingsStore.removeResource(resource, resource.type as 'predefined' | 'custom')
}
</script>

<style scoped>

</style>