import React from "react";
import "./Vendorfoodlist.css";

const VendorFoodList = ({
  foodImg,
  foodName,
  foodPrice,
  addToCart,
  remove,
}) => {
  return (
    <div className="foodlist">
      <div className="food-card">
        <img src={foodImg} alt="foodlist" />
      </div>
      <div className="foodcard-details">
        <h3>{foodName}</h3>
        <p> #{foodPrice}</p>
      </div>

      <div className="add-remove">
        <button className="addtocard">{addToCart}</button>
        <button className="remove">
          <i class="fas fa-minus-circle"></i>
          {remove}
        </button>
      </div>
    </div>
  );
};

export default VendorFoodList;
