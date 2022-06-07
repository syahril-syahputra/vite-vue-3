import {createRouter, createWebHistory} from 'vue-router';
import dashboardVue from '../pages/dashboard.vue';
import loginVue from '../pages/login.vue';
import registrationVue from '../pages/registration.vue';


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
    },
    {
        path: '/registration',
        name: 'registration',
        component : registrationVue
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