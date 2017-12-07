<template>
  <div class="box5" id="box5" ref="box5" v-drag:drag="isdrag" @mouseup="saveDrag">
    <Box>
      <div slot="content" class="box-content">
        <BoxBorder></BoxBorder>
        <ul class="title">
          <li>高速拥堵</li>
        </ul>
        <div class="body">
          <div class="item clearfix" v-for="item in data">
            <span class="s1">{{item.direction}}</span>
            <span class="s2">{{item.time}}</span>
          </div>
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
  name: 'box5',
  components:{
    Box,Chart,VerticMid,BoxBorder
  },
  data () {
    return {

      data:[
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
        {
          direction: 'G30宁洛高界蚌段蚌埠往界首方向',
          time: '11:36',
        },
      ]
    }
  },
  computed:{
    isdrag(){
      return this.$store.state.all.drag
    },
    box5(){
      return this.$store.state.box5
    },
  },
  watch:{
    box5:{
      handler(){
        this.changeStyle();
      },
      deep: true
    }
  },
  methods:{
    changeStyle(){
      $(this.$refs.box5).css({
        'left': this.box5.left,
        'top': this.box5.top,
        'width': this.box5.width,
        'height': this.box5.height,
        'color': this.box5.text.color,
        'background-color': this.box5.background.backgroundColor,
        'border-width': this.box5.background.borderWidth,
        'border-color': this.box5.background.borderColor,
        'border-radius': this.box5.background.borderRadius,
      })
      $(this.$refs.box5).find('.title li').css({
        'font-size': this.box5.text.fontSize + 2,
        'line-height': this.box5.text.lineHight + 1,
      })
      $(this.$refs.box5).find('.item').css({
        'font-size': this.box5.text.fontSize,
        'line-height': this.box5.text.lineHight,
      })
    },
    saveDrag(){
      this.$store.commit({
        type: 'changeBox5',
        data: {
          box5: {
            height:  Math.round(parseFloat($(this.$refs.box5).css('height'))),
            width:  Math.round(parseFloat($(this.$refs.box5).css('width'))),
            left:  Math.round(parseFloat($(this.$refs.box5).css('left'))),
            top:  Math.round(parseFloat($(this.$refs.box5).css('top'))),
          }
        },
      })
    },
  },
  mounted(){
    $('.box5 .body').css({
      'height': 'calc(100% - '+ $('.box5 .title').css('height') +')'
    });
    $(".box5 .body").mCustomScrollbar({
        axis:"y",
        theme:"danping",
    });
    setTimeout(()=>{
      this.changeStyle();
    },0)
  }
}
</script>
<style>
.mCS-danping.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color:#015a9c;width:4px;}
.mCS-danping.mCSB_scrollTools .mCSB_draggerRail{ background-color:#666;width:4px;}

.mCSB_inside > .mCSB_container{
  margin-right: 15px!important;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .box5{
    position: absolute;
    top: 280px;
    left: 966px;
    width: 400px;
    height: 200px;
    background-color: rgba(1, 1, 1, .7);
    color: #30a3f5;
    border-width: 0;
    border-color: #fff;
    border-style: solid;
    border-radius: 0;
    z-index: 11;
    .title{
      width: 100%;
      padding-top: 5px;
      color: #fff;
      li{
        position: relative;
        float: left;
        width: 25%;
        font-size: 14px;
        text-align: center;
        line-height: 250%;
      }
      li:after{
        position: absolute;
        right: -2.5px;
        bottom: -5px;
        display: block;
        clear: both;
        content: '';
        height: 8px;
        width: 5px;
        background-color: #0291fd;
      }

    }
    .title:after{
      display: block;
      clear: both;
      height: 15px;
      width: 100%;
      content: '';
      border-top: 2px solid #214769;
    }
    .body{
      width: 100%;
      height: 100px;
      overflow: auto;
      .item{
        width: 100%;
        font-size: 14px;
        line-height: 200%;
        .s1{
          float: left;
        }
        .s2{
          float: right;
        }
      }
    }
  }
</style>
