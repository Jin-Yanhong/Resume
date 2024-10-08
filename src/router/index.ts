import { createRouter, createWebHashHistory as createHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue'),
	},
];

const router = createRouter({
	history: createHistory(process.env.BASE_URL),
	routes,
});

export default router;
