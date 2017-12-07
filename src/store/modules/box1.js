 //box1属性
const state = {
		show: false,
		height: 200,
		width: 400,
		top: 60,
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
	changeBox1(state,payload){
			if (payload.data && payload.data.box1) {
				if (payload.data.box1.show) {
					state.show = payload.data.box1.show
				}
				if (payload.data.box1.height) {
					state.height = payload.data.box1.height
				}
				if (payload.data.box1.width) {
					state.width = payload.data.box1.width
				}
				if (payload.data.box1.left) {
					state.left = payload.data.box1.left
				}
				if (payload.data.box1.top) {
					state.top = payload.data.box1.top
				}
				if (payload.data.box1.text) {
					if (payload.data.box1.text.fontSize) {
						state.text.fontSize = payload.data.box1.text.fontSize
					}
					if (payload.data.box1.text.lineHight) {
						state.text.lineHight = payload.data.box1.text.lineHight
					}
					if (payload.data.box1.text.color) {
						state.text.color = payload.data.box1.text.color
					}
				}
				if (payload.data.box1.background) {
					if (payload.data.box1.background.backgroundColor) {
						state.background.backgroundColor = payload.data.box1.background.backgroundColor
					}
					if (payload.data.box1.background.borderColor) {
						state.background.borderColor = payload.data.box1.background.borderColor
					}
					if (payload.data.box1.background.borderWidth) {
						state.background.borderWidth = payload.data.box1.background.borderWidth
					}
					if (payload.data.box1.background.borderRadius) {
						state.background.borderRadius = payload.data.box1.background.borderRadius
					}
				}
			}
			console.log('box1',state);
	},
}
export default {
	state,
	actions,
	mutations,
	getters
}
