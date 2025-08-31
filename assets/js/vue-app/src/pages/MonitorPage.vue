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
            <ArchiveOptionsModal 
                ref="archiveOptionsModal" 
                :selected-mrns="operationsStore.archiveModalSelectedMrns"
                :archive-type="operationsStore.archiveModalType"
                @create="handleArchiveCreate"
            />
            <ArchiveCreationModal ref="archiveCreationModal" />
            <StreamingArchiveModal 
                ref="streamingArchiveModal" 
                :selected-mrns="operationsStore.streamingModalSelectedMrns"
                :archive-type="operationsStore.streamingModalType"
            />
        </Teleport>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import MonitorToolbar from '@/components/monitor/MonitorToolbar.vue'
import MonitorTable from '@/components/monitor/MonitorTable.vue'
import AddMrnModal from '@/components/monitor/AddMrnModal.vue'
import ResourceContentModal from '@/components/shared/ResourceContentModal.vue'
import ArchiveOptionsModal from '@/components/monitor/ArchiveOptionsModal.vue'
import ArchiveCreationModal from '@/components/monitor/ArchiveCreationModal.vue'
import StreamingArchiveModal from '@/components/archives/StreamingArchiveModal.vue'
import ProjectSummaryWidget from '@/components/monitor/ProjectSummaryWidget.vue'
import { useMonitorStore } from '@/store/MonitorStore'
import { useOperationsStore } from '@/store/OperationsStore'
import { useArchiveStore } from '@/store/ArchiveStore'
import { useNotificationStore } from '@/store/NotificationStore'
import type { ArchiveCreateOptions } from '@/models/Archive'

const monitorStore = useMonitorStore()
const operationsStore = useOperationsStore()
const archiveStore = useArchiveStore()
const notificationStore = useNotificationStore()

// Modal refs
const addMrnModal = ref<InstanceType<typeof AddMrnModal> | null>(null)
const archiveOptionsModal = ref<InstanceType<typeof ArchiveOptionsModal> | null>(null)
const archiveCreationModal = ref<InstanceType<typeof ArchiveCreationModal> | null>(null)
const streamingArchiveModal = ref<InstanceType<typeof StreamingArchiveModal> | null>(null)

// Watch for store-controlled modal visibility
watch(() => operationsStore.archiveModalVisible, async (visible) => {
  if (visible) {
    await archiveOptionsModal.value?.show()
    operationsStore.hideArchiveModal()
  }
})

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
        const mrn = await addMrnModal.value.show()
        if (mrn) {
            try {
                await monitorStore.addMrn(mrn)
                notificationStore.showSuccess('MRN added successfully')
            } catch (error) {
                notificationStore.showError('Failed to add MRN')
            }
        }
    }
}


const handleArchiveCreate = async (options: ArchiveCreateOptions, type: 'selected' | 'all', selectedMrns?: string[]) => {
    try {
        let result
        
        if (type === 'selected' && selectedMrns) {
            result = await archiveStore.createArchiveSelected(selectedMrns, options)
        } else {
            result = await archiveStore.createArchiveAll(options)
        }
        
        if (result) {
            // Show creation modal with result
            archiveCreationModal.value?.show(result)
            
            if (result.success) {
                notificationStore.showSuccess(result.message)
            } else {
                notificationStore.showError(result.message)
            }
        }
    } catch (error) {
        console.error('Failed to create archive:', error)
        notificationStore.showError('Failed to create archive')
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