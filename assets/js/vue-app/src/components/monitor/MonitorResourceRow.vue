<template>
    <tr class="align-middle">
        <td>{{ resource.name }}</td>
        <td>
            <span :class="statusClass(resource.status)">{{ resource.status }}</span>
        </td>
        <td>{{ resource.error }}</td>
    </tr>
</template>

<script setup lang="ts">
import type { MonitoredResource } from '@/models/Mrn'
import { FetchStatus } from '@/models/Mrn'

defineProps<{
    resource: MonitoredResource
}>()

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
</style>