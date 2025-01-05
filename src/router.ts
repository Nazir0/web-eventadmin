// @ts-ignore
import type { RouteParams, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from './pages/LandingPage.vue'
import Dashboard from './pages/Dashboard.vue'

export type AppRouteNames =
    | 'global-feed'
    | 'login'
    | 'register'
    | 'dashboard'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'landing-page',
            path: '/',
            component: LandingPage,
        },
        {
            name: 'dashboard',
            path: '/dashboard',
            component: () => import('./pages/Dashboard.vue'),
    
        },
    ],
    })
    
export default router



export function routerPush(name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
    return params === undefined
        ? router.push({ name })
        : router.push({ name, params })
}