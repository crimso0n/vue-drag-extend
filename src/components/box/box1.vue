<template>
  <div class="box1" id="box1" ref="box1" v-drag:drag="isdrag" @mouseup="saveDrag">
    <Box>
      <div slot="content" class="box-content">
        <BoxBorder></BoxBorder>
        <div class="chart1">
          <div class="title text-change">事件统计</div>
          <Chart :options="option" :chartHandle="chartHandle1"></Chart>
          <div class="text text-change">
            <VerticMid>
              事件总数</br>
              3283件
            </VerticMid>
          </div>
        </div>
        <div class="chart2">
          <div class="title text-change">车辆保有量</div>
          <Chart :options="option" :chartHandle="chartHandle2"></Chart>
          <div class="text text-change">
            <VerticMid>
              事件总数</br>
              3283件
            </VerticMid>
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
  name: 'box1',
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
    box1(){
      return this.$store.state.box1
    },
    option(){
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
            radius: ['47%', '65%'],
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
              {value:35, name:'交通事故',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{offset: 0, color: '#fe8a70'  },
                  {offset: 1, color: '#fe7877'}], false)
                }
              }},
              {value:310, name:'道路施工',
                itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{offset: 0, color: '#69f9b0'  },
                      {offset: 1, color: '#04a5fc'}], false)
                  }
              }}
            ]
          }
        ]
      };
      return option
    }
  },
  watch:{
    box1:{
      handler(){
        this.changeStyle();
      },
      deep: true
    }
  },
  methods:{
    changeStyle(){
      $(this.$refs.box1).css({
        'left': this.box1.left,
        'top': this.box1.top,
        'width': this.box1.width,
        'height': this.box1.height,
        'color': this.box1.text.color,
        'background-color': this.box1.background.backgroundColor,
        'border-width': this.box1.background.borderWidth,
        'border-color': this.box1.background.borderColor,
        'border-radius': this.box1.background.borderRadius,
      })
      $(this.$refs.box1).find('.title').css({
        'font-size': this.box1.text.fontSize + 2,
        'line-height': this.box1.text.lineHight,
      })
      $(this.$refs.box1).find('.text').css({
        'font-size': this.box1.text.fontSize,
        'line-height': this.box1.text.lineHight,
      })
    },
    saveDrag(){
      this.$store.commit({
        type: 'changeBox1',
        data: {
          box1: {
            height: Math.round(parseFloat($(this.$refs.box1).css('height'))),
            width: Math.round(parseFloat($(this.$refs.box1).css('width'))),
            left: Math.round(parseFloat($(this.$refs.box1).css('left'))),
            top: Math.round(parseFloat($(this.$refs.box1).css('top'))),
          }
        },
      })
    },
    chartHandle1(chart){
      if (chart) {
        this.chart1 = chart
      }
      this.chart1.on('click',()=>{
        console.log('点击chart');
      })
    },
    chartHandle2(chart){
      if (chart) {
        this.chart2 = chart
      }
      this.chart2.on('click',()=>{
        console.log('点击chart');
      })
    }
  },
  mounted(){
    var box1 = document.getElementById('box1')
    var timer = null;
    EleResize.on(box1, ()=>{
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        console.log('resize');
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
$fontSize: 14px;
$lineHight: 150%;
  .box1{
    position: absolute;
    top: 60px;
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
  }
</style>
