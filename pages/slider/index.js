Page({
	data() {
		return {
			list: [1, 2, 3],
			activeName: 'tab_1'
		}
	},
	methods: {
		slideChange(current) {
			console.log(`slideChange触发,当前index为${current}`)
		},

		animationfinish(current) {
			console.log(`animationfinish触发,当前index为${current}`)
		}
	}
})
