import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import AllApp from "../Pages/AllApp/AllApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,

    children:[
      {
      index:true,
      path:'/',
      Component: Home
      },
      {
        path:'/AllApp',
        Component: AllApp
      }
    ]
  },
]);