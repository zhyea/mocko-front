import authRoutes from '@/view/auth/routes'
import dashboardRoutes from '@/view/dashboard/routes'
import homeRoutes from '@/view/home/routes'

import NotFoundPage from '@/view/error/NotFound.vue'


const routes = [
	...homeRoutes,
	...authRoutes,
	...dashboardRoutes,
	{
		path: "/:pathMatch(.*)*", component: NotFoundPage, name: 'notFound'
	}
]

export default routes