<template>
  <div class="mb-3">
    <label class="form-label">Resource Types</label>
    <div class="form-text mb-2">Select which resource types to include</div>
    
    <div v-if="availableTypes.length === 0" class="text-center text-muted py-3">
      <i class="fas fa-info-circle me-2"></i>
      No resource types found
    </div>
    
    <div v-else class="resource-type-list">
      <div class="form-check mb-2" v-if="showSelectAll">
        <input 
          class="form-check-input" 
          type="checkbox" 
          :checked="isAllSelected"
          @change="toggleAll"
          id="select-all-types"
        />
        <label class="form-check-label fw-bold" for="select-all-types">
          Select All
        </label>
      </div>
      
      <div class="form-check" v-for="resourceType in availableTypes" :key="resourceType.name">
        <input 
          class="form-check-input" 
          type="checkbox" 
          :value="resourceType.name"
          :checked="selectedTypes.includes(resourceType.name)"
          @change="updateSelection"
          :id="`resource-${resourceType.name}`"
          :disabled="!resourceType.isAvailable"
        />
        <label class="form-check-label" :for="`resource-${resourceType.name}`">
          {{ resourceType.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ResourceType {
  name: string
  isAvailable: boolean
}

interface Props {
  selectedTypes: string[]
  availableTypes: ResourceType[]
  showSelectAll?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showSelectAll: true
})

const emit = defineEmits<{
  'update:selectedTypes': [types: string[]]
}>()

const isAllSelected = computed(() => {
  const availableTypeNames = props.availableTypes
    .filter(t => t.isAvailable)
    .map(t => t.name)
  
  return availableTypeNames.length > 0 && 
         availableTypeNames.every(name => props.selectedTypes.includes(name))
})

const toggleAll = (event: Event) => {
  const target = event.target as HTMLInputElement
  
  if (target.checked) {
    // Select all available types
    const allAvailableTypes = props.availableTypes
      .filter(t => t.isAvailable)
      .map(t => t.name)
    emit('update:selectedTypes', allAvailableTypes)
  } else {
    // Deselect all
    emit('update:selectedTypes', [])
  }
}

const updateSelection = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  
  let newSelection = [...props.selectedTypes]
  
  if (target.checked) {
    if (!newSelection.includes(value)) {
      newSelection.push(value)
    }
  } else {
    newSelection = newSelection.filter(type => type !== value)
  }
  
  emit('update:selectedTypes', newSelection)
}
</script>