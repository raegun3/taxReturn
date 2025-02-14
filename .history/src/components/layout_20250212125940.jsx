import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      
      <Navbar />
      <div className="">
      <Outlet />
      </div>
      
      <Footer />
      
    </>
  );
};

export default Layout;