<template>
    <table class="table table-striped table-hover table-sm border-top">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Resource Specification</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="resource in allResources" :key="resource.id || `${resource.type}-${resource.name}-${resource.resourceSpec}`" :class="{ 'table-secondary': resource.deleted }">
                <td>
                  <span :class="{ 'text-decoration-line-through text-muted': resource.deleted }">{{ resource.name }}</span>
                </td>
                <td>{{ resource.type }}</td>
                <td>
                  <span :class="{ 'text-decoration-line-through text-muted': resource.deleted }">{{ resource.resourceSpec || '-' }}</span>
                </td>
                <td>
                    <div class="d-flex gap-2">
                        <button 
                            v-if="!resource.deleted"
                            type="button" 
                            class="btn btn-outline-danger btn-sm"
                            @click="handleSoftDelete(resource)"
                            :disabled="isRowLoading(resource)"
                            title="Soft delete"
                        >
                            <i :class="`fas fa-fw ${isRowLoading(resource) ? 'fa-spinner fa-spin' : 'fa-trash'}`"></i>
                        </button>
                        <template v-else>
                          <button 
                              type="button" 
                              class="btn btn-outline-success btn-sm"
                              @click="handleRestore(resource)"
                              :disabled="isRowLoading(resource)"
                              title="Restore"
                          >
                              <i :class="`fas fa-fw ${isRowLoading(resource) ? 'fa-spinner fa-spin' : 'fa-rotate-left'}`"></i>
                          </button>
                          <button 
                              type="button" 
                              class="btn btn-danger btn-sm"
                              @click="handlePurge(resource)"
                              :disabled="isRowLoading(resource)"
                              title="Delete forever"
                          >
                              <i :class="`fas fa-fw ${isRowLoading(resource) ? 'fa-spinner fa-spin' : 'fa-trash-can'}`"></i>
                          </button>
                        </template>
                    </div>
                </td>
            </tr>
            <tr v-if="allResources.length === 0">
                <td colspan="4" class="text-muted text-center">No resources configured</td>
            </tr>
        </tbody>
    </table>
 </template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useSettingsStore } from '@/store/SettingsStore'
import { useNotificationStore } from '@/store/NotificationStore'
import { storeToRefs } from 'pinia'
import type { MappingResource } from '@/models/ProjectSettings'

const settingsStore = useSettingsStore()
const notificationStore = useNotificationStore()
const { selectedMappingResources, selectedCustomMappingResources } = storeToRefs(settingsStore)

const allResources = computed(() => {
    return [
        ...selectedMappingResources.value,
        ...selectedCustomMappingResources.value,
    ]
})

const rowLoading: Record<string, boolean> = reactive({})

const getKey = (r: MappingResource) => r.id || `${r.type}::${r.name}::${r.resourceSpec}`
const isRowLoading = (r: MappingResource) => !!rowLoading[getKey(r)]

async function handleSoftDelete(resource: MappingResource) {
    const k = getKey(resource)
    rowLoading[k] = true
    try {
        await settingsStore.softDeleteResource(resource)
    } finally {
        rowLoading[k] = false
    }
}

async function handleRestore(resource: MappingResource) {
    const k = getKey(resource)
    rowLoading[k] = true
    try {
        await settingsStore.restoreResource(resource)
    } finally {
        rowLoading[k] = false
    }
}

async function handlePurge(resource: MappingResource) {
    const k = getKey(resource)
    rowLoading[k] = true
    try {
        const ok = await notificationStore.confirmAction(
          'Delete Forever',
          'This will permanently delete all instances marked as Deleted for this resource. This action cannot be undone. Continue?'
        )
        if (!ok) return
        if (!resource.id) return
        // Optimistic delete via store
        const success = await settingsStore.deleteResource(resource)
        if (success) {
          notificationStore.showSuccess('Resource removed and deleted items purged')
        }
    } finally {
        rowLoading[k] = false
    }
}

// refresh handled by toolbar
</script>

<style scoped>

</style>
