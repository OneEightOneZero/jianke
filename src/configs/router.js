import App from '../App.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

import Xindex from '../pages/Xindex.vue'
import Classify from '../pages/Classify.vue'
import News from '../pages/News.vue'
import Mine from '../pages/Mine.vue'
import Car from '../pages/Car.vue'
import Xuser from '../components/Xuser.vue'


import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/app',
        name: 'app',
        component: App,
        children: [
            { path: 'xindex', name: 'xindex', component: Xindex },
            { path: 'classify', name: 'classify', component: Classify },
            { path: 'news', name: 'news', component: News },
            { path: 'car', name: 'car', component: Car },
            { path: 'mine', name: 'mine', component: Mine}
          ]
    },
    {path:'/login',name: 'login',component: Login},
    {path:'/register',name: 'register',component: Register},
    { path: '/', redirect: { name: 'xindex' }}
]

const router = new VueRouter({
    mode: "hash",
    routes
})

export default router;