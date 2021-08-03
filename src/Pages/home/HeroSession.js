import React from "react";
import Card from "react-bootstrap/Card";
import "./Home.css";
import LocationInput from "./../../Components/locationInput/LocationInput";
import PickInterest from "../../Components/PickInterest/PickInterest";
import fastFood from "../../Assets/Images/fast-food.svg";
import drinkCocktail from "../../Assets/Images/Drinks & Cocktails.svg";
import resturant from "../../Assets/Images/resturant.svg";
import vegeFruit from "../../Assets/Images/Vegetables-Drinks.svg";
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
        <PickInterest
          foodImg={fastFood}
          category="Fast Food"
          description="All sorrows are less with bread"
        />

        <PickInterest
          foodImg={vegeFruit}
          category="Fast Food"
          description="All sorrows are less with bread"
        />

        <PickInterest
          foodImg={drinkCocktail}
          category="Fast Food"
          description="All sorrows are less with bread"
        />
        <PickInterest
          foodImg={resturant}
          category="Fast Food"
          description="All sorrows are less with bread"
        />
      </div>
    </>
  );
};

export default HeroSession;
