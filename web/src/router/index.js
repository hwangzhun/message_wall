import { createWebHashHistory,createRouter } from 'vue-router'

const routes = [{
    path: '/',
    name: 'index',
    component: () => import('../views/messag_wall.vue')
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;