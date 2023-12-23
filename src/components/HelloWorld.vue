<template>
  <div class="container">
    <el-radio-group v-model="functionType" style="margin: 20px">
      <el-radio :label="0">HTML 压缩</el-radio>
      <el-radio :label="1">Base64 编码</el-radio>
      <el-radio :label="2">Base64 解码</el-radio>
      <el-radio :label="3">时间戳转日期</el-radio>
      <el-radio :label="4">URL Encode</el-radio>
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
    <div class="svg-filter-tool">
      <span class="tips">目标颜色：</span>
      <el-input class="color-input" v-model="svgFilterColor" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="svgFilterClick">Filter 转化</el-button>
      <div class="result">
        <div class="color-preview" :style="{'background': previewColor}"></div>
        <span class="filter-result">{{filterResult}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {Base64} from "js-base64";
  import {Color, Solver, hexToRgb} from "@/js/sgvFilter";

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
        ],
        svgFilterColor: '',
        filterResult: '',
        previewColor: '#fff'
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
          case 3:
            this.textareaOutput = new Date(Number(this.textareaInput.trim())).toLocaleString()
            break;
          case 4:
            this.textareaOutput = encodeURIComponent(this.textareaInput.trim())
            break;
        }
      },
      svgFilterClick() {
        if (this.svgFilterColor.trim().length <= 0) {
          return;
        }
        const rgb = hexToRgb(this.svgFilterColor);
        if (rgb.length !== 3) {
          alert('Invalid format!');
          return;
        }

        const color = new Color(rgb[0], rgb[1], rgb[2]);
        const solver = new Solver(color);
        const result = solver.solve();

        this.filterResult = result.filter
        this.previewColor = this.svgFilterColor.trim()
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

    .svg-filter-tool {
      margin-top: 40px;

      .color-input {
        width: 200px;
        margin-right: 20px;
      }

      .result {
        display: flex;
        justify-content: center;
        align-items: center;
        .color-preview {
          width: 50px;
          height: 50px;
          margin-right: 20px;
        }
      }

    }
  }
</style>
