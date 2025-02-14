import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    
    <div className="container">  
        <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
    
  );
};

export default Layout;