<template>
    <ul class="nav nav-tabs mb-4">
        <li class="nav-item">
            <router-link 
                to="/" 
                class="nav-link"
                :class="{ active: $route.name === 'home' }"
                :aria-current="$route.name === 'home' ? 'page' : undefined"
            >
                <i class="fas fa-home me-2"></i>
                Home
            </router-link>
        </li>
        <li class="nav-item">
            <router-link 
                to="/setup" 
                class="nav-link"
                :class="{ active: $route.name === 'setup' }"
                :aria-current="$route.name === 'setup' ? 'page' : undefined"
            >
                <i class="fas fa-cogs me-2"></i>
                Setup
            </router-link>
        </li>
        <li class="nav-item">
            <router-link 
                to="/monitor" 
                class="nav-link"
                :class="{ active: $route.name === 'monitor' }"
                :aria-current="$route.name === 'monitor' ? 'page' : undefined"
            >
                <i class="fas fa-database me-2"></i>
                Resources
            </router-link>
        </li>
        <li class="nav-item">
            <router-link 
                to="/tasks" 
                class="nav-link"
                :class="{ active: $route.name === 'tasks' }"
                :aria-current="$route.name === 'tasks' ? 'page' : undefined"
            >
                <i class="fas fa-tasks me-2"></i>
                Tasks
            </router-link>
        </li>
        <!--
        <li class="nav-item">
            <router-link 
                to="/archives" 
                class="nav-link"
                :class="{ active: $route.name === 'archives' }"
                :aria-current="$route.name === 'archives' ? 'page' : undefined"
                >
                <i class="fas fa-archive me-2"></i>
                Archives
            </router-link>
        </li>
        -->
    </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

// Access current route for active state
const $route = useRoute()
</script>

<style scoped>
/* Override router-link default styles to work with Bootstrap nav-link */
.nav-link {
    color: #6c757d;
    text-decoration: none;
    transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

.nav-link:hover {
    color: #495057;
    text-decoration: none;
}

.nav-link.active {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}

.nav-link i {
    font-size: 0.875rem;
}
</style>