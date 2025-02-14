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
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/itskills",
                element: <itskills />,
            }
        ]
            }
])