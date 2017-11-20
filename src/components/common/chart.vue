<template>
  <div class="chart wrap" ref="chart">
  </div>
</template>

<script>
export default {
  name: 'chart',
  props: [ 'options' ,'chartHandle' ],
  data(){
    return {
      chart: '',
    };
  },
  watch:{
    options(){
      // this.chart.clear();
      this.chart.setOption(this.options,true)
    }
  },
  mounted(){
    this.chart = echarts.init(this.$refs.chart);
    // 绘制图表
    if(this.options){ this.chart.setOption(this.options)}
    if(this.chartHandle){this.chartHandle(this.chart)}
    window.addEventListener('resize', this.resize)
  },
  destroyed(){
    this.chart.dispose();
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize(){
      this.chart.resize();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.chart{
	width: 100%;
	height: 100%;
}
</style>
