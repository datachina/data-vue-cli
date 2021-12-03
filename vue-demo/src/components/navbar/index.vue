<!--
 * @Description: 导航组件
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-06-15 11:13:19
 * @LastEditors: John Holl
 * @LastEditTime: 2021-06-15 11:13:50
-->

<template>
  <el-scrollbar style="height: 100%">
    <el-menu :default-active="activeMenu"
             router
             @select="handleSelect"
             :background-color="variables.menuBg"
             :text-color="variables.menuText"
             :unique-opened="false"
             :active-text-color="variables.menuActiveText"
             :collapse-transition="false"
             mode="vertical">
      <side-nav-item v-for="route in routes"
                     :item="route"
                     :key="route.menuId"
                     :route-name="route.menuUrl"></side-nav-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SideNavItem from './SideNavItem'
export default {
  name: 'index',
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  components: {
    SideNavItem
  },

  computed: {
    ...mapGetters([
      'activeMenu'
    ]),
    variables () {
      return variables
    }
  },
  data () {
    return {
      // activeMenu: '1'
    }
  },
  methods: {
    handleSelect (index) {
      this.$store.dispatch('app/activeMenu', { activeMenu: index })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
  text-align: left;
}
</style>
