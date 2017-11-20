<template>
  <div class="box2">
    <Box>
      <div slot="content">Box2</div>
    </Box>

  </div>
</template>

<script>
import Box from '../common/box'
export default {
  name: 'box2',
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
  .box2{
    width: 100px;
    height: 100px;
    background-color: #aaa;
  }
</style>
