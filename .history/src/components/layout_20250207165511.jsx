import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <div className="container">
      <Navbar />
      </div>
      <div className="content">
      <Outlet />
      </div>
    </>
  );
};

export default Layout;