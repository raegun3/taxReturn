import Navbar from "./navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="container text-center">
        <Navbar />
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default Layout;