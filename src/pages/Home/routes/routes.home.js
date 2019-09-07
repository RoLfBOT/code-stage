import Home from "../Home.vue";
import { redirectIfLoggedIn } from "@/utils/routeGuards";

const HomeRoutes = [
  {
    path: "/",
    name: "home-page",
    component: Home,
    beforeEnter: redirectIfLoggedIn
  }
];

export default HomeRoutes;
