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
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./Sidebar.css";
import Logo from "../assets/images/logo_2.png";

const Sidebar = ({ isOpen }) => {
  const [storeSubmenuOpen, setStoreSubmenuOpen] = useState(false);

  const toggleStoreSubmenu = () => {
    setStoreSubmenuOpen(!storeSubmenuOpen);
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, link: "/dashboard" },
    { name: "Manage Admins", icon: <FaUserShield />, link: "/admins" },
    { name: "Order Management", icon: <FaFileInvoice />, link: "/orders" },
    {
      name: "Store Management",
      icon: <FaBoxes />,
      link: "/fabrics", // main link if needed
      hasSubmenu: true,
      submenu: [
        { name: "Fabrics", link: "/fabrics" },
        { name: "Fabrics Weight", link: "/fabrics-weight" },
        { name: "Fabrics Content", link: "/fabrics-content" },
        { name: "Fabrics Type", link: "/fabrics-type" },
        { name: "Fabrics Width", link: "/fabrics-width" },
        { name: "Fabrics Design", link: "/fabrics-design" },
        { name: "Fabrics Color", link: "/fabrics-color" },
      ],
    },
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
            {item.hasSubmenu ? (
              <>
                {/* Collapsible Menu */}
                <div
                  className="menuItemContent"
                  onClick={toggleStoreSubmenu}
                >
                  <div className="icon">{item.icon}</div>
                  <span>{item.name}</span>
                  <div className="chevron">
                    {storeSubmenuOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                {/* Submenu Items */}
                {storeSubmenuOpen && (
                  <ul className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="submenuItem">
                        <NavLink
                          to={subItem.link}
                          className="submenuItemContent"
                          activeClassName="active"
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <NavLink
                to={item.link}
                className="menuItemContent"
                activeClassName="active"
              >
                <div className="icon">{item.icon}</div>
                <span>{item.name}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
