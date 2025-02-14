import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <div className="flex h-full">
        <Navbar />
        <div>
          <Outlet />
        
        </div>
        
        <Footer />
      </div>
      
      
    </>
  );
};

export default Layout;