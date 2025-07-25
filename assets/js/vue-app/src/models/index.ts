import z from 'zod'
export * from './ResourceMapping'




export const FetchEntrySchema = z.object({
  id: z.string().optional(),
  mrn: z.string(),
  resource: z.string()
})

export const ErrorEntrySchema = z.object({
  message: z.string(),
  source: z.string().optional(),
  timestamp: z.date(),
  raw: z.unknown().optional(),
})
export type ErrorEntry = z.infer<typeof ErrorEntrySchema>
