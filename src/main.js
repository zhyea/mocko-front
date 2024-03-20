import {createApp} from 'vue'
import {createPinia} from "pinia"


import './assets/style.css'
import './assets/icons.css'

import App from './App.vue'
import Router from './router/index.js'

const pinia = createPinia()

createApp(App)
	.use(Router)
	.use(pinia)
	.mount('#app')
