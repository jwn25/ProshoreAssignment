
const routes = [
  {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
    path: "/",
    component: () => import("./components/layouts/Main.vue"),
    // beforeEnter(to, from, next) {
    //   store.dispatch("settings/fetchSettings", {next});
    // },
    children: [
      {
        path: "/",
        name: "home-page",
        component: () => import("./components/pages/Home.vue"),
        meta: {
          rule: "admin",
        },
      },

      {
        path: "/login",
        name: "user-login",
        component: () => import("./components/pages/Login.vue"),
        meta: {
          noAuth: true,
          rule: "admin",
        },
      },

      {
        path: "/signup",
        name: "user-signup",
        component: () => import("./components/pages/Signup.vue"),
        meta: {
          noAuth: true,
          rule: "admin",
        },
      },
    ],
  },
  {
    path: "*",
    redirect: "./components/pages/Error404.vue",
  },
];

export default routes;
