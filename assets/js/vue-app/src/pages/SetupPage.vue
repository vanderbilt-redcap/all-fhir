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
        <!-- Resource Form Modal -->
        <ResourceFormModal ref="resourceFormModal" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FhirSystemDropdown from '@/components/setup/FhirSystemDropdown.vue';
import ResourcesToolbar from '@/components/setup/ResourcesToolbar.vue';
import ResourcesTable from '@/components/setup/ResourcesTable.vue';
import ResourceFormModal from '@/components/setup/ResourceFormModal.vue';
import { storeToRefs } from 'pinia'
import {useSettingsStore} from '@/store/SettingsStore'
import { useNotificationStore } from '@/store/NotificationStore'
import { RESOURCE_TYPE } from '@/types/ResourceForm';

const settingsStore = useSettingsStore()
const notificationStore = useNotificationStore()
const { loading } = storeToRefs(settingsStore)

const anyLoading = computed(() => loading.value.fetch || loading.value.save)

const resourceFormModal = ref<InstanceType<typeof ResourceFormModal> | null>(null)

async function handleAdd() {
    if (!resourceFormModal.value) return
    
    const formData = await resourceFormModal.value.show()
    if (formData) {
        if (formData.resourceType === RESOURCE_TYPE.PREDEFINED) {
            // For predefined resources, use the selected predefined resource as resourceSpec
            settingsStore.addPredefinedResource(formData.displayName, formData.predefinedResource)
        } else {
            // For custom resources, use the entered custom resourceSpec
            settingsStore.addCustomResource(formData.displayName, formData.customResourceSpec)
        }
        notificationStore.showSuccess('Resource added successfully')
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