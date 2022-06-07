import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'
import './index.css'
import FontAwesome from './utils/fontawesome'

createApp(App).component("FontAwesomeIcon", FontAwesome).use(createPinia).use(router).mount('#app')
