import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <div className="body">
        <div className="contentWrapper">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <div className="footer">
          <Footer />
        </div>
      
    </>
  );
};

export default Layout;