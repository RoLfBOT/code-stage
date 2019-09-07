import { redirectIfLoggedIn } from "@/utils/routeGuards";

const LoginRoutes = [
  {
    path: "/login",
    name: "login-page",
    component: () => import("../Login.vue"),
    beforeEnter: redirectIfLoggedIn
  }
];

export default LoginRoutes;
