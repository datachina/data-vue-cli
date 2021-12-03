/*
 * @Description: 路由入口文件
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-06-15 08:46:34
 * @LastEditors: 郭云展
 * @LastEditTime: 2021-10-20 09:30:36
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
        // 服务器管理
        path: 'serverManage',
        name: 'ServerManage',
        component: () => import('@/views/server-manage')
      },
      {
        // 镜像管理
        path: 'imageManage',
        name: 'ImageManage',
        component: () => import('@/views/image-manage')
      },
      {
        // 镜像管理
        path: 'imageTags',
        name: 'imageTags',
        component: () => import('@/views/image-manage/image-tags')
      },
      {
        // 一键部署
        path: 'imageDeploy',
        name: 'ImageDeploy',
        component: () => import('@/views/image-manage/image-deploy')
      },
      {
        // 服务管理
        path: 'serviceManage',
        name: 'ServiceManage',
        component: () => import('@/views/service-manage')
      },
      {
        // 项目列表
        path: 'projectList',
        name: 'ProjectList',
        component: () => import('@/views/micro-service-manage/project-manage')
      },
      {
        // 项目-服务列表
        path: 'appList',
        name: 'AppList',
        component: () => import('@/views/micro-service-manage/project-manage/application-monitor')
      },
      {
        // 多云管理-总览
        path: 'multiCloudOverview',
        name: 'MultiCloudOverview',
        component: () => import('@/views/multi-cloud-manage/overview')
      },
      {
        // 微服务治理-总览
        path: 'microServiceOverview',
        name: 'MicroServiceOverview',
        component: () => import('@/views/micro-service-manage/overview')
      }
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