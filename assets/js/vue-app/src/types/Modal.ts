/**
 * Bootstrap Vue Modal Interface
 * 
 * Defines the interface for bootstrap-vue modal component instances.
 * Based on the bootstrap-vue Modal component type definitions.
 */
export interface BootstrapVueModal {
  /**
   * Shows the modal
   * @param args Optional arguments to pass to show method
   * @returns Promise that resolves with boolean indicating modal result
   */
  show(...args: any[]): Promise<boolean>
  
  /**
   * Hides the modal
   * @param status Optional status to pass when hiding
   */
  hide(status?: boolean): void
  
  /**
   * Toggles the modal visibility
   */
  toggle(): void
}

/**
 * Type for modal template refs
 * Allows null for initial state before component mounts
 */
export type ModalRef = BootstrapVueModal | null