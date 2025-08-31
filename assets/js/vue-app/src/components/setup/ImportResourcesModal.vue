<template>
  <b-modal ref="importModal">
    <template #title>Import Resources</template>

    <div class="mb-3">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="import-mode"
          id="mode-merge"
          value="merge"
          v-model="mode"
        />
        <label class="form-check-label" for="mode-merge">
          <strong>Merge</strong>
          <div class="small text-muted">Adds new resources and updates names when resourceSpec matches. Keeps existing items.</div>
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="import-mode"
          id="mode-replace"
          value="replace"
          v-model="mode"
        />
        <label class="form-check-label" for="mode-replace">
          <strong>Replace</strong>
          <div class="small text-muted">Replaces current selection with the file contents. This will discard your current list.</div>
        </label>
      </div>
    </div>

    <template #footer="{ hide }">
      <div class="d-flex gap-2 justify-content-end">
        <button class="btn btn-sm btn-secondary" type="button" @click="hide(false)">
          <i class="fas fa-times fa-fw me-1"></i>Cancel
        </button>
        <button class="btn btn-sm btn-primary" type="button" @click="confirm(hide)">
          <i class="fas fa-file-import fa-fw me-1"></i>Continue
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ModalRef } from '@/types/Modal'

type ImportMode = 'merge' | 'replace'

const importModal = ref<ModalRef>(null)
const mode = ref<ImportMode>('merge')

const show = async (): Promise<ImportMode | null> => {
  mode.value = 'merge'
  const result = await importModal.value?.show()
  return result ? mode.value : null
}

const confirm = (hide: Function) => {
  hide(true)
}

defineExpose({ show })
</script>

<style scoped>
</style>

