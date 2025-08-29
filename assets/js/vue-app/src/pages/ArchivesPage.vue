<template>
  <div class="p-3">
    <!-- Page Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="mb-1">Archive Management</h4>
        <p class="text-muted mb-0">Manage and download your FHIR resource archives</p>
      </div>
      <div>
        <button 
          class="btn btn-primary btn-sm"
          @click="refreshArchives"
          :disabled="archiveStore.loading"
        >
          <i class="fas fa-sync-alt fa-fw me-1" :class="{ 'fa-spin': archiveStore.loading }"></i>
          Refresh
        </button>
      </div>
    </div>

    <!-- Filters and Search -->
    <div class="card mb-4">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-3">
            <label class="form-label">Search Archives</label>
            <input 
              type="text" 
              class="form-control form-control-sm"
              placeholder="Search by name or ID..."
              v-model="searchQuery"
              @input="onSearchInput"
            />
          </div>
          <div class="col-md-3">
            <label class="form-label">Status</label>
            <select 
              class="form-select form-select-sm"
              v-model="statusFilter"
              @change="onStatusFilterChange"
            >
              <option value="">All Statuses</option>
              <option value="completed">Completed</option>
              <option value="processing">Processing</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label">Processing Mode</label>
            <select 
              class="form-select form-select-sm"
              v-model="processingModeFilter"
              @change="onProcessingModeFilterChange"
            >
              <option value="">All Modes</option>
              <option value="immediate">Immediate</option>
              <option value="background">Background</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label">Per Page</label>
            <select 
              class="form-select form-select-sm"
              v-model="selectedLimit"
            >
              <option v-for="option in archiveStore.pagination.perPageOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>
        <div class="row mt-3" v-if="hasActiveFilters">
          <div class="col">
            <button class="btn btn-outline-secondary btn-sm" @click="clearAllFilters">
              <i class="fas fa-times fa-fw me-1"></i>Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Archives Statistics -->
    <div class="row mb-4">
      <div class="col-md-3">
        <div class="card text-center">
          <div class="card-body py-3">
            <h5 class="card-title text-primary mb-1">{{ archiveStore.archives.length }}</h5>
            <p class="card-text small text-muted mb-0">Total Archives</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card text-center">
          <div class="card-body py-3">
            <h5 class="card-title text-success mb-1">{{ archiveStore.completedArchives.length }}</h5>
            <p class="card-text small text-muted mb-0">Completed</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card text-center">
          <div class="card-body py-3">
            <h5 class="card-title text-warning mb-1">{{ archiveStore.pendingArchives.length }}</h5>
            <p class="card-text small text-muted mb-0">In Progress</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card text-center">
          <div class="card-body py-3">
            <h5 class="card-title text-info mb-1">{{ totalFileSize }}</h5>
            <p class="card-text small text-muted mb-0">Total Size</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Archives Table -->
    <div class="card">
      <div class="card-body p-0">
        <div v-if="archiveStore.loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading archives...</span>
          </div>
          <p class="mt-2 mb-0 text-muted">Loading archives...</p>
        </div>
        
        <div v-else-if="archiveStore.paginatedArchives.length === 0" class="text-center py-5">
          <i class="fas fa-archive text-muted" style="font-size: 3rem;"></i>
          <h6 class="mt-3 mb-2">{{ hasActiveFilters ? 'No archives match your filters' : 'No archives found' }}</h6>
          <p class="text-muted mb-0">
            {{ hasActiveFilters ? 'Try adjusting your search criteria.' : 'Archives will appear here when created.' }}
          </p>
        </div>

        <div v-else>
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead class="table-light">
                <tr>
                  <th scope="col">Archive</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created</th>
                  <th scope="col">Size</th>
                  <th scope="col">Resources</th>
                  <th scope="col">Mode</th>
                  <th scope="col" class="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="archive in archiveStore.paginatedArchives" :key="archive.archive_id">
                  <td>
                    <div class="d-flex flex-column">
                      <span class="fw-semibold">{{ archive.file_name }}</span>
                      <small class="text-muted">{{ archive.archive_id }}</small>
                    </div>
                  </td>
                  <td>
                    <span :class="getStatusBadgeClass(archive.status)">
                      <i :class="getStatusIcon(archive.status)" class="me-1"></i>
                      {{ archive.status.charAt(0).toUpperCase() + archive.status.slice(1) }}
                    </span>
                  </td>
                  <td>
                    <span :title="formatFullDate(archive.created_at)">
                      {{ formatRelativeDate(archive.created_at) }}
                    </span>
                  </td>
                  <td>{{ formatFileSize(archive.file_size) }}</td>
                  <td>
                    <div class="d-flex flex-column">
                      <span>{{ archive.total_resources }}</span>
                      <small v-if="archive.failed_files > 0" class="text-danger">
                        {{ archive.failed_files }} failed
                      </small>
                    </div>
                  </td>
                  <td>
                    <span class="badge" :class="archive.processing_mode === 'immediate' ? 'bg-info' : 'bg-secondary'">
                      {{ archive.processing_mode }}
                    </span>
                  </td>
                  <td class="text-end">
                    <div class="btn-group btn-group-sm">
                      <button 
                        v-if="archive.status === 'completed' && archive.download_url"
                        class="btn btn-outline-primary"
                        @click="downloadArchive(archive)"
                        title="Download Archive"
                      >
                        <i class="fas fa-download"></i>
                      </button>
                      <button 
                        class="btn btn-outline-danger"
                        @click="showDeleteModal(archive)"
                        title="Delete Archive"
                        :disabled="archiveStore.isArchiveDeleting(archive.archive_id)"
                      >
                        <i class="fas" :class="archiveStore.isArchiveDeleting(archive.archive_id) ? 'fa-spinner fa-spin' : 'fa-trash'"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="d-flex justify-content-between align-items-center mt-3" v-if="archiveStore.filteredArchives.length > 0">
      <small class="text-muted">
        Showing {{ paginationInfo.start }}-{{ paginationInfo.end }} of {{ paginationInfo.total }} archives
      </small>
      <div class="d-flex gap-2">
        <b-pagination
          size="sm"
          :perPage="selectedLimit"
          :totalItems="archiveStore.filteredArchives.length"
          v-model="currentPage"
        ></b-pagination>
        <b-pagination-dropdown
          :options="archiveStore.pagination.perPageOptions"
          v-model="selectedLimit"
        />
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <Teleport to="body">
      <ArchiveDeleteModal 
        ref="deleteModal" 
        @deleted="handleArchiveDeleted"
      />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useArchiveStore } from '@/store/ArchiveStore'
import { useNotificationStore } from '@/store/NotificationStore'
import type { Archive } from '@/models/Archive'
import ArchiveDeleteModal from '@/components/archives/ArchiveDeleteModal.vue'

const archiveStore = useArchiveStore()
const notificationStore = useNotificationStore()
const deleteModal = ref<any>(null)

// Filter state
const searchQuery = ref('')
const statusFilter = ref('')
const processingModeFilter = ref('')
// Computed properties for pagination controls
const currentPage = computed({
    get: () => archiveStore.pagination.page,
    set: (value) => archiveStore.setPage(value),
})

const selectedLimit = computed({
    get: () => archiveStore.pagination.limit,
    set: (value) => archiveStore.setLimit(value),
})

// Auto-refresh for pending archives
let refreshInterval: number | null = null

onMounted(async () => {
  await refreshArchives()
  // setupAutoRefresh()
})

// Computed properties
const hasActiveFilters = computed(() => {
  return searchQuery.value || statusFilter.value || processingModeFilter.value
})

const totalFileSize = computed(() => {
  const total = archiveStore.completedArchives.reduce((sum, archive) => sum + (archive.file_size || 0), 0)
  return formatFileSize(total)
})

const paginationInfo = computed(() => {
  const total = archiveStore.filteredArchives.length
  const start = (archiveStore.pagination.page - 1) * archiveStore.pagination.limit + 1
  const end = Math.min(start + archiveStore.pagination.limit - 1, total)
  return { start, end, total }
})

// Methods
const refreshArchives = async () => {
  try {
    await archiveStore.fetchArchives()
    notificationStore.showSuccess('Archives refreshed successfully')
  } catch (error) {
    console.error('Failed to refresh archives:', error)
    notificationStore.showError('Failed to refresh archives')
  }
}

// const setupAutoRefresh = () => {
//   // Auto-refresh every 30 seconds if there are pending/processing archives
//   refreshInterval = setInterval(async () => {
//     if (archiveStore.pendingArchives.length > 0) {
//       await archiveStore.refreshArchiveStatus()
//     }
//   }, 30000)
// }

const onSearchInput = () => {
  archiveStore.setFilter('searchQuery', searchQuery.value)
}

const onStatusFilterChange = () => {
  archiveStore.setFilter('status', statusFilter.value)
}

const onProcessingModeFilterChange = () => {
  archiveStore.setFilter('processingMode', processingModeFilter.value)
}

const clearAllFilters = () => {
  searchQuery.value = ''
  statusFilter.value = ''
  processingModeFilter.value = ''
  archiveStore.clearFilters()
}

const downloadArchive = async (archive: Archive) => {
  try {
    await archiveStore.downloadArchive(archive.archive_id)
    notificationStore.showSuccess(`Archive ${archive.file_name} downloaded successfully`)
  } catch (error) {
    console.error('Failed to download archive:', error)
    notificationStore.showError(`Failed to download archive ${archive.file_name}`)
  }
}

const showDeleteModal = async (archive: Archive) => {
  await deleteModal.value?.show(archive)
}

const handleArchiveDeleted = async (archiveId: string) => {
  try {
    await archiveStore.deleteArchive(archiveId)
    notificationStore.showSuccess('Archive deleted successfully')
  } catch (error) {
    console.error('Failed to delete archive:', error)
    notificationStore.showError('Failed to delete archive')
  }
}

// Utility functions
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const formatRelativeDate = (dateString: string): string => {
  if (!dateString) return 'Unknown'
  try {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)
    
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  } catch {
    return dateString
  }
}

const formatFullDate = (dateString: string): string => {
  if (!dateString) return 'Unknown'
  try {
    return new Date(dateString).toLocaleString()
  } catch {
    return dateString
  }
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

// Watch for store filter changes and sync with local state
watch(() => archiveStore.filters, (newFilters) => {
  searchQuery.value = newFilters.searchQuery
  statusFilter.value = newFilters.status
  processingModeFilter.value = newFilters.processingMode
}, { deep: true })

// Cleanup on unmount
import { onUnmounted } from 'vue'
onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})
</script>