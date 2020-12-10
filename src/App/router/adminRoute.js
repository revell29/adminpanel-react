import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import("../modules/dashboard"));

const adminRoute = [{ path: "/web-app", exact: true, name: "Default", component: Dashboard }];

export default adminRoute;
