import React, { Component } from "react";
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

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      isMobile: window.innerWidth <= 768,
      activeSubMenu: null,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    this.setState({ isMobile });
    if (!isMobile) {
      this.setState({ isOpen: true });
    }
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  toggleSubMenu = (index) => {
    this.setState((prevState) => ({
      activeSubMenu: prevState.activeSubMenu === index ? null : index,
    }));
  };

  render() {
    const { isOpen, isMobile, activeSubMenu } = this.state;

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
      { name: "Coupons", icon: <FaTags />, link: "/coupons" },
      { name: "Change Password", icon: <FaLock />, link: "/change-password" },
    ];

    return (
      <div
        className={`sidebar ${isOpen ? "open" : "collapsed"} ${
          isMobile ? "mobile" : ""
        }`}
      >
        {isMobile && (
          <div className="sidebarHeader">
            <h2 className="logo">{isOpen ? "Fabric ERP" : "ERP"}</h2>
            <button className="toggleButton" onClick={this.toggleSidebar}>
              <FaBars />
            </button>
          </div>
        )}

        {/* Menu Items */}
        <ul className={`menu ${isMobile && !isOpen ? "collapsedMenu" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="menuItem">
              {item.link ? (
                <NavLink
                  to={item.link}
                  className="menuItemContent"
                  activeClassName="active"
                  onClick={() => this.setState({ activeSubMenu: null })}
                >
                  <div className="icon">{item.icon}</div>
                  {isOpen && <span>{item.name}</span>}
                </NavLink>
              ) : (
                // Otherwise, render a clickable div for submenus
                <div
                  className="menuItemContent"
                  onClick={() => this.toggleSubMenu(index)}
                >
                  <div className="icon">{item.icon}</div>
                  {isOpen && <span>{item.name}</span>}
                </div>
              )}

              {item.subMenu && (
                <ul
                  className={`subMenu ${
                    activeSubMenu === index ? "open" : ""
                  }`}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="subMenuItem">
                      <NavLink
                        to={subItem.link}
                        activeClassName="active"
                        onClick={() => this.setState({ activeSubMenu: null })}
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
        <div className="logoutButtonWrapper">
          <button className="logoutButton">
            <FaSignOutAlt className="icon" />
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
