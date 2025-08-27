import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useErrorsStore } from './ErrorsStore'
import type { 
  Archive, 
  ArchiveCreateOptions, 
  ArchiveCreateResponse, 
  ArchiveDeleteResponse, 
  ArchiveListResponse 
} from '@/models/Archive'
import { api } from '@/API'

export const useArchiveStore = defineStore('archive', () => {
  const errorsStore = useErrorsStore()

  // State
  const loading = ref(false)
  const archives = ref<Archive[]>([])
  const operationLoading = ref(false)
  
  // Pagination state
  const pagination = ref({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrevious: false,
    perPageOptions: [10, 25, 50, 100],
  })

  // Filter state
  const filters = ref({
    status: '' as string,
    searchQuery: '',
    processingMode: '' as string
  })

  // Computed properties
  const filteredArchives = computed(() => {
    let filtered = archives.value

    // Filter by status
    if (filters.value.status) {
      filtered = filtered.filter(archive => archive.status === filters.value.status)
    }

    // Filter by processing mode
    if (filters.value.processingMode) {
      filtered = filtered.filter(archive => archive.processing_mode === filters.value.processingMode)
    }

    // Filter by search query (archive name or ID)
    if (filters.value.searchQuery) {
      const query = filters.value.searchQuery.toLowerCase()
      filtered = filtered.filter(archive => 
        archive.file_name.toLowerCase().includes(query) ||
        archive.archive_id.toLowerCase().includes(query)
      )
    }

    return filtered
  })

  const paginatedArchives = computed(() => {
    const startIndex = (pagination.value.page - 1) * pagination.value.limit
    const endIndex = startIndex + pagination.value.limit
    const filtered = filteredArchives.value
    
    // Update pagination totals based on filtered results
    pagination.value.total = filtered.length
    pagination.value.totalPages = Math.ceil(filtered.length / pagination.value.limit)
    pagination.value.hasNext = pagination.value.page < pagination.value.totalPages
    pagination.value.hasPrevious = pagination.value.page > 1

    return filtered.slice(startIndex, endIndex)
  })

  const pendingArchives = computed(() => 
    archives.value.filter(archive => 
      archive.status === 'pending' || archive.status === 'processing'
    )
  )

  const completedArchives = computed(() =>
    archives.value.filter(archive => archive.status === 'completed')
  )

  // Actions
  const fetchArchives = async () => {
    try {
      loading.value = true
      const response = await api.listArchives()
      
      if (response.data.success) {
        archives.value = response.data.archives || []
        pagination.value.total = response.data.total_count || 0
      } else {
        errorsStore.addError({
          message: response.data.message || 'Failed to fetch archives',
          source: 'ArchiveStore.fetchArchives',
          timestamp: new Date()
        })
      }
    } catch (err) {
      errorsStore.addError({
        message: `Failed to fetch archives: ${err}`,
        source: 'ArchiveStore.fetchArchives',
        timestamp: new Date()
      })
    } finally {
      loading.value = false
    }
  }

  const createArchiveSelected = async (mrns: string[], options: ArchiveCreateOptions = {}): Promise<ArchiveCreateResponse | null> => {
    try {
      operationLoading.value = true
      const response = await api.createArchiveSelected(mrns, options)
      
      if (response.data.success) {
        // Refresh archives list to include the new archive
        await fetchArchives()
        return response.data
      } else {
        errorsStore.addError({
          message: response.data.message || 'Failed to create archive for selected MRNs',
          source: 'ArchiveStore.createArchiveSelected',
          timestamp: new Date()
        })
        return response.data
      }
    } catch (err) {
      errorsStore.addError({
        message: `Failed to create archive for selected MRNs: ${err}`,
        source: 'ArchiveStore.createArchiveSelected',
        timestamp: new Date()
      })
      return null
    } finally {
      operationLoading.value = false
    }
  }

  const createArchiveAll = async (options: ArchiveCreateOptions = {}): Promise<ArchiveCreateResponse | null> => {
    try {
      operationLoading.value = true
      const response = await api.createArchiveAll(options)
      
      if (response.data.success) {
        // Refresh archives list to include the new archive
        await fetchArchives()
        return response.data
      } else {
        errorsStore.addError({
          message: response.data.message || 'Failed to create archive for all resources',
          source: 'ArchiveStore.createArchiveAll',
          timestamp: new Date()
        })
        return response.data
      }
    } catch (err) {
      errorsStore.addError({
        message: `Failed to create archive for all resources: ${err}`,
        source: 'ArchiveStore.createArchiveAll',
        timestamp: new Date()
      })
      return null
    } finally {
      operationLoading.value = false
    }
  }

  const downloadArchive = async (archiveId: string) => {
    try {
      const response = await api.downloadArchive(archiveId)
      
      // Create download link
      const blob = new Blob([response.data], { type: 'application/zip' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      
      // Get archive info for filename
      const archive = archives.value.find(a => a.archive_id === archiveId)
      const filename = archive?.file_name || `archive_${archiveId}.zip`
      
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      
    } catch (err) {
      errorsStore.addError({
        message: `Failed to download archive: ${err}`,
        source: 'ArchiveStore.downloadArchive',
        timestamp: new Date()
      })
    }
  }

  const deleteArchive = async (archiveId: string): Promise<ArchiveDeleteResponse | null> => {
    try {
      operationLoading.value = true
      const response = await api.deleteArchive(archiveId)
      
      if (response.data.success) {
        // Remove archive from local state
        const index = archives.value.findIndex(a => a.archive_id === archiveId)
        if (index !== -1) {
          archives.value.splice(index, 1)
        }
        return response.data
      } else {
        errorsStore.addError({
          message: response.data.message || 'Failed to delete archive',
          source: 'ArchiveStore.deleteArchive',
          timestamp: new Date()
        })
        return response.data
      }
    } catch (err) {
      errorsStore.addError({
        message: `Failed to delete archive: ${err}`,
        source: 'ArchiveStore.deleteArchive',
        timestamp: new Date()
      })
      return null
    } finally {
      operationLoading.value = false
    }
  }

  const refreshArchiveStatus = async (archiveId?: string) => {
    // If specific archive ID provided, we could add individual refresh logic
    // For now, refresh all archives
    await fetchArchives()
  }

  const setPage = (page: number) => {
    if (page >= 1 && page <= pagination.value.totalPages) {
      pagination.value.page = page
    }
  }

  const setLimit = (limit: number) => {
    pagination.value.limit = limit
    pagination.value.page = 1 // Reset to first page when changing limit
  }

  const setFilter = (filterType: keyof typeof filters.value, value: string) => {
    filters.value[filterType] = value
    pagination.value.page = 1 // Reset to first page when filtering
  }

  const clearFilters = () => {
    filters.value.status = ''
    filters.value.searchQuery = ''
    filters.value.processingMode = ''
    pagination.value.page = 1
  }

  return {
    // State
    loading,
    archives,
    operationLoading,
    pagination,
    filters,

    // Computed
    filteredArchives,
    paginatedArchives,
    pendingArchives,
    completedArchives,

    // Actions
    fetchArchives,
    createArchiveSelected,
    createArchiveAll,
    downloadArchive,
    deleteArchive,
    refreshArchiveStatus,
    setPage,
    setLimit,
    setFilter,
    clearFilters
  }
})