import type { Mrn } from "@/models/Mrn"
import { FetchStatus } from "@/models/Mrn"
import { RESOURCE_TYPE } from '../components/setup/ResourceForm.vue'

const mrns: Mrn[] = [
    {
        id: 1,
        mrn: '123456',
        status: FetchStatus.Completed,
        resources: [
            { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
            { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
            { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
        ],
        status_counts: { [FetchStatus.Completed]: 3 },
        total_resources: 3,
    },
    {
        id: 2,
        mrn: '789012',
        status: FetchStatus.Fetching,
        resources: [
            { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
            { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Fetching },
            { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
        ],
        status_counts: { [FetchStatus.Completed]: 1, [FetchStatus.Fetching]: 1, [FetchStatus.Pending]: 1 },
        total_resources: 3,
    },
    {
        id: 3,
        mrn: '345678',
        status: FetchStatus.Failed,
        resources: [
            { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Completed },
            { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Failed, error_message: 'OperationOutcome: patient not found' },
            { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
        ],
        status_counts: { [FetchStatus.Completed]: 1, [FetchStatus.Failed]: 1, [FetchStatus.Pending]: 1 },
        total_resources: 3,
    },
    {
        id: 4,
        mrn: '901234',
        status: FetchStatus.Pending,
        resources: [
            { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
            { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
            { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
        ],
        status_counts: { [FetchStatus.Pending]: 3 },
        total_resources: 3,
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
                status: FetchStatus.Pending,
                resources: [
                    { name: 'Patient', resource_spec: 'Demographics', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
                    { name: 'Observation', resource_spec: 'Vitals', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
                    { name: 'MedicationRequest', resource_spec: 'Medications', mapping_type: RESOURCE_TYPE.PREDEFINED, repeat_instance: 1, status: FetchStatus.Pending },
                ],
                status_counts: { [FetchStatus.Pending]: 3 },
                total_resources: 3,
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
                mrn.status = FetchStatus.Fetching
                // Simulate a delay for fetching resources
                setTimeout(() => {
                    mrn.status = FetchStatus.Completed
                    mrn.resources.forEach(r => (r.status = FetchStatus.Completed))
                    mrn.status_counts = { [FetchStatus.Completed]: mrn.resources.length }
                    resolve(mrn)
                }, 1000)
            } else {
                reject(new Error(`MRN with id ${id} not found.`))
            }
        }, 500)
    })
}