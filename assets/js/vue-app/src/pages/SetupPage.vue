<template>
    <div>
        <FhirSystemDropdown />
        <div class="card">
            <div class="card-body px-0 py-2">
                <div class="p-2">
                    <ResourcesToolbar />
                </div>
                <ResourcesTable />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FhirSystemDropdown from '@/components/setup/FhirSystemDropdown.vue';
import ResourcesToolbar from '@/components/setup/ResourcesToolbar.vue';
import ResourcesTable from '@/components/setup/ResourcesTable.vue';
</script>

<style scoped>

</style>