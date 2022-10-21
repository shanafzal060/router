import { createWebHistory,createRouter } from "vue-router";
import homeComp from './components/homeComp'
import contactComp from './components/contactComp'
import settingComp from './components/settingComp'

const routes=[
    {
        name:'homeComp',
        path:'/',
        component:homeComp
    },
    {
        name:'contactComp',
        path:'/contact',
        component:contactComp
    },
    {
        name:'settingComp',
        path:'/setting',
        component:settingComp
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;