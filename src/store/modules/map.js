 //map属性
const state = {
	center:{
		lng: '',
		lat: '',
	},
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
					state.center.lng = payload.data.map.center.lng
					state.center.lat = payload.data.map.center.lat
			}
			console.log(state.center.lng);
	},
}
export default {
	state,
	actions,
	mutations,
	getters
}
