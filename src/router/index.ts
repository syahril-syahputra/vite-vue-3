import {createRouter, createWebHistory} from 'vue-router';
import dashboardVue from '../pages/dashboard.vue';
import search from '../pages/search.vue';
import registrationVue from '../pages/registration.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component : dashboardVue
    },
    {
        path: '/search',
        name: 'dashboard',
        component : search
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