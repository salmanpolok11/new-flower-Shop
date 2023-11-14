import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./Layout/Router";
import Home from "./Page/Home";
import Blog from "./Page/Blog";
import Shop from "./Page/Shop";
import About from "./Page/About";
import Login from "./Page/Login";
import Register from "./Page/Register";
import AuthProvider from "./Provider/AuthProvider";
import Profile from "./Page/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/public/Hflower.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
         path: '/profile',
         element: <Profile/>
      },
      
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
