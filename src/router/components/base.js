import Base from '@/components/components/home/BaseModule'
import Home from '@/components/components/home/Home'
import Join from '@/components/components/home/Join'
import Case from '@/components/components/case/Case'
import Aboutus from '@/components/components/aboutus/Aboutus'
import Shop from '@/components/components/shop/Shop'
import News from '@/components/components/news/News'
import NewsDetail from '@/components/components/news/detail/Detail'
import Help from '@/components/components/help/Help'
import Cooperation from '@/components/components/cooperation/Cooperation'

const Router = {
  path: '/',
  meta: {
    index: 0
  },
  component: Base,
  children: [
    {
      path: '',
      name: 'home',
      meta: {
        index: 1
      },
      component: Home
    },
    // {
    //   path: 'join',
    //   name: 'join',
    //   meta: {
    //     index: 2
    //   },
    //   component: Join
    // },
    {
    	path:'shop',
    	name:'shop',
    	meta:{
    		index:2
    	},
    	component: Shop
    },
    {
    	path:'case',
    	name:'case',
    	meta:{
    		index:3
    	},
    	component:Case
    },
    {
    	path:'news',
    	name:'news',
    	meta:{
    		index:4
    	},
    	component:News
      // children: [
      //   {
      //     path: 'detail/:id',
      //     name: 'newsDetail',
      //     meta: {
      //       index: 8
      //     },
      //     component: NewsDetail
      //   }
      // ]
    },
    {
    	path:'help',
    	name:'help',
    	meta:{
    		index:5
    	},
    	component:Help
    },
    {
      path: 'aboutus',
      name: 'aboutus',
      meta: {
        index: 6
      },
      component: Aboutus
    },
    {
      path: 'cooperation',
      name: 'cooperation',
      meta: {
        index: 7
      },
      component: Cooperation
    },
    {
      path: 'news/detail/:id',
      name: 'newsDetail',
      meta: {
        index: 8
      },
      component: NewsDetail
    }
  ]
}

export default Router
