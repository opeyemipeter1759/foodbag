import React from "react";
import "./Home.css";
import LocationInput from "./../../Components/locationInput/LocationInput";

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
    </>
  );
};

export default HeroSession;
