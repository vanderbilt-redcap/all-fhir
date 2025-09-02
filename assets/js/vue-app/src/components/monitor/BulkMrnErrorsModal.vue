<template>
  <b-modal ref="errorsModal" size="lg">
    <template #title>Some MRNs Could Not Be Added</template>

    <div class="alert alert-warning" v-if="summary">
      <strong>Summary:</strong>
      {{ summary.added }} added, {{ summary.failed }} failed
    </div>

    <div class="table-responsive">
      <table class="table table-sm align-middle">
        <thead>
          <tr>
            <th style="width: 35%">MRN</th>
            <th>Error</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in failures" :key="idx">
            <td><code>{{ item.mrn }}</code></td>
            <td>{{ item.error }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <template #footer="{ hide }">
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-sm btn-secondary" @click="hide(true)">
          <i class="fas fa-check fa-fw me-1"></i>Close
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ModalRef } from '@/types/Modal'
import type { BulkAddFailure } from '@/models/Mrn'

const errorsModal = ref<ModalRef>(null)
const failures = ref<BulkAddFailure[]>([])
const summary = ref<{ added: number; failed: number } | null>(null)

const show = (items: BulkAddFailure[], addedCount?: number, failedCount?: number) => {
  failures.value = items
  summary.value = {
    added: addedCount ?? 0,
    failed: failedCount ?? items.length,
  }
  errorsModal.value?.show()
}

defineExpose({ show })
</script>

<style scoped>
table td code {
  color: inherit;
}
</style>

