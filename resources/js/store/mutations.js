const mutations = {
 
  UPDATE_USER_INFO(state, payload) {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    state.AppActiveUser = payload
    localStorage.setItem("userInfo", JSON.stringify(payload))
  },

  SET_BEARER(state, accessToken) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
  }
}
export default mutations

