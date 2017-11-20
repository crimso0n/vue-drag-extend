<template>
  <div class="hello wrap">
    <div class="edit">
      <Edit></Edit>
    </div>
    <div class="view">
      <div class="view-inner">
        <Box1 v-drag:drag="isdrag" v-show="showBox1" class="box1"></Box1>
        <Box2 v-drag:drag="isdrag" v-show="showBox2" class="box2"></Box2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  </div>
</template>

<script>
import Edit from './edit'
import Box1 from './box/box1'
import Box2 from './box/box2'
export default {
  name: 'hello',
  components: {
    Edit,Box1,Box2
  },
  data () {
    return {
    }
  },
  computed:{
    isdrag(){
      return this.$store.state.data.drag
    },
    showBox1(){
      return this.$store.state.data.box1.show
    },
    showBox2(){
      return this.$store.state.data.box2.show
    },
    viewHeight(){
      return this.$store.state.data.all.height
    },
    viewWidth(){
      return this.$store.state.data.all.width
    },
  },
  watch:{
    viewHeight(){
      $('.view-inner').css({
        height: this.viewHeight
      })
    },
    viewWidth(){
      $('.view-inner').css({
        width: this.viewWidth
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{
    width: 100%;
    height: 100%;
    .edit{
      float: left;
      width: 300px;
      height: 100%;
      // border: 1px solid red;
    }
    .view{
      position: relative;
      float: left;
      width: calc(100% - 300px);
      height: 100%;
      background-color: #4a4a4a;
      overflow: auto;
      .view-inner{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 1366px;
        height: 768px;
        background-color: #fff;
        box-shadow: 0px 0px 20px #000;
      }
      .box1{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: #eee;
      }
      .box2{
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: #aaa;
      }
    }
  }
</style>
