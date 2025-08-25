<template>
    <tr class="align-middle">
        <td>
            <input
                class="form-check-input"
                type="checkbox"
                :checked="selected"
                @change="monitorStore.toggleSelection(item.id)"
            />
        </td>
        <td>{{ item.mrn }}</td>
        <td>
            <span :class="statusClass(item.status)">{{ item.status }}</span>
        </td>
        <td>
            <span>{{ resourceSummary }}</span>
            <button class="btn btn-sm btn-light ms-2" @click="toggleExpand" :aria-expanded="expanded">
                <i :class="`fas fa-chevron-${expanded ? 'up' : 'down'} fa-fw`"></i>
            </button>
        </td>
        <td>
            <div class="btn-group" role="group">
                <button 
                    class="btn btn-sm btn-primary"
                    @click="triggerFetchMrn"
                    :disabled="operationLoading"
                    title="Trigger fetch for this MRN"
                >
                    <i class="fas fa-rotate-right fa-fw"></i>
                    <span v-if="!operationLoading">Fetch</span>
                    <span v-else>
                        <div class="spinner-border spinner-border-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </span>
                </button>
                <button 
                    class="btn btn-sm btn-success"
                    :disabled="item.status !== 'Completed'"
                    @click="downloadMrnData"
                    title="Download all completed resources for this MRN"
                >
                    <i class="fas fa-download fa-fw"></i>
                </button>
            </div>
        </td>
    </tr>
    <tr v-show="expanded">
        <td colspan="5" class="p-0">
            <div class="ps-3">
                <table class="table table-sm table-bordered mb-0">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Resource</th>
                            <th scope="col">Status</th>
                            <th scope="col">Fetch Date</th>
                            <th scope="col">Error</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MonitorResourceRow 
                            v-for="resource in item.resources" 
                            :key="`${resource.name}-${resource.repeat_instance}`" 
                            :resource="resource" 
                            :mrn="item.mrn"
                        />
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Mrn } from '@/models/Mrn'
import { FetchStatus } from '@/models/Mrn'
import MonitorResourceRow from './MonitorResourceRow.vue'
import { useMonitorStore } from '@/store/MonitorStore'

const monitorStore = useMonitorStore()

const props = defineProps<{
    item: Mrn
    selected: boolean
}>()


const expanded = ref(false)
const operationLoading = ref(false)

const toggleExpand = () => {
    expanded.value = !expanded.value
}

const resourceSummary = computed(() => {
    const total = props.item.resources.length
    const completed = props.item.resources.filter(r => r.status === FetchStatus.Completed).length
    const failed = props.item.resources.filter(r => r.status === FetchStatus.Failed).length
    const pending = props.item.resources.filter(r => r.status === FetchStatus.Pending).length
    const fetching = props.item.resources.filter(r => r.status === FetchStatus.Fetching).length
    
    let summary = `${completed}/${total} completed`
    if (failed > 0) summary += `, ${failed} failed`
    if (fetching > 0) summary += `, ${fetching} fetching`
    if (pending > 0) summary += `, ${pending} pending`
    
    return summary
})

const statusClass = (status: FetchStatus) => {
    const baseClass = 'badge'
    switch (status) {
        case FetchStatus.Pending:
            return `${baseClass} bg-warning text-dark`
        case FetchStatus.Fetching:
            return `${baseClass} bg-info text-dark`
        case FetchStatus.Completed:
            return `${baseClass} bg-success`
        case FetchStatus.Failed:
            return `${baseClass} bg-danger`
        case FetchStatus.Outdated:
            return `${baseClass} bg-secondary`
        case FetchStatus.Deleted:
            return `${baseClass} bg-dark`
        default:
            return `${baseClass} bg-secondary`
    }
}

const triggerFetchMrn = async () => {
    try {
        operationLoading.value = true
        await monitorStore.triggerFetchMrns([props.item.mrn])
    } catch (error) {
        console.error('Failed to trigger fetch for MRN:', error)
    } finally {
        operationLoading.value = false
    }
}

const downloadMrnData = async () => {
    try {
        // This would typically create a ZIP file with all completed resources
        await monitorStore.downloadSelected()
    } catch (error) {
        console.error('Failed to download MRN data:', error)
    }
}


// Resource event handlers removed - now handled directly in MonitorResourceRow via stores
</script>

<style scoped>
/* Using Bootstrap classes, so custom styles are minimal */
.btn-sm i {
    vertical-align: middle;
}
</style>