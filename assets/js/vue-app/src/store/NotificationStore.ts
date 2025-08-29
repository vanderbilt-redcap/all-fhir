import { defineStore } from 'pinia'
import { useModal, useToaster } from 'bootstrap-vue'
import { TOAST_POSITION } from 'bootstrap-vue/src/components/Toast/Toaster.vue'

export const useNotificationStore = defineStore('notifications', () => {
  const modal = useModal()
  const toaster = useToaster()

  const showSuccess = (message: string, title: string = 'Success') => {
    toaster.toast({
      title,
      body: message,
      variant: 'primary',
      delay: 4000
    }, TOAST_POSITION.TOP_RIGHT)
  }

  const showError = (message: string, title: string = 'Error') => {
    toaster.toast({
      title,
      body: message,
      variant: 'danger',
      delay: 6000
    }, TOAST_POSITION.TOP_RIGHT)
  }

  const showWarning = (message: string, title: string = 'Warning') => {
    toaster.toast({
      title,
      body: message,
      variant: 'warning',
      delay: 5000
    }, TOAST_POSITION.TOP_RIGHT)
  }

  const showInfo = (message: string, title: string = 'Information') => {
    toaster.toast({
      title,
      body: message,
      variant: 'info',
      delay: 4000
    }, TOAST_POSITION.TOP_RIGHT)
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

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    confirmAction,
    alertUser
  }
})