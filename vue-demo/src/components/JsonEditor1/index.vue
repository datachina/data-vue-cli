<!--
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-10-27 17:14:30
 * @LastEditors: zhoucheng
-->

<!--  -->
<template>
  <div style="width:400px; height: 400px;"></div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    value: {
      type: Object,
      require: true
    }
  },
  data () {
    //这里存放数据
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    value: {
      handler (newVal) {
        console.log(newVal)
      },
      immediate: true,
      deep: true
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    console.log(this)
    const editor = new window.JSONEditor(this.$el, { mode: 'code' })
    // set json
    editor.set(this.value)

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
    sendOut () {
      this.$emit('input', this.value)
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>