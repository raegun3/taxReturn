import Navbar from "./navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div >
        <Navbar />
        <main>
          <div>
            <h1>My First Homepage</h1>
          </div>
            <Outlet />
        </main>
    </div>
  );
};

export default Layout;