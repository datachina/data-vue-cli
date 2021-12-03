<!--
 * @Description: 微服务概览
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-09-24 13:38:41
 * @LastEditors: John Holl
 * @LastEditTime: 2021-09-24 16:54:24
-->

<template>
  <el-row class="dt-ms-overview">
    <el-row class="dt-panel"
            :gutter="10">
      <el-col :span="12">
        <el-card shadow="hover"
                 class="dt-panel-item">
          <div>
            <span>项目数</span>
          </div>
          <div>
            12
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover"
                 class="dt-panel-item">
          <div>
            <span>服务数</span>
          </div>
          <div>
            12
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="dt-chart-part">
      <el-row :gutter="10"
              class="dt-first-part">
        <el-col :span="16">
          <el-card shadow="hover">
            <div>
              <span>告警趋势</span>
            </div>
            <div id="warningChart"
                 style="height: 260px"></div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <div>
              <span>热点服务 TOP5</span>
            </div>
            <div style="height: 260px">
              <el-table :data="tableData"
                        @row-click="handleRowClick"
                        stripe
                        @selection-change="handleSelectionChange"
                        style="width: 100%">
                <el-table-column label="服务名称">
                  <template slot-scope="scope">
                    {{ scope.row.projectName}}
                  </template>
                </el-table-column>
                <el-table-column label="请求次数">
                  <template slot-scope="scope">
                    {{ scope.row.serviceCount}}
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.init()
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {
    /**
     * @name: 页面初始化方法
     * @description: 
     * @param {type} {*}
     * @return {type} {*}
     */
    init () {
      this.initChart()
    },

    /**
     * @name: 初始化图表
     * @description: 
     * @param {type} {*}
     * @return {type} {*}
     */
    initChart () {

      var chartDom = document.getElementById('warningChart');
      var myChart = window.echarts.init(chartDom);
      console.log(window)
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }
      // document.getElementById('warningChart').style.height = window.innerHeight + 'px'
      myChart.setOption(option);
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.full-height {
  height: 100%;
}
.dt-ms-overview {
  .dt-panel {
    .dt-panel-item {
    }
  }
  .dt-chart-part {
    margin: 10px 0;
  }
}
</style>