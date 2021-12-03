/*
 * @Description: 路由入口文件
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-06-15 08:46:34
 * @LastEditors: 郭云展
 * @LastEditTime: 2021-10-28 15:06:37
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location);
};

let routes = [
  //   {
  //   path: '/',
  //   name: 'login',
  //   // component: login
  // }, 
  {
    path: '/',
    name: 'homepage',
    redirect: '/multi-cloud-manage/overview',
    component: Layout,
    children: [
      {
        path: '/micro-service-manage',
        name: 'MicroServiceManage',
        component: () => import('@/views/micro-service-manage'),
        children: [
          {
            // 微服务治理-总览
            path: '/micro-service-manage/overview',
            name: 'Overview',
            component: () => import('@/views/micro-service-manage/overview')
          }
        ]
      },
      {
        path: '/multi-cloud-manage',
        name: 'MultiCloud',
        component: () => import('@/views/multi-cloud-manage'),
        children: [
          {
            // 多云管理-总览
            path: '/multi-cloud-manage/overview',
            name: 'MultiCloudOverview',
            component: () => import('@/views/multi-cloud-manage/overview')
          }
        ]
      }
    ]
  }]
export default new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/star' : '/',
  mode: 'history',
  routes: routes
});
