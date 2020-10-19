<template>
  <div class="container">
    <el-radio-group v-model="functionType" style="margin: 20px">
      <el-radio :label="0">HTML 压缩</el-radio>
      <el-radio :label="1">Base64 编码</el-radio>
      <el-radio :label="2">Base64 解码</el-radio>
    </el-radio-group>
    <div class="html-optimize">
      <el-input
              type="textarea"
              :rows="10"
              placeholder="请输入内容"
              v-model="textareaInput"
              style="margin-right: 20px">
      </el-input>

      <el-input
              type="textarea"
              :rows="10"
              v-model="textareaOutput"
              style="margin-left: 20px">
      </el-input>
    </div>
    <el-button class="btn" type="primary" @click="compress">转化</el-button>
  </div>
</template>

<script>
  import {Base64} from "js-base64";

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        functionType: 0,
        visible: false,
        textareaInput: '',
        textareaOutput: '',
        functionTypeList: [
          0, // html optimize
          1, // base64 encode
          2, // base64 decode
        ]
      }
    },
    methods: {
      compress() {
        switch (this.functionType) {
          case 0 :
            this.textareaOutput = this.textareaInput.trim().replace(/\s{2,}/g, ' ').replace(/\n/g, '')
            break;
          case 1 :
            this.textareaOutput = Base64.encode(this.textareaInput.trim())
            break;
          case 2:
            this.textareaOutput = Base64.decode(this.textareaInput.trim())
            break;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .container {
    display: flex;
    flex-direction: column;

    .html-optimize {
      display: flex;
      flex-direction: row;
    }

    .btn {
      margin-top: 20px;
      width: fit-content;
      align-self: center;
    }
  }
</style>
