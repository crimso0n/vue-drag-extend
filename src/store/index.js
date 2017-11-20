import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var state = {
	data: {
		drag: false,
		all: {
			height: '',
			width: ''
		},
		box1:{
			show: false,
			height: '',
			width: '',
			top: '',
			left: '',
			fontSize: '',
			color: '',
			backgroundColor: '',
		},
		box2:{
			show: false
		}
	},
}
const getters ={

}
const mutations={
	changeInfo(state,payload){
		if(payload.data){
			if (payload.data.all) {
				if(payload.data.all.height){
					state.data.all.height = payload.data.all.height
				}
				if(payload.data.all.width){
					state.data.all.width = payload.data.all.width
				}
			}
		}
	},
	changeBox1(state,payload){
		if(payload.data){
			if (payload.data && payload.data.box1) {
				// if(payload.data.box1.show){
				// 	console.log('store',payload.data.box1.show);
					state.data.box1.show = payload.data.box1.show
				// }
			}
		}
	},
	changeBox2(state,payload){
		if(payload.data){
			if (payload.data && payload.data.box2) {
					state.data.box2.show = payload.data.box2.show
			}
		}
	}
}
export default new Vuex.Store({
	state,
	mutations
})
