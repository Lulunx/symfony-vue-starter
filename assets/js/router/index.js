import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as auth } from "../views/auth/routes";
import { routes as home } from "../views/home/routes";
import { routes as sort } from "../views/sort/routes";

Vue.use(VueRouter)

const routes = [

	...auth,
	...home,
	...sort,

	// Redirect to home page, if no match found
	{
		path: '*',
		redirect: '/'
	}
]

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}  
})

export default router
