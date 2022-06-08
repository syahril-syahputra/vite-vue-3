import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/css/tansition.css'
import FontAwesome from './utils/fontawesome'
import {createPinia} from 'pinia'

createApp(App).use(createPinia()).component("FontAwesomeIcon", FontAwesome).use(router).mount('#app')
