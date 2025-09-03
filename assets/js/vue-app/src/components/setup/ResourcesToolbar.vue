<template>
  <div class="d-flex align-items-center w-100">
    <!-- Left group: existing actions -->
    <div class="d-flex align-items-center gap-2">
      <span>Resources</span>
      <i 
        class="fas fa-info-circle text-muted"
        :title="resourcesHelpTooltip"
        aria-label="Resources help"
        role="img"
      ></i>
    </div>
    
    <!-- Right: refresh -->
    <div class="ms-auto d-flex align-items-center gap-2">

        <button class="btn btn-sm btn-primary" @click="handleImport" :title="importTooltip">
            <i class="fas fa-upload fa-fw"></i>
            <span>Import</span>
        </button>
        <button class="btn btn-sm btn-primary" @click="handleExport" :title="exportTooltip">
            <i class="fas fa-download fa-fw"></i>
            <span>Export</span>
        </button>
        <button class="btn btn-sm btn-primary" @click="handleAdd">
            <i class="fas fa-plus fa-fw"></i>
            <span>Add</span>
        </button>

        <button 
        class="btn btn-outline-secondary btn-sm"
        @click="refreshResources"
        :disabled="loading.fetch"
        title="Refresh resources"
        >
        <i class="fas fa-rotate-right fa-fw" :class="{ 'fa-spin': loading.fetch }"></i>
      </button>
    </div>

    <!-- Hidden file input for import -->
    <input 
      ref="importInput"
      type="file" 
      accept="application/json"
      class="d-none"
      @change="handleImportFile"
    />

    <!-- Modals -->
    <ImportResourcesModal ref="importModal" />
    <ResourceFormModal ref="resourceFormModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSettingsStore } from '@/store/SettingsStore'
import { useNotificationStore } from '@/store/NotificationStore'
import { storeToRefs } from 'pinia'
import ImportResourcesModal from '@/components/setup/ImportResourcesModal.vue'
import ResourceFormModal from '@/components/setup/ResourceFormModal.vue'
import { RESOURCE_TYPE } from '@/types/ResourceForm'

const settingsStore = useSettingsStore()
const notificationStore = useNotificationStore()
const { loading } = storeToRefs(settingsStore)

const importTooltip = 'Import resources from JSON. Choose Merge to add/update or Replace to overwrite your current list.'
const exportTooltip = 'Export current resources to a JSON file.'
const resourcesHelpTooltip = 'Manage the list of mapping resources. Import/Export uses JSON; Import supports Merge or Replace.'

const resourceFormModal = ref<InstanceType<typeof ResourceFormModal> | null>(null)
const importModal = ref<InstanceType<typeof ImportResourcesModal> | null>(null)
const importInput = ref<HTMLInputElement | null>(null)
const pendingImportMode = ref<'merge' | 'replace'>('merge')

async function handleAdd() {
  if (!resourceFormModal.value) return
  const formData = await resourceFormModal.value.show()
  if (!formData) return
  if (formData.resourceType === RESOURCE_TYPE.PREDEFINED) {
    await settingsStore.addPredefinedResource(formData.displayName, formData.predefinedResource)
  } else {
    await settingsStore.addCustomResource(formData.displayName, formData.customResourceSpec)
  }
}

async function handleImport() {
  if (!importModal.value) return
  const mode = await importModal.value.show()
  if (!mode) return
  if (mode === 'replace') {
    const confirmed = await notificationStore.confirmAction(
      'Replace Resources',
      'This will replace your current resources with the ones from the file. This action will discard your current list. Continue?'
    )
    if (!confirmed) return
  }
  pendingImportMode.value = mode
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

async function refreshResources() {
  try {
    await settingsStore.fetchProjectSettings()
    notificationStore.showSuccess('Resources refreshed successfully')
  } catch (err) {
    console.error('Failed to refresh resources:', err)
    notificationStore.showError('Failed to refresh resources')
  }
}
</script>

<style scoped>
</style>
