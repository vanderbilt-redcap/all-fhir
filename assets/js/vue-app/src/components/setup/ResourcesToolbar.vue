<template>
    <div class="d-flex">
        <div class="me-auto d-flex align-items-center gap-2">
            <span>Resources</span>
            <i 
              class="fas fa-info-circle text-muted"
              :title="resourcesHelpTooltip"
              aria-label="Resources help"
              role="img"
            ></i>
        </div>
        <div class="d-flex gap-2">
            <button class="btn btn-sm btn-primary" @click="emit('import')" :title="importTooltip">
                <i class="fas fa-upload fa-fw"></i>
                <span>Import</span>
            </button>
            <button class="btn btn-sm btn-primary" @click="emit('export')" :title="exportTooltip">
                <i class="fas fa-download fa-fw"></i>
                <span>Export</span>
            </button>
            <button class="btn btn-sm btn-primary" @click="emit('add')">
                <i class="fas fa-plus fa-fw"></i>
                <span>Add</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['import', 'export', 'add'])

const importTooltip = 'Import resources from JSON. Choose Merge to add/update or Replace to overwrite your current list.'
const exportTooltip = 'Export current resources to a JSON file.'
const resourcesHelpTooltip = 'Manage the list of mapping resources. Import/Export uses JSON; Import supports Merge or Replace.'
</script>

<style scoped>

</style>
