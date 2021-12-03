<!--
 * @Description: 统一展示页
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-06-15 13:37:07
 * @LastEditors: John Holl
 * @LastEditTime: 2021-06-20 20:30:22
-->

<template>
  <el-row class="dt-uni-page full-height">
    <el-row class="dt-uni-title">
      <slot name="title"></slot>
    </el-row>
    <el-row class="dt-uni-content">
      <slot name="content"></slot>
    </el-row>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
$titleHeight: 40px;
.full-heigth {
  height: 100%;
}
.dt-uni-page {
  .dt-uni-title {
    height: $titleHeight;
    font-size: 24px;
    font-weight: bold;
  }
  .dt-uni-content {
    height: calc(100% - #{$titleHeight});
    background: #ffffff;
  }
}
</style>
