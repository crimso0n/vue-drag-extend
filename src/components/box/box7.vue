<template>
  <div class="box7" id="box7" ref="box7" v-drag:drag="isdrag" @mouseup="saveDrag">
    <Box>
      <div slot="content" class="box-content">
        <ul>
          <li>
            <VerticMid>
              <p class="text">路网时速</p>
              <p class="num">94.35KM/H</p>
            </VerticMid>
          </li>
          <li>
            <VerticMid>
              <p class="text">拥堵路段数</p>
              <p class="num">9</p>
            </VerticMid>
          </li>
          <li>
            <VerticMid>
              <p class="text">拥堵里程</p>
              <p class="num">0.5KM/H</p>
            </VerticMid>
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
  name: 'box7',
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
    box7(){
      return this.$store.state.box7
    },
  },
  watch:{
    box7:{
      handler(){
        this.changeStyle();
      },
      deep: true
    }
  },
  methods:{
    changeStyle(){
      $(this.$refs.box7).css({
        'left': this.box7.left,
        'top': this.box7.top,
        'width': this.box7.width,
        'height': this.box7.height,
        'color': this.box7.text.color,
        'background-color': this.box7.background.backgroundColor,
        'border-width': this.box7.background.borderWidth,
        'border-color': this.box7.background.borderColor,
        'border-radius': this.box7.background.borderRadius,
      })
      $(this.$refs.box7).find('.text').css({
        'font-size': this.box7.text.fontSize,
        'line-height': this.box7.text.lineHight,
      })
      $(this.$refs.box7).find('.num').css({
        'font-size': this.box7.text.fontSize,
        'line-height': this.box7.text.lineHight,
      })
    },
    saveDrag(){
      this.$store.commit({
        type: 'changeBox7',
        data: {
          box7: {
            height:  Math.round(parseFloat($(this.$refs.box7).css('height'))),
            width:  Math.round(parseFloat($(this.$refs.box7).css('width'))),
            left:  Math.round(parseFloat($(this.$refs.box7).css('left'))),
            top:  Math.round(parseFloat($(this.$refs.box7).css('top'))),
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
  .box7{
    position: absolute;
    top: 0;
    width: 400px;
    height: 70px;
    background-color: rgba(1, 1, 1, .2);
    color: #e7b312;
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
        width: 33.3%;
        height: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 130%;
        .text{
          color: #fff;
        }
        .num{

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
    }
  }
</style>
