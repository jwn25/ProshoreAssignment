const actions = {
  updateUserInfo({ commit }, payload) {
    commit('UPDATE_USER_INFO', payload)
  }, 

  setBearer({ commit }, payload) {
    commit('SET_BEARER', payload)
  }, 
}

export default actions
