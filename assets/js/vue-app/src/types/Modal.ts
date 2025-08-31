/**
 * Bootstrap Vue Modal Types
 * 
 * Proper typing for bootstrap-vue modal component instances using Vue's ComponentPublicInstance.
 * This follows Vue.js best practices for typing component template refs.
 */

import type { ComponentPublicInstance } from 'vue'
import { Modal } from 'bootstrap-vue'

/**
 * Type for bootstrap-vue modal component instances
 * Uses Vue's ComponentPublicInstance to get the proper typing
 */
export type BootstrapVueModal = ComponentPublicInstance<typeof Modal>

/**
 * Type for modal template refs
 * Allows null for initial state before component mounts
 */
export type ModalRef = BootstrapVueModal | null