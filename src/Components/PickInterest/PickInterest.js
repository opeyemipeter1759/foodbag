import React from "react";
import "./PickInterest.css";

const PickInterest = ({ foodImg, category, description }) => {
  return (
    <div className="pick-interest">
      <div>
        <img src={foodImg} alt="Food" />
        <div className="pick-interest-category">
          <h3>{category}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PickInterest;
