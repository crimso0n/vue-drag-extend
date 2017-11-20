<template>
  <div class="edit wrap">
    <div>
      宽：
      <input type="text" v-model="width">
    </div>
    <div>
      高：
      <input type="text" v-model="height">
    </div>
    <button @click="toggleBox1">组件1</button>
    <button @click="toggleBox2">组件2</button>
    <button>保存</button>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
      height: '768',
      width: '1366',
      showBox1: false,
      showBox2: false,
    }
  },
  watch:{
    height(){
      this.$store.commit({
        type: 'changeInfo',
        data: {
          all: {
            height: this.height
          }
        },
      })
    },
    width(){
      this.$store.commit({
        type: 'changeInfo',
        data: {
          all: {
            width: this.width
          }
        },
      })
    }
  },
  methods:{
    toggleBox1(){
      this.showBox1 = !this.showBox1
      this.$store.commit({
        type: 'changeBox1',
        data: {
          box1: {
            show: this.showBox1
          }
        },
      })
    },
    toggleBox2(){
      this.showBox2 = !this.showBox2
      this.$store.commit({
        type: 'changeBox2',
        data: {
          box2: {
            show: this.showBox2
          }
        },
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .edit{
    width: 100%;
    height: 100%;
  }
</style>
