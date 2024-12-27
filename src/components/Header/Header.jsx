import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../../../utils/hooks/useOnline";
import {useSelector } from "react-redux";


const Header = () => {
  const items = useSelector((state) => state.cart.items)
  const isOnline = useOnline();
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
              <li className="px-4">Cart- {items.length} items</li>
            </Link>
            <li>{isOnline ? "🟢" : "🔴"}</li>{" "}
            {/** Offile and online functionality checked by useOnline hook */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
