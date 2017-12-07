<template>
  <div class="box4" id="box4" ref="box4" v-drag:drag="isdrag" @mouseup="saveDrag">
    <Box>
      <div slot="content" class="box-content">
        <BoxBorder></BoxBorder>
        <div class="chart1">
          <div class="title">拥堵指数</div>
          <Chart :options="option1" :chartHandle="chartHandle1"></Chart>
        </div>
        <div class="chart2">
          <Chart :options="option2" :chartHandle="chartHandle2"></Chart>
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
  name: 'box4',
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
    box4(){
      return this.$store.state.box4
    },
    option1(){
      var option = {
        color: ['#fe8074','#65f6b4'],
        tooltip: {
          trigger: 'item',
          // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name:'事件统计',
            type:'pie',
            startAngle: 216,
            clockwise: false,
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:70, name:'交通事故',
              itemStyle: {
                normal: {
                  color: 'transparent'
                },
                emphasis: {
                  color: 'transparent'
                },
              }},
              {value:30, name:'道路施工',
                itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{offset: 0, color: '#48b6ff'  },
                      {offset: 1, color: '#e62eff'}], false)
                  }
              }}
            ]
          },
          {
            type:'pie',
            startAngle: 216,
            clockwise: false,
            radius: ['78%', '80%'],
            legendHoverLink: false,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            tooltip: {
              show: false
            },
            label: {
              normal: {
                show: false,
                position: 'center'
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:30, name:'',
              itemStyle: {
                normal: {
                  color: 'transparent'
                },
                emphasis: {
                  color: 'transparent'
                },
              }},
              {value:70, name:'',
                itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{offset: 0, color: '#48b6ff'  },
                      {offset: 1, color: '#e62eff'}], false)
                  }
              }}
            ]
          }
        ]
      };
      return option
    },
    option2(){
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
    box4:{
      handler(){
        this.changeStyle();
      },
      deep: true
    }
  },
  methods:{
    changeStyle(){
      $(this.$refs.box4).css({
        'left': this.box4.left,
        'top': this.box4.top,
        'width': this.box4.width,
        'height': this.box4.height,
        'color': this.box4.text.color,
        'background-color': this.box4.background.backgroundColor,
        'border-width': this.box4.background.borderWidth,
        'border-color': this.box4.background.borderColor,
        'border-radius': this.box4.background.borderRadius,
      })
      $(this.$refs.box4).find('.title').css({
        'font-size': this.box4.text.fontSize + 2,
        'line-height': this.box4.text.lineHight,
      })
    },
    saveDrag(){
      this.$store.commit({
        type: 'changeBox4',
        data: {
          box4: {
            height:  Math.round(parseFloat($(this.$refs.box4).css('height'))),
            width:  Math.round(parseFloat($(this.$refs.box4).css('width'))),
            left:  Math.round(parseFloat($(this.$refs.box4).css('left'))),
            top:  Math.round(parseFloat($(this.$refs.box4).css('top'))),
          }
        },
      })
    },
    chartHandle1(chart){
      if (chart) {
        this.chart1 = chart
      }
    },
    chartHandle2(chart){
      if (chart) {
        this.chart2 = chart
      }
    },
  },
  mounted(){
    var box4 = document.getElementById('box4')
    var timer = null;
    EleResize.on(box4, ()=>{
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        this.chart1.resize();
        this.chart2.resize();
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
  .box4{
    position: absolute;
    top: 60px;
    left: 966px;
    width: 400px;
    height: 200px;
    background-color: rgba(1, 1, 1, .7);
    color: #fff;
    border-width: 0;
    border-color: #fff;
    border-style: solid;
    border-radius: 0;
    z-index: 11;
    .chart1,.chart2{
      float: left;
      width: 50%;
      height: 100%;
      position: relative;
      .title{
        position: absolute;
        top: 10px;
        font-size: 16px;
        color: #fff;
      }
      .text{
        position: absolute;
        width: 40%;
        height: 40%;
        top: 30%;
        left: 30%;
        font-size: 14px;
        text-align: center;
      }
    }
    .chart1{
      width: 35%;
    }
    .chart2{
      width: 65%;
    }
  }
</style>
