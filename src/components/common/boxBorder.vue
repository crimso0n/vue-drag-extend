<template>
  <div class="border-wrap wrap">
    <div class="border-top">
      <div class="border-top-content"></div>
    </div>
    <div class="border-left"></div>
    <div class="border-right"></div>
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
  .border-wrap{
    position: absolute;
    .border-top{
      position: absolute;
      top: 2px;
      left: 0;
      right: 0;
      width: 80%;
      height: 2px;
      margin: auto;
      background-color: #004b83;
      border-radius: 1px;
      .border-top-content{
        width: 60%;
        height: 2px;
        margin: auto;
        background-color: #0093f8;
        border-radius: 1px;
      }
      .border-top-content:after{
        content: '';
        position: absolute;
        top: -1px;
        right: 0;
        width: 10px;
        height: 4px;
        border-radius: 1px;
        background-color: #0093f8;
      }
      .border-top-content:before{
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        width: 10px;
        height: 4px;
        border-radius: 1px;
        background-color: #0093f8;
      }
    }

    .border-left{
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .border-left:before{
      content: '';
      position: absolute;
      width: 20px;
      height: 2px;
      background-color: #015c9f;
    }
    .border-left:after{
      content: '';
      position: absolute;
      top: -20px;
      left: -2px;
      height: 22px;
      width: 2px;
      background-color: #015c9f;
    }
    .border-right{
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .border-right:before{
      content: '';
      position: absolute;
      left: -20px;
      width: 20px;
      height: 2px;
      background-color: #015c9f;
    }
    .border-right:after{
      content: '';
      position: absolute;
      top: -20px;
      height: 22px;
      width: 2px;
      background-color: #015c9f;
    }
  }
</style>
