 //box4属性
const state = {
		show: false,
		height: 200,
		width: 400,
		top: 60,
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
	changeBox4(state,payload){
		if (payload.data && payload.data.box4) {
			if (payload.data.box4.show) {
				state.show = payload.data.box4.show
			}
			if (payload.data.box4.height) {
				state.height = payload.data.box4.height
			}
			if (payload.data.box4.width) {
				state.width = payload.data.box4.width
			}
			if (payload.data.box4.left) {
				state.left = payload.data.box4.left
			}
			if (payload.data.box4.top) {
				state.top = payload.data.box4.top
			}
			if (payload.data.box4.text) {
				if (payload.data.box4.text.fontSize) {
					state.text.fontSize = payload.data.box4.text.fontSize
				}
				if (payload.data.box4.text.lineHight) {
					state.text.lineHight = payload.data.box4.text.lineHight
				}
				if (payload.data.box4.text.color) {
					state.text.color = payload.data.box4.text.color
				}
			}
			if (payload.data.box4.background) {
				if (payload.data.box4.background.backgroundColor) {
					state.background.backgroundColor = payload.data.box4.background.backgroundColor
				}
				if (payload.data.box4.background.borderColor) {
					state.background.borderColor = payload.data.box4.background.borderColor
				}
				if (payload.data.box4.background.borderWidth) {
					state.background.borderWidth = payload.data.box4.background.borderWidth
				}
				if (payload.data.box4.background.borderRadius) {
					state.background.borderRadius = payload.data.box4.background.borderRadius
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
