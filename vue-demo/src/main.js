/*
 * @Descripttion: 
 * @version: 
 * @Author: 郭云展
 * @Date: 2021-09-13 10:54:22
 * @LastEditors: 郭云展
 * @LastEditTime: 2021-10-24 18:38:09
 */
import Vue from "vue";
import App from "./App.vue";
import "./public-path.js";
import store from "./store";
// import "./plugins/element.js";
// import "@/assets/css/demo.min.css"
import router from './router' //将路由信息导出方便使用




import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'

// 封装axios  npm install axios -S
// import api from "./api/index";
// Vue.use(api);

let instance = null;

function render (props = {}) {
  const { container } = props;
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/star' : '/',
  //   mode: 'history',
  //   routes,
  // });
  Vue.use(ElementUI, {
    locale,
    size: 'small'
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


export async function bootstrap () {
  console.log('[vue] vue app bootstraped');
}

export async function mount (props) {
  //props 包含主应用传递的参数  也包括为子应用 创建的节点信息
  console.log(props, 'propspropsprops')
  render(props);
}

export async function unmount () {
  instance.$destroy();
  instance = null;
  router = null;
}
