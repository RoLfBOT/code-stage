import { redirectIfLoggedIn } from "@/utils/routeGuards";

const SignupRoutes = [
  {
    path: "/register",
    name: "signup-page",
    component: () => import("../Signup.vue"),
    beforeEnter: redirectIfLoggedIn
  }
];

export default SignupRoutes;
