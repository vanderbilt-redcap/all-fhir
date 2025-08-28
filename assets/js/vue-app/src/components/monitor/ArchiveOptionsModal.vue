<template>
  <b-modal ref="archiveOptionsModal" size="xl">
    <template #title>Archive Options</template>
    <template #default>
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
        <div class="form-text mb-2">Select which resource types to include</div>
        
        <div v-if="availableResourceTypes.length === 0" class="text-center text-muted py-3">
          <i class="fas fa-info-circle me-2"></i>
          No resource types found
        </div>
        
        <div v-else class="resource-type-list">
          <div class="form-check" v-for="resourceType in availableResourceTypes" :key="resourceType.name">
            {{ resourceType }}
            <input 
              class="form-check-input" 
              type="checkbox" 
              :value="resourceType.name"
              v-model="options.resource_types"
              :id="`resource-${resourceType.name}`"
              :disabled="!resourceType.isAvailable"
            />
            <label class="form-check-label" :for="`resource-${resourceType.name}`">
              {{ resourceType.name }}
            </label>
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
  
      <div class="alert" :class="estimatedResources > 0 ? 'alert-info' : 'alert-warning'">
        <div class="d-flex align-items-center mb-2">
          <i :class="estimatedResources > 0 ? 'fas fa-info-circle' : 'fas fa-exclamation-triangle'" class="me-2"></i>
          <strong>Archive Summary</strong>
        </div>
        
        <div v-if="estimatedResources > 0">
          <div class="mb-2">
            <strong>{{ estimatedResources }}</strong> completed resources will be included
          </div>
          <div class="small text-muted">
            {{ availabilitySummary.availableTypes }} of {{ availabilitySummary.totalTypes }} resource types have completed data
          </div>
        </div>
        
        <div v-else>
          <div class="mb-1">
            <strong>No resources available for archiving</strong>
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
    </template>

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
import { ref, computed, useTemplateRef } from 'vue'
import type { ArchiveCreateOptions } from '@/models/Archive'
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

const archiveOptionsModal = useTemplateRef('archiveOptionsModal')

const options = ref<ArchiveCreateOptions>({
  archive_name: '',
  resource_types: [],
  background_mode: false
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
  return `fhir_archive_${type}_${timestamp}`
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