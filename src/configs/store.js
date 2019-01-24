import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentClassnav: '男科用药',
        currentPage: '首页',
    },
    mutations: {
        editcurrentClass(state, data) {
            state.currentClassnav = data
        },
        editcurrentPage(state, data) {
            state.currentPage = data
        }
    },
    getters: {
        getcurrentClass(state) {
            return state.currentClassnav 
        },
        getcurrentPage(state) {
            return state.currentPage
        }
    },
    actions: {
        setcurrentClass(context, data) {
            context.commit("editcurrentClass", data);
        },
        setcurrentPage(context, data) {
            context.commit("editcurrentPage", data);
        }
    }
})

export default store