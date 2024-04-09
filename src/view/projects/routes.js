import ProjectListPage from './ProjectList.vue'
import MethodPage from './Method.vue'

export default [
	{
		name: 'Project',
		path: '/projects',
		component: ProjectListPage,
		meta: {
			title: '应用',
		},
	},
	{
		name: 'Method',
		path: '/method',
		component: MethodPage,
		meta: {
			title: '方法',
		},
	},
]