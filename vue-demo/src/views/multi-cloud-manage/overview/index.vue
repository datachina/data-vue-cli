<!--
 * @Description: 多云管理首页 multiCloudOverview
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-09-24 11:00:53
 * @LastEditors: John Holl
 * @LastEditTime: 2021-10-25 16:55:43
-->

<template>
  <el-row class="dt-cluster-overview full-height">
    <el-row class="dt-cluster-list"
            :gutter="10">
      <el-col :span="6"
              class="dt-cluster-item"
              v-for="(item, index) in clusterList"
              :key="index">
        <el-card class="full-height"
                 @click.native="handleClickCluster(item.clusterId)">
          <!-- <div v-for="o in 4"
           :key="o"
           class="text item">
        {{'列表内容 ' + o }}
      </div> -->
          <div>
            <div style="display: inline-block">
              集群名称：{{item.clusterName}}
            </div>
            <div style="display: inline-block; float: right">
              <i class="el-icon-edit"></i>
              <i class="el-icon-share"></i>
              <i class="el-icon-delete"
                 @click.stop="handleDeleteCluster(item.clusterId)"></i>
            </div>
          </div>
          <!-- <div>{item.clusterName}}</div> -->
        </el-card>
      </el-col>
      <el-col :span="6"
              class="dt-cluster-item">
        <el-card class="dt-adder full-height"
                 @click.native="handleAddCluster">
          <i class="el-icon-plus dt-add-icon"></i>
        </el-card>

      </el-col>
    </el-row>

    <el-dialog title="新增集群"
               :visible.sync="clusterDialogVisible">
      <el-form :model="clusterForm"
               label-width="80px">
        <el-form-item label="集群名称">
          <el-input v-model="clusterForm.clusterName"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="集群配置">
          <el-input type="textarea"
                    :rows="7"
                    placeholder="请输入内容"
                    v-model="clusterForm.clusterConfig">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="clusterDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="addClusterAction">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import {
//   getClusterList
// } from '@/api/mul-cloud-manage/cluster'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
      clusterDialogVisible: false,
      clusterList: [],
      clusterForm: {
        clusterName: '',
        clusterConfig: ''
      }
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
    this.initData()
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
    initData () {
      this.getClusterList()
    },
    // 集群查询
    getClusterList () {
      // let reqInfo = {
      //   pageNum: 1,
      //   pageSize: 10
      // }
      // getClusterList(reqInfo).then(response => {
      //   this.clusterList = response.data
      // })
    },

    // 查看详情
    handleClickCluster (clusterId) {
      this.$router.push({ name: "ClusterDetail", query: { clusterId: clusterId } })
    },

    // 添加集群
    handleAddCluster () {
      this.clusterDialogVisible = true
    },

    // 调用添加接口
    addClusterAction () {
    },

    // 删除集群
    handleDeleteCluster () {
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.full-height {
  height: 100%;
}
.dt-cluster-overview {
  .dt-cluster-list {
    .dt-cluster-item {
      height: 180px;
      margin-top: 10px;
      cursor: pointer;
    }
    .dt-adder {
      display: flex;
      justify-content: center;
      align-items: center;
      .dt-add-icon {
        font-size: 28px;
        color: #8c939d;
      }
    }
  }
}
</style>