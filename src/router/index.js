import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(VueRouter)
Vue.use(MintUI)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('../views/index.vue')
	},
	{
		path: '/app1',
		name: 'app1',
		component: () => import('../views/app1.vue')
	},
	{
		path: '/app2',
		name: 'app2',
		component: () => import('../views/app2.vue')
	},
	{
		path: '/app3',
		name: 'app3',
		component: () => import('../views/app3.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
