import React from "react";
import Card from "react-bootstrap/Card";
import "./Home.css";
import LocationInput from "./../../Components/locationInput/LocationInput";
import PickInterest from "../../Components/PickInterest/PickInterest";
import fastFood from "../../Assets/Images/fast-food.svg";
import drinkCocktail from "../../Assets/Images/Drinks & Cocktails.svg";
import resturant from "../../Assets/Images/resturant.svg";
import vegeFruit from "../../Assets/Images/Vegetables-Drinks.svg";
import illustrate1 from "../../Assets/Images/Illustration_1.svg";
import illustrate2 from "../../Assets/Images/illustration_2.svg";
import illustrate3 from "../../Assets/Images/illustration_3.svg";

const HeroSession = () => {
  return (
    <>
      <div className="hero-session">
        <div className="hero-session-content">
          <h1>FoodBag</h1>
          <p>Anything food, we have you covered.</p>
        </div>
      </div>
      <div className="location-search">
        <p>Where are you?</p>
        <LocationInput />
      </div>

      <div className="pick-interest-details">
        <p>Pick an interest</p>

        <div className="pick-interest-section">
          <PickInterest
            foodImg={fastFood}
            category="Fast Food"
            description="All sorrows are less with bread"
          />

          <PickInterest
            foodImg={vegeFruit}
            category="Vegetables & Fruits"
            description="May not want it, but good for you"
          />

          <PickInterest
            foodImg={drinkCocktail}
            category="Drink & Cocktails"
            description="I feel sad for those who don't drink it"
          />
          <PickInterest
            foodImg={resturant}
            category="Resturants"
            description="All sorrows are less with bread"
          />
        </div>
      </div>

      <hr />
      <div className="how-we-work">
        <p>How we serve you</p>

        <div className="how-we-work-body">
          <div>
            <img src={illustrate1} alt="illustration" />
            <h3>Tell us where you are</h3>
            <p>Select the location you want us to deliver.</p>
          </div>
          <div>
            <img src={illustrate2} alt="illustration" />
            <h3>Tell us what you want</h3>
            <p>Browse the typeof food that interest you.</p>
          </div>
          <div>
            <img src={illustrate3} alt="illustration" />
            <h3>We'll come running</h3>
            <p>Your order will be delivered to you in no time.</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default HeroSession;
