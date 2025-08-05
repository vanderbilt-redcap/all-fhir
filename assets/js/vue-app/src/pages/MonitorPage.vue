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
        <AddMrnModal ref="addMrnModal" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MonitorToolbar from '@/components/monitor/MonitorToolbar.vue'
import MonitorTable from '@/components/monitor/MonitorTable.vue'
import AddMrnModal from '@/components/monitor/AddMrnModal.vue'
import { useMonitorStore } from '@/store/MonitorStore'

const monitorStore = useMonitorStore()
const addMrnModal = ref<InstanceType<typeof AddMrnModal> | null>(null)

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