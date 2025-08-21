
export const FetchStatus = {
    Pending: 'Pending',
    Fetching: 'Fetching',
    Completed: 'Completed',
    Failed: 'Failed',
    Outdated: 'Outdated',
    Deleted: 'Deleted',
} as const;

export type FetchStatus = (typeof FetchStatus)[keyof typeof FetchStatus];

export interface MonitoredResource {
    name: string                    // resource_name (display name)
    resource_spec: string          // technical specification or query
    mapping_type: string           // 'predefined' or 'custom'
    repeat_instance: number        // REDCap repeat instance number
    status: FetchStatus           // current processing status
    fetch_date?: string           // when successfully fetched
    error_message?: string        // error details if failed
}

export interface Mrn {
    id: number
    mrn: string
    status: FetchStatus                              // calculated overall status
    resources: MonitoredResource[]                   // detailed resource list
    status_counts: Record<string, number>            // count by status
    total_resources: number                          // total resource count
}

export interface ProjectSummary {
    total_mrns: number
    overall_status_counts: Record<string, number>   // project-wide status counts
    sync_status: {
        pending_tasks: number
        failed_tasks: number
    }
    mrn_summaries: Record<string, {
        status_counts: Record<string, number>
        total_resources: number
        resource_types: string[]
    }>
}
