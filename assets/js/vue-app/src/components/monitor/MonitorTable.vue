<template>
    <div>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <table v-else class="table table-bordered table-striped table-hover">
            <thead class="table-light">
                <tr>
                    <th scope="col">
                        <input
                            ref="selectAllCheckbox"
                            class="form-check-input"
                            type="checkbox"
                            :checked="allSelected"
                            :indeterminate="indeterminate"
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
                    />
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Mrn } from '@/models/Mrn'
import MonitorTableRow from './MonitorTableRow.vue'

const props = defineProps<{
    items: Mrn[]
    loading: boolean
    selectedMrns: number[]
    allSelected: boolean
    indeterminate: boolean
}>()

defineEmits(['toggle-select-all'])

const selectAllCheckbox = ref<HTMLInputElement | null>(null)

// Watch for indeterminate changes and update DOM property
watch(() => props.indeterminate, (newVal) => {
    if (selectAllCheckbox.value) {
        selectAllCheckbox.value.indeterminate = newVal
    }
}, { immediate: true })
</script>

<style scoped>
</style>