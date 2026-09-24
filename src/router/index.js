import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
//createRouter函数用于创建路由实例
//配置history模式，
// createWebHistory()表示使用浏览器的history API来管理路由 （地址栏不带#号）
//createWebHashHistory()表示使用hash模式来管理路由  （地址栏带#号）
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //Vite 在一个特殊的 import.meta.env 对象上暴露环境变量,mport.meta.env.BASE_URL部署应用时的基本 URL。他由base 配置项决定
  routes: [
    { path: '/login', component: () => import('@/views/LoginView.vue') },
    {
      path: '/',
      component: () => import('@/views/DashboardView.vue'),
      children: [
        { path: '/article-manage', component: () => import('@/pages/ArticleManage.vue') },
        { path: '/article-channel', component: () => import('@/pages/ArticleChannel.vue') },
        {
          path: '/user-profile',
          component: () => import('@/pages/UserProfile.vue')
        },
        { path: '/user-avatar', component: () => import('@/pages/UserAvatar.vue') },
        { path: '/user-password', component: () => import('@/pages/UserPassword.vue') }
      ]
    }
  ]
})

export default router
