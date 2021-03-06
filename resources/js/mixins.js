const systemMixin = {
  methods: {
    isUserLoggedIn() {
    return (localStorage.getItem('userInfo')) ? true : false
    },
  }
};

export {
  systemMixin,
}
