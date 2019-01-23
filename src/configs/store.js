import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentClassnav: '男科用药',
    },
    mutations: {
        editcurrentClass(state, data) {
            state.currentClassnav = data
        }
    },
    getters: {
        getcurrentClass(state) {
            return state.currentClassnav 
        }
    },
    actions: {
        setcurrentClass(context, data) {
            context.commit("editcurrentClass", data);
        }
    }
})

export default store