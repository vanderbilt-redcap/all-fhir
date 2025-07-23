<template>
    <div class="error-wrapper">
        <slot name="title">
            <span class="error-title">Error 404</span>
        </slot>
        <slot name="description">
            <span class="error-description">Sorry, we couldn't find this page.</span>
        </slot>
        <slot name="subdescription">
            <span class="error-sub-description">But dont worry, you can find plenty of other things on the homepage..</span>
        </slot>
        <div class="mt-5">
            <router-link to="/" class="btn btn-sm btn-primary">
                <i class="fas fa-arrow-left fa-fw me-1"></i>
                <span>Back to Home</span>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.error-wrapper {
    text-align: center;
}
.error-title {
    font-weight: bold;
    font-size: 8rem;
    display: block;
}
.error-description {
    font-size: 2rem;
    display: block;
    font-weight: bold;
}

</style>
