import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import SidebarW from "./Sidebar/Sidebar";
import SidebarB from "./Sidebar/BlackSidebar";

import "../component/Main.css"

const Layout = () => {

  const location = useLocation()

  return (
    <div className="column">
      <div className="row">
        {console.log('wurt', location.pathname)}
        {location.pathname === 'Acceuil' ? 
        <SidebarB />
        :
        <SidebarW />
        }
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
