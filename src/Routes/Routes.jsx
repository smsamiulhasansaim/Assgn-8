import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Roots from "../Layouts/Roots";
import Page404 from "../Pages/ErrorPAges/Page404";

// Lazy load ---- S M Samiul hasan 
const Home = lazy(() => import("../Pages/Home/Home"));
const AllApp = lazy(() => import("../Pages/AllApp/AllApp"));
const Installation = lazy(() => import("../Pages/Installation/Installation"));
const PageDetails = lazy(() => import("../Pages/PageDetails/PageDetails"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <Page404></Page404>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: '/AllApp',
        Component: AllApp
      },
      {
        path: '/Installation',
        Component: Installation
      },
      {
        path: '/PageDetails',
        Component: PageDetails
      },
    ]
  },
]);