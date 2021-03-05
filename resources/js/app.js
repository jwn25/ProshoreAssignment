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

import axios from "./axios.js";
import VueAxios from "vue-axios";
Vue.prototype.$http = axios;


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
