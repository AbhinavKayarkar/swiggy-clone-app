import React, { useState } from "react";

const RestaurantMenuCard = ({ items }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [index, setIndex] = useState(0);

  const handleClick = (index) => {
    setIsVisible(!isVisible);
    setIndex(index);
  };

  return (
    <>
      {items?.map((item, i) => {
        return (
          <div key={i}>
            <p
              className="bg-yellow-400 text-start m-2 p-3"
              onClick={() => handleClick(i)}
            >
              {item.title}
            </p>
            {isVisible &&
              index === i &&
              item?.itemCards?.map((i) => {
                return (
                  <div key={i.card.info.id}>
                    <p>{i.card.info.name}</p>{" "}
                  </div>
                );
              })}
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenuCard;
