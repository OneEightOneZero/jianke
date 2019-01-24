import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentClassnav: '男科用药',
        currentPage: '首页',
		currentNews:'推荐'
    },
    mutations: {
        editcurrentClass(state, data) {
            state.currentClassnav = data
        },
        editcurrentPage(state, data) {
            state.currentPage = data
        },
		editcurrentNews(state,data){
			state.currentNews = data
		}
    },
    getters: {
        getcurrentClass(state) {
            return state.currentClassnav 
        },
        getcurrentPage(state) {
            return state.currentPage
        },
		getcurrentNews(state) {
			return state.currentNews
		}
    },
    actions: {
        setcurrentClass(context, data) {
            context.commit("editcurrentClass", data);
        },
        setcurrentPage(context, data) {
            context.commit("editcurrentPage", data);
        },
		setNewList(context, data){
			context.commit("editcurrentNews", data);
		},
// 		setdetailList(context, data){
// 			context.commit("editcurrentNews", data);
// 		},
		
    }
})

export default store