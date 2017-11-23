<template>
  <div class="map">
    <div class="chart wrap" ref="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'box2',
  data () {
    return {
      chart: '',
    }
  },
  computed:{
    option(){
      var option = {
    		bmap: {
    			center: [117.223523, 32.028226],
    			zoom: 8,
    			roam: true,
    			mapStyle: {
    				styleJson: [{
    					'featureType': 'water',
    					'elementType': 'all',
    					'stylers': {
    						'color': '#d1d1d1'
    					}
    				}, {
    					'featureType': 'land',
    					'elementType': 'all',
    					'stylers': {
    						'color': '#f3f3f3'
    					}
    				}, {
    					'featureType': 'railway',
    					'elementType': 'all',
    					'stylers': {
    						'visibility': 'off'
    					}
    				}, {
    					'featureType': 'highway',
    					'elementType': 'all',
    					'stylers': {
    						'color': '#fdfdfd'
    					}
    				}, {
    					'featureType': 'highway',
    					'elementType': 'labels',
    					'stylers': {
    						'visibility': 'off'
    					}
    				}, {
    					'featureType': 'arterial',
    					'elementType': 'geometry',
    					'stylers': {
    						'color': '#fefefe'
    					}
    				}, {
    					'featureType': 'arterial',
    					'elementType': 'geometry.fill',
    					'stylers': {
    						'color': '#fefefe'
    					}
    				}, {
    					'featureType': 'poi',
    					'elementType': 'all',
    					'stylers': {
    						'visibility': 'off'
    					}
    				}, {
    					'featureType': 'green',
    					'elementType': 'all',
    					'stylers': {
    						'visibility': 'off'
    					}
    				}, {
    					'featureType': 'subway',
    					'elementType': 'all',
    					'stylers': {
    						'visibility': 'off'
    					}
    				}, {
    					'featureType': 'manmade',
    					'elementType': 'all',
    					'stylers': {
    						'color': '#d1d1d1'
    					}
    				}, {
    					'featureType': 'local',
    					'elementType': 'all',
    					'stylers': {
    						'color': '#d1d1d1'
    					}
    				}, {
    					'featureType': 'arterial',
    					'elementType': 'labels',
    					'stylers': {
    						'visibility': 'off'
    					}
    				}, {
    					'featureType': 'boundary',
    					'elementType': 'all',
    					'stylers': {
    						'color': '#fefefe'
    					}
    				}, {
    					'featureType': 'building',
    					'elementType':   'all',
    					'stylers': {
    						'color': '#d1d1d1'
    					}
    				}, {
    					'featureType': 'label',
    					'elementType': 'labels.text.fill',
    					'stylers': {
    						'color': '#999999'
    					}
    				}]
    			}
    		},
        // tooltip: {
        //   trigger: 'item',
        //   formatter: function (params) {
        //     return params.name + ' : ' + params.value[2] + '%';
        //   }
        // },
        // visualMap: {
        //   min: 0,
        //   max: 100,
        //   top: 10,
        //   left: 10,
        //   calculable: true,
        //   inRange: {
        //     color: ['#d94e5d', '#eac736', '#50a3ba']
        //   },
        //   textStyle: {
        //     color: '#111'
        //   }
        // },
    		// series: [{
    		// 	type: 'scatter',
    		// 	coordinateSystem: 'bmap',
    		// 	data: this.dfData,
        //   label: {
        //         normal: {
        //             formatter: '{b}',
        //             position: 'right',
        //             show: false
        //         },
        //         emphasis: {
        //             show: true
        //         }
        //     },
    		// },
        // {
        //     name: 'select',
        //     type: 'effectScatter',
        //     coordinateSystem: 'bmap',
        //     data:this.currentArea,
        //     symbolSize: 20,
        //     showEffectOn: 'render',
        //     rippleEffect: {
        //         brushType: 'stroke'
        //     },
        //     hoverAnimation: true,
        //     zlevel: 1
        // }
      // ]
    	}
      return option;
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
  }
</style>
