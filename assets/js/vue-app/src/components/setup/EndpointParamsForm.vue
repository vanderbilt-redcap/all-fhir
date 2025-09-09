<template>
  <div v-if="schema.length" class="mt-3 border-top pt-3">
    <div class="mb-2 text-muted small">Endpoint Parameters</div>
    <div class="d-flex flex-column gap-2">
      <div v-for="def in schema" :key="def.key">
        <label class="form-label mb-1">{{ def.label }}<span v-if="def.required" class="text-danger"> *</span></label>
        <template v-if="def.type === 'string'">
          <input class="form-control form-control-sm" type="text" :placeholder="def.description || ''" :value="draft[def.key] ?? ''" @input="onInput(def.key, ($event.target as HTMLInputElement).value)" />
        </template>
        <template v-else-if="def.type === 'number'">
          <input class="form-control form-control-sm" type="number" :placeholder="def.description || ''" :value="draft[def.key] ?? ''" @input="onInput(def.key, ($event.target as HTMLInputElement).valueAsNumber)" />
        </template>
        <template v-else-if="def.type === 'boolean'">
          <select class="form-select form-select-sm" :value="String(draft[def.key] ?? '')" @change="onInput(def.key, ($event.target as HTMLSelectElement).value === 'true')">
            <option :value="''">--</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </template>
        <template v-else-if="def.type === 'date'">
          <input class="form-control form-control-sm" type="date" :value="draft[def.key] ?? ''" @input="onInput(def.key, ($event.target as HTMLInputElement).value)" />
        </template>
        <template v-else-if="def.type === 'enum'">
          <select class="form-select form-select-sm" :value="draft[def.key] ?? ''" @change="onInput(def.key, ($event.target as HTMLSelectElement).value)">
            <option :value="''">-- Select --</option>
            <option v-for="opt in def.enumOptions || []" :key="String(opt.value)" :value="String(opt.value)">{{ opt.label }}</option>
          </select>
        </template>
        <div v-if="def.server_resolved" class="form-text text-muted">Resolved server-side (e.g., to FHIR ResearchStudy ID)</div>
        <div v-if="errors[def.key]" class="text-danger small">{{ errors[def.key] }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useEndpointParamsStore } from '@/store/EndpointParamsStore'
import type { EndpointParamDef } from '@/models/EndpointParams'
import { computed } from 'vue'

const endpointParamsStore = useEndpointParamsStore()
const { draft } = storeToRefs(endpointParamsStore)

const props = defineProps<{ resourceSpec: string }>()

const schema = computed<EndpointParamDef[]>(() => endpointParamsStore.getSchema(props.resourceSpec))
const errors = computed<Record<string, string>>(() => ({}))

function onInput(key: string, value: any) {
  endpointParamsStore.updateDraftField(key, value)
}
</script>

<style scoped>
</style>

