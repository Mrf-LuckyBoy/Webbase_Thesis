import Vue from 'vue'
import Router from 'vue-router'
import DashboardS from '@/components/Log/DashboardS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'anotherDashboard',
      component: DashboardS
    }
  ]
})
