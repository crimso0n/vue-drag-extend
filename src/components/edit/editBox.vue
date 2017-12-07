<template>
  <div class="editBox wrap">
    <div v-if="boxName == 'editBox1'">
      <editBox1></editBox1>
    </div>
    <div v-if="boxName == 'editBox2'">
      <editBox2></editBox2>
    </div>
    <div v-if="boxName == 'editBox3'">
      <editBox3></editBox3>
    </div>
    <div v-if="boxName == 'editBox4'">
      <editBox4></editBox4>
    </div>
    <div v-if="boxName == 'editBox5'">
      <editBox5></editBox5>
    </div>
    <div v-if="boxName == 'editBox6'">
      <editBox6></editBox6>
    </div>
    <div v-if="boxName == 'editBox7'">
      <editBox7></editBox7>
    </div>
    <div v-if="boxName == 'editBox8'">
      <editBox8></editBox8>
    </div>
  </div>
</template>

<script>
import editBox1 from './editBox1'
import editBox2 from './editBox2'
import editBox3 from './editBox3'
import editBox4 from './editBox4'
import editBox5 from './editBox5'
import editBox6 from './editBox6'
import editBox7 from './editBox7'
import editBox8 from './editBox8'
export default {
  name: 'editBox',
  props: ['boxName'],
  components:{
    editBox1,editBox2,editBox3,editBox4,editBox5,editBox6,editBox7,editBox8,
  },
  data () {
    return {

    }
  },
  watch:{
  },
  methods:{
  },
  mounted(){
  },
}
</script>
<style>
  .el-input-number--mini{
    width: 100px;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
