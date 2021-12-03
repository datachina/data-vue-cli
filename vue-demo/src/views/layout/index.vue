<!--
 * @Description: 布局文件
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-06-15 08:45:54
 * @LastEditors: 郭云展
 * @LastEditTime: 2021-10-28 15:08:57
-->
<template>
  <el-row class="dt-wrapper full-height">
    <!-- 顶部 -->
    <el-row class="dt-top">
      <el-col :span="4"
              class="dt-title">
        BIM
      </el-col>
    </el-row>

    <!-- 内容展示区 -->
    <el-row :gutter="5"
            class="dt-content full-height">


      <!-- toggle栏 -->
      <el-col class="dt-toggle full-height">
        <div class="full-height white-bg">
          <div class="foldBut"
               @click="handelToggleSidebar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </el-col>

      <el-col class="dt-view full-height">
        <el-row style="width: 100%"
                class="full-height">
          <!-- 导航栏 -->
          <el-col class="dt-navbar full-height white-bg"
                  :class="sideBarObj">
            <dt-side-nav :routes="routes"
                         class="full-height"></dt-side-nav>
          </el-col>

          <!-- 内容展示区 -->
          <el-col class="dt-main full-height"
                  :class="mainObj">
            <router-view />
          </el-col>
        </el-row>
      </el-col>

    </el-row>
  </el-row>
</template>

<script>
import DtSideNav from '@/components/navbar'
import { mapState } from 'vuex'
export default {
  components: {
    DtSideNav
    // TopNav,
  },
  data () {
    return {
      // 路由菜单数据
      routes: [
        {
          menuId: '1',
          menuName: '多云管理',
          menuIcon: '1',
          children: [
            {
              menuId: '1-1',
              menuName: '概览',
              menuUrl: '/multi-cloud-manage/overview',
              menuIcon: '2',
            },
          ]
        },
        {
          menuId: '3',
          menuName: '微服务治理',
          menuIcon: '1',
          children: [
            {
              menuId: '3-0',
              menuName: '概览',
              menuUrl: '/micro-service-manage/overview',
              menuIcon: '2',
            }
          ]
        }
      ],

    }
  },
  mounted () {
    console.warn(this.$route, 'rrr');
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    }),
    sideBarObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
      }
    },
    mainObj () {
      return {
        withSidebar: this.sidebar.opened,
        withoutSidebar: !this.sidebar.opened,
      }
    }

  },
  methods: {
    handelToggleSidebar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/styles/variables.scss';
$topHeight: 64px;
$toggleWidth: 60px;
$navWidth: 200px;
.full-height {
  height: 100%;
}
.white-bg {
  background: #ffffff;
}
.dt-wrapper {
  background: #eef0f5;
  .dt-top {
    background: #282b33;
    height: $topHeight;
    line-height: $topHeight;
    .dt-title {
      font-size: 28px;
      color: #ffffff;
      letter-spacing: 0;
      font-weight: bold;
      margin-left: 30px;
    }
  }
  // .dt-content {
  //   height: calc(100% - #{$topHeight});
  //   .dt-left-part {
  //     .dt-toggle-bar {
  //       width: $toggleWidth;
  //     }
  //     .dt-nav-bar {
  //       width: calc(100% - #{$toggleWidth});
  //     }
  //   }
  //   .dt-main {
  //     padding: 15px;
  //   }
  // }
  .dt-toggle {
    width: $toggleWidth;
  }

  .dt-content {
    height: calc(100% - #{$topHeight});
    width: 100%;
    .dt-view {
      width: calc(100% - #{$toggleWidth});
      .dt-navbar {
        // width: $navWidth;
      }

      .dt-main {
        // width: calc(100% - #{$navWidth});
        padding: 15px 0 15px 10px;
      }
    }
  }
}
.hideSidebar {
  width: 0px !important;
  transition: width 0.3s;
}
.openSidebar {
  width: $navWidth !important;
  transition: width 0.3s;
}
.withSidebar {
  width: calc(100% - #{$navWidth}) !important;
  transition: width 0.3s;
}
.withoutSidebar {
  width: 100% !important;
  transition: width 0.3s;
}
.foldBut {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 17px 0;
  box-sizing: border-box;
  &:active {
    span {
      background: #1682e6;
    }
  }
  &:hover {
    span {
      background: #569fe4;
    }
  }
  span {
    display: block;
    width: 40%;
    height: 2px;
    background: #575d6b;
  }
}
</style>
