/*
 * @Description: 基础应用store
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-06-15 08:52:12
 * @LastEditors: 郭云展
 * @LastEditTime: 2021-10-24 10:46:22
 */



// const state = {
//   sidebar: {
//     opened: localStorage.get('sidebarStatus') ? !!+localStorage.get('sidebarStatus') : true,
//     withoutAnimation: false
//   },
//   device: 'desktop',
//   size: localStorage.get('size') || 'medium'
// }

const state = {
  sidebar: {
    opened: localStorage.getItem('sidebarStatus') ? !!+localStorage.getItem('sidebarStatus') : true,
    withoutAnimation: false
  },
  activeMenu: localStorage.getItem('activeMenu') || '1-1',
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      localStorage.set('sidebarStatus', 1)
    } else {
      localStorage.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    localStorage.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  ACTIVE_MENU: (state, active) => {
    state.sidebar.activeMenu =
      localStorage.setItem('activeMenu', active)
  }
}

const actions = {
  toggleSideBar ({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar ({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  activeMenu ({ commit }, { activeMenu }) {
    commit('ACTIVE_MENU', activeMenu)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
