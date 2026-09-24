import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  baseURL,
  //超过时间
  timeout: 10000
})
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    //在http请求头部携带token
    const userStore = useUserStore()
    config.headers.Authorization = userStore.token
    return config
  },
  (err) => Promise.reject(err)
)
//响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }
    //处理业务失败，给错误提示，抛出错误
    ElMessage.error(res.data.message || '业务处理失败')
  },
  (err) => {
    //特殊情况（401）
    if (err.response.status === 401) {
      //权限不足或者token过期，清除token，跳转到登录页
      const userStore = useUserStore()
      userStore.removeToken()
      router.push('/login')
    }
    //错误处理的默认情况
    ElMessage.error(err.response.data.message || '网络请求失败')
    Promise.reject(err)
  }
)

export default instance
export { baseURL }
