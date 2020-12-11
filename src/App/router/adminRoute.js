import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const adminRoute = [
  {
    path: "/web-app",
    exact: true,
    name: "Default",
    component: React.lazy(() => import("../modules/dashboard")),
  },
  {
    path: "/langganan",
    exact: true,
    name: "Langganan",
    component: React.lazy(() => import("../modules/langganan")),
  },
];

export default adminRoute;
