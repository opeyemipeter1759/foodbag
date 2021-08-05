import React from "react";
import "./Vendorfoodlist.css";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const VendorFoodList = ({ product }) => {
  return (
    <div className="foodlist">
      <div className="food-card">
        <img src={product.image} alt="foodlist" />
      </div>
      <div className="foodcard-details">
        <h3>{product.title}</h3>
        <p> #{product.price}</p>
      </div>

      <div className="add-remove">
        <button className="addtocard">{product.addToCart}</button>
        <button className="remove">
          <i class="fas fa-minus-circle"></i>
          {product.remove}
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default VendorFoodList;
