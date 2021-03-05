
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
        name: "admin-dashboard",
        component: () => import("./components/pages/Home.vue"),
        meta: {
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
