<template>
  <div class="Box-wrap wrap">
    <div class="drag"></div>
    <div class="box-content-wrap">
      <slot name="content" class="box-content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  computed:{

    },
  data () {
    return {

    }
  },
  methods:{

  },
  created(){

  },
  mounted(){

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Box-wrap{
    width: 100%;
    height: 100%;
    border: 2px dashed rgba(0,0,0,0);
    .drag{
      display: none;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0px;
      height: 0px;
      border: 15px solid rgba(200,200,200,0.7);
      border-left-color: transparent;
      border-top-color: transparent;
      cursor: nwse-resize;
      z-index: 100;
    }
    .box-content-wrap{
      width: 100%;
      height: 100%;
      overflow: hidden;
      .box-content{
        width: 100%;
        height: 100%;
      }
    }
  }
  .Box-wrap:hover{
    .drag{
      display: block;
    }
    .border{
      display: block;
    }
    border: 2px dashed #778ba3;
    box-sizing: border-box;
  }
</style>
