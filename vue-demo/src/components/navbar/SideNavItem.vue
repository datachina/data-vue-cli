<!--
 * @Description: 
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-06-15 11:14:19
 * @LastEditors: John Holl
 * @LastEditTime: 2021-06-18 17:31:09
-->

<template>
  <!--  <side-nav-item></side-nav-item>-->
  <el-menu-item v-if="!hasChild(item.children)"
                :route="{ path: item.menuUrl }"
                :index="item.menuId">
    <i :class="item.menuIcon"></i>
    <!-- <img :src="item.meta.img"
         style="height: 22px;width: 22px"
         alt=""> -->
    <span>{{ item.menuName }}</span>
  </el-menu-item>

  <el-submenu v-else
              :index="item.menuId"
              popper-append-to-body>
    <template slot="title">
      <i :class="item.menuIcon"></i>
      <span>{{ item.menuName }}</span>
    </template>
    <side-nav-item v-for="child in item.children"
                   :key="child.path"
                   :is-nest="true"
                   :item="child"
                   :route-name="item.menuUrl"
                   class="nest-menu" />
  </el-submenu>
</template>

<script>
export default {
  name: 'SideNavItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    menuUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    hasChild (itemChildren) {
      if (itemChildren !== undefined && itemChildren.length !== 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
}
.el-submenu .el-menu-item:hover {
  background-color: $menuHover !important;
}
/deep/ .el-submenu__title {
  height: 40px;
  line-height: 40px;
}
/deep/ .el-submenu__title:hover {
  background-color: $menuHover !important;
}

.el-menu-item.is-active {
  border-left: 2px solid #1890ff;
  background-color: $menuActive !important;
}
</style>
