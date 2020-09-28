<template>
  <div class="container">
    <div class="html-optimize">
      <el-input
              type="textarea"
              :rows="10"
              placeholder="请输入内容"
              v-model="textareaInput">
      </el-input>

      <el-input
              type="textarea"
              :rows="10"
              placeholder="请输入内容"
              v-model="textareaOutput">
      </el-input>
    </div>
    <el-button class="btn" type="primary" @click="compress" >转化</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      visible: false,
      textareaInput: '',
      textareaOutput: ''
    }
  },
  methods: {
    compress() {
      this.textareaOutput = this.textareaInput.replace(/\s{2,}/g, ' ').replace(/\n/g, '')
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
      align-self: flex-end;
    }
  }
</style>
