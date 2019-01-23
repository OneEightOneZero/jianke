import App from '../App.vue'
import Home from '../pages/Home.vue'
import Classify from '../pages/Classify.vue'
import Tt from '../pages/Tt.vue'
import Mine from '../pages/Mine.vue'
import Car from '../pages/Car.vue'

import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/app',
        name: 'app',
        component: App,
        children: [
            { path: 'home', name: 'home', component: Home },
            { path: 'classify', name: 'classify', component: Classify },
            { path: 'tt', name: 'tt', component: Tt },
            { path: 'car', name: 'car', component: Car },
            { path: 'mine', name: 'mine', component: Mine}
          ]
    },
    { path: '/', redirect: { name: 'home' }}
]

const router = new VueRouter({
    mode: "hash",
    routes
})

export default router;