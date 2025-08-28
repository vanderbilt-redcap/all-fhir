
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

// New interfaces for enhanced status information
export interface StatusDistribution {
    distribution: Record<string, {
        count: number
        percentage: number
    }>
    total_resources: number
    completed_resources: number
    completion_percentage: number
    archivable_resources: number
    has_completed_resources: boolean
    is_fully_completed: boolean
    is_mixed_state: boolean
    dominant_status: string | null
}

export interface ResourceTypeStatus {
    total_count: number
    completed_count: number
    failed_count: number
    pending_count: number
    fetching_count: number
    outdated_count: number
    has_completed: boolean
    completion_percentage: number
    is_archivable: boolean
}

export interface ArchiveButtonConfig {
    variant: string
    disabled: boolean
    tooltip: string
    text: string
}

export interface ProgressBarSegment {
    status: FetchStatus
    count: number
    percentage: number
    color: string
}

export interface ProgressBarConfig {
    segments: ProgressBarSegment[]
    completion_percentage: number
    total_resources: number
}

export interface MrnStatusSummary {
    overall_status: FetchStatus
    status_distribution: StatusDistribution
    has_archivable_resources: boolean
    resource_type_statuses: Record<string, ResourceTypeStatus>
    smart_status_display: string
    archive_button_config: ArchiveButtonConfig
    progress_bar_config: ProgressBarConfig
    available_resource_types: string[]
}

export interface Mrn {
    id: number
    mrn: string
    resources: MonitoredResource[]                   // detailed resource list
    
    // Enhanced status information from backend VOs (optional until backend provides it)
    status_summary?: MrnStatusSummary               // comprehensive status data
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
