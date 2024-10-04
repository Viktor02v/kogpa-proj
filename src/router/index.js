import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router'

let auth;


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [	
	 {
		path: '/',
		name: 'home',
		component: () => import('../views/HomeView.vue')
	 },
	 {
		path: '/sing-in',
		name: 'sing-in',
		component: () => import('../views/SingInView.vue')
	 },
	 {
		path: '/tools',
		name: 'tools',
		component: () => import('../views/ToolsView.vue'),
		meta: {
			requiresAuth: true
		},
	 }
  ]
})

const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const removeListener = onAuthStateChanged(getAuth(), (user) => {
			removeListener();
			resolve(user);
		}, reject);
	})
}

router.beforeEach(async(to, from, next) => {
	if(to.matched.some(record => record.meta.requiresAuth)) {
if(await getCurrentUser()) {
	next();
} else {
	alert('You must sign in to view this page');
	next('/sing-in');
}
	} else{
		next();
	}

})
export default router
