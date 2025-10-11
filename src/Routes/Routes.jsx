import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import AllApp from "../Pages/AllApp/AllApp";
import Page from "../Pages/Error/Page";
import Installation from "../Pages/Installation/Installation";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    errorElement: Page,
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
      }
    ]
  },
]);