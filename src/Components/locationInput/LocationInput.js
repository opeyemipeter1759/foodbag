import React from "react";
import "./Locationinput.css";

const LocationInput = () => {
  return (
    <div className="location-input">
      <select name="location" id="Location" className="location-input">
        <option value="Bodija Market">Bodija Market</option>
        <option value="Sabo Ojoo">Sabo Ojoo</option>
      </select>
    </div>
  );
};

export default LocationInput;
