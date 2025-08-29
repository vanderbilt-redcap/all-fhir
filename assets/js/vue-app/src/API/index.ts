// /api/settings.ts
import type { AxiosResponse } from 'axios'
import useApiClient from './useApiClient'

export const apiClient = useApiClient()

export const api = {
  getProjectSettings(): Promise<AxiosResponse<any, any>>
 {
    const params = { route: `project-settings` }
    return apiClient.get('', { params })
  },
  updateProjectSettings(payload: any)
 {
    const params = { route: `project-settings` }
    return apiClient.put('', payload, { params })
  },


  listMrns(page?: number, perPage?: number) {
    const params: any = { route: `mrns` }
    if (page) params._page = page
    if (perPage) params._per_page = perPage
    return apiClient.get('', { params })
  },

  addMrn(mrn: string) {
    const params = { route: `mrns` }
    return apiClient.post('', { mrn }, { params })
  },

  removeMrn(mrn: string) {
    const params = { route: `mrns/${mrn}` }
    return apiClient.delete('', { params, data: mrn })
  },

  triggerFetch(mrns: string[], resources: string[]) {
    const params = { route: `trigger-fetch` }
    return apiClient.post('', { mrns, resources }, { params })
  },

  getFetchStatus() {
    const params = { route: `fetch-status` }
    return apiClient.get('', { params })
  },

  createZipArchive(mrns: string[]) {
    const params = { route: `create-zip-archive` }
    return apiClient.post('', { mrns }, { params })
  },

  downloadZip(zipId: string) {
    const params = { route: `download-zip`, zip_id: zipId }
    return apiClient.get('', { params, responseType: 'blob' })
  },

  // Archive management API methods
  listArchives() {
    const params = { route: `archives` }
    return apiClient.get('', { params })
  },

  createArchiveSelected(mrns: string[], options?: any) {
    const params = { route: `archives/selected` }
    const payload: any = { mrns }
    if (options) {
      Object.assign(payload, options)
    }
    return apiClient.post('', payload, { params })
  },

  createArchiveAll(options?: any) {
    const params = { route: `archives/all` }
    const payload = options || {}
    return apiClient.post('', payload, { params })
  },

  downloadArchive(archiveId: string) {
    const params = { route: `archives/${archiveId}/download` }
    return apiClient.get('', { params, responseType: 'blob' })
  },

  deleteArchive(archiveId: string) {
    const params = { route: `archives/${archiveId}` }
    return apiClient.delete('', { params })
  },

  // Enhanced MRN and resource management
  getMrnResources(mrn: string) {
    const params = { route: `mrns/${mrn}/resources` }
    return apiClient.get('', { params })
  },

  getProjectSummary() {
    const params = { route: `project-summary` }
    return apiClient.get('', { params })
  },

  triggerFetchMrns(mrns: string[], resources?: string[]) {
    const params = { route: `trigger-fetch` }
    const payload: any = { mrns }
    if (resources && resources.length > 0) {
      payload.resources = resources
    }
    return apiClient.post('', payload, { params })
  },

  performFullSync() {
    const params = { route: `perform-full-sync` }
    return apiClient.post('', {}, { params })
  },

  retryFailedResource(mrn: string, resourceType: string, repeatInstance: number) {
    const params = { route: `retry-failed` }
    return apiClient.post('', {
      mrn,
      resource_type: resourceType,
      repeat_instance: repeatInstance,
      bulk: false
    }, { params })
  },

  bulkRetryFailed(resourceType?: string) {
    const params = { route: `retry-failed` }
    const payload: any = { bulk: true }
    if (resourceType) {
      payload.resource_type = resourceType
    }
    return apiClient.post('', payload, { params })
  },

  retryFailed(options: { 
    record_ids?: number[], 
    mrn?: string, 
    resource_type?: string, 
    repeat_instance?: number,
    bulk?: boolean 
  }) {
    const params = { route: `retry-failed` }
    return apiClient.post('', options, { params })
  },

  // Task management API methods
  listTasks(page?: number, limit?: number, filters?: any) {
    const params: any = { route: `tasks` }
    if (page) params.page = page
    if (limit) params.limit = limit
    if (filters) {
      Object.assign(params, filters)
    }
    return apiClient.get('', { params })
  },

  getTaskDetails(taskId: string) {
    const params = { route: `tasks/${taskId}` }
    return apiClient.get('', { params })
  },

  performTaskFullSync() {
    const params = { route: `tasks/full-sync` }
    return apiClient.post('', {}, { params })
  },

  retryFailedResources(filters?: { record_ids?: number[], resource_type?: string }) {
    const params = { route: `tasks/retry-failed` }
    const payload = filters ? { filters } : {}
    return apiClient.post('', payload, { params })
  },

  deleteTask(taskId: string) {
    const params = { route: `tasks/${taskId}` }
    return apiClient.delete('', { params })
  },

  getQueueStatistics() {
    const params = { route: `tasks/stats` }
    return apiClient.get('', { params })
  },

  cleanupCompletedTasks() {
    const params = { route: `tasks/cleanup` }
    return apiClient.post('', {}, { params })
  }
}
