import { createPinia } from 'pinia'
import useRouter from './router'

import { createApp } from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/style.css'


const init = (target: string|HTMLElement) => {
    const app = createApp(App)
    const pinia = createPinia()
    app.use(BootstrapVue)
    app.use(pinia)
    const router = useRouter()
    app.use(router)
    app.mount(target)
    return app
}

export { init as default }

