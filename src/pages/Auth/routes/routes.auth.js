import { redirectIfLoggedIn } from "@/utils/routeGuards";

const AuthRoutes = [
  {
    path: "/auth",
    component: () => import("../Auth"),
    children: [
      {
        path: "login",
        name: "login",
        components: {
          authCard: () => import("../components/LoginCard")
        }
      },
      {
        path: "register",
        name: "register",
        components: {
          authCard: () => import("../components/SignupCard")
        }
      }
    ],
    beforeEnter: redirectIfLoggedIn
  }
];

export default AuthRoutes;
