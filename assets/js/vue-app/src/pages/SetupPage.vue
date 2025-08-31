<template>
    <div class="d-flex flex-column gap-4">
        <FhirSystemDropdown />
        <div class="card">
            <div class="card-body px-0 py-2">
                <div class="p-2">
                    <ResourcesToolbar @add="handleAdd" @import="handleImportClick" @export="handleExport"/>
                </div>
                <ResourcesTable />
            </div>
        </div>
        <!-- Hidden file input for import -->
        <input 
            ref="importInput"
            type="file" 
            accept="application/json"
            class="d-none"
            @change="handleImportFile"
        />
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
        <!-- Import Options Modal -->
        <ImportResourcesModal ref="importModal" />
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
import ImportResourcesModal from '@/components/setup/ImportResourcesModal.vue';
import { storeToRefs } from 'pinia'
import {useSettingsStore} from '@/store/SettingsStore'
import { useNotificationStore } from '@/store/NotificationStore'
import { RESOURCE_TYPE } from '@/types/ResourceForm';

const settingsStore = useSettingsStore()
const notificationStore = useNotificationStore()
const { loading } = storeToRefs(settingsStore)

const anyLoading = computed(() => loading.value.fetch || loading.value.save)

const resourceFormModal = ref<InstanceType<typeof ResourceFormModal> | null>(null)
const importModal = ref<InstanceType<typeof ImportResourcesModal> | null>(null)
const importInput = ref<HTMLInputElement | null>(null)
const pendingImportMode = ref<'merge' | 'replace'>('merge')

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

async function handleImportClick() {
    if (!importModal.value) return
    const mode = await importModal.value.show()
    if (!mode) return
    // If replace mode, ask for confirmation via NotificationStore modal
    if (mode === 'replace') {
        const confirmed = await notificationStore.confirmAction(
            'Replace Resources',
            'This will replace your current resources with the ones from the file. This action will discard your current list. Continue?'
        )
        if (!confirmed) return
    }
    pendingImportMode.value = mode
    // Open file picker
    importInput.value?.click()
}

async function handleImportFile(event: Event) {
    try {
        const input = event.target as HTMLInputElement
        const file = input.files && input.files[0]
        if (!file) return
        const text = await file.text()
        const json = JSON.parse(text)
        const result = settingsStore.importResources(json, { mode: pendingImportMode.value })
        notificationStore.showSuccess(`Imported ${result.added} new, updated ${result.updated}, skipped ${result.skipped}.`)
    } catch (err) {
        console.error('Import failed:', err)
        notificationStore.showError('Failed to import resources. Please check the JSON file.')
    } finally {
        // reset input to allow re-selecting the same file
        if (importInput.value) importInput.value.value = ''
        pendingImportMode.value = 'merge'
    }
}

function handleExport() {
    try {
        const payload = settingsStore.exportResources()
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        const now = new Date()
        const ts = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`
        a.href = url
        a.download = `resources-${ts}.json`
        document.body.appendChild(a)
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url)
        notificationStore.showSuccess('Exported resources successfully')
    } catch (err) {
        console.error('Export failed:', err)
        notificationStore.showError('Failed to export resources')
    }
}

</script>

<style scoped>

</style>
