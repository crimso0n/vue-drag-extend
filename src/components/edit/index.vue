<template>
  <div class="edit wrap">
    <!-- <div>
      宽：<input type="text" v-model="width">
    </div>
    <div>
      高：<input type="text" v-model="height">
    </div>
    <button @click="toggleBox1">组件1</button>
    <button @click="toggleBox2">组件2</button>
    <button @click="toggleBox3">组件3</button>
    <button @click="toggleBox4">组件4</button>
    <button @click="toggleBox5">组件5</button>
    <button @click="toggleBox6">组件6</button>
    <button @click="toggleBox7">组件7</button>
    <button @click="toggleBox8">组件8</button><br/>
    <button>保存</button>
    <button @click="fullScreen">预览</button>
    <div>
      地图中心点坐标：</br>
      <input type="text" v-model="center.lng">
      <input type="text" v-model="center.lat">
      <button @click="changeMapCenter">确定</button>
    </div> -->
    <el-tabs v-model="activeName2">
      <el-tab-pane label="组件" name="first">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item :name="index" v-for="item,index in boxList" :key="index" class="edit-tab">
            <div slot="title">
              <div class="isshow" @click.stop="isshow">
                <input :id="item.name" type="checkbox" v-model="item.boxStyle.show">
                <label :for="item.name"></label>
              </div>
              <div class="delete" @click.stop="deleteBox(index)">
                <i class="el-icon-delete"></i>
              </div>
              <div class="editTitle">{{item.name}}</div>
            </div>
            <editBox :boxName="item.component"></editBox>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <!-- <el-tab-pane label="全局" name="second">全局</el-tab-pane> -->
    </el-tabs>

    <div class="save" @click="save">保存</div>
  </div>
</template>

<script>
import editBox from './editBox'
import Vue from 'vue'
export default {
  name: 'edit',
  components:{
    editBox
  },
  data () {
    return {
      activeName: '1',
      activeName2: 'first',
      height: '768',
      width: '1366',
      center:{
        lng: '117',
        lat: '33',
      },
      boxLists: [
        {
          name: '事件统计、车辆保有量',
          component: 'editBox1',
          boxStyle: this.$store.state.box1,
        },{
          name: '当日事件统计',
          component: 'editBox2',
          boxStyle: this.$store.state.box2,
        },{
          name: '交通事件',
          component: 'editBox3',
          boxStyle: this.$store.state.box3,
        },{
          name: '拥堵指数',
          component: 'editBox4',
          boxStyle: this.$store.state.box4,
        },{
          name: '高速拥堵',
          component: 'editBox5',
          boxStyle: this.$store.state.box5,
        },{
          name: '高危路段',
          component: 'editBox6',
          boxStyle: this.$store.state.box6,
        },{
          name: '路网时速',
          component: 'editBox7',
          boxStyle: this.$store.state.box7,
        },{
          name: '图层',
          component: 'editBox8',
          boxStyle: this.$store.state.box8,
        }
      ]
    }
  },
  computed:{
    boxList(){
      return this.boxLists
    },
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
    },
  },
  methods:{
    save(){
      var data = this.$store.state
      console.log('保存数据：',data);
    },
    isshow(){

    },
    deleteBox(index){
      this.boxLists.splice(index,1);
    },
    fullScreen(){
      $('#view').addClass('full');
    },
    changeMapCenter(){
      this.$store.commit({
        type: 'changeMap',
        data: {
          map: {
            center:{
              lat: this.center.lat,
              lng: this.center.lng
            },
          }
        },
      })
    },

  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .edit{
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow: auto;
    .edit-tab{
      position: relative;
    }
    .editTitle{
      margin-left: 30px;
    }
    .delete{
      position: absolute;
      right: 40px;
      z-index: 1000;
    }
    .isshow{
      position: absolute;
      width: 30px;
      input{
        display: none;
      }
      label{
        display: block;
        margin-top: 12px;
        width: 22px;
        height: 22px;
        background: url(../../../static/img/hide.png) no-repeat center;
        background-size: 22px 22px;
      }
      input:checked+label{
        background: url(../../../static/img/show.png) no-repeat center;
        background-size: 22px 22px;
      }
    }
  }
  .save{
    position: absolute;
    bottom: 20px;
    right: 30px;
    width: 60px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background-color: #3a98fe;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 1px 1px 10px #888;
  }
  .save:hover{
    background-color: #2d7ed6;
  }
</style>
