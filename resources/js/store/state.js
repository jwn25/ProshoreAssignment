const userDefaults = {
}

const userInfoLocalStorage = JSON.parse(localStorage.getItem("userInfo")) || {}
const getUserInfo = () => {
  let userInfo = {}
  Object.keys(userDefaults).forEach((key) => {
    userInfo[key] = userInfoLocalStorage[key] ? userInfoLocalStorage[key] : userDefaults[key]
  })

  Object.keys(userInfoLocalStorage).forEach((key) => {
    if (userInfo[key] == undefined && userInfoLocalStorage[key] != null) userInfo[key] = userInfoLocalStorage[key]
  })

  return userInfo
}

const state = {
  AppActiveUser: getUserInfo(),

  isUserLoggedIn: () => {
    return (localStorage.getItem('userInfo')) ? true : false
  },
}

export default state
