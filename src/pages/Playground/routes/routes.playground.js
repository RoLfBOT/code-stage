import { requireAuth } from "@/utils/routeGuards";

const PlaygroundRoutes = [
  {
    path: "/playground",
    name: "new",
    component: () => import("../Playground"),
    beforeEnter: requireAuth
  },
  {
    path: "/playground/s/:id",
    name: "saved",
    component: () => import("../Playground"),
    beforeEnter: requireAuth
  }
];

export default PlaygroundRoutes;
