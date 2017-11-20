<template>
  <div class="box1">
    <Box>
      <div slot="content"><div id="bigger"></div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </Box>

  </div>
</template>

<script>
import Box from '../common/box'
export default {
  name: 'box1',
  components:{
    Box
  },
  data () {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .box1{
    width: 100px;
    height: 100px;
    background-color: #aaa;
  }
</style>
