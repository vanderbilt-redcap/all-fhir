<template>
  <b-modal ref="resourceFormModal">
    <template #title>Resource</template>
    
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
          <i class="fas fa-plus fa-fw me-1"></i>Add
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

const resourceFormModal = ref<ModalRef>(null)

const getNewForm = (): ResourceFormType => ({
  displayName: '',
  customResourceSpec: '',
  predefinedResource: '',
  resourceType: RESOURCE_TYPE.PREDEFINED
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
  form.value = getNewForm() // Reset form before showing
  const result = await resourceFormModal.value?.show()
  return result ? form.value : null
}

const handleSubmit = (hide: Function) => {
  if (isFormValid.value) {
    hide(true)
  }
}

defineExpose({ show })
</script>