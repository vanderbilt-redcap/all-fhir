<template>
  <b-modal ref="archiveCreationModal" size="lg" hide-footer>
    <template #title>Archive Creation</template>
    
    <div v-if="!archiveResult">
      <!-- Initial state -->
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Creating archive...</span>
        </div>
        <p class="mt-3 mb-0">Creating archive, please wait...</p>
      </div>
    </div>
    
    <div v-else-if="archiveResult.success">
      <!-- Success state -->
      <div class="text-center mb-4">
        <i class="fas fa-check-circle text-success" style="font-size: 3rem;"></i>
        <h6 class="mt-3 mb-0">Archive Created Successfully</h6>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Archive Details</h6>
              <ul class="list-unstyled mb-0">
                <li><strong>Archive ID:</strong> {{ archiveResult.archive_id }}</li>
                <li><strong>Resources:</strong> {{ archiveResult.total_resources }}</li>
                <li v-if="archiveResult.file_size"><strong>Size:</strong> {{ formatFileSize(archiveResult.file_size) }}</li>
                <li><strong>Mode:</strong> {{ archiveResult.processing_mode }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Status</h6>
              <div v-if="archiveResult.processing_mode === 'immediate'">
                <span class="badge bg-success">
                  <i class="fas fa-check me-1"></i>Ready for Download
                </span>
                <p class="mt-2 mb-0 small text-muted">Archive is ready for immediate download.</p>
              </div>
              <div v-else>
                <span class="badge bg-info">
                  <i class="fas fa-clock me-1"></i>Processing in Background
                </span>
                <p class="mt-2 mb-0 small text-muted">Archive is being processed. You'll be able to download it when complete.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else>
      <!-- Error state -->
      <div class="text-center mb-4">
        <i class="fas fa-exclamation-triangle text-danger" style="font-size: 3rem;"></i>
        <h6 class="mt-3 mb-0">Archive Creation Failed</h6>
      </div>
      
      <div class="alert alert-danger">
        <strong>Error:</strong> {{ archiveResult.message }}
      </div>
    </div>

    <template #footer="{ hide }">
      <div class="d-flex gap-2 justify-content-end">
        <button v-if="!archiveResult" type="button" class="btn btn-sm btn-secondary" @click="hide(false)">
          <i class="fas fa-times fa-fw me-1"></i>Cancel
        </button>
        
        <template v-else-if="archiveResult.success">
          <button 
            v-if="archiveResult.processing_mode === 'immediate' && archiveResult.download_url" 
            type="button" 
            class="btn btn-sm btn-primary" 
            @click="downloadArchive"
          >
            <i class="fas fa-download fa-fw me-1"></i>Download Now
          </button>
          <button type="button" class="btn btn-sm btn-secondary" @click="hide(true)">
            <i class="fas fa-check fa-fw me-1"></i>Done
          </button>
        </template>
        
        <template v-else>
          <button type="button" class="btn btn-sm btn-secondary" @click="hide(false)">
            <i class="fas fa-times fa-fw me-1"></i>Close
          </button>
        </template>
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ArchiveCreateResponse } from '@/models/Archive'
import type { ModalRef } from '@/types/Modal'

const archiveCreationModal = ref<ModalRef>(null)
const archiveResult = ref<ArchiveCreateResponse | null>(null)

const show = (result: ArchiveCreateResponse) => {
  archiveResult.value = result
  archiveCreationModal.value?.show()
}

const downloadArchive = () => {
  if (archiveResult.value?.download_url) {
    // Create download link
    const link = document.createElement('a')
    link.href = archiveResult.value.download_url
    link.download = `archive_${archiveResult.value.archive_id}.zip`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

defineExpose({ show })
</script>