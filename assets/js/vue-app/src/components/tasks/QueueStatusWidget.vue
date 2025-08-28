<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h6 class="mb-0">
                <i class="fas fa-clock-rotate-left fa-fw"></i> Background Queue Status
            </h6>
            <button 
                class="btn btn-sm btn-outline-secondary"
                @click="refreshStatus"
                :disabled="loading"
                title="Refresh queue status"
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
            
            <div v-else class="row g-3">
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
                            <div class="fw-bold">{{ taskStatusCounts.pending }}</div>
                            <small class="text-muted">Pending Tasks</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-exclamation-triangle fa-fw text-danger me-2"></i>
                        <div>
                            <div class="fw-bold">{{ taskStatusCounts.failed }}</div>
                            <small class="text-muted">Failed Tasks</small>
                        </div>
                    </div>
                </div>

                <!-- Additional Queue Metrics -->
                <div class="col-12 mt-3">
                    <div class="border-top pt-3">
                        <div class="row g-3">
                            <div class="col-md-3">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-list fa-fw text-primary me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ taskStatusCounts.total }}</div>
                                        <small class="text-muted">Total Tasks</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-play fa-fw text-info me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ taskStatusCounts.processing }}</div>
                                        <small class="text-muted">Processing</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-check fa-fw text-success me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ taskStatusCounts.completed }}</div>
                                        <small class="text-muted">Completed</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-percentage fa-fw text-secondary me-2"></i>
                                    <div>
                                        <div class="fw-bold">{{ completionRate }}%</div>
                                        <small class="text-muted">Success Rate</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTaskStore } from '@/store/TaskStore'

const taskStore = useTaskStore()
const loading = ref(false)

// Auto-refresh interval
let refreshInterval: number | null = null

// Computed properties
const taskStatusCounts = computed(() => taskStore.taskStatusCounts)

const queueHealthStatus = computed(() => {
    const { pending, failed, processing } = taskStatusCounts.value
    
    if (failed > 5) return 'Poor'
    if (pending + processing > 10) return 'Busy'
    if (failed > 0 || pending > 0 || processing > 0) return 'Active'
    return 'Healthy'
})

const completionRate = computed(() => {
    const { total, completed, failed } = taskStatusCounts.value
    if (total === 0) return 100
    const processedTasks = completed + failed
    return Math.round((completed / Math.max(processedTasks, 1)) * 100)
})

// Methods
const refreshStatus = async () => {
    try {
        loading.value = true
        await taskStore.fetchTasks()
    } catch (error) {
        console.error('Failed to refresh queue status:', error)
    } finally {
        loading.value = false
    }
}

const setupAutoRefresh = () => {
    // Auto-refresh every 30 seconds if there are active tasks
    refreshInterval = setInterval(async () => {
        const { pending, processing } = taskStatusCounts.value
        if (pending > 0 || processing > 0) {
            await taskStore.refreshTaskStatus()
        }
    }, 30000)
}

// Lifecycle
onMounted(async () => {
    await refreshStatus()
    // setupAutoRefresh()
})

onUnmounted(() => {
    if (refreshInterval) {
        clearInterval(refreshInterval)
    }
})
</script>

<style scoped>
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