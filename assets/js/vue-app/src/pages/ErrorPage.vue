<template>
  <div class="card shadow-sm">
    <div class="card-body">
        <div class="text-center">
            <h1 class="display-4">Something went wrong</h1>
            <p class="lead text-danger" v-if="message">Error: {{ message }}</p>
            <p class="text-muted" v-else>We're sorry for the inconvenience. Please try again later.</p>
            <router-link to="/" class="btn btn-primary mt-3">Go back to Home</router-link>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const message = route.query.message as string | undefined
</script>
