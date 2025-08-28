<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h6 class="mb-0">
                <i class="fas fa-chart-bar fa-fw"></i> Project Summary
            </h6>
            <button 
                class="btn btn-sm btn-outline-secondary"
                @click="refreshSummary"
                :disabled="loading"
                title="Refresh summary"
            >
                <i class="fas fa-rotate-right fa-fw" :class="{ 'fa-spin': loading }"></i>
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
                                <div class="text-center">
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
                            <i class="fas fa-clock-rotate-left fa-fw"></i> Background Queue Status
                        </h6>
                        <div class="row g-3">
                            <div class="col-md-4">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-check-circle fa-fw text-success me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ queueHealthStatus }}</div>
                                        <small class="text-muted">Queue Health</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-hourglass-half fa-fw text-warning me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ projectSummary.sync_status.pending_tasks }}</div>
                                        <small class="text-muted">Pending Tasks</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-exclamation-triangle fa-fw text-danger me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ projectSummary.sync_status.failed_tasks }}</div>
                                        <small class="text-muted">Failed Tasks</small>
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
                        
                        <!-- Comprehensive Status Progress Bar -->
                        <div class="mb-2">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <small class="text-muted">Resource States Breakdown</small>
                                <small class="text-muted">{{ activeResources }} active resources</small>
                            </div>
                            <div class="progress" style="height: 12px;">
                                <div 
                                    v-if="statePercentages.completed > 0"
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    :style="{ width: statePercentages.completed + '%' }"
                                    :title="`Completed: ${projectSummary?.overall_status_counts.completed || 0} (${statePercentages.completed}%)`"
                                ></div>
                                <div 
                                    v-if="statePercentages.fetching > 0"
                                    class="progress-bar bg-info"
                                    role="progressbar"
                                    :style="{ width: statePercentages.fetching + '%' }"
                                    :title="`Fetching: ${projectSummary?.overall_status_counts.fetching || 0} (${statePercentages.fetching}%)`"
                                ></div>
                                <div 
                                    v-if="statePercentages.pending > 0"
                                    class="progress-bar bg-warning"
                                    role="progressbar"
                                    :style="{ width: statePercentages.pending + '%' }"
                                    :title="`Pending: ${projectSummary?.overall_status_counts.pending || 0} (${statePercentages.pending}%)`"
                                ></div>
                                <div 
                                    v-if="statePercentages.failed > 0"
                                    class="progress-bar bg-danger"
                                    role="progressbar"
                                    :style="{ width: statePercentages.failed + '%' }"
                                    :title="`Failed: ${projectSummary?.overall_status_counts.failed || 0} (${statePercentages.failed}%)`"
                                ></div>
                                <div 
                                    v-if="statePercentages.outdated > 0"
                                    class="progress-bar bg-secondary"
                                    role="progressbar"
                                    :style="{ width: statePercentages.outdated + '%' }"
                                    :title="`Outdated: ${projectSummary?.overall_status_counts.outdated || 0} (${statePercentages.outdated}%)`"
                                ></div>
                            </div>
                            <div class="d-flex justify-content-start mt-1" style="font-size: 0.75rem;">
                                <div v-if="statePercentages.completed > 0" class="me-3">
                                    <span class="badge bg-success me-1">●</span>Completed
                                </div>
                                <div v-if="statePercentages.fetching > 0" class="me-3">
                                    <span class="badge bg-info me-1">●</span>Fetching
                                </div>
                                <div v-if="statePercentages.pending > 0" class="me-3">
                                    <span class="badge bg-warning me-1">●</span>Pending
                                </div>
                                <div v-if="statePercentages.failed > 0" class="me-3">
                                    <span class="badge bg-danger me-1">●</span>Failed
                                </div>
                                <div v-if="statePercentages.outdated > 0" class="me-3">
                                    <span class="badge bg-secondary me-1">●</span>Outdated
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div v-else class="text-center text-muted">
                <i class="fas fa-info-circle fa-fw"></i>
                No summary data available
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMonitorStore } from '@/store/MonitorStore'


const monitorStore = useMonitorStore()
const loading = ref(false)

// Computed properties
const projectSummary = computed(() => monitorStore.projectSummary)

const totalResources = computed(() => {
    if (!projectSummary.value) return 0
    return Object.values(projectSummary.value.overall_status_counts).reduce((sum, count) => sum + count, 0)
})

const activeResources = computed(() => {
    if (!projectSummary.value) return 0
    const statusCounts = projectSummary.value.overall_status_counts
    const deleted = statusCounts.deleted || 0
    return totalResources.value - deleted
})

const completionPercentage = computed(() => {
    if (!projectSummary.value || activeResources.value === 0) return 0
    const completed = projectSummary.value.overall_status_counts.completed || 0
    return Math.round((completed / activeResources.value) * 100)
})

const errorPercentage = computed(() => {
    if (!projectSummary.value || activeResources.value === 0) return 0
    const failed = projectSummary.value.overall_status_counts.failed || 0
    return Math.round((failed / activeResources.value) * 100)
})

const statePercentages = computed(() => {
    if (!projectSummary.value || activeResources.value === 0) {
        return {
            completed: 0,
            failed: 0,
            fetching: 0,
            pending: 0,
            outdated: 0
        }
    }
    
    const statusCounts = projectSummary.value.overall_status_counts
    return {
        completed: Math.round(((statusCounts.completed || 0) / activeResources.value) * 100),
        failed: Math.round(((statusCounts.failed || 0) / activeResources.value) * 100),
        fetching: Math.round(((statusCounts.fetching || 0) / activeResources.value) * 100),
        pending: Math.round(((statusCounts.pending || 0) / activeResources.value) * 100),
        outdated: Math.round(((statusCounts.outdated || 0) / activeResources.value) * 100)
    }
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

onMounted(() => {
    refreshSummary()
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