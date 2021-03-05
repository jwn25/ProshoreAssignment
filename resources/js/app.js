/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue').default;
import Vue from "vue";
import App from "./components/App";
// import vuetify from './plugins/vuetify'

import './filters'
import router from "./router";

import {NewsAxios, ApiAxios} from "./axios.js";
import VueAxios from "vue-axios";
Vue.prototype.$newshttp = NewsAxios;
Vue.prototype.$http = ApiAxios;

Vue.use(VueAxios, ApiAxios);

ApiAxios.interceptors.request.use((config) => {
  let access_token = getStorageItem("accessToken");
  if (access_token && !config.headers.common.hasOwnProperty("Authorization")) {
    config.headers.common.Authorization =
      "Bearer " + getStorageItem("accessToken");
  }
  return config;
});
function getStorageItem(key) {
  return (
      window.sessionStorage.getItem(key) || window.localStorage.getItem(key)
  );
}


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

import { systemMixin } from "./mixins";
Vue.mixin(systemMixin);

import store from "./store/store";

Vue.use(VueAxios, axios);
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
