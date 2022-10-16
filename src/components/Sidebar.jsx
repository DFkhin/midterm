import React, { useState } from "react";
import {BsTelephoneForward, BsPersonLinesFill,BsSliders,} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    { 
      path: "/venues",
      name: "Venues",
      icon: <BsPersonLinesFill />,
    },
    {
      path: "/services",
      name: "Services",
      icon: <BsTelephoneForward/>,
    },
    {
      path: "/supports",
      name: "Support",
      icon: <BiSupport/>,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "120px" }} className="sidebar">
        <div className="top_section">
          <img src="./images/logo.png" style={{width: isOpen? "40px" : "40px", height: "40px", borderRadius: "40px", marginRight: "20px"}} />
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            MDC-SIS
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <BsSliders onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
            end
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
