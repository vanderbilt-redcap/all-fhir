// /api/settings.ts
import useApiClient from './useApiClient'

export const apiClient = useApiClient()

export const api = {
  getAvailableFhirSystems() {
    const params = { route: `get-available-fhir-systems` }
    return apiClient.get('', { params })
  },

  getAvailableResourceTypes() {
    const params = { route: `get-available-resource-types` }
    return apiClient.get('', { params })
  },

  listMrns() {
    const params = { route: `list-mrns` }
    return apiClient.get('', { params })
  },

  addMrn(mrn: string) {
    const params = { route: `add-mrn` }
    return apiClient.post('', { mrn }, { params })
  },

  removeMrn(mrn: string) {
    const params = { route: `remove-mrn/${mrn}` }
    return apiClient.delete('', { params, data: mrn })
  },

  triggerFetch(mrns: string[], resources: string[]) {
    const params = { route: `trigger-fetch` }
    return apiClient.post('', { mrns, resources }, { params })
  },

  getFetchStatus() {
    const params = { route: `get-fetch-status` }
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
