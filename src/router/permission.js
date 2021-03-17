import router from './index'

const whiteList = ['/login']// 不重定向白名单
router.beforeEach((to, from, next) => {
    if (localStorage.getItem('token')) {
        next()
    } else {
        if (whiteList.indexOf(to.path) > -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login`)// 否则全部重定向到登录页
        }
    }
})