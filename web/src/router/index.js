import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/message_wall_index.vue'), // 加载父组件
    redirect: '/wall', // 默认重定向到子路由
    children: [
      {
        path: 'wall',
        name: 'wall',
        component: () => import('../views/message_wall.vue') // 加载子组件
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
