<template>
  <div id="view" class="hello wrap">
    <div class="edit">
      <Edit></Edit>
    </div>
    <div class="history">
      <div class="history-inner">
        <el-dropdown  trigger="click" @command="handleCommand" class="dropdown">
          <span class="el-dropdown-link">
            历史记录<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item,index in editInfos" :key="index" :command="index">{{index+1}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div @click="back" class="back btn">撤销</div>
        <div @click="go" class="go btn">重做</div>
        <!-- <button @click="logIndex">logIndex</button> -->
      </div>

    </div>
    <div class="view">
      <div class="view-inner">
        <Bmap></Bmap>
        <TitleBox v-if="showTitleBox"></TitleBox>
        <Box1 v-if="editInfo.box1.show"></Box1>
        <Box2 v-if="editInfo.box2.show"></Box2>
        <Box3 v-if="editInfo.box3.show"></Box3>
        <Box4 v-if="editInfo.box4.show"></Box4>
        <Box5 v-if="editInfo.box5.show"></Box5>
        <Box6 v-if="editInfo.box6.show"></Box6>
        <Box7 v-if="editInfo.box7.show"></Box7>
        <Box8 v-if="editInfo.box8.show"></Box8>
      </div>
    </div>
  </div>
</template>

<script>
import Edit from './edit/index'
import Bmap from './box/map'
import Box1 from './box/box1'
import Box2 from './box/box2'
import Box3 from './box/box3'
import Box4 from './box/box4'
import Box5 from './box/box5'
import Box6 from './box/box6'
import Box7 from './box/box7'
import Box8 from './box/box8'
import TitleBox from './box/titleBox'
export default {
  name: 'hello',
  components: {
    Edit,Bmap,TitleBox,Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8
  },
  data () {
    return {
      timeout:0,
      editInfos: [],
      editIndex: -1,
    }
  },
  computed:{
    history(){
      var his = [];
      for (let i = 0; i < this.editInfos.length; i++) {
        his[i] = i;
      }
      return his
    },
    editInfo(){
      return this.$store.state
    },
    isdrag(){
      return this.$store.state.all.drag
    },
    showTitleBox(){
      return true;
    },
    // showBox1(){
    //   return this.$store.state.box1.show
    // },
    // showBox2(){
    //   return this.$store.state.box2.show
    // },
    // showBox3(){
    //   return this.$store.state.box3.show
    // },
    // showBox4(){
    //   return this.$store.state.box4.show
    // },
    // showBox5(){
    //   return this.$store.state.box5.show
    // },
    // showBox6(){
    //   return this.$store.state.box6.show
    // },
    // showBox7(){
    //   return this.$store.state.box7.show
    // },
    // showBox8(){
    //   return this.$store.state.box8.show
    // },
    viewHeight(){
      return this.$store.state.all.height
    },
    viewWidth(){
      return this.$store.state.all.width
    },
  },
  watch:{
    editIndex(){
      if (this.editIndex > 1 && this.editIndex < this.editInfos.length) {
        $(".btn.back").addClass('active')
      }else {
        $(".btn.back").removeClass('active')
      }
      if (this.editIndex >= 1 && this.editIndex < (this.editInfos.length-1)) {
        $(".btn.go").addClass('active')
      }else {
        $(".btn.go").removeClass('active')
      }
    },
    editInfo:{
      handler() {
        if ((this.editIndex+1) == this.editInfos.length) {
          console.log('1222222222');
          var info = $.extend(true,{},this.editInfo);
          this.editInfos.push(info);
          this.editIndex++;
          if (this.editInfos.length > 20) {
            this.editInfos.shift();
          }
        }
      },
      deep: true
    },
    viewHeight(){
      $('.view-inner').css({
        height: this.viewHeight
      })
    },
    viewWidth(){
      $('.view-inner').css({
        width: this.viewWidth
      })
    }
  },
  methods:{
    handleCommand(command){
      this.editIndex = command;
      this.changeInfo(this.editInfos[(this.editIndex)])
    },
    back(){
      if (this.editIndex >= 2) {
        this.editIndex = this.editIndex - 1;
        this.changeInfo(this.editInfos[(this.editIndex)])
      }
    },
    go(){
      if (this.editIndex < (this.editInfos.length-1)) {
        console.log('go');
        this.editIndex++;
        console.log(this.editIndex);
        console.log(this.editInfos[this.editIndex]);
        this.changeInfo(this.editInfos[this.editIndex])
      }
    },
    logIndex(){
      console.log(this.editIndex);
    },
    changeInfo(info){
      console.log('info',info);
      this.$store.commit({type: 'changeInfo',data: info})
      this.$store.commit({type: 'changeBox1',data: info})
      this.$store.commit({type: 'changeBox2',data: info})
      this.$store.commit({type: 'changeBox3',data: info})
      this.$store.commit({type: 'changeBox4',data: info})
      this.$store.commit({type: 'changeBox5',data: info})
      this.$store.commit({type: 'changeBox6',data: info})
      this.$store.commit({type: 'changeBox7',data: info})
      this.$store.commit({type: 'changeBox8',data: info})
    },
  },
  mounted(){
    //加载配置信息
    // this.$store.dispatch('AllInfo')
    $.ajax({
      url:'../../static/editInfo.json',
      type: 'get',
      success: (res)=>{
        console.log(res);
        this.changeInfo(res);
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{
    width: 100%;
    height: 100%;
    .edit{
      float: left;
      width: 300px;
      height: 100%;
      // border: 1px solid red;
      overflow: auto;
    }
    .view{
      position: relative;
      float: left;
      width: calc(100% - 300px);
      height: calc(100% - 50px);
      bottom: -50px;
      background-color: #4a4a4a;
      overflow: auto;
      padding: 20px;
      .view-inner{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 1366px;
        height: 768px;
        background-color: #fff;
        box-shadow: 0px 0px 20px #000;
      }
    }
  }
  .history{
    position: absolute;
    left: 300px;
    top: 5px;
    width: calc(100% - 305px);
    height: 40px;
    box-shadow: 3px 3px 10px #ccc;
    .history-inner{
      float: right;
      width: 200px;
      height: 40px;
      right: 50px;
      padding-top: 10px;
      .btn{
        display: inline-block;
        width: 50px;
        height: 22px;
        border: 1px solid #eee;
        border-radius: 5px;
        font-size: 12px;
        text-align: center;
        background-color: #f1f1f1;
        cursor: pointer;
      }
      .btn.active{
        color: #fff;
        background-color: #3a98fe;
      }
    }
  }
  .hello.full {
    .edit{
      display: none;
    }
    .view{
      // background-color: #fff;
      width: 100%;
      height: 100%;
      .view-inner{
        margin: 0;
        box-shadow: none;
      }
    }
  }
</style>
