import Vue from "vue";
import Router from "vue-router";

// Routes from all pages
import HomeRoutes from "./pages/Home/routes/routes.home";
import AuthRoutes from "./pages/Auth/routes/routes.auth";
import PlaygroundRoutes from "./pages/Playground/routes/routes.playground";

Vue.use(Router);

export default new Router({
  routes: [...HomeRoutes, ...AuthRoutes, ...PlaygroundRoutes]
});
