<template>
    <div class="p-3">
        <!-- Enhanced Toolbar with Full Sync and Retry Options -->
        <MonitorToolbar 
            @add-mrn="showAddMrnModal"
            @create-archive-selected="showArchiveOptionsSelected"
            @create-archive-all="showArchiveOptionsAll"
        />

        <!-- Project Summary Widget (collapsible) -->
        <div v-if="operationsStore.showSummary" class="mb-4">
            <ProjectSummaryWidget />
        </div>

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

        <!-- Archive Modals -->
        <Teleport to="body">
            <ArchiveOptionsModal 
                ref="archiveOptionsModal" 
                :selected-mrns="operationsStore.archiveModalSelectedMrns"
                :archive-type="operationsStore.archiveModalType"
                @create="handleArchiveCreate"
            />
            <ArchiveCreationModal ref="archiveCreationModal" />
        </Teleport>

        <!-- Operation Feedback Toast -->
        <div 
            v-if="operationsStore.showToast && operationsStore.lastOperation"
            class="toast-container position-fixed bottom-0 end-0 p-3"
        >
            <div 
                class="toast show"
                :class="operationsStore.lastOperation.success ? 'bg-success' : 'bg-danger'"
                role="alert"
            >
                <div class="d-flex">
                    <div class="toast-body text-white">
                        <i :class="operationsStore.lastOperation.success ? 'fas fa-check-circle fa-fw' : 'fas fa-exclamation-triangle fa-fw'"></i>
                        {{ operationsStore.lastOperation.message }}
                    </div>
                    <button 
                        type="button" 
                        class="btn-close btn-close-white me-2 m-auto"
                        @click="operationsStore.clearToast()"
                    ></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import MonitorToolbar from '@/components/monitor/MonitorToolbar.vue'
import MonitorTable from '@/components/monitor/MonitorTable.vue'
import AddMrnModal from '@/components/monitor/AddMrnModal.vue'
import ArchiveOptionsModal from '@/components/monitor/ArchiveOptionsModal.vue'
import ArchiveCreationModal from '@/components/monitor/ArchiveCreationModal.vue'
import ProjectSummaryWidget from '@/components/monitor/ProjectSummaryWidget.vue'
import { useMonitorStore } from '@/store/MonitorStore'
import { useOperationsStore } from '@/store/OperationsStore'
import { useArchiveStore } from '@/store/ArchiveStore'
import type { ArchiveCreateOptions } from '@/models/Archive'

const monitorStore = useMonitorStore()
const operationsStore = useOperationsStore()
const archiveStore = useArchiveStore()

// Modal refs
const addMrnModal = ref<InstanceType<typeof AddMrnModal> | null>(null)
const archiveOptionsModal = ref<InstanceType<typeof ArchiveOptionsModal> | null>(null)
const archiveCreationModal = ref<InstanceType<typeof ArchiveCreationModal> | null>(null)

// Watch for store-controlled modal visibility
watch(() => operationsStore.archiveModalVisible, async (visible) => {
  if (visible) {
    await archiveOptionsModal.value?.show()
    operationsStore.hideArchiveModal()
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

// Archive-specific computed properties
const selectedMrnsStrings = computed(() => {
    return monitorStore.mrns
        .filter(mrn => monitorStore.selectedMrns.includes(mrn.id))
        .map(mrn => mrn.mrn)
})

// Methods
const showAddMrnModal = async () => {
    if (addMrnModal.value) {
        const mrn = await addMrnModal.value.show()
        if (mrn) {
            try {
                await monitorStore.addMrn(mrn)
                operationsStore.recordOperation('add-mrn', true, 'MRN added successfully')
            } catch (error) {
                operationsStore.recordOperation('add-mrn', false, 'Failed to add MRN')
            }
        }
    }
}

// Archive methods
const showArchiveOptionsSelected = async () => {
    if (selectedMrnsStrings.value.length === 0) {
        operationsStore.recordOperation('archive-selected', false, 'No MRNs selected for archive')
        return
    }
    
    operationsStore.showArchiveModalSelected(selectedMrnsStrings.value)
}

const showArchiveOptionsAll = async () => {
    operationsStore.showArchiveModalAll()
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
            
            operationsStore.recordOperation(
                'archive-create', 
                result.success, 
                result.message
            )
        }
    } catch (error) {
        console.error('Failed to create archive:', error)
        operationsStore.recordOperation('archive-create', false, 'Failed to create archive')
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
        operationsStore.recordOperation('initial-load', false, 'Failed to load initial data')
    }
})

</script>

<style scoped>
</style>