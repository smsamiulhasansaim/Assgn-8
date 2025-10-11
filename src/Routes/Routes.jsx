import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import AllApp from "../Pages/AllApp/AllApp";
import Installation from "../Pages/Installation/Installation";
import PageDetails from "../Pages/PageDetails/PageDetails";
import Page404 from "../Pages/ErrorPAges/Page404";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
   errorElement: <Page404></Page404>, 

    children:[
      {
      index:true,
      path:'/',
      Component: Home
      },
      {
        path:'/AllApp',
        Component: AllApp
      },
      {
        path:'/Installation',
        Component: Installation
      },
      {
      path:'/PageDetails',
      Component: PageDetails
      }
    ]
  },
]);