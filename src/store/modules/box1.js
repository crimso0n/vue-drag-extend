 //box1属性
const state = {
		show: false,
		height: '',
		width: '',
		top: '',
		left: '',
		fontSize: '',
		color: '',
		backgroundColor: '',
}
const getters ={

}
const actions = {

}

const mutations = {
	changeBox1(state,payload){
		if(payload.data){
			if (payload.data && payload.data.box1) {
					state.show = payload.data.box1.show
			}
		}
	},
}
export default {
	state,
	actions,
	mutations,
	getters
}
