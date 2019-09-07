import { requireAuth } from "@/utils/routeGuards";

const PlaygroundRoutes = [
  {
    path: "/playground",
    name: "playground-page",
    component: () => import("../Playground"),
    beforeEnter: requireAuth
  }
];

export default PlaygroundRoutes;
