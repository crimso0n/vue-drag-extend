 //box7属性
const state = {
		show: false,
		height: 70,
		width: 400,
		top: 0,
		left: 0,
		text: {
			fontSize: 14,
			lineHight: 1.2,
			color: '#fff',
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
	changeBox7(state,payload){
		if (payload.data && payload.data.box7) {
			if (payload.data.box7.show) {
				state.show = payload.data.box7.show
			}
			if (payload.data.box7.height) {
				state.height = payload.data.box7.height
			}
			if (payload.data.box7.width) {
				state.width = payload.data.box7.width
			}
			if (payload.data.box7.left) {
				state.left = payload.data.box7.left
			}
			if (payload.data.box7.top) {
				state.top = payload.data.box7.top
			}
			if (payload.data.box7.text) {
				if (payload.data.box7.text.fontSize) {
					state.text.fontSize = payload.data.box7.text.fontSize
				}
				if (payload.data.box7.text.lineHight) {
					state.text.lineHight = payload.data.box7.text.lineHight
				}
				if (payload.data.box7.text.color) {
					state.text.color = payload.data.box7.text.color
				}
			}
			if (payload.data.box7.background) {
				if (payload.data.box7.background.backgroundColor) {
					state.background.backgroundColor = payload.data.box7.background.backgroundColor
				}
				if (payload.data.box7.background.borderColor) {
					state.background.borderColor = payload.data.box7.background.borderColor
				}
				if (payload.data.box7.background.borderWidth) {
					state.background.borderWidth = payload.data.box7.background.borderWidth
				}
				if (payload.data.box7.background.borderRadius) {
					state.background.borderRadius = payload.data.box7.background.borderRadius
				}
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
