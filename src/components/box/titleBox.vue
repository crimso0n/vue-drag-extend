<template>
  <div class="titleBox" id="titleBox" v-drag:drag="isdrag">
    <Box>
      <div slot="content" class="box-content">
        <VerticMid>
          <h1 class="header-title">BotGo 操作展示平台</h1>
        </VerticMid>
        <div class="user">
          <div>安徽高速！欢迎您！</div>
          <div class="loginout"></div>
        </div>
      </div>
    </Box>
  </div>
</template>

<script>
import Chart from '../common/chart'
import Box from '../common/box'
import BoxBorder from '../common/boxBorder'
import VerticMid from '../common/VerticMid'
export default {
  name: 'titleBox',
  components:{
    Box,Chart,VerticMid,BoxBorder
  },
  data () {
    return {
      chart1:'',
      chart2:'',
    }
  },
  computed:{
    isdrag(){
      return this.$store.state.all.drag
    },
  },
  methods:{
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .titleBox{
    position: absolute;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: rgba(1, 1, 1, .3);
    color: #fff;
    z-index: 11;
    .box-content{
      width: 100%;
      height: 100%;
      background: url(../../../static/img/heng.png) no-repeat bottom center;
      border-bottom: 2px solid #002a4b;
      .header-title{
        display:inline-block;
        text-align: center;
        font-size: 30px;
        margin-left: 50%;
        transform: translate(-50%);
      }
      .header-title:before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: -66px;
        width: 56px;
        height: 32px;
        background: url(../../../static/img/zuo.png) no-repeat center;
      }
      .header-title:after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: -66px;
        width: 56px;
        height: 32px;
        background: url(../../../static/img/you.png) no-repeat center;
      }
      .user{
        position: absolute;
        bottom: 5px;
        right: 30px;
        font-size: 14px;
        div{
          float: left;
        }
        .loginout{
          width: 20px;
          height: 20px;
          background: url(../../../static/img/exit.png) no-repeat center;
          background-size: 80% 80%;
          cursor: pointer;
        }
      }
    }

  }
</style>
