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
      <small class="text-muted d-block">Examples: 12345, 67890 or one per line</small>
      <div class="mt-2 small">
        <div>
          Parsed: <strong>{{ metrics.unique }}</strong> unique
          <span v-if="metrics.duplicates > 0">(<strong>{{ metrics.duplicates }}</strong> duplicates ignored)</span>
          <span v-if="metrics.empties > 0">, <strong>{{ metrics.empties }}</strong> empty tokens</span>
        </div>
        <div v-if="metrics.overLimit" class="text-danger">
          Limit exceeded: {{ metrics.unique }} › {{ metrics.limit }}. Please reduce the list.
        </div>
        <div v-if="metrics.sample.length" class="text-muted">
          Sample: <code>{{ metrics.sample.join(', ') }}</code>
        </div>
      </div>
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
          :disabled="addDisabled"
        >
          <i class="fas fa-plus fa-fw me-1"></i>{{ addButtonText }}
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ModalRef } from '@/types/Modal'
import { useMonitorStore } from '@/store/MonitorStore'

const addMrnModal = ref<ModalRef>(null)
const mrn = ref('')
const monitorStore = useMonitorStore()
const metrics = computed(() => monitorStore.analyzeMrnInput(mrn.value))
const addDisabled = computed(() => metrics.value.unique === 0 || metrics.value.overLimit)
const addButtonText = computed(() => metrics.value.unique > 0 ? `Add ${metrics.value.unique}` : 'Add')

const show = async (): Promise<string | null> => {
  mrn.value = ''
  const result = await addMrnModal.value?.show()
  return result ? mrn.value : null
}

const submit = (hide: Function) => {
  if (!addDisabled.value) {
    hide(true)
  }
}

defineExpose({ show })
</script>
