<template>
  <b-modal ref="addMrnModal">
    <template #title>Add MRN</template>
    
    <div class="mb-3">
      <label for="mrn-input" class="form-label">MRN(s)</label>
      <textarea
        class="form-control"
        id="mrn-input"
        v-model="mrn"
        rows="6"
        placeholder="Enter MRNs separated by commas, spaces, or new lines"
      />
      <small class="text-muted">Examples: 12345, 67890 or one per line</small>
    </div>

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
          @click="submit(hide)"
          :disabled="!mrn.trim()"
        >
          <i class="fas fa-plus fa-fw me-1"></i>Add
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ModalRef } from '@/types/Modal'

const addMrnModal = ref<ModalRef>(null)
const mrn = ref('')

const show = async (): Promise<string | null> => {
  mrn.value = ''
  const result = await addMrnModal.value?.show()
  return result ? mrn.value : null
}

const submit = (hide: Function) => {
  if (mrn.value.trim()) {
    hide(true)
  }
}

// Enter key no longer auto-submits because textarea is multiline
const submitOnEnter = () => {}

defineExpose({ show })
</script>
