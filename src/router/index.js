import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
	{
		path: '/',
		name: 'index',
		component: () => import('@/views/index.vue')
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('@/views/index.vue')
	},
	{
		path: '/order',
		name: 'order',
		component: () => import('@/views/order.vue')
	},
	{
		path: '/setting',
		name: 'setting',
		component: () => import('@/views/setting.vue')
	},
	{
		path: '/usersetting',
		name: 'usersetting',
		component: () => import('@/views/usersetting.vue')
	},

]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
