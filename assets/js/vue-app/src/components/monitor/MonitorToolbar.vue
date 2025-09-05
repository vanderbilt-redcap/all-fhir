<template>
    <div class="mb-3">
        <div class="d-flex flex-wrap gap-2 align-items-center">
            <!-- Primary Actions -->
            <div class="d-flex gap-2">
                <button class="btn btn-primary btn-sm" @click="$emit('addMrn')">
                    <i class="fas fa-plus-circle fa-fw"></i> Add MRN
                </button>
                <button 
                    class="btn btn-outline-primary btn-sm"
                    @click="triggerFetchSelected"
                    :disabled="selectionDisabled || operationLoading"
                    title="Trigger fetch for selected MRNs"
                >
                    <template v-if="!operationLoading">
                        <span><i class="fas fa-cloud-arrow-down fa-fw"></i> Fetch Selected</span>
                    </template>
                    <span v-else>
                        <span><i class="fas fa-spinner fa-spin fa-fw"></i> Fetch Selected</span>
                    </span>
                </button>
            </div>

            <!-- Archive Actions -->
            <!--
                <div class="btn-group" role="group">
                    <button 
                        class="btn btn-success"
                        @click="createArchiveSelected"
                        :disabled="selectionDisabled"
                        title="Create archive for selected completed MRNs"
                    >
                        <i class="fas fa-archive fa-fw"></i> Create Archive
                    </button>
                    <button 
                        class="btn btn-outline-success"
                        @click="createArchiveAll"
                        title="Create archive for all completed resources"
                    >
                        <i class="fas fa-archive fa-fw"></i> Archive All
                    </button>
                </div>
            -->

            <!-- Streaming Archive Actions -->
            <b-dropdown 
                variant="success"
                title="Stream download archives"
                size="sm"
            >
                <template #button>
                    <i class="fas fa-download fa-fw me-1"></i>Download
                </template>
                
                <b-dropdown-item 
                    @click="createStreamingArchiveSelected"
                    :class="{ disabled: selectionDisabled }"
                    :prevent-close="false"
                >
                    <i class="fas fa-download me-2"></i>Download Selected Records
                </b-dropdown-item>
                
                <b-dropdown-item 
                    @click="createStreamingArchiveAll"
                    :prevent-close="false"
                >
                    <i class="fas fa-download me-2"></i>Download All Records
                </b-dropdown-item>
            </b-dropdown>

            <!-- Refresh Button -->
            <button 
                class="btn btn-outline-secondary btn-sm"
                @click="refreshData"
                :disabled="loading"
                title="Refresh data"
            >
                <i class="fas fa-rotate-right fa-fw" :class="{ 'fa-spin': loading }"></i>
            </button>

            <!-- Project Summary Toggle -->
            
            <!--
                <button 
                    class="btn btn-outline-info"
                    @click="operationsStore.toggleSummary()"
                    title="Toggle project summary"
                >
                    <i class="fas fa-chart-bar fa-fw"></i> Summary
                </button>
            -->
        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMonitorStore } from '@/store/MonitorStore'
import { useOperationsStore } from '@/store/OperationsStore'
import { useNotificationStore } from '@/store/NotificationStore'

const monitorStore = useMonitorStore()
const operationsStore = useOperationsStore()
const notificationStore = useNotificationStore()

// Emits for actions that need to open modals
defineEmits<{
    addMrn: []
}>()

// Computed properties
const selectionDisabled = computed(() => monitorStore.selectedMrns.length === 0)
const operationLoading = computed(() => monitorStore.operationLoading)
const loading = computed(() => monitorStore.loading)

// Methods
const triggerFetchSelected = async () => {
    try {
        const result = await monitorStore.triggerFetchSelected()
        notificationStore.showSuccess(`Fetch triggered for ${result.mrns?.length || 0} MRN(s). ${result.tasks_created || 0} tasks created.`)
    } catch (error) {
        console.error('Failed to trigger fetch for selected MRNs:', error)
        notificationStore.showError('Failed to trigger fetch for selected MRNs')
    }
}



const refreshData = async () => {
    try {
        await Promise.all([
            monitorStore.fetchMrns(),
            monitorStore.getProjectSummary()
        ])
        notificationStore.showSuccess('Data refreshed successfully')
    } catch (error) {
        console.error('Failed to refresh data:', error)
        notificationStore.showError('Failed to refresh data')
    }
}

// Archive methods that use store directly
// const createArchiveSelected = () => {
//     if (selectionDisabled.value) {
//         notificationStore.showWarning('No MRNs selected for archive')
//         return
//     }
    
//     const selectedMrnsStrings = monitorStore.mrns
//         .filter(mrn => monitorStore.selectedMrns.includes(mrn.id))
//         .map(mrn => mrn.mrn)
    
//     operationsStore.showArchiveModalSelected(selectedMrnsStrings)
// }

// const createArchiveAll = () => {
//     operationsStore.showArchiveModalAll()
// }

// Streaming archive methods
const createStreamingArchiveSelected = () => {
    if (selectionDisabled.value) {
        notificationStore.showWarning('No MRNs selected for streaming archive')
        return
    }
    
    const selectedMrnsStrings = monitorStore.mrns
        .filter(mrn => monitorStore.selectedMrns.includes(mrn.id))
        .map(mrn => mrn.mrn)
    
    operationsStore.showStreamingModalSelected(selectedMrnsStrings)
}

const createStreamingArchiveAll = () => {
    operationsStore.showStreamingModalAll()
}
</script>

<style scoped>
</style>