<template>
	<div class="help">
		<Banner :title="banner.title" :bannerBg="banner.bg"></Banner>
		<MenuItems @chilCall="init" :Left='Left' :title_list='title_list'></MenuItems>
		<section class="help_row">
			<section class="help_list" v-show="fade == '0'">
				<ul>
					<li v-for="(i,k) in help_list" :class="{action:i.start}" @click="removeList(k)">
						<div class="help_contion">
							<div class="help-number" :class="{action:i.start}">{{i.number}}</div>
							<div class="help-title">
								<div class="help-title-top">{{i.title}}</div>
								<div class="help-title-bottom">{{i.content}}</div>
								<i class="icon-ca" :class="{action:i.start}"></i>
							</div>

						</div>

					</li>
				</ul>
			</section>
			<section class="help_list" v-show="fade == 1">
				<ul>
					<li class="business" v-for="(i,k) in business">
						<span class="business-icon" :style="{'background-image':'url('+ i.imageUrl +')'}"></span>
						<span class="business-text">{{i.name}}</span>
					</li>
				</ul>
			</section>
			<section class="help_list" v-show="fade == 2">
				<ul v-if="Station">
					<li class="coupleBack" v-for="(i,k) in coupleBack.page" @click="present(k)">
						{{i.name}}
						<i class="i-right" :style="{'background-image':'url('+ coupleBack.imager +')'}"></i>
					</li>
				</ul>
				<div class="message" v-else>
					<div class="me" v-show="age">
						<div class="message-row">
							<textarea class="message-text" maxlength="200" placeholder="欢迎提交任何关于共享AR的问题与建议，我们将尽快回复您。感谢您对共享AR的帮助。" v-model="message.count"></textarea>
							<div class="message-add"><span id="text-count">{{message.count.length}}</span>/200</div>       
	         			 </div>
	         			 <input type="number" class="number_test" placeholder="请留下手机号或者QQ，以便我们联系您。" v-model="message.number" />
	         			 <button class="btn" type="button" @click="refer">立即发送</button>
         			</div>
         			 <div class="succ" v-show="!age">
         			 	<i class="i-succ"></i>
         			 	<span class="succ-text">发送成功</span>
         			 	<button class="btn" type="button" @click="goOut">返回</button>
         			 </div>
				</div>
				
			</section>
		</section>
	</div>
</template>

<script>
	import Banner from '@/components/public/Banner'
	import MenuItems from '@/components/public/MenuItems'
	import md5 from 'js-md5'
	import { Toast, Indicator  } from 'mint-ui'

	import axios from 'axios'
	export default {
		name: 'help',
		data() {
			return {
				banner: {
					title: 'HELP',
					bg: './static/images/help/help_1.png'
				},
				age:true,
				fade: '0',
				Station: true,
				Left: '',
				message:{
					"count":'',
					"number":'',
					"type":''
				},
				title_list: [{
						"imgUrl_one": './static/images/help/1.png',
						"imgUrl_two": './static/images/help/1-1.png',
						"name": '常见问题',
						"start": true,

					},
					{
						"imgUrl_one": './static/images/help/2.png',
						"imgUrl_two": './static/images/help/2-1.png',
						"name": '商务合作',
						"start": false,

					},
					{
						"imgUrl_one": './static/images/help/3.png',
						"imgUrl_two": './static/images/help/3-1.png',
						"name": '意见反馈',
						"start": false,

					}
				],
				help_list: [{
						"number": '01',
						"title": '什么是AR?',
						"content": '通过在真实的空间里，透过屏幕看到虚拟的景象，并通过与它互动，即为AR技术。',
						"start": true
					},
					{
						"number": '02',
						"title": '什么是AR营销?',
						"content": '凭借强大的AR技术，把它置入于品牌传播、产品宣传、线下活动等场景营销中，即为AR营销。',
						"start": false
					},
					{
						"number": '03',
						"title": '什么是共享AR?',
						"content": '共享AR是基于强大的AR营销新模式，在真实的空间里，透过屏幕看到叠加于的虚拟景象的虚实结合。透过屏幕中，看到所呈现的全新视野，运用AR技术，让产品营销变得更生动，让生活更富有趣。',
						"start": false
					},
					{
						"number": '04',
						"title": '共享AR是用来做什么的?',
						"content": '利用最新、前沿AR技术，凭借高精度的动画输出及专业化的技术开发。旨在为国内各大品牌方、商圈购物及线下活动等场景中，输出最新创意策划及AR内容生产，发现营销新模式。',
						"start": false
					},
					{
						"number": '05',
						"title": '共享AR能为客户带来什么?',
						"content": '通过共享AR平台，结合支付宝平台新型AR营销体系，利用大平台数据分析，提升品牌知名度同时，实现线上线下一体化营销新生态。',
						"start": false
					},
					{
						"number": '06',
						"title": '关于蚂蚁特工AR?',
						"content": '蚂蚁特工AR，全称厦门蚂蚁特工网络科技有限公司。作为全国首个共享AR平台---共享AR研发中心，面向全国知名品牌，提供平台级的AR营销解决全案。目前，据支付宝AR年度优质案例官方公布数据统计，蚂蚁特工占有率高达60%，已开发的AR应用峰值亦突破了日1400w参与人次。',
						"start": false
					},
					{
						"number": '07',
						"title": '蚂蚁特工已达到哪些成果?',
						"content": '蚂蚁特工AR基于SLAM、LBS、陀螺仪、图像追踪、人脸识别等前沿技术，致力于为品牌传播、产品宣传、线下活动等场景提供了优质的AR数据营销服务。目前，已为全国支付宝实名活跃用户提供亿次以上AR互动。并通过自主创新营销权益落地与平台结合的多种创新模式，得到众多客户的一致认可。',
						"start": false
					},
					{
						"number": '08',
						"title": '蚂蚁特工AR已为哪些客户打造营销解决方案?',
						"content": '目前，蚂蚁特工凭借稳扎稳打的技术实力及强平台创新的运营能力，持续服务于可口可乐、雪碧、美汁源、奥利奥、星巴克、雀巢、迪士尼、宝洁、施华蔻、威露士、立白、味全、统一、优酷、滴滴、脉动、香飘飘、天喔、龙湖、万达、印象城等。',
						"start": false
					},
				],
				business: [{
						"imageUrl": './static/images/help/e.png',
						"name": 'xmmytg@126.com'
					},
					{
						"imageUrl": './static/images/help/p.png',
						"name": '400-8868163'
					},
					{
						"imageUrl": './static/images/help/d.png',
						"name": '福建省厦门市软件园二期望海路57号之二4F'
					},
				],
				coupleBack: {
					"imager": './static/images/help/right.png',
					"page": [{
							"name": '平台使用反馈'
						},
						{
							"name": '产品使用反馈'
						},
						{
							"name": '交互创意反馈'
						},
						{
							"name": '其他问题反馈'
						}
					]
				}
			}
		},
		components: {
			Banner,
			MenuItems
		},
		methods: {
			init(index, keye) {
				this.Left = index * 1.66;
				for(let i in this.title_list) {
					this.title_list[i].start = false;
					this.title_list[index].start = true
				}
				this.fade = index;
			},
			toast () {
		      Toast('提示信息')
		    },
			removeList(item) {
				for(let i in this.help_list) {
					this.help_list[i].start = false;
					this.help_list[item].start = true;
				}
			},
			present(item){
					this.Station=!this.Station;
					this.message.type=item
			},
			refer(){
				let phone=/^1[3|4|5|7|8][0-9]{9}$/;
				let qqReg=/^[1-9]\d{4,10}$/;
				
				let count=this.message.count,
					numBer=this.message.number,
					type=this.message.type;
				if(count == ''){
					Toast('问题或建议不能为空')
				}else if(phone.test(numBer) || qqReg.test(numBer)){
				
						/* 添加加载动画 */
						Indicator.open({
							spinnerType: 'fading-circle'
						})
				this.$api.post('/mobile/addOpinion', {'content':count,'type':type,'contact':numBer}, res => {
					this.loading = true
					this.age=!this.age
					Indicator.close()
				})

				}else{
					Toast('请输入正确格式')
				}
		
			
			},
			goOut(){
				this.Station=!this.Station;
				this.age=!this.age;
			}
		}

	}
</script>