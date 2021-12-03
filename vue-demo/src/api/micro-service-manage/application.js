/*
 * @Description: 项目列表
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-09-26 16:01:08
 * @LastEditors: John Holl
 */
import request from '@/utils/request'

const prefix1 = '/application'


// 获取应用列表
export function getApplicationList (param) {
  return request({
    url: prefix1 + '/getList',
    method: 'get',
    params: param
  })
}