export type ResourceFormType = {
    displayName: string
    predefinedResource: string
    resourceType: string
    customResourceSpec: string
}

export const RESOURCE_TYPE = Object.freeze({
    PREDEFINED: 'PREDEFINED',
    CUSTOM: 'CUSTOM',
})