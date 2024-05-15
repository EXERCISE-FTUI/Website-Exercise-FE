import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import "./index.css"

import App from "./App"
import ExTicle from "./pages/ExTicle"
import Landing from "./pages/Landing"
import Features from "./pages/Features"
import AboutUs from "./pages/AboutUs";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Landing />,
      },
      {
        path: "/exticle",
        element: <ExTicle />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
])

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
