<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td, div { margin:0; padding:0; box-sizing: border-box;}
i{font-style: normal;}
body,html{ height: 100%; width: 100%;}
html{font-size: 62.5%;/*10 ÷ 16 × 100% = 62.5%*/}
body{background:#fff;-webkit-text-size-adjust:100%;}
a{color:#2d374b;text-decoration:none}
a:hover{color:#cd0200;text-decoration:underline}
em{font-style:normal}
li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color:#414141;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
/* 公共类名 */
.clearfix{*zoom:1}
.echarts{ height:100%;width:100%;}
.clearfix:after{display:block;visibility:hidden;clear:both;height:0;content:'';font-size:0}
.hide{display: none;}
.show{display: block;}
.wrap{ width: 100%;height: 100%;position: relative;}


.mapboxgl-ctrl-logo,.mapboxgl-ctrl-bottom-right{
  display: none!important;
}
*, *:before, *:after{
  box-sizing: border-box;
}
</style>
