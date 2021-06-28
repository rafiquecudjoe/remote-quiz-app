import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster

const Createaquiz = lazy(() => import("../pages/dashboard/createAQuiz"));
const Classes = lazy(() => import("../pages/Classes"));
const Quizes = lazy(() => import("../components/appcomponents/Quizes"));
const Layout = lazy(() => import("../pages/dashboard/Layout"));
const Help = lazy(() => import("../pages/Help"));
const Settings = lazy(() => import("../pages/Settings"));
const TakeAQuiz = lazy(() => import("../pages/TakeAQuiz"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard/app", // the url
    component: Layout, // view rendered
  },
  {
    path: "/takeaquiz",
    component: TakeAQuiz,
  },
  {
    path: "/classes",
    component: Classes,
  },
  {
    path: "/createaquiz",
    component: Createaquiz,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/help",
    component: Help,
  },
];

export default routes;
