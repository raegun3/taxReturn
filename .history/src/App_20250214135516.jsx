import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import AccountingAdvisory from "./pages/Accounting&Advisory";
import ContactMe from "./pages/ContactMe";
import Showcase1 from "./pages/Mains/Showcase1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MainPage />}, // Default route inside Layout
      { path: "AccountingAdvisory", element: <AccountingAdvisory /> },
      { path: "ContactMe", element: <ContactMe /> },
      { path: "Showcase1", element: <Showcase1 /> },
      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} basename={process.env.PUBLIC_URL} />;
};

export default App;