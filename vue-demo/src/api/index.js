/*
 * @Description: 注册接口
 * @Author: zhoucheng
 * @Github: https://github.com/hj327
 * @Date: 2021-03-25 09:40:05
 * @LastEditors: 郭云展
 * @LastEditTime: 2021-10-24 18:35:05
 */
// 项目列表
import * as microServiceManage from "./micro-service-manage/cluster";
// // 多云管理 
// import * as multiCloud from "./multiCloud.js";
// // 一键部署
// import * as imageDeploy from "./imageDeploy.js";


const modulesFiles = require.context('./', true)

// console.warn(modulesFiles,'modulesFiles');
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  console.warn(modules, 'modules', modulePath, 'modulePath', modulesFiles.keys());
  // set './app.js' => 'app'
  // const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // const value = modulesFiles(modulePath)
  // modules[moduleName] = value.default
  return modules
}, {})

const install = function (Vue) {
  if (install.installed) {
    return (install.installed = true);
  }
  Object.defineProperties(Vue.prototype, {
    $microServiceManage: {
      get () {
        return microServiceManage;
      }
    },
    // $multiCloud: {
    //   get () {
    //     return multiCloud;
    //   }
    // },
    // $imageDeploy: {
    //   get () {
    //     return imageDeploy;
    //   }
    // },
  });
};

export default {
  install
};