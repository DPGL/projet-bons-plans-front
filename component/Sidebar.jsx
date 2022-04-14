import React from "react"
import "../component/Sidebar.css";
import { BsSearch } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai'

const Sidebar = () => {
  
    return (
      <div className="sidebar">
        <div className="content">
          <ul>
            <li><img src="./images/logo2.png" alt="logo-maji" id="maji" /></li>
          </ul>
          <ul className="iconeNav">
            <li><img src="./images/search.png" alt="icone_search" id="iconeSearch" /></li>
            <li><img src="./images/iconeplus.png" alt="icone_plus" id="iconePlus" /></li>
            <li><img src="./images/icone_fb.png" alt="icone_fb" id="iconeFb" /></li>
            <li><img src="./images/icone_insta.png" alt="icone_insta" id="iconeInsta" /></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  
  

  