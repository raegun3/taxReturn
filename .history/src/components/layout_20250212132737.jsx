import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      
      <Navbar />
      <div>
      <Outlet />
      
      </div>
      
      
      <Footer />
      
    </>
  );
};

export default Layout;