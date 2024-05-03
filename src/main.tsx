import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import "./index.css"

import App from "./App"
import ExTiclePage from "./pages/ExTicle"
import LandingPage from "./pages/Landing"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <LandingPage />,
      },
      {
        path: "/exticle",
        element: <ExTiclePage />,
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
