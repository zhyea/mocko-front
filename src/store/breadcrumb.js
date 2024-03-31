import {defineStore} from "pinia";

export const useBreadcrumbStore = defineStore('breadcrumb', {

	state: () => ({
		local: '',
		breadcrumb: [],
	}),


	actions: {

		set(breadcrumb) {
			let title = []
			this.breadcrumb = breadcrumb.filter(
				item => {
					if (title.indexOf(item.meta.title) >= 0) {
						return false
					}
					title.push(item.meta.title)

					return item.meta.title
				}
			)

			console.log(this.breadcrumb)
		},

	},

})