<template>
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="addMrnModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addMrnModalLabel">Add MRN</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="mrn-input" class="form-label">MRN</label>
                        <input type="text" class="form-control" id="mrn-input" v-model="mrn" @keyup.enter="submit" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="cancel">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="submit">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// @ts-ignore
import { Modal } from 'bootstrap'

const mrn = ref('')
const modal = ref<HTMLElement | null>(null)
let modalInstance: Modal | null = null
let resolvePromise: ((value: string | null) => void) | null = null

onMounted(() => {
    if (modal.value) {
        modalInstance = new Modal(modal.value)
        modal.value.addEventListener('hidden.bs.modal', () => {
            if (resolvePromise) {
                resolvePromise(null)
            }
        })
    }
})

onUnmounted(() => {
    if (modalInstance) {
        modalInstance.dispose()
    }
})

const show = (): Promise<string | null> => {
    return new Promise((resolve) => {
        resolvePromise = resolve
        if (modalInstance) {
            modalInstance.show()
        } else {
            resolve(null)
        }
    })
}

const submit = () => {
    if (resolvePromise) {
        resolvePromise(mrn.value)
    }
    if (modalInstance) {
        modalInstance.hide()
    }
    mrn.value = ''
}

const cancel = () => {
    if (modalInstance) {
        modalInstance.hide()
    }
}

defineExpose({ show })
</script>
