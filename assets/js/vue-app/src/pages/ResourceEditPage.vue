<template>
  <div class="container py-3">
    <h3 class="mb-3">Edit Mapping Resource</h3>
    <div v-if="store.loading.get" class="text-muted">Loading...</div>
    <div v-else-if="!store.selected">Resource not found.</div>
    <div v-else>
      <div class="mb-2"><small class="text-muted">ID: {{ store.selected.id }}</small></div>
      <ResourceForm v-model="form" />
      <div class="mt-3 d-flex gap-2">
        <button class="btn btn-sm btn-secondary" @click="goBack">
          <i class="fas fa-chevron-left me-1"></i>Back
        </button>
        <button class="btn btn-sm btn-primary" :disabled="!isValid" @click="save">
          <i class="fas fa-save me-1"></i>Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ResourceForm from '@/components/setup/ResourceForm.vue'
import { useMappingResourcesStore } from '@/store/MappingResourcesStore'
import { RESOURCE_TYPE, type ResourceFormType } from '@/types/ResourceForm'
import { useEndpointParamsStore } from '@/store/EndpointParamsStore'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
const store = useMappingResourcesStore()

const form = reactive<ResourceFormType>({
  displayName: '',
  predefinedResource: '',
  customResourceSpec: '',
  resourceType: RESOURCE_TYPE.PREDEFINED,
  params: {}
})

const isValid = computed(() => {
  if (!form.displayName.trim()) return false
  if (form.resourceType === RESOURCE_TYPE.PREDEFINED) return !!form.predefinedResource
  return !!form.customResourceSpec.trim()
})

const hydrateFormFromSelected = () => {
  const r = store.selected
  if (!r) return
  form.displayName = r.name
  if (r.type === 'predefined') {
    form.resourceType = RESOURCE_TYPE.PREDEFINED
    form.predefinedResource = r.resourceSpec
  } else {
    form.resourceType = RESOURCE_TYPE.CUSTOM
    form.customResourceSpec = r.resourceSpec
  }
  form.params = r.params || {}
}

onMounted(async () => {
  const id = String(route.params.id || '')
  await store.select(id)
  hydrateFormFromSelected()
})

const goBack = () => router.push({ name: 'setup' })

const save = async () => {
  const payload: any = { name: form.displayName }
  if (form.resourceType === RESOURCE_TYPE.PREDEFINED) {
    payload.resourceSpec = form.predefinedResource
    // Use endpoint params draft for predefined
    const endpointParamsStore = useEndpointParamsStore()
    const { draft } = storeToRefs(endpointParamsStore)
    if (draft.value && Object.keys(draft.value).length > 0) {
      payload.params = draft.value
    }
  } else {
    payload.resourceSpec = form.customResourceSpec
  }
  await store.updateSelected(payload)
}
</script>

<style scoped>
</style>
