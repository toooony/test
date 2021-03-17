import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    children:[
      {
        path: 'index1',
        name: '菜单1',
        component: () => import('../views/Home/index.vue'),
        children:[
          {
            path: 'home1',
            name: '首页',
            component: () => import('../views/Home/index2.vue'),
          },
          {
            path: 'about',
            name: '第二页',
            component: () => import('../views/About.vue')
          }
        ]
      },
      {
        path: 'home2',
        name: '菜单2',
        component: () => import('../views/Home/index.vue'),
        children:[
          {
            path: 'home',
            name: '首页',
            component: () => import('../views/Home/index2.vue'),
          },
          {
            path: 'about2',
            name: '第二页2',
            component: () => import('../views/About.vue')
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
