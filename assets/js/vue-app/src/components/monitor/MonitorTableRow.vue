<template>
    <tr class="align-middle">
        <td>
            <input
                class="form-check-input"
                type="checkbox"
                :checked="selected"
                @change="$emit('toggle-selection', item.id)"
            />
        </td>
        <td>{{ item.mrn }}</td>
        <td>
            <span :class="statusClass(item.status)">{{ item.status }}</span>
        </td>
        <td>
            <span>{{ resourceSummary }}</span>
            <button class="btn btn-sm btn-light ms-2" @click="toggleExpand" :aria-expanded="expanded">
                <i :class="`bi bi-chevron-${expanded ? 'up' : 'down'}`"></i>
            </button>
        </td>
        <td>
            <button class="btn btn-sm btn-primary me-2" @click="monitorStore.fetchMrn(item.id)">
                <i class="fas fa-sync fa-fw"></i> Fetch
            </button>
            <button class="btn btn-sm btn-success" :disabled="item.status !== 'Completed'">
                <i class="fas fa-download fa-fw"></i> Download
            </button>
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
                            <th scope="col">Error</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MonitorResourceRow v-for="resource in item.resources" :key="resource.name" :resource="resource" />
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

defineEmits(['toggle-selection'])

const expanded = ref(false)

const toggleExpand = () => {
    expanded.value = !expanded.value
}

const resourceSummary = computed(() => {
    const total = props.item.resources.length
    const completed = props.item.resources.filter(r => r.status === FetchStatus.Completed).length
    return `${completed} / ${total} resources completed`
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
        default:
            return `${baseClass} bg-secondary`
    }
}
</script>

<style scoped>
/* Using Bootstrap classes, so custom styles are minimal */
.btn-sm i {
    vertical-align: middle;
}
</style>