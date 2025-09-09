export type ResourceFormType = {
    displayName: string
    predefinedResource: string
    resourceType: string
    customResourceSpec: string
    params?: Record<string, any>
}

export const RESOURCE_TYPE = Object.freeze({
    PREDEFINED: 'PREDEFINED',
    CUSTOM: 'CUSTOM',
})
