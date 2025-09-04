<template>
  <div class="d-flex gap-3 align-items-start">
    <div class="feature-icon d-flex align-items-start justify-content-center">
      <slot name="icon" />
    </div>
    <div class="d-flex flex-column gap-2 align-items-start">
      <div class="d-flex gap-2">
        <span class="fs-6 fw-bold mb-1">
          <slot name="title" />
        </span>
      </div>
      <p class="text-muted mb-0">
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Presentational component with slots for title and content
</script>

<style scoped>
/* Inherit typography from parent containers */
.feature-icon :deep(i) {
  line-height: 1;
}
</style>
