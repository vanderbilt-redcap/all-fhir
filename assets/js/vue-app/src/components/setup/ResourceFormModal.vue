<template>
  <b-modal ref="resourceFormModal">
    <template #title>{{ mode==='create' ? 'Add Resource' : 'Edit Resource' }}</template>
    
    <ResourceForm v-model="form"/>

    <template #footer="{ hide }">
      <div class="d-flex gap-2 justify-content-end">
        <button 
          type="button" 
          class="btn btn-sm btn-secondary" 
          @click="hide(false)"
        >
          <i class="fas fa-times fa-fw me-1"></i>Cancel
        </button>
        <button 
          type="button" 
          class="btn btn-sm btn-primary" 
          @click="handleSubmit(hide)"
          :disabled="!isFormValid"
        >
          <i :class="`fas fa-fw ${mode==='create' ? 'fa-plus' : 'fa-save'} me-1`"></i>{{ mode==='create' ? 'Add' : 'Save' }}
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ResourceForm from '@/components/setup/ResourceForm.vue'
import { RESOURCE_TYPE, type ResourceFormType } from '@/types/ResourceForm'
import type { ModalRef } from '@/types/Modal'
import { useEndpointParamsStore } from '@/store/EndpointParamsStore'
import { storeToRefs } from 'pinia'
import type { MappingResource } from '@/models/ProjectSettings'

const resourceFormModal = ref<ModalRef>(null)
const endpointParamsStore = useEndpointParamsStore()
const { draft } = storeToRefs(endpointParamsStore)
const mode = ref<'create'|'edit'>('create')

const getNewForm = (): ResourceFormType => ({
  displayName: '',
  customResourceSpec: '',
  predefinedResource: '',
  resourceType: RESOURCE_TYPE.PREDEFINED,
  params: {}
})

const form = ref<ResourceFormType>(getNewForm())

const isFormValid = computed(() => {
  if (!form.value.displayName.trim()) {
    return false
  }

  if (form.value.resourceType === RESOURCE_TYPE.PREDEFINED) {
    return !!form.value.predefinedResource
  } else {
    return !!form.value.customResourceSpec.trim()
  }
})

const show = async (): Promise<ResourceFormType | null> => {
  mode.value = 'create'
  form.value = getNewForm() // Reset form before showing
  const result = await resourceFormModal.value?.show()
  return result ? form.value : null
}

const showEdit = async (resource: MappingResource): Promise<ResourceFormType | null> => {
  mode.value = 'edit'
  // Seed form from resource
  form.value = getNewForm()
  form.value.displayName = resource.name
  if (resource.type === 'predefined') {
    form.value.resourceType = RESOURCE_TYPE.PREDEFINED
    form.value.predefinedResource = resource.resourceSpec
    form.value.params = resource.params || {}
    // Prepare endpoint params draft for the selected spec
    endpointParamsStore.prepareDraftFor(resource.resourceSpec, resource.params || {})
  } else {
    form.value.resourceType = RESOURCE_TYPE.CUSTOM
    form.value.customResourceSpec = resource.resourceSpec
  }
  const result = await resourceFormModal.value?.show()
  return result ? form.value : null
}

const handleSubmit = (hide: Function) => {
  if (isFormValid.value) {
    // attach endpoint params for predefined resources
    if (form.value.resourceType === RESOURCE_TYPE.PREDEFINED) {
      form.value.params = { ...(draft.value || {}) }
    }
    hide(true)
  }
}

defineExpose({ show, showEdit })
</script>
