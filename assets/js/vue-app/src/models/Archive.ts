/**
 * Archive-related TypeScript interfaces and types
 * 
 * Provides type definitions for archive creation, management, and status tracking
 * operations in the FHIR Snapshot application.
 */

/**
 * Archive metadata and information
 */
export interface Archive {
  archive_id: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  created_at: string
  file_name: string
  file_size: number
  total_resources: number
  successful_files: number
  failed_files: number
  download_url?: string
  processing_mode: 'immediate' | 'background'
}

/**
 * Options for creating archives
 */
export interface ArchiveCreateOptions {
  resource_types?: string[]
  archive_name?: string
  background_mode?: boolean
  date_from?: string
  date_to?: string
}

/**
 * API response for archive list operations
 */
export interface ArchiveListResponse {
  success: boolean
  archives: Archive[]
  total_count: number
  message?: string
}

/**
 * API response for archive creation operations
 */
export interface ArchiveCreateResponse {
  success: boolean
  message: string
  archive_id: string | null
  total_resources: number
  processing_mode?: 'immediate' | 'background'
  task_status?: string
  file_path?: string
  file_size?: number
  download_url?: string
}

/**
 * API response for archive deletion operations
 */
export interface ArchiveDeleteResponse {
  success: boolean
  message: string
  archive_id: string
  deleted_files: number
  deleted_from: string[]
}

/**
 * Status values for archive operations
 */
export const ArchiveStatus = {
  PENDING: 'pending' as const,
  PROCESSING: 'processing' as const,
  COMPLETED: 'completed' as const,
  FAILED: 'failed' as const
} as const

export type ArchiveStatusType = typeof ArchiveStatus[keyof typeof ArchiveStatus]

/**
 * Processing mode values for archives
 */
export const ProcessingMode = {
  IMMEDIATE: 'immediate' as const,
  BACKGROUND: 'background' as const
} as const

export type ProcessingModeType = typeof ProcessingMode[keyof typeof ProcessingMode]

/**
 * Streaming archive-specific interfaces
 */
export interface StreamingArchiveOptions {
  mrns: string[]
  resource_types?: string[]
  archive_name?: string
}

/**
 * Streaming progress tracking
 */
export interface StreamingProgress {
  active: boolean
  filename: string
  startTime: Date | null
  progress?: number
}