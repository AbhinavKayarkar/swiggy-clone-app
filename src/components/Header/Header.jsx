import React from "react";
import Title from "./Title";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-orange-200 shadow-fuchsia-200">
      <Title />
      <div>
        <nav>
          <ul className="flex justify-around px-2 m-10">
            <Link to="/">
              <li className="px-4">Home</li>{" "}
            </Link>
            <Link to="/about">
              <li className="px-4">About</li>
            </Link>
            <Link to="/contact">
              <li className="px-4">Contact</li>
            </Link>
            <Link to="/cart">
              <li className="px-4">Cart</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
