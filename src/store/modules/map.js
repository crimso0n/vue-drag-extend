 //map属性
const state = {
		center: '',
		mapStyle: '',
		enabledrag: '',
}
const getters ={

}
const actions = {

}

const mutations = {
	changeMap(state,payload){
			if (payload.data && payload.data.map) {
					state.show = payload.data.box1.show
			}
	},
}
export default {
	state,
	actions,
	mutations,
	getters
}
