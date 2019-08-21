const LoginRoutes = [
  {
    path: "/login",
    name: "login-page",
    component: () => import("../Login.vue")
  }
];

export default LoginRoutes;
