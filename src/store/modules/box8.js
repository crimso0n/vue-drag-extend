 //box8属性
const state = {
		show: false,
		height: 70,
		width: 600,
		top: 690,
		left: 360,
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
	changeBox8(state,payload){
		if (payload.data && payload.data.box8) {
			if (payload.data.box8.show) {
				state.show = payload.data.box8.show
			}
			if (payload.data.box8.height) {
				state.height = payload.data.box8.height
			}
			if (payload.data.box8.width) {
				state.width = payload.data.box8.width
			}
			if (payload.data.box8.left) {
				state.left = payload.data.box8.left
			}
			if (payload.data.box8.top) {
				state.top = payload.data.box8.top
			}
			if (payload.data.box8.text) {
				if (payload.data.box8.text.fontSize) {
					state.text.fontSize = payload.data.box8.text.fontSize
				}
				if (payload.data.box8.text.lineHight) {
					state.text.lineHight = payload.data.box8.text.lineHight
				}
				if (payload.data.box8.text.color) {
					state.text.color = payload.data.box8.text.color
				}
			}
			if (payload.data.box8.background) {
				if (payload.data.box8.background.backgroundColor) {
					state.background.backgroundColor = payload.data.box8.background.backgroundColor
				}
				if (payload.data.box8.background.borderColor) {
					state.background.borderColor = payload.data.box8.background.borderColor
				}
				if (payload.data.box8.background.borderWidth) {
					state.background.borderWidth = payload.data.box8.background.borderWidth
				}
				if (payload.data.box8.background.borderRadius) {
					state.background.borderRadius = payload.data.box8.background.borderRadius
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
