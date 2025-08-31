<template>
    <div>
        <form>
            <!-- Display Name Field (always shown) -->
            <div class="mb-3">
                <label class="form-label" for="display-name">Display Name</label>
                <input v-model="form.displayName" class="form-control form-control-sm" type="text" id="display-name"
                placeholder="E.g., Vital Signs, Social History, etc." required>
            </div>

            <div>
                <input type="radio" name="resource-type-radio" id="resource-type-predefined" :value="RESOURCE_TYPE.PREDEFINED" v-model="form.resourceType"/>
                <label class="form-label ms-2" for="resource-type-predefined">Predefined Resource</label>
                <select v-model="form.predefinedResource" class="form-select form-select-sm" id="predefined-resource" :disabled="form.resourceType!==RESOURCE_TYPE.PREDEFINED">
                    <option disabled value="">Please Select...</option>
                    <template v-for="resource in mapping_resources" :key="resource.resourceSpec">
                        <option :value="resource.resourceSpec">
                            {{ resource.name }}
                        </option>
                    </template>
                </select>
            </div>
            <div class="d-flex justify-start-center my-2">
                <span>—OR—</span>
            </div>
            <div>
                <input type="radio" name="resource-type-radio" id="resource-type-custom" :value="RESOURCE_TYPE.CUSTOM" v-model="form.resourceType"/>
                <label class="form-label ms-2" for="resource-type-custom">Custom Resource</label>
                <input v-model="form.customResourceSpec" class="form-control form-control-sm" type="text" id="custom-resource" :disabled="form.resourceType!==RESOURCE_TYPE.CUSTOM"
                placeholder="Observation?category=social-history">
            </div>

        </form>
    </div>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/store/SettingsStore'
import { RESOURCE_TYPE, type ResourceFormType } from '@/types/ResourceForm';
import { storeToRefs } from 'pinia'
import { computed } from 'vue'


const settingsStore = useSettingsStore()
const { settings } = storeToRefs(settingsStore)
const mapping_resources = computed(() => settings.value.mapping_resources )

const form = defineModel<ResourceFormType>({default: () => ({})})

</script>

<style scoped>

</style>