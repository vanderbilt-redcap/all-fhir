import { createRouter, createWebHashHistory, type Router } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import SetupPage from '@/pages/SetupPage.vue'
import MonitorPage from '@/pages/MonitorPage.vue'
import TasksPage from '@/pages/TasksPage.vue'
import ArchivesPage from '@/pages/ArchivesPage.vue'

// other
import NotFoundPage from '@/pages/NotFoundPage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'

/**
 * supported routes.
 */
const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', name: 'home', component: HomePage, },
            { path: 'setup', name: 'setup', component: SetupPage, },
            { path: 'monitor', name: 'monitor', component: MonitorPage, },
            { path: 'tasks', name: 'tasks', component: TasksPage, },
            { path: 'archives', name: 'archives', component: ArchivesPage, },
            { path: 'error', name: 'error', component: ErrorPage, },
            { path: '/:pathMatch(.*)*', component: NotFoundPage },
        ],
    },
]

let router: Router|undefined = undefined


const useRouter = () => {
    if (router) return router
    // Create the router instance and pass the `routes` option
    // You can pass in additional options here, but let's
    // keep it simple for now.
    router = createRouter({
        // Provide the history implementation to use. We are using the hash history for simplicity here.
        history: createWebHashHistory(),
        routes,
    })

    return router
}

export default useRouter
