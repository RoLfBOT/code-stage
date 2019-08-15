import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "signup",
      component: () => import("./views/Signup.vue")
    },
    {
      name: "playground",
      path: "/user",
      children: [
        {
          path: "playground",
          component: () => import("./views/Playground.vue")
        }
      ],
      component: () => import("./views/BaseLayout.vue")
    }
  ]
});
