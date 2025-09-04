<template>
  <div class="card h-100 border-0 shadow-sm bg-light rounded">
    <div class="card-body d-flex align-items-center">
      <div class="step-number me-4">
        <div :class="['text-white rounded-circle d-flex align-items-center justify-content-center', circleClass]">
          <span class="fw-bold">{{ number }}</span>
        </div>
      </div>
      <div class="step-content flex-grow-1">
        <h5 class="mb-1">{{ title }}</h5>
        <p class="text-muted mb-2">
          <slot />
        </p>
        <div>
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  number: number | string
  title: string
  variant?: 'primary' | 'success' | 'info' | 'warning' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

const circleClass = computed(() => `bg-${props.variant}`)
</script>

<style scoped>
.step-number > div {
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
}
</style>

