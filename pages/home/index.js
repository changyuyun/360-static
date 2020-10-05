Page({
	name: 'Home',

	data() {
		return {
			isLogined: false,
			userInfo: {}
		}
	},
	onShareAppMessage(params) {
		return {
		            title: '分享标题',
		            desc: '分享摘要',
		            imageUrl: 'https://xxx.png',
		            path: '/index/index',
		            success(res) {
		                // 分享成功
		                console.log('分享渠道为' + res.channel);
		                console.log('分享结果为' + res.result);
		            },
		            fail(err) {
		                // 分享失败
		            }
		        };
	},
	methods: {
		navigateToMore() {
			qh.navigateTo({
				url: '/pages/more/index'
			})
		},
		navigateToSlider() {
			qh.navigateTo({
				url: '/pages/slider/index'
			})
		},
		navigateToDemo() {
			qh.navigateTo({
				url: '/pages/demo/index'
			})
		},
		getLocation(e) {
			console.log("get location");
			qh.getLocation({
				success: (res) => console.log(res)
			})
		},
		getUserInfo() {
			qh.getUserInfo({
				success: (res) => console.log(res)
			})
		}
	}
})
