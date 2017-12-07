<template>
  <div class="map">
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
export default {
  name: 'box2',
  data () {
    return {
      chart: '',
      map: '',
    }
  },
  computed:{
    mapCenter(){
      return (this.$store.state.map.center.lng + ',' + this.$store.state.map.center.lat)
    },
    lng(){
      return this.$store.state.map.center.lng
    },
    lat(){
      return this.$store.state.map.center.lat
    },
    option(){
      var option = {
          // 加载 bmap 组件
          bmap: {
              // 百度地图中心经纬度
              center: [120.13066322374, 30.240018034923],
              // 百度地图缩放
              zoom: 9,
              // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
              roam: true,
              // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
              mapStyle: {
                styleJson:[
                   {
                             "featureType": "land",
                             "elementType": "geometry.fill",
                             "stylers": {
                                       "color": "#0c1e35"
                             }
                   },
                   {
                             "featureType": "highway",
                             "elementType": "geometry.stroke",
                             "stylers": {
                                       "color": "#1f395a"
                             }
                   },
                   {
                             "featureType": "arterial",
                             "elementType": "geometry.fill",
                             "stylers": {
                                       "color": "#1f4f5a"
                             }
                   },
                   {
                             "featureType": "boundary",
                             "elementType": "geometry.fill",
                             "stylers": {
                                       "color": "#0d597a",
                                       "weight": "2.8",
                                       "visibility": "on"
                             }
                   },
                   {
                             "featureType": "highway",
                             "elementType": "geometry.fill",
                             "stylers": {
                                       "color": "#1f395a"
                             }
                   },
                   {
                             "featureType": "water",
                             "elementType": "geometry.fill",
                             "stylers": {
                                       "color": "#365174"
                             }
                   },
                   {
                             "featureType": "label",
                             "elementType": "all",
                             "stylers": {}
                   },
                   {
                             "featureType": "railway",
                             "elementType": "all",
                             "stylers": {
                                       "color": "#0d1d34"
                             }
                   }
         				]
              }
          },
      }
      return option;
    },
  },
  watch:{
    mapCenter(){
      this.map.panTo(new BMap.Point(this.lng, this.lat))
    },
    option(){
      this.chart.setOption(this.option,false)
    },
  },
  methods:{
    resize(){
      this.chart.resize();
    }
  },
  mounted(){
    this.chart = echarts.init(this.$refs.chart);
    if(this.option){ this.chart.setOption(this.option)};
    window.addEventListener('resize', this.resize)
    this.map = this.chart.getModel().getComponent('bmap').getBMap();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .map{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    .chart{
      width: 100%;
      height: 100%;
    }
  }
</style>
