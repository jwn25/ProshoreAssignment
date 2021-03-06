
const routes = [
  {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
    path: "/",
    component: () => import("./components/layouts/Main.vue"),
  
    children: [
      {
        path: "/",
        name: "home-page",
        component: () => import("./components/pages/Home.vue"),
       
      },

      {
        path: "/news",
        name: "news-page",
        component: () => import("./components/pages/News.vue"),
       
      },

      {
        path: "/headlines",
        name: "headlines-page",
        component: () => import("./components/pages/Headlines.vue"),
       
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
