<template>
  <div class="p-3">
    <!-- Page Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="mb-1">Task Management</h4>
        <p class="text-muted mb-0">Monitor and manage background processing tasks</p>
      </div>
      <div class="d-flex gap-2">
        <button 
          class="btn btn-warning btn-sm"
          @click="performFullSync"
          :disabled="taskStore.operationLoading"
        >
          <i class="fas fa-arrows-rotate fa-fw me-1" :class="{ 'fa-spin': taskStore.operationLoading }"></i>
          Full Sync
        </button>
        <button 
          class="btn btn-outline-warning btn-sm"
          @click="retryFailed"
          :disabled="taskStore.operationLoading"
        >
          <i class="fas fa-exclamation-triangle fa-fw me-1"></i>
          Retry Failed
        </button>
        <button 
          class="btn btn-primary btn-sm"
          @click="refreshTasks"
          :disabled="taskStore.loading"
        >
          <i class="fas fa-sync-alt fa-fw me-1" :class="{ 'fa-spin': taskStore.loading }"></i>
          Refresh
        </button>
      </div>
    </div>

    <!-- Queue Status Widget -->
    <div class="mb-4">
      <QueueStatusWidget />
    </div>

    <!-- Filters and Search -->
    <div class="card mb-4">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-3">
            <label class="form-label">Search Tasks</label>
            <input 
              type="text" 
              class="form-control form-control-sm"
              placeholder="Search by ID or type..."
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
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label">Task Type</label>
            <select 
              class="form-select form-select-sm"
              v-model="taskTypeFilter"
              @change="onTaskTypeFilterChange"
            >
              <option value="">All Types</option>
              <option value="fhir_fetch">FHIR Fetch</option>
              <option value="full_sync">Full Sync</option>
              <option value="retry_failed">Retry Failed</option>
              <option value="archive">Archive</option>
              <option value="cleanup">Cleanup</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label">Per Page</label>
            <select 
              class="form-select form-select-sm"
              v-model="selectedLimit"
            >
              <option v-for="option in perPageOptions" :key="option" :value="option">
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

    <!-- Tasks Table -->
    <div class="card">
      <div class="card-body p-0">
        <div v-if="taskStore.loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading tasks...</span>
          </div>
          <p class="mt-2 mb-0 text-muted">Loading tasks...</p>
        </div>
        
        <div v-else-if="taskStore.paginatedTasks.length === 0" class="text-center py-5">
          <i class="fas fa-tasks text-muted" style="font-size: 3rem;"></i>
          <h6 class="mt-3 mb-2">{{ hasActiveFilters ? 'No tasks match your filters' : 'No tasks found' }}</h6>
          <p class="text-muted mb-0">
            {{ hasActiveFilters ? 'Try adjusting your search criteria.' : 'Tasks will appear here when created.' }}
          </p>
        </div>

        <div v-else>
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead class="table-light">
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Status</th>
                  <th scope="col">Type</th>
                  <th scope="col">Created</th>
                  <th scope="col">Updated</th>
                  <th scope="col" class="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="task in taskStore.paginatedTasks" :key="task.id">
                  <td>
                    <div class="d-flex flex-column">
                      <span class="fw-semibold">{{ task.id }}</span>
                      <small v-if="task.params.mrn" class="text-muted">MRN: {{ task.params.mrn }}</small>
                    </div>
                  </td>
                  <td>
                    <span :class="getStatusBadgeClass(task.status)">
                      <i :class="getStatusIcon(task.status)" class="me-1"></i>
                      {{ task.status.charAt(0).toUpperCase() + task.status.slice(1) }}
                    </span>
                  </td>
                  <td>
                    <span class="badge bg-secondary">{{ formatTaskType(task.key) }}</span>
                  </td>
                  <td>
                    <span :title="formatFullDate(task.created_at)">
                      {{ formatRelativeDate(task.created_at) }}
                    </span>
                  </td>
                  <td>
                    <span :title="formatFullDate(task.updated_at)">
                      {{ formatRelativeDate(task.updated_at) }}
                    </span>
                  </td>
                  <td class="text-end">
                    <div class="btn-group btn-group-sm">
                      <button 
                        class="btn btn-outline-info"
                        @click="showTaskDetails(task)"
                        title="View Details"
                      >
                        <i class="fas fa-info-circle"></i>
                      </button>
                      <button 
                        class="btn btn-outline-danger"
                        title="Delete Task"
                        :disabled="task.status === 'processing'"
                        @click="confirmDeleteTask(task)"
                      >
                        <i class="fas fa-trash"></i>
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
    <div class="d-flex justify-content-between align-items-center mt-3" v-if="taskStore.filteredTasks.length > 0">
      <small class="text-muted">
        Showing {{ paginationInfo.start }}-{{ paginationInfo.end }} of {{ paginationInfo.total }} tasks
      </small>
      <div class="d-flex gap-2">
        <b-pagination
          size="sm"
          :perPage="selectedLimit"
          :totalItems="taskStore.filteredTasks.length"
          v-model="currentPage"
        ></b-pagination>
        <b-pagination-dropdown
          :options="perPageOptions"
          v-model="selectedLimit"
        />
      </div>
    </div>

    <!-- Task Details Modal -->
    <div class="modal fade" id="taskDetailsModal" tabindex="-1" ref="taskDetailsModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Task Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" v-if="selectedTask">
            <div class="row">
              <div class="col-md-6">
                <h6>Basic Information</h6>
                <dl class="row">
                  <dt class="col-sm-4">ID:</dt>
                  <dd class="col-sm-8"><code>{{ selectedTask.id }}</code></dd>
                  <dt class="col-sm-4">Type:</dt>
                  <dd class="col-sm-8">{{ formatTaskType(selectedTask.key) }}</dd>
                  <dt class="col-sm-4">Status:</dt>
                  <dd class="col-sm-8">
                    <span :class="getStatusBadgeClass(selectedTask.status)">
                      {{ selectedTask.status.charAt(0).toUpperCase() + selectedTask.status.slice(1) }}
                    </span>
                  </dd>
                  <dt class="col-sm-4">Created:</dt>
                  <dd class="col-sm-8">{{ formatFullDate(selectedTask.created_at) }}</dd>
                  <dt class="col-sm-4">Updated:</dt>
                  <dd class="col-sm-8">{{ formatFullDate(selectedTask.updated_at) }}</dd>
                </dl>
              </div>
              <div class="col-md-6">
                <h6>Parameters</h6>
                <pre class="bg-light p-3 rounded small">{{ JSON.stringify(selectedTask.params, null, 2) }}</pre>
              </div>
            </div>
            <div class="row mt-3" v-if="Object.keys(selectedTask.metadata).length > 0">
              <div class="col-12">
                <h6>Metadata</h6>
                <pre class="bg-light p-3 rounded small">{{ JSON.stringify(selectedTask.metadata, null, 2) }}</pre>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTaskStore } from '@/store/TaskStore'
import QueueStatusWidget from '@/components/tasks/QueueStatusWidget.vue'
import type { Task } from '@/models/Task'

const taskStore = useTaskStore()

// Local state
const searchQuery = ref('')
const statusFilter = ref('')
const taskTypeFilter = ref('')
const selectedTask = ref<Task | null>(null)
const taskDetailsModal = ref<HTMLElement | null>(null)

// Pagination
const perPageOptions = [10, 25, 50, 100]
const currentPage = computed({
    get: () => taskStore.pagination.page,
    set: (value) => taskStore.setPage(value),
})

const selectedLimit = computed({
    get: () => taskStore.pagination.limit,
    set: (value) => taskStore.setLimit(value),
})

// Auto-refresh for active tasks
let refreshInterval: number | null = null

// Computed properties
const hasActiveFilters = computed(() => {
  return searchQuery.value || statusFilter.value || taskTypeFilter.value
})

const paginationInfo = computed(() => {
  const total = taskStore.filteredTasks.length
  const start = (taskStore.pagination.page - 1) * taskStore.pagination.limit + 1
  const end = Math.min(start + taskStore.pagination.limit - 1, total)
  return { start, end, total }
})

// Methods
const refreshTasks = async () => {
  await taskStore.fetchTasks()
}

const performFullSync = async () => {
  if (confirm('Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances.')) {
    const result = await taskStore.performFullSync()
    if (result?.success) {
      alert(`Full sync initiated successfully. Task ID: ${result.task_id}`)
    }
  }
}

const retryFailed = async () => {
  if (confirm('Are you sure you want to retry all failed tasks? This will mark them as pending for re-processing.')) {
    const result = await taskStore.retryFailed()
    if (result?.success) {
      alert(`Retry operation completed. ${result.statistics?.tasks_created || 0} tasks marked for retry.`)
    }
  }
}

const onSearchInput = () => {
  taskStore.setFilter('search_query', searchQuery.value)
}

const onStatusFilterChange = () => {
  taskStore.setFilter('status', statusFilter.value)
}

const onTaskTypeFilterChange = () => {
  taskStore.setFilter('task_type', taskTypeFilter.value)
}

const clearAllFilters = () => {
  searchQuery.value = ''
  statusFilter.value = ''
  taskTypeFilter.value = ''
  taskStore.clearFilters()
}

const showTaskDetails = async (task: Task) => {
  selectedTask.value = task
  const modal = new (window as any).bootstrap.Modal(taskDetailsModal.value)
  modal.show()
}

const confirmDeleteTask = async (task: Task) => {
  if (confirm(`Are you sure you want to delete task ${task.id}? This action cannot be undone.`)) {
    const success = await taskStore.deleteTask(task.id)
    if (success) {
      alert('Task deleted successfully.')
    }
  }
}

const setupAutoRefresh = () => {
  refreshInterval = setInterval(async () => {
    const { pending, processing } = taskStore.taskStatusCounts
    if (pending > 0 || processing > 0) {
      await taskStore.refreshTaskStatus()
    }
  }, 30000)
}

// Utility functions
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

const formatTaskType = (key: string): string => {
  const typeMap: Record<string, string> = {
    'fhir_fetch': 'FHIR Fetch',
    'full_sync': 'Full Sync',
    'retry_failed': 'Retry Failed',
    'archive': 'Archive',
    'cleanup': 'Cleanup'
  }
  return typeMap[key] || key
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

// Lifecycle
onMounted(async () => {
  await refreshTasks()
  // setupAutoRefresh()
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})
</script>

<style scoped>
</style>