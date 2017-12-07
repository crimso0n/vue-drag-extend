<template>
  <div class="box8" id="box8" ref="box8" v-drag:drag="isdrag" @mouseup="saveDrag">
    <Box>
      <div slot="content" class="box-content">
        <ul>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo1"></p>
              <p class="num">实时交通</p>
            <!-- </VerticMid> -->
          </li>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo2"></p>
              <p class="num">拥堵路段</p>
            <!-- </VerticMid> -->
          </li>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo3"></p>
              <p class="num">交通事故</p>
            <!-- </VerticMid> -->
          </li>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo4"></p>
              <p class="num">交通管制</p>
            <!-- </VerticMid> -->
          </li>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo5"></p>
              <p class="num">道路施工</p>
            <!-- </VerticMid> -->
          </li>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo6"></p>
              <p class="num">其他事故</p>
            <!-- </VerticMid> -->
          </li>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo7"></p>
              <p class="num">道路气象</p>
            <!-- </VerticMid> -->
          </li>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo8"></p>
              <p class="num">摄像头</p>
            <!-- </VerticMid> -->
          </li>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo9"></p>
              <p class="num">服务区</p>
            <!-- </VerticMid> -->
          </li>
          <li>
            <!-- <VerticMid> -->
              <p class="logo logo10"></p>
              <p class="num">收费站</p>
            <!-- </VerticMid> -->
          </li>
        </ul>
      </div>
    </Box>
  </div>
</template>

<script>
import Chart from '../common/chart'
import Box from '../common/box'
import VerticMid from '../common/VerticMid'
export default {
  name: 'box8',
  components:{
    Box,Chart,VerticMid
  },
  data () {
    return {
      chart1:'',
    }
  },
  computed:{
    isdrag(){
      return this.$store.state.all.drag
    },
    box8(){
      return this.$store.state.box8
    },
  },
  watch:{
    box8:{
      handler(){
        this.changeStyle();
      },
      deep: true
    }
  },
  methods:{
    changeStyle(){
      $(this.$refs.box8).css({
        'left': this.box8.left,
        'top': this.box8.top,
        'width': this.box8.width,
        'height': this.box8.height,
        'color': this.box8.text.color,
        'background-color': this.box8.background.backgroundColor,
        'border-width': this.box8.background.borderWidth,
        'border-color': this.box8.background.borderColor,
        'border-radius': this.box8.background.borderRadius,
      })
      $(this.$refs.box8).find('.num').css({
        'font-size': this.box8.text.fontSize,
        'line-height': this.box8.text.lineHight,
      })
    },
    saveDrag(){
      this.$store.commit({
        type: 'changeBox8',
        data: {
          box8: {
            height:  Math.round(parseFloat($(this.$refs.box8).css('height'))),
            width:  Math.round(parseFloat($(this.$refs.box8).css('width'))),
            left:  Math.round(parseFloat($(this.$refs.box8).css('left'))),
            top:  Math.round(parseFloat($(this.$refs.box8).css('top'))),
          }
        },
      })
    },
  },
  mounted(){

    setTimeout(()=>{
      this.changeStyle();
    },0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .box8{
    position: absolute;
    top: 690px;
    left: 360px;
    width: 600px;
    height: 70px;
    background-color: rgba(1,1,1,.2);
    color: #fff;
    border-width: 0;
    border-color: #fff;
    border-style: solid;
    border-radius: 0;
    z-index: 11;
    ul{
      width: 100%;
      height: 100%;
      li{
        position: relative;
        float: left;
        width: 10%;
        height: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 130%;
        cursor: pointer;
        .num{
          color: #e7b312;
        }
        .logo{
          width: 100%;
          height: 50%;
          background-image: url(../../../static/img/shishijiaotong.png);
          background-repeat: no-repeat;
          background-position: center;
        }
        .logo2{
          background-image: url(../../../static/img/yongduluduan.png);
        }
        .logo3{
          background-image: url(../../../static/img/jiaotongshigu.png);
        }
        .logo4{
          background-image: url(../../../static/img/jiaotongguanzhi.png);
        }
        .logo5{
          background-image: url(../../../static/img/daolushigong.png);
        }
        .logo6{
          background-image: url(../../../static/img/qitashigu.png);
        }
        .logo7{
          background-image: url(../../../static/img/daoluqixiang.png);
        }
        .logo8{
          background-image: url(../../../static/img/shexiangtou.png);
        }
        .logo9{
          background-image: url(../../../static/img/fuwuqu.png);
        }
        .logo10{
          background-image: url(../../../static/img/shoufeizhan.png);
        }
      }
      li:after{
        position: absolute;
        right: -1px;
        top: 0;
        bottom: 0;
        margin: auto;
        content: '';
        width: 2px;
        height: 40px;
        background: url(../../../static/img/3444.png) no-repeat bottom center;
        background-size: 2px 40px;
      }
      li:last-child:after{
        display: none;
      }
    }
  }
</style>
