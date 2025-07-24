<template>
    <div>
        <form>
            <div>
                <input type="radio" name="resource-type-radio" id="resource-type-predefined" :value="RESOURCE_TYPE.PREDEFINED" v-model="form.resourceType"/>
                <label class="form-label ms-2" for="resource-type-predefined">Predefined Resource</label>
                <select v-model="form.predefinedResource" class="form-select form-select-sm" id="predefined-resource" :disabled="form.resourceType!==RESOURCE_TYPE.PREDEFINED">
                    <option disabled value="">Please Select...</option>
                    <option value="Demographics">Demographics</option>
                </select>
            </div>
            <div class="d-flex justify-start-center my-2">
                <span>—OR—</span>
            </div>
            <div>
                <input type="radio" name="resource-type-radio" id="resource-type-custom" :value="RESOURCE_TYPE.CUSTOM" v-model="form.resourceType"/>
                <label class="form-label ms-2" for="resource-type-custom">Custom Resource</label>
                <input v-model="form.customResource" class="form-control form-control-sm" type="text" id="custom-resource" :disabled="form.resourceType!==RESOURCE_TYPE.CUSTOM"
                placeholder="Observation?category=social-history">
            </div>

        </form>
    </div>
</template>

<script lang="ts">
export type ResourceFormType = {
    predefinedResource: string
    resourceType: string
    customResource: string
}

export const RESOURCE_TYPE = Object.freeze({
    PREDEFINED: 'PREDEFINED',
    CUSTOM: 'CUSTOM',
})
</script>
<script setup lang="ts">

const form = defineModel<ResourceFormType>({default: () => ({})})

</script>

<style scoped>

</style>