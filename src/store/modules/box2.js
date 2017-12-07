 //box2属性
const state = {
		show: false,
		height: 200,
		width: 400,
		top: 280,
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
	changeBox2(state,payload){
		if (payload.data && payload.data.box2) {
			if (payload.data.box2.show) {
				state.show = payload.data.box2.show
			}
			if (payload.data.box2.height) {
				state.height = payload.data.box2.height
			}
			if (payload.data.box2.width) {
				state.width = payload.data.box2.width
			}
			if (payload.data.box2.left) {
				state.left = payload.data.box2.left
			}
			if (payload.data.box2.top) {
				state.top = payload.data.box2.top
			}
			if (payload.data.box2.text) {
				if (payload.data.box2.text.fontSize) {
					state.text.fontSize = payload.data.box2.text.fontSize
				}
				if (payload.data.box2.text.lineHight) {
					state.text.lineHight = payload.data.box2.text.lineHight
				}
				if (payload.data.box2.text.color) {
					state.text.color = payload.data.box2.text.color
				}
			}
			if (payload.data.box2.background) {
				if (payload.data.box2.background.backgroundColor) {
					state.background.backgroundColor = payload.data.box2.background.backgroundColor
				}
				if (payload.data.box2.background.borderColor) {
					state.background.borderColor = payload.data.box2.background.borderColor
				}
				if (payload.data.box2.background.borderWidth) {
					state.background.borderWidth = payload.data.box2.background.borderWidth
				}
				if (payload.data.box2.background.borderRadius) {
					state.background.borderRadius = payload.data.box2.background.borderRadius
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
