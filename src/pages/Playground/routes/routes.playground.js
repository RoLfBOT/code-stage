const PlaygroundRoutes = [
  {
    path: "/playground",
    name: "playground-page",
    component: () => import("../Playground")
  }
];

export default PlaygroundRoutes;
