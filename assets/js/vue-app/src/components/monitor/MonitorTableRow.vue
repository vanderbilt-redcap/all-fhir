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
            <!-- Status Display Options - All available for testing -->
            
            <!-- Solution A: Smart Status Text -->
            <div v-if="statusDisplayMode === 'smart'" class="status-display-smart">
                <span :class="getStatusClass()" :title="getStatusTooltip()">
                    {{ monitorStore.getSmartStatusDisplay(item) }}
                </span>
            </div>
            
            <!-- Solution B: Progress Bar Visualization -->
            <div v-else-if="statusDisplayMode === 'progress'" class="status-display-progress">
                <div class="progress position-relative" style="height: 20px;">
                    <div
                        v-for="segment in progressConfig.segments"
                        :key="segment.status"
                        :class="`progress-bar bg-${segment.color}`"
                        :style="{ width: segment.percentage + '%' }"
                        :title="`${segment.status}: ${segment.count} (${segment.percentage}%)`"
                    ></div>
                </div>
                <small class="text-muted">{{ Math.round(progressConfig.completion_percentage) }}% complete</small>
            </div>
            
            <!-- Solution C: Status Badge Collection -->
            <div v-else-if="statusDisplayMode === 'badges'" class="status-display-badges">
                <span
                    v-for="segment in progressConfig.segments"
                    :key="segment.status"
                    :class="`badge bg-${segment.color} me-1`"
                    :title="`${segment.status}: ${segment.count} resources`"
                    style="font-size: 0.7em;"
                >
                    {{ segment.status.charAt(0).toUpperCase() }}: {{ segment.count }}
                </span>
            </div>
            
            <!-- Solution D: Enhanced Tooltip (Legacy display with rich tooltip) -->
            <div v-else class="status-display-legacy">
                <span 
                    :class="getStatusClass()" 
                    :title="getDetailedTooltip()"
                    @mouseenter="showTooltip = true"
                    @mouseleave="showTooltip = false"
                >
                    {{ monitorStore.getSmartStatusDisplay(item) }}
                </span>
                
                <!-- Rich tooltip overlay -->
                <div v-if="showTooltip" class="position-absolute bg-dark text-white p-2 rounded shadow-lg" style="z-index: 1000; top: 100%; left: 0; width: 250px;">
                    <div class="fw-bold mb-1">Status Breakdown</div>
                    <div class="small">
                        <div v-for="segment in progressConfig.segments" :key="segment.status" class="d-flex justify-content-between">
                            <span>{{ segment.status }}:</span>
                            <span>{{ segment.count }} ({{ segment.percentage }}%)</span>
                        </div>
                        <hr class="my-1">
                        <div class="d-flex justify-content-between">
                            <span>Total Resources:</span>
                            <span>{{ progressConfig.total_resources }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Completion:</span>
                            <span>{{ Math.round(progressConfig.completion_percentage) }}%</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </td>
        <td>
            <div class="d-flex align-items-center">
                <span>{{ resourceSummary }}</span>
                <button class="btn btn-sm btn-light ms-2" @click="toggleExpand" :aria-expanded="expanded">
                    <i :class="`fas fa-chevron-${expanded ? 'up' : 'down'} fa-fw`"></i>
                </button>
                <!-- Dev Mode Toggle for Status Display -->
                <div class="ms-2" v-if="showDevControls">
                    <select 
                        v-model="statusDisplayMode" 
                        class="form-select form-select-sm"
                        style="width: 100px; font-size: 0.75em;"
                        title="Status Display Mode (Dev)"
                    >
                        <option value="smart">Smart</option>
                        <option value="progress">Progress</option>
                        <option value="badges">Badges</option>
                        <option value="legacy">Legacy</option>
                    </select>
                </div>
            </div>
        </td>
        <td>
            <div class="btn-group" role="group">
                <button 
                    class="btn btn-sm btn-primary"
                    @click="triggerFetchMrn"
                    :disabled="operationLoading"
                    title="Trigger fetch for this MRN"
                >
                    <template v-if="!operationLoading">
                        <i class="fas fa-cloud-arrow-down fa-fw"></i> Fetch
                    </template>
                    <template v-else>
                        <i class="fas fa-spinner fa-spin fa-fw"></i> Fetch
                    </template>
                </button>
                <button 
                    class="btn btn-sm btn-warning"
                    @click="retryFailedResources"
                    :disabled="retryButtonDisabled || operationLoading"
                    :title="retryButtonTooltip"
                >
                    <template v-if="!operationLoading">
                        <i class="fas fa-redo fa-fw"></i> Retry
                    </template>
                    <template v-else>
                        <i class="fas fa-spinner fa-spin fa-fw"></i> Retry
                    </template>
                </button>
                <button 
                    :class="`btn btn-sm btn-${archiveButtonConfig.variant}`"
                    :disabled="archiveButtonConfig.disabled"
                    @click="showArchiveModal"
                    :title="archiveButtonConfig.tooltip"
                >
                    <i class="fas fa-download fa-fw"></i>
                </button>
                <button 
                    class="btn btn-sm btn-info"
                    :disabled="streamButtonDisabled || operationLoading || streamingStore.isStreamingActive"
                    @click="streamDownloadMrn"
                    :title="streamButtonTooltip"
                >
                    <i class="fas fa-bolt fa-fw"></i>
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
import { useOperationsStore } from '@/store/OperationsStore'
import { useStreamingStore } from '@/store/StreamingStore'
import { api } from '@/API'

const monitorStore = useMonitorStore()
const operationsStore = useOperationsStore()
const streamingStore = useStreamingStore()

const props = defineProps<{
    item: Mrn
    selected: boolean
}>()


const expanded = ref(false)
const operationLoading = ref(false)
const showTooltip = ref(false)

// Status display mode - can be controlled by props, store, or environment variable
const statusDisplayMode = ref<'smart' | 'progress' | 'badges' | 'legacy'>('smart')

// Dev controls visibility - can be controlled by environment or dev mode
const showDevControls = ref(import.meta.env?.DEV ?? false)

const toggleExpand = () => {
    expanded.value = !expanded.value
}

const resourceSummary = computed(() => {
    const nonDeletedResources = props.item.resources.filter(r => r.status !== FetchStatus.Deleted)
    const total = nonDeletedResources.length
    const completed = nonDeletedResources.filter(r => r.status === FetchStatus.Completed).length
    const failed = nonDeletedResources.filter(r => r.status === FetchStatus.Failed).length
    const pending = nonDeletedResources.filter(r => r.status === FetchStatus.Pending).length
    const fetching = nonDeletedResources.filter(r => r.status === FetchStatus.Fetching).length
    
    let summary = `${completed}/${total} completed`
    if (failed > 0) summary += `, ${failed} failed`
    if (fetching > 0) summary += `, ${fetching} fetching`
    if (pending > 0) summary += `, ${pending} pending`
    
    return summary
})

// Enhanced computed properties for status display
const progressConfig = computed(() => {
    return monitorStore.getProgressBarConfig(props.item)
})

const archiveButtonConfig = computed(() => {
    return monitorStore.getArchiveButtonConfig(props.item)
})

// Retry button computed properties
const hasFailedResources = computed(() => {
    return props.item.resources.some(r => r.status === FetchStatus.Failed)
})

const retryButtonDisabled = computed(() => {
    return !hasFailedResources.value
})

const retryButtonTooltip = computed(() => {
    if (hasFailedResources.value) {
        const failedCount = props.item.resources.filter(r => r.status === FetchStatus.Failed).length
        return `Retry ${failedCount} failed resource${failedCount > 1 ? 's' : ''} for this record`
    } else {
        return 'No failed resources to retry'
    }
})

// Stream button computed properties
const hasCompletedResources = computed(() => {
    return props.item.resources.some(r => r.status === FetchStatus.Completed)
})

const streamButtonDisabled = computed(() => {
    return !hasCompletedResources.value
})

const streamButtonTooltip = computed(() => {
    if (hasCompletedResources.value) {
        const completedCount = props.item.resources.filter(r => r.status === FetchStatus.Completed).length
        return `Stream download ${completedCount} completed resource${completedCount > 1 ? 's' : ''} for MRN ${props.item.mrn}`
    } else {
        return 'No completed resources to stream'
    }
})

// Tooltip content methods
const getStatusTooltip = (): string => {
    const config = progressConfig.value
    if (config.segments.length === 0) return 'No resources'
    
    const parts = config.segments.map(s => `${s.status}: ${s.count}`)
    return `${parts.join(', ')} | ${Math.round(config.completion_percentage)}% complete`
}

const getDetailedTooltip = (): string => {
    return getStatusTooltip() + ' (hover for details)'
}

const getStatusClass = (): string => {
    const status = monitorStore.getStatusForStyling(props.item)
    const colorVariant = monitorStore.getStatusColor(status)
    return `badge bg-${colorVariant}`
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

const showArchiveModal = async () => {
    try {
        operationsStore.showArchiveModalSelected([props.item.mrn])
    } catch (error) {
        console.error('Failed to show archive modal:', error)
    }
}

const retryFailedResources = async () => {
    if (!hasFailedResources.value) {
        return // Button should be disabled, but extra safety check
    }
    
    try {
        operationLoading.value = true
        await api.retryFailed({ record_ids: [props.item.id] })
        
        // Refresh monitor data after successful retry
        await monitorStore.getProjectSummary()
    } catch (error) {
        console.error('Failed to retry failed resources:', error)
    } finally {
        operationLoading.value = false
    }
}

const streamDownloadMrn = async () => {
    if (!hasCompletedResources.value) {
        return // Button should be disabled, but extra safety check
    }
    
    try {
        operationLoading.value = true
        
        // Generate archive name for this MRN
        const timestamp = new Date().toISOString().slice(0, 19).replace(/[T:]/g, '_')
        const archiveName = `${props.item.mrn}_all_resources_${timestamp}`
        
        streamingStore.startStreaming(archiveName)
        operationsStore.displayToast(`Started streaming download: ${archiveName}`, 'info')
        
        // Get all completed resource types for this MRN
        const completedResourceTypes = props.item.resources
            .filter(r => r.status === FetchStatus.Completed)
            .map(r => r.name)
            .filter((name, index, array) => array.indexOf(name) === index) // Remove duplicates
        
        // Prepare options for streaming all completed resources for this MRN
        const streamingOptions = {
            mrns: [props.item.mrn],
            resource_types: completedResourceTypes,
            archive_name: archiveName
        }
        
        const response = await api.streamSelectedArchive([props.item.mrn], streamingOptions)
        
        // Create and trigger download
        const blob = new Blob([response.data])
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `${archiveName}.zip`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
        
        const duration = streamingStore.finishStreaming()
        operationsStore.displayToast(
            `Download completed: ${archiveName} (${duration}s)`, 
            'success'
        )
        
    } catch (error: any) {
        streamingStore.finishStreaming()
        operationsStore.displayToast(`Streaming download failed: ${error.message}`, 'error')
        console.error('Failed to stream download MRN:', error)
    } finally {
        operationLoading.value = false
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