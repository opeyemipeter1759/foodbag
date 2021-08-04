import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <span className="food">Food</span>
        <span className="bag">Bag</span>
      </div>
    </Link>
  );
};

export default Logo;
