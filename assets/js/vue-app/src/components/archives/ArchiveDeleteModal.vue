<template>
  <b-modal ref="deleteModal">
    <template #title>Delete Archive</template>
    
    <div v-if="archive">
      <div class="alert alert-warning">
        <i class="fas fa-exclamation-triangle me-2"></i>
        <strong>Warning:</strong> This action cannot be undone.
      </div>
      
      <p>Are you sure you want to delete this archive?</p>
      
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">Archive Details</h6>
          <ul class="list-unstyled mb-0">
            <li><strong>Archive ID:</strong> {{ archive.archive_id }}</li>
            <li><strong>File Name:</strong> {{ archive.file_name }}</li>
            <li><strong>Created:</strong> {{ formatDate(archive.created_at) }}</li>
            <li><strong>Size:</strong> {{ formatFileSize(archive.file_size) }}</li>
            <li><strong>Resources:</strong> {{ archive.total_resources }}</li>
            <li><strong>Status:</strong> 
              <span :class="getStatusBadgeClass(archive.status)">
                <i :class="getStatusIcon(archive.status)" class="me-1"></i>
                {{ archive.status.charAt(0).toUpperCase() + archive.status.slice(1) }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-3">
        <p class="mb-2"><strong>This will:</strong></p>
        <ul class="mb-0">
          <li>Remove the archive file from storage</li>
          <li>Delete all archive metadata</li>
          <li>Remove the archive from the archives list</li>
        </ul>
      </div>
    </div>
    
    <div v-if="isDeleting" class="text-center mt-3">
      <div class="spinner-border spinner-border-sm text-danger me-2" role="status">
        <span class="visually-hidden">Deleting...</span>
      </div>
      <span>Deleting archive...</span>
    </div>

    <template #footer="{ hide }">
      <div class="d-flex gap-2 justify-content-end">
        <button 
          class="btn btn-sm btn-secondary" 
          type="button" 
          @click="hide(false)"
          :disabled="isDeleting"
        >
          <i class="fas fa-times fa-fw me-1"></i>Cancel
        </button>
        <button 
          class="btn btn-sm btn-danger" 
          type="button" 
          @click="confirmDelete(hide)"
          :disabled="isDeleting"
        >
          <i class="fas fa-trash fa-fw me-1"></i>
          {{ isDeleting ? 'Deleting...' : 'Delete Archive' }}
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Archive } from '@/models/Archive'
import type { ModalRef } from '@/types/Modal'

const emit = defineEmits<{
  deleted: [archiveId: string]
}>()

const deleteModal = ref<ModalRef>(null)
const archive = ref<Archive | null>(null)
const isDeleting = ref(false)

const show = async (archiveToDelete: Archive): Promise<boolean> => {
  archive.value = archiveToDelete
  isDeleting.value = false
  return await deleteModal.value?.show() ?? false
}

const confirmDelete = async (hide: Function) => {
  if (!archive.value || isDeleting.value) return
  
  isDeleting.value = true
  
  try {
    // Emit the deletion event - parent component will handle the actual API call
    emit('deleted', archive.value.archive_id)
    hide(true)
  } catch (error) {
    console.error('Delete confirmation failed:', error)
  } finally {
    isDeleting.value = false
  }
}

const formatDate = (dateString: string): string => {
  if (!dateString) return 'Unknown'
  try {
    return new Date(dateString).toLocaleString()
  } catch {
    return dateString
  }
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const getStatusBadgeClass = (status: string): string => {
  const classes = {
    'completed': 'badge bg-success',
    'pending': 'badge bg-warning text-dark',
    'processing': 'badge bg-info',
    'failed': 'badge bg-danger'
  }
  return classes[status as keyof typeof classes] || 'badge bg-secondary'
}

const getStatusIcon = (status: string): string => {
  const icons = {
    'completed': 'fas fa-check-circle',
    'pending': 'fas fa-clock',
    'processing': 'fas fa-spinner fa-spin',
    'failed': 'fas fa-exclamation-triangle'
  }
  return icons[status as keyof typeof icons] || 'fas fa-question-circle'
}

defineExpose({ show })
</script>