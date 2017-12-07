import Vue from 'vue'
import Vuex from 'vuex'
import box1 from './modules/box1'
import box2 from './modules/box2'
import box3 from './modules/box3'
import box4 from './modules/box4'
import box5 from './modules/box5'
import box6 from './modules/box6'
import box7 from './modules/box7'
import box8 from './modules/box8'
import map from './modules/map'
Vue.use(Vuex)

var state = {
	"all": {
		"height": '',
		"width": '',
		"drag": false,
		"isHistory": false,
	},
}
const getters ={
}
const mutations={
	changeInfo(state,payload){
		if(payload.data){
			if (payload.data.all) {
				if(payload.data.all.height){
					state.all.height = payload.data.all.height
				}
				if(payload.data.all.width){
					state.all.width = payload.data.all.width
				}
			}
		}
	},
}
const actions = {
    // AllInfo ({commit}) {
    //   commit({
		// 		type: 'changebox1',
		// 		data:
		// 	})
    // }
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules:{
		box1,
		box2,
		box3,
		box4,
		box5,
		box6,
		box7,
		box8,
		map
	}
})
