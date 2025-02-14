import Navbar from "./navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div >
        <Navbar />
        <main className="container justify-content-center">
            <Outlet />
        </main>
    </div>
  );
};

export default Layout;