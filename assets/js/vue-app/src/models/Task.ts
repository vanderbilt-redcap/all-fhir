export interface Task {
  id: string
  key: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  created_at: string
  updated_at: string
  params: Record<string, any>
  metadata: Record<string, any>
}

export interface TaskListResponse {
  success: boolean
  tasks: Task[]
  pagination: PaginationInfo
  filters?: TaskFilterState
  message?: string
}

export interface TaskOperationResponse {
  success: boolean
  task_id?: string
  statistics?: TaskOperationStatistics
  message: string
}

export interface TaskDetailsResponse {
  success: boolean
  task?: Task
  metadata?: Record<string, any>
  message?: string
}

export interface PaginationInfo {
  page: number
  limit: number
  total: number
  total_pages: number
  has_next: boolean
  has_previous: boolean
}

export interface TaskFilterState {
  status: string
  task_type: string
  date_range?: string
  search_query: string
}

export interface TaskOperationStatistics {
  tasks_created?: number
  tasks_completed?: number
  tasks_failed?: number
  resources_processed?: number
  duration_seconds?: number
  [key: string]: any
}

export type TaskStatus = Task['status']
export type TaskKey = string