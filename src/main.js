import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/api'


Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(Element)
// 用户手动刷新页面，这是路由会被重设，要重新新增
if (sessionStorage.getItem('user')) {
  let routes = JSON.parse(sessionStorage.getItem('routes'))
  store.dispatch("add_Routes", routes)
}
// 登录状态判断
router.beforeEach((to, from , next) => {
  if (!sessionStorage.getItem('user') && to.path !== '/login') {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


