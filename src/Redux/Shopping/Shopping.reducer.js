import * as actionTypes from "./Shopping.types";
import kfclogo from "./../../Assets/Images/KFC-logo.svg";
import CRlogo from "./../../Assets/Images/Chicken-republic_logo.svg";
import CRf1 from "./../../Assets/Images/food1.svg";
import CRf2 from "./../../Assets/Images/food2.svg";
import CRf3 from "./../../Assets/Images/food3.svg";
import kfcfood from "./../../Assets/Images/kfcfood.svg";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "KFC King Bucket",
      price: 5000,
      image: { kfcfood },
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    {
      id: 2,
      title: "Zinger Burger",
      price: 3600,
      image: { kfcfood },
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    {
      id: 3,
      title: "Chicken Stripes",
      price: 1450,
      image: { kfcfood },
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    {
      id: 4,
      title: "Yamilicious",
      price: 900,
      image: { kfcfood },
      addToCart: "Add to Cart",
      remove: "Remove",
    },
  ],
  ChickenRepublic: [
    {
      id: 1,
      title: "Refuel Max",
      price: 1200,
      image: { CRf1 },
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    {
      id: 2,
      title: "Express meal",
      price: 2000,
      image: { CRf2 },
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    {
      id: 3,
      title: "Citizen meal",
      price: 1500,
      image: { CRf3 },
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    {
      id: 3,
      title: "Chruncy wing",
      price: 1750,
      image: { CRf3 },
      addToCart: "Add to Cart",
      remove: "Remove",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    // case actionTypes.LOAD_CURRENT_ITEM:
    //   return {
    //     ...state,
    //     currentItem: action.payload,
    //   };
    default:
      return state;
  }
};

export default shopReducer;
