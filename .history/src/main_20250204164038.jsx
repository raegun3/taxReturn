import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./Router"

import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import NotFound from "./pages/NotFound"
import MainPage from "./pages/MainPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                idex: true,
                path: "",
                element: <MainPage />,
            },
            {
             
            }
        ]
            }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
