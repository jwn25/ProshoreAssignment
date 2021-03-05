<template>
  <div>
    <div class="row justify-content-center mt-5 mb-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">User Login</div>
          <div class="card-body">
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right">Email Address</label>
              <div class="col-md-6">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  v-validate="'required|email'"
                  name="email"
                  v-model="user.email"
                  autocomplete="email"
                  autofocus
                />
                <span
                  class="text-danger text-sm"
                  v-show="errors.has('email')"
                >{{ errors.first('email') }}</span>
              </div>
            </div>

            <div class="form-group row">
              <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

              <div class="col-md-6">
                <input
                  id="password"
                  type="password"
                  v-validate="'required'"
                  v-model="user.password"
                  class="form-control"
                  name="password"
                />
                <span
                  class="text-danger text-sm"
                  v-show="errors.has('password')"
                >{{ errors.first('password') }}</span>
              </div>
            </div>
            <div class="form-group row mb-0">
              <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary" @click="processLogin">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async processLogin() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      // try {
      let response = await axios.post("/api/user-login", this.user);
      if (response.data.success) {
        localStorage.setItem("accessToken", response.data.accessToken);

        this.$store.dispatch("updateUserInfo", response.data.userData);
        this.$store.dispatch("setBearer", response.data.accessToken);

        // Update user details
        // commit("UPDATE_USER_INFO", response.data.userData, { root: true });

        // // Set bearer token in axios
        // commit("SET_BEARER", r);
        // router.push(router.currentRoute.query.to || new_route)
        this.$swal({
          icon: "success",
          title: "Success",
          text: "Successfully logged in!",
        });

        router.push("/");
      } else {
        this.$swal({
          icon: "error",
          title: "Error",
          text: "Invalid login credentials!",
        });
      }
      // } catch (error) {
      //   this.errors.clear();
      //   let server_errors = error.response.data.errors;
      //   for (let error_key in server_errors) {
      //     this.errors.add({
      //       field: error_key,
      //       msg: server_errors[error_key][0],
      //     });
      //   }
      // }
    },
  },
};
</script>