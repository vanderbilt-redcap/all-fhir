<template>
    <div>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <table v-else class="table table-striped table-hover">
            <thead class="table-light">
                <tr>
                    <th scope="col">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            :checked="allSelected"
                            @change="$emit('toggle-select-all')"
                        />
                    </th>
                    <th scope="col">MRN</th>
                    <th scope="col">Status</th>
                    <th scope="col">Resources</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="items.length === 0">
                    <tr>
                        <td colspan="5" class="text-center">No MRNs to display.</td>
                    </tr>
                </template>
                <template v-else>
                    <MonitorTableRow
                        v-for="item in items"
                        :key="item.id"
                        :item="item"
                        :selected="selectedMrns.includes(item.id)"
                        @toggle-selection="$emit('toggle-selection', item.id)"
                    />
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import type { Mrn } from '@/models/Mrn'
import MonitorTableRow from './MonitorTableRow.vue'

defineProps<{
    items: Mrn[]
    loading: boolean
    selectedMrns: number[]
    allSelected: boolean
}>()

defineEmits(['toggle-selection', 'toggle-select-all'])
</script>

<style scoped>
</style>