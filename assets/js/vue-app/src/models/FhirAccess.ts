export const FhirAccessState = {
  HasValidToken: 'has_valid_token',
  NoFhirSystem: 'no_fhir_system',
  NoValidTokens: 'no_valid_tokens',
} as const
export type FhirAccessState = typeof FhirAccessState[keyof typeof FhirAccessState]

export interface FhirAccessStatus {
  has_any_valid_token: boolean
  valid_count: number
  total_users_with_token: number
  total_project_users?: number
  details_by_user: Record<string, string | null>
  errors: string[]
  fhir_system_id: string | null
  fhir_system_name: string | null
}

export interface FhirAccessBanner {
  should_warn: boolean
  level: 'info' | 'warning' | 'danger' | string
  message: string
}

export interface FhirAccessResponse {
  status: FhirAccessStatus
  banner: FhirAccessBanner
  state?: FhirAccessState
  standalone_launch_url?: string | null
  setup_route?: string | null
  counts?: {
    valid: number
    with_token: number
    project_total: number
  }
}
