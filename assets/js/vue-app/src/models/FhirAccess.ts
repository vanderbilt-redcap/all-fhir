export interface FhirAccessStatus {
  has_any_valid_token: boolean
  valid_count: number
  total_users_with_token: number
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
  standalone_launch_url?: string | null
}
