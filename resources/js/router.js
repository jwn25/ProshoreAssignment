import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
Vue.use(Router);
import store from "./store/store";


const router = new Router({
  mode: "history",
  base: "/",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: routes,
});
 
router.beforeEach((to, from, next) => {
  if (to.meta.noAuth) {
    if (store.state.isUserLoggedIn()) {
      router.push({ path: `/` });
    }
  }
  return next();
});

export default router;
