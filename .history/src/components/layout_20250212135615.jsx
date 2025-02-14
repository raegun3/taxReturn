import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <div className="wrapper">
      <div className="contentWrapper">
        <Navbar />
        
      </div>
        <div className="content1">
          <Outlet />  
        </div>
        
      </div>
      
      
    </>
  );
};

export default Layout;