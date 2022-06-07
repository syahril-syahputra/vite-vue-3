import {createRouter, createWebHistory} from 'vue-router';
import dashboardVue from '../pages/dashboard.vue';
import loginVue from '../pages/login.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component : loginVue
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component : dashboardVue
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router