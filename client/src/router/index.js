import Vue from 'vue'
import Router from 'vue-router'

// logs
import LogIndex from '@/components/Log/Index'
import LogCreate from '@/components/Log/CreateLog'
import LogEdit from '@/components/Log/EditLog'
import LogShow from '@/components/Log/ShowLog'
import DashboardD from '@/components/Log/DashboardD'
import DashboardS from '@/components/Log/DashboardS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Logs',
      name: 'Logs',
      component: LogIndex
    }
    ,
    {
      path: '/Log/create',
      name: 'Log-create',
      component: LogCreate
    }
    ,
    {
      path: '/Log/edit',
      name: 'Log-edit',
      component: LogEdit
    }
    ,
    {
      path: '/Log',
      name: 'Log',
      component: LogShow
    }
    ,
    {
      path: '/Log/DashboardD',
      name: 'Dashboard',
      component: DashboardD
    }
    ,
    {
      path: '/Log/DashboardS',
      name: 'anotherDashboard',
      component: DashboardS
    }
  ]
})
