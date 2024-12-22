import React from "react";
import Title from "./Title";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Title />
      <div>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>{" "}
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
