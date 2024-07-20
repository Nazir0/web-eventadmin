// @ts-ignore
import type { RouteParams, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/LandingPage.vue'

export type AppRouteNames =
    | 'global-feed'
    | 'login'
    | 'register'

export const routes: RouteRecordRaw[] = [
    {
        name: 'global-feed',
        path: '/',
        component: Home,
    },

    {
        name: 'login',
        path: '/login',
        component: () => import('./pages/Login.vue'),
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('./pages/Register.vue')
    }

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export function routerPush(name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
    return params === undefined
        ? router.push({ name })
        : router.push({ name, params })
}
