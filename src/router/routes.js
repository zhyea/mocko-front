import authRoutes from '@/view/auth/routes'
import dashboardRoutes from '@/view/dashboard/routes'

import NotFoundPage from '@/view/error/NotFound.vue'
import HomePage from '@/App.vue'


const routes = [
	{
		name: 'Home',
		path: '/',
		meta: {
			title: 'Home',
		},
		redirect: {
			name: 'Login'
		},
		component: HomePage
	},
	...authRoutes,
	...dashboardRoutes,
	{
		path: "/:pathMatch(.*)*", component: NotFoundPage, name: 'notFound'
	}
]

export default routes