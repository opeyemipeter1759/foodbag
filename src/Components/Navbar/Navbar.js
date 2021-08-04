import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
const Navbar = () => {
  return (
    <div className="foodbag-navbar">
      <div>
        <Logo />
      </div>
      <ul className="foodbag-nav-menu">
        <li className="foodbag-nav-item">Cart</li>
        <li className="foodbag-nav-item">Login</li>
        <li className="signup-item">Sign Up</li>
      </ul>
    </div>
  );
};

export default Navbar;
