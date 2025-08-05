import type { Mrn } from "@/models/Mrn"
import { FetchStatus } from "@/models/Mrn"

const mrns: Mrn[] = [
    {
        id: 1,
        mrn: '123456',
        status: FetchStatus.Completed,
        resources: [
            { name: 'Patient', status: FetchStatus.Completed },
            { name: 'Observation', status: FetchStatus.Completed },
            { name: 'MedicationRequest', status: FetchStatus.Completed },
        ],
    },
    {
        id: 2,
        mrn: '789012',
        status: FetchStatus.Fetching,
        resources: [
            { name: 'Patient', status: FetchStatus.Completed },
            { name: 'Observation', status: FetchStatus.Fetching },
            { name: 'MedicationRequest', status: FetchStatus.Pending },
        ],
    },
    {
        id: 3,
        mrn: '345678',
        status: FetchStatus.Failed,
        resources: [
            { name: 'Patient', status: FetchStatus.Completed },
            { name: 'Observation', status: FetchStatus.Failed, error: 'OperationOutcome: patient not found' },
            { name: 'MedicationRequest', status: FetchStatus.Pending },
        ],
    },
    {
        id: 4,
        mrn: '901234',
        status: FetchStatus.Pending,
        resources: [
            { name: 'Patient', status: FetchStatus.Pending },
            { name: 'Observation', status: FetchStatus.Pending },
            { name: 'MedicationRequest', status: FetchStatus.Pending },
        ],
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
                    { name: 'Patient', status: FetchStatus.Pending },
                    { name: 'Observation', status: FetchStatus.Pending },
                    { name: 'MedicationRequest', status: FetchStatus.Pending },
                ],
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
                    resolve(mrn)
                }, 1000)
            } else {
                reject(new Error(`MRN with id ${id} not found.`))
            }
        }, 500)
    })
}