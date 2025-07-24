<template>
    <div class="d-flex">
        <div class="me-auto">
            <span>Resources</span>
        </div>
        <div class="d-flex gap-2">
            <button class="btn btn-sm btn-primary" @click="emit('import')">
                <i class="fas fa-upload fa-fw"></i>
                <span>Import</span>
            </button>
            <button class="btn btn-sm btn-primary" @click="emit('export')">
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
</script>

<style scoped>

</style>