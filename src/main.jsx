import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./Layout/Router";
import Home from "./Page/Home";
import Blog from "./Page/Blog";
import Shop from "./Page/Shop";
import About from "./Page/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router/>,
    children:[
        {
            path: '/',
            element: <Home/>,
        },
        {
           path: '/blog',
           element: <Blog/>
        },
        {
           path: "/shop",
           element: <Shop/>
        },
        {
           path: "/about",
           element: <About/>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
