import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxes,
  FaUsers,
  FaFileInvoice,
  FaBars,
  FaUserShield,
  FaLock,
  FaTags,
  FaTruck,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Default closed for mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      if (!isMobileView) setIsOpen(true); // Open sidebar for larger screens
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) setActiveSubMenu(null); // Close submenus when opening sidebar
  };

  const toggleSubMenu = (index) =>
    setActiveSubMenu((prev) => (prev === index ? null : index));

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, link: "/dashboard" },
    {
      name: "Manage Admins",
      icon: <FaUserShield />,
      subMenu: [
        { name: "Admins", link: "/admins" },
        { name: "Roles", link: "/roles" },
      ],
    },
    { name: "Order Management", icon: <FaFileInvoice />, link: "/orders" },
    {
      name: "Store Management",
      icon: <FaBoxes />,
      subMenu: [
        { name: "Fabrics", link: "/fabrics" },
        { name: "Fabric Categories", link: "/fabric-categories" },
        { name: "Fabric Variants", link: "/fabric-variants" },
        { name: "Fabric Width", link: "/fabric-width" },
        { name: "Fabric Weight", link: "/fabric-weight" },
        { name: "Fabric Content", link: "/fabric-content" },
      ],
    },
    { name: "Customer Management", icon: <FaUsers />, link: "/customers" },
    { name: "Shipping", icon: <FaTruck />, link: "/shipping" },
    { name: "Coupons", icon: <FaTags />, link: "/couponview" },
    { name: "Change Password", icon: <FaLock />, link: "/changepass" },
  ];

  return (
    <div
      className={`sidebar ${isOpen ? "open" : "collapsed"} ${isMobile ? "mobile" : ""
        }`}
    >

      {/* Header */}
      <div className="sidebarHeader">
        <button className="toggleButton" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <br/>
        <h3 className="logo">{isOpen ? "  Admin Fabrico Mart" : "Admin"}</h3>
      </div>

      {/* Menu Items */}
      {isOpen && (
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menuItem">
              {item.link ? (
                <NavLink
                  to={item.link}
                  className="menuItemContent"
                  activeClassName="active"
                  onClick={() => setActiveSubMenu(null)}
                >
                  <div className="icon">{item.icon}</div>
                  <span>{item.name}</span>
                </NavLink>
              ) : (
                <div
                  className="menuItemContent"
                  onClick={() => toggleSubMenu(index)}
                >
                  <div className="icon">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              )}
              {item.subMenu && (
                <ul
                  className={`subMenu ${activeSubMenu === index ? "open" : ""
                    }`}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="subMenuItem">
                      <NavLink
                        to={subItem.link}
                        activeClassName="active"
                        onClick={() => setActiveSubMenu(null)}
                      >
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Logout */}
      {isOpen && (
        <div className="logoutButtonWrapper">
          <button className="logoutButton">
            <FaSignOutAlt className="icon" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
