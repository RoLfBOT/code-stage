import Vue from "vue";
import Router from "vue-router";

// Routes from all pages
import HomeRoutes from "./pages/Home/routes/routes.home";
import LoginRoutes from "./pages/Login/routes/routes.login";
import SignupRoutes from "./pages/SignUp/routes/routes.signup";

Vue.use(Router);

export default new Router({
  routes: [...HomeRoutes, ...LoginRoutes, ...SignupRoutes]
});
