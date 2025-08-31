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

    if (import.meta.env.MODE === 'development') {
        const origWarn = console.warn
            console.warn = (...args) => {
            if (String(args[0]).includes('Set operation on key "value" failed')) {
                console.group('[readonly write]')
                console.trace()
                console.groupEnd()
            }
            return origWarn.apply(console, args)
        }

        app.config.warnHandler = (msg, instance, trace) => {
            console.groupCollapsed('[Vue warn]', msg)
            console.log('Component:', instance ?? '(anonymous)')
            console.log(trace)
            console.groupEnd()
            // pause execution so devtools shows a stack into *your* code
            throw new Error(String(msg))
        }
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

