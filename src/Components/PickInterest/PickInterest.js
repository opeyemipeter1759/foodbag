import React from "react";
import "./PickInterest.css";
import { Link } from "react-router-dom";

const PickInterest = ({ foodImg, category, description }) => {
  return (
    <div className="pick-interest">
      <div>
        <Link to="/vendor">
          <img src={foodImg} alt="Food" />
          <div className="pick-interest-category">
            <h3>{category}</h3>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PickInterest;
