<template>
    <div class="p-3">
        <MonitorToolbar @add-mrn="showAddMrnModal" />
        <MonitorTable
            :items="monitorStore.mrns"
            :loading="monitorStore.loading"
            :selected-mrns="monitorStore.selectedMrns"
            :all-selected="monitorStore.allSelected"
            @toggle-selection="monitorStore.toggleSelection"
            @toggle-select-all="monitorStore.toggleSelectAll"
        />
        <div class="d-flex justify-content-end gap-2 mt-3" v-if="monitorStore.pagination.total > 0">
            <b-pagination
                size="sm"
                :perPage="limit"
                :totalItems="total"
                v-model="page"
            ></b-pagination>
            <b-pagination-dropdown
                :options="perPageOptions"
                v-model="limit"
            />
        </div>
        <AddMrnModal ref="addMrnModal" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import MonitorToolbar from '@/components/monitor/MonitorToolbar.vue'
import MonitorTable from '@/components/monitor/MonitorTable.vue'
import AddMrnModal from '@/components/monitor/AddMrnModal.vue'
import { useMonitorStore } from '@/store/MonitorStore'

const monitorStore = useMonitorStore()
const addMrnModal = ref<InstanceType<typeof AddMrnModal> | null>(null)

// Computed properties for pagination controls
const page = computed({
    get: () => monitorStore.pagination.page,
    set: (value) => monitorStore.setPage(value),
})

const limit = computed({
    get: () => monitorStore.pagination.limit,
    set: (value) => monitorStore.setLimit(value),
})

const total = computed(() => monitorStore.pagination.total)
const perPageOptions = computed(() => monitorStore.pagination.perPageOptions)

onMounted(() => {
    monitorStore.fetchMrns()
})

const showAddMrnModal = async () => {
    if (addMrnModal.value) {
        const mrn = await addMrnModal.value.show()
        if (mrn) {
            monitorStore.addMrn(mrn)
        }
    }
}
</script>

<style scoped>
</style>