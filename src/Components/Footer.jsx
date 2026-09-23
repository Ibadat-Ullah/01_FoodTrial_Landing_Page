import React from "react";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-container">
          {/* Brand  */}
          <div class="footer-brand">
            <a href="#" class="footer-logo">
              <img src={logo} alt="FoodTrial" />
            </a>

            <p>
              Discover delicious food, explore local restaurants, and order your
              favorites with FoodTrial.
            </p>
          </div>

          {/* Quick Links */}
          <div class="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Customer</h3>

            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">My Orders</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Contact</h3>

            <ul>
              <li>FoodTrial Support</li>
              <li>ibadatkhanafridi7@gmail.com</li>
              <li>+92 303 9286669</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 FoodTrial. All rights reserved.</p>

          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
