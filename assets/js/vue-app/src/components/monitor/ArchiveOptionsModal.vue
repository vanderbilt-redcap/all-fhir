<template>
  <b-modal ref="archiveOptionsModal" size="xl">
    <template #title>Archive Options</template>
    
    <div class="mb-3">
      <label for="archive-name" class="form-label">Archive Name</label>
      <input 
        type="text" 
        class="form-control" 
        id="archive-name" 
        v-model="options.archive_name"
        :placeholder="defaultArchiveName"
        maxlength="100"
      />
      <div class="form-text">Optional custom name for the archive file (without extension)</div>
    </div>

    <div class="mb-3">
      <label class="form-label">Resource Types</label>
      <div class="form-text mb-2">Select which resource types to include in the archive (leave empty for all)</div>
      <div class="row">
        <div class="col-md-6" v-for="resourceType in availableResourceTypes" :key="resourceType">
          <div class="form-check">
            <input 
              class="form-check-input" 
              type="checkbox" 
              :value="resourceType"
              v-model="options.resource_types"
              :id="`resource-${resourceType}`"
            />
            <label class="form-check-label" :for="`resource-${resourceType}`">
              {{ resourceType }}
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Processing Mode</label>
      <div class="form-check">
        <input 
          class="form-check-input" 
          type="radio" 
          name="processing-mode" 
          id="immediate-mode"
          :value="false"
          v-model="options.background_mode"
        />
        <label class="form-check-label" for="immediate-mode">
          <strong>Immediate Processing</strong>
          <div class="small text-muted">Process archive immediately (recommended for small selections)</div>
        </label>
      </div>
      <div class="form-check">
        <input 
          class="form-check-input" 
          type="radio" 
          name="processing-mode" 
          id="background-mode"
          :value="true"
          v-model="options.background_mode"
        />
        <label class="form-check-label" for="background-mode">
          <strong>Background Processing</strong>
          <div class="small text-muted">Process archive in background (recommended for large collections)</div>
        </label>
      </div>
    </div>

    <div v-if="estimatedResources > 0" class="alert alert-info">
      <i class="fas fa-info-circle me-2"></i>
      <strong>Estimated:</strong> {{ estimatedResources }} resources will be included in this archive.
    </div>

    <template #footer="{ hide }">
      <div class="d-flex gap-2 justify-content-end">
        <button class="btn btn-sm btn-secondary" type="button" @click="hide(false)">
          <i class="fas fa-times fa-fw me-1"></i>Cancel
        </button>
        <button 
          class="btn btn-sm btn-primary" 
          type="button" 
          @click="createArchive(hide)"
          :disabled="!isValid"
        >
          <i class="fas fa-archive fa-fw me-1"></i>Create Archive
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ArchiveCreateOptions } from '@/models/Archive'
import { FetchStatus } from '@/models/Mrn'
import { useMonitorStore } from '@/store/MonitorStore'

interface Props {
  selectedMrns?: string[]
  archiveType: 'selected' | 'all'
  estimatedResources?: number
}

const props = withDefaults(defineProps<Props>(), {
  selectedMrns: () => [],
  estimatedResources: 0
})

const monitorStore = useMonitorStore()

const emit = defineEmits<{
  create: [options: ArchiveCreateOptions, archiveType: 'selected' | 'all', selectedMrns?: string[]]
}>()

const archiveOptionsModal = ref<any>(null)

const options = ref<ArchiveCreateOptions>({
  archive_name: '',
  resource_types: [],
  background_mode: false
})

// Dynamic resource types based on actual data from store
const availableResourceTypes = computed(() => {
  const resourceTypes = new Set<string>()
  
  if (props.archiveType === 'selected') {
    // Get resource types from selected MRNs
    const selectedMrnObjects = monitorStore.mrns.filter(mrn => 
      props.selectedMrns.includes(mrn.mrn)
    )
    
    selectedMrnObjects.forEach(mrn => {
      mrn.resources.forEach(resource => {
        // Only include mapped resources that aren't deleted
        if (resource.status !== FetchStatus.Deleted && 
            resource.mapping_type && 
            resource.resource_spec) {
          resourceTypes.add(resource.name)
        }
      })
    })
  } else {
    // Get resource types from all MRNs in project
    monitorStore.mrns.forEach(mrn => {
      mrn.resources.forEach(resource => {
        // Only include mapped resources that aren't deleted
        if (resource.status !== FetchStatus.Deleted && 
            resource.mapping_type && 
            resource.resource_spec) {
          resourceTypes.add(resource.name)
        }
      })
    })
  }
  
  return Array.from(resourceTypes).sort()
})

const defaultArchiveName = computed(() => {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[T:]/g, '_')
  const type = props.archiveType === 'selected' ? 'selected' : 'all'
  return `fhir_archive_${type}_${timestamp}`
})

// Dynamic estimated resources calculation based on selected options
const estimatedResources = computed(() => {
  let count = 0
  const selectedResourceTypes = options.value.resource_types || []
  
  if (props.archiveType === 'selected') {
    // Count resources from selected MRNs
    const selectedMrnObjects = monitorStore.mrns.filter(mrn => 
      props.selectedMrns.includes(mrn.mrn)
    )
    
    selectedMrnObjects.forEach(mrn => {
      mrn.resources.forEach(resource => {
        // Only count mapped, non-deleted resources
        if (resource.status !== FetchStatus.Deleted && 
            resource.mapping_type && 
            resource.resource_spec) {
          // If resource types filter is applied, only count matching types
          if (selectedResourceTypes.length === 0 || selectedResourceTypes.includes(resource.name)) {
            count++
          }
        }
      })
    })
  } else {
    // Count resources from all MRNs
    monitorStore.mrns.forEach(mrn => {
      mrn.resources.forEach(resource => {
        // Only count mapped, non-deleted resources
        if (resource.status !== FetchStatus.Deleted && 
            resource.mapping_type && 
            resource.resource_spec) {
          // If resource types filter is applied, only count matching types
          if (selectedResourceTypes.length === 0 || selectedResourceTypes.includes(resource.name)) {
            count++
          }
        }
      })
    })
  }
  
  return count
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

const show = async (): Promise<boolean> => {
  // Reset options
  options.value = {
    archive_name: '',
    resource_types: [],
    background_mode: false // Will be calculated dynamically
  }
  
  // Auto-suggest background mode for large collections after reset
  options.value.background_mode = estimatedResources.value > 50
  
  return await archiveOptionsModal.value?.show()
}

const createArchive = (hide: Function) => {
  if (!isValid.value) return
  
  const finalOptions = { ...options.value }
  
  // Clean up archive name
  if (finalOptions.archive_name) {
    finalOptions.archive_name = finalOptions.archive_name.trim()
  }
  
  // Remove empty resource types filter
  if (finalOptions.resource_types && finalOptions.resource_types.length === 0) {
    delete finalOptions.resource_types
  }
  
  emit('create', finalOptions, props.archiveType, props.selectedMrns)
  hide(true)
}

defineExpose({ show })
</script>