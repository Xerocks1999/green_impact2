import { createRouter, createWebHistory } from 'vue-router'
import ConnectionPage from '../components/vues/ConnectionPage.vue'
import LoginPage from '../components/vues/LoginPage.vue'
import RegisterPage from '../components/vues/RegisterPage.vue'
import HomepageEmploye from '../components/vues/HomepageEmploye.vue'
import HomepageAdmin from '../components/vues/HomepageAdmin.vue'
import MesVoyages from '../components/vues/MesVoyages.vue'
import CalculVoyage from '../components/vues/CalculVoyage.vue'

const routes = [
    {
        name: ConnectionPage,
        path: '/',
        component: ConnectionPage
    },
    {
        name: LoginPage,
        path: '/login',
        component: LoginPage
    },
    {
        name: RegisterPage,
        path: '/register',
        component: RegisterPage
    },
    {
        name: HomepageEmploye,
        path: '/home-employe',
        component: HomepageEmploye
    },
    {
        name: HomepageAdmin,
        path: '/home-admin',
        component: HomepageAdmin
    },
    {
        name: MesVoyages,
        path: '/mesvoyages',
        component: MesVoyages
    },
    {
        name: CalculVoyage,
        path: '/mesvoyages/:id',
        component: CalculVoyage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;