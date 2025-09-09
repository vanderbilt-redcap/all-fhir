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
  updateFhirSystem(fhirSystemId: number | null) {
    const params = { route: `project-settings/fhir-system` }
    return apiClient.put('', { fhir_system: fhirSystemId }, { params })
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

  addMrns(mrns: string[]) {
    const params = { route: `mrns` }
    return apiClient.post('', { mrns }, { params })
  },

  addMrn(mrn: string) {
    const params = { route: `mrns` }
    // Route is bulk-capable; standardize to array payload
    return apiClient.post('', { mrns: [mrn] }, { params })
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
  },

  // Streaming archive API methods
  streamSelectedArchive(mrns: string[], options?: any) {
    const params = { route: 'archives/stream/selected' }
    const payload = { mrns, ...options }
    return apiClient.post('', payload, { 
      params, 
      responseType: 'blob',
      timeout: 0 // No timeout for streaming
    })
  },

  streamAllArchive(options?: any) {
    const params = { route: 'archives/stream/all' }  
    return apiClient.post('', options || {}, { 
      params, 
      responseType: 'blob',
      timeout: 0 
    })
  },

  // Resource content viewing API method
  getResourceContent(recordId: string, resourceName: string, repeatInstance: number, previewLimit?: number) {
    const params: any = { route: `records/${recordId}/resources/${resourceName}/content/${repeatInstance}` }
    if (previewLimit) {
      params.preview_limit = previewLimit
    }
    return apiClient.get('', { params })
  },
 
  // FHIR access status
  getFhirAccessStatus() {
    const params = { route: `fhir-access/status` }
    return apiClient.get('', { params })
  },

  // Mapping resources (route-based management)
  listMappingResources() {
    const params = { route: `mapping-resources` }
    return apiClient.get('', { params })
  },
  createMappingResource(resource: { name: string; resourceSpec: string; type: 'predefined' | 'custom' }) {
    const params = { route: `mapping-resources` }
    return apiClient.post('', resource, { params })
  },
  updateMappingResource(id: string, payload: Partial<{ name: string; resourceSpec: string }>) {
    const params = { route: `mapping-resources/${id}` }
    return apiClient.put('', payload, { params })
  },
  softDeleteMappingResource(id: string) {
    const params = { route: `mapping-resources/${id}/soft-delete` }
    return apiClient.post('', {}, { params })
  },
  restoreMappingResource(id: string) {
    const params = { route: `mapping-resources/${id}/restore` }
    return apiClient.post('', {}, { params })
  },
  purgeDeletedMappingResource(id: string) {
    const params = { route: `mapping-resources/${id}/purge-deleted` }
    return apiClient.post('', {}, { params })
  },
  deleteMappingResource(id: string) {
    const params = { route: `mapping-resources/${id}` }
    return apiClient.delete('', { params })
  },
  importMappingResources(payload: { version: string; mode: 'merge'|'replace'; items: any[] }) {
    const params = { route: `mapping-resources/import` }
    return apiClient.post('', payload, { params })
  }
}
