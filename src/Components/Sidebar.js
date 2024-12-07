import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxes,
  FaUsers,
  FaFileInvoice,
  FaUserShield,
  FaTags,
  FaTruck,
} from "react-icons/fa";
import "./Sidebar.css";
import Logo from "../assets/images/logo_2.png";

const Sidebar = ({ isOpen }) => {

  
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, link: "/dashboard" },
    { name: "Manage Admins", icon: <FaUserShield />, link: "/admins" },
    { name: "Order Management", icon: <FaFileInvoice />, link: "/orders" },
    { name: "Store Management", icon: <FaBoxes />, link: "/fabrics" },
    { name: "Customer Management", icon: <FaUsers />, link: "/customers" },
    { name: "Shipping", icon: <FaTruck />, link: "/shipping" },
    { name: "Coupons", icon: <FaTags />, link: "/couponview" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      {/* Sidebar Header */}
      <div className="sidebarHeader">
        <div className="logoWrapper">
          <img src={Logo} alt="Logo" className="logoImage" />
          <br />
          <span className="logoText">Fabrico Mart</span>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menuItem">
            <NavLink
              to={item.link}
              className="menuItemContent"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
