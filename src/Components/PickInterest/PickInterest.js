import React from "react";

const PickInterest = ({ foodImg, category, description }) => {
  return (
    <div className="pick-interest">
      <img src={foodImg} alt="Food" />
      <div className="pick-interest-category">
        <h3>{category}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PickInterest;
