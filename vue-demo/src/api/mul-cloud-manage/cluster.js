/*
 * @Descripttion: 
 * @version: 
 * @Author: 郭云展
 * @Date: 2021-10-24 11:04:59
 * @LastEditors: John Holl
 * @LastEditTime: 2021-10-25 16:49:38
 */
import request from '@/utils/request'

const prefix = '/cluster'

// 查询集群列表
export function getClusterList(param) {
  return request({
    url: prefix + '/getList',
    method: 'get',
    params: param
  })
}