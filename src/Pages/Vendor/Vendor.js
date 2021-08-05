import React from "react";
import "./Vendor.css";
import DefaultLayout from "./../../DefaultLayoout/DefaultLayout";
import kfclogo from "./../../Assets/Images/KFC-logo.svg";
import CRlogo from "./../../Assets/Images/Chicken-republic_logo.svg";
import CRf1 from "./../../Assets/Images/food1.svg";
import CRf2 from "./../../Assets/Images/food2.svg";
import CRf3 from "./../../Assets/Images/food3.svg";

import kfcfood from "./../../Assets/Images/kfcfood.svg";
import VendorFoodList from "./VendorFoodList";
import { connect } from "react-redux";

const Vendor = ({ products }) => {
  return (
    <>
      <DefaultLayout>
        <div className="Vendor">
          {/* bread chrumb */}
          <h1>All Vendors</h1>
          {/* kfc */}
          <div className="Vendor-kfc">
            <div className="kfc-header">
              <div>
                <img src={kfclogo} alt="kfc-logo" />
                <span>KFC</span>
              </div>
              <div>
                <p className="view-all">View all</p>
              </div>
            </div>
            <div div className="Vendor-food">
              {products.map((product) => (
                <VendorFoodList key={product.id} foodData={product} />
              ))}
            </div>
          </div>
          <p className="view-all-mobile">View all</p>

          <hr />

          {/* chicken rep */}
          <div className="Vendor-kfc">
            <div className="kfc-header">
              <div>
                <img src={CRlogo} alt="kfc-logo" />
                <span>Chicken republic</span>
              </div>
              <div>
                <p className="view-all">View all</p>
              </div>
            </div>
            <div div className="Vendor-food">
              <VendorFoodList />
              <VendorFoodList />
              <VendorFoodList />
              <VendorFoodList />
            </div>
          </div>
          <p className="view-all-mobile">View all</p>

          <hr />
        </div>
      </DefaultLayout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    chickenRep: state.shop.ChickenRepublic,
  };
};
export default connect(mapStateToProps)(Vendor);
