import useApiClient from "./useApiClient";

const apiClient = useApiClient()

const fhirSnapshotApi = {

  // Setup page: FHIR systems and resource types
  getAvailableFhirSystems() {
    const params = { route: 'FhirSnapshotController:getAvailableFhirSystems' };
    return apiClient.get('', { params });
  },

  getAvailableResourceTypes(projectId: number) {
    const params = {
      route: 'FhirSnapshotController:getAvailableResourceTypes',
      project_id: projectId,
    };
    return apiClient.get('', { params });
  },

  // Monitor page: manage MRNs
  listMrns(projectId: number) {
    const params = {
      route: 'FhirSnapshotController:listMrns',
      project_id: projectId,
    };
    return apiClient.get('', { params });
  },

  addMrn(projectId: number, mrn: string) {
    const params = { route: 'FhirSnapshotController:addMrn' };
    return apiClient.post('', { project_id: projectId, mrn }, { params });
  },

  removeMrn(projectId: number, mrn: string) {
    const params = { route: 'FhirSnapshotController:removeMrn' };
    return apiClient.post('', { project_id: projectId, mrn }, { params });
  },

  // Trigger FHIR resource fetch
  triggerFetch(projectId: number, mrns: string[], resources: string[]) {
    const params = { route: 'FhirSnapshotController:triggerFetch' };
    return apiClient.post(
      '',
      { project_id: projectId, mrns, resources },
      { params }
    );
  },

  // Fetch status and error tracking
  getFetchStatus(projectId: number) {
    const params = {
      route: 'FhirSnapshotController:getFetchStatus',
      project_id: projectId,
    };
    return apiClient.get('', { params });
  },

  // Package downloaded payloads
  createZipArchive(projectId: number, mrns: string[]) {
    const params = { route: 'FhirSnapshotController:createZipArchive' };
    return apiClient.post('', { project_id: projectId, mrns }, { params });
  },

  downloadZip(zipId: string) {
    const params = {
      route: 'FhirSnapshotController:downloadZip',
      zip_id: zipId,
    };
    return apiClient.get('', { params, responseType: 'blob' });
  },
};

export default fhirSnapshotApi;

