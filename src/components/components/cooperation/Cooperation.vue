<template lang="html">
	<div class="cooperation">
		<Banner :title="banner.title" :bannerBg="banner.bg"></Banner>
		<nav class="cooper_list">
			<div class="caption left-0">
				<span class="caption-span">
					<p>为什么选择</p>
					<p>共享AR？</p>
				</span>
			</div>
			<ul>
				<li v-for="(i,k) in item">
					<img class="imgUr" :src="i.bg" />
					<h2>{{i.name}}</h2>
				</li>
			</ul>
			<span class="right_pei" :style="{'background-image':'url('+ imager +')'}"></span>
		</nav>
		<nav class="cooper_list" style="padding-bottom: .33rem;">
			<div class="caption left-0">
				<span class="caption-span">
					<p>共享AR</p>
					<p>提供支持</p>
				</span>
			</div>
			<ul>
				<li v-for="(i,k) in item2">
					<img class="imgUr" :src="i.bg" />
					<h2>{{i.name}}</h2>
				</li>
			</ul>
		</nav>
		<section class="partner">
			<span class="imar" :style="{'background-image':'url('+ imager2 +')'}"></span>
			<div class="caption right-37 transform-0">
				<span class="caption-span">
					<p>合作伙伴</p>
					<p>基本资质</p>
				</span>
			</div>
		<div class="module-slide">
		<Swiper :setting="data.tpartner.slide">
          <div class="slide-item" v-for="(vo, i) in data.tpartner.list" :key="i" :slot="['slide_' + i]">
            <div class="slide-title">{{ vo.title }}</div>
            <div class="slide-intro">{{ vo.intro }}</div>
          </div>
        </Swiper>
       </div>
	</section>
	<section class="partner" style="margin-top: 1.06rem; background: white;">
		<div class="caption " style="left: 10vw; transform: translateY(-50%);">
				<span class="caption-span">
					<p>商务</p>
					<p>合作流程</p>
				</span>
		</div>
		<div class="tel">
			<dl>
				<dd v-for="(vo, i) in coPan.num" :key="i" :class="typeCls(vo)">
					<template v-for="(v, index) in vo">
						<div :key="index" class="co-num" v-if="isType(v, 'number')">
							{{ v }}
						</div>
						<div :key="index" class="co-line" v-if="isType(v, 'object')">
							<span v-for="(v1, i1) in v.cir" :key="v1" class="co-cir"></span>
							<span :class="['icon-dir', 'icon-' + v.dir]"></span>
							<span v-for="(v2, i2) in v.cir2" :key="v2" class="co-cir"></span>
						</div>
						<div :key="index" class="co-cir-group" v-if="isType(v, 'array')">
							<span v-for="(v1, i1) in v" :key="v1" class="co-cir"></span>
						</div>
					</template>
				</dd>
			</dl>
			<ul>
				<li v-for="(vo, i) in coPan.list" :key="i">
					<div class="process-icon">
						<img :src="vo.icon" />
					</div>
					<p>{{ vo.title }}</p>
				</li>
			</ul>
			<div class="clearfix"></div>
			<!-- <img :src="tel" /> -->
			<a class="tel_a" href="tel:400-8868-163">{{ coPan.tel }}</a>
		</div>
	</section>
	</div>
</template>
<script>
	import { Banner, Swiper } from '@/components/public'
	import { toType } from '@/lib/util'
	export default {
		name: 'cooperation',
		data() {
			return {
				data: {
					  "tpartner": {
						    "title": "0",
						    "slide": {
						      "height": 5.53,
						      "sHeight":5.13,
						      "swiperArray": ["slide_0", "slide_1", "slide_2"],
						      "itemStyle": "",
						      "upSwiper": false,
						      "isPage": true,
						      "isPageBtn": false
						    },
						    "list": [
						      {
						        "title": "合作对象",
						        "intro": "公司资质：具备合法营业执照及独立法人代表并在营销行业具备长远发展愿景的企业。资源匹配：拥有地方丰富的企业级资源/线下门店资源，需提供企业规模、客户行业、服务区域及范围等相关资料进行审核。行业优先：品牌门店物料提供商、AR硬件提供商、广告策划领域、企业管理咨询领域等企业优先招募。"
						      },
						      {
						        "title": "合作形式",
						        "intro": "区域联合运营分润，详询共享AR市场部。"
						      },
						      {
						        "title": "合作区域",
						        "intro": "面向全国招商合作，区域限量，先到先得。"
						      }
						    ]
						  }
				},
				tel:'/static/images/cooperation/tel.png',
				banner: {
					title: 'cooperation',
					bg: '/static/images/cooperation/cooperation.png'
				},
				item:[
					{
						bg:'/static/images/cooperation/1.png',
						name:'服务品质'
					},{
						bg:'/static/images/cooperation/2.png',
						name:'技术支持'
					},
					{
						bg:'/static/images/cooperation/3.png',
						name:'全国覆盖'
					},
					{
						bg:'/static/images/cooperation/4.png',
						name:'商业价值'
					},
					{
						bg:'/static/images/cooperation/5.png',
						name:'平台授权'
					}
				],
				imager:'/static/images/cooperation/right_pei.png',
				imager2:'/static/images/cooperation/partner.png',
				item2:[
					{
						bg:'/static/images/cooperation/t1.png',
						name:'市场指导'
					},
					{
						bg:'/static/images/cooperation/t2.png',
						name:'团队支撑'
					},
					{
						bg:'/static/images/cooperation/t3.png',
						name:'资源驻地'
					},
					{
						bg:'/static/images/cooperation/t4.png',
						name:'共享信息'
					},
					{
						bg:'/static/images/cooperation/t5.png',
						name:'项目特权'
					},
					{
						bg:'/static/images/cooperation/t6.png',
						name:'激励机制'
					},
				],
				coPan: {
					num: [
						[1,4],
						[
							{
								cir: [1,2,3,4],
								dir: 'right',
								cir2: [5,6,7,8]
							},
							{
								cir: [9,10,11,12],
								dir: 'left',
								cir2: [13,14,15,16]
							}
						],
						[2,3],
						[
							[17,18,19,33],
							[20,21,22,34]
						],
						[
							{
								cir: [23,24,25,26,27],
								dir: 'bottom',
								cir2: [28,29,30,31,32]
							}
						]
					],
					list: [
						{
							title: '提交申请',
							icon: './static/images/cooperation/p1.png'
						},
						{
							title: '资质审核',
							icon: './static/images/cooperation/p2.png'
						},
						{
							title: '签约合作',
							icon: './static/images/cooperation/p4.png'
						},
						{
							title: '洽谈方案',
							icon: './static/images/cooperation/p3.png'
						}
					],
					tel: '加盟热线:400-8868-163'
				}
			}
		},
		methods: {
			isType (obj, type) {
				return toType(obj) === type
			},
			typeCls (obj) {
				let type = null
				let Cls = ''
				let last = false
				_.map(obj, v => {
					if (v.dir !== undefined && v.dir === 'bottom') {
						last = true
					}
					type = toType(v)
				})
				Cls = type === 'number' ? 'group-num' : ( last ? 'group-last' : (type === 'array' ? 'group-single-line' : 'group-line'))
				return Cls
			}
		},
		components:{
			Banner,
			Swiper,
		}
	}
</script>

<style>

</style>
