<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h6 class="mb-0">
                <i class="bi bi-bar-chart"></i> Project Summary
            </h6>
            <button 
                class="btn btn-sm btn-outline-secondary"
                @click="refreshSummary"
                :disabled="loading"
                title="Refresh summary"
            >
                <i class="bi bi-arrow-clockwise" :class="{ 'fa-spin': loading }"></i>
            </button>
        </div>
        <div class="card-body">
            <div v-if="loading" class="text-center">
                <div class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            
            <div v-else-if="projectSummary" class="row g-3">
                <!-- Overall Statistics -->
                <div class="col-md-6">
                    <div class="border rounded p-3 h-100">
                        <h6 class="text-muted mb-3">Overall Statistics</h6>
                        <div class="row g-2">
                            <div class="col-6">
                                <div class="text-center">
                                    <div class="h4 mb-1 text-primary">{{ projectSummary.total_mrns }}</div>
                                    <small class="text-muted">Total MRNs</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="text-center">
                                    <div class="h4 mb-1 text-info">{{ totalResources }}</div>
                                    <small class="text-muted">Total Resources</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Resource Status Breakdown -->
                <div class="col-md-6">
                    <div class="border rounded p-3 h-100">
                        <h6 class="text-muted mb-3">Resource Status</h6>
                        <div class="row g-2">
                            <div v-for="(count, status) in projectSummary.overall_status_counts" :key="status" class="col-6">
                                <div v-if="count > 0" class="text-center">
                                    <div class="h5 mb-1" :class="getStatusColor(status)">{{ count }}</div>
                                    <small class="text-muted">{{ capitalizeStatus(status) }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Queue Status -->
                <div class="col-12">
                    <div class="border rounded p-3">
                        <h6 class="text-muted mb-3">
                            <i class="bi bi-clock-history"></i> Background Queue Status
                        </h6>
                        <div class="row g-3">
                            <div class="col-md-4">
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-hourglass-split text-warning me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ projectSummary.sync_status.pending_tasks }}</div>
                                        <small class="text-muted">Pending Tasks</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-exclamation-triangle text-danger me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ projectSummary.sync_status.failed_tasks }}</div>
                                        <small class="text-muted">Failed Tasks</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-circle text-success me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ queueHealthStatus }}</div>
                                        <small class="text-muted">Queue Health</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Progress Bars -->
                <div class="col-12">
                    <div class="border rounded p-3">
                        <h6 class="text-muted mb-3">Completion Progress</h6>
                        <div class="mb-2">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <small class="text-muted">Overall Completion</small>
                                <small class="text-muted">{{ completionPercentage }}%</small>
                            </div>
                            <div class="progress" style="height: 8px;">
                                <div 
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    :style="{ width: completionPercentage + '%' }"
                                    :aria-valuenow="completionPercentage"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        
                        <div v-if="errorPercentage > 0" class="mb-2">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <small class="text-muted">Error Rate</small>
                                <small class="text-muted">{{ errorPercentage }}%</small>
                            </div>
                            <div class="progress" style="height: 6px;">
                                <div 
                                    class="progress-bar bg-danger"
                                    role="progressbar"
                                    :style="{ width: errorPercentage + '%' }"
                                    :aria-valuenow="errorPercentage"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div v-else class="text-center text-muted">
                <i class="bi bi-info-circle"></i>
                No summary data available
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ProjectSummary } from '@/models/Mrn'
import { useMonitorStore } from '@/store/MonitorStore'

const props = defineProps<{
    autoRefresh?: boolean
}>()

const monitorStore = useMonitorStore()
const loading = ref(false)

// Computed properties
const projectSummary = computed(() => monitorStore.projectSummary)

const totalResources = computed(() => {
    if (!projectSummary.value) return 0
    return Object.values(projectSummary.value.overall_status_counts).reduce((sum, count) => sum + count, 0)
})

const completionPercentage = computed(() => {
    if (!projectSummary.value || totalResources.value === 0) return 0
    const completed = projectSummary.value.overall_status_counts.completed || 0
    return Math.round((completed / totalResources.value) * 100)
})

const errorPercentage = computed(() => {
    if (!projectSummary.value || totalResources.value === 0) return 0
    const failed = projectSummary.value.overall_status_counts.failed || 0
    return Math.round((failed / totalResources.value) * 100)
})

const queueHealthStatus = computed(() => {
    if (!projectSummary.value) return 'Unknown'
    const pending = projectSummary.value.sync_status.pending_tasks
    const failed = projectSummary.value.sync_status.failed_tasks
    
    if (failed > 5) return 'Poor'
    if (pending > 10) return 'Busy'
    if (failed > 0 || pending > 0) return 'Active'
    return 'Healthy'
})

// Methods
const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
        case 'completed':
            return 'text-success'
        case 'failed':
            return 'text-danger'
        case 'fetching':
            return 'text-info'
        case 'pending':
            return 'text-warning'
        case 'outdated':
            return 'text-secondary'
        case 'deleted':
            return 'text-muted'
        default:
            return 'text-secondary'
    }
}

const capitalizeStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
}

const refreshSummary = async () => {
    try {
        loading.value = true
        await monitorStore.getProjectSummary()
    } catch (error) {
        console.error('Failed to refresh project summary:', error)
    } finally {
        loading.value = false
    }
}

// Auto-refresh if enabled
let refreshInterval: NodeJS.Timeout | null = null

const startAutoRefresh = () => {
    if (props.autoRefresh && !refreshInterval) {
        refreshInterval = setInterval(refreshSummary, 60000) // Refresh every minute
    }
}

const stopAutoRefresh = () => {
    if (refreshInterval) {
        clearInterval(refreshInterval)
        refreshInterval = null
    }
}

onMounted(() => {
    refreshSummary()
    if (props.autoRefresh) {
        startAutoRefresh()
    }
})

// Cleanup on unmount
import { onUnmounted } from 'vue'
onUnmounted(() => {
    stopAutoRefresh()
})
</script>

<style scoped>
.progress {
    border-radius: 4px;
}

.card {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.card-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.fa-spin {
    animation: spin 1s linear infinite;
}
</style>