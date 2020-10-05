Page({
	name: 'Demo',

	data() {
		return {
			tabs: [
				{purpose:"全部"},
				{purpose:"汽车"},
				{purpose:"美容"},
				{purpose:"婚纱"},
				{purpose:"八卦"},
				{purpose:"星座"},
			],
			tabs_current:0,
			swiper_list_2: [{
					"url": "https://qnm.hunliji.com/14F3F36F7FDB66F68B49799F36C40514.jpg?imageMogr2/thumbnail/480x",
					"title": "婚纱"
				},
				{
					"url": "http://qnm.hunliji.com/o_19dcgj5h613tu7uc1nt1r2r1bkv25.jpg?imageView2/2/w/760/h/580",
					"title": "婚纱"
				},
				{
					"url": "https://res.gwm.com.cn/2020/08/31/1769273_112_%E7%AC%AC%E4%B8%89%E4%BB%A3%E4%BB%B7%E6%A0%BC%E7%89%88%E5%93%88%E5%BC%97%E9%A6%96%E9%A1%B5KV-pc.jpg",
					"title": "汽车"
				}
			],
			activeName: 'tab_1',
			api_content_list:[/* 模拟api数据 */
			[
				{
				"id": "1",
				"url": "http://qnm.hunliji.com/o_1b4v3hnjr13r010lfjvi46n6fh31.jpg?imageView2/2/w/760/h/580",
				"list_title": "购买淋浴房太麻烦，又要上门测量，等图纸，有没有更加便捷的...",
				"list_sub_content": "全名宅家期间，卫浴间高频使用，但问题也日益暴露：淋浴区太拥挤，地面湿漉漉，洗手台总是凌乱......还能愉快地淋浴吗？装修时因装淋浴房费时费力，没装..."
			},
			{
				"id": "2",
				"url": "https://qnm.hunliji.com/o_1dee02qln16cl9s41sll1nq516457.png?imageView2/2/w/640",
				"list_title": "青岛水下婚纱照拍摄技巧和注意事项",
				"list_sub_content": "提起水下婚纱照，拥有无垠海边、碧海蓝天的青岛是绝佳的拍摄城市。新人们在夏日拍摄一组清凉水下婚纱照，仙气飘逸又风格独特。但这样高质量的水下婚纱照需要不少小技巧以及许多注意事项要了解，和小编一起看看吧！"
			},
			{
				"id": "3",
				"url": "http://qnm.hunliji.com/o_1dcm1b5bat13fvvo2f1gn0bii7.png?imageView2/2/w/640",
				"list_title": "云南丽江旅拍婚纱照要准备什么 旅拍婚纱照大概需要多少钱",
				"list_sub_content": "云南是一个旅拍圣地，丽江、大理旅拍​等都是热门旅拍城市，在这里你能感受到一草一木的灵动，远离喧嚣，拍出最美的婚纱照。那么云南丽江旅拍婚纱照要准备什么呢，旅拍婚纱照大概需要多少钱？"
			},
			{
				"id": "4",
				"url": "http://qnm.hunliji.com/o_1cnjebvvn4df1uugra91ass13167.jpg?imageView2/2/w/640",
				"list_title": "天津有哪些不错的婚纱工作室",
				"list_sub_content": "天津是一座保守和开放相融合的城市，一直以来都是小编非常向往的一座城市，在这里拍婚纱照会有一种独特的韵味。那么天津有哪些不错的婚纱工作室呢？哪些婚纱工作室被新人们所称赞。"
			}
			],
			[
				{
				"id": "5",
				"url": "http://qnm.hunliji.com/o_1b4v3hnjr13r010lfjvi46n6fh31.jpg?imageView2/2/w/760/h/580",
				"list_title": "购买淋浴房太麻烦，又要上门测量，等图纸，有没有更加便捷的...",
				"list_sub_content": "全名宅家期间，卫浴间高频使用，但问题也日益暴露：淋浴区太拥挤，地面湿漉漉，洗手台总是凌乱......还能愉快地淋浴吗？装修时因装淋浴房费时费力，没装..."
			},
			{
				"id": "6",
				"url": "https://qnm.hunliji.com/o_1dee02qln16cl9s41sll1nq516457.png?imageView2/2/w/640",
				"list_title": "青岛水下婚纱照拍摄技巧和注意事项",
				"list_sub_content": "提起水下婚纱照，拥有无垠海边、碧海蓝天的青岛是绝佳的拍摄城市。新人们在夏日拍摄一组清凉水下婚纱照，仙气飘逸又风格独特。但这样高质量的水下婚纱照需要不少小技巧以及许多注意事项要了解，和小编一起看看吧！"
			},
			{
				"id": "7",
				"url": "http://qnm.hunliji.com/o_1dcm1b5bat13fvvo2f1gn0bii7.png?imageView2/2/w/640",
				"list_title": "云南丽江旅拍婚纱照要准备什么 旅拍婚纱照大概需要多少钱",
				"list_sub_content": "云南是一个旅拍圣地，丽江、大理旅拍​等都是热门旅拍城市，在这里你能感受到一草一木的灵动，远离喧嚣，拍出最美的婚纱照。那么云南丽江旅拍婚纱照要准备什么呢，旅拍婚纱照大概需要多少钱？"
			},
			{
				"id": "8",
				"url": "http://qnm.hunliji.com/o_1cnjebvvn4df1uugra91ass13167.jpg?imageView2/2/w/640",
				"list_title": "天津有哪些不错的婚纱工作室",
				"list_sub_content": "天津是一座保守和开放相融合的城市，一直以来都是小编非常向往的一座城市，在这里拍婚纱照会有一种独特的韵味。那么天津有哪些不错的婚纱工作室呢？哪些婚纱工作室被新人们所称赞。"
			}
			],
			 [
				{
				"id": "9",
				"url": "http://qnm.hunliji.com/o_1b4v3hnjr13r010lfjvi46n6fh31.jpg?imageView2/2/w/760/h/580",
				"list_title": "购买淋浴房太麻烦，又要上门测量，等图纸，有没有更加便捷的...",
				"list_sub_content": "全名宅家期间，卫浴间高频使用，但问题也日益暴露：淋浴区太拥挤，地面湿漉漉，洗手台总是凌乱......还能愉快地淋浴吗？装修时因装淋浴房费时费力，没装..."
			},
			{
				"id": "10",
				"url": "https://qnm.hunliji.com/o_1dee02qln16cl9s41sll1nq516457.png?imageView2/2/w/640",
				"list_title": "青岛水下婚纱照拍摄技巧和注意事项",
				"list_sub_content": "提起水下婚纱照，拥有无垠海边、碧海蓝天的青岛是绝佳的拍摄城市。新人们在夏日拍摄一组清凉水下婚纱照，仙气飘逸又风格独特。但这样高质量的水下婚纱照需要不少小技巧以及许多注意事项要了解，和小编一起看看吧！"
			},
			{
				"id": "11",
				"url": "http://qnm.hunliji.com/o_1dcm1b5bat13fvvo2f1gn0bii7.png?imageView2/2/w/640",
				"list_title": "云南丽江旅拍婚纱照要准备什么 旅拍婚纱照大概需要多少钱",
				"list_sub_content": "云南是一个旅拍圣地，丽江、大理旅拍​等都是热门旅拍城市，在这里你能感受到一草一木的灵动，远离喧嚣，拍出最美的婚纱照。那么云南丽江旅拍婚纱照要准备什么呢，旅拍婚纱照大概需要多少钱？"
			},
			{
				"id": "12",
				"url": "http://qnm.hunliji.com/o_1cnjebvvn4df1uugra91ass13167.jpg?imageView2/2/w/640",
				"list_title": "天津有哪些不错的婚纱工作室",
				"list_sub_content": "天津是一座保守和开放相融合的城市，一直以来都是小编非常向往的一座城市，在这里拍婚纱照会有一种独特的韵味。那么天津有哪些不错的婚纱工作室呢？哪些婚纱工作室被新人们所称赞。"
			}
			],
			 [
				{
				"id": "13",
				"url": "http://qnm.hunliji.com/o_1b4v3hnjr13r010lfjvi46n6fh31.jpg?imageView2/2/w/760/h/580",
				"list_title": "购买淋浴房太麻烦，又要上门测量，等图纸，有没有更加便捷的...",
				"list_sub_content": "全名宅家期间，卫浴间高频使用，但问题也日益暴露：淋浴区太拥挤，地面湿漉漉，洗手台总是凌乱......还能愉快地淋浴吗？装修时因装淋浴房费时费力，没装..."
			},
			{
				"id": "14",
				"url": "https://qnm.hunliji.com/o_1dee02qln16cl9s41sll1nq516457.png?imageView2/2/w/640",
				"list_title": "青岛水下婚纱照拍摄技巧和注意事项",
				"list_sub_content": "提起水下婚纱照，拥有无垠海边、碧海蓝天的青岛是绝佳的拍摄城市。新人们在夏日拍摄一组清凉水下婚纱照，仙气飘逸又风格独特。但这样高质量的水下婚纱照需要不少小技巧以及许多注意事项要了解，和小编一起看看吧！"
			},
			{
				"id": "15",
				"url": "http://qnm.hunliji.com/o_1dcm1b5bat13fvvo2f1gn0bii7.png?imageView2/2/w/640",
				"list_title": "云南丽江旅拍婚纱照要准备什么 旅拍婚纱照大概需要多少钱",
				"list_sub_content": "云南是一个旅拍圣地，丽江、大理旅拍​等都是热门旅拍城市，在这里你能感受到一草一木的灵动，远离喧嚣，拍出最美的婚纱照。那么云南丽江旅拍婚纱照要准备什么呢，旅拍婚纱照大概需要多少钱？"
			},
			{
				"id": "16",
				"url": "http://qnm.hunliji.com/o_1cnjebvvn4df1uugra91ass13167.jpg?imageView2/2/w/640",
				"list_title": "天津有哪些不错的婚纱工作室",
				"list_sub_content": "天津是一座保守和开放相融合的城市，一直以来都是小编非常向往的一座城市，在这里拍婚纱照会有一种独特的韵味。那么天津有哪些不错的婚纱工作室呢？哪些婚纱工作室被新人们所称赞。"
			}
			],
			[
				{
				"id": "17",
				"url": "http://qnm.hunliji.com/o_1b4v3hnjr13r010lfjvi46n6fh31.jpg?imageView2/2/w/760/h/580",
				"list_title": "购买淋浴房太麻烦，又要上门测量，等图纸，有没有更加便捷的...",
				"list_sub_content": "全名宅家期间，卫浴间高频使用，但问题也日益暴露：淋浴区太拥挤，地面湿漉漉，洗手台总是凌乱......还能愉快地淋浴吗？装修时因装淋浴房费时费力，没装..."
			},
			{
				"id": "18",
				"url": "https://qnm.hunliji.com/o_1dee02qln16cl9s41sll1nq516457.png?imageView2/2/w/640",
				"list_title": "青岛水下婚纱照拍摄技巧和注意事项",
				"list_sub_content": "提起水下婚纱照，拥有无垠海边、碧海蓝天的青岛是绝佳的拍摄城市。新人们在夏日拍摄一组清凉水下婚纱照，仙气飘逸又风格独特。但这样高质量的水下婚纱照需要不少小技巧以及许多注意事项要了解，和小编一起看看吧！"
			},
			{
				"id": "19",
				"url": "http://qnm.hunliji.com/o_1dcm1b5bat13fvvo2f1gn0bii7.png?imageView2/2/w/640",
				"list_title": "云南丽江旅拍婚纱照要准备什么 旅拍婚纱照大概需要多少钱",
				"list_sub_content": "云南是一个旅拍圣地，丽江、大理旅拍​等都是热门旅拍城市，在这里你能感受到一草一木的灵动，远离喧嚣，拍出最美的婚纱照。那么云南丽江旅拍婚纱照要准备什么呢，旅拍婚纱照大概需要多少钱？"
			},
			{
				"id": "20",
				"url": "http://qnm.hunliji.com/o_1cnjebvvn4df1uugra91ass13167.jpg?imageView2/2/w/640",
				"list_title": "天津有哪些不错的婚纱工作室",
				"list_sub_content": "天津是一座保守和开放相融合的城市，一直以来都是小编非常向往的一座城市，在这里拍婚纱照会有一种独特的韵味。那么天津有哪些不错的婚纱工作室呢？哪些婚纱工作室被新人们所称赞。"
			}
			],
			[
				{
				"id": "21",
				"url": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=33792743,3073092740&fm=26&gp=0.jpg",
				"list_title": "什么星座最牛逼",
				"list_sub_content": "每个人都有一个星座，会陪伴我们一生 潜移默化的影响着我们"
			}
			]
			],
			content_list: [{
				"id": "21",
				"url": "http://qnm.hunliji.com/o_1b4v3hnjr13r010lfjvi46n6fh31.jpg?imageView2/2/w/760/h/580",
				"list_title": "购买淋浴房太麻烦，又要上门测量，等图纸，有没有更加便捷的...",
				"list_sub_content": "全名宅家期间，卫浴间高频使用，但问题也日益暴露：淋浴区太拥挤，地面湿漉漉，洗手台总是凌乱......还能愉快地淋浴吗？装修时因装淋浴房费时费力，没装..."
			},
			{
				"id": "22",
				"url": "https://qnm.hunliji.com/o_1dee02qln16cl9s41sll1nq516457.png?imageView2/2/w/640",
				"list_title": "青岛水下婚纱照拍摄技巧和注意事项",
				"list_sub_content": "提起水下婚纱照，拥有无垠海边、碧海蓝天的青岛是绝佳的拍摄城市。新人们在夏日拍摄一组清凉水下婚纱照，仙气飘逸又风格独特。但这样高质量的水下婚纱照需要不少小技巧以及许多注意事项要了解，和小编一起看看吧！"
			},
			{
				"id": "23",
				"url": "http://qnm.hunliji.com/o_1dcm1b5bat13fvvo2f1gn0bii7.png?imageView2/2/w/640",
				"list_title": "云南丽江旅拍婚纱照要准备什么 旅拍婚纱照大概需要多少钱",
				"list_sub_content": "云南是一个旅拍圣地，丽江、大理旅拍​等都是热门旅拍城市，在这里你能感受到一草一木的灵动，远离喧嚣，拍出最美的婚纱照。那么云南丽江旅拍婚纱照要准备什么呢，旅拍婚纱照大概需要多少钱？"
			},
			{
				"id": "24",
				"url": "http://qnm.hunliji.com/o_1cnjebvvn4df1uugra91ass13167.jpg?imageView2/2/w/640",
				"list_title": "天津有哪些不错的婚纱工作室",
				"list_sub_content": "天津是一座保守和开放相融合的城市，一直以来都是小编非常向往的一座城市，在这里拍婚纱照会有一种独特的韵味。那么天津有哪些不错的婚纱工作室呢？哪些婚纱工作室被新人们所称赞。"
			}],/* 列表数据 */
			
		}
	},
	methods: {
		/* 方法 */
		/* 详情页 */
		navigateToInfo(event) {
			console.log(event);
			qh.navigateTo({
				url: '/pages/info/index' + '?id=' + event
			})
		},
		addClass(index){
			console.log(this.api_content_list);
			this.tabs_current = index;
			this.content_list = this.api_content_list[index];
		}
	}
})
