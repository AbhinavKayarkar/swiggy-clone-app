import React from "react";
import useRestaurantMenu from "../../../utils/hooks/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  return (
    <>
      {menu?.map((menu, index) => {
        return (
          <>
            <RestaurantMenuCard key={index} items={menu?.card?.card?.categories} />
          </>
        );
      })}
    </>
  );
};

export default RestaurantMenu;
