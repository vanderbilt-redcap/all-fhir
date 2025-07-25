import { createPinia } from 'pinia'
import useRouter from './router'

import { createApp } from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/style.css'


const init = (target: string|HTMLElement) => {
    const app = createApp(App)

    app.config.errorHandler = (err, instance, info) => {
        console.error('💥 Vue Error:', err)
        console.error('📍 Component:', instance)
        console.error('ℹ️ Info:', info)
        app.runWithContext(() => {
            if (err instanceof Error) {
                const router = useRouter()
                router.push({ name: 'error', query: { message: err.message } })
            } else {
                console.error('Unhandled non-Error exception:', err)
            }
        })
    }


    const pinia = createPinia()
    app.use(BootstrapVue)
    app.use(pinia)
    const router = useRouter()
    app.use(router)
    app.mount(target)
    return app
}

export { init as default }

