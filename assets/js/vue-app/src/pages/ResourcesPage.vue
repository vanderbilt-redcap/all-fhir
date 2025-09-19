<template>
    <div class="p-0">
        <!-- Project Summary Widget (collapsible) -->
        <div v-if="operationsStore.showSummary" class="mb-4">
            <ProjectSummaryWidget />
        </div>
        
        <!-- Enhanced Toolbar with Full Sync and Retry Options -->
        <MonitorToolbar 
            @add-mrn="showAddMrnModal"
        />

        <!-- Enhanced Monitor Table with Detailed Resource Information -->
        <MonitorTable
            :items="monitorStore.mrns"
            :loading="monitorStore.loading"
            :selected-mrns="monitorStore.selectedMrns"
            :all-selected="monitorStore.allSelected"
            :indeterminate="monitorStore.indeterminate"
            @toggle-select-all="monitorStore.toggleSelectAll"
        />

        <!-- Pagination Controls -->
        <div class="d-flex justify-content-between align-items-center mt-3" v-if="monitorStore.pagination.total > 0">
            <small class="text-muted">
                Showing {{ paginationInfo.start }}-{{ paginationInfo.end }} of {{ paginationInfo.total }} MRNs
            </small>
            <div class="d-flex gap-2">
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
        </div>

        <!-- Add MRN Modal -->
        <AddMrnModal ref="addMrnModal" />

        <!-- Resource Content Modal -->
        <ResourceContentModal />

        <!-- Archive Modals -->
        <Teleport to="body">
            <StreamingArchiveModal 
                ref="streamingArchiveModal" 
                :selected-mrns="operationsStore.streamingModalSelectedMrns"
                :archive-type="operationsStore.streamingModalType"
            />
            <BulkMrnErrorsModal ref="bulkMrnErrorsModal" />
        </Teleport>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import MonitorToolbar from '@/components/monitor/MonitorToolbar.vue'
import MonitorTable from '@/components/monitor/MonitorTable.vue'
import AddMrnModal from '@/components/monitor/AddMrnModal.vue'
import ResourceContentModal from '@/components/shared/ResourceContentModal.vue'
import StreamingArchiveModal from '@/components/archives/StreamingArchiveModal.vue'
import BulkMrnErrorsModal from '@/components/monitor/BulkMrnErrorsModal.vue'
import ProjectSummaryWidget from '@/components/monitor/ProjectSummaryWidget.vue'
import { useMonitorStore } from '@/store/MonitorStore'
import { useOperationsStore } from '@/store/OperationsStore'
import { useNotificationStore } from '@/store/NotificationStore'

const monitorStore = useMonitorStore()
const operationsStore = useOperationsStore()
const notificationStore = useNotificationStore()

// Modal refs
const addMrnModal = ref<InstanceType<typeof AddMrnModal> | null>(null)
const streamingArchiveModal = ref<InstanceType<typeof StreamingArchiveModal> | null>(null)
const bulkMrnErrorsModal = ref<InstanceType<typeof BulkMrnErrorsModal> | null>(null)

// Watch for store-controlled modal visibility
watch(() => operationsStore.streamingModalVisible, async (visible) => {
  if (visible) {
    await streamingArchiveModal.value?.show()
    operationsStore.hideStreamingModal()
  }
})

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

const paginationInfo = computed(() => {
    const total = monitorStore.pagination.total
    const page = monitorStore.pagination.page
    const limit = monitorStore.pagination.limit
    const start = total === 0 ? 0 : (page - 1) * limit + 1
    const end = Math.min(page * limit, total)
    
    return { start, end, total }
})


// Methods
const showAddMrnModal = async () => {
  if (addMrnModal.value) {
    const input = await addMrnModal.value.show()
    if (input) {
      try {
        const result = await monitorStore.addMrnsFromString(input)
        const added = result.added_count || 0
        const failed = result.failed_count || 0
        if (failed === 0) {
          notificationStore.showSuccess(`Added ${added} MRN(s).`)
        } else {
          bulkMrnErrorsModal.value?.show(result.failures, added, failed)
        }
      } catch (error) {
        notificationStore.showError('Failed to add MRNs')
      }
    }
  }
}


// Lifecycle
onMounted(async () => {
    // Initial data load
    try {
        await Promise.all([
            monitorStore.fetchMrns(),
            monitorStore.getProjectSummary()
        ])
        
    } catch (error) {
        console.error('Failed to load initial data:', error)
        notificationStore.showError('Failed to load initial data')
    }
})

</script>

<style scoped>
</style>
