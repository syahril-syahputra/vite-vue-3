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

router.beforeEach(async (to) =>{
    const publicPages = ['/', '/login'];
    const authRequired = !publicPages.includes(to.path);
    // const auth = useAuthStore()

    // if(authRequired && !auth.authenticated){
    //     auth.returnPath = to.fullPath;
    //     return '/login'
    // }
})
export default router