import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const total = [];
  return (
    <div className="text-center bg-gray-200 m-2">
      {items?.map((item) => {
        {
          total?.push(item?.price / 100 || item?.defaultPrice / 100);
        }
        return (
          <div className="flex justify-between items-center ml-96 mr-96 border">
            <p className="text-md">{item?.name}</p>
            <p>Price : {item?.price / 100 || item?.defaultPrice / 100}.00</p>
          </div>
        );
      })}
      <p>---------------------------------------------------------------------------------------</p>
      <p className="flex justify-between items-center ml-96 mr-96 border">
        <p>Payable</p>
        <span> Total : {total.reduce((acc, curr) => (acc = acc + curr), 0)}.00 </span>
      </p>
    </div>
  );
};

export default Cart;
