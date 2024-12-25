import React, { useEffect, useState } from "react";
import { MENU_API_URL } from "../constants";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(MENU_API_URL + id);
    const json = await data.json();
    setRestaurantMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    );
  }
  return restaurantMenu;
};

export default useRestaurantMenu;
