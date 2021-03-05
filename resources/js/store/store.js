/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)
export default new Vuex.Store({
    mutations,
    state,
    actions,
    strict: process.env.NODE_ENV !== 'production'
})
