<template>
  <div class="box2" id="box2" ref="box2" v-drag:drag="isdrag" @mouseup="saveDrag">
    <Box>
      <div slot="content" class="box-content">
        <BoxBorder></BoxBorder>
        <div class="chart1">
          <div class="title">当日事件统计</div>
          <Chart :options="option" :chartHandle="chartHandle1"></Chart>
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
  name: 'box2',
  components:{
    Box,Chart,VerticMid,BoxBorder
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
    box2(){
      return this.$store.state.box2
    },
    option(){
      var option = {
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : {
            type : 'category',
            boundaryGap : false,
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            data : ['1','2','3','4','5','6','7']
          },
          yAxis : {
            type : 'value',
            splitLine: {
              show: false,
            },
          },
          series : [
            {
              name:'事件数',
              type:'line',
              stack: '总量',
              connectNulls: false,
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#43abf9'
                }
              },
              areaStyle: {
                normal: {
                  color: {
                    type: 'linear',x: 0,y: 0,x2: 0, y2: 1,
                    colorStops: [{
                      offset: 0, color: '#43abf9' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#212d37' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              },
              data:[120, 132, 101, 134, 90, 230, 210]
            }
          ]
      };
      return option
    }
  },
  watch:{
    box2:{
      handler(){
        this.changeStyle();
      },
      deep: true
    }
  },
  methods:{
    changeStyle(){
      $(this.$refs.box2).css({
        'left': this.box2.left,
        'top': this.box2.top,
        'width': this.box2.width,
        'height': this.box2.height,
        'color': this.box2.text.color,
        'background-color': this.box2.background.backgroundColor,
        'border-width': this.box2.background.borderWidth,
        'border-color': this.box2.background.borderColor,
        'border-radius': this.box2.background.borderRadius,
      })
      $(this.$refs.box2).find('.title').css({
        'font-size': this.box2.text.fontSize + 2,
        'line-height': this.box2.text.lineHight,
      })
      $(this.$refs.box2).find('.text').css({
        'font-size': this.box2.text.fontSize,
        'line-height': this.box2.text.lineHight,
      })
    },
    saveDrag(){
      this.$store.commit({
        type: 'changeBox2',
        data: {
          box2: {
            height:  Math.round(parseFloat($(this.$refs.box2).css('height'))),
            width:  Math.round(parseFloat($(this.$refs.box2).css('width'))),
            left:  Math.round(parseFloat($(this.$refs.box2).css('left'))),
            top:  Math.round(parseFloat($(this.$refs.box2).css('top'))),
          }
        },
      })
    },
    chartHandle1(chart){
      if (chart) {
        this.chart1 = chart
      }
    },
  },
  mounted(){
    var box2 = document.getElementById('box2')
    var timer = null;
    EleResize.on(box2, ()=>{
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        this.chart1.resize();
      },0)
    });
    setTimeout(()=>{
      this.changeStyle();
    },0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .box2{
    position: absolute;
    top: 280px;
    width: 400px;
    height: 200px;
    background-color: rgba(1, 1, 1, .7);
    color: #fff;
    border-width: 0;
    border-color: #fff;
    border-style: solid;
    border-radius: 0;
    z-index: 11;
    .chart1{
      width: 100%;
      height: 100%;
      position: relative;
      .title{
        position: absolute;
        top: 10px;
        font-size: 16px;
        color: #fff;
      }
    }
  }
</style>
