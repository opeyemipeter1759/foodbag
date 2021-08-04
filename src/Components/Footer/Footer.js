import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <h3>Contact Us</h3>
        <div className="social-icons">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-facebook-f"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Terms &amp; Conditions . Privacy Policy</p>
        <p> &#xA9; copy right 2021 FoodBag is a registered trade mark.</p>
      </div>
    </div>
  );
};

export default Footer;
