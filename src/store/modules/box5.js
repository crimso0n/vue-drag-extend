 //box5属性
const state = {
		show: false,
		height: 200,
		width: 400,
		top: 280,
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
	changeBox5(state,payload){
		if (payload.data && payload.data.box5) {
			if (payload.data.box5.show) {
				state.show = payload.data.box5.show
			}
			if (payload.data.box5.height) {
				state.height = payload.data.box5.height
			}
			if (payload.data.box5.width) {
				state.width = payload.data.box5.width
			}
			if (payload.data.box5.left) {
				state.left = payload.data.box5.left
			}
			if (payload.data.box5.top) {
				state.top = payload.data.box5.top
			}
			if (payload.data.box5.text) {
				if (payload.data.box5.text.fontSize) {
					state.text.fontSize = payload.data.box5.text.fontSize
				}
				if (payload.data.box5.text.lineHight) {
					state.text.lineHight = payload.data.box5.text.lineHight
				}
				if (payload.data.box5.text.color) {
					state.text.color = payload.data.box5.text.color
				}
			}
			if (payload.data.box5.background) {
				if (payload.data.box5.background.backgroundColor) {
					state.background.backgroundColor = payload.data.box5.background.backgroundColor
				}
				if (payload.data.box5.background.borderColor) {
					state.background.borderColor = payload.data.box5.background.borderColor
				}
				if (payload.data.box5.background.borderWidth) {
					state.background.borderWidth = payload.data.box5.background.borderWidth
				}
				if (payload.data.box5.background.borderRadius) {
					state.background.borderRadius = payload.data.box5.background.borderRadius
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
