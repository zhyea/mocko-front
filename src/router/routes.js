import authRoutes from '@/view/auth/routes'
import dashboardRoutes from '@/view/dashboard/routes'
import projectsRoutes from '@/view/projects/routes'
import usersRoutes from '@/view/users/routes'

import NotFoundPage from '@/view/error/NotFound.vue'
import HomePage from "@/view/home/Home.vue";


const routes = [
	{
		name: 'Home',
		path: '/',
		component: HomePage,
		meta: {
			title: '首页',
		},
		children: [
			...dashboardRoutes,
			...projectsRoutes,
			...usersRoutes,
		],
	},
	...authRoutes,
	{
		path: "/:pathMatch(.*)*", component: NotFoundPage, name: 'notFound'
	}
]

export default routes