/*
 * @Description: 项目列表
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-09-26 16:01:08
 * @LastEditors: 郭云展
 */
import request from '@/utils/request'

const prefix = '/project'


// 查询项目列表
export function getProjectList (param) {
  return request({
    url: prefix + '/getList',
    method: 'get',
    params: param
  })
}
