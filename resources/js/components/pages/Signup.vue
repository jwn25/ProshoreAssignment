<template>
  <div>
    <div class="row justify-content-center mt-5 mb-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">User Login</div>
          <div class="card-body">
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right">Full Name</label>
              <div class="col-md-6">
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="form-control"
                  v-model="user.name"
                  autofocus
                  v-validate="'required'"
                />
                <span
                  class="text-danger text-sm"
                  v-show="errors.has('name')"
                >{{ errors.first('name') }}</span>
              </div>
            </div>
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right">Email Address</label>
              <div class="col-md-6">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  name="email"
                  required
                  autocomplete="email"
                  v-model="user.email"
                  v-validate="'required'"
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
                  class="form-control"
                  v-model="user.password"
                  name="password"
                  required
                  ref="password"
                />
                <span
                  class="text-danger text-sm"
                  v-show="errors.has('password')"
                >{{ errors.first('password') }}</span>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="password"
                class="col-md-4 col-form-label text-md-right"
              >Password Confirmation</label>
              <div class="col-md-6">
                <input
                  id="password_confirmation"
                  type="password"
                  v-validate="'required|confirmed:password'"
                  data-vv-as="password"
                  class="form-control"
                  v-model="user.password_confirmation"
                  name="password_confirmation"
                  required
                />
                <span
                  class="text-danger text-sm"
                  v-show="errors.has('password_confirmation')"
                >{{ errors.first('password_confirmation') }}</span>
              </div>
            </div>
            <div class="form-group row mb-0">
              <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary" @click="processSignup">Signup</button>
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
    async processSignup() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        let response = await axios.post("/api/user-signup", this.user);
        if (response.data.success) {
          this.$swal({
            icon: "success",
            title: "Success",
            text: response.data.message,
          });
          this.user = {}
        }
      } catch (error) {
        this.errors.clear();
        let server_errors = error.response.data.errors;
        for (let error_key in server_errors) {
          this.errors.add({
            field: error_key,
            msg: server_errors[error_key][0],
          });
        }
      }
    },
  },
};
</script>