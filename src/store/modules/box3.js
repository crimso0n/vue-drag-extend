 //box3属性
const state = {
		show: false,
		height: 200,
		width: 400,
		top: 500,
		left: 0,
		text: {
			fontSize: 14,
			lineHight: 1.2,
			color: '#30a3f5',
		},
		background:{
			backgroundColor: 'rgba(1, 1, 1, .7)',
			borderColor: '#fff',
			borderWidth: '0',
			borderRadius: '0',
		}
}
const getters ={

}
const actions = {

}

const mutations = {
	changeBox3(state,payload){
		console.log('box31',state);
		if (payload.data && payload.data.box3) {
			if (payload.data.box3.show) {
				state.show = payload.data.box3.show
			}
			if (payload.data.box3.height) {
				state.height = payload.data.box3.height
			}
			if (payload.data.box3.width) {
				state.width = payload.data.box3.width
			}
			if (payload.data.box3.left) {
				state.left = payload.data.box3.left
			}
			if (payload.data.box3.top) {
				state.top = payload.data.box3.top
			}
			if (payload.data.box3.text) {
				if (payload.data.box3.text.fontSize) {
					state.text.fontSize = payload.data.box3.text.fontSize
				}
				if (payload.data.box3.text.lineHight) {
					state.text.lineHight = payload.data.box3.text.lineHight
				}
				if (payload.data.box3.text.color) {
					state.text.color = payload.data.box3.text.color
				}
			}
			if (payload.data.box3.background) {
				if (payload.data.box3.background.backgroundColor) {
					state.background.backgroundColor = payload.data.box3.background.backgroundColor
				}
				if (payload.data.box3.background.borderColor) {
					state.background.borderColor = payload.data.box3.background.borderColor
				}
				if (payload.data.box3.background.borderWidth) {
					state.background.borderWidth = payload.data.box3.background.borderWidth
				}
				if (payload.data.box3.background.borderRadius) {
					state.background.borderRadius = payload.data.box3.background.borderRadius
				}
			}
		}
		console.log('box32',state);
	},
}
export default {
	state,
	actions,
	mutations,
	getters
}
