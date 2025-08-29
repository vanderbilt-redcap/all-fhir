<template>
  <b-modal ref="streamingArchiveModal" size="lg">
    <template #title>
      <i class="fas fa-bolt text-primary me-2"></i>
      Streaming Archive Download
    </template>
    
    <div>
      <div class="alert alert-info mb-4">
        <i class="fas fa-info-circle me-2"></i>
        <strong>Streaming Download</strong>
        <div class="small">
          Your archive will be generated and downloaded immediately without storing on the server.
          Perfect for one-time downloads or when server storage is limited.
        </div>
      </div>

      <!-- Use shared components -->
      <ArchiveNameInput 
        v-model="options.archive_name"
        :placeholder="defaultArchiveName"
        :show-help="true"
        help-text="Archive will be downloaded immediately as [name].zip"
        input-id="streaming-archive-name"
      />

      <ResourceTypesSelector 
        :selected-types="options.resource_types || []"
        :available-types="availableResourceTypes"
        @update:selected-types="updateResourceTypes"
        :show-select-all="true"
      />


      <div class="mb-3">
        <label class="form-label">Selected Records</label>
        <div class="bg-light p-3 rounded">
          <div v-if="archiveType === 'selected'">
            <strong>{{ selectedMrns.length }}</strong> selected MRNs
            <div class="small text-muted">
              {{ selectedMrns.slice(0, 3).join(', ') }}
              <span v-if="selectedMrns.length > 3">
                and {{ selectedMrns.length - 3 }} more...
              </span>
            </div>
          </div>
          <div v-else>
            <strong>All project records</strong>
            <div class="small text-muted">Complete project dataset</div>
          </div>
        </div>
      </div>

      <div class="alert" :class="estimatedResources > 0 ? 'alert-info' : 'alert-warning'">
        <div class="d-flex align-items-center mb-2">
          <i :class="estimatedResources > 0 ? 'fas fa-info-circle' : 'fas fa-exclamation-triangle'" class="me-2"></i>
          <strong>Streaming Summary</strong>
        </div>
        
        <div v-if="estimatedResources > 0">
          <div class="mb-2">
            <strong>{{ estimatedResources }}</strong> completed resources will be streamed
          </div>
          <div class="small text-muted">
            {{ availabilitySummary.availableTypes }} of {{ availabilitySummary.totalTypes }} resource types have completed data
          </div>
        </div>
        
        <div v-else>
          <div class="mb-1">
            <strong>No resources available for streaming</strong>
          </div>
          <div class="small text-muted">
            <span v-if="availabilitySummary.totalTypes === 0">
              No resource types found
            </span>
            <span v-else>
              {{ availabilitySummary.totalTypes }} resource types found, but none have completed data
            </span>
          </div>
        </div>
      </div>
    </div>

    <template #footer="{ hide }">
      <div class="d-flex gap-2 justify-content-end">
        <button class="btn btn-sm btn-secondary" type="button" @click="hide(false)">
          <i class="fas fa-times fa-fw me-1"></i>Cancel
        </button>
        <button 
          class="btn btn-sm btn-primary" 
          type="button" 
          @click="startStreamingDownload(hide)"
          :disabled="!isValid || streamingStore.isStreamingActive"
        >
          <i class="fas fa-download fa-fw me-1"></i>
          {{ streamingStore.isStreamingActive ? 'Downloading...' : 'Start Streaming Download' }}
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { StreamingArchiveOptions } from '@/models/Archive'
import { useMonitorStore } from '@/store/MonitorStore'
import { useStreamingStore } from '@/store/StreamingStore'
import { useNotificationStore } from '@/store/NotificationStore'
import { api } from '@/API'
import ArchiveNameInput from './shared/ArchiveNameInput.vue'
import ResourceTypesSelector from './shared/ResourceTypesSelector.vue'

interface Props {
  selectedMrns?: string[]
  archiveType: 'selected' | 'all'
}

const props = withDefaults(defineProps<Props>(), {
  selectedMrns: () => []
})

const monitorStore = useMonitorStore()
const streamingStore = useStreamingStore()
const notificationStore = useNotificationStore()

const streamingArchiveModal = ref<any>(null)

const options = ref<StreamingArchiveOptions>({
  mrns: [],
  archive_name: '',
  resource_types: []
})

// Simplified resource types - just name and availability  
const availableResourceTypes = computed(() => {
  const resourceTypes = new Set<string>()
  const availableTypes = new Set<string>()
  
  const targetMrns = props.archiveType === 'selected' 
    ? monitorStore.mrns.filter(mrn => props.selectedMrns.includes(mrn.mrn))
    : monitorStore.mrns
  
  targetMrns.forEach(mrn => {
    if (mrn.status_summary) {
      // Get all resource types and which ones are available from status_summary
      Object.entries(mrn.status_summary.resource_type_statuses).forEach(([typeName, typeStatus]) => {
        resourceTypes.add(typeName)
        if (typeStatus.is_archivable) {
          availableTypes.add(typeName)
        }
      })
    } else {
      // Fallback: get resource types from resources array
      mrn.resources.forEach(resource => {
        if (resource.status !== 'Deleted') {
          resourceTypes.add(resource.name)
          if (resource.status === 'Completed') {
            availableTypes.add(resource.name)
          }
        }
      })
    }
  })
  
  return Array.from(resourceTypes)
    .sort()
    .map(name => ({
      name,
      isAvailable: availableTypes.has(name)
    }))
})

const defaultArchiveName = computed(() => {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[T:]/g, '_')
  const type = props.archiveType === 'selected' ? 'selected' : 'all'
  return `streaming_archive_${type}_${timestamp}`
})

// Simplified estimated resources calculation
const estimatedResources = computed(() => {
  const selectedResourceTypes = options.value.resource_types || []
  const targetMrns = props.archiveType === 'selected' 
    ? monitorStore.mrns.filter(mrn => props.selectedMrns.includes(mrn.mrn))
    : monitorStore.mrns
  
  let count = 0
  
  targetMrns.forEach(mrn => {
    if (mrn.status_summary) {
      Object.entries(mrn.status_summary.resource_type_statuses).forEach(([typeName, typeStatus]) => {
        // If no specific types selected, count all available
        if (selectedResourceTypes.length === 0) {
          if (typeStatus.is_archivable) {
            count += typeStatus.completed_count
          }
        } else {
          // Count only selected types that are available
          if (selectedResourceTypes.includes(typeName) && typeStatus.is_archivable) {
            count += typeStatus.completed_count
          }
        }
      })
    } else {
      // Fallback: count completed resources
      mrn.resources.forEach(resource => {
        if (resource.status === 'Completed') {
          if (selectedResourceTypes.length === 0) {
            count += 1
          } else if (selectedResourceTypes.includes(resource.name)) {
            count += 1
          }
        }
      })
    }
  })
  
  return count
})

// Simplified availability summary
const availabilitySummary = computed(() => {
  const availableTypes = availableResourceTypes.value.filter(t => t.isAvailable)
  const totalTypes = availableResourceTypes.value.length
  
  return {
    availableTypes: availableTypes.length,
    totalTypes
  }
})

const isValid = computed(() => {
  // Archive name validation (optional but if provided, must be valid)
  if (options.value.archive_name) {
    const validName = /^[a-zA-Z0-9_-]+$/.test(options.value.archive_name.trim())
    if (!validName) return false
  }
  
  // For selected archives, must have MRNs
  if (props.archiveType === 'selected' && props.selectedMrns.length === 0) {
    return false
  }
  
  return true
})

const updateResourceTypes = (types: string[]) => {
  options.value.resource_types = types
}

const show = async (): Promise<boolean> => {
  // Reset options
  options.value = {
    mrns: props.archiveType === 'selected' ? props.selectedMrns : [],
    archive_name: '',
    resource_types: []
  }
  
  return await streamingArchiveModal.value?.show()
}

const generateStreamingArchiveName = (): string => {
  return options.value.archive_name || defaultArchiveName.value
}

const startStreamingDownload = async (hide: Function) => {
  if (!isValid.value) return
  
  const archiveName = generateStreamingArchiveName()
  
  try {
    streamingStore.startStreaming(archiveName)
    notificationStore.showInfo(`Started streaming download: ${archiveName}`)
    
    // Close modal immediately
    hide(true)
    
    // Prepare options for API call
    const streamingOptions = {
      ...options.value,
      mrns: props.archiveType === 'selected' ? props.selectedMrns : []
    }

    // Remove empty values
    if (!streamingOptions.archive_name) delete streamingOptions.archive_name
    if (!streamingOptions.resource_types?.length) delete streamingOptions.resource_types
    
    let response
    if (props.archiveType === 'selected') {
      response = await api.streamSelectedArchive(props.selectedMrns, streamingOptions)
    } else {
      response = await api.streamAllArchive(streamingOptions)
    }
    
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
  }
}

defineExpose({ show })
</script>