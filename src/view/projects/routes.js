import ProjectListPage from './ProjectList.vue'
import MethodPage from './Project.vue'

export default [
	{
		name: 'ProjectList',
		path: '/project-list',
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