<template>

    <b-modal ref="modalRef" ok-only size="xl">
        <template #title>
            <span>Error</span>
        </template>
        <template v-for="(error, index) in errors" :key="index">
            <div class="alert alert-danger" v-if="error">
                <div style="word-break: break-all;">
                    {{ useError(error) }}
                </div>
            </div>
        </template>
    </b-modal>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useErrorsStore } from '@/store/errorsStore'
import { storeToRefs } from 'pinia'

const modalRef = ref()
const errorStore = useErrorsStore()
const {errors} = storeToRefs(errorStore)

const useError = (err: unknown) => {
    return JSON.stringify(err)
}

watchEffect(async () => {
    const totalErrors = errors.value?.length ?? 0
    if (errors.value?.length === 0) return
    const modal = modalRef.value
    if (!modal) return
    await modal.show()
    errorStore.resetErrors()
})
</script>

<style scoped></style>
