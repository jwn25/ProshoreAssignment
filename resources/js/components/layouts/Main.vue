<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="/images/logo.png" width="100" class="d-inline-block align-top" alt />
            <span class="logo-text">World News</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/news">News</router-link>
              </li>
                 <li class="nav-item">
                <router-link class="nav-link" to="/headlines">Headlines</router-link>
              </li>
            </ul>
            <ul class="navbar-nav my-2 my-lg-0" v-if="!isUserLoggedIn()">
              <li class="nav-item">
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/signup">Signup</router-link>
              </li>
            </ul>
            <ul class="navbar-nav my-2 my-lg-0" v-else>
              <li class="nav-item">
                <a href="#" class="text-light">{{ activeUserInfo.name }}</a>
              </li>
              <li class="nav-item ml-3">
                <a href="#" class="text-light" @click="logout">
                  <i class="bi-box-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="main-body">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <footer class="text-light navbar-dark bg-dark p-3 mt-4">
      <div class="container">
        <p>Developed by Jeevan Dhakal!</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  methods: {
    logout() {
      if (localStorage.getItem("accessToken")) {
        localStorage.removeItem("accessToken");
        this.$store.dispatch("updateUserInfo", {});
        localStorage.removeItem("userInfo");
        this.$router.push("/login").catch(() => {});
      }
    },
  },
};
</script>