import type { Mrn } from "@/models/Mrn"
import { FetchStatus } from "@/models/Mrn"
import { RESOURCE_TYPE } from '../components/setup/ResourceForm.vue'

const mrns: Mrn[] = [
    {
        id: 1,
        mrn: '123456',
        resources: [
            { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
            { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
            { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
        ],
        status_summary: {
            overall_status: FetchStatus.Completed,
            status_distribution: {
                distribution: {
                    [FetchStatus.Completed]: { count: 3, percentage: 100 }
                },
                total_resources: 3,
                completed_resources: 3,
                completion_percentage: 100,
                archivable_resources: 3,
                has_completed_resources: true,
                is_fully_completed: true,
                is_mixed_state: false,
                dominant_status: FetchStatus.Completed
            },
            has_archivable_resources: true,
            resource_type_statuses: {
                'Patient': { total_count: 1, completed_count: 1, failed_count: 0, pending_count: 0, fetching_count: 0, outdated_count: 0, has_completed: true, completion_percentage: 100, is_archivable: true },
                'Observation': { total_count: 1, completed_count: 1, failed_count: 0, pending_count: 0, fetching_count: 0, outdated_count: 0, has_completed: true, completion_percentage: 100, is_archivable: true },
                'MedicationRequest': { total_count: 1, completed_count: 1, failed_count: 0, pending_count: 0, fetching_count: 0, outdated_count: 0, has_completed: true, completion_percentage: 100, is_archivable: true }
            },
            smart_status_display: 'All Complete',
            archive_button_config: {
                variant: 'success',
                disabled: false,
                tooltip: 'All resources completed - ready to archive',
                text: 'Archive'
            },
            progress_bar_config: {
                segments: [{ status: FetchStatus.Completed, count: 3, percentage: 100, color: 'success' }],
                completion_percentage: 100,
                total_resources: 3
            },
            available_resource_types: ['Patient', 'Observation', 'MedicationRequest']
        }
    },
    {
        id: 2,
        mrn: '789012',
        resources: [
            { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
            { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Fetching },
            { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
        ],
        status_summary: {
            overall_status: FetchStatus.Fetching,
            status_distribution: {
                distribution: {
                    [FetchStatus.Completed]: { count: 1, percentage: 33.3 },
                    [FetchStatus.Fetching]: { count: 1, percentage: 33.3 },
                    [FetchStatus.Pending]: { count: 1, percentage: 33.3 }
                },
                total_resources: 3,
                completed_resources: 1,
                completion_percentage: 33.3,
                archivable_resources: 1,
                has_completed_resources: true,
                is_fully_completed: false,
                is_mixed_state: true,
                dominant_status: null
            },
            has_archivable_resources: true,
            resource_type_statuses: {
                'Patient': { total_count: 1, completed_count: 1, failed_count: 0, pending_count: 0, fetching_count: 0, outdated_count: 0, has_completed: true, completion_percentage: 100, is_archivable: true },
                'Observation': { total_count: 1, completed_count: 0, failed_count: 0, pending_count: 0, fetching_count: 1, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false },
                'MedicationRequest': { total_count: 1, completed_count: 0, failed_count: 0, pending_count: 1, fetching_count: 0, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false }
            },
            smart_status_display: 'In Progress (1/3)',
            archive_button_config: {
                variant: 'warning',
                disabled: false,
                tooltip: 'Partial data available - can archive completed resources',
                text: 'Archive'
            },
            progress_bar_config: {
                segments: [
                    { status: FetchStatus.Completed, count: 1, percentage: 33.3, color: 'success' },
                    { status: FetchStatus.Fetching, count: 1, percentage: 33.3, color: 'info' },
                    { status: FetchStatus.Pending, count: 1, percentage: 33.3, color: 'warning' }
                ],
                completion_percentage: 33.3,
                total_resources: 3
            },
            available_resource_types: ['Patient']
        }
    },
    {
        id: 3,
        mrn: '345678',
        resources: [
            { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
            { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Failed, error_message: 'OperationOutcome: patient not found' },
            { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
        ],
        status_summary: {
            overall_status: FetchStatus.Failed,
            status_distribution: {
                distribution: {
                    [FetchStatus.Completed]: { count: 1, percentage: 33.3 },
                    [FetchStatus.Failed]: { count: 1, percentage: 33.3 },
                    [FetchStatus.Pending]: { count: 1, percentage: 33.3 }
                },
                total_resources: 3,
                completed_resources: 1,
                completion_percentage: 33.3,
                archivable_resources: 1,
                has_completed_resources: true,
                is_fully_completed: false,
                is_mixed_state: true,
                dominant_status: null
            },
            has_archivable_resources: true,
            resource_type_statuses: {
                'Patient': { total_count: 1, completed_count: 1, failed_count: 0, pending_count: 0, fetching_count: 0, outdated_count: 0, has_completed: true, completion_percentage: 100, is_archivable: true },
                'Observation': { total_count: 1, completed_count: 0, failed_count: 1, pending_count: 0, fetching_count: 0, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false },
                'MedicationRequest': { total_count: 1, completed_count: 0, failed_count: 0, pending_count: 1, fetching_count: 0, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false }
            },
            smart_status_display: 'Has Failures (1/3)',
            archive_button_config: {
                variant: 'warning',
                disabled: false,
                tooltip: 'Some resources failed - can archive completed resources only',
                text: 'Archive'
            },
            progress_bar_config: {
                segments: [
                    { status: FetchStatus.Completed, count: 1, percentage: 33.3, color: 'success' },
                    { status: FetchStatus.Failed, count: 1, percentage: 33.3, color: 'danger' },
                    { status: FetchStatus.Pending, count: 1, percentage: 33.3, color: 'warning' }
                ],
                completion_percentage: 33.3,
                total_resources: 3
            },
            available_resource_types: ['Patient']
        }
    },
    {
        id: 4,
        mrn: '901234',
        resources: [
            { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
            { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
            { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
        ],
        status_summary: {
            overall_status: FetchStatus.Pending,
            status_distribution: {
                distribution: {
                    [FetchStatus.Pending]: { count: 3, percentage: 100 }
                },
                total_resources: 3,
                completed_resources: 0,
                completion_percentage: 0,
                archivable_resources: 0,
                has_completed_resources: false,
                is_fully_completed: false,
                is_mixed_state: false,
                dominant_status: FetchStatus.Pending
            },
            has_archivable_resources: false,
            resource_type_statuses: {
                'Patient': { total_count: 1, completed_count: 0, failed_count: 0, pending_count: 1, fetching_count: 0, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false },
                'Observation': { total_count: 1, completed_count: 0, failed_count: 0, pending_count: 1, fetching_count: 0, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false },
                'MedicationRequest': { total_count: 1, completed_count: 0, failed_count: 0, pending_count: 1, fetching_count: 0, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false }
            },
            smart_status_display: 'Not Started',
            archive_button_config: {
                variant: 'secondary',
                disabled: true,
                tooltip: 'No completed resources available for archiving',
                text: 'Archive'
            },
            progress_bar_config: {
                segments: [{ status: FetchStatus.Pending, count: 3, percentage: 100, color: 'warning' }],
                completion_percentage: 0,
                total_resources: 3
            },
            available_resource_types: []
        }
    },
]

export const fetchMrns = async (): Promise<Mrn[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mrns)
        }, 500)
    })
}

export const addMrn = async (mrn: string): Promise<Mrn> => {
    return new Promise(resolve => {
        setTimeout(() => {
            const newMrn: Mrn = {
                id: mrns.length > 0 ? Math.max(...mrns.map(m => m.id)) + 1 : 1,
                mrn,
                resources: [
                    { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
                    { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
                    { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
                ],
                status_summary: {
                    overall_status: FetchStatus.Pending,
                    status_distribution: {
                        distribution: {
                            [FetchStatus.Pending]: { count: 3, percentage: 100 }
                        },
                        total_resources: 3,
                        completed_resources: 0,
                        completion_percentage: 0,
                        archivable_resources: 0,
                        has_completed_resources: false,
                        is_fully_completed: false,
                        is_mixed_state: false,
                        dominant_status: FetchStatus.Pending
                    },
                    has_archivable_resources: false,
                    resource_type_statuses: {
                        'Patient': { total_count: 1, completed_count: 0, failed_count: 0, pending_count: 1, fetching_count: 0, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false },
                        'Observation': { total_count: 1, completed_count: 0, failed_count: 0, pending_count: 1, fetching_count: 0, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false },
                        'MedicationRequest': { total_count: 1, completed_count: 0, failed_count: 0, pending_count: 1, fetching_count: 0, outdated_count: 0, has_completed: false, completion_percentage: 0, is_archivable: false }
                    },
                    smart_status_display: 'Not Started',
                    archive_button_config: {
                        variant: 'secondary',
                        disabled: true,
                        tooltip: 'No completed resources available for archiving',
                        text: 'Archive'
                    },
                    progress_bar_config: {
                        segments: [{ status: FetchStatus.Pending, count: 3, percentage: 100, color: 'warning' }],
                        completion_percentage: 0,
                        total_resources: 3
                    },
                    available_resource_types: []
                }
            }
            mrns.push(newMrn)
            resolve(newMrn)
        }, 500)
    })
}

export const fetchMrn = async (id: number): Promise<Mrn> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mrn = mrns.find(m => m.id === id)
            if (mrn) {
                // Update to fetching status
                mrn.status_summary.overall_status = FetchStatus.Fetching
                mrn.status_summary.smart_status_display = 'Fetching...'
                
                // Simulate a delay for fetching resources
                setTimeout(() => {
                    mrn.status_summary.overall_status = FetchStatus.Completed
                    mrn.resources.forEach(r => (r.status = FetchStatus.Completed))
                    
                    // Update status summary to completed state
                    mrn.status_summary = {
                        overall_status: FetchStatus.Completed,
                        status_distribution: {
                            distribution: {
                                [FetchStatus.Completed]: { count: mrn.resources.length, percentage: 100 }
                            },
                            total_resources: mrn.resources.length,
                            completed_resources: mrn.resources.length,
                            completion_percentage: 100,
                            archivable_resources: mrn.resources.length,
                            has_completed_resources: true,
                            is_fully_completed: true,
                            is_mixed_state: false,
                            dominant_status: FetchStatus.Completed
                        },
                        has_archivable_resources: true,
                        resource_type_statuses: {
                            'Patient': { total_count: 1, completed_count: 1, failed_count: 0, pending_count: 0, fetching_count: 0, outdated_count: 0, has_completed: true, completion_percentage: 100, is_archivable: true },
                            'Observation': { total_count: 1, completed_count: 1, failed_count: 0, pending_count: 0, fetching_count: 0, outdated_count: 0, has_completed: true, completion_percentage: 100, is_archivable: true },
                            'MedicationRequest': { total_count: 1, completed_count: 1, failed_count: 0, pending_count: 0, fetching_count: 0, outdated_count: 0, has_completed: true, completion_percentage: 100, is_archivable: true }
                        },
                        smart_status_display: 'All Complete',
                        archive_button_config: {
                            variant: 'success',
                            disabled: false,
                            tooltip: 'All resources completed - ready to archive',
                            text: 'Archive'
                        },
                        progress_bar_config: {
                            segments: [{ status: FetchStatus.Completed, count: mrn.resources.length, percentage: 100, color: 'success' }],
                            completion_percentage: 100,
                            total_resources: mrn.resources.length
                        },
                        available_resource_types: ['Patient', 'Observation', 'MedicationRequest']
                    }
                    resolve(mrn)
                }, 1000)
            } else {
                reject(new Error(`MRN with id ${id} not found.`))
            }
        }, 500)
    })
}