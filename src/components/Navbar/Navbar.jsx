import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.style.css";

const Navbar = () => {
  const Active = {
    color: "#264653",
    textDecoration: "none",
    fontSize: "18px",
    borderRadius: "10px",
    backgroundColor: "#e9c46a",
    padding: "10px",
  };
  const NonActive = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <nav className="navbar">
      <h3 className="nav-brand">Reading Store</h3>
      <NavLink to="/" style={({ isActive }) => (isActive ? Active : NonActive)}>
        Home
      </NavLink>
      <NavLink
        to="/master-data"
        style={({ isActive }) => (isActive ? Active : NonActive)}
      >
        Master Data
      </NavLink>
    </nav>
  );
};

export default Navbar;
