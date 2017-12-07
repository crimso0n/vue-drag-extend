 //box6属性
const state = {
		show: false,
		height: 200,
		width: 400,
		top: 500,
		left: 966,
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
	changeBox6(state,payload){
		if (payload.data && payload.data.box6) {
			if (payload.data.box6.show) {
				state.show = payload.data.box6.show
			}
			if (payload.data.box6.height) {
				state.height = payload.data.box6.height
			}
			if (payload.data.box6.width) {
				state.width = payload.data.box6.width
			}
			if (payload.data.box6.left) {
				state.left = payload.data.box6.left
			}
			if (payload.data.box6.top) {
				state.top = payload.data.box6.top
			}
			if (payload.data.box6.text) {
				if (payload.data.box6.text.fontSize) {
					state.text.fontSize = payload.data.box6.text.fontSize
				}
				if (payload.data.box6.text.lineHight) {
					state.text.lineHight = payload.data.box6.text.lineHight
				}
				if (payload.data.box6.text.color) {
					state.text.color = payload.data.box6.text.color
				}
			}
			if (payload.data.box6.background) {
				if (payload.data.box6.background.backgroundColor) {
					state.background.backgroundColor = payload.data.box6.background.backgroundColor
				}
				if (payload.data.box6.background.borderColor) {
					state.background.borderColor = payload.data.box6.background.borderColor
				}
				if (payload.data.box6.background.borderWidth) {
					state.background.borderWidth = payload.data.box6.background.borderWidth
				}
				if (payload.data.box6.background.borderRadius) {
					state.background.borderRadius = payload.data.box6.background.borderRadius
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
