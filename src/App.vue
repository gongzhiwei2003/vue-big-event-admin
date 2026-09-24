<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
const userStore = useUserStore() //获取userStore实例
const route = useRoute()
const router = useRouter()
// console.log(route.params.id) //获取动态参数
// console.log(route.query) //获取查询参数 ?a=1
// const goUser = () => {
//   router.push({ name: 'User', params: { id: 2 } }) //编程式导航
// }
// const back = () => {
//   router.back() //返回上一页
// }

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem('token')
//   if (to.name !== 'login' && !isLogin) {
//     next({ name: 'login' }) //未登录，强制跳转登录
//   } else {
//     next()
//   }
// })
function goList() {
  console.log(router, route)
  router.push('List')
}
</script>

<template>
  <router-view></router-view>
  <hr />
  <el-button @click="$router.push('/home')">跳转到home</el-button>
  <el-button @click="goList">跳转到List</el-button>
  <p>{{ userStore.token }}</p>
  <hr />
  <el-button @click="userStore.setToken('bearer: hgfhsafha')">登录 </el-button>
  <el-button @click="userStore.removeToken()">退出</el-button>
</template>

<style scoped></style>
