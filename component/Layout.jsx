import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

import "../component/Main.css"

const Layout = () => {
  return (
    <div className="column">
      <div className="row">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
