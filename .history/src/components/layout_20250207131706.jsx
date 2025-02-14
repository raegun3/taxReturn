import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css"; // Import the CSS file
import Showcase1 from "../pages/Mains/Showcase1";

const Layout = () => {
  return (
    <>
    <div className="layout-container">
        <Navbar />
    </div>
    <div className="layout-content">
      <Outlet />
    </div>
    </>
  );
};

export default Layout;