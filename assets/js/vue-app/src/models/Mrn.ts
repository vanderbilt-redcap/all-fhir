
export const FetchStatus = {
    Pending: 'Pending',
    Fetching: 'Fetching',
    Completed: 'Completed',
    Failed: 'Failed',
} as const;

export type FetchStatus = (typeof FetchStatus)[keyof typeof FetchStatus];

export interface MonitoredResource {
    name: string
    status: FetchStatus
    error?: string
}

export interface Mrn {
    id: number
    mrn: string
    status: FetchStatus
    resources: MonitoredResource[]
}
