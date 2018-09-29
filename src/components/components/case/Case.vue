<template>
	<div class="case">
		<Banner :title="banner.title" :bannerBg="banner.bg"></Banner>
		<MenuItems @chilCall="init" :Left='Left' :title_list='title_list'></MenuItems>
		<div class="Row">
			<ul>
				<li class="row_list" v-for="(item,key) in listCmputed">
					<img :src="item.thumb" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Banner from '@/components/public/Banner'
	import MenuItems from '@/components/public/MenuItems'
	import md5 from 'js-md5'
	import { Toast, Indicator } from 'mint-ui'
	export default {
		name: 'case',
		data() {
			return {
				banner: {
					title: 'CASES',
					bg: './static/images/streamer/case.png'
				},
				Left: 0,
				list: [],
				listItem: '',
				title_list: [{
						"imgUrl_one": './static/images/streamer/alone.png',
						"imgUrl_two": './static/images/streamer/alone2.png',
						"name": '全部案例',
						"start": true,
						"tid": ''
					},
					{
						"imgUrl_one": './static/images/streamer/hudong.png',
						"imgUrl_two": './static/images/streamer/hudong2.png',
						"name": '互动类',
						"start": false,
						"tid": '900000001'
					},
					{
						"imgUrl_one": './static/images/streamer/zhans.png',
						"imgUrl_two": './static/images/streamer/zhans2.png',
						"name": '展示类',
						"start": false,
						"tid": '900000002'
					},
					{
						"imgUrl_one": './static/images/streamer/youx.png',
						"imgUrl_two": './static/images/streamer/youx2.png',
						"name": '游戏类',
						"start": false,
						"tid": '900000003'
					}
				],
			}
		},
		components: {
			Banner,
			MenuItems
		},
		created() {
			this.loadData();

		},
		computed: {
			listCmputed() {
				if(this.listItem == '') {
					return this.list
				} else {
					return this.list.filter(item => {
						return item.tid == this.listItem
					})
				}
			}
		},
		methods: {

			init(index, keye) {
				this.Left = index * 1.66;
				for(let i in this.title_list) {
					this.title_list[i].start = false;
					this.title_list[index].start = true
				}
				this.listItem = keye;
			},

			loadData() {
				/* 添加加载动画 */
				Indicator.open({
					spinnerType: 'fading-circle'
				})
				let data = {
					sign: md5('/mobile/ajaxGetCaseList')
				}
				this.$api.get('/mobile/ajaxGetCaseList', data, res => {
					this.loading = true
					this.list = res.data
					Indicator.close()
				})

			},

		}

	}
</script>
