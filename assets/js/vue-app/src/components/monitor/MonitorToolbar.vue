<template>
    <div class="mb-3">
        <div class="d-flex flex-wrap gap-2 align-items-center">
            <!-- Primary Actions -->
            <div class="btn-group" role="group">
                <button class="btn btn-primary" @click="$emit('addMrn')">
                    <i class="bi bi-plus-circle"></i> Add MRN
                </button>
                <button 
                    class="btn btn-outline-primary"
                    @click="triggerFetchSelected"
                    :disabled="selectionDisabled || operationLoading"
                    title="Trigger fetch for selected MRNs"
                >
                    <i class="bi bi-arrow-clockwise"></i>
                    <span v-if="!operationLoading">Fetch Selected</span>
                    <span v-else>
                        <div class="spinner-border spinner-border-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </span>
                </button>
            </div>

            <!-- Sync Actions -->
            <div class="btn-group" role="group">
                <button 
                    class="btn btn-warning"
                    @click="performFullSync"
                    :disabled="operationLoading"
                    title="Synchronize all configured resources with existing MRNs"
                >
                    <i class="bi bi-arrow-repeat"></i>
                    <span v-if="!operationLoading">Full Sync</span>
                    <span v-else>Syncing...</span>
                </button>
                <button 
                    class="btn btn-outline-warning"
                    @click="bulkRetryFailed"
                    :disabled="operationLoading"
                    title="Retry all failed resources"
                >
                    <i class="bi bi-exclamation-triangle"></i>
                    <span v-if="!operationLoading">Retry Failed</span>
                    <span v-else>Retrying...</span>
                </button>
            </div>

            <!-- Download Actions -->
            <div class="btn-group" role="group">
                <button 
                    class="btn btn-success"
                    @click="downloadSelected"
                    :disabled="selectionDisabled"
                    title="Download ZIP archive of selected completed MRNs"
                >
                    <i class="bi bi-download"></i> Download Selected
                </button>
            </div>

            <!-- Refresh Button -->
            <button 
                class="btn btn-outline-secondary"
                @click="refreshData"
                :disabled="loading"
                title="Refresh data"
            >
                <i class="bi bi-arrow-clockwise" :class="{ 'fa-spin': loading }"></i>
            </button>

            <!-- Project Summary Toggle -->
            <button 
                class="btn btn-outline-info"
                @click="operationsStore.toggleSummary()"
                title="Toggle project summary"
            >
                <i class="bi bi-bar-chart"></i> Summary
            </button>
        </div>
        
        <!-- Status Information -->
        <div v-if="projectSummary" class="mt-2">
            <small class="text-muted">
                Total MRNs: {{ projectSummary.total_mrns }} | 
                Queue: {{ projectSummary.sync_status.pending_tasks }} pending, 
                {{ projectSummary.sync_status.failed_tasks }} failed tasks
                <span v-if="selectedCount > 0"> | Selected: {{ selectedCount }}</span>
            </small>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMonitorStore } from '@/store/MonitorStore'
import { useOperationsStore } from '@/store/OperationsStore'

const monitorStore = useMonitorStore()
const operationsStore = useOperationsStore()

// Only emit for actions that need to open modals
defineEmits<{
    addMrn: []
}>()

// Computed properties
const selectionDisabled = computed(() => monitorStore.selectedMrns.length === 0)
const selectedCount = computed(() => monitorStore.selectedMrns.length)
const operationLoading = computed(() => monitorStore.operationLoading)
const loading = computed(() => monitorStore.loading)
const projectSummary = computed(() => monitorStore.projectSummary)

// Methods
const triggerFetchSelected = async () => {
    try {
        const result = await monitorStore.triggerFetchSelected()
        operationsStore.recordOperation(
            'fetch-selected', 
            true, 
            `Fetch triggered for ${result.mrns?.length || 0} MRN(s). ${result.tasks_created || 0} tasks created.`,
            result
        )
    } catch (error) {
        console.error('Failed to trigger fetch for selected MRNs:', error)
        operationsStore.recordOperation('fetch-selected', false, 'Failed to trigger fetch for selected MRNs')
    }
}

const performFullSync = async () => {
    try {
        if (confirm('Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances.')) {
            const result = await monitorStore.performFullSync()
            operationsStore.recordOperation(
                'full-sync', 
                true, 
                `Full sync completed. ${result.statistics?.missing_instances_created || 0} instances created, ${result.statistics?.orphaned_instances_cleaned || 0} cleaned.`,
                result
            )
        }
    } catch (error) {
        console.error('Failed to perform full sync:', error)
        operationsStore.recordOperation('full-sync', false, 'Failed to perform full synchronization')
    }
}

const bulkRetryFailed = async () => {
    try {
        if (confirm('Are you sure you want to retry all failed resources? This will mark them as pending for re-processing.')) {
            const result = await monitorStore.bulkRetryFailed()
            operationsStore.recordOperation(
                'bulk-retry', 
                true, 
                `Bulk retry completed. ${result.retried_count || 0} failed resources marked for retry.`,
                result
            )
        }
    } catch (error) {
        console.error('Failed to bulk retry failed resources:', error)
        operationsStore.recordOperation('bulk-retry', false, 'Failed to bulk retry failed resources')
    }
}

const downloadSelected = async () => {
    try {
        await monitorStore.downloadSelected()
        operationsStore.recordOperation(
            'download-selected', 
            true, 
            `Download initiated for ${selectedCount.value} selected MRN(s).`
        )
    } catch (error) {
        console.error('Failed to download selected MRNs:', error)
        operationsStore.recordOperation('download-selected', false, 'Failed to download selected MRNs')
    }
}


const refreshData = async () => {
    try {
        await Promise.all([
            monitorStore.fetchMrns(),
            monitorStore.getProjectSummary()
        ])
        operationsStore.recordOperation('refresh', true, 'Data refreshed successfully.')
    } catch (error) {
        console.error('Failed to refresh data:', error)
        operationsStore.recordOperation('refresh', false, 'Failed to refresh data')
    }
}
</script>

<style scoped>
</style>