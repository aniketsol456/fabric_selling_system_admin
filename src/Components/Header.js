import React from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }) => {


    const navigate = useNavigate();

    const gotologin = () => {
        navigate("/");
    }


    return (
        <div className="header">
            <button className="toggleButton" onClick={toggleSidebar}>
                <FaBars />
            </button>
            <h3 className="logo">Admin Fabrico Mart</h3>
            <button className="logoutButton" onClick={gotologin}>
                <FaSignOutAlt />
            </button>
        </div>
    );
};

export default Header;
