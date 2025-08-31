<template>
    <div class="d-flex flex-column gap-4">
        <FhirSystemDropdown />
        <div class="card">
            <div class="card-body px-0 py-2">
                <div class="p-2">
                    <ResourcesToolbar @add="handleAdd"/>
                </div>
                <ResourcesTable />
            </div>
        </div>
        <div class="d-flex gap-2 justify-content-end">
            <button type="button" class="btn btn-secondary btn-sm">
                <i class="fas fa-xmark fa-fw"></i>
                <span>Cancel</span>
            </button>
            <button type="button" class="btn btn-primary btn-sm" @click="handleSave" :disabled="anyLoading">
                <i class="fas fa-save fa-fw"></i>
                <span>Save</span>
            </button>
        </div>
        <Teleport to="body">
            <b-modal ref="resourceModal" >
                <template #title>Resource</template>
                <ResourceForm v-model="form"/>
            </b-modal>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';
import FhirSystemDropdown from '@/components/setup/FhirSystemDropdown.vue';
import ResourcesToolbar from '@/components/setup/ResourcesToolbar.vue';
import ResourcesTable from '@/components/setup/ResourcesTable.vue';
import ResourceForm from '@/components/setup/ResourceForm.vue';
import { storeToRefs } from 'pinia'
import {useSettingsStore} from '@/store/SettingsStore'
import { useNotificationStore } from '@/store/NotificationStore'
import { type ResourceFormType, RESOURCE_TYPE } from '@/types/ResourceForm';
import type { BootstrapVueModal } from '@/types/Modal';

const settingsStore = useSettingsStore()
const notificationStore = useNotificationStore()
const { loading } = storeToRefs(settingsStore)

const anyLoading = computed(() => loading.value.fetch || loading.value.save)

const resourceModal = useTemplateRef<BootstrapVueModal>('resourceModal')

const getNewForm = (): ResourceFormType => ({
    displayName: '',
    customResourceSpec: '',
    predefinedResource: '',
    resourceType: RESOURCE_TYPE.PREDEFINED
})

const form = ref<ResourceFormType>(getNewForm())

async function handleAdd() {
    if(!resourceModal.value) return
    form.value = getNewForm() // Reset form before showing
    const confirmed = await resourceModal.value.show()
    if (confirmed) {
        // Validate form data
        if (!form.value.displayName.trim()) {
            notificationStore.showError('Display Name is required');
            return;
        }

        if (form.value.resourceType === RESOURCE_TYPE.PREDEFINED) {
            if (!form.value.predefinedResource) {
                notificationStore.showError('Please select a predefined resource');
                return;
            }
            // For predefined resources, use the selected predefined resource as resourceSpec
            settingsStore.addPredefinedResource(form.value.displayName, form.value.predefinedResource)
        } else {
            if (!form.value.customResourceSpec.trim()) {
                notificationStore.showError('Resource Specification is required for custom resources');
                return;
            }
            // For custom resources, use the entered custom resourceSpec
            settingsStore.addCustomResource(form.value.displayName, form.value.customResourceSpec)
        }
    }
}

async function handleSave() {
    try {
        await settingsStore.saveProjectSettings()
        notificationStore.showSuccess('Settings saved successfully')
    } catch (err) {
        console.error('Failed to save settings:', err)
        notificationStore.showError('Failed to save settings')
    }
}

</script>

<style scoped>

</style>