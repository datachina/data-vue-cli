<!--
 * @Description: 动态组件
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-10-26 15:45:18
 * @LastEditors: zhoucheng
-->
<template>
  <div class=''>
    <el-form>
      <el-col v-for="(item , index) in eleDataList"
              :key="index">
        <el-form-item :label="item.label">
          <component :key="index"
                     :is="item.type"
                     @changeput="(val) => handleChange(val, item.labelValue)">
          </component>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DtInput from './input'
import DtSelect from './select'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    DtInput, DtSelect
  },
  props: {
    eleDataList: {
      type: Array,
      required: true
    }
  },
  data () {
    //这里存放数据
    return {
      formData: [],
      data: {}
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

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
    handleChange (val, labelValue) {
      console.log(val, labelValue, "?????????????????????");
    },
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>