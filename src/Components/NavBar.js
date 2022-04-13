
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <section className="whole-nav-content">
        <IconContext.Provider value={{ color: "black" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <div className="nav-content">
            <img src ="./images/orangelogo.png" className="orangelogo"/>
              <p className="par1">IT MAKES CENTS</p>
              <p className="par2">FREE NATIONWIDE SHIPPING</p>
              <div className="submit-btn">
              <button>Call Us Today</button>
              </div>
            </div>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </section>
      <section className="secondnav">
        
      <img src ="./images/orangelogo.png" className="orangelogo"/>
          <div className="par3">
            <p>FREE NATIONWIDE SHIPPING 565-786-8978</p>
            <p>LEADER IN CHILDCARE JUICE!</p>
            <nav className="listednav">
              <ul className='listedlinks'>
                <Link to="/Home" className="link-color">Home</Link>
                <Link to="/About" className="link-color">About</Link>
                <Link to="/Products" className="link-color">Products</Link>
                <Link to="/Order" className="link-color">Order</Link>
                <Link to="/contact" className="link-color">Contact</Link>
              </ul>
            </nav>
          </div>
      </section>
    </>
  );
}

export default Navbar;
