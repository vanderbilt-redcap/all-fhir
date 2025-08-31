<template>
  <div class="mb-3">
    <label :for="inputId" class="form-label">Archive Name</label>
    <input 
      type="text" 
      :class="['form-control', { 'is-invalid': hasError }]"
      :id="inputId"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      maxlength="100"
    />
    <div v-if="hasError" class="invalid-feedback">
      {{ errorMessage }}
    </div>
    <div v-if="showHelp" class="form-text">
      {{ helpText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: string
  placeholder?: string
  showHelp?: boolean
  helpText?: string
  inputId?: string
  errorMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'archive_name',
  showHelp: true,
  helpText: 'Optional custom name for the archive file (without extension)',
  inputId: 'archive-name',
  errorMessage: ''
})

const hasError = computed(() => {
  return props.errorMessage && props.errorMessage.trim().length > 0
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>