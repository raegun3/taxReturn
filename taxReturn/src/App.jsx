import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import AccountingAdvisory from "./pages/Accounting&Advisory";
import ContactMe from "./pages/ContactMe";
import OnSpotTaxReturn from "./pages/OnSpotTaxReturn";
import FeesAndCharges from "./pages/feesAndCharges";
import HelpfulResources from "./pages/helpfulResources";
import Consent from "./pages/Consent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MainPage />}, // Default route inside Layout
      { path: "AccountingAdvisory", element: <AccountingAdvisory /> },
      { path: "ContactMe", element: <ContactMe /> },
      { path: "OnSpotTaxReturn", element: <OnSpotTaxReturn /> },
      { path: "FeesAndCharges", element: <FeesAndCharges />},
      { path: "HelpfulResources", element: <HelpfulResources />},
      { path: "consent", element: <Consent />},
      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;