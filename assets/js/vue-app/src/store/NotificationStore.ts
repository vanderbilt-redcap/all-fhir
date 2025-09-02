import { defineStore } from 'pinia'
import { useModal, useToaster } from 'bootstrap-vue'
import type { BulkAddFailure } from '@/models/Mrn'

const TOAST_POSITION = {
    TOP_LEFT: 'top left',
    TOP_CENTER: 'top center',
    TOP_RIGHT: 'top right',
    MIDDLE_LEFT: 'middle left',
    MIDDLE_CENTER: 'middle center',
    MIDDLE_RIGHT: 'middle right',
    BOTTOM_LEFT: 'bottom left',
    BOTTOM_CENTER: 'bottom center',
    BOTTOM_RIGHT: 'bottom right',
} as const

export const useNotificationStore = defineStore('notifications', () => {
  const modal = useModal()
  const toaster = useToaster()

  const showSuccess = (message: string, title: string = 'Success') => {
    toaster.toast({
      title,
      body: message,
      variant: 'primary',
      delay: 4000
    }, TOAST_POSITION.BOTTOM_RIGHT)
  }

  const showError = (message: string, title: string = 'Error') => {
    toaster.toast({
      title,
      body: message,
      variant: 'danger',
      delay: 6000
    }, TOAST_POSITION.BOTTOM_RIGHT)
  }

  const showWarning = (message: string, title: string = 'Warning') => {
    toaster.toast({
      title,
      body: message,
      variant: 'warning',
      delay: 5000
    }, TOAST_POSITION.BOTTOM_RIGHT)
  }

  const showInfo = (message: string, title: string = 'Information') => {
    toaster.toast({
      title,
      body: message,
      variant: 'info',
      delay: 4000
    }, TOAST_POSITION.BOTTOM_RIGHT)
  }

  const confirmAction = async (title: string, message: string): Promise<boolean> => {
    try {
      const result = await modal.confirm({
        title,
        body: message,
        textOk: 'Yes',
        textCancel: 'Cancel'
      })
      return result === true
    } catch {
      return false
    }
  }

  const alertUser = async (title: string, message: string): Promise<void> => {
    try {
      await modal.alert({
        title,
        body: message,
        textOk: 'OK'
      })
    } catch {
      // User dismissed modal
    }
  }

  const showMrnErrors = async (failures: BulkAddFailure[], title: string = 'Some MRNs could not be added') => {
    const lines = failures.map(f => `${f.mrn} — ${f.error}`)
    const body = lines.join('\n')
    try {
      await modal.alert({
        title,
        body,
        textOk: 'OK'
      })
    } catch {
      // dismissed
    }
  }

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    confirmAction,
    alertUser,
    showMrnErrors
  }
})
