import DashboardPage from './dashboard.vue'

export default [
	{
		name: 'Dashboard',
		path: '/dashboard',
		meta: {
			title: 'Dashboard',
			cache: true,
			notClosable: true,
		},
		component: DashboardPage
	},
]