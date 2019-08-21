const SignupRoutes = [
  {
    path: "/register",
    name: "signup-page",
    component: () => import("../Signup.vue")
  }
];

export default SignupRoutes;
