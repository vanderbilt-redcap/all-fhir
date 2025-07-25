import z from 'zod'

export const ResourceMappingSchema = z.object({
    id: z.string(),
    predefinedResource: z.string(),
    resourceType: z.string(),
    customResource: z.string(),
})
export const ResourceMappingCreateSchema = ResourceMappingSchema.omit({ id: true })
export const ResourceMappingUpdateSchema = ResourceMappingSchema.partial().extend({
  id: z.string()
})
export type ResourceMapping = z.infer<typeof ResourceMappingSchema>