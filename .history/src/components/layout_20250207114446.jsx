import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css"; // Import the CSS file

const Layout = () => {
  return (
    <div className="layout-container">
        <Navbar />
        <Outlet />
    </div>
  );
};

export default Layout;