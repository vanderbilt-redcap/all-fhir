import { createApp } from 'vue'
import App from './App.vue'


const init = (target: string|HTMLElement) => {
    const app = createApp(App)

    app.mount(target)
    return app
}

export { init as default }

