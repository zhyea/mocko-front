import {createApp} from 'vue'
import {createPinia} from "pinia"


import * as icons from '@element-plus/icons-vue'

import './assets/style.css'
import './assets/icons.css'

import App from './App.vue'
import Router from './router/index.js'

const pinia = createPinia()

const app = createApp(App);

app.use(Router).use(pinia);

for (const iconName in icons) {
    if (Reflect.has(icons, iconName)) {
        app.component(iconName, icons[iconName])
    }
}

app.mount('#app')
