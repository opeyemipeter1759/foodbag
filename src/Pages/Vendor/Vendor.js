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

const Vendor = () => {
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
              <VendorFoodList
                foodImg={kfcfood}
                foodName="KFC King Bucket"
                foodPrice="5000"
                addToCart="Add to Cart"
                remove="Remove"
              />
              <VendorFoodList
                foodImg={kfcfood}
                foodName="Zinger Burger"
                foodPrice="3600"
                addToCart="Add to Cart"
                remove="Remove"
              />{" "}
              <VendorFoodList
                foodImg={kfcfood}
                foodName="Chicken Stripes"
                foodPrice="1450"
                addToCart="Add to Cart"
                remove="Remove"
              />{" "}
              <VendorFoodList
                foodImg={kfcfood}
                foodName="Yamilicious"
                foodPrice="900"
                addToCart="Add to Cart"
                remove="Remove"
              />
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
              <VendorFoodList
                foodImg={CRf1}
                foodName="Refuel Max"
                foodPrice="1200"
                addToCart="Add to Cart"
                remove="Remove"
              />
              <VendorFoodList
                foodImg={CRf2}
                foodName="Express meal"
                foodPrice="2000"
                addToCart="Add to Cart"
                remove="Remove"
              />{" "}
              <VendorFoodList
                foodImg={CRf3}
                foodName="Citizen meal"
                foodPrice="1500"
                addToCart="Add to Cart"
                remove="Remove"
              />{" "}
              <VendorFoodList
                foodImg={CRf3}
                foodName="Chruncy wings"
                foodPrice="1750"
                addToCart="Add to Cart"
                remove="Remove"
              />
            </div>
          </div>
          <p className="view-all-mobile">View all</p>

          <hr />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Vendor;
