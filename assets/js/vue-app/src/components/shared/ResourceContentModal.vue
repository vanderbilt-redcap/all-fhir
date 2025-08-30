<template>
  <div 
    class="modal fade"
    :class="{ show: resourceContentStore.isModalVisible }"
    :style="{ display: resourceContentStore.isModalVisible ? 'block' : 'none' }"
    tabindex="-1"
    role="dialog"
    aria-labelledby="resourceContentModalLabel"
    aria-hidden="true"
    @click.self="closeModal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="resourceContentModalLabel">
            <i class="fas fa-file-alt fa-fw me-2"></i>
            {{ resourceContentStore.getDisplayTitle() }}
          </h5>
          <button 
            type="button" 
            class="btn-close" 
            @click="closeModal"
            aria-label="Close"
          ></button>
        </div>
        
        <div class="modal-body p-0">
          <!-- Loading State -->
          <div v-if="resourceContentStore.loading" class="d-flex justify-content-center align-items-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading content...</span>
            </div>
            <span class="ms-3">Loading resource content...</span>
          </div>

          <!-- Content Display -->
          <div v-else-if="resourceContentStore.currentContent" class="h-100">
            <!-- Content Info Bar -->
            <div class="bg-light border-bottom p-3">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <div class="d-flex flex-wrap gap-3">
                    <div class="d-flex align-items-center">
                      <i class="fas fa-info-circle text-info me-1"></i>
                      <small class="text-muted">
                        {{ contentStats?.lines || 0 }} lines, {{ contentStats?.characters || 0 }} characters
                      </small>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="fas fa-hdd text-secondary me-1"></i>
                      <small class="text-muted">
                        {{ contentStats?.size_human }}
                        <span v-if="contentStats?.is_truncated" class="text-warning">
                          of {{ contentStats?.full_size_human }} (truncated)
                        </span>
                      </small>
                    </div>
                    <div v-if="resourceContentStore.isJsonContent()" class="d-flex align-items-center">
                      <i class="fas fa-check-circle text-success me-1"></i>
                      <small class="text-muted">Valid JSON</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-end">
                  <button 
                    class="btn btn-outline-secondary btn-sm"
                    @click="copyContent"
                    :disabled="copying"
                    title="Copy content to clipboard"
                  >
                    <i :class="`fas ${copying ? 'fa-spinner fa-spin' : copySuccess ? 'fa-check' : 'fa-copy'} fa-fw`"></i>
                    {{ copying ? 'Copying...' : copySuccess ? 'Copied!' : 'Copy' }}
                  </button>
                </div>
              </div>
              
              <!-- Truncation Warning -->
              <div v-if="contentStats?.is_truncated" class="alert alert-warning mt-2 mb-0 py-2">
                <i class="fas fa-exclamation-triangle me-2"></i>
                <strong>Content Truncated:</strong>
                This file is {{ contentStats.full_size_human }} but only the first {{ contentStats.size_human }} 
                are shown for performance. The full content is preserved in the system.
              </div>
            </div>

            <!-- Content Area -->
            <div class="content-display">
              <pre 
                ref="contentPre"
                class="content-pre"
                :class="{ 'json-content': resourceContentStore.isJsonContent() }"
              ><code>{{ resourceContentStore.currentContent.content }}</code></pre>
            </div>
          </div>

          <!-- Error State -->
          <div v-else class="p-4 text-center">
            <div class="alert alert-danger">
              <i class="fas fa-exclamation-circle me-2"></i>
              No content available or failed to load.
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Backdrop -->
  <div 
    v-if="resourceContentStore.isModalVisible"
    class="modal-backdrop fade show"
    @click="closeModal"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useResourceContentStore } from '@/store/ResourceContentStore'
import { useNotificationStore } from '@/store/NotificationStore'

const resourceContentStore = useResourceContentStore()
const notificationStore = useNotificationStore()

const contentPre = ref<HTMLElement | null>(null)
const copying = ref(false)
const copySuccess = ref(false)

const contentStats = computed(() => resourceContentStore.getContentStats())

const closeModal = () => {
  resourceContentStore.hideModal()
}

const copyContent = async () => {
  if (!resourceContentStore.currentContent) return
  
  copying.value = true
  copySuccess.value = false
  
  try {
    const success = await resourceContentStore.copyToClipboard(
      resourceContentStore.currentContent.content
    )
    
    if (success) {
      copySuccess.value = true
      notificationStore.showSuccess('Content copied to clipboard')
      
      // Reset copy success indicator after 2 seconds
      setTimeout(() => {
        copySuccess.value = false
      }, 2000)
    } else {
      notificationStore.showError('Failed to copy content to clipboard')
    }
  } catch (error) {
    console.error('Copy failed:', error)
    notificationStore.showError('Failed to copy content to clipboard')
  } finally {
    copying.value = false
  }
}

// Handle escape key to close modal
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && resourceContentStore.isModalVisible) {
    closeModal()
  }
}

// Add event listener when component mounts
document.addEventListener('keydown', handleKeydown)

// Remove event listener when component unmounts
import { onUnmounted } from 'vue'
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.content-display {
  max-height: 60vh;
  overflow: auto;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
}

.content-pre {
  margin: 0;
  padding: 1rem;
  background-color: transparent;
  border: none;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #212529;
}

.json-content {
  background-color: #f8f9fa;
}

.json-content code {
  color: #0d6efd;
}

/* Modal styling adjustments */
.modal-xl {
  max-width: 90%;
}

@media (max-width: 768px) {
  .modal-xl {
    max-width: 95%;
    margin: 0.5rem;
  }
  
  .content-display {
    max-height: 50vh;
  }
}

/* Scrollbar styling for content area */
.content-display::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.content-display::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.content-display::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.content-display::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Alert styling */
.alert {
  border-radius: 0.375rem;
}

/* Button hover effects */
.btn-outline-secondary:hover {
  background-color: #6c757d;
  border-color: #6c757d;
}

/* Loading spinner */
.spinner-border {
  width: 2rem;
  height: 2rem;
}
</style>