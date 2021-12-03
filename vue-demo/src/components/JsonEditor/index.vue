<!--
 * @Description: 
 * @Author: yanxiao
 * @Github: https://github.com/yanxiaos
 * @Date: 2021-07-29 11:33:56
 * @LastEditors: zhoucheng
-->
<template>
  <div class="json-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
// 主题文件
// import 'codemirror/theme/paraiso-light.css'
import '@/styles/jsonEditorThem.scss'

// require('script-loader!jsonlint')
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'
export default {
  name: 'JsonEditor',
  model: {
    prop: 'value',
    event: 'valueChange'
  },
  /* eslint-disable vue/require-prop-types */
  props: ['value'],
  data () {
    return {
      jsonEditor: false
    }
  },
  watch: {
  },
  mounted () {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: 'application/json',
      gutters: ['CodeMirror-lint-markers'],
      // theme: 'paraiso-light',
      theme: 'jsonEditorThem',
      lint: true
    })
    this.jsonEditor.on('change', cm => {
      this.$emit('changed', cm.getValue())
      this.$emit('input', cm.getValue())
      this.$emit('valueChange', cm.getValue())
    })
    this.setValue(this.value)
  },
  methods: {
    getValue () {
      console.log('2222222222222222222222222222')
      return this.jsonEditor.getValue()
    },
    setValue (val) {
      this.jsonEditor.setValue(JSON.stringify(val, null, 2))
    }
  }
}
</script>

<style lang="scss" scoped>
.json-editor {
  height: 100%;
  position: relative;
  ::v-deep {
    .CodeMirror {
      height: auto;
      min-height: 300px;
    }
    .CodeMirror-scroll {
      min-height: 500px;
    }
    .cm-s-rubyblue span.cm-string {
      color: #f08047;
    }
  }
}
</style>