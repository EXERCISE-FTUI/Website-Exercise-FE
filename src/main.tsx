import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"


import App from "./App"
import "./index.css"

import ExTiclePage from "./pages/ExTicle"
import LandingPage from "./pages/Landing"
import FeaturesPage from "./pages/Features"
import AboutUsPage from "./pages/AboutUs"
import DisplayArticle from "./pages/ExTicle/displayArticle"
import PastProjectPage from "./pages/PastProject"
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
      {
        path: "exticle/:articleFile",
        element: <DisplayArticle />,
      },
      {
        path: "/features",
        element: <FeaturesPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage/>,
      },
      {
        path: "/past-projects",
        element: <PastProjectPage/>,
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