<template>
  <div class="editBox1 wrap">
    <div class="position clearfix">
      <div class="title">位置</div>
      <div class="x">
        <span class="txt">x</span>
        <el-input-number size="mini" v-model="box1.left" controls-position="right" @change=""></el-input-number>
      </div>
      <div class="y">
        <span class="txt">y</span>
        <el-input-number size="mini" v-model="box1.top" controls-position="right" @change=""></el-input-number>
      </div>
    </div>
    <div class="position clearfix">
      <div class="title">大小</div>
      <div class="x">
        <span class="txt">宽</span>
        <el-input-number size="mini" v-model="box1.width" controls-position="right" @change=""></el-input-number>
      </div>
      <div class="y">
        <span class="txt">高</span>
        <el-input-number size="mini" v-model="box1.height" controls-position="right" @change=""></el-input-number>
      </div>
    </div>
    <div class="text clearfix">
      <div class="title">文字</div>
      <div class="size clearfix">
        <div class="txt">基准大小</div>
        <div class="slider">
          <el-slider
            v-model="box1.text.fontSize" :step="1" :min="12" :max="30">
          </el-slider>
        </div>
      </div>
      <div class="lineHight clearfix">
        <div class="txt">基准行高</div>
        <div class="slider">
          <el-slider
            v-model="box1.text.lineHight" :step="0.2" :min="1" :max="3">
          </el-slider>
        </div>
      </div>
      <div class="color clearfix">
        <div class="txt">颜色</div>

        <div class="slider">
          <el-color-picker v-model="box1.text.color" show-alpha size="mini"></el-color-picker>
        </div>
      </div>
    </div>
    <div class="background clearfix">
      <div class="title">背景</div>
      <div class="color clearfix">
        <div class="txt">背景颜色</div>
        <div class="slider">
          <el-color-picker v-model="box1.background.backgroundColor" show-alpha size="mini"></el-color-picker>
        </div>
      </div>
      <div class="color clearfix">
        <div class="txt">边框颜色</div>
        <div class="slider">
          <el-color-picker v-model="box1.background.borderColor" show-alpha size="mini"></el-color-picker>
        </div>
      </div>
      <div class="x">
        <div class="txt">边框宽度</div>
        <el-input-number size="mini" v-model="box1.background.borderWidth" controls-position="right" @change=""></el-input-number>
      </div>
      <div class="x">
        <div class="txt">边框圆角</div>
        <el-input-number size="mini" v-model="box1.background.borderRadius" controls-position="right" @change=""></el-input-number>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editBox1',
  data () {
    return {

    }
  },
  computed:{
    box1(){
      var box1 = this.$store.state.box1;
      return box1
    }
  },
  watch:{
    box1: {
　　　handler(newValue, oldValue) {
        // this.$store.commit({
        //   type: 'changeBox1',
        //   data: {
        //     box1: {
        //       show: this.box1.show,
        //   		height: this.box1.height,
        //   		width: this.box1.width,
        //   		top: this.box1.top,
        //   		left: this.box1.left,
        //   		text: {
        //   			fontSize: this.box1.text.fontSize,
        //   			lineHight: this.box1.text.lineHight,
        //   			color: this.box1.text.color,
        //   		},
        //   		background:{
        //   			color: this.box1.background.color,
        //   			borderColor: this.box1.background.borderColor,
        //   			borderWidth: this.box1.background.borderWidth,
        //   			borderRadius: this.box1.background.borderRadius,
        //   		}
        //     }
        //   },
        // })
　　　　},
　　　　deep: true
　　}
  },
  methods:{
  },
  mounted(){
  },
}
</script>
<style>
  .el-input-number--mini{
    width: 100px;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.editBox1{
  .title{
    background-color: #f8f8f8;
  }
  .position{
    .x,.y{
      float: left;
      margin: 10px 0;
      .txt{
        display: inline-block;
        width: 18px;
      }
    }
    .y{
      margin-left: 15px;
    }
  }
  .text,.background{
    .size,.lineHight{
      .txt{
        float: left;
        line-height: 38px;
        width: 25%;
      }
      .slider{
        float: left;
        width: 60%;
      }
    }
    .color,.x{
      .txt{
        float: left;
        line-height: 28px;
        width: 25%;
      }
      .slider{
        float: left;
        height: 30px;
        width: 60%;
      }
    }
  }
}
</style>
