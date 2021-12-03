/*
 * @Description: 路由入口文件
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-06-15 08:46:34
 * @LastEditors: 郭云展
 * @LastEditTime: 2021-10-20 13:56:37
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        // 微服务治理-总览
        path: '/microService/:id',
        component: () => import('@/views/microService'),
        // name: 'MicroService',
        children: [{
          // 微服务治理-总览
          path: '',
          // name: 'Overview',
          component: () => import('@/views/micro-service-manage/overview')
        },
        {
          // 服务器管理
          path: 'server-manage',
          name: 'server-manage',
          component: () => import('@/views/server-manage')
        },
        {
          // 项目列表
          path: '',
          name: 'ProjectList',
          component: () => import('@/views/micro-service-manage/project-manage')
        },
        {
          // 镜像管理
          path: '',
          name: 'ImageManage',
          component: () => import('@/views/image-manage')
        },
        ]
      },
      {
        // 微服务治理-总览
        path: '/multi-cloud-manage/:id',
        component: () => import('@/views/microService'),
        // name: 'MicroService',
        children: [
          {
          // 多云管理-总览
          path: '',
          name: 'MultiCloudOverview',
          component: () => import('@/views/multi-cloud-manage/overview')
        },
        {
          // 镜像管理
          path: '',
          name: 'ImageManage',
          component: () => import('@/views/image-manage')
        },

        ]
      },


      // {
      //   // 镜像管理
      //   path: 'imageTags',
      //   name: 'imageTags',
      //   component: () => import('@/views/image-manage/image-tags')
      // },
      // {
      //   // 一键部署
      //   path: 'imageDeploy',
      //   name: 'ImageDeploy',
      //   component: () => import('@/views/image-manage/image-deploy')
      // },
      // {
      //   // 服务管理
      //   path: 'serviceManage',
      //   name: 'ServiceManage',
      //   component: () => import('@/views/service-manage')
      // },

      // {
      //   // 项目-服务列表
      //   path: 'appList',
      //   name: 'AppList',
      //   component: () => import('@/views/micro-service-manage/project-manage/application-monitor')
      // },


    ]
  }
]

// const router = new VueRouter({
//   routes,
//   // base: process.env.BASE_URL
// })

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/star' : '/',
  mode: 'history',
  routes,
});

export default router