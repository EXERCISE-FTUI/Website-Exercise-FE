import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import "./index.css"

import App from "./App"
import ExTiclePage from "./pages/ExTicle"
import LandingPage from "./pages/Landing"
import Features from "./pages/Features"
import DisplayArticle from "./pages/ExTicle/displayArticle"


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
        path: "exticle/:articleFile",
        element: <DisplayArticle />,
      },
      {
        path: "/features",
        element: <Features />,
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
