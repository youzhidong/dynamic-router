import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@//components/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@//components/404')
    }
  ]
})
