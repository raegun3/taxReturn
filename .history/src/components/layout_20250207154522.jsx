import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
    <div className="container text-center">
      <div className="layout-container">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Layout;