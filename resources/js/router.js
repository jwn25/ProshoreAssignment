import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: "/",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: routes,
});

// router.afterEach(() => {
//   // Remove initial loading
//   const appLoading = document.getElementById("loading-bg");
//   if (appLoading) {
//     appLoading.style.display = "none";
//   }
// });

// router.beforeEach((to, from, next) => {
//   store.dispatch("settings/fetchSettings", { next, once: true });

//   // If auth required, check login. If login fails redirect to login page
//   if (to.matched.some((m) => m.meta.authRequired)) {
//     let userType = (to.meta.rule !== 'public') ? to.meta.rule : 'admin'
//     if (!store.state.auth.isUserLoggedIn()) {
//       if (to.path === "/") {
//         router.push({ path: `/${userType}/login` });
//       } else {
//         router.push({ path: `/${userType}/login`, query: { to: to.path } });
//       }
//     }
//   } else if (to.meta.noAuth) {
//     if (store.state.auth.isUserLoggedIn()) {
//       let userType = to.meta.userType ? to.meta.userType : "admin";
//       router.push({ path: `/${userType}/dashboard` });
//     }
//   }

//   return next();
// });

export default router;
