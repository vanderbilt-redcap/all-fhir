/**
 * Streaming archive models used by the on-demand download flow.
 */
export interface StreamingArchiveOptions {
  mrns: string[]
  resource_types?: string[]
  archive_name?: string
}

export interface StreamingProgress {
  active: boolean
  filename: string
  startTime: Date | null
  progress?: number
}
