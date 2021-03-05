/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const mutations = {
 
  UPDATE_USER_INFO(state, payload) {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    // console.log(Object.keys(payload));
    // for (const property of Object.keys(payload)) {
    //   if (payload[property] != null) {
    //     state.AppActiveUser[property] = payload[property]
    //     userInfo[property] = payload[property]
    //   }
    // }
    state.AppActiveUser = payload
    localStorage.setItem("userInfo", JSON.stringify(payload))
  },

  SET_BEARER(state, accessToken) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
  }
}
export default mutations

