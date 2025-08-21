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
  }
}
