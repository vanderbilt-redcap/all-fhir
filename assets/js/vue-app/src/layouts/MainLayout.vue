<template>
    <div>
        <main>
            <NavigationMenu />
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup lang="ts">
import NavigationMenu from '@/components/NavigationMenu.vue';
</script>

<style scoped>
</style>
