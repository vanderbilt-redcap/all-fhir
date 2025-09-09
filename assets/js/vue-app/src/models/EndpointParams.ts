export type ParamType = 'string' | 'number' | 'boolean' | 'date' | 'enum'

export interface EndpointParamDef {
  key: string
  label: string
  type: ParamType
  required: boolean
  description?: string
  default?: any
  enumOptions?: { value: any; label: string }[]
  server_resolved?: boolean
}

export type EndpointParamSchema = EndpointParamDef[]
export type EndpointParamsSchemas = Record<string, EndpointParamSchema>

