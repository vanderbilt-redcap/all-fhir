import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useErrorsStore } from './ErrorsStore'
import type { Mrn, ProjectSummary, ArchiveButtonConfig, ProgressBarConfig, ResourceTypeStatus, BulkAddResult } from '@/models/Mrn'
import { FetchStatus } from '@/models/Mrn'
import { api } from '@/API'

export const useMonitorStore = defineStore('monitor', () => {
  const errorsStore = useErrorsStore()

  const loading = ref(false)
  const mrns = ref<Mrn[]>([])
  const selectedMrns = ref<number[]>([])
  const projectSummary = ref<ProjectSummary | null>(null)
  const operationLoading = ref(false)
  
  // Pagination state
  const pagination = ref({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrevious: false,
    perPageOptions: [10, 25, 50, 100, 250],
  })

  const fetchMrns = async () => {
    try {
      loading.value = true
      const response = await api.listMrns(pagination.value.page, pagination.value.limit)
      
      // Handle paginated response structure with project summary
      if (response.data.data && response.data.pagination) {
        mrns.value = response.data.data
        pagination.value.total = response.data.pagination.total
        pagination.value.totalPages = response.data.pagination.total_pages
        pagination.value.hasNext = response.data.pagination.has_next
        pagination.value.hasPrevious = response.data.pagination.has_previous
        
        // Update project summary if included
        if (response.data.project_summary) {
          projectSummary.value = response.data.project_summary
        }
      } else {
        // Fallback for non-paginated response
        mrns.value = response.data
      }
      
      selectedMrns.value = [] // Reset selection on new fetch
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to load MRNs:', err)
      mrns.value = []
    } finally {
      loading.value = false
    }
  }

  const parseMrnsFromInput = (input: string): string[] => {
    return Array.from(new Set(
      (input || '')
        .split(/[\s,]+/)
        .map(s => s.trim())
        .filter(Boolean)
    ))
  }

  const addMrns = async (mrnList: string[]): Promise<BulkAddResult> => {
    try {
      operationLoading.value = true
      const response = await api.addMrns(mrnList)
      await fetchMrns()
      return response.data as BulkAddResult
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to add MRNs:', err)
      throw err
    } finally {
      operationLoading.value = false
    }
  }

  const addMrnsFromString = async (input: string): Promise<BulkAddResult> => {
    const list = parseMrnsFromInput(input)
    if (list.length === 0) {
      throw new Error('No MRNs provided')
    }
    return await addMrns(list)
  }

  const addMrn = async (mrn: string): Promise<BulkAddResult> => {
    return await addMrns([mrn])
  }

  const fetchMrn = async (id: number) => {
    try {
      // This should be updated to use a real API endpoint
      // const updatedMrn = await fetchMrnApi(id)
      // const index = mrns.value.findIndex(m => m.id === id)
      // if (index !== -1) {
      //   mrns.value[index] = updatedMrn
      // }
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error(`Failed to fetch MRN ${id}:`, err)
    }
  }

  const fetchSelected = async () => {
    try {
      loading.value = true
      // In a real implementation, this would be a single API call
      for (const id of selectedMrns.value) {
        await fetchMrn(id)
      }
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to fetch selected MRNs:', err)
    } finally {
      loading.value = false
    }
  }


  const allSelected = computed(() => {
    return mrns.value.length > 0 && selectedMrns.value.length === mrns.value.length
  })

  const indeterminate = computed(() => {
    return selectedMrns.value.length > 0 && selectedMrns.value.length < mrns.value.length
  })

  const toggleSelectAll = () => {
    if (allSelected.value) {
      selectedMrns.value = []
    } else {
      selectedMrns.value = mrns.value.map(item => item.id)
    }
  }

  const toggleSelection = (id: number) => {
    const index = selectedMrns.value.indexOf(id)
    if (index === -1) {
      selectedMrns.value.push(id)
    } else {
      selectedMrns.value.splice(index, 1)
    }
  }

  // Pagination methods
  const setPage = (newPage: number) => {
    pagination.value.page = newPage
    fetchMrns()
  }

  const setLimit = (newLimit: number) => {
    pagination.value.limit = newLimit
    pagination.value.page = 1 // Reset to first page when changing limit
    fetchMrns()
  }

  // Enhanced resource management methods
  const getResourceStatus = async (mrn: string) => {
    try {
      const response = await api.getMrnResources(mrn)
      return response.data
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error(`Failed to get resource status for MRN ${mrn}:`, err)
      return { mrn, resources: [], total_resources: 0 }
    }
  }

  const getProjectSummary = async () => {
    try {
      const response = await api.getProjectSummary()
      projectSummary.value = response.data
      return response.data
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to get project summary:', err)
      return null
    }
  }

  const triggerFetchMrns = async (mrnList: string[], resourceTypes?: string[]) => {
    try {
      operationLoading.value = true
      const response = await api.triggerFetchMrns(mrnList, resourceTypes)
      
      // Refresh data after triggering fetch
      await fetchMrns()
      
      return response.data
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to trigger fetch:', err)
      throw err
    } finally {
      operationLoading.value = false
    }
  }

  const triggerFetchSelected = async (resourceTypes?: string[]) => {
    const selectedMrnStrings = mrns.value
      .filter(mrn => selectedMrns.value.includes(mrn.id))
      .map(mrn => mrn.mrn)
    
    if (selectedMrnStrings.length === 0) {
      throw new Error('No MRNs selected')
    }
    
    return await triggerFetchMrns(selectedMrnStrings, resourceTypes)
  }

  const performFullSync = async () => {
    try {
      operationLoading.value = true
      const response = await api.performFullSync()
      
      // Refresh data after sync
      await fetchMrns()
      await getProjectSummary()
      
      return response.data
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to perform full sync:', err)
      throw err
    } finally {
      operationLoading.value = false
    }
  }

  const retryFailedResource = async (mrn: string, resourceType: string, repeatInstance: number) => {
    try {
      const response = await api.retryFailedResource(mrn, resourceType, repeatInstance)
      
      // Refresh the specific MRN's data
      await fetchMrns()
      
      return response.data
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to retry resource:', err)
      throw err
    }
  }

  const bulkRetryFailed = async (resourceType?: string) => {
    try {
      operationLoading.value = true
      const response = await api.bulkRetryFailed(resourceType)
      
      // Refresh data after bulk retry
      await fetchMrns()
      
      return response.data
    } catch (err) {
      errorsStore.addError(err as Error, 'monitorStore')
      console.error('Failed to bulk retry failed resources:', err)
      throw err
    } finally {
      operationLoading.value = false
    }
  }

  // Enhanced status interpretation methods
  const getSmartStatusDisplay = (mrn: Mrn): string => {
    if (mrn.status_summary) {
      return mrn.status_summary.smart_status_display
    }
    
    // Fallback calculation when backend doesn't provide status_summary
    const nonDeletedResources = mrn.resources.filter(r => r.status !== FetchStatus.Deleted)
    const totalResources = nonDeletedResources.length
    const completedResources = nonDeletedResources.filter(r => r.status === FetchStatus.Completed).length
    
    if (totalResources === 0) return 'No Resources'
    if (completedResources === totalResources) return 'Completed'
    
    const completionPercentage = (completedResources / totalResources) * 100
    if (completionPercentage >= 75) return `Mostly Completed (${Math.round(completionPercentage)}%)`
    if (completionPercentage >= 25) return `Mixed Progress (${Math.round(completionPercentage)}%)`
    if (completionPercentage > 0) return `Starting (${Math.round(completionPercentage)}%)`
    
    // Use dominant status as fallback
    const statusCounts: Record<string, number> = {}
    nonDeletedResources.forEach(r => {
      statusCounts[r.status] = (statusCounts[r.status] || 0) + 1
    })
    
    const dominantStatus = Object.keys(statusCounts).reduce((a, b) => statusCounts[a] > statusCounts[b] ? a : b, FetchStatus.Pending)
    return dominantStatus
  }

  const getStatusForStyling = (mrn: Mrn): FetchStatus => {
    if (mrn.status_summary) {
      return mrn.status_summary.overall_status as FetchStatus
    }
    
    // Fallback: calculate dominant status
    const nonDeletedResources = mrn.resources.filter(r => r.status !== FetchStatus.Deleted)
    if (nonDeletedResources.length === 0) return FetchStatus.Pending
    
    const statusCounts: Record<string, number> = {}
    nonDeletedResources.forEach(r => {
      statusCounts[r.status] = (statusCounts[r.status] || 0) + 1
    })
    
    return Object.keys(statusCounts).reduce((a, b) => statusCounts[a] > statusCounts[b] ? a : b, FetchStatus.Pending) as FetchStatus
  }

  const getArchiveButtonConfig = (mrn: Mrn): ArchiveButtonConfig => {
    if (mrn.status_summary) {
      return mrn.status_summary.archive_button_config
    }
    
    // Fallback calculation
    const nonDeletedResources = mrn.resources.filter(r => r.status !== FetchStatus.Deleted)
    const completedCount = nonDeletedResources.filter(r => r.status === FetchStatus.Completed).length
    const totalCount = nonDeletedResources.length
    
    if (completedCount === 0) {
      return {
        variant: 'secondary',
        disabled: true,
        tooltip: 'No completed resources to archive',
        text: 'Archive'
      }
    }
    
    if (completedCount === totalCount) {
      return {
        variant: 'success',
        disabled: false,
        tooltip: `Archive all ${completedCount} completed resources`,
        text: 'Archive All'
      }
    }
    
    return {
      variant: 'outline-success',
      disabled: false,
      tooltip: `Archive ${completedCount} of ${totalCount} completed resources`,
      text: 'Archive Available'
    }
  }

  const hasArchivableResources = (mrn: Mrn): boolean => {
    if (mrn.status_summary) {
      return mrn.status_summary.has_archivable_resources
    }
    
    // Fallback calculation
    return mrn.resources.some(r => r.status === FetchStatus.Completed)
  }

  const getProgressBarConfig = (mrn: Mrn): ProgressBarConfig => {
    if (mrn.status_summary) {
      return mrn.status_summary.progress_bar_config
    }
    
    // Fallback calculation
    const nonDeletedResources = mrn.resources.filter(r => r.status !== FetchStatus.Deleted)
    const total = nonDeletedResources.length
    
    if (total === 0) {
      return { segments: [], completion_percentage: 0, total_resources: 0 }
    }
    
    const statusCounts: Record<string, number> = {}
    nonDeletedResources.forEach(r => {
      statusCounts[r.status] = (statusCounts[r.status] || 0) + 1
    })
    
    const segments = Object.entries(statusCounts).map(([status, count]) => ({
      status: status as FetchStatus,
      count,
      percentage: Math.round((count / total) * 100 * 10) / 10,
      color: getStatusColor(status as FetchStatus)
    }))
    
    const completedCount = statusCounts[FetchStatus.Completed] || 0
    
    return {
      segments,
      completion_percentage: Math.round((completedCount / total) * 100 * 10) / 10,
      total_resources: total
    }
  }

  const getAvailableResourceTypesForArchive = (mrn: Mrn): string[] => {
    if (mrn.status_summary) {
      return mrn.status_summary.available_resource_types
    }
    
    // Fallback calculation
    const availableTypes = new Set<string>()
    mrn.resources
      .filter(r => r.status === FetchStatus.Completed)
      .forEach(r => availableTypes.add(r.name))
    
    return Array.from(availableTypes).sort()
  }

  const getResourceTypeStatus = (mrn: Mrn, resourceType: string): ResourceTypeStatus | null => {
    if (mrn.status_summary?.resource_type_statuses[resourceType]) {
      return mrn.status_summary.resource_type_statuses[resourceType]
    }
    
    // Fallback calculation
    const typeResources = mrn.resources.filter(r => 
      r.name === resourceType && r.status !== FetchStatus.Deleted
    )
    
    if (typeResources.length === 0) return null
    
    const statusCounts = typeResources.reduce((acc, r) => {
      acc[r.status] = (acc[r.status] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    const completedCount = statusCounts[FetchStatus.Completed] || 0
    const totalCount = typeResources.length
    
    return {
      total_count: totalCount,
      completed_count: completedCount,
      failed_count: statusCounts[FetchStatus.Failed] || 0,
      pending_count: statusCounts[FetchStatus.Pending] || 0,
      fetching_count: statusCounts[FetchStatus.Fetching] || 0,
      outdated_count: statusCounts[FetchStatus.Outdated] || 0,
      has_completed: completedCount > 0,
      completion_percentage: totalCount > 0 ? (completedCount / totalCount) * 100 : 0,
      is_archivable: completedCount > 0
    }
  }

  const getStatusColor = (status: FetchStatus): string => {
    switch (status) {
      case FetchStatus.Completed: return 'success'
      case FetchStatus.Failed: return 'danger'
      case FetchStatus.Fetching: return 'info'
      case FetchStatus.Pending: return 'warning'
      case FetchStatus.Outdated: return 'secondary'
      case FetchStatus.Deleted: return 'dark'
      default: return 'secondary'
    }
  }


  return {
    // State
    loading,
    mrns,
    selectedMrns,
    projectSummary,
    operationLoading,
    pagination,
    
    // Computed
    allSelected,
    indeterminate,
    
    // Basic methods
    fetchMrns,
    addMrn,
    addMrns,
    addMrnsFromString,
    parseMrnsFromInput,
    fetchMrn,
    fetchSelected,
    toggleSelectAll,
    toggleSelection,
    setPage,
    setLimit,
    
    // Enhanced resource management
    getResourceStatus,
    getProjectSummary,
    triggerFetchMrns,
    triggerFetchSelected,
    performFullSync,
    retryFailedResource,
    bulkRetryFailed,
    
    // Enhanced status methods
    getSmartStatusDisplay,
    getStatusForStyling,
    getArchiveButtonConfig,
    hasArchivableResources,
    getProgressBarConfig,
    getAvailableResourceTypesForArchive,
    getResourceTypeStatus,
    getStatusColor,
    
  }
})
