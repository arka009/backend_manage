import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/views/login'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/' ,  redirect: '/login' },
    { path: '/login' ,  component: Login },
    { path: '/2' , component : resolve => require(['@/components/n2'], resolve)},
    { path: '/3' , component : resolve => require(['@/components/n3'], resolve)},
    {
      path: '/roleList',
      component: resolve => require(['@/app/systemUser/roleList'], resolve),
    },
    {
      path: '/adminResourceList',
      component: resolve => require(['@/app/systemUser/adminResourceList'], resolve)
    },
    {
      path: '/userList',
      component: resolve => require(['@/app/systemUser/userList'], resolve)
    },
    {
      path: '/departmentList',
      component: resolve => require(['@/app/systemUser/departmentList'], resolve)
    },
    {
      path: '/orderManage',
      component: resolve => require(['@/app/orderManage/orderList'], resolve),
      children: [
        {
          path: '/orderList',
          component: resolve => require(['@/app/orderManage/orderList'], resolve)
        },
        {
          path: '/payList',
          component: resolve => require(['@/app/orderManage/payList'], resolve)
        }
      ]
    }
  ]
})
