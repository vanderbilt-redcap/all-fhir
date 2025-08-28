import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useErrorsStore } from './ErrorsStore'
import type { 
  Task, 
  TaskListResponse,
  TaskOperationResponse, 
  TaskDetailsResponse,
  TaskFilterState,
  PaginationInfo
} from '@/models/Task'
import { api } from '@/API'

export const useTaskStore = defineStore('task', () => {
  const errorsStore = useErrorsStore()

  // State
  const loading = ref(false)
  const tasks = ref<Task[]>([])
  const operationLoading = ref(false)
  
  // Pagination state
  const pagination = ref<PaginationInfo>({
    page: 1,
    limit: 25,
    total: 0,
    total_pages: 0,
    has_next: false,
    has_previous: false,
  })

  // Filter state
  const filters = ref<TaskFilterState>({
    status: '',
    task_type: '',
    search_query: ''
  })

  // Computed properties
  const filteredTasks = computed(() => {
    let filtered = tasks.value

    // Filter by status
    if (filters.value.status) {
      filtered = filtered.filter(task => task.status === filters.value.status)
    }

    // Filter by task type (key)
    if (filters.value.task_type) {
      filtered = filtered.filter(task => task.key === filters.value.task_type)
    }

    // Filter by search query (ID or key)
    if (filters.value.search_query) {
      const query = filters.value.search_query.toLowerCase()
      filtered = filtered.filter(task => 
        task.id.toLowerCase().includes(query) ||
        task.key.toLowerCase().includes(query)
      )
    }

    return filtered
  })

  const paginatedTasks = computed(() => {
    const startIndex = (pagination.value.page - 1) * pagination.value.limit
    const endIndex = startIndex + pagination.value.limit
    const filtered = filteredTasks.value
    
    // Update pagination totals based on filtered results
    pagination.value.total = filtered.length
    pagination.value.total_pages = Math.ceil(filtered.length / pagination.value.limit)
    pagination.value.has_next = pagination.value.page < pagination.value.total_pages
    pagination.value.has_previous = pagination.value.page > 1

    return filtered.slice(startIndex, endIndex)
  })

  const pendingTasks = computed(() => 
    tasks.value.filter(task => task.status === 'pending')
  )

  const processingTasks = computed(() => 
    tasks.value.filter(task => task.status === 'processing')
  )

  const completedTasks = computed(() =>
    tasks.value.filter(task => task.status === 'completed')
  )

  const failedTasks = computed(() =>
    tasks.value.filter(task => task.status === 'failed')
  )

  const taskStatusCounts = computed(() => ({
    total: tasks.value.length,
    pending: pendingTasks.value.length,
    processing: processingTasks.value.length,
    completed: completedTasks.value.length,
    failed: failedTasks.value.length
  }))

  // Actions
  const fetchTasks = async () => {
    try {
      loading.value = true
      const response = await api.listTasks(
        pagination.value.page,
        pagination.value.limit,
        filters.value
      )
      
      const data: TaskListResponse = response.data
      
      if (data.success) {
        tasks.value = data.tasks || []
        if (data.pagination) {
          pagination.value = { ...pagination.value, ...data.pagination }
        }
      } else {
        errorsStore.addError({
          message: data.message || 'Failed to fetch tasks',
          source: 'TaskStore.fetchTasks',
          timestamp: new Date()
        })
      }
    } catch (err) {
      errorsStore.addError({
        message: `Failed to fetch tasks: ${err}`,
        source: 'TaskStore.fetchTasks',
        timestamp: new Date()
      })
    } finally {
      loading.value = false
    }
  }

  const performFullSync = async (): Promise<TaskOperationResponse | null> => {
    try {
      operationLoading.value = true
      const response = await api.performTaskFullSync()
      
      const data: TaskOperationResponse = response.data
      
      if (data.success) {
        // Refresh tasks list to include the new full sync task
        await fetchTasks()
        return data
      } else {
        errorsStore.addError({
          message: data.message || 'Failed to perform full sync',
          source: 'TaskStore.performFullSync',
          timestamp: new Date()
        })
        return data
      }
    } catch (err) {
      errorsStore.addError({
        message: `Failed to perform full sync: ${err}`,
        source: 'TaskStore.performFullSync',
        timestamp: new Date()
      })
      return null
    } finally {
      operationLoading.value = false
    }
  }

  const retryFailed = async (): Promise<TaskOperationResponse | null> => {
    try {
      operationLoading.value = true
      const response = await api.retryFailedTasks()
      
      const data: TaskOperationResponse = response.data
      
      if (data.success) {
        // Refresh tasks list to reflect status changes
        await fetchTasks()
        return data
      } else {
        errorsStore.addError({
          message: data.message || 'Failed to retry failed tasks',
          source: 'TaskStore.retryFailed',
          timestamp: new Date()
        })
        return data
      }
    } catch (err) {
      errorsStore.addError({
        message: `Failed to retry failed tasks: ${err}`,
        source: 'TaskStore.retryFailed',
        timestamp: new Date()
      })
      return null
    } finally {
      operationLoading.value = false
    }
  }

  const getTaskDetails = async (taskId: string): Promise<TaskDetailsResponse | null> => {
    try {
      const response = await api.getTaskDetails(taskId)
      
      const data: TaskDetailsResponse = response.data
      
      if (!data.success) {
        errorsStore.addError({
          message: data.message || 'Failed to get task details',
          source: 'TaskStore.getTaskDetails',
          timestamp: new Date()
        })
      }
      
      return data
    } catch (err) {
      errorsStore.addError({
        message: `Failed to get task details: ${err}`,
        source: 'TaskStore.getTaskDetails',
        timestamp: new Date()
      })
      return null
    }
  }

  const deleteTask = async (taskId: string): Promise<boolean> => {
    try {
      operationLoading.value = true
      const response = await api.deleteTask(taskId)
      
      if (response.data.success) {
        // Remove task from local state
        const index = tasks.value.findIndex(task => task.id === taskId)
        if (index !== -1) {
          tasks.value.splice(index, 1)
        }
        return true
      } else {
        errorsStore.addError({
          message: response.data.message || 'Failed to delete task',
          source: 'TaskStore.deleteTask',
          timestamp: new Date()
        })
        return false
      }
    } catch (err) {
      errorsStore.addError({
        message: `Failed to delete task: ${err}`,
        source: 'TaskStore.deleteTask',
        timestamp: new Date()
      })
      return false
    } finally {
      operationLoading.value = false
    }
  }

  const refreshTaskStatus = async (taskId?: string) => {
    // If specific task ID provided, we could add individual refresh logic
    // For now, refresh all tasks
    await fetchTasks()
  }

  const setPage = (page: number) => {
    if (page >= 1 && page <= pagination.value.total_pages) {
      pagination.value.page = page
    }
  }

  const setLimit = (limit: number) => {
    pagination.value.limit = limit
    pagination.value.page = 1 // Reset to first page when changing limit
  }

  const setFilter = (filterType: keyof TaskFilterState, value: string) => {
    filters.value[filterType] = value
    pagination.value.page = 1 // Reset to first page when filtering
  }

  const clearFilters = () => {
    filters.value.status = ''
    filters.value.task_type = ''
    filters.value.search_query = ''
    pagination.value.page = 1
  }

  return {
    // State
    loading,
    tasks,
    operationLoading,
    pagination,
    filters,

    // Computed
    filteredTasks,
    paginatedTasks,
    pendingTasks,
    processingTasks,
    completedTasks,
    failedTasks,
    taskStatusCounts,

    // Actions
    fetchTasks,
    performFullSync,
    retryFailed,
    getTaskDetails,
    deleteTask,
    refreshTaskStatus,
    setPage,
    setLimit,
    setFilter,
    clearFilters
  }
})