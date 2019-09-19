import { requireAuth } from "@/utils/routeGuards";

const PlaygroundRoutes = [
  {
    path: "/playground",
    redirect: "/playground/new",
    component: () => import("../Index"),
    children: [
      {
        path: "new",
        name: "new",
        components: {
          playground: () => import("../layouts/EditorLayout")
        }
      },
      {
        path: "s/:id",
        name: "saved",
        components: {
          playground: () => import("../layouts/EditorLayout")
        }
      },
      {
        path: "all",
        name: "all",
        components: {
          playground: () => import("../layouts/SavedList")
        }
      }
    ],
    beforeEnter: requireAuth
  }
];

export default PlaygroundRoutes;
