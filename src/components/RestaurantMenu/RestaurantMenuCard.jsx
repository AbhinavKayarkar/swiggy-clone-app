import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/cartSlice";

const RestaurantMenuCard = ({ items, extra }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    setIsVisible(!isVisible);
    setIndex(i);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      {items?.map((item, i) => {
        return (
          <div key={i}>
            <p
              className="bg-yellow-300 text-start m-2 p-3"
              onClick={() => handleClick(i)}
            >
              {item.title}
            </p>
            {isVisible &&
              index === i &&
              item?.itemCards?.map((i) => {
                return (
                  <div key={i.card.info.id} className="flex justify-between">
                    <p className="text-start">
                      <p className="py-1 px-3">{i.card.info.name} </p>
                      <p className="py-1 px-3">
                        Rs.{" "}
                        {i.card.info.price / 100 ||
                          i.card.info.defaultPrice / 100}
                      </p>
                    </p>

                    <button
                      onClick={() => handleAddToCart(i.card.info)}
                      className="bg-green-500 text-white m-2 px-4 rounded-full"
                    >
                      Add
                    </button>
                  </div>
                );
              })}
          </div>
        );
      })}
      {extra?.map((i) => {
        return (
          <div key={i.card.info.id}>
            <p
              className="bg-yellow-300 text-start m-2 p-3"
              onClick={() => handleClick(i)}
            >
              {i.card.info.name}
            </p>

            {isVisible && (
              <div key={i.card.info.id} className="flex justify-between">
                <p className="text-start">
                  <p className="py-1 px-3">{i.card.info.name} </p>
                  <p className="py-1 px-3">
                    Rs.{" "}
                    {i.card.info.price / 100 || i.card.info.defaultPrice / 100}
                  </p>
                </p>

                <button
                  onClick={() => handleAddToCart(i.card.info)}
                  className="bg-green-500 text-white m-2 px-4 rounded-full"
                >
                  Add
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenuCard;
