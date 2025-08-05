<template>
    <div class="d-flex flex-column gap-4">
        <FhirSystemDropdown />
        <div class="card">
            <div class="card-body px-0 py-2">
                <div class="p-2">
                    <ResourcesToolbar @add="handleAdd"/>
                </div>
                <ResourcesTable />

                <Teleport to="body">
                    <b-modal ref="resourceModal" >
                        <template #title>Resource</template>
                        <ResourceForm v-model="form"/>
                    </b-modal>
                </Teleport>
            </div>
        </div>
        <div class="d-flex gap-2 justify-content-end">
            <button type="button" class="btn btn-secondary btn-sm">
                <i class="fas fa-xmark fa-fw"></i>
                <span>Cancel</span>
            </button>
            <button type="button" class="btn btn-primary btn-sm" @click="handleSave" :disabled="settingsStore.loading">
                <i class="fas fa-save fa-fw"></i>
                <span>Save</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { provide, ref, useTemplateRef } from 'vue';
import FhirSystemDropdown from '@/components/setup/FhirSystemDropdown.vue';
import ResourcesToolbar from '@/components/setup/ResourcesToolbar.vue';
import ResourcesTable from '@/components/setup/ResourcesTable.vue';
import ResourceForm from '@/components/setup/ResourceForm.vue';
import { storeToRefs } from 'pinia'
import {useSettingsStore} from '@/store/SettingsStore'
import { type ResourceFormType, RESOURCE_TYPE } from '@/components/setup/ResourceForm.vue';

const settingsStore = useSettingsStore()
const { settings } = storeToRefs(settingsStore)
provide('settings', settings)

const resourceModal = useTemplateRef<any>('resourceModal')

const getNewForm = (): ResourceFormType => ({
    customResource: '',
    predefinedResource: '',
    resourceType: RESOURCE_TYPE.PREDEFINED
})

const form = ref<ResourceFormType>(getNewForm())

async function handleAdd() {
    if(!resourceModal.value) return
    form.value = getNewForm() // Reset form before showing
    const confirmed = await resourceModal.value.show()
    if (confirmed) {
        if (form.value.resourceType === RESOURCE_TYPE.PREDEFINED) {
            settingsStore.addPredefinedResource(form.value.predefinedResource)
        } else {
            settingsStore.addCustomResource(form.value.customResource)
        }
    }
}

async function handleSave() {
    try {
        await settingsStore.saveProjectSettings()
    } catch (err) {
        console.error('Failed to save settings:', err)
    }
}

</script>

<style scoped>

</style>