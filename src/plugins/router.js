import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '', name: 'home', component: () => import('@/pages/Home.vue')},
    {path: '/school', name: 'school', component: () => import('@/pages/School.vue')},
    {path: '/work', name: 'work', component: () => import('@/pages/Work.vue')},
    {path: '/contact', name: 'contact', component: () => import('@/pages/Contact.vue')},
    {path: '/projects', name: 'projects', component: () => import('@/pages/Projects.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),  
})

export default router