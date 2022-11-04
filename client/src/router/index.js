import Vue from 'vue'
import Router from 'vue-router'

// logs
import UserIndex from '@/components/Log/Index'
import UserCreate from '@/components/Log/CreateUser'
import UserEdit from '@/components/Log/EditUser'
import UserShow from '@/components/Log/ShowUser'
import DashboardS from '@/components/Log/DashboardS'
import Login from '@/components/Login'
import LoginA from '@/components/LoginA'
import InA from '@/components/IndexA'
import InU from '@/components/IndexU'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    }
    ,
    {
      path: '/User/create',
      name: 'User-create',
      component: UserCreate
    }
    ,
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    }
    ,
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    }
    ,
    {
      path: '/Log/DashboardS',
      name: 'anotherDashboard',
      component: DashboardS
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    ,
    {
      path: '/indexA',
      name: 'indexA',
      component: InA
    }
    ,
    {
      path: '/indexU/:userId',
      name: 'indexU',
      component: InU
    }
    ,
    {
      path: '/LoginA',
      name: 'LoginA',
      component: LoginA
    }
  ]
})
