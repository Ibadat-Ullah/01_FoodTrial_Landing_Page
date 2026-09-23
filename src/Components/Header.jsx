import React from "react";
import logo from "../assets/logo.jpeg";

const Header = () => {
  return (
    <>
      <header>
        <nav class="navbar">
          <a href="#" class="logo">
            <img src={logo} alt="FoodTrial" />
          </a>

          <ul class="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>

          <div class="nav-right">
            <a href="#" class="location">
              Location
            </a>
            <a href="#" class="cart">
              Cart
            </a>
            <a href="#" class="login">
              Login
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
