<template>
    <tr class="align-middle">
        <td>
            <div class="d-flex flex-column">
                <strong>{{ resource.name }}</strong>
                <small class="text-muted">
                    {{ resource.mapping_type }} | {{ resource.resource_spec }}
                </small>
            </div>
        </td>
        <td>
            <span :class="statusClass(resource.status)">{{ resource.status }}</span>
            <small v-if="resource.repeat_instance" class="d-block text-muted">
                Instance #{{ resource.repeat_instance }}
            </small>
        </td>
        <td>
            <div v-if="resource.fetch_date" class="text-success">
                <i class="fas fa-check-circle fa-fw"></i>
                {{ formatDate(resource.fetch_date) }}
            </div>
            <div v-else class="text-muted">-</div>
        </td>
        <td>
            <div v-if="resource.error_message" class="text-danger">
                <i class="fas fa-exclamation-triangle fa-fw"></i>
                <span :title="resource.error_message">
                    {{ truncateError(resource.error_message) }}
                </span>
                <button 
                    v-if="resource.error_message.length > 50"
                    class="btn btn-link btn-sm p-0 ms-1"
                    @click="showFullError = !showFullError"
                    :title="showFullError ? 'Show less' : 'Show more'"
                >
                    <i :class="`fas fa-chevron-${showFullError ? 'up' : 'down'} fa-fw`"></i>
                </button>
            </div>
            <div v-else class="text-muted">-</div>
        </td>
        <td>
            <div class="btn-group" role="group">
                <button 
                    v-if="resource.status === 'Failed'"
                    class="btn btn-sm btn-warning"
                    @click="retryResource"
                    :disabled="loading"
                    title="Retry this resource"
                >
                    <i class="fas fa-rotate-right fa-fw"></i>
                </button>
                <button 
                    v-if="resource.status === 'Completed'"
                    class="btn btn-sm btn-outline-primary"
                    @click="viewDetails"
                    title="View resource details"
                >
                    <i class="fas fa-eye fa-fw"></i>
                </button>
                <button 
                    v-if="resource.status === 'Completed'"
                    class="btn btn-sm btn-success"
                    @click="streamDownload"
                    :disabled="loading || streamingStore.isStreamingActive"
                    title="Stream download this resource"
                >
                    <i class="fas fa-download fa-fw"></i>
                </button>
            </div>
        </td>
    </tr>
    <tr v-if="showFullError && resource.error_message" class="table-warning">
        <td colspan="5">
            <div class="p-2">
                <strong>Error Details:</strong>
                <pre class="mb-0 mt-1">{{ resource.error_message }}</pre>
            </div>
        </td>
    </tr>
    
    <!-- Resource Content Modal -->
    <ResourceContentModal />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MonitoredResource } from '@/models/Mrn'
import { FetchStatus } from '@/models/Mrn'
import { useMonitorStore } from '@/store/MonitorStore'
import { useStreamingStore } from '@/store/StreamingStore'
import { useNotificationStore } from '@/store/NotificationStore'
import { useResourceContentStore } from '@/store/ResourceContentStore'
import ResourceContentModal from '@/components/shared/ResourceContentModal.vue'
import { api } from '@/API'

const props = defineProps<{
    resource: MonitoredResource
    mrn: string
    recordId: string
}>()

const monitorStore = useMonitorStore()
const streamingStore = useStreamingStore()
const notificationStore = useNotificationStore()
const resourceContentStore = useResourceContentStore()
const showFullError = ref(false)
const loading = ref(false)

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

const formatDate = (dateString: string | null) => {
    if (!dateString) return '-'
    
    try {
        const date = new Date(dateString)
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        })
    } catch {
        return dateString
    }
}

const truncateError = (errorMessage: string | null) => {
    if (!errorMessage) return '-'
    return errorMessage.length > 50 ? errorMessage.substring(0, 50) + '...' : errorMessage
}

const retryResource = async () => {
    try {
        loading.value = true
        await monitorStore.retryFailedResource(
            props.mrn,
            props.resource.name,
            props.resource.repeat_instance
        )
        // Success is handled by the store and operations store
    } catch (error) {
        console.error('Failed to retry resource:', error)
    } finally {
        loading.value = false
    }
}

const viewDetails = async () => {
    try {
        loading.value = true
        await resourceContentStore.showResourceContent(
            props.recordId,
            props.resource.name,
            props.resource.repeat_instance || 1
        )
    } catch (error) {
        console.error('Failed to load resource content:', error)
        notificationStore.showError('Failed to load resource content')
    } finally {
        loading.value = false
    }
}

const streamDownload = async () => {
    try {
        loading.value = true
        
        // Generate archive name for this specific resource
        const timestamp = new Date().toISOString().slice(0, 19).replace(/[T:]/g, '_')
        const archiveName = `${props.mrn}_${props.resource.name}_${timestamp}`
        
        streamingStore.startStreaming(archiveName)
        notificationStore.showInfo(`Started streaming download: ${archiveName}`)
        
        // Prepare options for streaming a single resource type for this MRN
        const streamingOptions = {
            mrns: [props.mrn],
            resource_types: [props.resource.name],
            archive_name: archiveName
        }
        
        const response = await api.streamSelectedArchive([props.mrn], streamingOptions)
        
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
        notificationStore.showSuccess(`Download completed: ${archiveName} (${duration}s)`)
        
    } catch (error: any) {
        streamingStore.finishStreaming()
        notificationStore.showError(`Streaming download failed: ${error.message}`)
        console.error('Failed to stream download resource:', error)
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
</style>