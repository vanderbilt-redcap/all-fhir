<template>
  <div class="home-page">
    <!-- Hero Section (merged with Key Features) -->
    <div class="hero-section text-center mb-5">
      <div class="d-flex flex-column gap-2 align-items-center">
        <img :src="ALL_FHIR_LOGO" title="ALL FHIR" style="height: 200px"/>
        <p class="text-muted mb-4">
          With this module, FHIR resources for configured MRNs are retrieved in the background. It connects to your specified EHR systems, fetches the payload, and stores it in its original form. When data is ready, it assembles the requested mix of MRNs and resource types into a ZIP tailored to your needs.
        </p>
      </div>

      <div class="text-center mb-2">
        <h2>Key Features</h2>
      </div>

      <div class="row g-4 mt-2 text-start">
        
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <FeatureHighlight>
                <template #icon>
                  <i class="fas fa-database fa-4x text-success"></i>
                </template>
                <template #title>
                  Resources Management
                </template>
                Manage patient MRNs and monitor the status of each FHIR resource type as it progresses through pending, fetching, completed, or failed states — all from one place.
              </FeatureHighlight>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <FeatureHighlight>
                <template #icon>
                  <i class="fas fa-robot fa-4x text-primary"></i>
                </template>
                <template #title>
                  Background Automation
                </template>
                Resource collection runs automatically in the background. New and updated data are fetched on a schedule without manual steps, so downloads are ready on demand with minimal waiting.
              </FeatureHighlight>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <FeatureHighlight>
                <template #icon>
                  <i class="fas fa-file-archive fa-4x text-info"></i>
                </template>
                <template #title>
                  Archive Creation
                </template>
                Create archives by selecting any combination of MRNs and resource types. Build exactly the package you need as a ZIP file.
              </FeatureHighlight>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Cards Section removed: merged into hero -->

    <!-- Getting Started Section -->
    <div class="getting-started-section mb-5">
      <div class="text-center mb-4">
        <h2>Getting Started</h2>
        <p class="text-muted">Follow these steps to fetch and package FHIR resources</p>
      </div>
      
      <div class="row g-4 workflow-steps">
        <div class="col-12 col-lg-6">
          <StepCard :number="1" title="Configure Your Setup" variant="primary">
            Select FHIR system and resource types to fetch
            <template #actions>
              <router-link to="/setup" class="btn btn-primary btn-sm">
                <i class="fas fa-cogs me-1"></i>
                Go to Setup
              </router-link>
            </template>
          </StepCard>
        </div>

        <div class="col-12 col-lg-6">
          <StepCard :number="2" title="Add Patient MRNs" variant="success">
            Add patient identifiers to fetch FHIR resources
            <template #actions>
              <router-link to="/resources" class="btn btn-success btn-sm">
                <i class="fas fa-database me-1"></i>
                Manage MRNs
              </router-link>
            </template>
          </StepCard>
        </div>

        <div class="col-12 col-lg-6">
          <StepCard :number="3" title="Background Fetching" variant="info">
            Fetching runs automatically in the background. Monitor progress and, if needed, queue manual retries — no manual steps required for routine updates.
            <template #actions>
              <router-link to="/tasks" class="btn btn-info btn-sm">
                <i class="fas fa-tasks me-1"></i>
                View Progress
              </router-link>
            </template>
          </StepCard>
        </div>

        <div class="col-12 col-lg-6">
          <StepCard :number="4" title="Generate ZIP Archive" variant="warning">
            Once resources are completed, generate a tailored ZIP file with exactly the MRNs and resource types you want.
            <template #actions>
              <router-link to="/resources" class="btn btn-warning btn-sm">
                <i class="fas fa-download me-1"></i>
                Create ZIP
              </router-link>
            </template>
          </StepCard>
        </div>
      </div>
    </div>

    <!-- Project Status Overview -->
    <div v-if="showProjectStatus" class="status-section">
      <div class="text-center mb-4">
        <h2>Project Status</h2>
        <p class="text-muted">Current overview of your FHIR snapshot project</p>
      </div>
      
      <!-- First Row - Overview Statistics -->
      <div class="row g-4 mb-4">
        <div class="col-md-3 col-sm-6">
          <div class="stat-card card border-0 bg-primary text-white text-center h-100">
            <div class="card-body">
              <i class="fas fa-user-injured fa-2x mb-2"></i>
              <h3 class="mb-1">{{ totalMrns }}</h3>
              <p class="mb-0 small">Total MRNs</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="stat-card card border-0 bg-secondary text-white text-center h-100">
            <div class="card-body">
              <i class="fas fa-database fa-2x mb-2"></i>
              <h3 class="mb-1">{{ totalResources }}</h3>
              <p class="mb-0 small">Total Resources</p>
              <p class="mb-0" style="font-size: 0.8rem; opacity: 0.9">includes deleted</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="stat-card card border-0 bg-dark text-white text-center h-100">
            <div class="card-body">
              <i class="fas fa-play-circle fa-2x mb-2"></i>
              <h3 class="mb-1">{{ activeResources }}</h3>
              <p class="mb-0 small">Active Resources</p>
              <p class="mb-0" style="font-size: 0.8rem; opacity: 0.9">excludes deleted</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="stat-card card border-0 bg-success text-white text-center h-100">
            <div class="card-body">
              <i class="fas fa-file-medical fa-2x mb-2"></i>
              <h3 class="mb-1">{{ totalResourceTypes }}</h3>
              <p class="mb-0 small">Resource Types</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Row - Status Breakdown -->
      <div class="row g-4">
        <div class="col-md-3 col-sm-6">
          <div class="stat-card card border-0 bg-success text-white text-center h-100">
            <div class="card-body">
              <i class="fas fa-check-circle fa-2x mb-2"></i>
              <h3 class="mb-1">{{ completedResources }}</h3>
              <p class="mb-0 small">Completed</p>
              <p v-if="completionRate > 0" class="mb-0" style="font-size: 0.8rem; opacity: 0.9">{{ completionRate }}% complete</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="stat-card card border-0 bg-danger text-white text-center h-100">
            <div class="card-body">
              <i class="fas fa-exclamation-circle fa-2x mb-2"></i>
              <h3 class="mb-1">{{ failedResources }}</h3>
              <p class="mb-0 small">Failed</p>
              <p v-if="errorRate > 0" class="mb-0" style="font-size: 0.8rem; opacity: 0.9">{{ errorRate }}% error rate</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="stat-card card border-0 bg-info text-white text-center h-100">
            <div class="card-body">
              <i class="fas fa-sync fa-2x mb-2"></i>
              <h3 class="mb-1">{{ fetchingResources }}</h3>
              <p class="mb-0 small">Fetching</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="stat-card card border-0 bg-warning text-white text-center h-100">
            <div class="card-body">
              <i class="fas fa-clock fa-2x mb-2"></i>
              <h3 class="mb-1">{{ pendingResources }}</h3>
              <p class="mb-0 small">Pending</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions for Configured Projects -->
      <div v-if="isConfigured" class="mt-4 text-center">
        <div class="btn-group gap-2" role="group">
          <router-link to="/resources" class="btn btn-primary">
            <i class="fas fa-database me-1"></i>
            Manage Resources
          </router-link>
          <router-link to="/tasks" class="btn btn-outline-secondary">
            <i class="fas fa-tasks me-1"></i>
            View Tasks
          </router-link>
        </div>
      </div>
    </div>

    <!-- Configuration Needed Alert -->
    <div v-else class="alert alert-info text-center">
      <i class="fas fa-info-circle fa-2x mb-3"></i>
      <h4>Get Started</h4>
      <p class="mb-3">Configure your FHIR system and resource types to begin fetching data.</p>
      <router-link to="/setup" class="btn btn-primary">
        <i class="fas fa-cogs me-1"></i>
        Configure Now
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useSettingsStore } from '@/store/SettingsStore'
import { useMonitorStore } from '@/store/MonitorStore'
import { storeToRefs } from 'pinia'
import ALL_FHIR_LOGO from '@/assets/ALL FHIR Logo-trim.png'
import FeatureHighlight from '@/components/shared/FeatureHighlight.vue'
import StepCard from '@/components/shared/StepCard.vue'

const settingsStore = useSettingsStore()
const monitorStore = useMonitorStore()

const {
  selectedFhirSystem,
  selectedMappingResources,
  selectedCustomMappingResources
} = storeToRefs(settingsStore)

onMounted(async () => {
  // Load initial data for dashboard
  try {
    await Promise.all([
      settingsStore.fetchProjectSettings(),
      monitorStore.getProjectSummary()
    ])
  } catch (error) {
    console.error('Failed to load dashboard data:', error)
  }
})


// Computed properties for dashboard stats
const isConfigured = computed(() => {
  return selectedFhirSystem.value && 
         (selectedMappingResources.value?.length > 0 || 
          selectedCustomMappingResources.value?.length > 0)
})

const showProjectStatus = computed(() => {
  return isConfigured.value && monitorStore.projectSummary
})

const totalMrns = computed(() => {
  return monitorStore.projectSummary?.total_mrns || 0
})

const totalResourceTypes = computed(() => {
  const predefined = selectedMappingResources.value?.length || 0
  const custom = selectedCustomMappingResources.value?.length || 0
  return predefined + custom
})

const completedResources = computed(() => {
  return monitorStore.projectSummary?.overall_status_counts?.['completed'] || 0
})

const pendingResources = computed(() => {
  return monitorStore.projectSummary?.overall_status_counts?.['pending'] || 0
})

const fetchingResources = computed(() => {
  return monitorStore.projectSummary?.overall_status_counts?.['fetching'] || 0
})

const failedResources = computed(() => {
  return monitorStore.projectSummary?.overall_status_counts?.['failed'] || 0
})

const totalResources = computed(() => {
  if (!monitorStore.projectSummary) return 0
  return Object.values(monitorStore.projectSummary.overall_status_counts).reduce((sum, count) => sum + count, 0)
})

const activeResources = computed(() => {
  if (!monitorStore.projectSummary) return 0
  const deleted = monitorStore.projectSummary.overall_status_counts?.deleted || 0
  return totalResources.value - deleted
})

const errorRate = computed(() => {
  if (!activeResources.value) return 0
  const failed = failedResources.value
  return Math.round((failed / activeResources.value) * 100)
})

const completionRate = computed(() => {
  if (!activeResources.value) return 0
  const completed = completedResources.value
  return Math.round((completed / activeResources.value) * 100)
})
</script>

<style scoped>
.home-page {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section Styles */
.hero-section .display-4 {
  font-weight: 300;
  color: #2c3e50;
}

.hero-section .lead {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.hero-section .bg-light {
  border: 1px solid #e9ecef;
}

.hero-section i.fa-2x {
  display: block;
}

.hero-section h6 {
  margin-bottom: 0.25rem;
  font-weight: 600;
}

/* Feature Cards Styles */
.features-section .card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.features-section .card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.features-section .feature-icon {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.features-section .card-title {
  color: #2c3e50;
  font-weight: 600;
}

/* Getting Started Workflow Styles */
.workflow-steps .step-number > div {
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
}

.workflow-steps .step-content h5 {
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.workflow-steps .step-content p {
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.4;
}

.workflow-steps .step-icon {
  width: 60px;
  text-align: center;
}

/* Status Section Styles */
.status-section {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 1rem;
}

.status-section .stat-card {
  transition: transform 0.2s ease-in-out;
}

.status-section .stat-card:hover {
  transform: translateY(-3px);
}

.status-section .stat-card .card-body {
  padding: 2rem 1rem;
}

.status-section .stat-card h3 {
  font-size: 2.5rem;
  font-weight: bold;
}

.status-section .stat-card .card-body p[style*="font-size: 0.8rem"] {
  margin-top: 0.25rem !important;
  font-weight: 500;
}

.status-section .btn-group {
  display: flex;
  gap: 0.5rem;
}

/* Configuration Alert Styles */
.alert {
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.alert i.fa-2x {
  color: #0dcaf0;
}

.alert h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .home-page {
    padding: 1rem 0.5rem;
  }
  
  .hero-section .display-4 {
    font-size: 2.5rem;
  }
  
  .workflow-steps .step {
    flex-direction: column;
    text-align: center;
  }
  
  .workflow-steps .step-number {
    margin-bottom: 1rem;
  }
  
  .workflow-steps .step-icon {
    display: none;
  }
  
  .status-section {
    padding: 1.5rem;
  }
  
  .status-section .stat-card h3 {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .features-section .col-md-6.col-lg-3 {
    margin-bottom: 1rem;
  }
  
  .status-section .btn-group {
    flex-direction: column;
    align-items: center;
  }
  
  .status-section .btn-group .btn {
    width: 200px;
  }
}
</style>
